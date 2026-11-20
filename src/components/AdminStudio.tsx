import { useState } from "react";
import { Btn } from "../ui";
import { TIP_CATEGORIES } from "../lib/tips";
import type { Tip } from "../lib/types";

type Source = { title: string; url: string };
type Editor = { [K in keyof Required<Tip>]: string };

const listFields = ["why", "steps", "mistakes", "progression", "safety", "keywords", "refs"] as const;
const inputStyle =
  "w-full rounded-xl border border-line-2 bg-ink-2 px-4 py-3 text-sm text-fg outline-none focus:border-gold/50";
const labelStyle = "mb-1.5 block font-mono text-[10px] font-semibold uppercase tracking-wider text-muted";

function toEditor(tip: Tip): Editor {
  return {
    id: tip.id,
    title: tip.title,
    icon: tip.icon,
    category: tip.category,
    goals: tip.goals.join(", "),
    minutes: String(tip.minutes),
    summary: tip.summary,
    why: tip.why.join("\n"),
    steps: tip.steps.join("\n"),
    mistakes: tip.mistakes.join("\n"),
    progression: tip.progression.join("\n"),
    safety: (tip.safety || []).join("\n"),
    keywords: (tip.keywords || []).join("\n"),
    refs: tip.refs.join("\n"),
  };
}

function toDraft(editor: Editor) {
  return {
    ...editor,
    minutes: Number(editor.minutes),
    goals: editor.goals
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    ...Object.fromEntries(
      listFields.map((key) => [
        key,
        editor[key]
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean),
      ])
    ),
  };
}

async function request(secret: string, action: string, payload: object = {}) {
  const response = await fetch("/.netlify/functions/admin-studio", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminSecret: secret.trim(), action, payload }),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("The studio service returned an invalid response.");
  }

  if (!response.ok) {
    throw new Error(data?.error || `The studio request failed (HTTP ${response.status}).`);
  }
  return data;
}

export default function AdminStudio({ onExit }: { onExit: () => void }) {
  const [secret, setSecret] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState(TIP_CATEGORIES[0]);
  const [notes, setNotes] = useState("");
  const [editor, setEditor] = useState<Editor | null>(null);
  const [sources, setSources] = useState<Source[]>([]);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ commitUrl?: string; filePath: string } | null>(null);

  const run = async (action: string, payload: object, done: (data: any) => void) => {
    setError("");
    setBusy(action);
    try {
      done(await request(secret, action, payload));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy("");
    }
  };

  const handleUnlock = () => {
    if (!secret.trim() || busy) return;
    void run("unlock", {}, () => setUnlocked(true));
  };

  const update = (key: keyof Editor, value: string) =>
    setEditor((current) => current && { ...current, [key]: value });

  return (
    <main className="min-h-screen bg-ink px-4 py-10 text-fg sm:px-8">
      <div className="mx-auto max-w-4xl space-y-6 rounded-2xl border border-gold/35 bg-gold/[0.04] p-6 sm:p-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-2">
              PRIMEFORM · STANDALONE WORKSPACE
            </p>
            <h1 className="mt-1 font-display text-2xl font-medium text-gold-2 sm:text-3xl">
              {unlocked ? "Admin Protocol Studio" : "Admin Studio Unlock"}
            </h1>
          </div>
          <button
            type="button"
            onClick={onExit}
            className="rounded-full border border-line-2 px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-gold/40 hover:text-fg cursor-pointer"
          >
            Back to Primeform
          </button>
        </header>

        {!unlocked ? (
          <form
            className="max-w-md space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleUnlock();
            }}
          >
            <label className="block">
              <span className={labelStyle}>Admin secret</span>
              <input
                className={inputStyle}
                type="password"
                autoComplete="off"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                required
              />
            </label>
            <Btn type="submit" variant="gold" disabled={!!busy || !secret.trim()} onClick={handleUnlock}>
              {busy ? "Unlocking…" : "Unlock"}
            </Btn>
          </form>
        ) : (
          <div className="space-y-5">
            <p className="text-sm text-muted">
              Research is a starting point, not medical advice. Verify the evidence, references and safety before publishing.
            </p>

            <label className="block">
              <span className={labelStyle}>Topic / Prompt</span>
              <input
                className={inputStyle}
                maxLength={500}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </label>

            <label className="block">
              <span className={labelStyle}>Category</span>
              <select
                className={inputStyle}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {TIP_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className={labelStyle}>Extra notes / focus (optional)</span>
              <textarea
                className={inputStyle}
                rows={3}
                maxLength={2000}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>

            <Btn
              type="button"
              variant="gold"
              disabled={!!busy || !topic.trim()}
              onClick={() => {
                setResult(null);
                void run(
                  "research_and_draft",
                  { topic, category, notes },
                  (data) => {
                    setEditor(toEditor(data.draft));
                    setSources(data.sources || []);
                  }
                );
              }}
            >
              {busy === "research_and_draft" ? "Researching and drafting…" : "Research & Generate Draft"}
            </Btn>

            {sources.length > 0 && (
              <div className="space-y-2 rounded-xl border border-line bg-ink-2/70 p-4">
                <h2 className={labelStyle}>Research sources used</h2>
                <ul className="space-y-1 text-sm">
                  {sources.map((s, i) => (
                    <li key={i}>
                      <a
                        className="break-all text-gold-2 underline"
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {editor && (
              <div className="space-y-4 border-t border-line pt-6">
                <h2 className="font-display text-xl">Review &amp; edit draft</h2>
                {(
                  [
                    ["id", "ID (unique URL slug)"],
                    ["title", "Title"],
                    ["icon", "Icon key"],
                    ["goals", "Goals (comma-separated: muscle, fatloss, strength, looksmax, fitness)"],
                    ["minutes", "Read time in minutes"],
                  ] as const
                ).map(([key, label]) => (
                  <label className="block" key={key}>
                    <span className={labelStyle}>{label}</span>
                    <input
                      className={inputStyle}
                      value={editor[key]}
                      onChange={(e) => update(key, e.target.value)}
                    />
                  </label>
                ))}

                <label className="block">
                  <span className={labelStyle}>Category / target file</span>
                  <select
                    className={inputStyle}
                    value={editor.category}
                    onChange={(e) => update("category", e.target.value)}
                  >
                    {TIP_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>

                {(
                  [
                    ["summary", "Summary"],
                    ["why", "Why"],
                    ["steps", "Actionable steps"],
                    ["mistakes", "Mistakes"],
                    ["progression", "Progression"],
                    ["safety", "Safety / educational notes"],
                    ["keywords", "Keywords"],
                    ["refs", "References (title and URL)"],
                  ] as const
                ).map(([key, label]) => (
                  <label className="block" key={key}>
                    <span className={labelStyle}>
                      {label}
                      {key !== "summary" && " — one per line"}
                    </span>
                    <textarea
                      className={inputStyle}
                      rows={key === "summary" ? 3 : 5}
                      value={editor[key]}
                      onChange={(e) => update(key, e.target.value)}
                    />
                  </label>
                ))}

                <Btn
                  type="button"
                  variant="gold"
                  disabled={!!busy}
                  onClick={() => {
                    setResult(null);
                    void run("publish_protocol", { draft: toDraft(editor) }, (data) => setResult(data));
                  }}
                >
                  {busy === "publish_protocol" ? "Publishing…" : "Publish to GitHub"}
                </Btn>
              </div>
            )}

            {result && (
              <p role="status" className="text-sm text-emerald-400">
                Published to {result.filePath}.{" "}
                {result.commitUrl && (
                  <a href={result.commitUrl} target="_blank" rel="noopener noreferrer" className="underline">
                    View commit
                  </a>
                )}{" "}
                Netlify will auto-deploy if deploys are enabled for the configured branch.
              </p>
            )}
          </div>
        )}

        {error && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}