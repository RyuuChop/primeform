// ─────────────────────────────────────────────────────────────
//  ASCEND — Training Engine
//  Goal-matched daily challenges, progressive overload,
//  XP / levels, streaks, leaderboard seeding, chart data.
// ─────────────────────────────────────────────────────────────
import type {
  Challenge, Completion, DB, ExerciseDef, Profile,
  Style, UserData, Category,
} from "./types";
import { dataFor } from "./store";

// ── Dates ─────────────────────────────────────────────────────
export function dateKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
export function shiftKey(key: string, days: number): string {
  const d = new Date(`${key}T12:00:00`);
  d.setDate(d.getDate() + days);
  return dateKey(d);
}
export function dayDiff(a: string, b: string): number {
  const ta = new Date(`${a}T12:00:00`).getTime();
  const tb = new Date(`${b}T12:00:00`).getTime();
  return Math.round((tb - ta) / 86400000);
}
export function prettyDate(key: string): string {
  return new Date(`${key}T12:00:00`).toLocaleDateString(undefined, {
    weekday: "long", month: "short", day: "numeric",
  });
}

// ── Deterministic hash / PRNG (stable daily shuffle) ─────────
export function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── Exercise Library (proven, high-ROI movements only) ────────
export const EXERCISES: ExerciseDef[] = [
  { id: "pushup", name: "Push-Up", category: "push", goals: ["muscle", "fitness", "strength", "fatloss", "looksmax"],
    equip: "none", cap: 40,
    base: { beginner: { sets: 2, reps: 6 }, intermediate: { sets: 3, reps: 12 }, advanced: { sets: 4, reps: 20 } },
    cue: "Body in one rigid line. Chest to floor, elbows 45°, full lockout every rep." },
  { id: "diamond", name: "Diamond Push-Up", category: "push", goals: ["muscle", "strength"],
    equip: "none", cap: 25,
    base: { beginner: { sets: 2, reps: 4 }, intermediate: { sets: 3, reps: 8 }, advanced: { sets: 4, reps: 14 } },
    cue: "Thumbs + index fingers touch under your sternum. Elbows track tight along your ribs." },
  { id: "pike", name: "Pike Push-Up", category: "shoulders", goals: ["muscle", "looksmax", "strength"],
    equip: "none", cap: 25,
    base: { beginner: { sets: 2, reps: 4 }, intermediate: { sets: 3, reps: 8 }, advanced: { sets: 4, reps: 12 } },
    cue: "Hips high in an inverted V. Lower your crown toward the floor, press straight up. Builds the shoulder cap." },
  { id: "squat", name: "Bodyweight Squat", category: "legs", goals: ["muscle", "fitness", "fatloss", "strength"],
    equip: "none", cap: 50,
    base: { beginner: { sets: 2, reps: 10 }, intermediate: { sets: 3, reps: 20 }, advanced: { sets: 4, reps: 30 } },
    cue: "Knees track over toes, heels planted, hips below parallel. Chest up the whole way." },
  { id: "bulgarian", name: "Bulgarian Split Squat", category: "legs", goals: ["muscle", "strength"],
    equip: "none", cap: 20,
    base: { beginner: { sets: 2, reps: 6 }, intermediate: { sets: 3, reps: 10 }, advanced: { sets: 4, reps: 14 } },
    cue: "Rear foot on a chair. Drop straight down until back knee nearly touches floor. Reps are per leg." },
  { id: "lunge", name: "Reverse Lunge", category: "legs", goals: ["muscle", "fatloss", "fitness"],
    equip: "none", cap: 30,
    base: { beginner: { sets: 2, reps: 8 }, intermediate: { sets: 3, reps: 12 }, advanced: { sets: 4, reps: 18 } },
    cue: "Step back, drop the back knee to an inch off the floor, drive through the front heel. Per leg." },
  { id: "pullup", name: "Pull-Up", category: "pull", goals: ["muscle", "strength", "looksmax", "fitness"],
    equip: "bar", cap: 20,
    base: { beginner: { sets: 3, reps: 1 }, intermediate: { sets: 3, reps: 5 }, advanced: { sets: 4, reps: 10 } },
    cue: "Dead hang to chin over bar. No kicking. The single best V-taper builder there is." },
  { id: "row", name: "Inverted Row", category: "pull", goals: ["muscle", "fitness", "looksmax"],
    equip: "none", cap: 30,
    base: { beginner: { sets: 2, reps: 6 }, intermediate: { sets: 3, reps: 12 }, advanced: { sets: 4, reps: 18 } },
    cue: "Under a sturdy table or low bar. Body straight, pull chest to the edge, squeeze shoulder blades." },
  { id: "dip", name: "Bench Dip", category: "push", goals: ["muscle", "strength"],
    equip: "none", cap: 30,
    base: { beginner: { sets: 2, reps: 6 }, intermediate: { sets: 3, reps: 12 }, advanced: { sets: 4, reps: 18 } },
    cue: "Hands on a chair behind you. Shoulders down away from ears, elbows to 90°, press tall." },
  { id: "plank", name: "Plank Hold", category: "core", goals: ["fitness", "fatloss", "looksmax", "strength", "muscle"],
    equip: "none", timed: true, cap: 120,
    base: { beginner: { sets: 2, reps: 20 }, intermediate: { sets: 3, reps: 40 }, advanced: { sets: 3, reps: 60 } },
    cue: "Forearms down, ribs tucked, glutes squeezed. Seconds per set. No sagging hips." },
  { id: "legraise", name: "Lying Leg Raise", category: "core", goals: ["muscle", "fitness", "looksmax"],
    equip: "none", cap: 30,
    base: { beginner: { sets: 2, reps: 8 }, intermediate: { sets: 3, reps: 14 }, advanced: { sets: 3, reps: 20 } },
    cue: "Lower back glued to the floor. Legs up to 90°, lower slowly without touching down." },
  { id: "burpee", name: "Burpee", category: "conditioning", goals: ["fatloss", "fitness"],
    equip: "none", cap: 30,
    base: { beginner: { sets: 2, reps: 5 }, intermediate: { sets: 3, reps: 10 }, advanced: { sets: 4, reps: 15 } },
    cue: "Chest to floor at the bottom, full jump with hands overhead at the top. Pace yourself." },
  { id: "jumpsquat", name: "Jump Squat", category: "conditioning", goals: ["fatloss", "strength"],
    equip: "none", cap: 40,
    base: { beginner: { sets: 2, reps: 6 }, intermediate: { sets: 3, reps: 12 }, advanced: { sets: 4, reps: 18 } },
    cue: "Land soft on the mid-foot, sink straight into the next rep. Knees track out." },
  { id: "climbers", name: "Mountain Climbers", category: "conditioning", goals: ["fatloss", "fitness"],
    equip: "none", timed: true, cap: 90,
    base: { beginner: { sets: 2, reps: 20 }, intermediate: { sets: 3, reps: 30 }, advanced: { sets: 4, reps: 45 } },
    cue: "Push-up position, drive knees to chest fast, hips level. Seconds per set." },
  { id: "wallsit", name: "Wall Sit", category: "legs", goals: ["fatloss", "fitness", "strength"],
    equip: "none", timed: true, cap: 120,
    base: { beginner: { sets: 2, reps: 20 }, intermediate: { sets: 3, reps: 35 }, advanced: { sets: 3, reps: 55 } },
    cue: "Back flat on the wall, thighs parallel to the floor, 90° knee angle. Seconds per set." },
  { id: "latraise", name: "Lateral Raise", category: "shoulders", goals: ["looksmax", "muscle"],
    equip: "db", cap: 30,
    base: { beginner: { sets: 2, reps: 10 }, intermediate: { sets: 3, reps: 15 }, advanced: { sets: 4, reps: 20 } },
    cue: "Water bottles work. Raise to shoulder height, slight elbow bend, control the drop. Width = aesthetics." },
  { id: "ohp", name: "Overhead Press", category: "shoulders", goals: ["strength", "muscle", "looksmax"],
    equip: "db", cap: 20,
    base: { beginner: { sets: 2, reps: 6 }, intermediate: { sets: 3, reps: 10 }, advanced: { sets: 4, reps: 14 } },
    cue: "Bottles or dumbbells. Ribs down, glutes tight, press to full lockout over the mid-line." },
  { id: "ytw", name: "Prone Y-T-W Raise", category: "posture", goals: ["looksmax", "fitness"],
    equip: "none", cap: 25,
    base: { beginner: { sets: 2, reps: 6 }, intermediate: { sets: 3, reps: 10 }, advanced: { sets: 3, reps: 14 } },
    cue: "Face down, thumbs up, lift arms into Y then T then W shapes. Undoes desk posture, opens the frame." },
  { id: "facepull", name: "Band Face Pull", category: "posture", goals: ["looksmax", "fitness"],
    equip: "band", cap: 30,
    base: { beginner: { sets: 2, reps: 10 }, intermediate: { sets: 3, reps: 15 }, advanced: { sets: 4, reps: 20 } },
    cue: "Band anchored high. Pull to your forehead, elbows high, rotate knuckles back. Fixes rounded shoulders." },
  { id: "neckcurl", name: "Neck Curl", category: "neck", goals: ["looksmax"],
    equip: "none", cap: 30,
    base: { beginner: { sets: 2, reps: 10 }, intermediate: { sets: 3, reps: 16 }, advanced: { sets: 3, reps: 22 } },
    cue: "Lying on a bench, head off the edge, hands lightly on forehead. Curl chin to chest, slow negative." },
  { id: "neckext", name: "Neck Extension", category: "neck", goals: ["looksmax"],
    equip: "none", cap: 30,
    base: { beginner: { sets: 2, reps: 10 }, intermediate: { sets: 3, reps: 16 }, advanced: { sets: 3, reps: 22 } },
    cue: "Face down, head off the edge. Extend the neck to horizontal and control the return. Thick neck signals strength." },
  { id: "deadhang", name: "Dead Hang", category: "posture", goals: ["looksmax", "fitness", "strength"],
    equip: "bar", timed: true, cap: 90,
    base: { beginner: { sets: 2, reps: 15 }, intermediate: { sets: 2, reps: 30 }, advanced: { sets: 3, reps: 45 } },
    cue: "Full grip, shoulders engaged slightly, breathe. Decompresses the spine, builds grip. Seconds per set." },
  { id: "calf", name: "Standing Calf Raise", category: "legs", goals: ["muscle", "looksmax", "fitness"],
    equip: "none", cap: 50,
    base: { beginner: { sets: 2, reps: 12 }, intermediate: { sets: 3, reps: 20 }, advanced: { sets: 4, reps: 28 } },
    cue: "Full stretch at the bottom, one-second pause at the very top. Slow and strict." },
  { id: "glutebridge", name: "Glute Bridge", category: "posture", goals: ["fitness", "looksmax", "fatloss"],
    equip: "none", cap: 40,
    base: { beginner: { sets: 2, reps: 10 }, intermediate: { sets: 3, reps: 16 }, advanced: { sets: 4, reps: 22 } },
    cue: "Drive through heels, squeeze glutes hard at the top, ribs down. Wakes up a dormant posterior chain." },
];

const EQUIP_OK: Record<Style, Set<string>> = {
  bodyweight: new Set(["none"]),
  home: new Set(["none", "db", "band"]),
  gym: new Set(["none", "db", "band", "bar"]),
};

// ── Progressive Overload Prescription ─────────────────────────
function prescribe(ex: ExerciseDef, profile: Profile, completions: Completion[]): {
  sets: number; reps: number; note: string;
} {
  const base = ex.base[profile.experience];
  const count = completions.filter((c) => c.exerciseId === ex.id).length;
  const steps = Math.floor(count / 2); // every 2 completions = 1 progression step
  let reps = base.reps + steps;
  let sets = base.sets;
  let note = "";
  if (reps > ex.cap) {
    const extra = Math.ceil((reps - ex.cap) / Math.max(2, Math.floor(ex.cap / 2)));
    sets = Math.min(base.sets + extra, 6);
    reps = ex.cap;
    note = "Volume upgraded — extra set added";
  } else if (steps >= 6) {
    note = "You've leveled this movement — reps keep climbing";
  }
  return { sets, reps, note };
}

// ── Daily Challenge Generation (deterministic per day) ───────
export function todayChallenges(db: DB, profile: Profile): Challenge[] {
  const today = dateKey();
  const data = dataFor(db, profile.username);
  const allowed = EQUIP_OK[profile.style];
  const primaryGoal = profile.goals[0] ?? "fitness";

  const pool = EXERCISES.filter((e) => {
    if (!allowed.has(e.equip)) {
      // beginners on bodyweight/home still get a pull movement via rows — bar exercises excluded
      return false;
    }
    return e.goals.some((g) => profile.goals.includes(g));
  });

  const rng = mulberry32(hashStr(`${today}:${profile.username}:${profile.goals.join(",")}`));
  const shuffled = [...pool].sort(() => rng() - 0.5);

  const picked: ExerciseDef[] = [];
  const seenCat = new Set<Category>();

  // Pass 1 — guarantee coverage of up to 3 distinct goals
  for (const g of profile.goals) {
    if (picked.length >= 3) break;
    const cand = shuffled.find((e) => e.goals.includes(g) && !picked.includes(e) && !seenCat.has(e.category));
    if (cand) { picked.push(cand); seenCat.add(cand.category); }
  }
  // Pass 2 — fill remaining slots preferring unused categories
  for (const e of shuffled) {
    if (picked.length >= 3) break;
    if (picked.includes(e) || seenCat.has(e.category)) continue;
    picked.push(e); seenCat.add(e.category);
  }
  // Pass 3 — absolute fill (repeat categories allowed)
  for (const e of shuffled) {
    if (picked.length >= 3) break;
    if (!picked.includes(e)) picked.push(e);
  }
  // Fallback if profile yields an empty pool at all
  if (picked.length === 0) picked.push(...EXERCISES.filter((e) => e.equip === "none").slice(0, 3));

  return picked.map((ex) => {
    const { sets, reps } = prescribe(ex, profile, data.completions);
    const volume = sets * reps;
    const xp = Math.max(8, Math.round(volume / (ex.timed ? 2 : 1.4)) + 6);
    return {
      exerciseId: ex.id, name: ex.name, category: ex.category,
      goals: ex.goals.filter((g) => profile.goals.includes(g)).length
        ? ex.goals.filter((g) => profile.goals.includes(g))
        : [primaryGoal],
      sets, reps, timed: !!ex.timed, cue: ex.cue, xp, volume,
      done: data.completions.some((c) => c.date === today && c.exerciseId === ex.id),
    };
  });
}

// ── XP / Levels ───────────────────────────────────────────────
export function xpForLevel(level: number): number {
  return 120 * level + 40 * level * (level - 1); // xp needed to go level → level+1
}
export function levelFromXp(xp: number): { level: number; into: number; next: number } {
  let level = 1;
  let remaining = Math.max(0, Math.floor(xp));
  while (remaining >= xpForLevel(level)) {
    remaining -= xpForLevel(level);
    level += 1;
  }
  return { level, into: remaining, next: xpForLevel(level) };
}
export const LEVEL_TITLES = ["Newblood", "Grinder", "Acolyte", "Operator", "Machine", "Savage", "Elite", "Prime", "Apex"];
export function levelTitle(level: number): string {
  return LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
}

// ── Streak + Completion Recording ─────────────────────────────
export function recordCompletion(data: UserData, ch: Challenge, todayKey: string): UserData {
  const c: Completion = {
    date: todayKey, ts: Date.now(), exerciseId: ch.exerciseId, exerciseName: ch.name,
    category: ch.category, sets: ch.sets, reps: ch.reps, timed: ch.timed,
    volume: ch.volume, xp: ch.xp,
  };
  let streak = data.streak;
  const hadToday = data.completions.some((x) => x.date === todayKey);
  if (!hadToday) {
    if (data.lastActiveDate && dayDiff(data.lastActiveDate, todayKey) === 1) streak += 1;
    else if (!data.lastActiveDate || dayDiff(data.lastActiveDate, todayKey) > 1) streak = 1;
  }
  return {
    ...data,
    xp: data.xp + ch.xp,
    streak,
    lastActiveDate: todayKey,
    completions: [...data.completions, c],
  };
}

export function markDayDone(data: UserData, todayKey: string): UserData {
  const bonus = 25;
  return {
    ...data,
    xp: data.xp + bonus,
    dayDone: { ...data.dayDone, [todayKey]: true },
  };
}

// ── Stats ─────────────────────────────────────────────────────
export interface Trend { pct: number; dir: "up" | "down" | "flat" }
export function weeklyVolume(data: UserData, endKey: string): number {
  let v = 0;
  for (let i = 0; i < 7; i++) {
    const k = shiftKey(endKey, -i);
    v += data.completions.filter((c) => c.date === k).reduce((s, c) => s + c.volume, 0);
  }
  return v;
}
export function trendPct(current: number, previous: number): Trend {
  if (previous === 0 && current === 0) return { pct: 0, dir: "flat" };
  if (previous === 0) return { pct: 100, dir: "up" };
  const pct = Math.round(((current - previous) / previous) * 100);
  return { pct: Math.abs(pct), dir: pct > 0 ? "up" : pct < 0 ? "down" : "flat" };
}
export function sessionsThisWeek(data: UserData, endKey: string): number {
  const days = new Set<string>();
  for (let i = 0; i < 7; i++) days.add(shiftKey(endKey, -i));
  let n = 0;
  days.forEach((d) => { if (data.completions.some((c) => c.date === d)) n += 1; });
  return n;
}

// ── Chart Builders ────────────────────────────────────────────
export function last7Days(data: UserData): { day: string; volume: number; xp: number }[] {
  const today = dateKey();
  const out = [];
  for (let i = 6; i >= 0; i--) {
    const k = shiftKey(today, -i);
    const cs = data.completions.filter((c) => c.date === k);
    out.push({
      day: new Date(`${k}T12:00:00`).toLocaleDateString(undefined, { weekday: "short" }),
      volume: cs.reduce((s, c) => s + c.volume, 0),
      xp: cs.reduce((s, c) => s + c.xp, 0),
    });
  }
  return out;
}
export function cumulativeXp(data: UserData, days = 14): { date: string; xp: number }[] {
  const today = dateKey();
  const totalXp = data.xp;
  // walk backwards distributing actual xp per day
  const perDay: Record<string, number> = {};
  data.completions.forEach((c) => { perDay[c.date] = (perDay[c.date] ?? 0) + c.xp; });
  const out: { date: string; xp: number }[] = [];
  let run = totalXp;
  const daily: number[] = [];
  for (let i = 0; i < days; i++) daily.push(perDay[shiftKey(today, -i)] ?? 0);
  // bonus XP for done days
  for (let i = 0; i < days; i++) {
    const k = shiftKey(today, -i);
    if (data.dayDone[k]) daily[i] += 25;
  }
  for (let i = days - 1; i >= 0; i--) {
    out.unshift({
      date: new Date(`${shiftKey(today, -i)}T12:00:00`).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      xp: run,
    });
    run -= daily[i] ?? 0;
  }
  return out.map((p) => ({ ...p, xp: Math.max(0, p.xp) }));
}
export function progressionSeries(data: UserData, exerciseIds: string[], days = 14): { date: string; [k: string]: string | number }[] {
  const today = dateKey();
  const keys = Array.from({ length: days }, (_, i) => shiftKey(today, -(days - 1 - i)));
  return keys.map((k) => {
    const row: { date: string; [k: string]: string | number } = {
      date: new Date(`${k}T12:00:00`).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
    };
    exerciseIds.forEach((id) => {
      const cs = data.completions.filter((c) => c.date === k && c.exerciseId === id);
      if (cs.length) {
        const best = Math.max(...cs.map((c) => c.reps));
        row[id] = best;
      }
    });
    return row;
  });
}
export function categorySplit(data: UserData): { name: string; value: number; color: string }[] {
  const colors: Record<string, string> = {
    push: "#ef4444", pull: "#3b82f6", legs: "#22c55e", core: "#eab308",
    conditioning: "#f97316", posture: "#a78bfa", neck: "#14b8a6", shoulders: "#f43f5e",
  };
  const totals: Record<string, number> = {};
  data.completions.forEach((c) => { totals[c.category] = (totals[c.category] ?? 0) + c.volume; });
  return Object.entries(totals)
    .map(([name, value]) => ({ name: name[0].toUpperCase() + name.slice(1), value, color: colors[name] ?? "#888" }))
    .sort((a, b) => b.value - a.value);
}
export function consistencyGrid(data: UserData, weeks = 7): { key: string; on: boolean; count: number }[][] {
  const today = dateKey();
  // build columns = weeks, rows = 7 days ending today
  const cols: { key: string; on: boolean; count: number }[][] = [];
  for (let w = weeks - 1; w >= 0; w--) {
    const col: { key: string; on: boolean; count: number }[] = [];
    for (let d = 6; d >= 0; d--) {
      const k = shiftKey(today, -(w * 7 + d));
      const count = data.completions.filter((c) => c.date === k).length || (data.dayDone[k] ? 1 : 0);
      col.push({ key: k, on: count > 0, count });
    }
    cols.push(col);
  }
  return cols; // oldest week first — reads left → right
}
export function bestSet(data: UserData, exerciseId: string): number {
  const cs = data.completions.filter((c) => c.exerciseId === exerciseId);
  return cs.length ? Math.max(...cs.map((c) => c.reps)) : 0;
}
export function totalVolume(data: UserData): number {
  return data.completions.reduce((s, c) => s + c.volume, 0);
}
export function trainedDays(data: UserData): number {
  return new Set(data.completions.map((c) => c.date)).size;
}

// ── Leaderboard ───────────────────────────────────────────────
const BOTS: { name: string; xp: number; streak: number; vol: number; days: number }[] = [
  { name: "kaito.ascends", xp: 4820, streak: 41, vol: 18900, days: 47 },
  { name: "mog_machine", xp: 4310, streak: 22, vol: 17150, days: 39 },
  { name: "leonidas.r", xp: 4015, streak: 30, vol: 14900, days: 36 },
  { name: "frame_builder", xp: 3560, streak: 18, vol: 12800, days: 31 },
  { name: "sigma.sam", xp: 3190, streak: 15, vol: 11200, days: 28 },
  { name: "chrome_jaw", xp: 2740, streak: 12, vol: 9400, days: 24 },
  { name: "vtaper.vin", xp: 2310, streak: 9, vol: 8100, days: 21 },
  { name: "hunter_eyes", xp: 1980, streak: 11, vol: 6900, days: 19 },
  { name: "delts.dan", xp: 1610, streak: 7, vol: 5600, days: 16 },
  { name: "posture.prime", xp: 1290, streak: 6, vol: 4300, days: 13 },
  { name: "grit.gabe", xp: 940, streak: 5, vol: 3100, days: 10 },
  { name: "day.one.dre", xp: 520, streak: 3, vol: 1700, days: 6 },
  { name: "looks.arc.leo", xp: 310, streak: 2, vol: 950, days: 4 },
];

export interface RankRow {
  rank: number; name: string; level: number; title: string; streak: number;
  volume: number; days: number; score: number; you: boolean; avatar?: string;
}
export function leaderboard(db: DB, profile: Profile): RankRow[] {
  const rnd = mulberry32(hashStr(dateKey())); // small daily jitter keeps board alive
  const rows: RankRow[] = BOTS.map((b) => {
    const jitter = 1 + rnd() * 0.04;
    const vol = Math.round(b.vol * jitter);
    const lv = levelFromXp(Math.round(b.xp * jitter));
    const score = Math.round(b.xp * jitter * 0.6 + vol * 0.25 + b.streak * 90 + b.days * 35);
    return { rank: 0, name: b.name, level: lv.level, title: levelTitle(lv.level), streak: b.streak, volume: vol, days: b.days, score, you: false };
  });
  // real users from this device join the board
  Object.values(db.profiles).forEach((p) => {
    if (!p.onboarded) return;
    const d = dataFor(db, p.username);
    const vol = totalVolume(d);
    const days = trainedDays(d);
    const lv = levelFromXp(d.xp);
    const score = Math.round(d.xp * 0.6 + vol * 0.25 + d.streak * 90 + days * 35);
    rows.push({
      rank: 0, name: p.displayName?.trim() || p.username, level: lv.level,
      title: levelTitle(lv.level), streak: d.streak, volume: vol, days, score,
      you: p.username === profile.username,
      avatar: p.avatar ?? db.accounts[p.username]?.avatar,
    });
  });
  rows.sort((a, b) => b.score - a.score);
  rows.forEach((r, i) => { r.rank = i + 1; });
  return rows;
}

// ── Tips count helper for landing ─────────────────────────────
export function poolSize(profile: Profile): number {
  const allowed = EQUIP_OK[profile.style];
  return EXERCISES.filter((e) => allowed.has(e.equip) && e.goals.some((g) => profile.goals.includes(g))).length;
}
export { EXERCISES as exerciseLibrary };
