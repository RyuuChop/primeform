import { useMemo, useState } from "react";
import {
  Activity, Anchor, ArrowDownToLine, ArrowRight, ArrowUpFromLine, ArrowUpDown,
  AlertTriangle, BadgeCheck, Ban, BatteryCharging, BedDouble, Beaker, Beef, Bike,
  Blender, Blocks, Brain, Brush, Calculator, CalendarCheck2, Carrot, ChevronsUp,
  Armchair, Banana, Candy, CircleAlert, Cigarette, Clock3, Coffee, Cookie, CookingPot,
  CupSoda, Droplet, Dumbbell, FlameKindling, Smartphone, Sunrise,
  Drumstick, Droplets, Ear, Egg, Eye, Fish, Flame, FlaskConical, Flower,
  Footprints, Gauge, GlassWater, Hand, HeartPulse, Hourglass, IceCreamBowl,
  Heart, KeyRound, Lamp, Layers, Leaf, Library, Lightbulb, LineChart, ListChecks, Milk, Moon,
  MonitorSmartphone, Mountain, MoveHorizontal, MoveVertical, NotebookPen, Nut, Pizza,
  PackageCheck, Pause, PenLine, PersonStanding, PhoneOff, Pill, RefreshCw, Ruler,
  Salad, Scale, ScanFace, ScanLine, Scissors, Search, Shield, ShoppingBasket,
  ShowerHead, Smile, Snowflake, Soup, Sparkles, SprayCan, Star, Stethoscope,
  StretchHorizontal, Sun, SunDim, Syringe, TestTube, Thermometer, Timer, Trees,
  Triangle, TrendingDown, TrendingUp, Repeat, Users, Utensils, VolumeX, Waves, Weight,
  Wheat, Wind, Wine, X, Zap,
} from "lucide-react";
import type { Goal, Tip } from "../lib/types";
import { GOAL_LABEL, GOAL_TAG_COLOR } from "../lib/types";
import { TIPS, TIP_CATEGORIES, tipsForGoals } from "../lib/tips";
import { Btn, Overlay, Tag } from "../ui";
import { cn } from "../utils/cn";

// ── icon registry ─────────────────────────────────────────────
const ICONS: Record<string, typeof Flame> = {
  beef: Beef, moon: Moon, "trending-up": TrendingUp, "arrow-down-to-line": ArrowDownToLine,
  "move-horizontal": MoveHorizontal, "arrow-up-from-line": ArrowUpFromLine, flame: Flame,
  footprints: Footprints, droplets: Droplets, "scan-line": ScanLine, smile: Smile,
  sparkles: Sparkles, scissors: Scissors, scale: Scale, pill: Pill, triangle: Triangle,
  "battery-charging": BatteryCharging, gauge: Gauge, eye: Eye, anchor: Anchor,
  "notebook-pen": NotebookPen, sun: Sun, star: Star,
  calculator: Calculator, salad: Salad, leaf: Leaf, "glass-water": GlassWater,
  cookie: Cookie, soup: Soup, utensils: Utensils, egg: Egg,
  "shopping-basket": ShoppingBasket, "cooking-pot": CookingPot, pizza: Pizza, wine: Wine,
  banana: Banana, wheat: Wheat, fish: Fish, nut: Nut, candy: Candy, droplet: Droplet,
  layers: Layers, timer: Timer, repeat: Repeat, "arrow-up-down": ArrowUpDown,
  "list-checks": ListChecks, activity: Activity, pause: Pause, shield: Shield,
  hand: Hand, dumbbell: Dumbbell, weight: Weight, drumstick: Drumstick, zap: Zap,
  "trending-down": TrendingDown, "refresh-cw": RefreshCw, mountain: Mountain, ban: Ban,
  "cup-soda": CupSoda, "heart-pulse": HeartPulse, wind: Wind, bike: Bike, "clock-3": Clock3,
  sunrise: Sunrise, ear: Ear, waves: Waves, "flame-kindling": FlameKindling,
  snowflake: Snowflake, "alert-triangle": AlertTriangle, "calendar-check-2": CalendarCheck2,
  coffee: Coffee, thermometer: Thermometer, lamp: Lamp, "bed-double": BedDouble,
  smartphone: Smartphone, "ice-cream-bowl": IceCreamBowl, "volume-x": VolumeX,
  "scan-face": ScanFace, milk: Milk, "flask-conical": FlaskConical, brush: Brush,
  beaker: Beaker, "spray-can": SprayCan, stethoscope: Stethoscope, "shower-head": ShowerHead,
  syringe: Syringe, cigarette: Cigarette, "move-vertical": MoveVertical, ruler: Ruler,
  armchair: Armchair, "person-standing": PersonStanding, "chevrons-up": ChevronsUp,
  "monitor-smartphone": MonitorSmartphone, "stretch-horizontal": StretchHorizontal,
  "test-tube": TestTube, blender: Blender, "sun-dim": SunDim, carrot: Carrot,
  "badge-check": BadgeCheck, "package-check": PackageCheck, "key-round": KeyRound,
  hourglass: Hourglass, blocks: Blocks, "line-chart": LineChart, heart: Heart,
  brain: Brain, flower: Flower, "phone-off": PhoneOff, trees: Trees, users: Users,
  "pen-line": PenLine,
};

function TipIcon({ name, size = 20 }: { name: string; size?: number }) {
  const I = ICONS[name] ?? Lightbulb;
  return <I size={size} strokeWidth={2} />;
}

const GOALS: Goal[] = ["muscle", "fatloss", "strength", "looksmax", "fitness"];
const pad = (n: number) => String(n).padStart(2, "0");

// Deterministic "featured" pick — rotates once per calendar day.
function featuredTip(): Tip {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now.getTime() - start.getTime()) / 86_400_000);
  return TIPS[day % TIPS.length];
}

// ─────────────────────────────────────────────────────────────
//  TipsSection — the whole library: featured, filters, grid, reader
// ─────────────────────────────────────────────────────────────
export default function TipsSection() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [open, setOpen] = useState<Tip | null>(null);

  const featured = featuredTip();

  const list = useMemo(() => {
    let l = goals.length ? tipsForGoals(goals) : TIPS;
    if (cat !== "All") l = l.filter((t) => t.category === cat);
    const s = q.trim().toLowerCase();
    if (s) l = l.filter((t) => `${t.title} ${t.summary} ${t.category}`.toLowerCase().includes(s));
    return l;
  }, [q, cat, goals]);

  const toggleGoal = (g: Goal) =>
    setGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));

  const resetFilters = () => { setQ(""); setCat("All"); setGoals([]); };

  return (
    <div className="relative">
      {/* ── Featured protocol ─────────────────────────────── */}
      <section id="featured" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-6 pb-16 sm:px-6">
        <FeaturedCard tip={featured} onOpen={() => setOpen(featured)} />
      </section>

      {/* ── Library toolbar ───────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-line/60 pt-12">
          <div className="anim-rise flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-2">
                <Library size={12} /> The Library
              </p>
              <h2 className="mt-2.5 font-display text-3xl font-medium leading-tight sm:text-4xl">
                All Protocols
              </h2>
            </div>
            <div className="relative w-full sm:w-80">
              <Search size={15} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search protocols…"
                className="w-full rounded-full border border-line-2 bg-panel py-3 pl-11 pr-4 text-sm font-medium text-fg outline-none transition-colors placeholder:font-normal placeholder:text-faint focus:border-gold/50"
              />
            </div>
          </div>

          {/* category chips */}
          <div className="anim-rise delay-1 mt-7 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {["All", ...TIP_CATEGORIES].map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={cn(
                  "shrink-0 rounded-full border px-4.5 py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer",
                  cat === c
                    ? "border-gold/60 bg-gold/10 text-gold-2 shadow-[0_0_24px_-8px_rgba(216,180,106,0.55)]"
                    : "border-line-2 bg-panel text-muted hover:border-gold/30 hover:text-fg",
                )}>
                {c}
              </button>
            ))}
          </div>

          {/* goal chips */}
          <div className="anim-rise delay-2 mt-3.5 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">Goal —</span>
            {GOALS.map((g) => (
              <button key={g} onClick={() => toggleGoal(g)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                  goals.includes(g)
                    ? GOAL_TAG_COLOR[g].replace(/text-\w+-400/, "$& !font-semibold").concat(" brightness-125")
                    : "border-line-2 bg-transparent text-faint hover:border-line-2 hover:text-muted",
                )}>
                {goals.includes(g) ? "◆ " : ""}{GOAL_LABEL[g]}
              </button>
            ))}
            {(goals.length > 0 || cat !== "All" || q) && (
              <button onClick={resetFilters}
                className="ml-1 inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-faint transition-colors hover:text-gold-2 cursor-pointer">
                <X size={11} /> Clear
              </button>
            )}
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              {list.length} of {TIPS.length} protocols
            </span>
          </div>
        </div>
      </section>

      {/* ── Grid ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-24 sm:px-6">
        {list.length === 0 ? (
          <EmptyState onReset={resetFilters} />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((t, i) => (
              <TipCard key={t.id} tip={t} index={TIPS.findIndex((x) => x.id === t.id) + 1}
                onOpen={() => setOpen(t)} delay={i} />
            ))}
          </div>
        )}
      </section>

      {/* ── Reader ────────────────────────────────────────── */}
      {open && <Reader tip={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

// ── Featured card ─────────────────────────────────────────────
function FeaturedCard({ tip, onOpen }: { tip: Tip; onOpen: () => void }) {
  const n = TIPS.findIndex((t) => t.id === tip.id) + 1;
  return (
    <div className="anim-rise rounded-2xl bg-gradient-to-br from-gold/50 via-line-2/50 to-line/40 p-px shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
      <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-panel bg-noise">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/[0.07] blur-[90px]" />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr]">
          <div className="p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.08] px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-2">
                <Star size={11} /> Featured Protocol
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                N°{pad(n)} — rotated daily
              </span>
            </div>
            <h3 className="mt-5 max-w-xl font-display text-3xl font-medium leading-[1.12] sm:text-4xl">
              {tip.title}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{tip.summary}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              <Tag className="border-gold/25 bg-gold/[0.07] text-gold-2">{tip.category}</Tag>
              <Tag className="border-line-2 text-faint"><Clock3 size={10} /> {tip.minutes} min read</Tag>
              {tip.goals.map((g) => (
                <Tag key={g} className={GOAL_TAG_COLOR[g]}>{GOAL_LABEL[g]}</Tag>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Btn variant="gold" onClick={onOpen}>
                Read Full Protocol <ArrowRight size={15} />
              </Btn>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                {tip.why.length} reasons · {tip.steps.length} steps · {tip.refs.length} sources
              </span>
            </div>
          </div>

          <div className="relative hidden items-center justify-center border-l border-line/60 lg:flex">
            <div className="absolute h-60 w-60 rounded-full bg-gold/[0.08] blur-[70px]" />
            <div className="relative flex flex-col items-center gap-5 py-12 text-center">
              <span className="font-display text-8xl font-light italic leading-none text-gold-2/90 select-none">
                N°{pad(n)}
              </span>
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.06] text-gold-2 shadow-[0_0_40px_-8px_rgba(216,180,106,0.45)]">
                <TipIcon name={tip.icon} size={24} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">{tip.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Library card ──────────────────────────────────────────────
function TipCard({ tip, index, onOpen, delay }: { tip: Tip; index: number; onOpen: () => void; delay: number }) {
  return (
    <article
      onClick={onOpen}
      style={{ animationDelay: `${Math.min(delay, 8) * 0.05}s` }}
      className="anim-rise group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-panel/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-panel hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85),0_0_44px_-22px_rgba(216,180,106,0.4)]">
      {/* gold hairline on hover */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-2 bg-ink-2 text-gold-2 transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-[0_0_26px_-6px_rgba(216,180,106,0.55)]">
          <TipIcon name={tip.icon} size={19} />
        </div>
        <span className="font-display text-5xl font-light italic leading-none text-white/[0.06] transition-colors duration-300 select-none group-hover:text-gold/20">
          {pad(index)}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-1.5">
        <Tag className="border-gold/25 bg-gold/[0.07] text-gold-2">{tip.category}</Tag>
        <Tag className="border-line-2 text-faint"><Clock3 size={10} /> {tip.minutes} min</Tag>
      </div>

      <h3 className="mt-3.5 font-display text-[1.35rem] font-medium leading-snug transition-colors duration-300 group-hover:text-gold-2">
        {tip.title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{tip.summary}</p>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line/70 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {tip.goals.slice(0, 2).map((g) => (
            <Tag key={g} className={GOAL_TAG_COLOR[g]}>{GOAL_LABEL[g]}</Tag>
          ))}
          {tip.goals.length > 2 && <Tag className="border-line-2 text-faint">+{tip.goals.length - 2}</Tag>}
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-faint transition-colors duration-300 group-hover:text-gold-2">
          Read <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

// ── Reader (full protocol overlay) ────────────────────────────
function Reader({ tip, onClose }: { tip: Tip; onClose: () => void }) {
  const n = TIPS.findIndex((t) => t.id === tip.id) + 1;
  return (
    <Overlay onClose={onClose} wide>
      <article className="px-6 pb-9 pt-12 sm:px-11 sm:pt-14">
        <header className="border-b border-line/70 pb-9 text-center">
          <div className="flex justify-center">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-gold/40 bg-gold/[0.06] text-gold-2 shadow-[0_0_50px_-10px_rgba(216,180,106,0.5)]">
              <TipIcon name={tip.icon} size={28} />
            </div>
          </div>
          <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-2">
            Protocol N°{pad(n)} · {tip.category} · {tip.minutes} min read
          </p>
          <h2 className="mx-auto mt-3.5 max-w-xl font-display text-3xl font-medium leading-[1.15] sm:text-[2.6rem]">
            {tip.title}
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-1.5">
            {tip.goals.map((g) => (
              <Tag key={g} className={GOAL_TAG_COLOR[g]}>{GOAL_LABEL[g]}</Tag>
            ))}
          </div>
        </header>

        {/* in brief */}
        <div className="mt-9 rounded-r-xl border-l-2 border-gold bg-gold/[0.05] p-5 sm:p-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-2">
            The Protocol — In Brief
          </p>
          <p className="mt-2.5 text-[15px] leading-relaxed text-fg/90">{tip.summary}</p>
        </div>

        <ReaderSection n="I" title="Why It Works">
          <ul className="space-y-3.5">
            {tip.why.map((w, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-[5px] shrink-0 text-[8px] text-gold-2">◆</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </ReaderSection>

        <ReaderSection n="II" title="How To Apply It">
          <ol className="space-y-2.5">
            {tip.steps.map((s, i) => (
              <li key={i} className="flex items-start gap-4 rounded-xl border border-line bg-ink-2/70 px-4 py-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm italic text-gold-2">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-fg/90">{s}</span>
              </li>
            ))}
          </ol>
        </ReaderSection>

        <ReaderSection n="III" title="Common Mistakes">
          <ul className="grid gap-2 sm:grid-cols-2">
            {tip.mistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-lg border border-red-500/15 bg-red-500/[0.05] px-3.5 py-3 text-[13px] leading-relaxed text-red-200/85">
                <CircleAlert size={14} className="mt-0.5 shrink-0 text-red-400/80" />
                {m}
              </li>
            ))}
          </ul>
        </ReaderSection>

        <ReaderSection n="IV" title="Progression Plan">
          <div>
            {tip.progression.map((p, i) => (
              <div key={i} className="relative flex items-start gap-4 pb-5 last:pb-0">
                {i < tip.progression.length - 1 && (
                  <span className="absolute left-[5px] top-4 h-full w-px bg-gradient-to-b from-gold/40 to-transparent" />
                )}
                <span className="relative mt-1.5 h-[11px] w-[11px] shrink-0 rounded-full border border-gold/60 bg-ink shadow-[0_0_10px_rgba(216,180,106,0.45)]" />
                <p className="pt-0.5 text-sm leading-relaxed text-muted">{p}</p>
              </div>
            ))}
          </div>
          </ReaderSection>

        {/* sources */}
        <section className="mt-11 rounded-xl border border-line/80 bg-ink-2/60 p-5 sm:p-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-faint">
            Appendix — Sources & References
          </p>
          <ul className="mt-3.5 space-y-1.5">
            {tip.refs.map((r, i) => (
              <li key={i} className="font-mono text-[11.5px] leading-relaxed text-faint">{r}</li>
            ))}
          </ul>
        </section>

        <Btn variant="gold" onClick={onClose} className="mt-9 w-full">Back To The Library</Btn>
      </article>
    </Overlay>
  );
}

function ReaderSection({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-3.5">
        <span className="font-display text-xl font-light italic text-gold-2">{n}</span>
        <span className="h-px w-7 bg-gradient-to-r from-gold/60 to-transparent" />
        <h3 className="font-display text-base font-semibold uppercase tracking-[0.16em] text-fg">{title}</h3>
      </div>
      <div className="mt-4.5">{children}</div>
    </section>
  );
}

// ── Empty state ───────────────────────────────────────────────
function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="anim-rise flex flex-col items-center gap-5 rounded-2xl border border-dashed border-line-2 py-20 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line-2 bg-ink-2 text-faint">
        <Library size={24} />
      </div>
      <div>
        <p className="font-display text-lg font-medium uppercase tracking-[0.1em] text-muted">No protocols match</p>
        <p className="mt-1.5 text-sm text-faint">Try a different search, category, or goal filter.</p>
      </div>
      <Btn variant="outline" onClick={onReset}>Clear All Filters</Btn>
    </div>
  );
}
