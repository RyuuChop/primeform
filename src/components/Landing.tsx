import { ArrowRight, BookOpen, CalendarCheck2, ChevronRight, Flame, LineChart, LogIn, ShieldCheck, Target, Trophy, UserPlus } from "lucide-react";
import { Btn, LogoMark } from "../ui";

const TICKER = [
  "DAILY CHALLENGES", "PROGRESSIVE OVERLOAD", "STREAK TRACKING", "RANKED LEADERBOARD",
  "EVIDENCE-BASED TIPS", "XP & LEVELS", "ZERO FLUFF", "REAL MOVEMENTS ONLY",
];

const FEATURES = [
  {
    icon: CalendarCheck2, title: "Today",
    desc: "Three auto-prescribed challenges every day — exact sets × reps based on your level and history. Hit the button, get the XP, get out.",
    accent: "text-blood-2",
  },
  {
    icon: LineChart, title: "Progress",
    desc: "Weekly consistency, strength progression curves, volume splits and your streak — every rep you log turns the charts on.",
    accent: "text-sky-400",
  },
  {
    icon: Trophy, title: "Ranks",
    desc: "A live leaderboard scored on consistency, volume and streaks. You don't rise by talking — you rise by showing up daily.",
    accent: "text-gold",
  },
  {
    icon: BookOpen, title: "Tips",
    desc: "Only evidence-based protocols: sleep, protein, overload, posture, skin, neck training. With sources. Filtered to your goals.",
    accent: "text-emerald-400",
  },
];

const STEPS = [
  { n: "01", title: "Set your profile", desc: "Experience, goals, equipment. 60 seconds. The engine calibrates everything to you." },
  { n: "02", title: "Complete today's challenges", desc: "Prescribed sets × reps — no thinking, no planning. Just execute and mark done." },
  { n: "03", title: "Watch the numbers climb", desc: "Targets get harder as you adapt. Streak grows. Rank climbs. That's the whole loop." },
];

export default function Landing({ onLogin, onSignup }: { onLogin: () => void; onSignup: () => void }) {
  return (
    <div className="min-h-screen bg-ink bg-grid">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16">
          <div className="flex items-center gap-2.5">
            <LogoMark size={34} className="glow-red" />
            <span className="font-display text-lg font-bold uppercase tracking-[0.14em]">Primeform</span>
          </div>
          <div className="flex items-center gap-2">
            <Btn variant="ghost" onClick={onLogin}><LogIn size={15} /> Log In</Btn>
            <Btn variant="primary" onClick={onSignup}><UserPlus size={15} /> Sign Up</Btn>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blood/15 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-14 text-center">
          <p className="anim-rise inline-flex items-center gap-2 rounded-full border border-line-2 bg-panel px-4 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-muted">
            <ShieldCheck size={13} className="text-blood-2" /> No fluff. No gimmicks. Just work.
          </p>
          <h1 className="anim-rise delay-1 mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-bold uppercase leading-[0.95] tracking-tight">
            Train. Track.
            <span className="block text-blood-2" style={{ textShadow: "0 0 60px rgba(225,29,46,0.45)" }}>Transform.</span>
          </h1>
          <p className="anim-rise delay-2 mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            Daily training challenges personalized to your level and goals — fitness, strength, and
            looksmaxing. Proven movements only. Your targets get harder as you get stronger.
            Your streak and rank keep you honest.
          </p>
          <div className="anim-rise delay-3 mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Btn variant="primary" onClick={onSignup} className="px-9 py-4 text-base w-full sm:w-auto">
              Start The Protocol <ArrowRight size={17} />
            </Btn>
            <Btn variant="outline" onClick={onLogin} className="px-9 py-4 text-base w-full sm:w-auto">
              I Have An Account
            </Btn>
          </div>
          <div className="anim-rise delay-4 mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] font-mono uppercase tracking-[0.16em] text-faint">
            <span className="flex items-center gap-1.5"><Flame size={13} className="text-ember" /> Streak system</span>
            <span className="flex items-center gap-1.5"><Target size={13} className="text-blood-2" /> Goal-matched workouts</span>
            <span className="flex items-center gap-1.5"><Trophy size={13} className="text-gold" /> Real ranking</span>
          </div>
        </div>

        {/* ticker */}
        <div className="border-y border-line/70 bg-panel/60 py-3 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap px-4">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-faint">
                {t} <span className="text-blood-2">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="anim-rise mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood-2">What's inside</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Four weapons. One dashboard.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <div key={f.title}
              className={`group relative overflow-hidden rounded-xl border border-line bg-panel p-6 sm:p-7 transition-all duration-300 hover:border-line-2 hover:bg-panel-2 anim-rise delay-${i + 1}`}>
              <div className="absolute -right-6 -top-6 font-display text-[7rem] font-bold leading-none text-white/[0.025] select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <f.icon size={26} className={`${f.accent} transition-transform duration-300 group-hover:scale-110`} strokeWidth={2.2} />
              <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.08em]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted max-w-md">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-y border-line/70 bg-ink-2/60 bg-noise">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood-2">The loop</p>
          <h2 className="mt-2 mb-10 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight">How it works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`relative rounded-xl border border-line bg-panel p-6 anim-rise delay-${i + 1}`}>
                <span className="font-mono text-xs font-bold text-blood-2 tracking-widest">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.08em]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
                {i < 2 && <ChevronRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-faint md:block" size={18} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-tight">
          Your competition<br className="sm:hidden" /> already started.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">Create an account, set your profile, and today's first challenge unlocks immediately.</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Btn variant="primary" onClick={onSignup} className="px-10 py-4 text-base">Create Free Account</Btn>
        </div>
        <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.18em] text-faint">Free · Data saved on this device · ~60 second setup</p>
      </section>

      <footer className="border-t border-line/70 py-8 text-center">
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-faint">Primeform Protocol — discipline over motivation</p>
      </footer>
    </div>
  );
}
