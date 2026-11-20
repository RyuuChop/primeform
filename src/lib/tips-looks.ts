// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Looks Protocols (17) — dermatology-grade, zero myths
// ─────────────────────────────────────────────────────────────
import type { Tip } from "./types";

export const LOOKS_TIPS: Tip[] = [
  {
    id: "sunscreen", title: "SPF 30+ Every Morning — The Single Best Skin Move", icon: "sun", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["SPF", "sun protection", "UV rays", "sun damage"],
    summary: "UV drives the majority of visible facial aging — wrinkles, spots, sagging, uneven tone. The definitive Australian RCT showed daily sunscreen users showed no detectable skin aging over 4.5 years, while discretionary users aged visibly. No serum comes close. Rain or shine.",
    why: [
      "The Nambour trial (published in Annals of Internal Medicine) randomized people to daily vs discretionary sunscreen — the daily group showed 24% less skin aging over 4.5 years.",
      "Up to ~80% of facial aging signs are attributed to UV exposure in dermatology reviews — more than smoking, gravity, or genetics display effects you can control.",
      "UVA penetrates clouds and window glass — 'indoor days' and winters don't exempt you.",
    ],
    steps: [
      "Every morning, final step of skincare: broad-spectrum SPF 30+ (SPF 50 in strong sun), two finger-lengths for face and neck.",
      "Reapply if outdoors beyond 2 hours of cumulative exposure — stick or spray formats make this painless.",
      "Lips and hands age too: SPF lip balm, and the backs of hands get the leftovers from your palms.",
      "Make it automatic: sunscreen lives next to your toothbrush. Same slot, every day, forever.",
    ],
    mistakes: [
      "'It's cloudy / I'm indoors near windows' — UVA passes both.",
      "Makeup with SPF as the only layer — nobody applies enough foundation to reach the labeled SPF.",
      "Skipping ears, neck, and eyelids — the face includes all of it.",
    ],
    progression: [
      "Week 1: buy a texture you like (gel, fluid, cream — compliance is everything) and apply daily.",
      "Weeks 2–4: it becomes toothbrush-automatic.",
      "Ongoing: 365 days. The 10-year photo difference is the flex.",
    ],
    refs: [
      "Hughes MC et al. Ann Intern Med 2013 — sunscreen & skin aging RCT (Nambour trial).",
      "Flament F et al. Clin Cosmet Investig Dermatol 2013 — UV exposure & visible facial aging.",
    ],
  },
  {
    id: "retinoid", title: "Retinoids: The Only Anti-Aging Drug Class That Earns The Name", icon: "sparkles", category: "Looks",
    goals: ["looksmax"], minutes: 3,
    keywords: ["retinol", "tretinoin", "adapalene", "anti-aging", "wrinkles", "acne"],
    summary: "Tretinoin and its gentler cousin adapalene are the most proven anti-aging creams science has ever tested. Decades of studies show they visibly reduce wrinkles, smooth skin texture, even out skin tone, and fight acne — working deep in the skin, not just on the surface. Start with adapalene 0.1% (sold over the counter in many countries): a pea-sized amount at night, followed by moisturizer. Results take months, not weeks — patience is part of the protocol.",
    why: [
      "Controlled trials show tretinoin visibly reduces fine wrinkles, uneven dark patches, and rough skin — and skin samples confirmed fresh collagen growth underneath. Very few \'cosmetic\' products have proof this strong.",
      "Retinoids speed up skin cell renewal, help the skin build new collagen, and keep pores clearing normally. The effects build on each other over 6–12 months — like interest in a savings account.",
      "Adapalene 0.1% gives most of the same benefits with much less irritation — and it doubles as an approved acne treatment, so it fixes two problems at once.",
    ],
    steps: [
      "Start with adapalene 0.1% gel at night. Squeeze a pea-sized amount — that is enough for your whole face. Apply it to completely dry skin, then put moisturizer on top. If your skin is sensitive, try the \'sandwich\' method: moisturizer first, then the gel, then moisturizer again.",
      "Go slow at the start: 2 nights a week for the first 2 weeks, then every other night for 2 weeks, then every night if your skin handles it well.",
      "Expect an adjustment phase: mild dryness and light peeling during the first 2–4 weeks is completely normal. Keep moisturizing every morning, and don\'t quit at week two — that\'s where most people give up.",
      "Sunscreen every morning is non-negotiable — retinoids make your skin more sensitive to sunlight, and UV damage will quietly undo the progress (see the sunscreen protocol).",
    ],
    mistakes: [
      "Starting with a big blob every night — this causes angry, red, irritated skin and ends most retinoid journeys. Pea-sized amount, slow schedule.",
      "Mixing it with strong acids or benzoyl peroxide in the same routine from day one — add one active product at a time, and only after your skin is used to retinoids.",
      "Judging results at week 3 — retinoids are a 6-month game. Take photos every 4 weeks; the mirror lies, photos don\'t.",
    ],
    progression: [
      "Months 1–2: adapalene 0.1%, 2–3 nights a week.",
      "Months 3–6: every other night, then every night if your skin allows.",
      "Month 6+: if your skin handles it well and your goal is anti-aging, a dermatologist can step you up to tretinoin 0.025–0.05%.",
    ],
    safety: [
      "External use only. Tretinoin and adapalene are creams and gels applied to the skin only. Don\'t confuse tretinoin with isotretinoin — that is a completely different, much stronger oral acne medication with serious internal side effects.",
      "Sunscreen is mandatory. Retinoids make skin very sensitive to the sun. Apply a broad-spectrum SPF 30+ every morning to prevent sunburn and dark spots — and to protect the work the treatment is doing.",
      "Start slow and expect mild peeling. Begin 2–3 nights a week on completely dry skin, followed by a basic moisturizer. Mild dryness or peeling at first is normal — but stop and ease back if you get strong burning or swelling.",
      "Don\'t mix harsh products. While starting out, don\'t combine retinoids with strong exfoliants (like AHAs, BHAs, or benzoyl peroxide) in the same routine — one active at a time.",
      "Not during pregnancy or breastfeeding. Tretinoin usually needs a prescription, so talk to a dermatologist before starting — especially if you are pregnant, planning pregnancy, or breastfeeding.",
    ],
    refs: [
      "Kafi R et al. Arch Dermatol 2007 — tretinoin improves photoaging: molecular/histological RCT.",
      "Mukherjee S et al. Clin Interv Aging 2006 — retinoids in skin aging treatment: comprehensive review.",
    ],
  },
  {
    id: "barrier", title: "Moisturizer Is Load-Bearing: Protect The Skin Barrier", icon: "droplets", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["moisturizer", "skin barrier", "dry skin", "ceramides"],
    summary: "The stratum corneum is your face's armor: when it's intact, skin looks plump, even, and calm; when it's stripped, everything else — actives, shaving, weather — compounds into redness and flaking. A simple ceramide moisturizer, morning and night, is the cheapest multiplier in skincare.",
    why: [
      "Reviews of emollient therapy document that ceramide-containing moisturizers measurably improve hydration, barrier function, and reduce transepidermal water loss.",
      "Over-washing, hot water, and aggressive actives disrupt barrier lipids — the resulting inflammation accelerates visible aging and provokes acne/irritation cycles.",
      "Hydrated skin also reflects light more evenly — the immediate 'glow' is physics, not marketing.",
    ],
    steps: [
      "Wash with a gentle, pH-balanced cleanser — twice daily max; water-only in the morning works for many.",
      "Apply moisturizer to slightly damp skin morning and night — damp application locks in water.",
      "Ingredients that matter: ceramides, glycerin, hyaluronic acid, niacinamide, squalane. Fragrance-free as default.",
      "Scale actives back whenever the barrier is angry (stinging, tightness): moisturizer + sunscreen only, for a few days.",
    ],
    mistakes: [
      "Scrubbing and foaming 'until it squeaks' — the squeak is a stripped barrier.",
      "Very hot showers on the face — heat and steam dissolve barrier lipids.",
      "Ten-step routines where every step is an active — more actives, more irritation, worse skin. Boring routines win.",
    ],
    progression: [
      "Week 1: gentle cleanser + moisturizer + SPF only. Reset the baseline.",
      "Week 3: reintroduce one active (see retinoid protocol).",
      "Ongoing: moisturizer morning/night forever — it's the floor everything else stands on.",
    ],
    refs: [
      "Spada F et al. Skin Pharmacol Physiol 2012 — skin hydration & emollient therapy review.",
      "Purnamawati S et al. J Clin Aesthet Dermatol 2017 — the role of moisturizers in dermatologic therapy.",
    ],
  },
  {
    id: "acne-stack", title: "The Proven Acne Stack: Benzoyl Peroxide + Adapalene", icon: "scan-face", category: "Looks",
    goals: ["looksmax"], minutes: 3,
    keywords: ["acne", "pimples", "benzoyl peroxide", "breakouts", "spots"],
    summary: "Acne's best-supported OTC/rx combo is decades old and still the benchmark: adapalene 0.1% (normalizes pores, prevents new lesions) plus benzoyl peroxide 2.5–5% (kills C. acnes, no resistance). Applied correctly, this beats nearly every expensive routine sold on social media.",
    why: [
      "The landmark Lancet trial found fixed adapalene-BPO combination outperformed each agent alone and other regimens — the combination is the standard of care.",
      "AAD acne guidelines list topical retinoid + BPO as first-line for mild-moderate acne, ahead of oral antibiotics (which fail long-term due to resistance).",
      "BPO at 2.5% matches the efficacy of 10% with far less irritation — strength isn't the point, consistency is.",
    ],
    steps: [
      "Evenings: adapalene 0.1% pea-sized over the whole acne-prone area (not spot-treating). Alternate nights with BPO 2.5% for the first weeks, then combination products if tolerated.",
      "Mornings: gentle cleanse, moisturizer, SPF 30+ (see barrier and sunscreen protocols).",
      "BPO bleaches fabric — white pillowcases and towels; let it fully absorb before contact.",
      "No improvement after 10–12 weeks of true consistency → dermatologist. Moderate+ inflammatory acne deserves prescription options early, not after years of OTC roulette.",
    ],
    mistakes: [
      "Spot-treating individual pimples — prevention is whole-area; spots are yesterday's failure.",
      "Quitting during the purge — retinoids can increase lesions for 4–6 weeks before clearing.",
      "Stacking five 'actives' — BPO + adapalene + acids + scrubs = angry skin that heals slower. Two tools, used well.",
    ],
    progression: [
      "Weeks 1–2: moisturizer + SPF base only (barrier reset).",
      "Weeks 3–12: introduce adapalene and BPO alternately, consolidate.",
      "Month 3+: reassess. Maintenance can drop to adapalene nightly.",
    ],
    safety: [
    "Benzoyl peroxide bleaches fabrics — it will ruin towels, pillowcases, and shirt collars. Use white towels.",
    "Do not start both products on the same day. Begin adapalene alone for 1–2 weeks, then introduce benzoyl peroxide slowly, alternating nights first.",
    "Use pea-sized amounts of each. More product does not clear acne faster — it only guarantees red, peeling skin.",
    "BPO goes on completely dry skin; keep it away from eyes, eyebrows, lips, and the corners of the nose. Wash your hands after.",
    "Mild dryness is normal; severe burning, swelling, or blistering means stop and see a doctor. If pregnant or breastfeeding, check with a dermatologist first.",
    ],
    refs: [
      "Ozolins M et al. Lancet 2005 — comparison of five antimicrobial regimens: adapalene-BPO combination.",
      "Zaenglein AL et al. J Am Acad Dermatol 2016 — AAD guidelines for acne vulgaris management.",
    ],
  },
  {
    id: "acne-diet", title: "Acne Starts On The Plate: GI & Skim Milk", icon: "milk", category: "Looks",
    goals: ["looksmax"], minutes: 3,
    keywords: ["acne", "sugar", "milk", "diet and skin", "breakouts"],
    summary: "The food-acne link has real controlled evidence now: high-glycemic diets worsen acne, and the low-GI trial improved lesions significantly. Skim milk associates with acne in large cohorts (whole milk less so). Chocolate and greasy food myths are mostly retired — insulin spikes and milk proteins aren't.",
    why: [
      "Smith's RCT put acne patients on a low-glycemic-load diet: significantly greater lesion reduction versus high-GL controls, alongside improved insulin sensitivity.",
      "Large cohort analyses (Nurses' Health Study II and others) found acne associated with skim milk and total milk intake — plausibly IGF-1 and whey-driven.",
      "Mechanistic reviews link high insulin/IGF-1 signaling to sebum production and keratinocyte proliferation — the pipeline diet → hormones → pore.",
    ],
    steps: [
      "Trial it properly: 8–10 weeks low-GI (whole grains, legumes, vegetables, protein at each meal; no sugary drinks, sweets, white flour). Photos at week 0 and 8.",
      "Skim milk test: swap to no milk or a few weeks without dairy — note skin response. Yogurt/cheese seem less implicated.",
      "Whey protein and acne are frequently linked anecdotally and mechanistically (IGF-1 spike) — if you take whey and break out, trial 4 weeks off or switch to plant protein.",
      "Keep the acne-stack protocol running regardless — diet reduces the pressure; topicals clear the pores.",
    ],
    mistakes: [
      "Blaming chocolate/greasy food per the old myths while drinking 3 sodas a day — the evidence moved; the folklore didn't.",
      "Cutting everything at once — you'll learn nothing and quit. One variable: GI first, dairy second.",
      "Expecting diet-only remission at moderate-severe acne — combine with the proven topicals.",
    ],
    progression: [
      "Week 0: baseline photos, good lighting, same distance.",
      "Weeks 1–8: low-GI + drop sugary drinks. Re-photo.",
      "Weeks 9–16: still struggling? Trial dairy removal, especially skim milk and whey.",
    ],
    refs: [
      "Smith RN et al. Am J Clin Nutr 2007 — low-glycemic-load diet improves acne vulgaris (RCT).",
      "Adebamowo CA et al. Dermatol Online J 2008 — milk consumption & acne in adolescent girls (cohorts).",
    ],
  },
  {
    id: "niacinamide", title: "Niacinamide 5%: The Quiet Multi-Tool", icon: "flask-conical", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["niacinamide", "vitamin B3", "redness", "oil control", "pores"],
    summary: "Niacinamide (vitamin B3) at 4–5% is the rare active with trials behind multiple claims: reduced sebum, smaller-looking pores, improved barrier, faded pigmentation, calmed redness. Gentle, cheap, stacks with everything. It won't transform you — it will quietly improve everything.",
    why: [
      "Bissett's controlled work documented 5% niacinamide reducing hyperpigmentation and improving skin texture and fine lines over 8–12 weeks.",
      "Trials show 2–4% niacinamide reduces sebum excretion and improves barrier function — useful for oily, acne-prone skin.",
      "It's remarkably well-tolerated — no purge, no photosensitivity — making it the safest active to run alongside retinoids.",
    ],
    steps: [
      "Buy a serum with 4–5% niacinamide (more isn't better; 10%+ can flush some people), apply morning and/or night after cleansing.",
      "Morning slot: niacinamide → moisturizer → SPF. It sits happily under everything.",
      "Pair with the acne-stack (adapalene/BPO nights) — niacinamide buffers irritation while adding its own benefits.",
      "Give it 8–12 weeks; pigmentation moves slowly. Photos, not daily mirror audits.",
    ],
    mistakes: [
      "Judging it a failure at week 2 — nothing topical except sunscreen works that fast.",
      "Buying 20% 'super-strength' — irritation risk without added benefit.",
      "Duplicating it in five products — one serum, counted usage.",
    ],
    progression: [
      "Weeks 1–4: daily morning application.",
      "Weeks 5–12: hold; compare week-12 photos.",
      "Ongoing: keep it as a permanent gentle layer; it earns its slot.",
    ],
    refs: [
      "Bissett DL et al. Dermatol Surg 2005 — niacinamide: effects on aging facial skin.",
      "Draelos ZD et al. Br J Dermatol 2006 — niacinamide 2% & sebum/pore improvement.",
    ],
  },
  {
    id: "bha", title: "Salicylic Acid 2% For Clogged Pores & Texture", icon: "brush", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["salicylic acid", "BHA", "blackheads", "clogged pores", "exfoliation"],
    summary: "Salicylic acid is oil-soluble, meaning it gets inside pores and clears the plugs that become blackheads and whiteheads. At 2% in a daily toner/serum it smooths texture and prevents congestion — especially on oily skin and the T-zone.",
    why: [
      "Reviews of chemical exfoliants document salicylic acid's keratolytic and comedolytic action — it dissolves the intracellular glue holding dead cells in pores.",
      "Its anti-inflammatory properties (it's related to aspirin) make it better tolerated than many exfoliants on acne-prone skin.",
      "Compared to physical scrubs, chemical exfoliation produces even results without microtears — scrubbing is the outdated method.",
    ],
    steps: [
      "Use a 2% salicylic acid liquid/toner on cleansed skin, nightly or every other night, before moisturizer.",
      "Oily/congested zones (nose, forehead, chin) can take daily use; dry cheeks, alternate nights.",
      "Do NOT run BHA + adapalene + BPO + scrub all at once — pick your lane: BHA nights vs retinoid nights.",
      "Expect mild dryness initially; moisturizer after, sunscreen always (see barrier/sunscreen protocols).",
    ],
    mistakes: [
      "Apricot-scrub physical exfoliation the same week — pick chemical exfoliation and retire the sandpaper.",
      "Daily acids + retinoid nightly with no barrier recovery — irritation spiral (see the barrier protocol).",
      "Expecting BHA to fix cystic acne alone — hormonal/inflammatory acne needs the full acne-stack.",
    ],
    progression: [
      "Weeks 1–2: BHA 3 nights/week.",
      "Weeks 3–8: alternate nights with retinoid if tolerated.",
      "Ongoing: drop it if it stops earning its slot — retinoids often make it redundant.",
    ],
    safety: [
    "If you are allergic to aspirin, you can also react to salicylic acid — patch-test on a small area first or ask a dermatologist before using it.",
    "Start 2–3 nights a week, not daily. Daily use only once your skin has clearly tolerated it for a few weeks.",
    "Do not stack it with retinoids or other strong acids in the same routine when starting out — one active at a time (same rule as the retinoid protocol).",
    "Light tingling for a few minutes is normal. Burning, itching, or lasting redness means it is too much — stop and switch to a gentler formula.",
    ],
    refs: [
      "Arif T. Clin Cosmet Investig Dermatol 2015 — salicylic acid as a peeling agent: comprehensive review.",
      "Zaenglein AL et al. J Am Acad Dermatol 2016 — AAD acne guidelines (topical agents).",
    ],
  },
  {
    id: "collagen-peptides", title: "Collagen Peptides: Modest But Real Skin Evidence", icon: "beaker", category: "Looks",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["collagen", "skin elasticity", "wrinkles", "protein powder"],
    summary: "Collagen supplements survived the hype-filter better than most: randomized trials and a meta-analysis show modest improvements in skin elasticity and hydration after 8–12 weeks of 2.5–10g/day. Not magic, not useless — a reasonable, low-risk add for skin and joints.",
    why: [
      "A systematic review/meta-analysis of RCTs found significant improvement in skin elasticity and hydration with collagen peptide supplementation versus placebo.",
      "Trials (Proksch and others) show 2.5–5g of specific bioactive collagen peptides improved skin elasticity and reduced wrinkle volume after 8 weeks.",
      "Mechanism is real: hydrolyzed peptides reach the skin and stimulate fibroblast activity — this isn't the 'eating collagen = collage' strawman its critics use.",
    ],
    steps: [
      "Dose: 5–10g daily of hydrolyzed collagen peptides, mixed in coffee/shake (heat-stable).",
      "Take with vitamin C source (your orange juice/fruit covers it) — C is the cofactor for collagen synthesis.",
      "Run it 12 weeks alongside the skin basics (sunscreen, retinoid, barrier) — it's a multiplier on the fundamentals, not a substitute.",
      "Buy from brands with third-party testing (see the third-party protocol).",
    ],
    mistakes: [
      "Expecting retinoid-level results — the effect size is modest; manage the bar.",
      "Collagen face creams 'rebuilding' skin — molecules that big don't penetrate; the evidence is for ORAL peptides.",
      "Judging at week 3 — elasticity changes measure at 8–12 weeks.",
    ],
    progression: [
      "Weeks 1–12: 5g daily, baseline photo at day 0.",
      "Week 12: compare skin elasticity/photos; keep if you notice benefit, retire if not.",
      "Training overlap: emerging data on tendon/ligament support with pre-training dosing — low risk, plausible upside.",
    ],
    safety: [
    "Check the source: it is usually bovine (cow) or marine (fish). If you have a fish or shellfish allergy, choose bovine — and read labels for cross-contamination.",
    "It is a protein — about 10 g a day counts toward your daily protein total, it is not extra on top.",
    "If you have kidney disease, include it in the protein budget your doctor set for you.",
    "It is still a supplement category with quality problems — buy third-party tested powder only.",
    ],
    refs: [
      "de Miranda RB et al. Int J Dermatol 2021 — collagen supplementation & skin: meta-analysis.",
      "Proksch E et al. Skin Pharmacol Physiol 2014 — oral collagen peptide supplementation RCT.",
    ],
  },
  {
    id: "minoxidil", title: "Hair Loss? Act Early: Minoxidil 5%", icon: "spray-can", category: "Looks",
    goals: ["looksmax"], minutes: 3,
    keywords: ["hair loss", "rogaine", "regrowth", "balding", "topical"],
    summary: "Male/female pattern hair loss only accelerates with time — the follicles you don't save, you lose. Topical minoxidil 5% twice daily is the most-accessible proven treatment: FDA-approved, decent regrowth/stabilization data. The rule is simple: start early, apply consistently, expect 4–6 months before judging.",
    why: [
      "Controlled trials established 5% topical minoxidil increases hair counts and hair weight versus placebo in androgenetic alopecia.",
      "Reviews of alopecia pharmacotherapy consistently rank minoxidil among first-line options — with the critical caveat that benefits require ongoing use.",
      "Timing matters clinically: minoxidil works on miniaturized-but-alive follicles. A decade of bald follicles cannot be resurrected by any OTC.",
    ],
    steps: [
      "Confirm it's pattern loss (receding temples/thinning crown, family history) — a dermatologist visit distinguishes it from other causes cheaply.",
      "Apply minoxidil 5% (foam or solution) twice daily to a dry scalp, 1mL per application, directly on the scalp not the hair.",
      "Judge at month 6, not month 6 weeks — shedding in weeks 2–6 is normal (follicles cycling). Photos monthly.",
      "Commit or don't start: stopping surrenders the gains within months. Missed-dose tolerance is a real advantage of the newer once-daily oral route — discuss with a doctor.",
    ],
    mistakes: [
      "Starting after Norwood 4–5 and expecting miracles — the earlier the intervention, the more there is to save.",
      "Spraying the hair instead of the scalp — the follicle is the target.",
      "Quitting at the month-1 shed — that's the treatment working, not failing.",
    ],
    progression: [
      "Month 0: baseline photos (hairline, crown, part), same lighting.",
      "Months 1–6: twice daily without exception.",
      "Month 6 review: keep, optimize (combine with keto shampoo — see that protocol), or escalate with a dermatologist.",
    ],
    safety: [
    "Topical use only. Never swallow or drink it, and keep the bottle away from pets — even a licked drop of residue can be fatal to cats.",
    "Increased shedding in weeks 2–6 is normal and actually a sign the drug is working — do not quit during it.",
    "Apply to a healthy, dry, unbroken scalp. Do not use on sunburnt or irritated skin, and wash your hands after applying.",
    "If you have heart problems, low blood pressure, or take BP medication, ask your doctor before starting.",
    "More product or twice-daily 'extras' do not speed results — follow the label. Keep it off your forehead and face to avoid growing hair where you don't want it.",
    ],
    refs: [
      "Olsen EA et al. J Am Acad Dermatol 2002 — minoxidil 5% topical foam trials.",
      "Suchonwanit P et al. Drug Des Devel Ther 2019 — minoxidil and its use in hair disorders: review.",
    ],
  },
  {
    id: "finasteride", title: "Pattern Loss's Strongest Tool Is Medical — Talk To A Doctor", icon: "stethoscope", category: "Looks",
    goals: ["looksmax"], minutes: 3,
    keywords: ["hair loss", "DHT", "prescription", "male pattern baldness"],
    summary: "For male pattern hair loss, the most effective proven drug is finasteride 1mg — a DHT blocker with strong trial data for halting loss and regrowth. It's prescription for good reasons: a small percentage of users report sexual side effects, usually reversible. This is a dermatologist conversation, not a social-media decision.",
    why: [
      "The pivotal trials (Kaufman and follow-ups) showed finasteride 1mg increased hair counts and slowed progression in the large majority of men over years of study.",
      "Reviews of androgenetic alopecia rank oral finasteride first-line for men, with minoxidil as the companion — combination outperforms either alone.",
      "Sexual side effects occur in a minority (trial rates ~2%, higher reported in some post-marketing analyses) and typically resolve on discontinuation — which is exactly why dosing decisions belong with a doctor.",
    ],
    steps: [
      "Book a dermatologist (in-person or reputable telehealth). Bring your baseline photos and your questions about risks written down.",
      "Understand the trade before consenting: benefit odds high, side-effect risk low-but-real, monitoring routine.",
      "Dutasteride (stronger DHT blocker) is an increasingly common alternative doctors may offer — same conversation, stronger numbers, similar risk profile.",
      "Combine sensibly: finasteride (systemic) + minoxidil (topical) + ketoconazole shampoo (see that protocol) is the evidence-based trio.",
    ],
    mistakes: [
      "Buying gray-market finasteride online without blood work or a prescription — dosing and authenticity both become guesses.",
      "Attributing every life symptom to the drug — and the reverse: dismissing genuinely drug-linked changes. Both are how this decision goes wrong. Track honestly.",
      "Starting and stopping on internet drama cycles — pattern loss only moves one direction; churn costs ground.",
    ],
    progression: [
      "Step 1: dermatologist consult with baseline photos.",
      "Months 1–12: treatment + 3-month photo cadence.",
      "Annual review: efficacy, side-effect check, dose/route adjustments with the doctor.",
    ],
    safety: [
    "Prescription only — have a real conversation with a dermatologist or doctor, not an online shortcut.",
    "A small percentage of men get sexual side effects (lower libido, erection changes). Most cases reverse after stopping, but report anything that persists — do not just push through.",
    "Women who are or may become pregnant must not handle crushed or broken tablets — the drug can harm a male fetus.",
    "Tell your doctor about all medications and upcoming blood donation (rules differ); mood changes or depression deserve immediate attention too.",
    ],
    refs: [
      "Kaufman KD et al. J Am Acad Dermatol 1998 — finasteride in male pattern hair loss.",
      "Suchonwanit P et al. Drug Des Devel Ther 2019 — pharmacotherapy of androgenetic alopecia: review.",
    ],
  },
  {
    id: "keto-shampoo", title: "Ketoconazole Shampoo: Dandruff Fix + Hair-Loss Adjuvant", icon: "shower-head", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["ketoconazole", "dandruff", "antifungal", "scalp"],
    summary: "2% ketoconazole shampoo does two evidence-backed jobs: it's a first-line antifungal for dandruff/seborrheic dermatitis, and a small trial found it added to minoxidil's effect on hair density. Twice weekly, lather, wait 3–5 minutes, rinse. Cheap and underrated.",
    why: [
      "The Piérard-Franchimont trial found ketoconazole 2% shampoo used with minoxidil increased hair density similarly to minoxidil alone at higher intensity — plus antifungal benefit.",
      "Malassezia overgrowth drives dandruff/seborrheic dermatitis; azole antifungals are guideline first-line therapy.",
      "Scalp inflammation worsens shedding — controlling it is table stakes for any hair protocol.",
    ],
    steps: [
      "Twice weekly: apply to wet scalp, lather the scalp (not just hair), leave 3–5 minutes, rinse.",
      "Non-shampoo days use your regular shampoo; keep conditioner off the scalp skin.",
      "For dandruff: expect visible improvement in 2–4 weeks; maintenance is 1× weekly.",
      "For hair-loss stacks: it slots alongside minoxidil/finasteride — it supports, it doesn't replace.",
    ],
    mistakes: [
      "In-and-out washing in 30 seconds — contact time is the active ingredient.",
      "Stopping when flakes clear, then blaming the product when they return — dandruff is chronic; maintenance is the protocol.",
      "Using 1% cosmetic versions for hair-loss adjuvant purposes — the trial used 2% (pharmacy strength).",
    ],
    progression: [
      "Weeks 1–4: 2× weekly, contact time enforced.",
      "Week 4+: reduce to 1× weekly maintenance once controlled.",
      "Refractory flaking/itching after 4 weeks → dermatologist (prescription-strength options exist).",
    ],
    safety: [
    "It is a medicated shampoo, not a cosmetic — use it as directed (typically 2–3 times a week), leave it on the scalp 3–5 minutes, then rinse.",
    "Keep it out of eyes; rinse thoroughly if contact happens. Scalp dryness or mild irritation can occur — reduce frequency if so.",
    "Do not use if you are allergic to azole antifungals (like some athlete's-foot creams).",
    "For dandruff it works within weeks; for hair-loss support it takes months of consistent use alongside your other treatments.",
    ],
    refs: [
      "Piérard-Franchimont C et al. Dermatology 1998 — ketoconazole shampoo: effect on hair loss & sebum.",
    ],
  },
  {
    id: "microneedling", title: "Microneedling: Real Data, Real Safety Rules", icon: "syringe", category: "Looks",
    goals: ["looksmax"], minutes: 3,
    keywords: ["derma roller", "microneedling", "scars", "collagen induction"],
    summary: "Microneedling creates controlled micro-injuries that trigger collagen remodeling — decent trial data for acne scars and as a hair-loss adjuvant with minoxidil. But depth, sterility, and frequency decide whether you get results or an infection. Professional or strictly-hygienic home use at shallow depths only.",
    why: [
      "The Dhurat trial found weekly microneedling + minoxidil roughly tripled hair count gains versus minoxidil alone in men with pattern loss.",
      "Trials and reviews support microneedling for atrophic acne scars, often combined with other treatments.",
      "Mechanism is growth-factor driven (platelet release, TGF-β) — which is also why technique and sterility are non-negotiable.",
    ],
    steps: [
      "For acne scars: professional microneedling sessions (derm/clinic), typically 3–6 sessions spaced 4–6 weeks apart.",
      "For hair: some home dermastamp use has trial support (weekly, 1.0–1.5mm, clean single-use or sterilized heads) — applied before minoxidil, per study protocols.",
      "Sterility protocol: disinfect the device per instructions, never share, replace heads regularly, avoid active acne/broken skin.",
      "Post-care: gentle cleanse, moisturizer, no actives for 48–72h, SPF daily (see sunscreen protocol).",
    ],
    mistakes: [
      "Aggressive at-home rolling at 2mm+ 'because deeper = better' — that's scar-inducing, infection-inviting misuse.",
      "Needling over active acne — spreading bacteria is the opposite of the goal.",
      "Expecting microneedling alone to replace proven topicals — the data are strongest as combination therapy.",
    ],
    progression: [
      "Professional route for scars; home route only for scalp with clean technique.",
      "Track with photos every 4–6 weeks — both applications move slowly.",
      "Any sign of infection (spreading redness, pus, fever) = doctor, immediately.",
    ],
    safety: [
    "Sterility is everything. Use a quality derma roller or stamp, disinfect with 70% alcohol before and after, never share it with anyone, and replace it when dull.",
    "Stay in the 0.25–0.5 mm range at home. Needles longer than that are professional territory — going deep at home causes infection and scars.",
    "Do not needle over active acne, eczema, psoriasis, moles, or broken skin — it spreads bacteria and worsens the problem.",
    "No retinoids, acids, or benzoyl peroxide for 24–48 hours after a session, and sunscreen is mandatory on healing skin.",
    "If your immune system is weakened (illness or medication), skip home microneedling entirely — infection risk is too high.",
    ],
    refs: [
      "Dhurat R et al. Int J Trichology 2013 — microneedling + minoxidil vs minoxidil alone RCT.",
      "Singh A, Yadav S. J Cosmet Dermatol 2016 — microneedling in acne scars: review of efficacy/safety.",
    ],
  },
  {
    id: "smoking-skin", title: "Smoking Ages Skin On A Schedule", icon: "cigarette", category: "Looks",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["smoking", "wrinkles", "skin aging", "quit smoking"],
    summary: "Smoking constricts skin microvasculature, degrades collagen, and produces a recognizable facial pattern: deeper perioral lines, dullness, slower healing. The classic twin and cohort data make it visual: smokers' faces age measurably faster. Vaping's long-term skin data are thinner, but nicotine's vasoconstriction is not in dispute.",
    why: [
      "The Kadunce case-control study found smoking was an independent, strong predictor of prominent facial wrinkling — dose-dependent, beyond sun exposure.",
      "Reviews document tobacco smoke's collagen-degrading enzymes (MMPs) and reduced capillary flow — the biology of the 'smoker's face'.",
      "Skin also heals slower in smokers — relevant to every procedure, piercing, or wound.",
    ],
    steps: [
      "Quitting is the protocol; everything else is garnish. Set a date, pick a method (nicotine replacement doubles quit rates per Cochrane), tell someone.",
      "If quitting now isn't happening: harm-reduce (fewer, never indoors/at night), and be honest that the skin clock keeps its own score.",
      "Support skin meanwhile: sunscreen, retinoid, barrier care (see those protocols) — the retinoid partially counteracts collagen loss.",
      "Add a visual motivator: find a smoker-vs-non-smoker twin photo pair. Screenshot it as your lock screen.",
    ],
    mistakes: [
      "Buying expensive skincare to offset a pack-a-day habit — the math never works.",
      "Assuming vaping is neutral — nicotine is a vasoconstrictor regardless of delivery.",
      "Trying to quit white-knuckled with zero support systems — pharmacological aid + social contract is the evidence-based route.",
    ],
    progression: [
      "Week 0: set quit date, get NRT or prescription support lined up.",
      "Weeks 1–4: hardest stretch — routines and substitution carry it.",
      "Months 3–12: skin tone and microcirculation measurably recover; photos quarterly as proof.",
    ],
    refs: [
      "Kadunce DP et al. Ann Intern Med 1991 — smoking: risk factor for premature facial wrinkling.",
      "Morita A. J Dermatol Sci 2007 — tobacco smoke & skin aging mechanisms.",
    ],
  },
  {
    id: "sleep-skin", title: "Skin Repairs On Sleep — Faces Don't Lie", icon: "star", category: "Looks",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["beauty sleep", "skin repair", "glow", "dark circles"],
    summary: "Sleep debt shows on your face within days: dark circles, dullness, redness, droopy lids. Experimental studies found observers rate sleep-deprived faces as less attractive and less healthy — and controlled work shows skin recovery from UV damage runs slower in poor sleepers. Sleep is the free cosmetic.",
    why: [
      "The Sundelin lab exposed people to sleep restriction: independent raters judged their faces as less attractive, less healthy, more tired — measurable, not vanity.",
      "The Oyetakin-White study found poor sleepers had slower recovery from sun damage, higher trans-epidermal water loss, and lower satisfaction with their own skin.",
      "Deep sleep is when growth hormone peaks — collagen synthesis and tissue repair run on it (see the cool-room and regularity protocols).",
    ],
    steps: [
      "Hold the floor: 7–9h in a consistent window (see sleep-regularity) — no cream compensates for chronic 5-hour nights.",
      "Sleep slightly elevated and on your back if you can — less morning fluid pooling and compression lines.",
      "Clean pillowcase 1–2× weekly (silk optional; clean is the ingredient).",
      "Track the A/B once: five short nights vs seven good ones — photograph both. Your face will write the argument.",
    ],
    mistakes: [
      "Buying eye creams to solve a sleep problem — the catechins help margins, the deficit is the cause.",
      "Weekend sleep binges as compensation — regularity beats repayment (see sleep-regularity protocol).",
      "Ignoring per-night alcohol and late meals — both visibly puff and dull the face (see alcohol-sleep protocol).",
    ],
    progression: [
      "Week 1: photograph face Monday morning after a bad week.",
      "Weeks 2–3: hold 7.5–9h consistently, re-photograph.",
      "Ongoing: when the face looks off, audit sleep before skincare — the order of suspects is usually right.",
    ],
    refs: [
      "Sundelin T et al. R Soc Open Sci 2013 — cues of sleep deprivation in the human face.",
      "Oyetakin-White P et al. Clin Exp Dermatol 2015 — effects of poor sleep on skin aging & recovery.",
    ],
  },
  {
    id: "ages-skin", title: "Sugar Glycates Your Collagen — Go Slow On The Sweet Stuff", icon: "cookie", category: "Looks",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["sugar", "glycation", "wrinkles", "skin aging", "collagen damage"],
    summary: "Excess sugar binds to collagen and elastin in a process called glycation, forming AGEs — stiff, yellowed, less bouncy fibers. It's one of the few diet-skin mechanisms with solid biochemistry behind it. The dose matters over years: chronic high-sugar diets literally stiffen the scaffold of your face.",
    why: [
      "Reviews of AGEs in skin document their accumulation with age, acceleration by high-glycemic diets, and crosslinking effects on collagen — stiffness and reduced turnover.",
      "Diabetes research shows advanced glycation visibly affects skin properties — the mechanism is established; the cosmetic question is dose and time.",
      "Glycation compounds UV damage — the two big external aging drivers reinforce each other.",
    ],
    steps: [
      "Cut liquid sugar entirely (see the liquid-calories protocol) — the fastest glycation lever available.",
      "Keep added sugar under 10% of calories (see the added-sugar protocol) — the same rule protecting your waistline protects your collagen.",
      "Favor cooking methods that limit new AGE formation: braising, steaming, marinating; less charring and deep-frying.",
      "Sunscreen (see that protocol) — glycation and UV multiply; don't fight one and feed the other.",
    ],
    mistakes: [
      "Anti-AGE supplements while drinking soda daily — the dose is the disease.",
      "Fearing all carbs equally — whole-food carbs with fiber behave nothing like free sugars here.",
      "Charring everything on high heat — dietary AGEs form in browned/caramelized food too; vary your methods.",
    ],
    progression: [
      "Weeks 1–2: eliminate liquid sugar and audit added sugar.",
      "Ongoing: the 10% added-sugar ceiling as the permanent setting.",
      "Skincare overlap: retinoids stimulate new collagen — a partial counterweight to glycation's stiffness.",
    ],
    refs: [
      "Gkogkolou P, Böhm M. Dermatoendocrinol 2012 — advanced glycation end products in skin aging.",
    ],
  },
  {
    id: "facial-exercises", title: "Facial Exercises: Small Honest Evidence — If You Like The Ritual", icon: "smile", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["face exercises", "jowls", "facial toning", "face yoga"],
    summary: "Unlike most jawline-hack content, facial exercises actually got a trial: 20 weeks of daily facial 'yoga' improved mid-face fullness in a small dermatology study (average participant age 57). The honest read: plausible modest effect for mid-face firmness in older faces, unproven in young faces, and no evidence at all for 'skull expansion' or bone change.",
    why: [
      "The Alam (Northwestern) study: self-performed facial exercises 30 min daily for 20 weeks produced modest dermatologist-rated improvements in cheek fullness.",
      "Facial muscles are skeletal muscle — hypertrophy under load is physiologically reasonable, hence the honest 'plausible' rating.",
      "No evidence supports exercise changing facial bones or 'restructuring' the jawline — skeletal change is surgery/orthodontics territory.",
    ],
    steps: [
      "If you try it, use the tested format: 30 minutes daily (the trial's dose) — cheek lifts, brow raises against resistance, 'oo' and 'ee' holds.",
      "Pair with the basics: sleep, sodium, sunscreen, body-fat level — those dominate facial appearance.",
      "Judge by monthly photos at identical lighting; 12 weeks is a fair trial.",
      "Skip anything promising 'skull expansion', 'bone remodeling', or adult 'mewing' transformations — that's not in the evidence base.",
    ],
    mistakes: [
      "Expecting facial exercise to replace body-fat management — facial definition is mostly the body-fat equation.",
      "Aggressive stretching/pulling causing wrinkle-lines over years — gentle and consistent beats forceful.",
      "Investing in 'jawline gadgets' with zero trials — see the honest-evidence principle; the money buys a dermatologist visit instead.",
    ],
    progression: [
      "Weeks 1–12: 30 min daily if you enjoy it; baseline + monthly photos.",
      "Week 12 verdict: keep if your photos say yes; drop without guilt if not.",
      "Either way: sleep, deficit/surplus control, and skincare outrank it — always.",
    ],
    refs: [
      "Alam M et al. JAMA Facial Plast Surg 2018 — association of facial exercise with facial appearance.",
    ],
  },
  {
    id: "dandruff", title: "Kill Dandruff Properly — It's A Fungal Issue, Not Dryness", icon: "shower-head", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["dandruff", "flakes", "itchy scalp", "seborrheic dermatitis", "fungal"],
    summary: "Dandruff is usually seborrheic dermatitis — an inflammatory reaction to a yeast (Malassezia) that eats scalp oils. That's why moisturizing does nothing and antifungals fix it. Zinc pyrithione, ketoconazole 2%, or selenium sulfide shampoos, used with real contact time, clear most cases in weeks.",
    why: [
      "Scalp-condition reviews identify Malassezia and individual susceptibility as the core of dandruff — antifungal shampoos are the guideline first-line.",
      "Multiple active ingredients work: zinc pyrithione, ketoconazole, selenium sulfide, ciclopirox — rotation prevents any tolerance-style return.",
      "Leaving it inflamed worsens shedding and itching — for anyone running a hair protocol (see minoxidil/keto protocols), scalp health is the foundation.",
    ],
    steps: [
      "Buy 2% ketoconazole, 1% zinc pyrithione, or 1% selenium sulfide shampoo. Any pharmacy.",
      "Twice weekly: lather the SCALP, wait 5 minutes (timer), rinse. Contact time is where people fail.",
      "Rotate actives monthly if results fade: keto → ZPT → selenium.",
      "Severe itching/thick scales/red patches despite 4 weeks → dermatologist; prescription topicals exist.",
    ],
    mistakes: [
      "Buying 'moisturizing' shampoos for a fungal problem — the yeast is feasting on oils; more grease, more dandruff.",
      "30-second washes — none of these actives work without contact time.",
      "Oil treatments for flaking — oil feeds Malassezia; the flakes worsen.",
    ],
    progression: [
      "Weeks 1–4: 2× weekly active shampoo, 5-min contact.",
      "Week 4+: 1× weekly maintenance; rotate actives quarterly.",
      "Watch shoulders, not just scalp — flakes disappearing is the scoreboard.",
    ],
    refs: [
      "Piérard-Franchimont C et al. Dermatology 1998 — ketoconazole shampoo efficacy.",
    ],
  },
];
