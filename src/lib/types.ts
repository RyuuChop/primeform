// ─────────────────────────────────────────────────────────────
//  ASCEND — Shared Types
// ─────────────────────────────────────────────────────────────

export type Gender = "male" | "female";
export type Experience = "beginner" | "intermediate" | "advanced";
export type Style = "home" | "gym" | "bodyweight";
export type Goal = "muscle" | "fatloss" | "strength" | "looksmax" | "fitness";

export interface Profile {
  username: string;
  displayName?: string;
  avatar?: string; // data URL
  gender: Gender;
  age: number;
  experience: Experience;
  goals: Goal[];
  style: Style;
  height?: number; // cm
  weight?: number; // kg
  bodyFat?: number; // %
  onboarded: boolean;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

export interface Completion {
  date: string; // YYYY-MM-DD local
  ts: number;
  exerciseId: string;
  exerciseName: string;
  category: Category;
  sets: number;
  reps: number; // reps per set (seconds for timed)
  timed: boolean;
  volume: number; // sets*reps
  xp: number;
}

export interface UserData {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completions: Completion[];
  dayDone: Record<string, true>; // dates where all daily challenges completed
}

export type Category = "push" | "pull" | "legs" | "core" | "conditioning" | "posture" | "neck" | "shoulders";

export interface ExerciseDef {
  id: string;
  name: string;
  category: Category;
  goals: Goal[];
  equip: "none" | "bar" | "db" | "band";
  timed?: boolean;
  base: Record<Experience, { sets: number; reps: number }>;
  cap: number; // rep cap before sets increase
  cue: string;
}

export interface Challenge {
  exerciseId: string;
  name: string;
  category: Category;
  goals: Goal[];
  sets: number;
  reps: number; // per set (seconds for timed)
  timed: boolean;
  cue: string;
  xp: number;
  volume: number;
  done: boolean;
}

export interface Tip {
  id: string;
  title: string;
  icon: string; // lucide icon key
  category: string;
  goals: Goal[];
  minutes: number;
  summary: string;
  why: string[];
  steps: string[];
  mistakes: string[];
  progression: string[];
  refs: string[];
}

// ── The whole app database lives in ONE localStorage key ──────
export interface DB {
  version: 1;
  accounts: Record<string, { password: string; createdAt: string; avatar?: string }>;
  profiles: Record<string, Profile>;
  data: Record<string, UserData>;
  session: string | null;
}

export const GOAL_LABEL: Record<Goal, string> = {
  muscle: "Build Muscle",
  fatloss: "Lose Fat",
  strength: "Strength",
  looksmax: "Looksmax",
  fitness: "General Fitness",
};

export const GOAL_TAG_COLOR: Record<Goal, string> = {
  muscle: "text-red-400 border-red-500/30 bg-red-500/10",
  fatloss: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  strength: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  looksmax: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  fitness: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
};

export const EXPERIENCE_LABEL: Record<Experience, string> = {
  beginner: "Complete Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const STYLE_LABEL: Record<Style, string> = {
  home: "Home (some equipment)",
  gym: "Full Gym",
  bodyweight: "Bodyweight Only",
};
