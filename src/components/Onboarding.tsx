import { LogoMark } from "../ui";
import ProfileForm, { draftFromProfile, type ProfileDraft } from "./ProfileForm";
import type { Profile } from "../lib/types";

export default function Onboarding({
  profile, accountAvatar, onDone,
}: {
  profile: Profile | null;
  accountAvatar?: string;
  onDone: (d: ProfileDraft) => void;
}) {
  return (
    <div className="relative min-h-screen bg-ink bg-grid px-4 py-10 sm:py-14">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[380px] w-[620px] -translate-x-1/2 rounded-full bg-blood/12 blur-[110px]" />
      <div className="relative mx-auto w-full max-w-xl">
        <div className="anim-rise mb-8 text-center">
          <div className="mx-auto mb-4 w-max">
            <LogoMark size={48} className="glow-red rounded-xl" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood-2">Profile setup</p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight">
            Calibrate your protocol
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted leading-relaxed">
            This configures everything: exercise selection, set × rep prescriptions, how fast they ramp,
            and which tips you see. Answer honestly — the system adapts to the truth.
          </p>
        </div>

        <div className="anim-rise delay-1 rounded-2xl border border-line bg-panel p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
          <ProfileForm
            initial={draftFromProfile(profile, accountAvatar)}
            ctaLabel="Start My Transformation"
            onDone={onDone}
          />
        </div>

        <p className="anim-rise delay-2 mt-5 text-center text-[11px] font-mono uppercase tracking-[0.16em] text-faint">
          Saved permanently to your account · editable later in Profile
        </p>
      </div>
    </div>
  );
}
