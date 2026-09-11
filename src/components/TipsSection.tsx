import { useMemo, useState } from "react";
import {
  Anchor, ArrowDownToLine, ArrowRight, ArrowUpFromLine, BatteryCharging, Beef,
  BookOpen, CircleAlert, Droplets, Eye, Flame, Footprints, Gauge, Library,
  Lightbulb, ListChecks, Moon, MoveHorizontal, NotebookPen, Pill, Scale,
  ScanLine, Scissors, Smile, Sparkles, Sun, TrendingUp, XCircle, Triangle,
} from "lucide-react";
import type { Goal, Tip } from "../lib/types";
import { GOAL_LABEL, GOAL_TAG_COLOR } from "../lib/types";
import { tipsForGoals, TIP_CATEGORIES } from "../lib/tips";
import { Btn, Card, EmptyState, Overlay, Tag } from "../ui";
import { cn } from "../utils/cn";

const ICONS: Record<string, typeof Flame> = {
  beef: Beef, moon: Moon, "trending-up": TrendingUp, "arrow-down-to-line": ArrowDownToLine,
  "move-horizontal": MoveHorizontal, "arrow-up-from-line": ArrowUpFromLine, flame: Flame,
  footprints: Footprints, droplets: Droplets, "scan-line": ScanLine, smile: Smile,
  sparkles: Sparkles, scissors: Scissors, scale: Scale, pill: Pill, triangle: Triangle,
  "battery-charging": BatteryCharging, gauge: Gauge, eye: Eye, anchor: Anchor,
  "notebook-pen": NotebookPen, sun: Sun,
};

function TipIcon({ name }: { name: string }) {
  const I = ICONS[name] ?? Lightbulb;
  return <I size={20} strokeWidth={2.2} />;
}

export default function TipsSection({ goals }: { goals: Goal[] }) {
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<Tip | null>(null);

  const relevant = useMemo(() => tipsForGoals(goals), [goals]);
  const cats = useMemo(() => ["All", ...TIP_CATEGORIES.filter((c) => relevant.some((t) => t.category === c))], [relevant]);
  const list = useMemo(() => (cat === "All" ? relevant : relevant.filter((t) => t.category === cat)), [relevant, cat]);

  return (
    <div className="space-y-5">
      <Card className="anim-rise border-blood/25 bg-gradient-to-r from-blood/10 to-transparent p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood-2">Filtered to your goals</p>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          Showing <span className="font-bold text-fg">{relevant.length} protocols</span> for{" "}
          {goals.map((g) => GOAL_LABEL[g]).join(", ") || "all goals"}. Everything here is evidence-based —
          no bro-science, no filler. Open any card for the full protocol with sources.
        </p>
      </Card>

      {/* Category filter */}
      <div className="anim-rise delay-1 flex gap-2 overflow-x-auto pb-1">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={cn(
              "shrink-0 rounded-lg border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.1em] transition-all cursor-pointer",
              cat === c ? "border-blood bg-blood/15 text-fg" : "border-line-2 bg-panel text-muted hover:text-fg",
            )}>
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <EmptyState icon={<Library size={32} />} title="No tips in this category for your goals"
          sub="Select a different category or widen your goals in Profile." />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((t, i) => (
            <Card key={t.id}
              className="anim-rise group flex flex-col p-5 transition-all duration-300 hover:border-line-2 hover:bg-panel-2"
              style={{ animationDelay: `${Math.min(i, 8) * 0.04}s` }}>
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-2 bg-ink-2 text-blood-2 transition-colors group-hover:border-blood/40 group-hover:text-blood-2">
                  <TipIcon name={t.icon} />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Tag className="border-line-2 text-faint">{t.category}</Tag>
                    <Tag className="border-line-2 text-faint">{t.minutes} min</Tag>
                    {t.goals.filter((g) => goals.includes(g)).slice(0, 2).map((g) => (
                      <Tag key={g} className={GOAL_TAG_COLOR[g]}>{GOAL_LABEL[g]}</Tag>
                    ))}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold uppercase tracking-[0.06em] leading-snug">{t.title}</h3>
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t.summary}</p>
              <div className="mt-4">
                <Btn variant="outline" onClick={() => setOpen(t)} className="w-full justify-between px-4">
                  Read Full Guide <ArrowRight size={15} />
                </Btn>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ── Full guide modal ── */}
      {open && (
        <Overlay onClose={() => setOpen(null)} wide>
          <article className="p-6 sm:p-9">
            <div className="flex items-start gap-4 pr-8">
              <div className="flex h-13 w-13 h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl border border-blood/40 bg-blood/10 text-blood-2">
                <TipIcon name={open.icon} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <Tag className="border-line-2 text-faint">{open.category}</Tag>
                  {open.goals.map((g) => (
                    <Tag key={g} className={GOAL_TAG_COLOR[g]}>{GOAL_LABEL[g]}</Tag>
                  ))}
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-tight">{open.title}</h2>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 rounded-xl border border-blood/25 bg-blood/[0.07] p-4">
              <p className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-blood-2">
                <BookOpen size={14} /> Quick Summary
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fg/90">{open.summary}</p>
            </div>

            {/* Why it works */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold uppercase tracking-[0.12em]">
                <Lightbulb size={16} className="text-gold" /> Why It Works
              </h3>
              <ul className="mt-3 space-y-2">
                {open.why.map((w, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blood" />
                    <span><span className="text-fg">{w.split("—")[0]}</span>{w.includes("—") ? "—" + w.split("—").slice(1).join("—") : ""}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How to */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold uppercase tracking-[0.12em]">
                <ListChecks size={16} className="text-emerald-400" /> How To Apply It — Step By Step
              </h3>
              <ol className="mt-3 space-y-2.5">
                {open.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg border border-line bg-ink-2 px-4 py-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blood font-mono text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-fg/90">{s}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Mistakes */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold uppercase tracking-[0.12em]">
                <XCircle size={16} className="text-red-400" /> Common Mistakes
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {open.mistakes.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5 rounded-lg border border-red-500/20 bg-red-500/[0.06] px-3.5 py-2.5 text-[13px] leading-relaxed text-red-200/90">
                    <CircleAlert size={14} className="mt-0.5 shrink-0 text-red-400" />
                    {m}
                  </li>
                ))}
              </ul>
            </section>

            {/* Progression */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold uppercase tracking-[0.12em]">
                <TrendingUp size={16} className="text-sky-400" /> Progression Plan
              </h3>
              <div className="mt-3 space-y-0">
                {open.progression.map((p, i) => (
                  <div key={i} className="relative flex items-start gap-3 pb-3 last:pb-0">
                    {i < open.progression.length - 1 && (
                      <span className="absolute left-[9px] top-5 h-full w-px bg-line-2" />
                    )}
                    <span className="relative mt-1 h-[18px] w-[18px] shrink-0 rounded-full border-2 border-sky-400/60 bg-ink" />
                    <p className="text-sm leading-relaxed text-muted pt-0.5">{p}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section className="mt-7 rounded-xl border border-line bg-ink-2/70 p-4">
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-faint">Sources & References</h3>
              <ul className="mt-2.5 space-y-1.5">
                {open.refs.map((r, i) => (
                  <li key={i} className="text-[12px] font-mono leading-relaxed text-faint">{r}</li>
                ))}
              </ul>
            </section>

            <Btn variant="primary" onClick={() => setOpen(null)} className="mt-7 w-full">Got It — Back To Tips</Btn>
          </article>
        </Overlay>
      )}
    </div>
  );
}
