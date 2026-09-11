import { BadgeCheck, CheckCircle2, Flame, Info, PartyPopper, Timer, Zap } from "lucide-react";
import type { Challenge, Profile, UserData } from "../lib/types";
import { GOAL_LABEL, GOAL_TAG_COLOR } from "../lib/types";
import { levelFromXp, levelTitle, prettyDate, dateKey } from "../lib/engine";
import { Btn, Card, Ring, Tag } from "../ui";
import { cn } from "../utils/cn";

export default function Today({
  challenges, profile, data, onComplete,
}: {
  challenges: Challenge[];
  profile: Profile;
  data: UserData;
  onComplete: (c: Challenge) => void;
}) {
  const today = dateKey();
  const doneCount = challenges.filter((c) => c.done).length;
  const allDone = challenges.length > 0 && doneCount === challenges.length;
  const lv = levelFromXp(data.xp);
  const name = profile.displayName?.trim() || profile.username;

  return (
    <div className="space-y-5">
      {/* Header strip */}
      <Card className="anim-rise relative overflow-hidden p-5 sm:p-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blood/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-faint">{prettyDate(today)}</p>
            <h1 className="mt-1 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">
              {allDone ? "Protocol complete." : "Today's protocol."}
            </h1>
            <p className="mt-1 text-sm text-muted">
              {allDone
                ? "Three for three. Your future self just sent a thank-you note."
                : <>Hey <span className="text-fg font-semibold">{name}</span> — targets are set. No thinking, just execute.</>}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-line bg-ink-2 px-4 py-2.5">
              <Flame size={20} className={cn("text-ember", data.streak > 0 && "flame-flicker")} />
              <div>
                <p className="font-mono text-lg font-bold leading-none">{data.streak}</p>
                <p className="text-[9px] font-mono uppercase tracking-widest text-faint">day streak</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-line bg-ink-2 px-4 py-2">
              <Ring pct={(lv.into / lv.next) * 100} size={52} stroke={5}>
                <span className="font-mono text-sm font-bold">{lv.level}</span>
              </Ring>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wider">{levelTitle(lv.level)}</p>
                <p className="text-[10px] font-mono text-faint">{lv.into} / {lv.next} XP → LVL {lv.level + 1}</p>
              </div>
            </div>
          </div>
        </div>
        {/* progress rail */}
        <div className="relative mt-5">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-faint mb-1.5">
            <span>{doneCount} / {challenges.length} done</span>
            <span className={cn(allDone && "text-emerald-400")}>{allDone ? "+25 XP day bonus earned" : allDone === false && doneCount > 0 ? "keep pushing" : ""}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-gradient-to-r from-blood to-ember transition-all duration-700"
              style={{ width: `${challenges.length ? (doneCount / challenges.length) * 100 : 0}%` }} />
          </div>
        </div>
      </Card>

      {/* Challenges */}
      <div className="grid gap-4">
        {challenges.map((c, i) => (
          <Card key={c.exerciseId}
            className={cn(
              "anim-rise relative overflow-hidden transition-all duration-300",
              c.done ? "border-emerald-500/30 bg-emerald-500/[0.04]" : "hover:border-line-2",
            )}
            style={{ animationDelay: `${0.08 * (i + 1)}s` }}>
            <div className={cn("absolute left-0 top-0 h-full w-1", c.done ? "bg-emerald-500" : "bg-blood")} />
            <div className="p-5 sm:p-6 pl-6 sm:pl-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-faint tracking-widest">
                      CHALLENGE {String(i + 1).padStart(2, "0")}
                    </span>
                    {c.goals.map((g) => (
                      <Tag key={g} className={GOAL_TAG_COLOR[g]}>{GOAL_LABEL[g]}</Tag>
                    ))}
                  </div>
                  <h3 className={cn("mt-2 font-display text-2xl font-bold uppercase tracking-tight", c.done && "text-muted line-through opacity-70")}>
                    {c.name}
                  </h3>

                  {/* THE PRESCRIBED TARGET — bold and unmissable */}
                  <div className="mt-3 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-blood/30 bg-blood/10 px-4 py-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blood-2">Your target today</span>
                    <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-fg">
                      {c.sets} sets <span className="text-blood-2">×</span> {c.reps} {c.timed ? "sec" : "reps"}
                    </span>
                  </div>

                  <p className="mt-3 flex max-w-xl items-start gap-1.5 text-sm text-muted leading-relaxed">
                    <Info size={14} className="mt-0.5 shrink-0 text-faint" />
                    {c.cue}
                  </p>
                  <p className="mt-2 flex items-center gap-3 text-[11px] font-mono text-faint">
                    <span className="flex items-center gap-1"><Zap size={12} className="text-gold" /> +{c.xp} XP</span>
                    <span className="flex items-center gap-1"><Timer size={12} /> ~{Math.max(2, Math.round((c.sets * (c.timed ? c.reps : c.reps * 2.4) + c.sets * 60) / 60))} min</span>
                  </p>
                </div>

                <div className="shrink-0 self-center">
                  {c.done ? (
                    <div className="flex flex-col items-center gap-1.5 text-emerald-400 anim-pop">
                      <BadgeCheck size={44} strokeWidth={1.8} />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Logged</span>
                    </div>
                  ) : (
                    <Btn variant="primary" onClick={() => onComplete(c)} className="px-7 py-4 text-base sm:text-lg">
                      <CheckCircle2 size={19} /> Mark As Done
                    </Btn>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {allDone && (
        <Card className="anim-pop border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 text-center">
          <PartyPopper className="mx-auto text-emerald-400" size={30} />
          <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-wide text-emerald-300">Day {data.streak > 0 ? `Streak ${data.streak}` : ""} — Complete</h3>
          <p className="mx-auto mt-1 max-w-sm text-sm text-muted">
            Every challenge logged. Progressive overload is already recalculating tomorrow's targets — they will be harder.
          </p>
        </Card>
      )}

      <p className="text-center text-[11px] font-mono uppercase tracking-[0.18em] text-faint">
        Targets rise automatically as you log completions — that's progressive overload doing its job.
      </p>
    </div>
  );
}
