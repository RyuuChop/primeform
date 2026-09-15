// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Fat Loss & Cardio Protocols (19)
// ─────────────────────────────────────────────────────────────
import type { Tip } from "./types";

export const FATLOSS_TIPS: Tip[] = [
  {
    id: "cut-rate", title: "Lose 0.5–1% Of Bodyweight Per Week — No Faster", icon: "scale", category: "Fat Loss",
    goals: ["fatloss", "looksmax", "fitness"], minutes: 3,
    summary: "Crash cuts shed muscle along with fat, tank training, and rebound. A 0.5–1% weekly loss rate preserves muscle, keeps hunger manageable, and produces the 'you look great' result that actually lasts. Slow is the fast way when keeping the result is part of the goal.",
    why: [
      "Research on athletes and dieters shows aggressive deficits cost disproportionate lean mass — the faster the scale falls, the worse the muscle-to-fat ratio of what you lose.",
      "Studies comparing cutting speeds find slower cuts preserve strength and training quality — which is what preserves the physique you're cutting to reveal.",
      "The deficit needed for fast loss is unsustainable: adherence data show crash diets collapse into rebound more often than moderate ones.",
    ],
    steps: [
      "Compute your rate: 0.5–1% of bodyweight per week. 80kg → 0.4–0.8kg/week. That's the target band, judged on the 4-week trend.",
      "Set calories to match (see the calories protocol): usually 300–500 below maintenance, adjusted by data.",
      "Weigh daily under the same conditions; compare weekly averages, never single days (see the daily-weigh protocol).",
      "If the 2-week average shows >1.2%/week falling, add 100–150 kcal back. Faster isn't better.",
    ],
    mistakes: [
      "Cutting 800–1000+ kcal 'to start fast' — you're buying 2 fast weeks followed by a stall and a binge.",
      "Judging rate by single weigh-ins — water and sodium swing 1–2kg daily.",
      "Combining an aggressive deficit with new high-volume training — that's the muscle-loss combo special.",
    ],
    progression: [
      "Week 1–2: establish the trend line at your initial deficit.",
      "Every 5kg lost: recalculate (see the adaptive-thermo protocol).",
      "Every 8–10 weeks: 1–2 week diet break at maintenance (see the diet-break protocol).",
    ],
    refs: [
      "Helms ER et al. J Int Soc Sports Nutr 2014 — evidence-based recommendations for natural bodybuilding contest prep.",
      "Garthe I et al. Med Sci Sports Exerc 2011 — rate of weight change in athletes & body composition.",
    ],
  },
  {
    id: "cutting-protein", title: "Protein Goes UP While Cutting: 2.2–2.6g/kg", icon: "drumstick", category: "Fat Loss",
    goals: ["fatloss", "muscle", "looksmax"], minutes: 2,
    summary: "In a deficit, protein is armor. Research on lean dieters and lifters points toward the upper end: roughly 2.2g/kg (and up to ~2.6g/kg when very lean and training hard). It preserves muscle, blunts hunger, and costs more calories to digest.",
    why: [
      "Reviews of lean, training populations converge on higher protein during deficits than during maintenance — requirements scale with energy restriction.",
      "A landmark trial (Longland) showed a high-protein group in a big deficit LOST fat and GAINED lean mass over 4 weeks — the clearest demonstration of protein's protective role.",
      "Protein has the highest thermic effect of any macro (~20–30%) and the highest satiety per calorie — doubly valuable in a deficit.",
    ],
    steps: [
      "Set protein at 2.2g/kg bodyweight (or 2.6g/kg lean mass if you know it). 80kg → ~175g/day.",
      "Distribute over 3–4 meals of 40g+ (see the protein and protein-breakfast protocols).",
      "Anchor every meal with the protein first; build vegetables and starch around it.",
      "Use whey/casein to close gaps — it's food-grade protein with a label.",
    ],
    mistakes: [
      "Cutting protein 'because calories are tight' — protein is the last calorie you trim.",
      "Reading the 1.6g/kg maintenance number and applying it to a deficit — needs rise when energy drops.",
      "One giant protein meal at night and nothing all day — distribution matters (see the satiety protocol).",
    ],
    progression: [
      "Week 1: hit the protein target daily, regardless of everything else.",
      "Ongoing: keep protein constant while carbs/fat absorb the deficit adjustments.",
      "Very lean (<12% men / <22% women): push toward 2.6g/kg lean mass.",
    ],
    refs: [
      "Helms ER et al. J Int Soc Sports Nutr 2014 — protein requirements for lean, training dieters.",
      "Longland TM et al. Am J Clin Nutr 2016 — higher protein + deficit: fat loss with lean mass gain RCT.",
    ],
  },
  {
    id: "lift-while-cutting", title: "Lift Heavy Through The Entire Cut", icon: "zap", category: "Fat Loss",
    goals: ["fatloss", "muscle", "strength"], minutes: 2,
    summary: "In a deficit, the lifting signal tells your body which tissue to keep. Cut calories and stop lifting and you'll lose fat and muscle indiscriminately. Cut calories and lift heavy and the muscle survives. Cardio doesn't send this signal — the bar does.",
    why: [
      "The Longland trial paired a deficit with resistance training and preserved — even gained — lean mass while losing fat; deficits without lifting show much worse retention.",
      "Reviews of body recomposition identify resistance training + high protein as the two non-negotiables for preserving lean mass in an energy deficit.",
      "Strength maintenance in a cut is also a canary: unexplained strength loss flags an over-aggressive deficit early.",
    ],
    steps: [
      "Keep 3–4 lifting sessions weekly through the cut — same program, same movements (see the program-hopping protocol).",
      "Hold intensity (weight on the bar); let volume shrink first if recovery demands it — drop to 2–3 sets before dropping load.",
      "Don't convert lifting days into cardio because you're tired — sleep and food fix cut-fatigue; cardio swaps don't.",
      "Track key lifts weekly. Flat for 3+ weeks while eating plenty of protein? You're probably cut deeper than recovery allows.",
    ],
    mistakes: [
      "Switching to 'toning' circuits in a deficit — the exact recipe for skinny-fat outcomes.",
      "Chasing PRs mid-cut and reading the inevitable stall as weakness — maintenance IS winning in a deficit.",
      "Skipping the last set everywhere because 'it's just a cut' — the stimulus threshold doesn't lower.",
    ],
    progression: [
      "Week 1: lock lifting schedule; no changes through the cut.",
      "Ongoing: maintain loads; watch the log as your deficit gauge.",
      "End of cut: transition to maintenance for 4+ weeks before any new deficit.",
    ],
    refs: [
      "Longland TM et al. Am J Clin Nutr 2016 — resistance training + protein in a deficit RCT.",
      "Helms ER et al. J Int Soc Sports Nutr 2014 — training & nutrition for lean mass retention.",
    ],
  },
  {
    id: "neat-cut", title: "Deficits Shrink Your Movement — Guard Your Steps", icon: "footprints", category: "Fat Loss",
    goals: ["fatloss", "fitness"], minutes: 2,
    summary: "The hidden enemy of every cut is NEAT — the non-exercise movement (walking, fidgeting, standing) that quietly drops by hundreds of calories when you diet. Your body economizes before you notice. A daily step floor pins it down.",
    why: [
      "Classic research shows spontaneous daily movement falls substantially during caloric restriction — part of the adaptive response to deficit.",
      "Reviews of adaptive thermogenesis count reduced spontaneous activity among the biggest controllable pieces of metabolic slowdown.",
      "Steps are the most reliable NEAT lever: measurable, schedulable, and independent of workout motivation.",
    ],
    steps: [
      "Set a daily step floor at your current realistic baseline (e.g., 8,000) — never below, regardless of training.",
      "Install step anchors: 10-minute walk after each meal (see the post-meal-walk protocol), park farther, stairs by rule.",
      "Track steps on the same device daily; watch the trend, not single days.",
      "Hit a 3-day stall in weight AND steps dropped? Steps first, calories second.",
    ],
    mistakes: [
      "Adding intense cardio to 'fix' a stall while NEAT quietly collapsed — high-intensity cardio also tends to subtract later movement.",
      "Gamifying one 20,000-step Sunday, then 4,000-step weekdays — the daily floor is the tool.",
      "Assuming workouts cover it — a 400-kcal session doesn't offset a 500-kcal NEAT drop.",
    ],
    progression: [
      "Week 1: measure baseline steps.",
      "Week 2: set the floor 10% above baseline; hold it daily.",
      "Ongoing: raise the floor with fitness — but keep it effortless, not a second workout.",
    ],
    refs: [
      "Levine JA et al. Science 1999 — energy expenditure of nonexercise activity (NEAT).",
      "Rosenbaum M, Leibel RL. Int J Obes 2010 — adaptive thermogenesis & reduced spontaneous activity.",
    ],
  },
  {
    id: "daily-weigh", title: "Weigh Daily — Judge Only The Weekly Average", icon: "trending-down", category: "Fat Loss",
    goals: ["fatloss", "fitness"], minutes: 2,
    summary: "Bodyweight swings 1–2kg daily on water, sodium, carbs, and... timing. Daily weighing under fixed conditions gives you a trend line that actually means something — and the research says daily weighers lose more and keep it off better than weekly or never.",
    why: [
      "RCTs of daily self-weighing show greater weight loss and better maintenance versus less frequent monitoring.",
      "Systematic reviews associate frequent self-weighing with improved outcomes — the feedback loop tightens behavior.",
      "Daily data teaches the noise: after a month you'll read a salty takeaway spike as water, not failure — protecting adherence.",
    ],
    steps: [
      "Weigh every morning after the bathroom, before food or drink, minimal clothing. Same conditions, every day.",
      "Record the number — no judgment attached to single readings.",
      "Compare weekly averages only: this week vs last. That delta is your real rate (target 0.5–1%/week).",
      "Same-scale, same-floor spot. Scales disagree with each other; pick one and commit.",
    ],
    mistakes: [
      "Reacting to one number — the 3-day spike after a salty meal is water, and the mirror agrees by Friday.",
      "Weighing at random times daily — the comparison becomes meaningless.",
      "Skipping weigh-ins after 'bad' days — that's exactly when the data matters most.",
    ],
    progression: [
      "Week 1: daily weigh-ins, watch the noise without changing anything.",
      "Week 2+: act on weekly averages only.",
      "Ongoing: if daily weighing starts feeling obsessive, switch to weekly — consistency of method beats frequency.",
    ],
    refs: [
      "Steinberg DM et al. Obesity 2015 — daily self-weighing RCT (WISE study).",
      "Pacanowski CR, Levitsky DA. Int J Behav Nutr Phys Act 2015 — frequent self-weighing review.",
    ],
  },
  {
    id: "diet-break", title: "Schedule 1–2 Week Maintenance Breaks Every 8–10 Weeks", icon: "refresh-cw", category: "Fat Loss",
    goals: ["fatloss", "fitness", "muscle"], minutes: 3,
    summary: "Continuous dieting erodes hormones, mood, and adherence. Planned diet breaks — 1–2 weeks eating at maintenance — interrupt that erosion without meaningfully slowing fat loss across the whole journey. The trials back it: equal fat lost, better retention and less binge risk.",
    why: [
      "The MATRIX trial: intermittent dieting (2-week breaks) matched continuous dieting for fat loss while producing greater weight and fat-mass losses vs continuous in some measures, with better adherence.",
      "The INTERRUPT study found 2-week breaks improved weight-loss efficiency (less lean loss) relative to continuous dieting.",
      "Breaks restore leptin, thyroid output, training quality, and — the underrated part — the psychological ability to keep going.",
    ],
    steps: [
      "Plan breaks at week 8–10 of any deficit: 1–2 weeks at estimated maintenance (roughly +300–500 kcal).",
      "Eat at maintenance deliberately — this is NOT an unstructured eat-anything week. Keep protein and meal structure.",
      "Keep training; expect great sessions — that's the glycogen and hormones talking.",
      "Expect +0.5–1kg scale jump from glycogen/water. It's not fat; the trend resumes on return to deficit.",
    ],
    mistakes: [
      "Treating the break as a cheat fortnight — 'maintenance' means maintenance, not free-for-all.",
      "Extending the break indefinitely because the scale moved up — that's water; check a 2-week trend before judging.",
      "Taking breaks every 2 weeks — the evidence supports breaks after multi-week blocks, not constant grazing at maintenance.",
    ],
    progression: [
      "Block 1 (8–10 weeks deficit) → break.",
      "Block 2 → break → reassess: is further cutting even needed?",
      "Life events (holidays, illness) count as breaks — schedule around reality.",
    ],
    refs: [
      "Byrne NM et al. Int J Obes 2018 — intermittent energy restriction (MATRIX trial).",
      "Peos IX et al. Int J Obes 2021 — intermittent dieting (INTERRUPT study).",
    ],
  },
  {
    id: "satiety-per-meal", title: "Build Every Meal On The Satiety Ladder", icon: "salad", category: "Fat Loss",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    summary: "Same calories, wildly different fullness: a chicken-and-vegetable plate with fruit keeps you satisfied for hours; the same calories as a pastry leave you grazing by 4 PM. Rank foods by satiety per calorie and build meals from the top.",
    why: [
      "The classic satiety index research found enormous differences in fullness per calorie across common foods — protein, fiber, and water content dominate the ranking.",
      "Satiety per calorie, not calories alone, predicts how a deficit will actually feel — and felt-hunger predicts whether the diet survives.",
      "Protein and fiber each independently suppress subsequent intake — combining them at every meal compounds the effect.",
    ],
    steps: [
      "Meal formula: 40g+ protein + high-fiber carb (potato, oats, beans, whole grains) + high-volume vegetables + water-rich fruit.",
      "Know the tiers: best satiety-per-calorie = lean protein, potatoes, oats, legumes, fruit, vegetables. Weakest = oils, nuts, cheese, pastries, sugary drinks.",
      "Place the weak-tier foods deliberately and measured — as accents, never as meal bases.",
      "Hunger between meals? Audit the last meal's protein and fiber before blaming willpower.",
    ],
    mistakes: [
      "Calling nuts and cheese 'healthy' and eating them unmeasured — nutritious, but bottom of the satiety ladder.",
      "Salads with no protein — volume without the protein anchor fades in 90 minutes.",
      "Liquid meal replacements as a lifestyle — fine as tools, poor as satiety training.",
    ],
    progression: [
      "Week 1: rebuild dinner on the formula.",
      "Week 2: all meals on the formula.",
      "Ongoing: snacking much? Add protein+fiber to the previous meal instead of resisting harder.",
    ],
    refs: [
      "Holt SH et al. Eur J Clin Nutr 1995 — satiety index of common foods.",
      "Slavin JL. Nutrition 2005 — dietary fiber & body weight.",
    ],
  },
  {
    id: "soup-preload", title: "Start Lunch & Dinner With Volume", icon: "soup", category: "Fat Loss",
    goals: ["fatloss", "fitness"], minutes: 1,
    summary: "A broth-based soup or large salad before the main course measurably cuts the calories you eat at that meal — Rolls' lab has replicated it across forms and populations. Five minutes of starter, hundreds of calories saved, same fullness.",
    why: [
      "Penn State trials found soup preloads reduced total meal energy intake across soup types — the effect is robust to recipe variety.",
      "First-course volume triggers stretch receptors and slows the rest of the meal (works with the eat-slow protocol).",
      "The preload shifts the meal's average calorie density down — the energy-density principle deployed tactically.",
    ],
    steps: [
      "Keep 2–3 zero-effort starters stocked: miso/broth cubes, bagged salad + canned beans, cut vegetables + yogurt dip.",
      "Serve the starter, eat it slowly (5–10 min), then plate the main.",
      "Broth soups > cream soups; dress salads with vinegar/lemon + a teaspoon of oil.",
      "At restaurants, order the broth soup or side salad as the automatic first course.",
    ],
    mistakes: [
      "Cream-based or cheesy starters — the preload must be low-density or it backfires.",
      "Bread basket as the starter — the opposite of the protocol.",
      "Skipping it when rushed — the canned/bagged versions exist precisely for rushed days.",
    ],
    progression: [
      "Week 1: starter before dinner daily.",
      "Week 2: add lunch.",
      "Ongoing: rotate 3 starters to kill boredom.",
    ],
    refs: [
      "Flood JE, Rolls BJ. Appetite 2007 — soup preloads reduce meal energy intake.",
      "Rolls BJ et al. Am J Clin Nutr 1999 — water-rich first courses & intake.",
    ],
  },
  {
    id: "plateau-protocol", title: "The 2-Week Plateau Protocol — Audit Before You Panic", icon: "mountain", category: "Fat Loss",
    goals: ["fatloss"], minutes: 3,
    summary: "Every cut stalls for 2–3 weeks at some point — usually water retention masking real loss, not a broken metabolism. Before slashing calories, run the audit: intake honestly, steps honestly, sleep, and the trend line. Then change exactly one variable.",
    why: [
      "Most 'plateaus' are measurement artifacts: untracked bites, shrinking NEAT, or sodium/water masking fat loss for up to 3 weeks.",
      "Adaptive thermogenesis is real but gradual (~10–15% beyond size effects) — it demands recalculation, not crisis.",
      "Single-variable changes keep the experiment readable; panic-slashing calories and cardio simultaneously destroys your ability to know what worked.",
    ],
    steps: [
      "Week 1 of stall: track food with a scale, 100% honest, no changes. Also check step trend vs month one.",
      "Check the trend, not days: 3-week flat weekly averages = true stall; 1–2 weeks = keep going.",
      "If intake is honest and steps held: recalculate maintenance for your new weight and subtract 100–150 kcal (or add 1,500 steps). One lever.",
      "Hold the change 2–3 weeks before judging. Then reassess.",
    ],
    mistakes: [
      "Cutting 500 more kcal the moment the scale pauses — the stall often breaks itself as water releases.",
      "Adding an hour of cardio AND cutting food the same week — unsustainable and unreadable.",
      "Assuming metabolic damage from one plateau — physiology adapts; it doesn't revolt.",
    ],
    progression: [
      "Stall week 1: full honest audit.",
      "Stall weeks 2–3: one variable changed (usually steps or −100–150 kcal).",
      "Still stuck after that: schedule the diet break — recovery, then resume.",
    ],
    refs: [
      "Leibel RL et al. N Engl J Med 1995 — metabolic adaptation to weight change.",
      "Rosenbaum M, Leibel RL. Int J Obes 2010 — adaptive thermogenesis review.",
    ],
  },
  {
    id: "no-crash", title: "No Sub-1200 Crash Cuts — Ever", icon: "ban", category: "Fat Loss",
    goals: ["fatloss", "fitness", "looksmax", "muscle"], minutes: 2,
    summary: "Very-low-calorie crashes (below ~1,200 kcal for most adults, without medical supervision) trade weeks of fast scale movement for muscle loss, hormonal disruption, hair shedding, and a rebound with interest. The body you want is built by the deficit you can hold for months.",
    why: [
      "Sports-nutrition research shows aggressive deficits disproportionately sacrifice lean mass — the tissue that shapes the body you're trying to reveal.",
      "Rapid loss is a recognized trigger for temporary hair shedding (telogen effluvium) and hormonal disruption — the visible opposite of the goal.",
      "Crash physiology sets up rebound: adaptation plus regained fat means most crash dieters end heavier within years.",
    ],
    steps: [
      "Floor your intake: never below ~1,200 kcal (women) / 1,500 kcal (men) without medical supervision — and that floor still needs protein and lifting.",
      "Build the deficit with food volume and steps first (see satiety, energy-density, and NEAT protocols) — hunger is managed, not endured.",
      "If the target demands a bigger deficit than you can sustain, extend the timeline instead of crashing.",
      "Hair falling, constant cold, no libido, sleep wrecking: these are stop signs, not badges — raise to maintenance and reassess.",
    ],
    mistakes: [
      "Liquid-only detox weeks — you're paying muscle for water weight.",
      "Copying someone else's 900-kcal plan — body size and training history change the math entirely.",
      "Interpreting crash-rebound as personal failure — it's the predictable physiology of the method.",
    ],
    progression: [
      "Set the deficit at 300–500 kcal and judge by the monthly trend.",
      "If fatigue crushes training after 2 weeks, raise intake 100–150 kcal — the cut is long, pace it.",
      "Every 8–10 weeks: diet break (see the diet-break protocol).",
    ],
    refs: [
      "Garthe I et al. Med Sci Sports Exerc 2011 — rate of weight loss & body composition in athletes.",
      "Helms ER et al. J Int Soc Sports Nutr 2014 — deficit size & lean mass retention.",
    ],
  },
  {
    id: "nns", title: "Diet Drinks & Sweeteners: Tool, Not Threat", icon: "cup-soda", category: "Fat Loss",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    summary: "The evidence is clearer than the internet thinks: replacing sugary drinks with non-nutritive sweeteners supports weight loss in randomized trials and doesn't break ketosis/fat loss by magic. They're a bridge, not a health food — but they beat sugar decisively.",
    why: [
      "Systematic reviews and RCTs find non-nutritive sweeteners help reduce calorie intake and support modest weight loss when replacing sugar — trials, not fear threads.",
      "Major regulatory reviews (EFSA/FDA/JECFA) find approved sweeteners safe at normal intakes; the early bladder-cancer scare came from rodent doses no human approaches.",
      "The genuine caveats: they don't build good habits by themselves, and some people see increased sweet cravings — monitor your own response.",
    ],
    steps: [
      "Use diet versions as the bridge from sugary drinks — a Diet Coke with lunch beats a 210-kcal regular by 210 calories.",
      "Keep water, coffee, and tea as the defaults; sweetened drinks (diet included) are flavor events, not hydration.",
      "Watch your own data: if diet drinks reliably precede cravings or binges, drop them — self-experimentation beats ideology.",
      "Ignore the 'insulin spike' threads for these doses — RCT data don't support a fat-gain mechanism at normal use.",
    ],
    mistakes: [
      "Drinking 6 diet sodas daily and calling it hydration.",
      "Assuming 'natural' sweeteners (honey, agave, coconut sugar) are different — they're sugar with branding.",
      "Letting the bridge become permanent crutch — the goal is water as default, sweetened anything as occasional.",
    ],
    progression: [
      "Week 1: swap sugary drinks → diet versions. Full stop.",
      "Weeks 2–8: gradually shift the mix toward water/tea/coffee.",
      "Long-term: 0–1 sweetened drinks daily, sugar or diet — deliberate, not default.",
    ],
    refs: [
      "Rogers PJ, Appleton KM. Nutr Bull 2021 — NNS effects on appetite & weight: evidence review.",
      "Miller PE et al. Am J Clin Nutr 2014 — NNS & body weight meta-analysis (RCTs).",
    ],
  },
  {
    id: "fat-floor", title: "Keep Dietary Fat Above ~0.8g/kg For Hormones", icon: "beef", category: "Fat Loss",
    goals: ["fatloss", "muscle", "strength", "looksmax"], minutes: 2,
    summary: "Aggressively cutting dietary fat is a classic mistake: very low-fat diets measurably lower testosterone, dry out skin, and wreck satiety. Keep fat at 0.8–1g/kg and let carbs and activity carry the rest of the deficit.",
    why: [
      "Controlled trials show reducing dietary fat from ~40% to ~20% of calories lowers testosterone concentrations measurably — the mechanism is cholesterol and fat-soluble-vitamin dependent steroid synthesis.",
      "Essential fatty acids and fat-soluble vitamins (A, D, E, K) require dietary fat — skin and hair are among the first casualties of very low-fat dieting.",
      "Fat slows gastric emptying — it's a major satiety lever; zero-fat meals leave you grazing.",
    ],
    steps: [
      "Set fat at 0.8–1g/kg bodyweight (80kg → 65–80g). Never below ~0.6g/kg sustained.",
      "Spread it: eggs/salmon breakfast, olive oil on vegetables, nuts measured, fatty fish twice weekly (see the fish protocol).",
      "When the deficit needs to deepen, cut carbs and/or add steps — not fat below the floor.",
      "Get fat-soluble vitamins with fat-containing meals (salad with oil, eggs with yolks).",
    ],
    mistakes: [
      "Boiled-chicken-and-broccoli cuts — hormones and skin pay the bill for the faster scale.",
      "Zero-oil cooking combined with skim everything — 30g of fat a day is not 'clean', it's a deficiency.",
      "Fearing carbs instead — in a deficit, carbs fuel training; fat below the floor breaks hormones. The asymmetry matters.",
    ],
    progression: [
      "Week 1: compute your fat floor and track it.",
      "Ongoing: hold the floor through every phase of the cut.",
      "Symptoms (libido, sleep, dry skin) at adequate calories? Check fat and sleep before blaming 'age'.",
    ],
    refs: [
      "Dorgan JF et al. Am J Clin Nutr 1996 — effects of dietary fat reduction on hormone levels.",
      "Whittaker J, Harris K. Nutr Health 2022 — macronutrient intake & testosterone: systematic review/meta-analysis.",
    ],
  },
];

export const CARDIO_TIPS: Tip[] = [
  {
    id: "zone2", title: "Build The Zone 2 Base — Most Miles Easy", icon: "heart-pulse", category: "Cardio",
    goals: ["fitness", "fatloss", "strength"], minutes: 3,
    summary: "Zone 2 — conversational-pace cardio, roughly 60–75% of max heart rate — builds the aerobic engine everything else runs on. 2–4 sessions of 30–60 minutes weekly: you should be able to hold a conversation the entire time. If you can't, it's not Zone 2.",
    why: [
      "Endurance-science reviews show elite programs run ~80% of volume at low intensity — the easy miles build mitochondria, capillaries, and stroke volume without crushing recovery.",
      "Cardiorespiratory fitness is one of the strongest mortality predictors measured — and the aerobic base is its foundation.",
      "Zone 2 stacks with lifting: easy-pace work barely taxes the recovery your muscles need (see the concurrent-training protocol).",
    ],
    steps: [
      "Calibrate by the talk test: full sentences = Zone 2. Gasping phrases = Zone 3+ (see the talk-test protocol).",
      "Schedule 2–4 Zone 2 slots weekly: 30–60 min incline walking, cycling, rowing, easy jogging, or rucking.",
      "Keep heart rate honest — ego pushes pace above the zone and turns base-building into junk miles.",
      "Stack it with life: walking meetings, phone calls on foot, commute legs. Zone 2 doesn't need a gym.",
    ],
    mistakes: [
      "Turning every session into a medium-hard grind ('grey zone') — all the fatigue, half the aerobic benefit.",
      "Judging Zone 2 by the machine's calorie readout — it lies; the talk test doesn't.",
      "Skipping it because it 'doesn't feel like exercise' — it's the compounding interest of fitness.",
    ],
    progression: [
      "Weeks 1–4: 3 × 30 min weekly, talk test throughout.",
      "Weeks 5–8: 40–45 min sessions, or 4 sessions.",
      "Ongoing: pace at the same heart rate drifting down = the engine growing. That's the metric.",
    ],
    refs: [
      "Seiler S. Scand J Med Sci Sports 2010 — polarized training: intensity distribution.",
      "Mandsager K et al. JAMA Netw Open 2018 — cardiorespiratory fitness & mortality.",
    ],
  },
  {
    id: "vo2max", title: "VO2max Is The Number That Predicts Your Life", icon: "wind", category: "Cardio",
    goals: ["fitness", "fatloss", "strength"], minutes: 2,
    summary: "If you chase one fitness metric for longevity, it's cardiorespiratory fitness. Large cohort studies show low VO2max rivals — and often exceeds — smoking and hypertension as a mortality risk factor. The good news: it's among the most trainable.",
    why: [
      "A landmark JAMA meta-analysis (Kodama) found aerobic fitness inversely and strongly associated with all-cause mortality and coronary disease.",
      "The Cleveland Clinic cohort showed elite-level fitness carried the lowest mortality, with no observed upper limit to the benefit — 'too fit' isn't a thing.",
      "VO2max responds to both easy volume (Zone 2) and intensity (HIIT) — you have two levers (see both protocols).",
    ],
    steps: [
      "Estimate yours: many watches approximate it, or use a 12-minute run/walk test. Record today's number.",
      "Build the base: Zone 2 volume (see zone2 protocol) as the foundation.",
      "Add intensity: 1–2 HIIT sessions weekly (see the hiit protocol) push the ceiling.",
      "Re-test every 8–12 weeks. Trend matters more than the absolute number.",
    ],
    mistakes: [
      "Obsessing over watch accuracy — use the same device and chase the trend.",
      "Only doing HIIT without the base, or only base without intensity — the levers work together.",
      "Believing genetics fix your ceiling — training moves most people's VO2max by 15–25%.",
    ],
    progression: [
      "Week 0: record baseline estimate.",
      "8–12 week block: Zone 2 + 1–2 HIIT weekly.",
      "Re-test, compare, repeat. Every +1 ml/kg/min is meaningful.",
    ],
    refs: [
      "Kodama S et al. JAMA 2009 — cardiorespiratory fitness & mortality meta-analysis.",
      "Mandsager K et al. JAMA Netw Open 2018 — association of fitness & long-term mortality.",
    ],
  },
  {
    id: "hiit", title: "Two HIIT Sessions Weekly — Short, Brutal, Done", icon: "bike", category: "Cardio",
    goals: ["fitness", "fatloss", "strength"], minutes: 3,
    summary: "High-intensity intervals buy big aerobic and metabolic adaptations in little time: 2 sessions weekly of 4–8 × 30s hard efforts with easy recoveries. They're the spice, not the meal — stack them on a Zone 2 base, and keep them away from leg day.",
    why: [
      "Meta-analyses show HIIT improves VO2max and cardiometabolic markers more efficiently per minute than moderate continuous work.",
      "Low-volume sprint-interval research (Gibala) demonstrates major aerobic adaptations from ~10 minutes of hard effort per session, three times weekly.",
      "HIIT's post-exercise oxygen cost is real but modest — its magic is time efficiency and mitochondrial stimulus, not fat-burning sorcery.",
    ],
    steps: [
      "Format: 5-min easy warm-up → 4–8 rounds of 30s hard (RPE 9, gasping) + 90s easy → 5-min cool-down. ~25 min total.",
      "Any machine or hill works: bike, rower, hill sprints. Running sprints demand trained tendons — start on the bike.",
      "Schedule 2 weekly, 48h+ apart, not the day before or after heavy legs.",
      "Progress by adding one round every 2 weeks (cap at 8), then add resistance/speed.",
    ],
    mistakes: [
      "Doing HIIT daily — it's high-intensity for a reason; chronic daily HIIT is overtraining in a trendy outfit.",
      "Half-effort 'intervals' — if round 5 feels identical to round 1, it wasn't HIIT.",
      "Starting with sprinting on pavement — tendons need months; begin on a bike or rower.",
    ],
    progression: [
      "Weeks 1–2: 4 rounds on a bike, learn true RPE 9.",
      "Weeks 3–8: build to 6–8 rounds.",
      "Ongoing: 2 weekly forever, swapped into any cut or bulk — the most time-efficient lever you own.",
    ],
    refs: [
      "Weston KS et al. Br J Sports Med 2014 — HIIT vs moderate exercise meta-analysis.",
      "Gibala MJ et al. J Physiol 2012 — low-volume interval training adaptations.",
    ],
  },
  {
    id: "concurrent", title: "Separate Lifting And Hard Cardio By 6+ Hours", icon: "clock-3", category: "Cardio",
    goals: ["strength", "muscle", "fitness"], minutes: 2,
    summary: "Strength and endurance adaptations partly interfere — the 'concurrent training effect'. It's real but modest and mostly schedule-dependent: lift first when fresh, separate hard cardio from legs, and keep most cardio easy (Zone 2 barely interferes).",
    why: [
      "Meta-analysis shows interference appears mainly when endurance work is high-volume, high-intensity, and run close to lifting — especially cycling/running on trained legs.",
      "Reviews identify session separation (6h+) and order (lift first) as the practical protectors of strength adaptations.",
      "Low-intensity cardio shows little interference and may aid recovery — the problem is hard-on-hard stacking.",
    ],
    steps: [
      "Structure: lift in the morning, cardio in the evening (or alternate days) — 6+ hours apart.",
      "Same-session? Lift first, cardio after. Never hard cardio before a heavy lower session.",
      "Match modality to priority: strength phase = 1–2 easy Zone 2 sessions; cutting phase = more cardio, expect slightly slower strength progress.",
      "Keep hard cardio off leg-day eve; easy walks anytime, always.",
    ],
    mistakes: [
      "5k time-trial before squat day, then wondering why squats stalled.",
      "Panic-adding HIIT during a strength block — sequence goals, don't max them simultaneously.",
      "Zero cardio while bulking 'to protect gains' — fitness and health don't pause; keep the Zone 2 base.",
    ],
    progression: [
      "Week 1: audit current cardio/lifting collisions.",
      "Ongoing: separation rule enforced; review every 8-week block.",
      "Cutting phase: cardio up, lifting load held, strength expectations honestly adjusted.",
    ],
    refs: [
      "Wilson JM et al. J Strength Cond Res 2012 — concurrent training meta-analysis.",
      "Schumann M et al. Sports Med 2020 — compatibility of concurrent aerobic & strength training: narrative review.",
    ],
  },
  {
    id: "post-meal-walk", title: "Walk 10–15 Minutes After Your Biggest Meals", icon: "footprints", category: "Cardio",
    goals: ["fitness", "fatloss", "looksmax"], minutes: 1,
    summary: "A short walk right after eating measurably blunts the blood-sugar spike and quietly stacks steps. Trials show post-meal walking beats the same walking pre-meal for glycemia. It's free, it's pleasant, and it anchors the NEAT floor.",
    why: [
      "RCTs show 10–15 minute post-meal walks significantly reduce postprandial glucose versus sitting — timing after the meal is the active ingredient.",
      "Contracting muscles pull glucose from blood without much insulin — walking is the cheapest glucose-disposal drug available.",
      "The habit conveniently enforces the post-meal NEAT anchor (see the neat-cut protocol) — one habit, two systems.",
    ],
    steps: [
      "After your largest meal (usually dinner), walk 10–15 minutes at an easy pace. Shoes by the door = the trigger.",
      "Make it social or audio: family loop, podcast, call a parent.",
      "Bad weather? Indoors: stairs, hallway laps, or march in place during a show.",
      "Stack with the eat-slow protocol: 20-minute meal, then the walk — the evening is now engineered.",
    ],
    mistakes: [
      "Saving all walking for the gym — the post-meal slot is where the glucose data lives.",
      "Turning it into intense exercise — easy pace, or you'll skip it after big meals exactly when it matters.",
      "All-or-nothing: 5 minutes still counts; the habit survives on the minimum.",
    ],
    progression: [
      "Week 1: after-dinner walk daily.",
      "Week 2: add lunch.",
      "Ongoing: the family/others version survives best — make it a ritual, not a chore.",
    ],
    refs: [
      "Reynolds AN et al. Diabetologia 2016 — walking after meals reduces glycaemia.",
      "DiPietro L et al. Diabetes Care 2013 — three 15-min post-meal walks RCT.",
    ],
  },
  {
    id: "fasted-myth", title: "Fasted Cardio Burns The Same Fat (Myth)", icon: "sunrise", category: "Cardio",
    goals: ["fatloss", "fitness"], minutes: 2,
    summary: "Training fasted burns more fat during the session but not more fat over the study period — the body rebalances across the day. An RCT directly comparing fasted vs fed cardio found identical fat loss when calories and protein matched. Train when you perform best.",
    why: [
      "The Schoenfeld RCT (20 weeks of cardio, fasted vs fed) found no difference in fat loss — session fuel source didn't matter over time.",
      "24-hour fat balance is governed by energy balance, not the substrate burned during any single hour.",
      "Fasted high-intensity work usually just performs worse — performance, adherence, and progression beat substrate minutiae.",
    ],
    steps: [
      "Pick your cardio time by schedule quality, not mythology: morning people train morning.",
      "If you enjoy fasted easy walks — fine, they're valid. Just don't expect an edge.",
      "Pre-workout meal rule of thumb: carbs + some protein 1–3h before hard sessions if performance matters.",
      "Spend your optimization budget on the big levers: deficit size, protein, steps, sleep.",
    ],
    mistakes: [
      "Suffering through fasted HIIT for zero extra benefit.",
      "Eating a 600-kcal 'pre-workout' before a 200-kcal walk — now you've optimized nothing and added a meal.",
      "Falling for 'the fat-burning zone' gadgetry — intensity and total volume matter more.",
    ],
    progression: [
      "Audit where cardio mythology is stealing your attention.",
      "Rebuild the schedule around performance and adherence.",
      "Re-test outcomes in 8 weeks: the trend won't know the difference. Because there wasn't one.",
    ],
    refs: [
      "Schoenfeld BJ et al. J Int Soc Sports Nutr 2014 — fasted vs fed cardio body composition RCT.",
      "Schoenfeld BJ, Aragon AA. Strength Cond J 2015 — nutrient timing revisited: 'anabolic window' review.",
    ],
  },
  {
    id: "talk-test", title: "Gauge Every Cardio Session With The Talk Test", icon: "ear", category: "Cardio",
    goals: ["fitness", "fatloss"], minutes: 1,
    summary: "Heart-rate zones from watches are estimates stacked on estimates. The talk test is a validated, free, always-calibrated measure of intensity: full sentences = easy base, phrases = threshold work, single words = intervals. Match the zone to the session's purpose.",
    why: [
      "Exercise-science work validates the talk test against ventilatory thresholds — speech capacity tracks physiological zones remarkably well across fitness levels.",
      "Intensity distribution (mostly easy, some hard) is the consistent feature of effective endurance programs — the talk test is how you enforce it without a lab.",
      "Watch heart rate drifts with wrist placement, sweat, and sensor quality; breathing doesn't.",
    ],
    steps: [
      "Zone 2 (base): full conversational sentences, nose-ish breathing. If monotone speech breaks, slow down.",
      "Tempo/threshold: short phrases only. Sustainable ~20–40 min, uncomfortable.",
      "Intervals: single words or silence. That's HIIT territory (see the hiit protocol).",
      "Check yourself once per session — the middle of a playlist lies; speech doesn't.",
    ],
    mistakes: [
      "Singing along as proof you're fine — talk test means actual spoken sentences about logistics.",
      "Running all runs in the phrase zone — the classic grey-zone trap that stalls progress.",
      "Overriding a true test with the watch's zone — recalibrate the watch to your breathing, not vice versa.",
    ],
    progression: [
      "Week 1: label every cardio session by talk test; note the mismatch with pace.",
      "Ongoing: distribute ~80% easy / 20% hard by speech zone.",
      "Watch your easy pace at the same speech zone improve — that's real progress.",
    ],
    refs: [
      "Seiler S. Scand J Med Sci Sports 2010 — intensity distribution in endurance training.",
      "Quinn TJ, Coons BA. J Sports Sci 2011 — the Talk Test & ventilatory thresholds.",
    ],
  },
];
