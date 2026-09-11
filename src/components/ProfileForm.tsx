import { useMemo, useState } from "react";
import { ArrowRight, CircleAlert, Check } from "lucide-react";
import type { Experience, Gender, Goal, Profile, Style } from "../lib/types";
import { EXPERIENCE_LABEL, GOAL_LABEL, STYLE_LABEL } from "../lib/types";
import { AvatarPicker, Btn, Field, SelectChip, inputCls } from "../ui";
import { cn } from "../utils/cn";

export interface ProfileDraft {
  displayName: string;
  avatar?: string;
  gender: Gender;
  age: number;
  experience: Experience;
  goals: Goal[];
  style: Style;
  height: string; weight: string; bodyFat: string;
}

export function draftFromProfile(p: Profile | null, accountAvatar?: string): ProfileDraft {
  return {
    displayName: p?.displayName ?? "",
    avatar: p?.avatar ?? accountAvatar,
    gender: p?.gender ?? "male",
    age: p?.age ?? 18,
    experience: p?.experience ?? "beginner",
    goals: p?.goals?.length ? [...p.goals] : ["fitness"],
    style: p?.style ?? "bodyweight",
    height: p?.height ? String(p.height) : "",
    weight: p?.weight ? String(p.weight) : "",
    bodyFat: p?.bodyFat != null ? String(p.bodyFat) : "",
  };
}

const GOAL_HINT: Record<Goal, string> = {
  muscle: "Hypertrophy-first programming",
  fatloss: "Conditioning + volume circuits",
  strength: "Harder variations, lower reps",
  looksmax: "Shoulders, posture, neck, leanness",
  fitness: "Balanced all-round base",
};

export default function ProfileForm({
  initial, ctaLabel, onDone, allowPasswordChange,
}: {
  initial: ProfileDraft;
  ctaLabel: string;
  onDone: (d: ProfileDraft, newPassword?: string) => void;
  allowPasswordChange?: boolean;
}) {
  const [d, setD] = useState<ProfileDraft>(initial);
  const [err, setErr] = useState<string | null>(null);
  const [pw, setPw] = useState("");
  const set = <K extends keyof ProfileDraft>(k: K, v: ProfileDraft[K]) => {
    setD((prev) => ({ ...prev, [k]: v }));
    setErr(null);
  };

  const toggleGoal = (g: Goal) => {
    setD((prev) => {
      const has = prev.goals.includes(g);
      const goals = has ? prev.goals.filter((x) => x !== g) : [...prev.goals, g];
      return { ...prev, goals };
    });
    setErr(null);
  };

  const valid = useMemo(
    () => d.goals.length > 0 && d.age >= 10 && d.age <= 99,
    [d.goals, d.age],
  );

  const submit = () => {
    try {
      if (d.goals.length === 0) { setErr("Pick at least one goal — your workouts are built from it."); return; }
      if (!d.age || d.age < 10 || d.age > 99) { setErr("Enter a valid age (10–99)."); return; }
      if (allowPasswordChange && pw && pw.length < 4) { setErr("New password must be at least 4 characters."); return; }
      onDone(d, allowPasswordChange ? (pw || undefined) : undefined);
    } catch (e) {
      console.error("Profile submit failed:", e);
      setErr("Something glitched while saving. Your data is safe — try again.");
    }
  };

  return (
    <div className="space-y-7">
      {/* Avatar */}
      <Field label="Profile Picture" optional>
        <AvatarPicker size={76} value={d.avatar} onChange={(v) => set("avatar", v)} />
      </Field>

      {/* Display name */}
      <Field label="Display Name" optional>
        <input className={inputCls} placeholder="Shown on leaderboard — defaults to your username"
          value={d.displayName} maxLength={24}
          onChange={(e) => set("displayName", e.target.value)} />
      </Field>

      {/* Gender */}
      <Field label="Gender">
        <div className="grid grid-cols-2 gap-2">
          {(["male", "female"] as Gender[]).map((g) => (
            <SelectChip key={g} active={d.gender === g} onClick={() => set("gender", g)}>
              <span className="flex items-center justify-between capitalize">{g}{d.gender === g && <Check size={14} className="text-blood-2" />}</span>
            </SelectChip>
          ))}
        </div>
      </Field>

      {/* Age */}
      <Field label="Age">
        <input className={inputCls} type="number" inputMode="numeric" min={10} max={99}
          value={d.age || ""} onChange={(e) => set("age", parseInt(e.target.value, 10) || 0)}
          placeholder="e.g. 21" />
      </Field>

      {/* Experience */}
      <Field label="Training Experience">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {(["beginner", "intermediate", "advanced"] as Experience[]).map((x) => (
            <SelectChip key={x} active={d.experience === x} onClick={() => set("experience", x)}>
              <span className="flex items-center justify-between">{EXPERIENCE_LABEL[x]}
                {d.experience === x && <Check size={14} className="text-blood-2 shrink-0" />}</span>
              </SelectChip>
          ))}
        </div>
        <p className="mt-2 text-xs text-faint">Beginners get easy prescriptions. It ramps from there — automatically.</p>
      </Field>

      {/* Goals — MULTI SELECT */}
      <Field label="Your Goals — pick all that apply">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {(Object.keys(GOAL_LABEL) as Goal[]).map((g) => {
            const active = d.goals.includes(g);
            return (
              <button key={g} type="button" onClick={() => toggleGoal(g)}
                className={cn(
                  "rounded-lg border px-3.5 py-3 text-left transition-all duration-150 cursor-pointer",
                  active ? "border-blood bg-blood/15 shadow-[0_0_20px_-6px_rgba(225,29,46,0.55)]"
                         : "border-line-2 bg-ink-2 hover:border-line-2/60",
                )}>
                <span className="flex items-center justify-between">
                  <span className={cn("font-display text-sm font-semibold uppercase tracking-[0.08em]", active ? "text-fg" : "text-muted")}>
                    {GOAL_LABEL[g]}
                  </span>
                  <span className={cn(
                    "flex h-4.5 w-4.5 h-[18px] w-[18px] items-center justify-center rounded border transition-colors",
                    active ? "border-blood bg-blood text-white" : "border-line-2 text-transparent",
                  )}>
                    <Check size={12} strokeWidth={3} />
                  </span>
                </span>
                <span className="mt-1 block text-[11px] text-faint">{GOAL_HINT[g]}</span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-faint">
          <span className="text-blood-2 font-semibold">{d.goals.length} selected</span> — daily challenges and tips are filtered to exactly these.
        </p>
      </Field>

      {/* Training style */}
      <Field label="Where You Train">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {(["bodyweight", "home", "gym"] as Style[]).map((s) => (
            <SelectChip key={s} active={d.style === s} onClick={() => set("style", s)}>
              <span className="flex items-center justify-between">{STYLE_LABEL[s]}
                {d.style === s && <Check size={14} className="text-blood-2 shrink-0" />}</span>
            </SelectChip>
          ))}
        </div>
      </Field>

      {/* Body stats — optional */}
      <div>
        <p className="mb-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Body Stats <span className="ml-1 text-[10px] font-mono text-faint normal-case tracking-normal">optional</span>
        </p>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <input className={inputCls} type="number" inputMode="decimal" placeholder="—" value={d.height}
              onChange={(e) => set("height", e.target.value)} />
            <p className="mt-1 text-center text-[10px] font-mono uppercase tracking-wider text-faint">Height cm</p>
          </div>
          <div>
            <input className={inputCls} type="number" inputMode="decimal" placeholder="—" value={d.weight}
              onChange={(e) => set("weight", e.target.value)} />
            <p className="mt-1 text-center text-[10px] font-mono uppercase tracking-wider text-faint">Weight kg</p>
          </div>
          <div>
            <input className={inputCls} type="number" inputMode="decimal" placeholder="—" value={d.bodyFat}
              onChange={(e) => set("bodyFat", e.target.value)} />
            <p className="mt-1 text-center text-[10px] font-mono uppercase tracking-wider text-faint">Body fat %</p>
          </div>
        </div>
      </div>

      {/* Optional password change (edit mode) */}
      {allowPasswordChange && (
        <Field label="New Password" optional>
          <input className={inputCls} type="password" placeholder="Leave empty to keep current password"
            value={pw} onChange={(e) => { setPw(e.target.value); setErr(null); }} />
        </Field>
      )}

      {err && (
        <div className="anim-pop flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-[13px] font-medium text-red-300">
          <CircleAlert size={15} className="mt-0.5 shrink-0" />
          {err}
        </div>
      )}

      <Btn variant="primary" onClick={submit} disabled={!valid} className="w-full py-4 text-base">
        {ctaLabel} <ArrowRight size={17} />
      </Btn>
    </div>
  );
}
