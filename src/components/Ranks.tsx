import { useMemo, useState } from "react";
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Crown, Flame, Medal, MoveUp, Search, Swords } from "lucide-react";
import type { Profile, DB } from "../lib/types";
import { leaderboard } from "../lib/engine";
import { Card } from "../ui";
import { cn } from "../utils/cn";

type SortKey = "score" | "streak" | "volume" | "days" | "level";

export default function Ranks({ db, profile }: { db: DB; profile: Profile }) {
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("score");
  const [asc, setAsc] = useState(false);

  const rows = useMemo(() => leaderboard(db, profile), [db, profile]);
  const you = rows.find((r) => r.you);

  const filtered = useMemo(() => {
    const list = rows.filter((r) => r.name.toLowerCase().includes(q.trim().toLowerCase()));
    const sorted = [...list].sort((a, b) => (a[sortKey] - b[sortKey]) * (asc ? 1 : -1));
    return sorted;
  }, [rows, q, sortKey, asc]);

  const setSort = (k: SortKey) => {
    if (k === sortKey) setAsc((a) => !a);
    else { setSortKey(k); setAsc(false); }
  };

  const Th = ({ k, label, className }: { k: SortKey; label: string; className?: string }) => (
    <th onClick={() => setSort(k)}
      className={cn(
        "cursor-pointer select-none px-3 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-fg",
        sortKey === k ? "text-blood-2" : "text-faint", className,
      )}>
      <span className="inline-flex items-center gap-1">
        {label}
        {sortKey === k && (asc ? <ArrowUpNarrowWide size={11} /> : <ArrowDownWideNarrow size={11} />)}
      </span>
    </th>
  );

  const medal = (rank: number) => {
    if (rank === 1) return <Crown size={16} className="text-gold" />;
    if (rank === 2) return <Medal size={15} className="text-slate-300" />;
    if (rank === 3) return <Medal size={15} className="text-amber-600" />;
    return <span className="font-mono text-xs text-faint">{rank}</span>;
  };

  return (
    <div className="space-y-5">
      {/* Your standing */}
      {you && (
        <Card className="anim-rise relative overflow-hidden border-blood/30 p-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blood/12 via-transparent to-transparent pointer-events-none" />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood-2">Your standing</p>
              <p className="mt-1 font-display text-3xl font-bold uppercase">
                Rank <span className="text-blood-2">#{you.rank}</span>
                <span className="ml-2 text-sm font-medium text-muted normal-case tracking-wide">of {rows.length}</span>
              </p>
            </div>
            <div className="flex items-center gap-5 font-mono text-sm">
              <div className="text-center"><p className="text-lg font-bold">{you.score.toLocaleString()}</p><p className="text-[9px] uppercase tracking-widest text-faint">score</p></div>
              <div className="text-center"><p className="text-lg font-bold flex items-center gap-1"><Flame size={13} className="text-ember" />{you.streak}</p><p className="text-[9px] uppercase tracking-widest text-faint">streak</p></div>
              <div className="text-center"><p className="text-lg font-bold">{you.volume.toLocaleString()}</p><p className="text-[9px] uppercase tracking-widest text-faint">volume</p></div>
            </div>
          </div>
          {you.rank > 1 && (
            <p className="relative mt-3 flex items-center gap-1.5 text-xs text-muted">
              <MoveUp size={13} className="text-emerald-400" />
              {(() => {
                const above = rows.find((r) => r.rank === you.rank - 1);
                return above
                  ? <>Outscore <span className="font-semibold text-fg">{above.name}</span> ({Math.max(1, above.score - you.score + 1).toLocaleString()} more points) to take rank #{you.rank - 1}.</>
                  : null;
              })()}
            </p>
          )}
        </Card>
      )}

      {/* Board */}
      <Card className="anim-rise delay-1 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line p-4 sm:px-5">
          <div className="flex items-center gap-2.5">
            <Swords size={17} className="text-blood-2" />
            <h2 className="font-display text-lg font-semibold uppercase tracking-[0.08em]">Leaderboard</h2>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
              Live
            </span>
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
            <input
              value={q} onChange={(e) => setQ(e.target.value)} placeholder="Find a user…"
              className="w-44 sm:w-56 rounded-lg border border-line-2 bg-ink-2 py-2 pl-9 pr-3 text-xs text-fg placeholder:text-faint outline-none focus:border-blood/70" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead className="border-b border-line bg-ink-2/60">
              <tr>
                <th className="w-14 px-3 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint">Rank</th>
                <th className="px-3 py-3 text-left font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-faint">Athlete</th>
                <Th k="level" label="Level" />
                <Th k="streak" label="Streak" />
                <Th k="volume" label="Volume" />
                <Th k="days" label="Days" />
                <Th k="score" label="Score" className="pr-5" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.name}
                  className={cn(
                    "border-b border-line/60 transition-colors hover:bg-white/[0.025]",
                    r.you && "bg-blood/[0.08] hover:bg-blood/[0.12]",
                  )}>
                  <td className="px-3 py-3">
                    <div className="flex h-7 w-9 items-center justify-center">{medal(r.rank)}</div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      {r.avatar ? (
                        <img src={r.avatar} alt={r.name}
                          className={cn("h-8 w-8 shrink-0 rounded-lg border object-cover",
                            r.you ? "border-blood/50" : "border-line-2")} />
                      ) : (
                        <div className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display text-xs font-bold uppercase",
                          r.you ? "bg-blood text-white" : "bg-panel-2 text-muted border border-line-2",
                        )}>
                          {r.name.slice(0, 2)}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold leading-tight">
                          {r.name}
                          {r.you && <span className="ml-2 rounded bg-blood px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest text-white">You</span>}
                        </p>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-faint">{r.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 font-mono font-bold">{r.level}</td>
                  <td className="px-3 py-3">
                    <span className="inline-flex items-center gap-1 font-mono">
                      <Flame size={12} className={r.streak > 6 ? "text-ember" : "text-faint"} />{r.streak}
                    </span>
                  </td>
                  <td className="px-3 py-3 font-mono text-muted">{r.volume.toLocaleString()}</td>
                  <td className="px-3 py-3 font-mono text-muted">{r.days}</td>
                  <td className="px-3 py-3 pr-5 font-mono font-bold text-fg">{r.score.toLocaleString()}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-10 text-center text-sm text-faint font-mono">No athletes match "{q}".</td></tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="border-t border-line px-4 py-3 text-[10px] font-mono uppercase tracking-[0.16em] text-faint">
          Score = XP × 0.6 + volume × 0.25 + streak × 90 + training days × 35 · updates daily
        </p>
      </Card>
    </div>
  );
}
