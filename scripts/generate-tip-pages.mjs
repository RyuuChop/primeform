// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Tip page generator
//  Builds a static, SEO-complete page per protocol into
//  dist/tip/<slug>/index.html + dist/sitemap.xml (all URLs).
//  Runs after `vite build` (see package.json).
// ─────────────────────────────────────────────────────────────
import { mkdirSync, writeFileSync, rmSync } from "fs";
import { TIPS, TIP_CATEGORIES } from "../node_modules/.tmp/tips.mjs";

const SITE = "https://prime-form1.netlify.app";
const TODAY = new Date().toISOString().slice(0, 10);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const GOAL_LABEL = {
  muscle: "Build Muscle", fatloss: "Lose Fat", strength: "Strength",
  looksmax: "Looksmax", fitness: "General Fitness",
};
const GOAL_COLOR = {
  muscle: "#f87171", fatloss: "#fbbf24", strength: "#38bdf8",
  looksmax: "#a78bfa", fitness: "#34d399",
};

const pad = (n) => String(n).padStart(2, "0");
const num = (tip) => TIPS.findIndex((t) => t.id === tip.id) + 1;
const clip = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)) + "…");

function related(tip) {
  const same = TIPS.filter((t) => t.id !== tip.id && t.category === tip.category);
  const overlap = TIPS.filter(
    (t) => t.id !== tip.id && t.category !== tip.category && t.goals.some((g) => tip.goals.includes(g)),
  );
  return [...same, ...overlap].slice(0, 3);
}

function pageCss() {
  return `
:root{--ink:#0a0a0c;--ink2:#0e0e11;--panel:#141418;--panel2:#1b1b21;--line:#26262d;--line2:#34343d;
--fg:#f4f4f2;--muted:#a3a3ad;--faint:#6d6d78;--gold:#d8b46a;--gold2:#f0dcae}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--ink);color:var(--fg);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased;
background-image:linear-gradient(rgba(255,255,255,.024) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.024) 1px,transparent 1px);background-size:44px 44px}
a{color:inherit;text-decoration:none}
.serif{font-family:Fraunces,Georgia,serif}
.mono{font-family:'JetBrains Mono',ui-monospace,monospace}
.wrap{max-width:800px;margin:0 auto;padding:0 20px}
header.site{position:sticky;top:0;z-index:40;background:rgba(10,10,12,.85);backdrop-filter:blur(12px);border-bottom:1px solid rgba(38,38,45,.8)}
.hrow{max-width:960px;margin:0 auto;padding:0 20px;height:64px;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:11px}
.brand img{width:38px;height:38px;border-radius:10px;box-shadow:0 0 34px -6px rgba(216,180,106,.45)}
.brand span{font-family:Fraunces,Georgia,serif;font-size:17px;font-weight:600;letter-spacing:.24em;text-transform:uppercase}
.sup{display:inline-flex;align-items:center;gap:7px;background:linear-gradient(180deg,#f0dcae,#d8b46a);color:#0a0a0c;
font-family:Fraunces,Georgia,serif;font-weight:600;text-transform:uppercase;letter-spacing:.14em;font-size:12px;
padding:10px 18px;border-radius:999px;box-shadow:0 10px 30px -10px rgba(216,180,106,.55);transition:.2s}
.sup:hover{filter:brightness(1.06)}
.crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:10px;padding:34px 0 6px;font-family:'JetBrains Mono',monospace;
font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--faint)}
.crumbs a:hover{color:var(--gold2)}
.crumbs .d{color:rgba(216,180,106,.6);font-size:8px}
.back{display:inline-flex;align-items:center;gap:8px;margin-top:30px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);border:1px solid var(--line2);border-radius:999px;padding:9px 16px;transition:.2s}
.back:hover{color:var(--gold2);border-color:rgba(216,180,106,.5)}
h1.title{font-family:Fraunces,Georgia,serif;font-weight:500;font-size:clamp(2rem,5.5vw,3rem);line-height:1.14;margin:14px 0 0;letter-spacing:-.01em}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
.chip{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;
border:1px solid var(--line2);border-radius:999px;padding:4px 11px;color:var(--muted)}
.chip.gold{border-color:rgba(216,180,106,.35);background:rgba(216,180,106,.07);color:var(--gold2)}
.chip.goal{color:var(--gc);border-color:color-mix(in srgb,var(--gc) 35%,transparent);background:color-mix(in srgb,var(--gc) 8%,transparent)}
.brief{margin-top:30px;border-left:2px solid var(--gold);background:rgba(216,180,106,.05);border-radius:0 14px 14px 0;padding:20px 24px}
.brief p{font-size:15.5px;line-height:1.7;color:rgba(244,244,242,.92)}
.safety{margin-top:26px;background:rgba(251,191,36,.06);border:1px solid rgba(251,191,36,.3);border-radius:14px;padding:20px 24px}
.safety .k{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:#fbbf24;margin-bottom:12px}
.safety ul{list-style:none}
.safety li{position:relative;padding-left:24px;font-size:14px;line-height:1.7;color:rgba(254,243,199,.92);margin-bottom:10px}
.safety li::before{content:"!";position:absolute;left:0;top:0;width:14px;height:14px;border:1px solid rgba(251,191,36,.5);border-radius:999px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#fbbf24;font-family:'JetBrains Mono',monospace}
.brief .k,.sec .k{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:var(--gold2);margin-bottom:10px}
.sec{margin-top:46px}
.sechead{display:flex;align-items:center;gap:14px}
.sechead .rn{font-family:Fraunces,Georgia,serif;font-style:italic;font-weight:300;font-size:21px;color:var(--gold2)}
.sechead .ln{height:1px;width:28px;background:linear-gradient(90deg,rgba(216,180,106,.6),transparent)}
.sechead h2{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:16px;letter-spacing:.16em;text-transform:uppercase}
.sec ul,.sec ol{list-style:none;margin-top:16px}
.sec li{position:relative;padding-left:20px;font-size:14.5px;line-height:1.75;color:var(--muted);margin-bottom:12px}
.sec ul li::before{content:"◆";position:absolute;left:0;top:2px;font-size:8px;color:var(--gold2)}
.sec ol.steps li{background:var(--ink2);border:1px solid var(--line);border-radius:12px;padding:14px 16px 14px 58px;position:relative;color:rgba(244,244,242,.9)}
.sec ol.steps li b{position:absolute;left:14px;top:14px;width:28px;height:28px;border-radius:999px;display:flex;align-items:center;justify-content:center;
border:1px solid rgba(216,180,106,.4);background:rgba(216,180,106,.1);color:var(--gold2);font-family:Fraunces,Georgia,serif;font-style:italic;font-weight:400}
.mis li{background:rgba(239,68,68,.05);border:1px solid rgba(239,68,68,.15);border-radius:10px;padding:11px 14px 11px 38px;color:rgba(254,202,202,.85);font-size:13.5px}
.mis li::before{content:"!";position:absolute;left:14px;top:10px;color:#f87171;font-weight:700;font-family:'JetBrains Mono',monospace}
.prog li{padding-left:26px}
.prog li::before{content:"";position:absolute;left:2px;top:7px;width:11px;height:11px;border-radius:999px;border:1px solid rgba(216,180,106,.6);background:var(--ink);box-shadow:0 0 10px rgba(216,180,106,.4)}
.src{margin-top:46px;background:rgba(14,14,17,.6);border:1px solid rgba(38,38,45,.9);border-radius:14px;padding:22px 24px}
.src .k{font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:var(--faint)}
.src li{font-family:'JetBrains Mono',monospace;font-size:11.5px;line-height:1.8;color:var(--faint);list-style:none;padding-left:16px;position:relative}
.src li::before{content:"—";position:absolute;left:0;color:rgba(216,180,106,.4)}
.rel{margin-top:64px}
.relgrid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));margin-top:18px}
.relcard{display:block;background:rgba(20,20,24,.8);border:1px solid var(--line);border-radius:16px;padding:20px;transition:.25s}
.relcard:hover{border-color:rgba(216,180,106,.35);transform:translateY(-3px)}
.relcard .c{font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold2)}
.relcard h3{font-family:Fraunces,Georgia,serif;font-weight:500;font-size:17px;line-height:1.35;margin-top:8px}
.relcard p{font-size:13px;line-height:1.6;color:var(--muted);margin-top:8px}
.relcard .go{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--faint)}
.relcard:hover .go{color:var(--gold2)}
.cta{margin:64px 0 0;text-align:center;background:rgba(20,20,24,.6);border:1px solid var(--line);border-radius:18px;padding:40px 24px}
.cta h2{font-family:Fraunces,Georgia,serif;font-weight:500;font-size:24px}
.cta p{color:var(--muted);font-size:14px;margin:10px 0 24px}
.btnrow{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.btn{display:inline-flex;align-items:center;gap:8px;font-family:Fraunces,Georgia,serif;font-weight:600;text-transform:uppercase;
letter-spacing:.16em;font-size:13px;padding:13px 26px;border-radius:999px;transition:.2s}
.btn.gold{background:linear-gradient(180deg,#f0dcae,#d8b46a);color:#0a0a0c;box-shadow:0 12px 40px -12px rgba(216,180,106,.55)}
.btn.gold:hover{filter:brightness(1.05)}
.btn.ghost{border:1px solid var(--line2);color:var(--fg)}
.btn.ghost:hover{border-color:rgba(216,180,106,.5);color:var(--gold2)}
footer.site{margin-top:70px;border-top:1px solid rgba(38,38,45,.7);padding:30px 20px;text-align:center;
font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--faint)}
footer.site .in{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center}
@media(max-width:640px){.hrow{padding:0 16px}.wrap{padding:0 16px}}
`.replace(/\n/g, "");
}

function tipPage(tip) {
  const n = num(tip);
  const title = `${tip.title} — Primeform Protocol N°${pad(n)}`;
  const desc = clip(tip.summary, 155);
  const canonical = `${SITE}/tip/${tip.id}/`;
  const goals = tip.goals
    .map((g) => `<span class="chip goal" style="--gc:${GOAL_COLOR[g]}">${GOAL_LABEL[g]}</span>`)
    .join("");
  const ld = {
    "@context": "https://schema.org", "@type": "Article",
    headline: tip.title, description: desc,
    articleSection: tip.category,
    keywords: [...(tip.keywords ?? []), ...tip.goals.map((g) => GOAL_LABEL[g])].join(", "),
    author: { "@type": "Organization", name: "Primeform", url: `${SITE}/` },
    publisher: { "@type": "Organization", name: "Primeform", url: `${SITE}/` },
    datePublished: TODAY, dateModified: TODAY,
    mainEntityOfPage: canonical,
  };
  const rel = related(tip).map(
    (r) => `<a class="relcard" href="/tip/${r.id}/">
      <span class="c">${esc(r.category)} · ${r.minutes} min</span>
      <h3>${esc(r.title)}</h3>
      <p>${esc(clip(r.summary, 90))}</p>
      <span class="go">Read Protocol →</span></a>`,
  ).join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="theme-color" content="#0a0a0c"/>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}"/>
<link rel="canonical" href="${canonical}"/>
<meta property="og:type" content="article"/>
<meta property="og:site_name" content="Primeform"/>
<meta property="og:title" content="${esc(tip.title)} — Primeform Protocol N°${pad(n)}"/>
<meta property="og:description" content="${esc(desc)}"/>
<meta property="og:url" content="${canonical}"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:title" content="${esc(tip.title)}"/>
<meta name="twitter:description" content="${esc(desc)}"/>
<link rel="icon" type="image/png" href="/logo.png"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet"/>
<style>${pageCss()}</style>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<header class="site"><div class="hrow">
  <a class="brand" href="/">
    <img src="/logo.png" alt="Primeform logo"/>
    <span>Primeform</span>
  </a>
  <a class="sup" href="${(process.env.VITE_PATREON_URL || 'https://patreon.com/RyuuDen').replace(/\/+$/, '')}?utm_source=primeform&amp;utm_medium=tip_page" target="_blank" rel="noopener noreferrer">♥ Support</a>
</div></header>

<main class="wrap">
  <a class="back" href="/">← Back to Library</a>
  <nav class="crumbs">
    <a href="/">Library</a><span class="d">◆</span>
    <span>${esc(tip.category)}</span><span class="d">◆</span>
    <span>Protocol N°${pad(n)}</span>
  </nav>

  <h1 class="title serif">${esc(tip.title)}</h1>
  <div class="chips">
    <span class="chip gold">${esc(tip.category)}</span>
    <span class="chip">${tip.minutes} min read</span>
    ${goals}
  </div>

  <div class="brief"><p class="k">The Protocol — In Brief</p><p>${esc(tip.summary)}</p></div>
  ${tip.safety ? `<aside class="safety"><p class="k">Safety &amp; Usage Note</p><ul>${tip.safety.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></aside>` : ""}

  <section class="sec">
    <div class="sechead"><span class="rn">I</span><span class="ln"></span><h2>Why It Works</h2></div>
    <ul>${tip.why.map((w) => `<li>${esc(w)}</li>`).join("")}</ul>
  </section>

  <section class="sec">
    <div class="sechead"><span class="rn">II</span><span class="ln"></span><h2>How To Apply It</h2></div>
    <ol class="steps">${tip.steps.map((s, i) => `<li><b>${i + 1}</b>${esc(s)}</li>`).join("")}</ol>
  </section>

  <section class="sec">
    <div class="sechead"><span class="rn">III</span><span class="ln"></span><h2>Common Mistakes</h2></div>
    <ul class="mis">${tip.mistakes.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
  </section>

  <section class="sec">
    <div class="sechead"><span class="rn">IV</span><span class="ln"></span><h2>Progression Plan</h2></div>
    <ul class="prog">${tip.progression.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
  </section>

  <section class="src">
    <p class="k">Appendix — Sources &amp; References</p>
    <ul>${tip.refs.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
  </section>

  <section class="rel">
    <div class="sechead"><span class="rn">↳</span><span class="ln"></span><h2>Related Protocols</h2></div>
    <div class="relgrid">${rel}</div>
  </section>

  <section class="cta">
    <h2 class="serif">149 more where this came from.</h2>
    <p>The full library — training, nutrition, recovery, sleep and more. Every claim sourced.</p>
    <div class="btnrow">
      <a class="btn gold" href="/">Browse The Library</a>
      <a class="btn ghost" href="${(process.env.VITE_PATREON_URL || 'https://patreon.com/RyuuDen').replace(/\/+$/, '')}?utm_source=primeform&amp;utm_medium=tip_page" target="_blank" rel="noopener noreferrer">♥ Become a Supporter</a>
    </div>
  </section>
</main>

<footer class="site"><div class="in">
  <span>Primeform — The Protocol Library</span><span>◆</span>
  <span>Educational only · Not medical advice</span><span>◆</span>
  <a href="/" style="color:var(--gold2)">Help &amp; Requests</a>
</div></footer>
</body>
</html>`;
}

// ── generate ─────────────────────────────────────────────────
rmSync("dist/tip", { recursive: true, force: true });
for (const tip of TIPS) {
  const dir = `dist/tip/${tip.id}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, tipPage(tip));
}

const urls = [`${SITE}/`, ...TIPS.map((t) => `${SITE}/tip/${t.id}/`)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${TODAY}</lastmod><changefreq>weekly</changefreq><priority>${u === `${SITE}/` ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>`;
writeFileSync("dist/sitemap.xml", xml);
writeFileSync("public/sitemap.xml", xml);

console.log(`✓ ${TIPS.length} tip pages + sitemap (${urls.length} URLs) generated`);
