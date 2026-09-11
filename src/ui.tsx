import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { ArrowDownRight, ArrowUpRight, Camera, Minus, X } from "lucide-react";
import { cn } from "./utils/cn";
import type { Trend } from "./lib/engine";
import { fileToAvatar } from "./lib/store";

// ── Buttons ───────────────────────────────────────────────────
export function Btn({
  children, onClick, variant = "primary", className, disabled, type = "button", style,
}: {
  children: ReactNode; onClick?: () => void; variant?: "primary" | "ghost" | "outline" | "green" | "danger";
  className?: string; disabled?: boolean; type?: "button" | "submit"; style?: CSSProperties;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display font-semibold uppercase tracking-[0.14em] transition-all duration-200 select-none disabled:opacity-40 disabled:pointer-events-none cursor-pointer";
  const styles = {
    primary:
      "bg-blood text-white hover:bg-blood-2 active:scale-[0.98] shadow-[0_8px_30px_-8px_rgba(225,29,46,0.55)] text-sm px-6 py-3 rounded-lg",
    green:
      "bg-emerald-600 text-white hover:bg-emerald-500 active:scale-[0.98] shadow-[0_8px_30px_-8px_rgba(16,185,129,0.5)] text-sm px-6 py-3 rounded-lg",
    ghost: "text-muted hover:text-fg hover:bg-white/5 text-sm px-4 py-2.5 rounded-lg",
    outline:
      "border border-line-2 text-fg hover:border-blood/60 hover:text-blood-2 text-sm px-5 py-2.5 rounded-lg bg-transparent",
    danger: "border border-red-500/40 text-red-400 hover:bg-red-500/10 text-sm px-5 py-2.5 rounded-lg",
  } as const;
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style}
      className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
}

// ── Card ──────────────────────────────────────────────────────
export function Card({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div style={style}
      className={cn("rounded-xl border border-line bg-panel shadow-[0_12px_40px_-18px_rgba(0,0,0,0.8)]", className)}>
      {children}
    </div>
  );
}

// ── Section header ────────────────────────────────────────────
export function SectionHeader({ title, sub, right }: { title: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-5">
      <div>
        <h2 className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-[0.08em] text-fg">{title}</h2>
        {sub && <p className="text-sm text-faint mt-1">{sub}</p>}
      </div>
      {right}
    </div>
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

// ── Trend badge (up / down / flat) ────────────────────────────
export function TrendBadge({ trend, suffix = "%" }: { trend: Trend; suffix?: string }) {
  const map = {
    up: { cls: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25", Icon: ArrowUpRight, sign: "+" },
    down: { cls: "text-red-400 bg-red-500/10 border-red-500/25", Icon: ArrowDownRight, sign: "-" },
    flat: { cls: "text-muted bg-white/5 border-line", Icon: Minus, sign: "" },
  };
  const { cls, Icon, sign } = map[trend.dir];
  return (
    <span className={cn("inline-flex items-center gap-0.5 rounded-full border px-2 py-0.5 text-[11px] font-mono font-bold", cls)}>
      <Icon size={12} strokeWidth={2.6} />
      {sign}{trend.pct}{suffix}
    </span>
  );
}

// ── Modal / overlay ──────────────────────────────────────────
export function Overlay({ children, onClose, wide }: { children: ReactNode; onClose: () => void; wide?: boolean }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6 anim-fade"
      role="dialog" aria-modal="true"
      style={{ background: "rgba(4,4,6,0.82)", backdropFilter: "blur(8px)" }}
      onClick={onClose}>
      <div
        className={cn(
          "relative w-full max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-line-2 bg-panel anim-sheet sm:anim-pop",
          wide ? "sm:max-w-3xl" : "sm:max-w-lg",
        )}
        onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close"
          className="absolute top-3 right-3 z-10 rounded-lg border border-line-2 bg-ink-2/80 p-2 text-muted hover:text-fg hover:border-blood/50 transition-colors cursor-pointer">
          <X size={16} />
        </button>
        {children}
      </div>
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────
export function EmptyState({ icon, title, sub }: { icon: ReactNode; title: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-line-2 py-12 px-6 text-center">
      <div className="text-faint">{icon}</div>
      <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-muted">{title}</p>
      {sub && <p className="text-xs text-faint max-w-xs">{sub}</p>}
    </div>
  );
}

// ── Progress ring (SVG, text-based not an image) ──────────────
export function Ring({ pct, size = 56, stroke = 5, color = "#e11d2e", children }: {
  pct: number; size?: number; stroke?: number; color?: string; children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.min(100, Math.max(0, pct));
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#26262d" strokeWidth={stroke} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (c * clamped) / 100}
          style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.22,0.9,0.3,1)" }} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

// ── Field atoms for forms ─────────────────────────────────────
export function Field({ label, children, optional }: { label: string; children: ReactNode; optional?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
        {optional && <span className="text-[10px] font-mono text-faint normal-case tracking-normal">optional</span>}
      </span>
      {children}
    </label>
  );
}

export const inputCls =
  "w-full rounded-lg border border-line-2 bg-ink-2 px-3.5 py-2.5 text-sm text-fg placeholder:text-faint outline-none transition-colors focus:border-blood/70 hover:border-line-2/80 font-medium";

export function SelectChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick}
      className={cn(
        "rounded-lg border px-3.5 py-2.5 text-left text-sm font-semibold transition-all duration-150 cursor-pointer",
        active
          ? "border-blood bg-blood/15 text-fg shadow-[0_0_20px_-6px_rgba(225,29,46,0.6)]"
          : "border-line-2 bg-ink-2 text-muted hover:border-line-2 hover:text-fg",
      )}>
      {children}
    </button>
  );
}

// ── Brand logo (exact image, used as-is) ──────────────────────
export const LOGO_URL = "https://i.postimg.cc/cHKBFy01/COSRc.jpg";

export function LogoMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Primeform logo"
      width={size}
      height={size}
      draggable={false}
      className={cn("shrink-0 rounded-lg object-cover select-none", className)}
      style={{ width: size, height: size }}
    />
  );
}

// ── Avatar picker: upload + auto-compress profile picture ─────
export function AvatarPicker({
  value, onChange, size = 76,
}: {
  value?: string;
  onChange: (v: string | undefined) => void;
  size?: number;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<string | null>(null);

  const handle = async (f: File | null | undefined) => {
    if (!f) return;
    try {
      setErr(null);
      onChange(await fileToAvatar(f));
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Upload failed — try another image.");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button type="button" onClick={() => ref.current?.click()}
        className="group relative shrink-0 overflow-hidden rounded-2xl border border-line-2 bg-ink-2 transition-colors hover:border-blood/60 cursor-pointer"
        style={{ width: size, height: size }}
        aria-label="Upload profile picture">
        {value ? (
          <>
            <img src={value} alt="Profile" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <Camera size={18} className="text-white" />
            </span>
          </>
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center gap-1 text-faint transition-colors group-hover:text-blood-2">
            <Camera size={20} />
            <span className="text-[9px] font-mono uppercase tracking-widest">Upload</span>
          </span>
        )}
      </button>
      <div className="min-w-0">
        <p className="text-xs leading-relaxed text-muted">
          Optional. Shown in the header, profile, and leaderboard. Auto-compressed so it saves fast.
        </p>
        {value && (
          <button type="button" onClick={() => onChange(undefined)}
            className="mt-1.5 text-[11px] font-mono uppercase tracking-wider text-red-400 hover:text-red-300 cursor-pointer">
            Remove photo
          </button>
        )}
        {err && <p className="mt-1.5 text-[11px] text-red-400">{err}</p>}
      </div>
      <input
        ref={ref} type="file" accept="image/*" className="hidden"
        onChange={(e) => { handle(e.target.files?.[0]); e.target.value = ""; }}
      />
    </div>
  );
}
