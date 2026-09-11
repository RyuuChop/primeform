import { useState } from "react";
import {
  CalendarDays, CircleAlert, Crosshair, Dumbbell, Flame, LogOut, Pencil,
  Ruler, Scale, ShieldCheck, Target, Trash2, User, Weight, Zap,
} from "lucide-react";
import type { Profile, UserData } from "../lib/types";
import { EXPERIENCE_LABEL, GOAL_LABEL, STYLE_LABEL } from "../lib/types";
import { levelFromXp, levelTitle, totalVolume, trainedDays } from "../lib/engine";
import { Btn, Card, Overlay, SectionHeader, Tag } from "../ui";
import ProfileForm, { draftFromProfile, type ProfileDraft } from "./ProfileForm";

export default function Profile({
  profile, data, onSave, onLogout, onResetData,
}: {
  profile: Profile;
  data: UserData;
  onSave: (d: ProfileDraft, newPassword?: string) => void;
  onLogout: () => void;
  onResetData: () => void;
}) {
  const [edit, setEdit] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const lv = levelFromXp(data.xp);
  const name = profile.displayName?.trim() || profile.username;

  const stats = [
    { icon: <Zap size={15} className="text-gold" />, label: "Total XP", value: data.xp.toLocaleString() },
    { icon: <Flame size={15} className="text-ember" />, label: "Day Streak", value: String(data.streak) },
    { icon: <Dumbbell size={15} className="text-blood-2" />, label: "Total Volume", value: totalVolume(data).toLocaleString() },
    { icon: <CalendarDays size={15} className="text-emerald-400" />, label: "Training Days", value: String(trainedDays(data)) },
  ];

  const info: [typeof User, string, string][] = [
    [User, "Gender", profile.gender === "male" ? "Male" : "Female"],
    [CalendarDays, "Age", `${profile.age} years`],
    [Target, "Experience", EXPERIENCE_LABEL[profile.experience]],
    [Dumbbell, "Training at", STYLE_LABEL[profile.style]],
    [Ruler, "Height", profile.height ? `${profile.height} cm` : "—"],
    [Weight, "Weight", profile.weight ? `${profile.weight} kg` : "—"],
    [Scale, "Body fat", profile.bodyFat != null ? `${profile.bodyFat}% (estimate)` : "—"],
    [ShieldCheck, "Member since", new Date(profile.createdAt).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })],
  ];

  return (
    <div className="space-y-5">
      {/* Identity card */}
      <Card className="anim-rise relative overflow-hidden p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blood/12 via-transparent to-transparent pointer-events-none" />
        <div className="relative flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            {profile.avatar ? (
              <img src={profile.avatar} alt={name}
                className="h-16 w-16 rounded-2xl border border-blood/40 object-cover glow-red" />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blood font-display text-2xl font-bold uppercase text-white glow-red">
                {name.slice(0, 2)}
              </div>
            )}
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">{name}</h1>
              <p className="font-mono text-xs text-faint">@{profile.username}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <Tag className="border-gold/40 bg-gold/10 text-gold">LVL {lv.level} · {levelTitle(lv.level)}</Tag>
                <Tag className="border-line-2 text-muted">{data.xp.toLocaleString()} XP</Tag>
              </div>
            </div>
          </div>
          <Btn variant="outline" onClick={() => setEdit(true)}>
            <Pencil size={14} /> Edit Profile
          </Btn>
        </div>
        {/* XP bar */}
        <div className="relative mt-5">
          <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-faint mb-1.5">
            <span>Level {lv.level}</span>
            <span>{lv.into} / {lv.next} XP</span>
            <span>Level {lv.level + 1}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-gradient-to-r from-blood to-gold transition-all duration-700"
              style={{ width: `${(lv.into / lv.next) * 100}%` }} />
          </div>
        </div>
      </Card>

      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Card key={s.label} className="anim-rise p-4" style={{ animationDelay: `${0.05 * i}s` }}>
            <p className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-faint">
              {s.icon} {s.label}
            </p>
            <p className="mt-2 font-mono text-2xl font-bold">{s.value}</p>
          </Card>
        ))}
      </div>

      {/* Personal info */}
      <Card className="anim-rise p-5 sm:p-6">
        <SectionHeader
          title="Your Protocol Settings"
          sub="These settings drive every workout prescription and every tip you see. Edit anytime — changes apply immediately."
          right={<Crosshair size={18} className="text-faint" />}
        />
        <div className="mb-4">
          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-faint">Goals ({profile.goals.length})</p>
          <div className="flex flex-wrap gap-2">
            {profile.goals.map((g) => (
              <span key={g} className="rounded-lg border border-blood/35 bg-blood/10 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.1em] text-fg">
                {GOAL_LABEL[g]}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {info.map(([Icon, label, value]) => (
            <div key={label} className="rounded-lg border border-line bg-ink-2 p-3">
              <p className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-faint">
                <Icon size={12} /> {label}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-fg leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Account actions */}
      <Card className="anim-rise p-5 sm:p-6">
        <SectionHeader title="Account" sub="Your data is stored under this account on this device and restored on login." />
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Btn variant="outline" onClick={onLogout} className="flex-1">
            <LogOut size={14} /> Log Out
          </Btn>
          {!confirmReset ? (
            <Btn variant="danger" onClick={() => setConfirmReset(true)} className="flex-1">
              <Trash2 size={14} /> Reset My Progress
            </Btn>
          ) : (
            <div className="flex flex-1 items-center gap-2">
              <Btn variant="danger" onClick={() => { onResetData(); setConfirmReset(false); }} className="flex-1">
                <CircleAlert size={14} /> Yes, Erase Everything
              </Btn>
              <Btn variant="ghost" onClick={() => setConfirmReset(false)}>Cancel</Btn>
            </div>
          )}
        </div>
        <p className="mt-3 text-[11px] text-faint">
          Reset wipes XP, streaks and history for @{profile.username} — the account and profile stay.
        </p>
      </Card>

      {/* Edit modal */}
      {edit && (
        <Overlay onClose={() => setEdit(false)} wide>
          <div className="p-6 sm:p-8">
            <h2 className="pr-8 font-display text-2xl font-bold uppercase tracking-tight">Update your profile</h2>
            <p className="mt-1 text-sm text-muted">Changes apply across the entire app instantly — new challenges, tips, everything.</p>
            <div className="mt-6">
              <ProfileForm
                initial={draftFromProfile(profile)}
                ctaLabel="Save Changes"
                allowPasswordChange
                onDone={(d, pw) => { onSave(d, pw); setEdit(false); }}
              />
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
}
