import { useState } from "react";
import { ArrowLeft, CircleAlert, Eye, EyeOff, Lock, LogIn, User, UserPlus } from "lucide-react";
import { AvatarPicker, Btn, Field, inputCls, LogoMark } from "../ui";
import { cn } from "../utils/cn";

export default function Auth({
  mode, error, onSubmit, onSwitch, onBack,
}: {
  mode: "login" | "signup";
  error: string | null;
  onSubmit: (username: string, password: string, avatar?: string) => void;
  onSwitch: (mode: "login" | "signup") => void;
  onBack: () => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [localErr, setLocalErr] = useState<string | null>(null);

  const isSignup = mode === "signup";
  const shownError = localErr ?? error;

  const submit = () => {
    const u = username.trim();
    if (!u) { setLocalErr("Enter a username."); return; }
    if (!password) { setLocalErr("Enter a password."); return; }
    if (isSignup && u.length < 3) { setLocalErr("Username must be at least 3 characters."); return; }
    if (isSignup && password.length < 4) { setLocalErr("Password must be at least 4 characters."); return; }
    setLocalErr(null);
    onSubmit(u, password, isSignup ? avatar : undefined);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-ink bg-grid px-4 py-10">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blood/12 blur-[110px]" />
      <div className="anim-pop relative w-full max-w-md">
        <button onClick={onBack}
          className="mb-5 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.16em] text-faint hover:text-fg transition-colors cursor-pointer">
          <ArrowLeft size={13} /> Back to site
        </button>

        <div className="rounded-2xl border border-line bg-panel p-7 sm:p-9 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-3">
            <LogoMark size={44} className="glow-red rounded-xl" />
            <div>
              <h1 className="font-display text-2xl font-bold uppercase tracking-[0.1em]">
                {isSignup ? "Enlist" : "Welcome Back"}
              </h1>
              <p className="text-xs text-faint font-mono uppercase tracking-[0.14em]">
                {isSignup ? "Create your account" : "Log in to your account"}
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {isSignup && (
              <Field label="Profile Picture" optional>
                <AvatarPicker size={72} value={avatar} onChange={setAvatar} />
              </Field>
            )}
            <Field label="Username">
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
                <input className={cn(inputCls, "pl-10")} placeholder={isSignup ? "e.g. night_operator" : "Your username"}
                  value={username} autoCapitalize="none" autoCorrect="off"
                  onChange={(e) => { setUsername(e.target.value); setLocalErr(null); }}
                  onKeyDown={(e) => e.key === "Enter" && submit()} />
              </div>
            </Field>
            <Field label="Password">
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
                <input className={cn(inputCls, "pl-10 pr-11")} placeholder={isSignup ? "Min. 4 characters" : "Your password"}
                  type={showPw ? "text" : "password"} value={password}
                  onChange={(e) => { setPassword(e.target.value); setLocalErr(null); }}
                  onKeyDown={(e) => e.key === "Enter" && submit()} />
                <button type="button" onClick={() => setShowPw((s) => !s)} aria-label="Toggle password"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-fg cursor-pointer">
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </Field>

            {shownError && (
              <div className="anim-pop flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-[13px] font-medium text-red-300">
                <CircleAlert size={15} className="mt-0.5 shrink-0" />
                {shownError}
              </div>
            )}

            <Btn variant="primary" onClick={submit} className="w-full py-3.5 text-base">
              {isSignup ? <><UserPlus size={16} /> Create Account</> : <><LogIn size={16} /> Log In</>}
            </Btn>
          </div>

          <div className="mt-6 border-t border-line pt-5 text-center text-sm text-muted">
            {isSignup ? (
              <>Already enlisted?{" "}
                <button onClick={() => { setLocalErr(null); onSwitch("login"); }}
                  className="font-semibold text-blood-2 hover:underline cursor-pointer">Log in</button></>
            ) : (
              <>No account yet?{" "}
                <button onClick={() => { setLocalErr(null); onSwitch("signup"); }}
                  className="font-semibold text-blood-2 hover:underline cursor-pointer">Sign up free</button></>
            )}
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] font-mono uppercase tracking-[0.16em] text-faint">
          Credentials are verified before you proceed. No shortcuts in, no shortcuts in training.
        </p>
      </div>
    </div>
  );
}
