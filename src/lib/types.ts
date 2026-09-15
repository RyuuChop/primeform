// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Protocol Library · Shared Types
// ─────────────────────────────────────────────────────────────

export type Goal = "muscle" | "fatloss" | "strength" | "looksmax" | "fitness";

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

export const GOAL_LABEL: Record<Goal, string> = {
  muscle: "Build Muscle",
  fatloss: "Lose Fat",
  strength: "Strength",
  looksmax: "Looksmax",
  fitness: "General Fitness",
};

export const GOAL_TAG_COLOR: Record<Goal, string> = {
  muscle: "text-red-400 border-red-500/25 bg-red-500/[0.07]",
  fatloss: "text-amber-400 border-amber-500/25 bg-amber-500/[0.07]",
  strength: "text-sky-400 border-sky-500/25 bg-sky-500/[0.07]",
  looksmax: "text-violet-400 border-violet-500/25 bg-violet-500/[0.07]",
  fitness: "text-emerald-400 border-emerald-500/25 bg-emerald-500/[0.07]",
};
