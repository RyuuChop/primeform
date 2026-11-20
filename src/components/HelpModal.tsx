import { useEffect, useState } from "react";
import {
  BookOpen, Check, ChevronDown, Copy, Mail,
  SendHorizontal, ShieldCheck,
} from "lucide-react";
import { Btn, Overlay, Tag } from "../ui";
import { cn } from "../utils/cn";
import { TIP_CATEGORIES, TIPS } from "../lib/tips";

const CONTACT_EMAIL = "lenenstew@gmail.com";

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

function buildLinks(type: ReqType, message: string, contact: string) {
  const subject = encodeURIComponent(`Primeform Help: ${type}`);
  const body = encodeURIComponent(
    `${message.trim()}\n\n——————————\nType: ${type}\nContact: ${contact.trim() || "not provided"}\nSent from the Primeform site`,
  );
  return {
    mailto: `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${subject}&body=${body}`,
  };
}

export function openAdminStudioPage() {
  window.location.hash = "#admin-studio";
}

export default function HelpModal({ onClose }: { onClose: () => void }) {
  const [headerClicks, setHeaderClicks] = useState(0);

  const launchStudio = () => {
    setHeaderClicks(0);
    onClose();
    openAdminStudioPage();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        launchStudio();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [type, setType] = useState<ReqType>("Tip Request");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [gmailBlocked, setGmailBlocked] = useState(false);

  const links = buildLinks(type, message, contact);

  const send = () => {
    if (message.trim().length < 5) return;
    window.location.href = links.mailto;
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONTACT_EMAIL);
      } else {
        const ta = document.createElement("textarea");
        ta.value = CONTACT_EMAIL;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setCopyFailed(false);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyFailed(true);
    }
  };

  const openGmail = () => {
    const w = window.open(links.gmail, "_blank", "noopener");
    if (!w) setGmailBlocked(true);
  };

  return (
    <Overlay onClose={onClose} wide>
      <div className="px-6 pb-9 pt-11 sm:px-10">
        {/* header */}
        <header
          className="flex items-center gap-4"
          onClick={() => {
            const next = headerClicks + 1;
            if (next >= 5) {
              launchStudio();
            } else {
              setHeaderClicks(next);
            }
          }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.06] text-gold-2 shadow-[0_0_30px_-8px_rgba(216,180,106,0.5)]">
            <Mail size={22} />
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
                <div
                  key={i}
                  className={cn(
                    "overflow-hidden rounded-xl border transition-colors duration-200",
                    open ? "border-gold/35 bg-gold/[0.04]" : "border-line bg-ink-2/60 hover:border-line-2",
                  )}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-4.5 py-3.5 text-left cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-fg">{f.q}</span>
                    <ChevronDown
                      size={16}
                      className={cn("shrink-0 text-faint transition-transform duration-300", open && "rotate-180 text-gold-2")}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
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

          <div className="mt-5 space-y-4">
            <div className="flex flex-wrap gap-2">
              {REQ_TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                    type === t
                      ? "border-gold/60 bg-gold/10 text-gold-2 shadow-[0_0_20px_-8px_rgba(216,180,106,0.55)]"
                      : "border-line-2 bg-panel text-muted hover:border-gold/30 hover:text-fg",
                  )}
                >
                  {type === t ? "◆ " : ""}{t}
                </button>
              ))}
            </div>

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

            <label className="block">
              <span className="mb-1.5 flex items-baseline justify-between font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                Your name or WhatsApp
                <span className="text-[10px] font-mono text-faint normal-case tracking-normal">optional — for a reply</span>
              </span>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                maxLength={120}
                placeholder="e.g. Ali / +92 3xx xxxxxxx"
                className="w-full rounded-xl border border-line-2 bg-ink-2 px-4 py-3 text-sm font-medium text-fg outline-none transition-colors placeholder:font-normal placeholder:text-faint focus:border-gold/50"
              />
            </label>

            <Btn variant="gold" onClick={send} disabled={message.trim().length < 5} className="w-full">
              <SendHorizontal size={15} /> Send Request
            </Btn>
            <p className="flex items-center justify-center gap-1.5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              <ShieldCheck size={12} className="text-gold-2/70" /> Opens your email app — message pre-filled, you stay in control
            </p>

            <div className="rounded-xl border border-gold/25 bg-gold/[0.04] p-4">
              <p className="text-sm leading-relaxed text-muted">
                Mail app didn't open? Send the same request from Gmail in your browser — or copy the address:
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <button
                  onClick={openGmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/[0.08] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-2 transition-colors hover:bg-gold/[0.16] cursor-pointer"
                >
                  <Mail size={12} /> Open In Gmail
                </button>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-2 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:border-gold/40 hover:text-gold-2 cursor-pointer"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  {copied ? "Copied!" : CONTACT_EMAIL}
                </button>
              </div>
              {gmailBlocked && (
                <p className="mt-2.5 text-[12px] leading-relaxed text-amber-200/90">
                  This preview blocks new tabs — copy the address above and compose manually. On the live site this button opens Gmail directly.
                </p>
              )}
              {copyFailed && (
                <p className="mt-2.5 text-[12px] leading-relaxed text-amber-200/90">
                  Copy blocked here too — select the address by hand: {CONTACT_EMAIL}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* categories hint */}
        <section className="mt-8 border-t border-line/60 pt-6">
          <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Already on the shelf —
          </p>
          <div className="flex flex-wrap gap-1.5">
            {TIP_CATEGORIES.map((c) => (
              <Tag key={c} className="border-line-2 text-faint">{c}</Tag>
            ))}
          </div>
        </section>
      </div>
    </Overlay>
  );
}