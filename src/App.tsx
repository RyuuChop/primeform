import { Component, useMemo, type ReactNode } from "react";
import { ArrowDown, RefreshCw, Sparkles, Star } from "lucide-react";
import TipsSection from "./components/TipsSection";
import { Btn, LogoMark } from "./ui";
import { TIPS, TIP_CATEGORIES } from "./lib/tips";

// ─────────────────────────────────────────────────────────────
//  ErrorBoundary — a render error can NEVER white-screen the app
// ─────────────────────────────────────────────────────────────
class ErrorBoundary extends Component<{ children: ReactNode }, { err: Error | null }> {
  state = { err: null as Error | null };
  static getDerivedStateFromError(err: Error) { return { err }; }
  componentDidCatch(err: Error) { console.error("Primeform caught:", err); }
  render() {
    if (!this.state.err) return this.props.children;
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink px-6 text-center">
        <div className="max-w-sm">
          <div className="mx-auto w-max"><LogoMark size={48} className="glow-red" /></div>
          <h1 className="mt-4 font-display text-2xl font-medium">Quick systems check</h1>
          <p className="mt-2 text-sm text-muted">
            Something glitched — reload to continue browsing the library.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Btn variant="gold" onClick={() => window.location.reload()}>
              <RefreshCw size={14} /> Reload
            </Btn>
            <Btn variant="outline" onClick={() => this.setState({ err: null })}>Try Again</Btn>
          </div>
        </div>
      </div>
    );
  }
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const TICKER = [...TIP_CATEGORIES, "Peer-Reviewed", "Zero Fluff"];

function Main() {
  const totalRefs = useMemo(() => TIPS.reduce((n, t) => n + t.refs.length, 0), []);

  return (
    <div className="min-h-screen bg-ink bg-grid text-fg">
      {/* ── Top bar ── */}
      <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <LogoMark size={32} className="glow-red" />
            <span className="font-display text-lg font-semibold uppercase tracking-[0.24em]">Primeform</span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.34em] text-faint md:block">
            The Protocol Library
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-panel px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            <Sparkles size={11} className="text-gold-2" /> {TIPS.length} protocols
          </span>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-gold/[0.09] blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 top-64 h-72 w-72 rounded-full bg-blood/[0.07] blur-[110px]" />

        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-32 sm:pb-20">
          <p className="anim-rise inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/[0.06] px-4.5 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-2">
            <Sparkles size={12} /> Evidence-based · Zero bro-science
          </p>

          <h1 className="anim-rise delay-1 mx-auto mt-8 max-w-4xl font-display text-[clamp(2.9rem,8vw,5.75rem)] font-light leading-[1.04] tracking-[-0.01em]">
            Knowledge, applied daily,
            <em className="mt-1 block font-normal italic text-gold-2"
              style={{ textShadow: "0 0 80px rgba(216,180,106,0.35)" }}>
              compounds.
            </em>
          </h1>

          <p className="anim-rise delay-2 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A curated library of field-tested protocols across training, nutrition, recovery,
            and looksmaxing — every claim traced to peer-reviewed research.
            Read one. Apply it today.
          </p>

          <div className="anim-rise delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Btn variant="gold" onClick={() => scrollTo("library")} className="w-full px-9 py-3.5 sm:w-auto">
              Browse The Library <ArrowDown size={15} />
            </Btn>
            <Btn variant="outline" onClick={() => scrollTo("featured")} className="w-full px-9 py-3.5 sm:w-auto">
              <Star size={14} /> Featured Protocol
            </Btn>
          </div>

          <div className="anim-rise delay-4 mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            <span>{TIPS.length} Protocols</span>
            <span className="text-gold-2">◆</span>
            <span>{TIP_CATEGORIES.length} Disciplines</span>
            <span className="text-gold-2">◆</span>
            <span>{totalRefs} Peer-Reviewed Sources</span>
          </div>
        </div>

        {/* category ticker */}
        <div className="relative border-y border-line/60 bg-panel/40 py-3.5 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap px-4">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-sm font-medium uppercase tracking-[0.32em] text-faint">
                {t} <span className="text-gold-2/70 text-[9px]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── The library ── */}
      <main id="library" className="scroll-mt-16">
        <TipsSection />
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-line/70 bg-ink-2/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <LogoMark size={26} />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.24em]">Primeform</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Discipline over motivation — knowledge over noise
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Educational only · Not medical advice
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}
