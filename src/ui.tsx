import type { ReactNode, CSSProperties } from "react";
import { Heart, X } from "lucide-react";
import { cn } from "./utils/cn";

// ── Buttons ───────────────────────────────────────────────────
export function Btn({
  children, onClick, variant = "gold", className, disabled, type = "button", style,
}: {
  children: ReactNode; onClick?: () => void; variant?: "gold" | "ghost" | "outline" | "danger";
  className?: string; disabled?: boolean; type?: "button" | "submit"; style?: CSSProperties;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-[0.16em] transition-all duration-200 select-none disabled:opacity-40 disabled:pointer-events-none cursor-pointer";
  const styles = {
    gold:
      "bg-gradient-to-b from-gold-2 to-gold text-ink hover:brightness-105 active:scale-[0.98] shadow-[0_12px_40px_-12px_rgba(216,180,106,0.55)] text-[13px] px-7 py-3 rounded-full",
    ghost: "text-muted hover:text-fg hover:bg-white/5 text-sm px-4 py-2.5 rounded-full",
    outline:
      "border border-line-2 text-fg hover:border-gold/50 hover:text-gold-2 text-[13px] px-6 py-3 rounded-full bg-transparent active:scale-[0.98]",
    danger: "border border-red-500/40 text-red-400 hover:bg-red-500/10 text-sm px-5 py-2.5 rounded-full",
  } as const;
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style}
      className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
}

// ── Small tag chip ────────────────────────────────────────────
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider",
      className ?? "border-line-2 text-muted",
    )}>
      {children}
    </span>
  );
}

// ── Modal / overlay ──────────────────────────────────────────
export function Overlay({ children, onClose, wide }: { children: ReactNode; onClose: () => void; wide?: boolean }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6 anim-fade"
      role="dialog" aria-modal="true"
      style={{ background: "rgba(4,4,6,0.84)", backdropFilter: "blur(10px)" }}
      onClick={onClose}>
      <div
        className={cn(
          "relative max-h-[92vh] w-full overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-line-2 bg-panel anim-sheet sm:anim-pop shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)]",
          wide ? "sm:max-w-3xl" : "sm:max-w-lg",
        )}
        onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full border border-line-2 bg-ink-2/80 p-2.5 text-muted transition-colors hover:border-gold/50 hover:text-gold-2 cursor-pointer">
          <X size={16} />
        </button>
        {children}
      </div>
    </div>
  );
}

// ── Support (Patreon) — utm_source tags visits from this site ──
export const SUPPORT_URL = "https://www.patreon.com/PrimeForm12?utm_source=primeform";

export function SupportLink({
  variant = "gold", label = "Support", className,
}: {
  variant?: "gold" | "ghost"; label?: string; className?: string;
}) {
  const styles = {
    gold:
      "bg-gradient-to-b from-gold-2 to-gold text-ink hover:brightness-105 active:scale-[0.98] shadow-[0_10px_30px_-10px_rgba(216,180,106,0.55)] font-display text-xs font-semibold uppercase tracking-[0.14em] px-4.5 py-2.5",
    ghost:
      "border border-gold/35 bg-gold/[0.07] text-gold-2 hover:bg-gold/[0.16] active:scale-[0.98] font-mono text-[10px] font-semibold uppercase tracking-[0.14em] px-3.5 py-2",
  } as const;
  return (
    <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer"
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full transition-all duration-200 select-none cursor-pointer",
        styles[variant],
        className,
      )}>
      <Heart size={variant === "gold" ? 13 : 11} fill="currentColor" strokeWidth={0} />
      {label}
    </a>
  );
}

// ── Brand logo — PF monogram (P + F merged stem, gold gradient) ──
export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}
      role="img" aria-label="Primeform logo"
      className={cn("shrink-0 select-none", className)}
      style={{ width: size, height: size }}>
      <defs>
        <linearGradient id="pf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0dcae" />
          <stop offset="1" stopColor="#c9a25c" />
        </linearGradient>
        <linearGradient id="pf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d1d24" />
          <stop offset="1" stopColor="#0e0e11" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="62" height="62" rx="16"
        fill="url(#pf-bg)" stroke="rgba(216,180,106,0.45)" strokeWidth="2" />
      <g stroke="url(#pf-gold)" strokeWidth="7" strokeLinecap="round" fill="none">
        {/* shared stem — P aur F dono isse judte hain */}
        <path d="M22 13v40" />
        {/* P bowl */}
        <path d="M23.5 17h6a9.5 9.5 0 0 1 0 19h-6" />
        {/* F arms */}
        <path d="M22 43.5h19" />
        <path d="M22 53h11" />
      </g>
    </svg>
  );
}
