import type { ReactNode, CSSProperties } from "react";
import { Heart, X } from "lucide-react";
import { cn } from "./utils/cn";
import logoUrl from "./assets/logo.png";

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
          "relative w-full overflow-hidden rounded-t-2xl sm:rounded-2xl border border-line-2 bg-panel shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)] anim-sheet sm:anim-pop",
          wide ? "sm:max-w-3xl" : "sm:max-w-lg",
        )}
        onClick={(e) => e.stopPropagation()}>
        {/* floating close — lives outside the scroll area, stays put while content scrolls */}
        <button onClick={onClose} aria-label="Close"
          className="absolute right-3 top-3 z-20 rounded-full border border-line-2 bg-ink-2/90 p-2.5 text-muted shadow-[0_10px_28px_-8px_rgba(0,0,0,0.85)] backdrop-blur-md transition-colors hover:border-gold/50 hover:text-gold-2 cursor-pointer">
          <X size={16} />
        </button>
        <div className="max-h-[92vh] overflow-y-auto overscroll-contain">
          {children}
        </div>
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

// ── Brand logo — PF monogram (gold on dark tile) ─────────────
export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Primeform logo"
      width={size}
      height={size}
      draggable={false}
      className={cn("shrink-0 select-none", className)}
      style={{ width: size, height: size }}
    />
  );
}
