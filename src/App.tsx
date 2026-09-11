import { Component, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  BookOpen, CalendarCheck2, Flame, LineChart, LogOut,
  RefreshCw, Trophy, User, Zap,
} from "lucide-react";
import type { Challenge, DB, Experience, Gender, Goal, Profile, Style } from "./lib/types";
import { dataFor, emptyUserData, loadDB, saveDB, signup, verifyLogin } from "./lib/store";
import {
  dateKey, levelFromXp, levelTitle, markDayDone, recordCompletion, todayChallenges,
} from "./lib/engine";
import Landing from "./components/Landing";
import Auth from "./components/Auth";
import Onboarding from "./components/Onboarding";
import type { ProfileDraft } from "./components/ProfileForm";
import Today from "./components/Today";
import Progress from "./components/Progress";
import Ranks from "./components/Ranks";
import TipsSection from "./components/TipsSection";
import ProfilePage from "./components/Profile";
import { Btn, LogoMark } from "./ui";
import { cn } from "./utils/cn";

// ─────────────────────────────────────────────────────────────
//  ErrorBoundary — a render error can NEVER white-screen the app
// ─────────────────────────────────────────────────────────────
class ErrorBoundary extends Component<{ children: ReactNode }, { err: Error | null }> {
  state = { err: null as Error | null };
  static getDerivedStateFromError(err: Error) { return { err }; }
  componentDidCatch(err: Error) { console.error("ASCEND caught:", err); }
  render() {
    if (!this.state.err) return this.props.children;
    return (
      <div className="flex min-h-screen items-center justify-center bg-ink px-6 text-center">
        <div className="max-w-sm">
          <div className="mx-auto w-max"><LogoMark size={48} className="glow-red" /></div>
          <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">Quick systems check</h1>
          <p className="mt-2 text-sm text-muted">
            Something glitched — your account and data are safely stored. Reload to continue.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Btn variant="primary" onClick={() => window.location.reload()}>
              <RefreshCw size={14} /> Reload App
            </Btn>
            <Btn variant="ghost" onClick={() => this.setState({ err: null })}>Try Again</Btn>
          </div>
        </div>
      </div>
    );
  }
}

type View = "landing" | "auth" | "onboarding" | "app";
type Tab = "today" | "progress" | "ranks" | "tips" | "profile";

const TABS: { id: Tab; label: string; icon: typeof Flame }[] = [
  { id: "today", label: "Today", icon: CalendarCheck2 },
  { id: "progress", label: "Progress", icon: LineChart },
  { id: "ranks", label: "Ranks", icon: Trophy },
  { id: "tips", label: "Tips", icon: BookOpen },
  { id: "profile", label: "Profile", icon: User },
];

function Main() {
  // ── The single source of truth: whole DB in state + localStorage ──
  const [db, setDb] = useState<DB>(() => loadDB());
  const [view, setView] = useState<View>(() => {
    const boot = loadDB();
    if (!boot.session || !boot.accounts[boot.session]) return "landing";
    const p = boot.profiles[boot.session];
    return p?.onboarded ? "app" : "onboarding";
  });
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [authError, setAuthError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("today");
  const [toast, setToast] = useState<string | null>(null);
  const [levelUp, setLevelUp] = useState<number | null>(null);

  // Atomic commit: write ENTIRE db to storage, then update React state.
  const commit = useCallback((next: DB) => {
    saveDB(next);           // synchronous — the write happens before any navigation
    setDb({ ...next });
  }, []);

  const user = db.session && db.accounts[db.session] ? db.session : null;
  const profile = useMemo(
    () => (user ? db.profiles[user] ?? null : null),
    [db, user],
  );
  const data = useMemo(
    () => (user ? dataFor(db, user) : emptyUserData()),
    [db, user],
  );
  const challenges = useMemo(
    () => (profile?.onboarded ? todayChallenges(db, profile) : []),
    [db, profile],
  );

  // Toast auto-dismiss
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  // Level-up overlay auto-dismiss
  useEffect(() => {
    if (levelUp == null) return;
    const t = setTimeout(() => setLevelUp(null), 2800);
    return () => clearTimeout(t);
  }, [levelUp]);

  // ── Auth handlers ───────────────────────────────────────────
  const handleAuth = (username: string, password: string, avatar?: string) => {
    try {
      if (authMode === "signup") {
        const res = signup(db, username, password);
        if (!res.ok) { setAuthError(res.error); return; }
        const next: DB = { ...db };
        next.accounts = {
          ...db.accounts,
          [res.username]: {
            password,
            createdAt: new Date().toISOString(),
            avatar: avatar || undefined,
          },
        };
        next.data = { ...db.data, [res.username]: next.data[res.username] ?? emptyUserData() };
        next.session = res.username;
        commit(next);
        setAuthError(null);
        setView("onboarding"); // new account → personal info form
      } else {
        const res = verifyLogin(db, username, password);
        if (!res.ok) { setAuthError(res.error); return; }
        const next: DB = { ...db, session: res.username };
        // if data record somehow missing, create empty one — NEVER wipe existing
        if (!next.data[res.username]) next.data = { ...next.data, [res.username]: emptyUserData() };
        commit(next);
        setAuthError(null);
        const p = next.profiles[res.username];
        setView(p?.onboarded ? "app" : "onboarding");
        setTab("today");
      }
    } catch (e) {
      console.error("Auth error:", e);
      setAuthError("Something glitched. Please try again.");
    }
  };

  // ── Onboarding submit (the former white-screen: now bulletproof) ──
  const handleOnboarding = (d: ProfileDraft) => {
    if (!user) { setView("auth"); setAuthMode("signup"); return; }
    try {
      const now = new Date().toISOString();
      const existing = db.profiles[user];
      const p: Profile = {
        username: user,
        displayName: d.displayName.trim() || undefined,
        avatar: d.avatar || existing?.avatar || db.accounts[user]?.avatar,
        gender: d.gender as Gender,
        age: d.age,
        experience: d.experience as Experience,
        goals: d.goals as Goal[],
        style: d.style as Style,
        height: d.height ? Number(d.height) || undefined : undefined,
        weight: d.weight ? Number(d.weight) || undefined : undefined,
        bodyFat: d.bodyFat ? Number(d.bodyFat) || undefined : undefined,
        onboarded: true,
        createdAt: existing?.createdAt ?? now,
        updatedAt: now,
      };
      const next: DB = { ...db };
      next.profiles = { ...db.profiles, [user]: p };
      if (!next.data[user]) next.data = { ...next.data, [user]: emptyUserData() };
      commit(next);                    // 1) data lands in localStorage FIRST…
      setTab("today");
      setView("app");                  // 2) …then we navigate. No white screen possible.
      setToast("Protocol calibrated — your first challenges are live.");
    } catch (e) {
      console.error("Onboarding save error:", e);
      // Even in the worst case, take the user to the app with defaults — never a blank page
      setTab("today");
      setView("app");
    }
  };

  // ── Profile edit ────────────────────────────────────────────
  const handleProfileSave = (d: ProfileDraft, newPassword?: string) => {
    if (!user || !profile) return;
    const p: Profile = {
      ...profile,
      displayName: d.displayName.trim() || undefined,
      avatar: d.avatar || undefined,
      gender: d.gender as Gender,
      age: d.age,
      experience: d.experience as Experience,
      goals: d.goals as Goal[],
      style: d.style as Style,
      height: d.height ? Number(d.height) || undefined : undefined,
      weight: d.weight ? Number(d.weight) || undefined : undefined,
      bodyFat: d.bodyFat ? Number(d.bodyFat) || undefined : undefined,
      onboarded: true,
      updatedAt: new Date().toISOString(),
    };
    const next: DB = { ...db };
    next.profiles = { ...db.profiles, [user]: p };
    if (newPassword) {
      next.accounts = { ...db.accounts, [user]: { ...db.accounts[user], password: newPassword } };
    }
    commit(next);
    setToast("Profile updated — challenges and tips recalibrated.");
  };

  // ── Complete a challenge ────────────────────────────────────
  const handleComplete = (c: Challenge) => {
    if (!user) return;
    try {
      const today = dateKey();
      const before = levelFromXp(data.xp).level;
      let nd = recordCompletion(data, c, today);
      // all challenges done → day bonus (once)
      const nowAllDone = challenges.every((ch) => ch.exerciseId === c.exerciseId || ch.done);
      let bonus = false;
      if (nowAllDone && !nd.dayDone[today]) {
        nd = markDayDone(nd, today);
        bonus = true;
      }
      const after = levelFromXp(nd.xp).level;
      const next: DB = { ...db, data: { ...db.data, [user]: nd } };
      commit(next);
      if (after > before) setLevelUp(after);
      setToast(bonus ? `+${c.xp + 25} XP — day complete. Streak protected.` : `+${c.xp} XP — ${c.name} logged.`);
    } catch (e) {
      console.error("Completion error:", e);
      setToast("Save hiccup — try again.");
    }
  };

  const handleLogout = () => {
    commit({ ...db, session: null });
    setView("landing");
    setTab("today");
    setToast(null);
  };

  const handleResetData = () => {
    if (!user) return;
    commit({ ...db, data: { ...db.data, [user]: emptyUserData() } });
    setToast("Progress wiped. Clean slate — make it count.");
  };

  // ── Views ───────────────────────────────────────────────────
  if (view === "landing") {
    return (
      <Landing
        onLogin={() => { setAuthMode("login"); setAuthError(null); setView("auth"); }}
        onSignup={() => { setAuthMode("signup"); setAuthError(null); setView("auth"); }}
      />
    );
  }

  if (view === "auth" || !user) {
    return (
      <Auth
        mode={authMode}
        error={authError}
        onSubmit={handleAuth}
        onSwitch={(m) => { setAuthMode(m); setAuthError(null); }}
        onBack={() => setView("landing")}
      />
    );
  }

  if (view === "onboarding" || !profile?.onboarded) {
    return (
      <Onboarding
        profile={profile}
        accountAvatar={db.accounts[user]?.avatar}
        onDone={handleOnboarding}
      />
    );
  }

  const lv = levelFromXp(data.xp);
  const name = profile.displayName?.trim() || profile.username;

  return (
    <div className="min-h-screen bg-ink bg-noise pb-24 lg:pb-0">
      {/* ── Top bar ── */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <LogoMark size={32} />
              <span className="font-display text-lg font-bold uppercase tracking-[0.14em] hidden sm:inline">Primeform</span>
            </div>
            <nav className="hidden lg:flex items-center gap-1">
              {TABS.map((t) => (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-display text-xs font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer",
                    tab === t.id ? "bg-blood/15 text-fg shadow-[inset_0_0_0_1px_rgba(225,29,46,0.4)]" : "text-faint hover:text-fg",
                  )}>
                  <t.icon size={14} className={tab === t.id ? "text-blood-2" : ""} />
                  {t.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5" title="Day streak">
              <Flame size={14} className={cn("text-ember", data.streak > 0 && "flame-flicker")} />
              <span className="font-mono text-sm font-bold">{data.streak}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5" title={`Level ${lv.level} — ${levelTitle(lv.level)}`}>
              <Zap size={14} className="text-gold" />
              <span className="font-mono text-sm font-bold">LVL {lv.level}</span>
            </div>
            <button onClick={() => setTab("profile")}
              className={cn(
                "flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg font-display text-xs font-bold uppercase transition-transform hover:scale-105 cursor-pointer",
                profile.avatar ? "border border-line-2" : "bg-blood text-white",
              )}
              title="Profile">
              {profile.avatar
                ? <img src={profile.avatar} alt={name} className="h-full w-full object-cover" />
                : name.slice(0, 2)}
            </button>
            <button onClick={handleLogout} title="Log out"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-line text-faint transition-colors hover:text-fg hover:border-line-2 cursor-pointer">
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        {tab === "today" && <Today challenges={challenges} profile={profile} data={data} onComplete={handleComplete} />}
        {tab === "progress" && <Progress data={data} />}
        {tab === "ranks" && <Ranks db={db} profile={profile} />}
        {tab === "tips" && <TipsSection goals={profile.goals} />}
        {tab === "profile" && (
          <ProfilePage profile={profile} data={data} onSave={handleProfileSave}
            onLogout={handleLogout} onResetData={handleResetData} />
        )}
      </main>

      {/* ── Mobile bottom nav ── */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 backdrop-blur-md lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-5">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 text-[9px] font-display font-semibold uppercase tracking-[0.12em] transition-colors cursor-pointer",
                tab === t.id ? "text-blood-2" : "text-faint hover:text-fg",
              )}>
              <t.icon size={19} strokeWidth={2.2} />
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Toast ── */}
      {toast && (
        <div className="anim-pop fixed bottom-20 lg:bottom-6 left-1/2 z-[70] -translate-x-1/2 whitespace-nowrap rounded-xl border border-line-2 bg-panel-2 px-5 py-3 text-sm font-medium shadow-[0_16px_50px_-10px_rgba(0,0,0,0.9)]">
          <span className="text-blood-2 font-bold mr-1.5">◆</span>{toast}
        </div>
      )}

      {/* ── Level-up overlay ── */}
      {levelUp != null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 backdrop-blur-sm anim-fade"
          onClick={() => setLevelUp(null)}>
          <div className="relative text-center px-6">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full border border-blood/40"
              style={{ animation: "ringExpand 1.4s ease-out infinite" }} />
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-gold">Rank ascended</p>
            <h2 className="mt-3 font-display text-6xl sm:text-8xl font-bold uppercase text-fg"
              style={{ animation: "levelFlash 0.9s cubic-bezier(0.22,0.9,0.3,1) both", textShadow: "0 0 80px rgba(225,29,46,0.65)" }}>
              Level {levelUp}
            </h2>
            <p className="mt-3 font-display text-lg uppercase tracking-[0.2em] text-blood-2">{levelTitle(levelUp)}</p>
            <p className="mt-4 text-sm text-muted">Targets just got harder. You just got stronger.</p>
            <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.2em] text-faint">Tap anywhere to continue</p>
          </div>
        </div>
      )}
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
