// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Persistence Layer (layered + self-healing)
//
//  Layer 1: main DB JSON under ASCEND_DB_V1 (+ mirror backup)
//  Layer 2: every ACCOUNT, PROFILE and DATA record also lives in
//           its own independent key (PF_ACC::user, PF_PROF::user,
//           PF_DATA::user). App updates can NEVER touch those keys
//           individually, and loadDB() rebuilds the DB from them
//           automatically — accounts survive even if the main key
//           is lost or corrupted.
//  Guard:  saveDB refuses to overwrite stored accounts with an
//           empty database.
// ─────────────────────────────────────────────────────────────
import type { DB, Profile, UserData } from "./types";

const KEY = "ASCEND_DB_V1";
const MIRROR = "ASCEND_DB_V1_MIRROR";
const IDX = "PF_USER_INDEX";
const SES = "PF_SESSION";
const ACC = (u: string) => `PF_ACC::${u}`;
const PROF = (u: string) => `PF_PROF::${u}`;
const DATA = (u: string) => `PF_DATA::${u}`;

type AccountRec = { password: string; createdAt: string; avatar?: string };

function emptyDB(): DB {
  return { version: 1, accounts: {}, profiles: {}, data: {}, session: null };
}

function sanitize(raw: unknown): DB {
  const base = emptyDB();
  if (!raw || typeof raw !== "object") return base;
  const d = raw as Partial<DB>;
  if (d.accounts && typeof d.accounts === "object") base.accounts = d.accounts as DB["accounts"];
  if (d.profiles && typeof d.profiles === "object") base.profiles = d.profiles as DB["profiles"];
  if (d.data && typeof d.data === "object") base.data = d.data as DB["data"];
  if (typeof d.session === "string") base.session = d.session;
  return base;
}

function readJSON(key: string): unknown {
  try {
    const r = localStorage.getItem(key);
    return r ? JSON.parse(r) : null;
  } catch {
    return null;
  }
}
function writeJSON(key: string, value: unknown): void {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* quota */ }
}

const profileScore = (p: Profile): number =>
  (p.onboarded ? 1e9 : 0) + Date.parse(p.updatedAt || p.createdAt || "1970-01-01");
const dataScore = (d: UserData): number =>
  (d.xp ?? 0) * 10 + (Array.isArray(d.completions) ? d.completions.length : 0);

// ── Load: merge main DB with per-user recovery layer ──────────
export function loadDB(): DB {
  const a = sanitize(readJSON(KEY));
  const b = sanitize(readJSON(MIRROR));
  let db = Object.keys(a.accounts).length >= Object.keys(b.accounts).length ? a : b;

  // discover users from the index + key scan (belt & suspenders)
  const users = new Set<string>();
  const idx = readJSON(IDX);
  if (Array.isArray(idx)) idx.forEach((u) => { if (typeof u === "string") users.add(u); });
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("PF_ACC::")) users.add(k.slice("PF_ACC::".length));
    }
  } catch { /* unavailable */ }

  users.forEach((u) => {
    const acc = readJSON(ACC(u)) as AccountRec | null;
    if (acc && typeof acc.password === "string") {
      if (!db.accounts[u]) db.accounts[u] = acc;
      else if (acc.avatar && !db.accounts[u].avatar) {
        db.accounts[u] = { ...db.accounts[u], avatar: acc.avatar };
      }
    }
    const prof = readJSON(PROF(u)) as Profile | null;
    if (prof && typeof prof.username === "string") {
      const cur = db.profiles[u];
      if (!cur || profileScore(prof) >= profileScore(cur)) db.profiles[u] = prof;
    }
    const ud = readJSON(DATA(u)) as UserData | null;
    if (ud && Array.isArray(ud.completions)) {
      const cur = db.data[u];
      if (!cur || !Array.isArray(cur.completions) || dataScore(ud) >= dataScore(cur)) {
        db.data[u] = ud;
      }
    }
  });

  // session recovery
  if (!db.session) {
    const s = readJSON(SES);
    if (typeof s === "string" && db.accounts[s]) db.session = s;
  } else if (!db.accounts[db.session]) {
    db.session = null;
  }
  return db;
}

// ── Save: main DB + per-user independent records ──────────────
export function saveDB(db: DB): void {
  const stored = sanitize(readJSON(KEY));
  const storedCount = Object.keys(stored.accounts).length;
  // Never let an empty/corrupted boot wipe real accounts
  if (Object.keys(db.accounts).length > 0 || storedCount === 0) {
    try {
      const s = JSON.stringify(db);
      localStorage.setItem(KEY, s);
      localStorage.setItem(MIRROR, s);
    } catch { /* quota */ }
  }
  try {
    const users = Object.keys(db.accounts);
    localStorage.setItem(IDX, JSON.stringify(users));
    users.forEach((u) => {
      writeJSON(ACC(u), db.accounts[u]);
      if (db.profiles[u]) writeJSON(PROF(u), db.profiles[u]);
      if (db.data[u]) writeJSON(DATA(u), db.data[u]);
    });
    if (db.session) localStorage.setItem(SES, JSON.stringify(db.session));
    else localStorage.removeItem(SES);
  } catch { /* unavailable */ }
}

// ── Auth ──────────────────────────────────────────────────────
export type AuthResult =
  | { ok: true; username: string }
  | { ok: false; error: string };

export function normalizeUsername(u: string): string {
  return u.trim().toLowerCase().replace(/\s+/g, "");
}

export function signup(db: DB, username: string, password: string): AuthResult {
  const u = normalizeUsername(username);
  if (u.length < 3) return { ok: false, error: "Username must be at least 3 characters." };
  if (!/^[a-z0-9_.-]+$/.test(u)) return { ok: false, error: "Only letters, numbers, dots, dashes, underscores." };
  if ((password ?? "").length < 4) return { ok: false, error: "Password must be at least 4 characters." };
  if (db.accounts[u]) return { ok: false, error: "Username already taken. Try another." };
  return { ok: true, username: u };
}

export function verifyLogin(db: DB, username: string, password: string): AuthResult {
  const u = normalizeUsername(username);
  if (!u) return { ok: false, error: "Enter your username." };
  if (!password) return { ok: false, error: "Enter your password." };
  const acc = db.accounts[u];
  if (!acc) return { ok: false, error: "Account not found. Sign up first." };
  if (acc.password !== password) return { ok: false, error: "Incorrect password." };
  return { ok: true, username: u };
}

// ── Per-user records ──────────────────────────────────────────
export function emptyUserData(): UserData {
  return { xp: 0, streak: 0, lastActiveDate: null, completions: [], dayDone: {} };
}

export function profileFor(db: DB, username: string): Profile | null {
  return db.profiles[username] ?? null;
}

export function dataFor(db: DB, username: string): UserData {
  const d = db.data[username];
  if (!d || !Array.isArray(d.completions)) return emptyUserData();
  return d;
}

// ── Avatar: center-crop + downscale to a tiny JPEG data URL ───
export function fileToAvatar(file: File, size = 224): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) { reject(new Error("Please choose an image file.")); return; }
    if (file.size > 10 * 1024 * 1024) { reject(new Error("Image too large — max 10 MB.")); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          if (!ctx) { reject(new Error("Image processing unavailable in this browser.")); return; }
          const s = Math.min(img.width, img.height);
          const sx = (img.width - s) / 2;
          const sy = (img.height - s) / 2;
          ctx.drawImage(img, sx, sy, s, s, 0, 0, size, size);
          resolve(canvas.toDataURL("image/jpeg", 0.85));
        } catch (e) {
          reject(e instanceof Error ? e : new Error("Image processing failed."));
        }
      };
      img.onerror = () => reject(new Error("Couldn't read that image file."));
      img.src = String(reader.result);
    };
    reader.onerror = () => reject(new Error("Couldn't read that file."));
    reader.readAsDataURL(file);
  });
}
