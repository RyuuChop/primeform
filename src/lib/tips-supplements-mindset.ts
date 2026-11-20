// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Supplements & Mindset Protocols (24)
// ─────────────────────────────────────────────────────────────
import type { Tip } from "./types";

export const SUPPLEMENT_TIPS: Tip[] = [
  {
    id: "caffeine-protocol", title: "Caffeine: 3–6 mg/kg, 45–60 Minutes Out", icon: "coffee", category: "Supplements",
    goals: ["strength", "muscle", "fitness", "fatloss"], minutes: 2,
    keywords: ["pre-workout", "caffeine dose", "energy", "coffee timing"],
    summary: "Caffeine is the most proven performance supplement in existence: reliable improvements in strength, endurance, and perceived effort. Dose 3–6mg/kg bodyweight, 45–60 minutes pre-training — and respect the sleep curfew (see the caffeine-cutoff protocol).",
    why: [
      "The ISSN position stand concludes caffeine acutely enhances muscular endurance, strength, and aerobic performance across modalities, with the strongest effects at 3–6mg/kg.",
      "Mechanisms span adenosine antagonism (less perceived effort), improved neuromuscular recruitment, and muscle calcium handling.",
      "Response varies with genetics (CYP1A2): slow metabolizers get more side effects — jitters, anxiety — and should stay near 3mg/kg.",
    ],
    steps: [
      "Compute your dose: 3mg/kg to start (70kg → ~210mg; a strong coffee + pre-workout territory). 6mg/kg is the ceiling, not the default.",
      "Timing: 45–60 minutes before the session. Effects begin ~15 min, peak ~60.",
      "Count total daily caffeine and set the bedtime cutoff first (8–10h before bed) — performance gains that tax sleep are borrowed money.",
      "Tolerance manages usage: keep 1–2 caffeine-free training days weekly so the dose keeps working when it matters.",
    ],
    mistakes: [
      "400mg scoops of pre-workout daily from day one — tolerance builds in ~2 weeks and then it's expensive lemonade.",
      "Late-day doses wrecking deep sleep — the net performance effect goes negative.",
      "Ignoring total intake: coffee + energy drink + pre-workout + cola adds up fast.",
    ],
    progression: [
      "Week 1: 3mg/kg, 45 min pre-training, note perceived effort.",
      "Ongoing: titrate to effect; cap at 6mg/kg; deload caffeine entirely every 8–10 weeks for a week.",
      "Judge by the log: do key lifts improve on dosed days? If not, sleep and programming are the problem.",
    ],
    safety: [
    "Keep total caffeine under ~400 mg a day (healthy adults) — that includes coffee, tea, energy drinks, pre-workout, and pills combined.",
    "If pregnant, stay under 200 mg a day and confirm with your doctor.",
    "Signs you have taken too much: jitters, racing heart, anxiety, or shaky hands. Cut your dose in half next time — sensitivity varies a lot between people.",
    "If you have a heart condition, high blood pressure, or an anxiety disorder, talk to your doctor before using caffeine for training.",
    "Take it at least 8–10 hours before bed (this protocol's curfew) — a late dose quietly destroys your sleep, which costs you more than the boost helps.",
    ],
    refs: [
      "Grgic J et al. J Int Soc Sports Nutr 2019 — wake up and smell the coffee: caffeine supplementation & exercise.",
      "Guest NS et al. J Int Soc Sports Nutr 2021 — ISSN position stand: caffeine & exercise performance.",
    ],
  },
  {
    id: "beta-alanine", title: "Beta-Alanine For The Burn (60–240s Efforts)", icon: "test-tube", category: "Supplements",
    goals: ["fitness", "muscle"], minutes: 2,
    keywords: ["beta-alanine", "tingling", "endurance", "muscle burn"],
    summary: "Beta-alanine buffers muscle acidity, and the evidence supports it for one specific job: high-intensity efforts lasting 1–4 minutes — metcons, 400–1500m runs, high-rep sets. Dose 3.2–6.4g/day split up (tingles are harmless), for 4+ weeks. Outside that window, it does little.",
    why: [
      "The ISSN position stand concludes beta-alanine reliably raises muscle carnosine and improves high-intensity exercise capacity, particularly in the 1–4 minute range.",
      "Meta-analysis shows the clearest benefits for exercise tests in that duration band; longer endurance events and pure strength show little effect.",
      "Carnosine loading takes weeks — this is a chronic supplement, not an acute one; no pre-workout buzz, just a gradually bigger buffer.",
    ],
    steps: [
      "Dose 3.2g/day minimum, split into 2–3 servings (6.4g/day as the ceiling) — splitting reduces the harmless skin-tingle (paresthesia).",
      "Take with meals, any time of day; the loading is cumulative.",
      "Commit 4+ weeks before judging — carnosine builds over ~4–12 weeks.",
      "Deploy where it pays: metcon-style training, sprint intervals, sport. Pure strength/power programs gain little.",
    ],
    mistakes: [
      "Chugging it pre-workout expecting caffeine effects — wrong tool timing; it's a chronic buffer.",
      "Fearing the tingles — paresthesia is harmless and dose-related; split servings fix it.",
      "Expecting gains in 5-rep strength work — the mechanism (acid buffering) mostly serves longer burn sets.",
    ],
    progression: [
      "Weeks 1–4: 3.2g/day split; note tingle response.",
      "Weeks 5–12: raise to 4.8–6.4g/day if training matches the 1–4 min window.",
      "Ongoing: cycle off 4 weeks after long blocks if you like — carnosine decays slowly; benefits persist for weeks.",
    ],
    safety: [
    "The skin tingling (it feels like harmless pins and needles) is normal and not an allergy. Use sustained-release capsules or split the dose to reduce it.",
    "Stay inside the studied range: 3.2–6.4 g per day, split into smaller doses. Mega-dosing has never been tested and gains nothing.",
    "Take it daily for weeks — beta-alanine works by building up in muscle over time, not like a pre-workout buzz.",
    "If you have any chronic medical condition or take regular medication, check with your doctor before adding it.",
    "Buy third-party tested brands only.",
    ],
    refs: [
      "Trexler ET et al. J Int Soc Sports Nutr 2015 — ISSN position stand: beta-alanine.",
      "Saunders B et al. Br J Sports Med 2017 — beta-alanine & exercise performance meta-analysis.",
    ],
  },
  {
    id: "citrulline", title: "Citrulline: More Reps In The Tank", icon: "droplets", category: "Supplements",
    goals: ["muscle", "fitness"], minutes: 2,
    keywords: ["citrulline", "pump", "pre-workout", "blood flow"],
    summary: "L-citrulline (6–10g, ~60 minutes pre-training) reliably increases nitric-oxide availability, blood flow, and total reps on hard sets. Effect sizes are moderate but consistent — one of the few pump ingredients with real trial support. Skip the 'malate math' marketing; dose by L-citrulline grams.",
    why: [
      "Meta-analysis of acute citrulline trials shows improved strength-endurance (more reps/volume) and reduced soreness, strongest at 8g+ doses.",
      "Citrulline raises plasma arginine more effectively than arginine itself (the liver clears oral arginine rapidly) — the reason the research moved to citrulline.",
      "Better blood flow and pH handling translate to practical outcomes: another rep or two per set across a session compounds.",
    ],
    steps: [
      "Dose 6–10g pure L-citrulline (or ~8–10g citrulline malate) 45–60 min pre-training.",
      "Prioritize it on high-volume days: hypertrophy sessions, metcons, arm days — where rep-count matters.",
      "Track total session volume (see the training-log protocol) on citrulline vs off — your own data is the verdict.",
      "Stacks cleanly with caffeine and creatine; no known interactions at these doses.",
    ],
    mistakes: [
      "Dosing by 'malate blend' percentages — read the label; the evidence is in L-citrulline grams.",
      "Expecting a stimulant effect — it's a blood-flow/reps tool, not energy.",
      "Testing on max-effort singles — the benefit lives in rep work, not 1RMs.",
    ],
    progression: [
      "Week 1: 6g pre-training on volume days; log total sets×reps.",
      "Weeks 2–4: titrate to 8–10g if you respond.",
      "Ongoing: keep it for high-volume phases; skip on deloads — budget sanity.",
    ],
    safety: [
    "Stay in the studied range: 6–8 g of citrulline malate about an hour before training. More than that mainly buys you stomach upset and loose stools.",
    "It mildly lowers blood pressure. If you already take blood-pressure medication, ask your doctor first.",
    "Some people get a light headache on first use — drink water and start at the lower end of the dose.",
    "Buy third-party tested brands only.",
    ],
    refs: [
      "Trexler ET et al. Sports Med 2019 — acute L-citrulline supplementation & exercise performance: meta-analysis.",
      "Pérez-Guisado J et al. J Strength Cond Res 2010 — citrulline malate & bench press reps RCT.",
    ],
  },
  {
    id: "whey-casein", title: "Whey Fast, Casein Slow — Use The Speeds", icon: "blender", category: "Supplements",
    goals: ["muscle", "strength", "fatloss"], minutes: 2,
    keywords: ["whey", "casein", "protein powder", "shake", "slow protein"],
    summary: "Protein powders are food with a nutrition label — whey hits fast (ideal around training, breakfast), casein drips slowly (ideal pre-bed or as a thick hunger-killing pudding). Neither is magic; both make hitting your protein target easier and cheaper than meat-only approaches.",
    why: [
      "The classic Boirie work established the 'fast' (whey) vs 'slow' (casein) protein kinetics — different postprandial amino-acid profiles.",
      "Pre-sleep casein trials show improved overnight muscle protein synthesis and recovery versus placebo — a legitimate pre-bed tool.",
      "Whey's high leucine content makes it efficient at triggering muscle protein synthesis per serving — practical when appetite or budget limit whole food.",
    ],
    steps: [
      "Set your daily protein target first (see the protein protocol) — powders fill the gap, typically 25–50g/day of it.",
      "Post-training or breakfast: whey (isolate if lactose bothers you; concentrate if budget matters).",
      "Pre-bed: 30–40g casein, or the DIY version — Greek yogurt/cottage cheese covers the slow-protein slot with food.",
      "Cutting trick: casein + a little water freezes into pudding — the highest-satiety dessert in the library (see the satiety protocol).",
    ],
    mistakes: [
      "Five shakes a day replacing meals — powders are supplements to food, built mostly from real meals.",
      "Panic over the 'anabolic window' closing in 30 minutes — total daily protein dwarfs timing (see the nutrient-timing reality in fasted-myth).",
      "Lactose misery ignored — bloating for hours; switch to isolate or a plant blend.",
    ],
    progression: [
      "Week 1: identify the gap between target protein and food intake; fill with 1–2 shakes.",
      "Ongoing: whey around training, casein/yogurt at night if budget and appetite allow.",
      "Cutting: lean on casein pudding evenings — protein and dessert in one.",
    ],
    safety: [
    "If you are lactose intolerant, choose whey isolate (very low lactose) or a plant protein — regular whey concentrate can cause bloating and stomach cramps.",
    "If you have a true milk allergy, skip dairy proteins completely and use plant-based options.",
    "If you have kidney disease, your protein targets must be set by your doctor — don't self-prescribe high protein.",
    "Shakes are a convenience, not a magic food — they still count toward your daily protein and calorie totals.",
    ],
    refs: [
      "Boirie Y et al. Proc Natl Acad Sci USA 1997 — slow and fast dietary proteins: kinetics.",
      "Res PT et al. J Nutr 2012 — protein ingestion before sleep improves overnight recovery.",
    ],
  },
  {
    id: "omega3", title: "Omega-3 (EPA/DHA): 1–2g Combined Daily", icon: "fish", category: "Supplements",
    goals: ["fitness", "looksmax", "strength"], minutes: 2,
    keywords: ["fish oil", "omega-3", "EPA", "DHA", "heart health"],
    summary: "If your fish intake is unreliable (most people's is), 1–2g combined EPA+DHA daily from fish oil or algae oil is a reasonable insurance policy — with trial support for triglycerides, joint comfort, and possible recovery benefits. Skip 'omega 3-6-9' blends; EPA and DHA are the actives.",
    why: [
      "Reviews of omega-3 biology document EPA/DHA incorporation into cell membranes, triglyceride lowering, and eicosanoid effects — the mechanism layer is well-established.",
      "Trials in athletes show reduced soreness markers and preserved function with omega-3 supplementation around damaging exercise in some studies.",
      "Cohort data link fish/omega-3 intake to cardiovascular benefit — strongest for actual fish intake (see the fish protocol), reasonable for capsules.",
    ],
    steps: [
      "Read the label for EPA+DHA combined, not 'fish oil' grams — 1g of fish oil might contain only 300mg actives.",
      "Target 1–2g combined EPA+DHA daily with a meal (fat aids absorption).",
      "Algae oil = the vegan source of the actual EPA/DHA (see the fish protocol for the food-first route).",
      "Store away from heat/light; fishy burps mean rancid oil — switch brands.",
    ],
    mistakes: [
      "'1000mg fish oil' labeling — check the EPA/DHA line; dose by actives.",
      "Chasing 3-6-9 blends — omega-6 is abundant in modern diets; the gap is EPA/DHA specifically.",
      "Ignoring the food source — two fish meals weekly beats any capsule.",
    ],
    progression: [
      "Week 1: audit fish intake; start 1g EPA+DHA if it's low.",
      "Ongoing: hold 1–2g daily; raise fish, lower capsules over time.",
      "Blood-thinning medication? Doctor first — the only serious interaction to check.",
    ],
    safety: [
    "Stay near 1–2 g of combined EPA+DHA daily. High doses (3 g+) thin the blood — if you take blood thinners like warfarin, or aspirin daily, talk to your doctor before supplementing.",
    "Have surgery scheduled? Tell your surgeon you take fish oil — they may ask you to stop it beforehand.",
    "Take capsules with a meal to avoid fishy burps; freezing them helps too. Smell-test the bottle — rancid fish oil is worse than none.",
    "More is not better — beyond the studied range you add risk without adding benefit.",
    ],
    refs: [
      "Swanson D et al. Crit Rev Food Sci Nutr 2012 — omega-3 fatty acids EPA and DHA: biology & sources.",
      "Yurko-Mauro K et al. Curr Opin Clin Nutr Metab Care 2015 — DHA & human brain/cognition review.",
    ],
  },
  {
    id: "vitamin-d", title: "Vitamin D: Test, Don't Guess", icon: "sun-dim", category: "Supplements",
    goals: ["fitness", "looksmax", "muscle"], minutes: 2,
    keywords: ["vitamin D", "sunshine vitamin", "bones", "immunity", "deficiency"],
    summary: "Vitamin D deficiency is common (office workers, northern latitudes, dark skin tones) and fixable. The evidence supports supplementing when deficient — bone health is settled; the broader claims (testosterone, immunity) are weaker than the internet believes. 1,000–2,000 IU daily is a safe default; blood testing makes it precise.",
    why: [
      "Meta-analyses show vitamin D supplementation reduces mortality modestly in deficient/older populations, with the strongest effects on bone outcomes.",
      "Endocrine guidance considers 20–30ng/ml (50–75nmol/L) adequate for bone health; large population surveys show substantial fractions below it, especially in winter.",
      "The grand claims (huge testosterone boosts, disease cures) come from deficiency-correction studies — correcting deficiency helps; mega-dosing doesn't add magic (see Autier's meta).",
    ],
    steps: [
      "Default: 1,000–2,000 IU/day with a fat-containing meal — safe, cheap, covers most winter deficits.",
      "Better: get a 25(OH)D blood test once. Below 20ng/ml → doctor-guided correction; 30–50 → maintain.",
      "Fat-soluble: take with your fattiest meal (see the fat-floor protocol for why you have one).",
      "Summer with real sun exposure? You may not need it — the test settles the argument.",
    ],
    mistakes: [
      "50,000 IU 'biohacking' doses without testing — toxicity is rare but real at sustained high doses (calcium problems).",
      "Expecting testosterone miracles from normal levels — correction of deficiency is the effect.",
      "Annual 'vitamin D + K superstacks' — fine if cheap; unnecessary if the basics (test, dose, retest) are done.",
    ],
    progression: [
      "Week 1: start 1,000–2,000 IU/day with breakfast.",
      "Month 3: test 25(OH)D; adjust dose to hold 30–50ng/ml.",
      "Ongoing: retest annually (or each winter); adjust for season and sun.",
    ],
    safety: [
    "Test first, then dose. A simple blood test (25-OH vitamin D) tells you if you actually need it — guessing leads to megadosing.",
    "Vitamin D is fat-soluble and can build up to toxic levels over months. Stay in the tested range (typically 1,000–2,000 IU daily) unless a doctor prescribes more.",
    "Take it with a meal that contains fat — it absorbs far better that way.",
    "If you have kidney disease, sarcoidosis, or high blood calcium, do not supplement without medical supervision.",
    ],
    refs: [
      "Holick MF. N Engl J Med 2007 — vitamin D deficiency: clinical review.",
      "Autier P et al. Lancet Diabetes Endocrinol 2014 — vitamin D supplementation & health outcomes meta-analysis.",
    ],
  },
  {
    id: "melatonin-low", title: "Melatonin: Low Dose, For Timing — Not As Sleeping Pills", icon: "pill", category: "Supplements",
    goals: ["fitness", "looksmax"], minutes: 2,
    keywords: ["melatonin", "jet lag", "sleep timing", "low dose"],
    summary: "Melatonin works — for shifting your clock and shaving minutes off sleep onset at LOW doses (0.5–1mg). The 5–10mg pharmacy tablets are oversized for chronobiology. It's a timing tool for jet lag, shift changes, and delayed sleep — not a sedative, and never a substitute for the behavioral protocols.",
    why: [
      "Meta-analysis of RCTs shows melatonin reduces sleep onset by minutes and increases total sleep modestly — real, small effects, strongest at low doses.",
      "Chronobiology research shows 0.5mg outperforms higher doses for phase-shifting — the receptor system saturates; more isn't stronger.",
      "Melatonin is a hormone signal ('it's getting dark'), not an anesthetic — which is why the wind-down and light protocols outperform it long-term.",
    ],
    steps: [
      "Buy 0.5–1mg tablets (split 1mg if needed).",
      "For earlier sleep: take 0.5–1mg 2–3 hours before target bedtime, paired with dim lights (see screens protocol) — the combo shifts the clock.",
      "For jet lag: dose at target-zone bedtime for 3–5 days; eastward travel benefits most.",
      "Run it 2–4 weeks for a specific problem (phase delay, jet lag), then reassess — it's a lever, not a lifestyle.",
    ],
    mistakes: [
      "10mg nightly 'to knock out' — more side effects (grogginess, vivid dreams) without more sleep.",
      "Using it to override 2 AM screens — melatonin can't out-signal a bright phone in your face.",
      "Never trying it for travel — eastward jet lag is its single best-supported use.",
    ],
    progression: [
      "Week 1: 0.5mg, 3h before bed, lights dimmed, note onset speed.",
      "Weeks 2–3: adjust timing by response (earlier for phase-shifting).",
      "Week 4: taper off; keep the light/wind-down behaviors that carried the benefit.",
    ],
    safety: [
    "It makes you drowsy — never drive or operate machinery after taking it.",
    "Use 0.5–1 mg for timing (jet lag, shifted sleep). It is a clock signal, not a sleeping pill — a bigger dose does not knock you out better, it just adds grogginess.",
    "It interacts with sleep medications, antidepressants, and blood thinners — if you take any of these, ask your doctor first.",
    "Not for children or during pregnancy without a doctor's approval.",
    ],
    refs: [
      "Ferracioli-Oda E et al. PLoS One 2013 — melatonin & sleep: meta-analysis.",
      "Burgess HJ et al. J Clin Endocrinol Metab 2010 — human phase response to daily melatonin.",
    ],
  },
  {
    id: "magnesium", title: "Magnesium For Sleep: Modest, Real, Cheap", icon: "battery-charging", category: "Supplements",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["magnesium", "sleep support", "glycinate", "relaxation"],
    summary: "Magnesium won't transform bad sleep hygiene, but trials show modest objective sleep improvements — especially in people with low intake (a large fraction of adults). 200–400mg of a well-absorbed form in the evening is a low-risk, reasonable add to the sleep stack.",
    why: [
      "A trial in older adults found magnesium supplementation significantly improved objective sleep measures (time to fall asleep, sleep time) versus placebo.",
      "Meta-analytic evidence suggests small improvements in sleep quality — strongest where baseline intake or status is suboptimal.",
      "Most dietary surveys show magnesium intake below recommended levels for large population fractions — whole grains, nuts, and greens fix the food side (see nuts and whole-grain protocols).",
    ],
    steps: [
      "Form matters: magnesium glycinate or citrate (absorbed well); avoid oxide (cheap, poorly absorbed — it's a laxative).",
      "Dose 200–400mg elemental magnesium, 1–2h before bed, with or without food.",
      "Stack it on the real protocols: cool room, wind-down, regularity — magnesium is the garnish, not the meal.",
      "Watch the digestive response — citrate at higher doses loosens stools; glycinate is gentler.",
    ],
    mistakes: [
      "Expecting prescription-strength sedation — the honest effect size is 'modest improvement', especially if deficient.",
      "Magnesium oxide bargains — absorption ~4%; you're buying bathroom trips.",
      "Ignoring the food sources — 30g of almonds and oats cover a solid chunk daily.",
    ],
    progression: [
      "Week 1: 200mg glycinate pre-bed.",
      "Weeks 2–4: titrate to 400mg if sleep data/feel improves and gut tolerates.",
      "Ongoing: keep if it earns its slot; drop if you can't tell it apart from placebo after 6 weeks.",
    ],
    safety: [
    "Pick the right form: magnesium glycinate or citrate for sleep. Avoid magnesium oxide — it absorbs poorly and mainly causes loose stools.",
    "Keep supplemental magnesium at or under ~350 mg per day; more mostly means diarrhea.",
    "If you have kidney disease, do not take magnesium supplements without a doctor — your kidneys clear it, and buildup is dangerous.",
    "If you take antibiotics or blood-pressure medication, separate the timing — ask your pharmacist how far apart.",
    ],
    refs: [
      "Abbasi B et al. J Res Med Sci 2012 — magnesium supplementation & primary insomnia (elderly RCT).",
      "Mah J et al. BMC Complement Med Ther 2021 — magnesium & sleep quality: meta-analysis.",
    ],
  },
  {
    id: "ashwagandha", title: "Ashwagandha: Real RCTs For Stress & Strength", icon: "leaf", category: "Supplements",
    goals: ["fitness", "looksmax", "muscle"], minutes: 2,
    keywords: ["ashwagandha", "stress", "cortisol", "adaptogen"],
    summary: "Ashwagandha root extract (300–600mg/day of standardized extract) has several legitimate randomized trials: reduced perceived stress and cortisol, and modest strength gains in training men. Effects are real but moderate; buy standardized extracts from tested brands, and know the caution list (thyroid conditions, pregnancy).",
    why: [
      "The Chandrasekhar RCT found significantly reduced cortisol and perceived stress versus placebo over 8 weeks at 300mg twice daily.",
      "The Wankhede trial showed greater strength and muscle gains over 8 weeks of resistance training with ashwagandha versus placebo — modest but measured.",
      "Reviews of adaptogens position ashwagandha as the best-evidenced member of the class — while noting quality control across brands is the industry's weak point.",
    ],
    steps: [
      "Use a standardized root extract (e.g., 5% withanolides) at 300–600mg/day, with food, for 6–8 weeks.",
      "Pair it with the stress-budget protocol — the herb lowers the volume knob; it doesn't fix a life running at 11.",
      "Track honestly: weekly stress rating (see stress-bucket protocol) and sleep quality on vs off.",
      "Cycle: 8 weeks on, 2–4 weeks off, reassess.",
    ],
    mistakes: [
      "Cheap unstandardized powders — root vs leaf, extract vs raw, withanolide content: the label is the product.",
      "Ignoring cautions: thyroid medication interactions, pregnancy avoidance, and rare liver reports — read and respect them.",
      "Using it to justify chronic overtraining and under-sleeping — cortisol is a symptom here, not the disease.",
    ],
    progression: [
      "Weeks 1–2: 300mg/day, note sleep and stress ratings.",
      "Weeks 3–8: 600mg/day split if tolerated and useful.",
      "Week 9+: 2–4 weeks off; compare the same ratings. Keep only what demonstrably works.",
    ],
    safety: [
    "Do not use during pregnancy or breastfeeding.",
    "It shifts thyroid hormones — if you have a thyroid condition or take thyroid medication, use it only with your doctor's supervision.",
    "Rare liver problems have been reported. Stop immediately and see a doctor if you notice yellowing skin or eyes, dark urine, or ongoing stomach pain.",
    "It makes some people drowsy — see how you respond before driving, and don't stack it with sedatives or alcohol.",
    "Use it in blocks (for example 6–8 weeks on, then a break) rather than indefinitely.",
    ],
    refs: [
      "Chandrasekhar K et al. Indian J Psychol Med 2012 — ashwagandha & stress/cortisol RCT.",
      "Wankhede S et al. J Int Soc Sports Nutr 2015 — ashwagandha & strength/muscle RCT.",
    ],
  },
  {
    id: "nitrate", title: "Beetroot/Nitrate For Endurance Days", icon: "carrot", category: "Supplements",
    goals: ["fitness", "fatloss"], minutes: 2,
    keywords: ["beetroot", "beet juice", "nitric oxide", "endurance"],
    summary: "Dietary nitrate (beetroot juice, ~300–600mg nitrate = roughly 500ml juice or concentrated shots) reliably improves endurance economy — same pace costs less oxygen. The effect is real, replicated, and useful for cardio days and long walks. It turns pee and stamina pink; accept both.",
    why: [
      "The nitrate-nitrite-NO pathway reduces the oxygen cost of submaximal exercise — the canonical reviews (Jones and colleagues) document 1–3% economy improvements, meaningful at competitive margins.",
      "Meta-analyses show the largest benefits in submaximal endurance and time-trial settings, less in pure strength work.",
      "Acute dosing peaks 2–3h post-ingestion; chronic daily dosing maintains elevated nitrite availability.",
    ],
    steps: [
      "Dose: ~500ml beetroot juice or 1–2 concentrated shots, 2–3 hours before endurance sessions.",
      "Chronic option: daily small dose for training blocks — nitrate depletes and replenishes with habit.",
      "Avoid antibacterial mouthwash around dosing — oral bacteria run the conversion; killing them kills the effect (real trial finding).",
      "Practical food route: beetroot, arugula/rocket, spinach — the leafy greens are nitrate bombs anyway (see the potassium protocol's greens).",
    ],
    mistakes: [
      "Expecting strength gains — the evidence lives in endurance economy.",
      "Chugging shots 10 minutes before the session — peak is 2–3h out; you'll just taste regret.",
      "Antibacterial mouthwash immediately before/after — self-sabotage via dental hygiene.",
    ],
    progression: [
      "Week 1: test 500ml juice 2–3h before a cardio session; note pace/feel.",
      "Ongoing: deploy on key endurance days; greens daily as the base layer.",
      "Track: same heart rate, faster pace? That's the economy effect showing up.",
    ],
    safety: [
    "Beetroot juice lowers blood pressure. If you take BP medication or nitrate heart drugs (like nitroglycerin), talk to your doctor first — the effects stack.",
    "Start with a smaller dose the first few times to check how your stomach handles it.",
    "Red-tinged urine or stool after beetroot is harmless (it's called beeturia) — don't panic, don't confuse it with blood.",
    ],
    refs: [
      "Jones AM et al. Annu Rev Nutr 2018 — dietary nitrate & physical performance.",
    ],
  },
  {
    id: "third-party", title: "Buy Only Third-Party Tested Supplements", icon: "badge-check", category: "Supplements",
    goals: ["fitness", "muscle", "strength", "looksmax"], minutes: 2,
    keywords: ["supplement testing", "quality brands", "NSF certified", "contamination"],
    summary: "The supplement industry is lightly regulated, and analyses repeatedly find products spiked, under-dosed, or contaminated — including with banned substances. The fix costs nothing: buy only products certified by NSF Certified for Sport or Informed Sport. If a brand won't certify, that's the review.",
    why: [
      "Studies of supplement contamination (including IOC lab analyses) have found a meaningful fraction of products contain undeclared substances — prohormones, stimulants, even prescription drugs.",
      "Sports-medicine reviews highlight inadvertent doping via contaminated supplements as a documented career risk for tested athletes.",
      "Certification programs (NSF, Informed Sport) test actual batches for label accuracy and contaminants — the only practical consumer-level quality signal.",
    ],
    steps: [
      "Look for the mark: NSF Certified for Sport or Informed Sport logos on the tub — not 'lab tested' marketing copy.",
      "Certification databases are public: search the product before buying.",
      "Prefer brands that publish certificates of analysis (CoA) per batch — verifiable beats advertised.",
      "Simplicity compounds safety: the fewer products, the smaller the risk surface (see the supp-pyramid protocol).",
    ],
    mistakes: [
      "Trusting Amazon reviews and influencer codes — neither tests the actual powder.",
      "Assuming 'GMP' on the label means batch-tested — it's a manufacturing standard, not a purity certificate.",
      "Buying gray-market pharmaceutical copies (see the finasteride protocol) — same principle, higher stakes.",
    ],
    progression: [
      "Week 1: audit your current supplements against certification databases.",
      "Ongoing: new purchase rule — certified or not bought. The bar is the bar.",
      "Athletes (tested sports): zero tolerance for uncertified products — this is career insurance.",
    ],
    refs: [
      "Maughan RJ et al. Br J Sports Med 2018 — inadvertent doping & supplement contamination.",
    ],
  },
  {
    id: "supp-pyramid", title: "The Supplement Pyramid: Few Tools, Used Well", icon: "package-check", category: "Supplements",
    goals: ["fitness", "muscle", "strength", "fatloss", "looksmax"], minutes: 3,
    keywords: ["supplement guide", "which supplements", "priority list", "basics"],
    summary: "The evidence-based supplement stack is small: creatine (covered in its own protocol), caffeine, vitamin D if deficient, omega-3 if fish-free, protein powder as food logistics. Everything else is situational. Money spent on the pyramid's wide base — food, sleep, training — beats any bottle on the shelf.",
    why: [
      "Systematic reviews rank the supplement hierarchy consistently: creatine and caffeine carry the strongest performance evidence; most everything else is situational or marginal.",
      "Position stands emphasize that supplements supplement — training quality, total protein, and sleep explain the overwhelming majority of results.",
      "The contamination and dosing risks scale with product count — a 12-bottle stack multiplies both cost and risk for marginal returns.",
    ],
    steps: [
      "Tier 1 (strong evidence): creatine monohydrate, caffeine (timed), protein powder (logistics), vitamin D (if deficient/tested), omega-3 (if fish-free).",
      "Tier 2 (situational): citrulline (volume days), beta-alanine (1–4min efforts), magnesium (evening), melatonin (timing problems), collagen (skin/joints), ashwagandha (stress blocks), beetroot (endurance).",
      "Tier 3 (mostly skip): fat burners, testosterone boosters, BCAAs (redundant with protein), most 'proprietary blends'.",
      "Rule: one new supplement at a time, 6–8 week trials, keep only what a measurable outcome justifies (see the training-log protocol).",
    ],
    mistakes: [
      "Starting at tier 3 while sleeping 5 hours — the stack can't out-shout the basics.",
      "Ten-supplement stacks started simultaneously — nothing is measurable, everything is confounded.",
      "Brand loyalty over certificate loyalty — see the third-party protocol; the mark, not the marketing.",
    ],
    progression: [
      "Week 1: strip to Tier 1 + one goal-relevant Tier 2.",
      "Months 2–3: trial additions one at a time with a defined success metric.",
      "Quarterly: audit the shelf — expired, unproven, unused? Gone.",
    ],
    refs: [
      "Kreider RB et al. J Int Soc Sports Nutr 2017 — ISSN position stand: creatine (evidence hierarchy context).",
      "Guest NS et al. J Int Soc Sports Nutr 2021 — ISSN position stand: caffeine (top-tier ergogenic evidence).",
    ],
  },
];

export const MINDSET_TIPS: Tip[] = [
  {
    id: "when-then", title: "When-Then Plans: The Highest-ROI Sentence In Behavior Change", icon: "key-round", category: "Mindset",
    goals: ["fitness", "fatloss", "muscle", "looksmax", "strength"], minutes: 2,
    keywords: ["implementation intention", "if then plan", "habit trigger", "planning"],
    summary: "'When X happens, I will do Y' — a sentence format backed by one of behavior science's largest meta-analyses. Implementation intentions roughly double follow-through versus vague goals, because the decision is made once, in advance, instead of 200 times in the moment.",
    why: [
      "The Gollwitzer & Sheeran meta-analysis of 94 studies found implementation intentions produced medium-to-large effects on goal attainment across domains.",
      "The mechanism is delegation to the environment: the cue ('when I pour my morning coffee') triggers the action automatically — no willpower vote required.",
      "Vague intentions ('exercise more') require in-the-moment decisions exactly when motivation is lowest; when-then plans pre-load the decision.",
    ],
    steps: [
      "Write 3 plans in strict format: 'When it's 6:30 AM, I put on my training shoes.' / 'When I order lunch, I add a protein.' / 'When I sit on the couch at 9 PM, I pick up my book.'",
      "Cues must be concrete and unavoidable (time, place, preceding action) — 'when I feel motivated' is not a cue.",
      "Post them where the cue lives: fridge, mirror, desk.",
      "Run them for 2 weeks; revise only the plans that never fire — that's a cue problem, not a character problem.",
    ],
    mistakes: [
      "Ten plans at once — start with three; this is scaffolding, not bureaucracy.",
      "Vague cues ('when I have time') — time never announces itself; clocks and doors do.",
      "Dropping the format after week one because it feels silly — the silliness is the mechanism (automaticity).",
    ],
    progression: [
      "Week 1: install 3 when-then plans.",
      "Weeks 2–4: tune cues; the plans should start feeling like reflexes.",
      "Ongoing: add one new plan per habit you want — it's the reusable tool.",
    ],
    refs: [
      "Gollwitzer PM, Sheeran P. Adv Exp Soc Psychol 2006 — implementation intentions meta-analysis.",
    ],
  },
  {
    id: "66-days", title: "Habits Take ~66 Days — Budget Accordingly", icon: "hourglass", category: "Mindset",
    goals: ["fitness", "fatloss", "muscle", "strength", "looksmax"], minutes: 2,
    keywords: ["habit formation", "66 days", "routine building", "patience"],
    summary: "The '21 days to a habit' line is folklore. The best tracking study found habits take 18–254 days — averaging ~66 — to become automatic. Plan for a 2–3 month grind with good days and bad days built in. Missing once changes nothing; the curve forgives.",
    why: [
      "Lally's habit-formation study tracked real behaviors daily: automaticity rose asymptotically, averaging ~66 days, with huge individual variance.",
      "The curve is forgiving of single misses — consistency percentage matters, not perfection streaks.",
      "Automaticity is the real goal: once a behavior runs on autopilot, willpower is retired from that job forever.",
    ],
    steps: [
      "Pick ONE behavior to install per month — not five. 'Gym at 6:30 AM' beats 'new life'.",
      "Track a simple daily mark (calendar X) — the visual chain matters more than any app (see progress-monitor).",
      "Pre-decide the bad-day minimum: 'Even on my worst day, I do 10 minutes.' The floor keeps the habit alive.",
      "At day 21 when it feels hard and boring — that's the median, not failure. Push to 66.",
    ],
    mistakes: [
      "Quitting at day 18 because 'it's not automatic yet' — the average says you're nearly halfway.",
      "Installing five habits simultaneously — attention is the scarce resource; spend it once.",
      "All-or-nothing collapse after one miss — the study showed single misses barely dented automaticity.",
    ],
    progression: [
      "Month 1: one keystone habit (usually training) with a bad-day floor.",
      "Month 2: add the second (protein target).",
      "Month 3+: one per month, forever. Ten habits is a different life, built in ten months.",
    ],
    refs: [
      "Lally P et al. Eur J Soc Psychol 2010 — how are habits formed: modelling habit formation.",
      "Gardner B, Lally P, Wardle J. Br J Gen Pract 2012 — making health habitual: the psychology of habit-formation.",
    ],
  },
  {
    id: "habit-stacking", title: "Stack New Habits On Existing Ones", icon: "blocks", category: "Mindset",
    goals: ["fitness", "fatloss", "looksmax", "muscle"], minutes: 2,
    keywords: ["habit stacking", "anchor habit", "routine", "trigger"],
    summary: "Existing routines are pre-built cue platforms. 'After I brush my teeth, I do 10 chin tucks. After I pour coffee, I take my creatine. After I close my laptop, I walk 10 minutes.' Anchoring new behaviors to old ones removes the hardest part: remembering.",
    why: [
      "Habit-formation research identifies consistent cue-context pairing as the mechanism of automaticity — existing habits are the most reliable contexts you own.",
      "Reviews of health-habit interventions find cue-based planning outperforms motivation-only approaches for sustained behavior.",
      "The chain effect compounds: each anchored habit strengthens the anchor itself — your morning routine becomes infrastructure.",
    ],
    steps: [
      "List 5 rock-solid daily anchors: brushing teeth, first coffee, closing the laptop, walking in the door, getting into bed.",
      "Attach one small new behavior to each: creatine after coffee, chin tucks after brushing, walk after laptop-close.",
      "Keep the additions small — 2-minute versions count. The stack is about placement, not size.",
      "Write the full stack on one card. Read it for the first two weeks; after that it runs itself.",
    ],
    mistakes: [
      "Stacking onto unstable anchors ('after I check Instagram') — anchors must be reliable, not aspirational.",
      "Starting with big additions — a 45-minute gym session stacked onto brushing teeth collapses; a 10-minute walk holds.",
      "Rebuilding the stack from scratch when one link breaks — repair the link, keep the architecture.",
    ],
    progression: [
      "Week 1: write your anchor list + 3 stacked behaviors.",
      "Weeks 2–4: run and patch the stack.",
      "Ongoing: one new stack link per month — compounding infrastructure.",
    ],
    refs: [
      "Gardner B, Lally P, Wardle J. Br J Gen Pract 2012 — making health habitual: cue-based habit formation.",
      "Fogg B. Tiny Habits. Houghton Mifflin Harcourt, 2019 — anchoring new behaviors to existing routines.",
    ],
  },
  {
    id: "progress-monitor", title: "Monitor Progress Or Watch Motivation Die", icon: "line-chart", category: "Mindset",
    goals: ["fitness", "fatloss", "muscle", "strength", "looksmax"], minutes: 2,
    keywords: ["progress tracking", "motivation", "feedback loop", "metrics"],
    summary: "A meta-analysis across 138 studies found progress monitoring itself increases goal attainment — and the effect grows when you record and report it. Weigh-ins, training logs, and photos aren't admin; they're the motivational engine running on evidence instead of mood.",
    why: [
      "The Harkin meta-analysis found prompting progress monitoring increased goal attainment, with larger effects when progress is physically recorded.",
      "Visible progress counteracts the motivational fade that hits weeks 3–6, when novelty dies before automaticity arrives (see the 66-days protocol).",
      "Logs also correct perception: bad weeks feel like failures but often contain real progress the mood can't see.",
    ],
    steps: [
      "Pick 2–3 metrics per goal: training (logbook), fat loss (weekly average + monthly photos), habits (calendar chain).",
      "Record at fixed times: weigh-in each morning, log during the session, photos the 1st of the month.",
      "Review weekly in 5 minutes: trend up, flat, down? One adjustment maximum.",
      "Make progress visible: a wall calendar with X's, a notes-file streak, the logbook by the door.",
    ],
    mistakes: [
      "Tracking 15 metrics daily — drowning in dashboards; 2–3 well-chosen numbers beat a spreadsheet of noise.",
      "Daily judgment from daily data — trends, not points (see the daily-weigh protocol).",
      "Stopping when it gets hard — the hard stretch is exactly when the record matters most.",
    ],
    progression: [
      "Week 1: install recording for your one active goal.",
      "Weeks 2–8: weekly 5-minute reviews, one adjustment each.",
      "Ongoing: the review ritual is permanent — it's the steering wheel.",
    ],
    refs: [
      "Harkin B et al. Psychol Bull 2016 — progress monitoring & goal attainment meta-analysis.",
      "Michie S et al. Health Psychol Rev 2009 — self-monitoring in behavior change taxonomies.",
    ],
  },
  {
    id: "gratitude", title: "Three Good Things: The Cheapest Mood Protocol", icon: "heart", category: "Mindset",
    goals: ["fitness", "looksmax"], minutes: 2,
    keywords: ["gratitude", "mood", "happiness", "positive psychology"],
    summary: "Writing down three things that went well each day — and why — looks trivial and performs like an intervention: the original randomized trial found lasting happiness increases and depression decreases for months. Two minutes nightly, before your phone comes out (see the screens protocol).",
    why: [
      "Emmons & McCullough's experiments found weekly gratitude listing increased well-being and optimism versus hassles-listing controls — one of positive psychology's most replicated findings.",
      "The mechanism is attention training: deliberate search for positives counterbalances the brain's negativity bias — which otherwise dominates tired, stressed evenings.",
      "Stress and recovery research links positive affect to better recovery markers — mood is a recovery variable, not just a vibe.",
    ],
    steps: [
      "Each night during the wind-down, write three specific things that went well — specific beats generic ('the 6 AM session felt strong' > 'gym').",
      "Add one line each on why it happened — attribution trains the search pattern.",
      "Keep it in the same notebook as your training log (see progress-monitor) — one ritual, two systems.",
      "Hard days get three items too — those are the days the protocol pays.",
    ],
    mistakes: [
      "Repeating the same three items nightly — 'my health, my family, my dog' nightly is autopilot; specificity is the exercise.",
      "Doing it as a mood-toxic-positivity exercise — bad days stay acknowledged; you're training search, not denial.",
      "Skipping it when tired — the tired night is the highest-value rep.",
    ],
    progression: [
      "Week 1: 7 consecutive nights, 3 items each.",
      "Weeks 2–4: it should start feeling like a reflex — noticing good things in real time.",
      "Ongoing: keep it in the wind-down stack permanently or seasonally; both work.",
    ],
    refs: [
      "Emmons RA, McCullough ME. J Pers Soc Psychol 2002 — counting blessings versus burdens.",
      "Seligman ME et al. Am Psychol 2005 — positive psychology progress: empirical validation of interventions.",
    ],
  },
  {
    id: "reappraisal", title: "Reframe Stress As Fuel — The Physiology Follows", icon: "brain", category: "Mindset",
    goals: ["fitness", "strength", "looksmax"], minutes: 2,
    keywords: ["stress mindset", "reframing", "anxiety", "performance"],
    summary: "Pre-race nerves and pre-set pressure are the same arousal either way — but studies show people taught to read it as 'my body fueling up' perform better and show healthier cardiovascular responses than those taught to suppress it. The feeling stays; the story changes the output.",
    why: [
      "Jamieson's experiments found arousal reappraisal improved performance under pressure and produced more challenge-type cardiovascular responses (efficient, adaptive).",
      "Stress-mindset research (Crum and colleagues) links viewing stress as enhancing to better health and performance outcomes.",
      "For training specifically: the pre-set nerves before a heavy attempt are catecholamines — the exact chemicals that make attempts successful. Reframing keeps the chemistry on your side.",
    ],
    steps: [
      "Notice the arousal: racing heart, tight chest, butterflies. Name it: 'This is fuel arriving.'",
      "Say the reframe sentence once, out loud if possible: 'My body is getting me ready to perform.'",
      "Breathe low and slow for 3 breaths (long exhales) — keeps the arousal without the panic flavor.",
      "Apply at: heavy singles, presentations, interviews, hard intervals — any situation where the body is already doing its job.",
    ],
    mistakes: [
      "Trying to be calm instead of effective — suppression backfires; channeling works. Tiger, not teddy bear.",
      "Framing normal nerves as a sign of unpreparedness — arousal appears precisely when you care and are ready.",
      "Skipping the exhale work — the reframe lands better on a slowed breath.",
    ],
    progression: [
      "Week 1: practice the reframe on 2 low-stakes stress moments daily.",
      "Ongoing: deploy on heavy sets and high-stakes days — the sentence becomes automatic.",
      "Track: performance on reframed days vs dreaded days (log it — see progress-monitor).",
    ],
    refs: [
      "Jamieson JP et al. J Exp Soc Psychol 2012 — turning the knots in your stomach into bows: arousal reappraisal.",
      "Crum AJ, Salovey P, Achor S. J Pers Soc Psychol 2013 — rethink stress: stress mindset effects.",
    ],
  },
  {
    id: "meditation", title: "Ten Minutes Of Stillness — Measured, Modest, Real", icon: "flower", category: "Mindset",
    goals: ["fitness", "looksmax"], minutes: 2,
    keywords: ["meditation", "mindfulness", "breathing", "anxiety", "focus", "calm"],
    summary: "Mindfulness practice earned its reputation carefully: the landmark JAMA meta-analysis found moderate evidence for improved anxiety, depression, and pain — not enlightenment, but a real, trainable effect. 10 minutes daily, guided apps are fine. Think of it as pull-ups for attention.",
    why: [
      "The Goyal meta-analysis (47 trials) found mindfulness programs produce moderate improvements in anxiety, depression, and pain versus active controls.",
      "Reviews of attention research document improved sustained-attention and reduced mind-wandering with regular practice — the transferable skill.",
      "For training, attention is the product: presence on the bar, awareness of form, honest RIR assessment — all downstream of trainable focus.",
    ],
    steps: [
      "10 minutes daily, same slot (stack it: after morning coffee or in the wind-down — see habit-stacking).",
      "Format: guided app sessions or simple breath counting — inhale, exhale, count to 10, restart.",
      "When the mind wanders (it will, ~40 times), return without commentary. The return IS the rep.",
      "Judge by weeks 4–6: reactivity, sleep onset, session focus — not by how 'zen' the sessions felt.",
    ],
    mistakes: [
      "Quitting because sessions feel chaotic — chaos noticed is the practice working; calm is a side effect, not the goal.",
      "Two-hour weekend retreats replacing the daily 10 — frequency beats duration decisively here.",
      "Using apps' gamification as the practice — the streak is not the skill; attention is.",
    ],
    progression: [
      "Weeks 1–2: 10 min guided, daily, same slot.",
      "Weeks 3–8: continue; add unguided minutes if you like.",
      "Ongoing: 10 minutes is a lifetime dose — resist optimizing it into a project.",
    ],
    refs: [
      "Goyal M et al. JAMA Intern Med 2014 — meditation programs for psychological stress: meta-analysis.",
      "Mrazek MD et al. Psychol Sci 2013 — mindfulness training improves working memory & GRE performance.",
    ],
  },
  {
    id: "movement-mood", title: "Exercise Rivals Medication For Depression & Anxiety", icon: "heart-pulse", category: "Mindset",
    goals: ["fitness", "muscle", "strength"], minutes: 2,
    keywords: ["depression", "anxiety", "mental health", "exercise mood"],
    summary: "Large meta-analyses now place regular exercise among the most effective interventions for depression and anxiety — comparable to medication and therapy effects in pooled data, and superior to doing nothing by a mile. This isn't 'go for a jog to clear your head' folk wisdom anymore; it's clinical-grade evidence.",
    why: [
      "The 2018 meta-analysis in the American Journal of Psychiatry found physical activity protective against developing depression, with benefits across all age groups — and trials show treatment-level effects for existing depression.",
      "The Blumenthal RCT found supervised aerobic exercise comparable to sertraline (Zoloft) for major depression at 16 weeks.",
      "Mechanisms stack: BDNF, neurogenesis, inflammation reduction, self-efficacy, behavioral activation — exercise hits depression through every door simultaneously.",
    ],
    steps: [
      "Treat movement as part of the treatment plan, not a lifestyle garnish: 3+ sessions weekly of anything you'll repeat (lifting, brisk walking, intervals).",
      "Lift specifically — strength training shows dedicated trial support for depressive symptoms, and progress you can measure doubles as evidence against the 'nothing works' voice.",
      "Lower the floor on dark days: a 10-minute walk counts (see the bad-day minimum in the 66-days protocol).",
      "If depression is moderate-severe or you have thoughts of self-harm: professional help first — exercise complements treatment, it doesn't replace it.",
    ],
    mistakes: [
      "Using exercise to avoid getting real help when symptoms are serious — the trial designs used exercise alongside clinical care.",
      "All-or-nothing intensity that collapses in week two — moderate and repeated beats heroic and singular.",
      "Judging by mood on day 3 — mood effects compound over weeks; the log is the honest witness.",
    ],
    progression: [
      "Weeks 1–4: 3 × 30 min weekly (any modality), tracked.",
      "Weeks 5–12: add a fourth session or strength progression.",
      "Ongoing: exercise as standing maintenance — the best-evidenced relapse-prevention tool you already own.",
    ],
    safety: [
    "Exercise is powerful support for mild-to-moderate depression and anxiety — but it is a complement to treatment, not a replacement for therapy or prescribed medication.",
    "Never stop prescribed antidepressants or medication because workouts are 'working'. Any change goes through your doctor.",
    "If you are starting from a low place, 5–10 minutes counts as a full session. All-or-nothing thinking kills the habit before it helps you.",
    "If exercise becomes compulsive, punitive, or ties into food control, or you have an eating-disorder history — work with a professional instead of self-directing.",
    "If you are in crisis or having thoughts of self-harm, contact a doctor or crisis line now — exercise is not the tool for that moment.",
    ],
    refs: [
      "Schuch FB et al. Am J Psychiatry 2018 — physical activity & depression: meta-analysis.",
      "Blumenthal JA et al. Psychosom Med 2007 — exercise vs sertraline for major depression (SMILE study).",
    ],
  },
  {
    id: "phone-away", title: "Your Phone's Presence Taxes Your Focus", icon: "phone-off", category: "Mindset",
    goals: ["fitness", "looksmax", "muscle"], minutes: 2,
    keywords: ["phone distraction", "focus", "attention", "digital detox"],
    summary: "Experiments found merely having your phone visible — even face-down, even off — measurably reduces working-memory capacity and fluid intelligence measures versus having it in another room. For training, reading, and deep work, 'out of sight' is a measurable performance setting, not a lifestyle aesthetic.",
    why: [
      "The Ward 'brain drain' experiments showed phone presence reduced available cognitive capacity — part of attention is spent suppressing the pull.",
      "The effect was strongest for smartphone-dependent participants — the more you check it, the more it costs you in the room with you.",
      "For sessions: between-set scrolling degrades rest quality, focus on the next set, and honest RIR assessment (see the rir and rest-intervals protocols).",
    ],
    steps: [
      "Training: phone stays in the bag/locker. Music queued before the session; logbook on paper or opened once at the end.",
      "Work blocks: phone in another room for 50-minute blocks. The urge fades by minute 8; the capacity returns with it.",
      "Evenings: the phone charges outside the bedroom (see the screens protocol) — one rule, three benefits.",
      "If you must carry it: notifications off except calls from humans who matter.",
    ],
    mistakes: [
      "Face-down on the desk 'disciplined' — the experiments suggest suppression costs remain; distance wins.",
      "Using it as the workout music device with 'quick checks' — the check is the product now, the set is the interruption.",
      "Framing this as anti-technology — it's pro-attention; the phone gets you back at full value.",
    ],
    progression: [
      "Week 1: phone-free training sessions. Full stop.",
      "Week 2: add one 50-minute phone-free work block daily.",
      "Ongoing: the bedroom charging rule becomes permanent — it's the keystone.",
    ],
    refs: [
      "Ward AF et al. J Assoc Consum Res 2017 — brain drain: the mere presence of one's own smartphone.",
    ],
  },
  {
    id: "nature-pill", title: "The 20-Minute Nature Pill", icon: "trees", category: "Mindset",
    goals: ["fitness", "looksmax"], minutes: 2,
    keywords: ["nature walk", "outdoors", "green space", "stress relief"],
    summary: "Twenty to thirty minutes in a green space measurably lowers stress hormones — the urban 'nature pill' studies found cortisol drops most efficiently in the 20–30 minute window. Combined with a walk, it stacks with half the protocols in this library. Free, repeatable, proven.",
    why: [
      "The Hunter study found a 20–30 minute nature experience significantly reduced salivary cortisol, with the steepest drop in that window — the basis of the 'nature pill' prescription.",
      "The Bratman PNAS study found a 90-minute nature walk reduced rumination (subgenual prefrontal activity) versus an urban walk — nature quiets the brooding loop.",
      "Attention Restoration Theory research shows natural environments replenish directed attention — the resource deep work and training both spend.",
    ],
    steps: [
      "Find your nearest green: park, tree-lined street, water. 15 minutes' reach is enough.",
      "Dose: 20–30 minutes, 2–3× weekly minimum; daily is better. Walk slowly or sit — the point is the setting, not the pace.",
      "Phone stays pocketed (see phone-away) — the nature pill with a feed in hand is half-strength.",
      "Stack: post-meal walks (see that protocol) routed through green space — one walk, three protocols.",
    ],
    mistakes: [
      "Power-walking through nature with podcasts at full volume — it still helps, but the cortisol data favor low-stimulation presence.",
      "Waiting for weekends and perfect weather — a 20-minute drizzle park loop beats a hypothetical mountain trip.",
      "Judging by day 1 — the mood effect is real but subtle; judge by weeks and stress ratings.",
    ],
    progression: [
      "Week 1: two 20-minute green-space visits.",
      "Weeks 2–4: build to 3+ weekly; map 2–3 reliable routes.",
      "Ongoing: route hard weeks through more green — it's the cheapest stress-bucket relief there is.",
    ],
    refs: [
      "Hunter MR et al. Front Psychol 2019 — nature pill: minimum dose for cortisol reduction.",
      "Bratman GN et al. Proc Natl Acad Sci USA 2015 — nature experience reduces rumination.",
    ],
  },
  {
    id: "connection", title: "Loneliness Shortens Lives — Treat Connection As Training", icon: "users", category: "Mindset",
    goals: ["fitness", "looksmax", "muscle"], minutes: 2,
    keywords: ["loneliness", "social", "friends", "relationships", "community"],
    summary: "The meta-analysis is stark: weak social ties raise mortality risk comparably to smoking and exceed obesity's effect size. Connection isn't a soft extra on the path to a better body — it's a health behavior with survival-grade data, and training works better with people in it.",
    why: [
      "Holt-Lunstad's meta-analysis (148 studies, 300,000+ people) found strong social relationships associated with ~50% increased survival odds — an effect in smoking territory.",
      "Social isolation and loneliness independently predict cardiovascular and all-cause mortality in cohort data.",
      "Behaviorally: training partners, teams, and communities raise adherence — the strongest predictor of any program's results.",
    ],
    steps: [
      "Audit your week: how many face-to-face interactions beyond transactions? Two or fewer = act now.",
      "Schedule connection like sessions: a standing gym slot with a friend, a weekly call, a class or club.",
      "Train with people at least once weekly — the partner effect on adherence is documented and free.",
      "Invest depth over breadth: one relationship grown beats ten contacts added.",
    ],
    mistakes: [
      "Treating social time as a reward for finishing the grind — it IS the grind; longevity data don't distinguish.",
      "Substituting online interaction entirely — some is fine; the mortality data track in-person ties most strongly.",
      "Waiting to be invited — the standing invitation you create is worth three you wait for.",
    ],
    progression: [
      "Week 1: one scheduled social session (gym partner, call, class).",
      "Weeks 2–4: make it standing/weekly.",
      "Ongoing: protect it like a training session — because it is one.",
    ],
    refs: [
      "Holt-Lunstad J et al. PLoS Med 2010 — social relationships & mortality risk meta-analysis.",
      "Holt-Lunstad J et al. Perspect Psychol Sci 2015 — loneliness & social isolation as risk factors.",
    ],
  },
  {
    id: "journaling", title: "Dump The Day On Paper — 5 Minutes", icon: "pen-line", category: "Mindset",
    goals: ["fitness", "looksmax", "fatloss"], minutes: 2,
    keywords: ["journaling", "worry dump", "reflection", "sleep quality"],
    summary: "Expressive writing — 5–15 minutes of unfiltered writing about what's on your mind — has decades of trial data: less rumination, better working memory, and even fewer health visits in some studies. It slots perfectly into the wind-down (see that protocol) and costs a notebook.",
    why: [
      "Pennebaker's original trial found emotional writing produced fewer health-center visits and improved measures versus trivial-topic controls — replicated across dozens of studies since.",
      "Working-memory research (Klein & Boals) found expressive writing about stressful events improved working-memory capacity — unloading frees bandwidth.",
      "Pre-sleep writing about tomorrow's tasks specifically speeds sleep onset in one trial — the brain stops rehearsing what's written down.",
    ],
    steps: [
      "Evening, 5–15 minutes: write whatever is present — the day, worries, the session, plans. Unfiltered, unedited, nobody reads it.",
      "Pre-bed variant with evidence: write tomorrow's to-do list in detail (Scullin's trial) — then close the book and sleep.",
      "Keep it in the wind-down stack, before lights out — pen and paper, not a notes app (see screens protocol).",
      "No rules on grammar, length, or positivity — the value is in the unload, not the prose.",
    ],
    mistakes: [
      "Rewriting it to be presentable — this is a dump, not a publication; editing re-loads the brain.",
      "Analyzing yourself into a spiral — if a topic needs real work, that's journaling-with-a-therapist territory, fine and different.",
      "Typing it into a glowing screen at midnight — the medium undoes the method.",
    ],
    progression: [
      "Week 1: 5 minutes nightly in the wind-down.",
      "Weeks 2–4: add the tomorrow-list variant on busy days.",
      "Ongoing: deploy on heavy weeks as the pressure valve; nightly as the default.",
    ],
    refs: [
      "Pennebaker JW. Psychol Sci 1997 — writing about emotional experiences as a therapeutic process.",
      "Scullin MK et al. J Exp Psychol Gen 2018 — bedtime writing & sleep onset (to-do list trial).",
    ],
  },
];
