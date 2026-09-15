import { useState } from "react";
import {
  BookOpen, CheckCircle2, ChevronDown, CircleAlert,
  CircleHelp, SendHorizontal, ShieldCheck,
} from "lucide-react";
import { Btn, Overlay, Tag } from "../ui";
import { cn } from "../utils/cn";
import { TIP_CATEGORIES, TIPS } from "../lib/tips";

// ── Web3Forms access key — yahan apni key paste karo ──────────
// web3forms.com pe free account banao (sirf email chahiye), key
// email me mil jayegi. Key ke bina form submit nahi hoga.
const WEB3FORMS_ACCESS_KEY = "";

type ReqType = "Tip Request" | "New Category" | "Bug Report" | "Something Else";

const REQ_TYPES: ReqType[] = ["Tip Request", "New Category", "Bug Report", "Something Else"];

const FAQS = [
  {
    q: "What is Primeform?",
    a: "A curated library of evidence-based protocols across training, nutrition, recovery, sleep, looksmaxing and mindset — built to cut through fitness myths. Every claim traces back to published research.",
  },
  {
    q: "Are these tips actually reliable?",
    a: `Yes. All ${TIPS.length} protocols are grounded in peer-reviewed studies, meta-analyses, or official guidelines — over 280 sources cited in total. Where the evidence is weak or mixed, the tip says so honestly.`,
  },
  {
    q: "How do I find what I need?",
    a: `Use the search bar, the ${TIP_CATEGORIES.length} category pills, or the goal filters on the main page. If something specific is still missing, request it below.`,
  },
  {
    q: "Is it free?",
    a: "Completely — free forever, no ads, no sign-up, no paywall. If it helped you, the Support button keeps the work independent.",
  },
  {
    q: "Can I request a topic or category?",
    a: "That's exactly what the form below is for. Ask for a specific tip, a whole new category, or report anything broken — real reader requests decide what gets built next.",
  },
];

export default function HelpModal({ onClose }: { onClose: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [type, setType] = useState<ReqType>("Tip Request");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "no-key">("idle");

  const submit = async () => {
    if (message.trim().length < 5) return;
    if (!WEB3FORMS_ACCESS_KEY) { setStatus("no-key"); return; }
    try {
      setStatus("sending");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Primeform Help: ${type}`,
          from_name: "Primeform Site",
          name: contact.trim() || "Anonymous reader",
          message: `Type: ${type}\n\n${message.trim()}\n\nReply-to: ${contact.trim() || "not provided"}`,
          botcheck: "",
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Overlay onClose={onClose} wide>
      <div className="px-6 pb-9 pt-11 sm:px-10">
        {/* header */}
        <header className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.06] text-gold-2 shadow-[0_0_30px_-8px_rgba(216,180,106,0.5)]">
            <CircleHelp size={22} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium leading-tight">Help &amp; Requests</h2>
            <p className="mt-0.5 text-sm text-muted">
              Quick answers below — or tell me exactly what you're looking for.
            </p>
          </div>
        </header>

        {/* FAQ */}
        <section className="mt-8">
          <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-2">
            <BookOpen size={12} /> Frequently Asked
          </p>
          <div className="mt-4 space-y-2.5">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i}
                  className={cn(
                    "overflow-hidden rounded-xl border transition-colors duration-200",
                    open ? "border-gold/35 bg-gold/[0.04]" : "border-line bg-ink-2/60 hover:border-line-2",
                  )}>
                  <button onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-4.5 py-3.5 text-left cursor-pointer">
                    <span className="text-sm font-semibold text-fg">{f.q}</span>
                    <ChevronDown size={16}
                      className={cn("shrink-0 text-faint transition-transform duration-300", open && "rotate-180 text-gold-2")} />
                  </button>
                  <div className={cn(
                    "grid transition-all duration-300",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}>
                    <div className="overflow-hidden">
                      <p className="px-4.5 pb-4 text-sm leading-relaxed text-muted">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* request form */}
        <section className="mt-9 border-t border-line/60 pt-8">
          <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-2">
            <SendHorizontal size={12} /> Request Something Specific
          </p>

          {status === "sent" ? (
            <div className="mt-5 flex flex-col items-center gap-3 rounded-xl border border-gold/30 bg-gold/[0.05] px-6 py-10 text-center">
              <CheckCircle2 size={40} className="text-gold-2" />
              <p className="font-display text-xl font-medium">Request received!</p>
              <p className="max-w-xs text-sm text-muted">
                Thank you — real reader requests decide what gets built next.
                {contact.trim() && " I'll get back to you at the contact you left."}
              </p>
              <Btn variant="outline" onClick={onClose} className="mt-2">Back To The Library</Btn>
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              {/* type chips */}
              <div className="flex flex-wrap gap-2">
                {REQ_TYPES.map((t) => (
                  <button key={t} onClick={() => setType(t)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                      type === t
                        ? "border-gold/60 bg-gold/10 text-gold-2 shadow-[0_0_20px_-8px_rgba(216,180,106,0.55)]"
                        : "border-line-2 bg-panel text-muted hover:border-gold/30 hover:text-fg",
                    )}>
                    {type === t ? "◆ " : ""}{t}
                  </button>
                ))}
              </div>

              {/* message */}
              <label className="block">
                <span className="mb-1.5 block font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  What are you looking for?
                </span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  maxLength={1000}
                  placeholder="e.g. 'A tip on training while fasting' or 'Add a Mental Health category'…"
                  className="w-full resize-none rounded-xl border border-line-2 bg-ink-2 px-4 py-3 text-sm font-medium text-fg outline-none transition-colors placeholder:font-normal placeholder:text-faint focus:border-gold/50"
                />
                <span className="mt-1 block text-right font-mono text-[10px] text-faint">
                  {message.length}/1000
                </span>
              </label>

              {/* contact */}
              <label className="block">
                <span className="mb-1.5 flex items-baseline justify-between font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Email or WhatsApp
                  <span className="text-[10px] font-mono text-faint normal-case tracking-normal">optional — for a reply</span>
                </span>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  maxLength={120}
                  placeholder="you@example.com or +92 3xx xxxxxxx"
                  className="w-full rounded-xl border border-line-2 bg-ink-2 px-4 py-3 text-sm font-medium text-fg outline-none transition-colors placeholder:font-normal placeholder:text-faint focus:border-gold/50"
                />
              </label>

              {/* status notes */}
              {status === "sending" && (
                <p className="text-sm text-muted">Sending your request…</p>
              )}
              {status === "no-key" && (
                <p className="flex items-start gap-2 rounded-lg border border-amber-500/25 bg-amber-500/[0.06] px-3.5 py-2.5 text-[13px] leading-relaxed text-amber-200/90">
                  <CircleAlert size={14} className="mt-0.5 shrink-0 text-amber-400" />
                  The request inbox is being set up — it will be live shortly. Meanwhile, use the Support button for anything urgent.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-start gap-2 rounded-lg border border-red-500/25 bg-red-500/[0.06] px-3.5 py-2.5 text-[13px] leading-relaxed text-red-200/90">
                  <CircleAlert size={14} className="mt-0.5 shrink-0 text-red-400" />
                  Couldn't send right now — please try again in a moment.
                </p>
              )}

              <Btn variant="gold" onClick={submit} disabled={status === "sending" || message.trim().length < 5}
                className="w-full">
                <SendHorizontal size={15} /> Send Request
              </Btn>

              <p className="flex items-center justify-center gap-1.5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                <ShieldCheck size={12} className="text-gold-2/70" /> Goes straight to the creator — no spam, ever
              </p>
            </div>
          )}
        </section>

        {/* categories hint */}
        <section className="mt-8 border-t border-line/60 pt-6">
          <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Already on the shelf —
          </p>
          <div className="flex flex-wrap gap-1.5">
            {TIP_CATEGORIES.map((c) => <Tag key={c} className="border-line-2 text-faint">{c}</Tag>)}
          </div>
        </section>
      </div>
    </Overlay>
  );
}
