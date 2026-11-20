// ─────────────────────────────────────────────────────────────
//  ASCEND — Tips Library
//  Real, evidence-based, no-fluff advice. Every tip tagged by
//  goal so users only see what's relevant to them.
// ─────────────────────────────────────────────────────────────
import type { Tip, Goal } from "./types";
import { NUTRITION_TIPS } from "./tips-nutrition";
import { TRAINING_TIPS } from "./tips-training";
import { FATLOSS_TIPS, CARDIO_TIPS } from "./tips-fatloss-cardio";
import { RECOVERY_TIPS, SLEEP_TIPS } from "./tips-recovery-sleep";
import { LOOKS_TIPS } from "./tips-looks";
import { FORM_TIPS, POSTURE_TIPS } from "./tips-form-posture";
import { SUPPLEMENT_TIPS, MINDSET_TIPS } from "./tips-supplements-mindset";

const CORE_TIPS: Tip[] = [
  {
    id: "protein", title: "Eat 1.6–2.2g Protein Per Kg", icon: "beef", category: "Nutrition",
    goals: ["muscle", "fatloss", "fitness", "looksmax", "strength"], minutes: 3,
    keywords: ["protein intake", "macros", "muscle growth", "grams per kg", "whey"],
    summary: "Protein is the raw material for muscle and the most satiating macro. Hit 1.6–2.2 g per kg of bodyweight, every day, before worrying about anything else.",
    why: [
      "Meta-analyses (Morton et al., 2018) show muscle gain plateaus beyond ~1.6 g/kg/day — that's the floor, not the ceiling.",
      "Protein has the highest thermic effect (~20–30%) — you burn part of it just digesting it.",
      "High protein during fat loss preserves lean mass, which keeps your jawline and frame visible as you cut.",
    ],
    steps: [
      "Take your bodyweight in kg. Multiply by 1.8 — that's your daily target in grams.",
      "Anchor each meal with a palm-to-two-palm sized protein source: eggs, chicken, beef, fish, Greek yogurt, cottage cheese, whey.",
      "Spread across 3–4 meals. ~0.4 g/kg per meal maximizes muscle protein synthesis.",
      "Can't hit it with food? One scoop of whey = ~24 g. Use 1–2 shakes, no more.",
    ],
    mistakes: [
      "Counting protein only on training days — muscles rebuild for 48–72h after training.",
      "Trusting labels on 'protein' snacks — most are carb bars with a scoop of whey dust.",
      "Front-loading everything at dinner. Distribution matters.",
    ],
    progression: [
      "Week 1: just track what you already eat — most people are at half their target.",
      "Week 2: add one protein anchor meal.",
      "Week 3: hit target 5 of 7 days. Then make it automatic.",
    ],
    refs: [
      "Morton RW et al. Br J Sports Med 2018 — protein dose-response meta-analysis (1.6 g/kg).",
      "ISSN Position Stand: Protein & Exercise (2017) — 1.4–2.0 g/kg for training individuals.",
      "Jäger R et al. JISSN 2017 — per-meal distribution recommendations.",
    ],
  },
  {
    id: "sleep", title: "Sleep 7–9 Hours Like It's Your Job", icon: "moon", category: "Recovery",
    goals: ["muscle", "fatloss", "fitness", "looksmax", "strength"], minutes: 4,
    keywords: ["sleep hours", "bedtime", "rest", "sleep duration"],
    summary: "Muscle is built while you sleep, not while you train. Under 7 hours measurably tanks testosterone, recovery, skin quality, and hunger control.",
    why: [
      "One week of 5h/night sleep cut testosterone 10–15% in young men (Leproult & Van Cauter, 2011).",
      "Deep sleep is when growth hormone pulses are largest — your primary repair window.",
      "Sleep restriction increases ghrelin (hunger) and decreases leptin (satiety) — you eat more and store more.",
      "Sleep debt shows on your face first: dark circles, puffiness, duller skin, less facial definition.",
    ],
    steps: [
      "Fix your wake time first — same time 7 days a week, even weekends.",
      "Work backwards 8 hours for bedtime. Set an alarm for bed, not just for waking.",
      "60 minutes before bed: no bright screens overhead, dim the room, cool it to ~18°C.",
      "Cut caffeine after 2 PM. Half-life is 5–6 hours — a 4 PM coffee is still in you at 10 PM.",
    ],
    mistakes: [
      "Catching up on weekends — irregular sleep timing is its own form of jet lag.",
      "Using alcohol as a sleep aid. It sedates you but destroys deep and REM sleep.",
      "Eating a huge meal within 2 hours of bed.",
    ],
    progression: [
      "Track sleep for 7 days without changing anything.",
      "Fix wake time in week 2.",
      "Add the pre-bed dimming protocol in week 3. Judge by morning energy, not the clock.",
    ],
    refs: [
      "Leproult R, Van Cauter E. JAMA 2011 — sleep restriction & testosterone.",
      "Watson NF et al. Sleep 2015 — AASM/SRS consensus: 7+ hours for adults.",
      "Dattilo M et al. Med Hypotheses 2011 — sleep, GH & muscle recovery.",
    ],
  },
  {
    id: "overload", title: "Progressive Overload Is The Whole Game", icon: "trending-up", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 3,
    keywords: ["progressive overload", "gains", "strength progress", "adding weight"],
    summary: "Your body adapts to stress and then stops changing. If the workload doesn't go up, neither do you. Add a rep, a set, or a harder variation — every week.",
    why: [
      "Muscle and strength adapt to imposed demand (Selye's GAS). Same demand = same body.",
      "Each session of a movement makes the next one slightly easier — which is exactly why the next one must be slightly harder.",
      "Small weekly jumps compound brutally: +1 rep/week = +52 reps per set per year.",
    ],
    steps: [
      "Do your planned sets × reps with clean form — that's the baseline.",
      "When a target feels easy, finish it and make the next session a little harder — +1–2 reps or +2.5 kg.",
      "Rep ladder: easier variation → harder variation (knee push-up → full → diamond → archer).",
      "If you fail a target, repeat it until you clear it. Failing forward is still progress if form stays clean.",
    ],
    mistakes: [
      "Adding reps with trash form. Half reps build half the muscle and all of the injury risk.",
      "Random exercise hopping every session — you can't progress what you don't repeat.",
      "Chasing soreness. Soreness is a byproduct, not a scoreboard.",
    ],
    progression: [
      "Weeks 1–2: finish every planned session.",
      "Weeks 3–8: add reps or load weekly — hold the form standard ruthlessly.",
      "Month 3+: harder variations become appropriate as your numbers climb.",
    ],
    refs: [
      "ACSM Progression Models in Resistance Training (2009).",
      "Kraemer WJ, Ratamess NA. Med Sci Sports Exerc 2004 — overload & adaptation.",
    ],
  },
  {
    id: "form", title: "Own The Eccentric (Lowering) Phase", icon: "arrow-down-to-line", category: "Form",
    goals: ["muscle", "strength"], minutes: 2,
    keywords: ["eccentric", "lowering phase", "tempo", "technique"],
    summary: "The lowering half of every rep causes the most muscle damage — the trigger for growth. Drop fast and you throw away half the exercise.",
    why: [
      "Eccentric contractions produce greater force and greater hypertrophy stimulus per unit of effort.",
      "Slow eccentrics increase time under tension without any extra equipment.",
      "Control proves the muscle is doing the work — momentum doesn't count.",
    ],
    steps: [
      "Lower every push-up, squat, and pull-up for a controlled 2–3 seconds.",
      "Pause 1 second at the bottom. No bouncing.",
      "Explode back up. This costs you reps at first — that's the point. Quality over count.",
    ],
    mistakes: [
      "Free-falling the negative then 'catching' at the bottom.",
      "Bouncing off the floor in push-ups or off the chest in presses.",
      "Grinding out ugly final reps. End the set one rep before form breaks.",
    ],
    progression: [
      "Week 1: 2-second negatives on everything.",
      "Week 2: add the bottom pause.",
      "Week 3: same targets, stricter tempo — you'll feel stronger within 10 days.",
    ],
    refs: [
      "Schoenfeld BJ et al. Sports Med 2017 — eccentric-focused hypertrophy literature.",
      "Roig M et al. Br J Sports Med 2009 — eccentric vs concentric strength meta-analysis.",
    ],
  },
  {
    id: "chestcue", title: "Push-Up Form Cues That Actually Matter", icon: "move-horizontal", category: "Form",
    goals: ["muscle", "fitness", "strength"], minutes: 2,
    keywords: ["push-up", "pushup form", "chest exercise", "cues"],
    summary: "One line of body, elbows at 45°, chest to floor. Master the standard push-up before touching any variation — it's the foundation everything sits on.",
    why: [
      "Body line: hips sagging means your core isn't braced — you're doing a shorter, easier rep.",
      "Elbow angle ~45° from the torso loads the chest and spares the shoulder joint.",
      "Full range (chest near floor, arms locked at top) builds more muscle than partials (2023 ROM meta-analyses).",
    ],
    steps: [
      "Set hands under shoulders, fingers spread, screw them into the floor.",
      "Squeeze glutes and brace abs BEFORE you descend — body moves as one plank.",
      "Lower chest-first until it lightly touches the floor, elbows ~45° out.",
      "Push the floor away to full lockout. Protract slightly at top for full chest contraction.",
    ],
    mistakes: [
      "Flared 90° elbows — shoulder impingement factory.",
      "Neck craning down to shorten the range.",
      "Sagging hips or piked hips. Either way the rep is fake.",
    ],
    progression: [
      "Can't do 5 clean reps? Elevate hands on a chair — not knees first.",
      "15+ clean reps? Move to decline or diamond variations.",
      "Film one set from the side weekly. Your eyes lie; the camera doesn't.",
    ],
    refs: [
      "Calatayud J et al. J Strength Cond Res 2014 — push-up EMG & progression.",
      "Pedrosa GF et al. Eur J Sport Sci 2023 — range of motion & hypertrophy.",
    ],
  },
  {
    id: "pullupprog", title: "The Zero-To-Pull-Up Roadmap", icon: "arrow-up-from-line", category: "Training",
    goals: ["muscle", "strength", "looksmax"], minutes: 3,
    keywords: ["pull-ups", "calisthenics", "back training", "progression plan"],
    summary: "Can't do a pull-up? The path is dead hangs → scapular pulls → negatives → full reps. Everyone who can do 10 started at zero.",
    why: [
      "Pull-ups train lats, biceps, upper back, and grip simultaneously — the V-taper movement.",
      "Negatives let you train the full range at up to 120–130% of your concentric strength.",
      "Scapular pulls build the often-missing first 10 cm of the rep.",
    ],
    steps: [
      "Dead hang 2 × 20–30s. Grip first — you can't pull what you can't hold.",
      "Scapular pulls 3 × 8: from a hang, pull shoulder blades down without bending elbows.",
      "Negatives 3 × 5: jump to chin-over-bar, lower for a strict 5 seconds.",
      "When a negative takes 8+ seconds, attempt a full rep. Then grease singles daily.",
    ],
    mistakes: [
      "Kipping before you own a strict rep.",
      "Half reps — chin clears the bar or it didn't happen.",
      "Only training pull-ups once a week. Frequency wins (3–5 short sessions).",
    ],
    progression: [
      "1 strict rep → grease the groove: many easy singles through the day.",
      "3–5 reps → sets of 2–3 with full rests.",
      "8+ reps → add a backpack with books.",
    ],
    refs: [
      "Hewit JK et al. Int J Exerc Sci 2018 — pull-up progression protocols.",
      "Sanchez-Moreno M et al. Sports 2020 — assisted vs resisted pull-up transfer.",
    ],
  },
  {
    id: "consistency", title: "Consistency Beats Intensity — By A Mile", icon: "flame", category: "Mindset",
    goals: ["muscle", "fatloss", "fitness", "looksmax", "strength"], minutes: 2,
    keywords: ["discipline", "routine", "motivation", "habits"],
    summary: "Three average sessions a week for a year destroys one monster workout followed by two weeks off. Your training streak is the most important number in your log.",
    why: [
      "Adaptations are dose-cumulative: total weekly volume predicts growth better than single-workout effort.",
      "Habit research: behavior repeated in a stable context becomes automatic in ~66 days on average.",
      "Missed days compound negatively — detraining begins within 1–2 weeks for conditioning.",
    ],
    steps: [
      "Never miss twice. One skipped day is a rest day; two is a new (bad) habit forming.",
      "On destroyed days, do the minimum: one set of one exercise. Momentum > perfection.",
      "Anchor training to an existing habit: after work, after shower, before dinner.",
      "Watch your streak number. Protect it like money.",
    ],
    mistakes: [
      "All-or-nothing thinking: 'I can't do the full session so why bother.'",
      "Motivation-based training. Motivation is weather; systems are climate.",
      "Overdoing week 1 so hard you can't move week 2.",
    ],
    progression: [
      "Goal 1: 7-day streak.",
      "Goal 2: 21-day streak — habit loop forming.",
      "Goal 3: 60+ days — it's now who you are.",
    ],
    refs: [
      "Lally P et al. Eur J Soc Psychol 2010 — habit formation (~66 days).",
      "Schoenfeld BJ et al. Sports Med 2016 — weekly volume dose-response.",
    ],
  },
  {
    id: "steps", title: "8–10k Steps: The Silent Fat-Loss Lever", icon: "footprints", category: "Fat Loss",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    keywords: ["walking", "daily steps", "NEAT", "fat loss lever"],
    summary: "Walking burns more fat over a week than almost any 'fat-burning workout' — without eating into recovery. Raise daily steps before cutting a single calorie.",
    why: [
      "NEAT (non-exercise activity thermogenesis) varies by up to 800–2000 kcal/day between individuals — it's the hidden half of your metabolism.",
      "Walking is low-stress cardio: it doesn't spike hunger the way HIIT can, and doesn't interfere with strength training.",
      "10k steps ≈ 300–500 kcal/day ≈ 0.5 kg fat per month — passively.",
    ],
    steps: [
      "Get a baseline from your phone for 3 days. Whatever it is, add 2,000.",
      "Attach walks to triggers: every phone call = walking. After each meal = 10 minutes.",
      "Park far, stairs always. Boring is the point — invisible calories.",
    ],
    mistakes: [
      "Eating back your steps as a reward. The walk IS the reward.",
      "Weekend-only war walking. Daily distribution wins.",
      "Counting treadmill-at-the-gym as a personality while sitting 23 other hours.",
    ],
    progression: [
      "Baseline +2k for two weeks.",
      "Push to 8k average.",
      "Cutting phase: 10–12k keeps fat moving without cutting food harder.",
    ],
    refs: [
      "Levine JA. Science 1999 — NEAT & weight gain resistance.",
      "Tudor-Locke C et al. Int J Behav Nutr Phys Act 2011 — step count categories.",
    ],
  },
  {
    id: "hydration", title: "Water, Sodium & Skin: The Dry Look", icon: "droplets", category: "Looks",
    goals: ["looksmax", "fitness", "fatloss"], minutes: 2,
    keywords: ["water intake", "dry skin", "glow", "sodium balance"],
    summary: "Dehydration makes skin look flat and dull; random sodium swings cause facial puffiness. Stable water + stable salt = consistently sharper face.",
    why: [
      "Skin turgor and sub-dermal water balance are directly hydration-dependent.",
      "Wild sodium swings change aldosterone signaling → water retention shifts, mostly visible in the face.",
      "Solution isn't 'no salt' — it's CONSISTENT salt, so water balance stays predictable.",
    ],
    steps: [
      "Baseline: ~35 ml per kg bodyweight daily (70 kg → ~2.5 L). More when training hard or in heat.",
      "Keep salt intake roughly the same daily. Don't oscillate between ramen days and zero-salt days.",
      "Front-load water earlier in the day to protect sleep.",
      "Alcohol is a diuretic plus inflammatory — the next-morning puffy face is predictable.",
    ],
    mistakes: [
      "Cutting sodium to zero — cramps, flat muscles, worse pumps.",
      "Chugging 2 liters at night after forgetting all day.",
      "Confusing thirst with hunger — a large glass before meals also limits overeating.",
    ],
    progression: [
      "Week 1: carry a 1 L bottle, finish twice by 6 PM.",
      "Week 2: stabilize meal saltiness.",
      "Ongoing: judge by morning face in the mirror — you'll calibrate within weeks.",
    ],
    safety: [
    "Do not force extreme amounts of plain water — overdrinking can dilute blood sodium (hyponatremia), which is genuinely dangerous. Thirst and light-yellow urine are your best guides.",
    "Deliberate sodium and water manipulation is for people training hard and sweating heavily. If you have high blood pressure or kidney issues, keep changes moderate and check with your doctor.",
    "If you feel dizzy, nauseated, or confused while drinking a lot of water, stop and seek medical care — that is a warning sign, not a detox feeling.",
    ],
    refs: [
      "Popkin BM et al. Nutr Rev 2010 — water, hydration & health.",
      "Palma L et al. Clin Cosmet Investig Dermatol 2015 — dietary water & skin physiology.",
    ],
  },
  {
    id: "posture", title: "Fix Forward-Head Posture (The Looksmax Tax)", icon: "scan-line", category: "Posture",
    goals: ["looksmax", "fitness"], minutes: 3,
    keywords: ["forward head", "text neck", "hunched posture", "alignment"],
    summary: "Forward-head posture hides your jawline, rounds your frame, and reads as low status. Chin tucks + upper-back work reclaim it in weeks.",
    why: [
      "Every 2.5 cm of forward head carriage roughly doubles effective load on the cervical spine.",
      "Forward head posture visually buries the mentolabial angle and shortens the apparent neck.",
      "Wall angels/Y-T-W raises strengthen the muscles (deep neck flexors, lower traps) that hold you tall.",
    ],
    steps: [
      "Chin tucks 2 × 10 daily: glide the head straight back (make a double chin), hold 3s, relax.",
      "Add the Prone Y-T-W raise to your weekly plan — it directly targets the posture chain.",
      "Phone at eye level, always. Desk screen top at eye height.",
      "Every hour: 30-second wall stand — heels, glutes, shoulders, head all touching.",
    ],
    mistakes: [
      "Stretching the chest once a month and calling it fixed — strength wins, not stretching alone.",
      "Over-tucking (jabbing the chin down). Glide back, not down.",
      "Slouching 8 hours then 'doing posture' for 10 minutes. Default position is the battle.",
    ],
    progression: [
      "Weeks 1–2: daily chin tucks + hourly wall stands.",
      "Weeks 3–4: add Y-T-W raises 3x/week.",
      "Month 2: side-profile photo comparison — changes are visibly obvious.",
    ],
    refs: [
      "Hansraj KK. Surg Technol Int 2014 — head weight & cervical load.",
      "Page P et al. Int J Sports Phys Ther 2012 — upper crossed syndrome review.",
    ],
  },
  {
    id: "jawline", title: "The Actual Science of a Sharper Jawline", icon: "smile", category: "Looks",
    goals: ["looksmax", "fatloss"], minutes: 3,
    keywords: ["jaw", "chewing", "face shape", "TMJ"],
    summary: "Jaw definition = facial fat % + masseter size + posture + water balance. No chewing toy rewrites your bone structure — but 10–15% body fat rewrites your face.",
    why: [
      "Subcutaneous facial fat is the #1 variable under your control. Lean faces read as more defined, full stop.",
      "Masseter hypertrophy from normal chewing/gum is modest but real; giga-chad chew gadgets mostly risk TMJ damage.",
      "Tongue posture (full palate contact) is plausible for long-term soft-tissue positioning, but it's a background habit, not a transformation.",
    ],
    steps: [
      "Get to ~10–14% body fat via the fat-loss protocol — this alone transforms most faces.",
      "Lips closed, teeth lightly apart, tongue resting on the full palate — make it your resting default.",
      "Train neck (neck curls/extensions here) — a thicker neck frames the jaw.",
      "Manage water/sodium stability and sleep — de-puffing is immediate visual definition.",
    ],
    mistakes: [
      "Hard Chew devices → TMJ pain, clicks, and asymmetry risk. The risk/return is terrible.",
      "Mewing as a substitute for fat loss. Posture helps; adipose tissue is the main event.",
      "Obsessing over millimeters and ignoring the 10 kg of fat that changes everything.",
    ],
    progression: [
      "Phase 1: cut body fat % (steps + protein + small deficit).",
      "Phase 2: add direct neck training 2–3x/week.",
      "Phase 3: photo every 4 weeks in the same light — track the angle under the jaw sharpening.",
    ],
    safety: [
    "Stop immediately if you feel jaw pain, clicking, locking, or headaches — forcing through pain risks real TMJ (jaw-joint) problems that are far harder to fix than they look.",
    "Keep sessions short at the start — minutes of chewing practice, not hours of gum. Overuse causes soreness and joint strain.",
    "If you already have jaw pain, an uneven bite, or a TMJ history, see a dentist first before doing any jaw work.",
    ],
    refs: [
      "Windhager S et al. Am J Hum Biol 2011 — facial adiposity perception studies.",
      "Kiliaridis S. Acta Odontol Scand 1995 — masticatory muscle function & craniofacial morphology.",
    ],
  },
  {
    id: "skin", title: "Skincare In 3 Steps (Not 13)", icon: "sparkles", category: "Looks",
    goals: ["looksmax"], minutes: 3,
    keywords: ["skincare routine", "cleanser", "moisturizer", "face care"],
    summary: "Cleanser, moisturizer, sunscreen. That's 90% of dermatology's anti-aging and clear-skin advice compressed into $30 and 3 minutes a day.",
    why: [
      "UV exposure is the single largest driver of visible facial aging (photoaging) — daily SPF is the highest-ROI 'looks' product in existence.",
      "A basic moisturizer maintains the skin barrier → fewer breakouts, less redness, better texture.",
      "Over-washing strips oils and causes rebound oiliness and irritation.",
    ],
    steps: [
      "Morning: rinse with water or gentle cleanser → moisturizer (SPF 30+ combined is fine).",
      "Night: gentle cleanser → moisturizer.",
      "Sunscreen: two finger-lengths for face + neck, reapply if outdoors for hours.",
      "Give any routine 6–8 weeks before judging. Skin cycles monthly.",
    ],
    mistakes: [
      "10-product influencer routines — cost, irritation, and zero added value for most people.",
      "Scrubbing acne. Inflammation spreads bacteria; gentle consistency wins.",
      "Skipping SPF because 'it's cloudy'. UVA penetrates clouds and windows.",
    ],
    progression: [
      "Level 1: cleanser + moisturizer + SPF daily for 8 weeks.",
      "Level 2 (optional): add 0.25–0.5% retinoid at night, 2x/week → build slowly. This is the one proven anti-aging topical.",
      "Level 3: dermatologist if acne persists — prescription options change lives.",
    ],
    refs: [
      "Flament F et al. Clin Cosmet Investig Dermatol 2013 — photoaging & UV.",
      "Zaenglein AL et al. J Am Acad Dermatol 2016 — acne care guidelines.",
    ],
  },
  {
    id: "hair", title: "Hair: Keep It, Frame It, Don't Fight It", icon: "scissors", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["haircare", "shampoo", "hairline", "thinning hair"],
    summary: "Your haircut should match your face shape and hairline reality. And if you're thinning: early finasteride/minoxidil (doctor) beats late cope.",
    why: [
      "Hair frames the face — a cut matched to your face shape (fade for round, texture for square, volume for narrow) measurably changes attractiveness ratings.",
      "Male pattern hair loss is DHT-driven and progressive; treatments work best BEFORE follicles miniaturize permanently.",
      "Heavy compound training and creatine do NOT meaningfully accelerate loss — stress and sleep matter more.",
    ],
    steps: [
      "Find your face shape (photo, outline it). Round → height on top + tight sides. Square → almost anything. Oval → keep proportions.",
      "Book a real barber every 3–4 weeks. Maintenance is the difference between sharp and shaggy.",
      "Noticing temple recession or crown thinning? See a dermatologist early — that's the entire game.",
      "Keep scalp clean; wash after sweaty sessions.",
    ],
    mistakes: [
      "Growing out thin spots to 'cover' them — magnification effect, opposite result.",
      "Harsh towel rubbing and scolding hot showers.",
      "Panic-buying supplements. Biotin helps only if deficient (rare).",
    ],
    progression: [
      "Step 1: correct cut for your shape.",
      "Step 2: derm consult if thinning — act in months, not years.",
      "Step 3: style product matte, not glossy, for density illusion.",
    ],
    refs: [
      "Kaufman KD et al. J Am Acad Dermatol 1998 — finasteride RCT data.",
      "Olsen EA et al. J Am Acad Dermatol 2002 — minoxidil 5% vs 2% trial.",
    ],
  },
  {
    id: "deficit", title: "Fat Loss = Small Deficit + High Protein + Patience", icon: "scale", category: "Fat Loss",
    goals: ["fatloss", "looksmax"], minutes: 3,
    keywords: ["calorie deficit", "weight loss", "cutting", "diet basics"],
    summary: "A 300–500 kcal daily deficit loses ~0.5 kg/week while keeping muscle and sanity. Crash diets burn your face's collagen and your willpower simultaneously.",
    why: [
      "1 kg of fat ≈ 7,700 kcal. A 500 kcal/day deficit ≈ 0.5 kg/week — fast enough to see, slow enough to keep muscle.",
      "Aggressive deficits (>25%) increase lean-mass loss even with training and protein.",
      "Diet breaks and adherence beat metabolic minutiae — the best deficit is the one you can hold for 12 weeks.",
    ],
    steps: [
      "Estimate maintenance (bodyweight kg × 30–33 kcal for moderately active). Subtract 400.",
      "Keep protein at 1.8–2.2 g/kg — non-negotiable while cutting.",
      "Keep training hard. Training is the signal that says 'burn the fat, keep the muscle.'",
      "Weigh 3–4×/week in the morning, judge the weekly average — daily noise will gaslight you.",
    ],
    mistakes: [
      "Weekday saint, weekend binge — 2 days can erase a 5-day deficit.",
      "Drinking calories (juice, lattes, alcohol). Liquid calories don't satiate.",
      "Cutting faster than 1% bodyweight/week unless very high body fat.",
    ],
    progression: [
      "Weeks 1–2: hold deficit, expect water-weight whoosh then steady loss.",
      "After 6–8 weeks: 1–2 week diet break at maintenance if stalling psychologically.",
      "Within 2 kg of goal: switch to recomposition (maintenance + training hard).",
    ],
    refs: [
      "Hall KD et al. Lancet 2011 — energy balance & weight change dynamics.",
      "Helms ER et al. J Int Soc Sports Nutr 2014 — natural bodybuilding cutting recommendations.",
    ],
  },
  {
    id: "creatine", title: "Creatine Monohydrate: The One Legal Cheat Code", icon: "pill", category: "Supplements",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["creatine monohydrate", "strength", "muscle", "supplement"],
    summary: "5 g daily, any time, forever. The most studied supplement in sports science: +5–15% strength and power output, slight lean-mass gain, near-zero downside.",
    why: [
      "Creatine saturates muscle phosphocreatine stores → more ATP for high-intensity sets → more reps → more growth stimulus.",
      "500+ studies, topical meta-analyses consistently show strength and lean mass benefits.",
      "No, it doesn't meaningfully accelerate hair loss (evidence is one weak, unreplicated signal).",
    ],
    steps: [
      "Buy plain creatine monohydrate (Creapure or any tested brand). It's cheap — don't overthink it.",
      "Take 5 g daily with any meal. Loading phases are optional, not required.",
      "Drink normal-plus water. Expect +1–2 kg scale weight in weeks 1–3 (water inside muscle — a good sign).",
    ],
    mistakes: [
      "Cycling on/off — no evidence supports cycling; saturation is the point.",
      "Fancy variants (HCL, ethyl ester, kre-alkalyn) at 5× the price. Monohydrate wins.",
      "Skipping days constantly — consistency maintains saturation.",
    ],
    progression: [
      "Day 1: start 5 g/day.",
      "Week 4: most users notice stronger final reps.",
      "Ongoing: just keep taking it. This one's simple.",
    ],
    safety: [
    "Stick to 3–5g of creatine monohydrate daily — taking more does not work better and just wastes money.",
    "Drink plenty of water through the day. Creatine pulls water into your muscles, so dehydration headaches are the most common side effect.",
    "A sudden 1–2 kg gain on the scale in the first weeks is normal — it is water inside your muscles, not fat.",
    "If you have kidney, liver, or heart disease, or take regular medications, ask your doctor before starting. In healthy people, decades of research show no harm at standard doses.",
    "Buy only third-party tested brands (see the supplement testing protocol) — cheap untested powders are the real risk.",
    ],
    refs: [
      "Kreider RB et al. JISSN 2017 — ISSN position stand on creatine.",
      "Branch JD. Int J Sport Nutr Exerc Metab 2003 — meta-analysis of body composition effects.",
    ],
  },
  {
    id: "wings", title: "Wide Shoulders Are The Cheat Code (V-Taper)", icon: "triangle", category: "Looks",
    goals: ["looksmax", "muscle"], minutes: 2,
    keywords: ["shoulders", "deltoids", "V-taper", "wide frame"],
    summary: "The shoulder-to-waist ratio drives 'that physique shape' more than chest or arm size. Lateral delts + lats + low waist = the silhouette. Train accordingly.",
    why: [
      "Cross-cultural attractiveness research shows shoulder-to-waist ratio (~1.4–1.6) strongly predicts male bodily attractiveness ratings.",
      "Side delts are mostly slow-recovery, high-tolerance muscle — they respond to frequent moderate volume.",
      "A lean waist completes the illusion: the taper is a ratio, and you control both numbers.",
    ],
    steps: [
      "Lateral raises 3–4×/week, 10–20 reps, pain-free range, strict tempo.",
      "Pull-ups for lat width — full stretch, drive elbows to hips.",
      "Keep waist lean via the fat-loss protocol. No taper exists at high body fat.",
      "Posture work (Y-T-W) visibly opens the chest and widens the stance of the shoulders.",
    ],
    mistakes: [
      "Swinging lateral raises with heavy weight — front delt and traps steal everything.",
      "Ignoring legs — an upper-body-only physique reads worse than a balanced one.",
      "Overdeveloped front delts from pressing-only programs (rounded-forward look).",
    ],
    progression: [
      "Month 1: master 15-rep strict laterals.",
      "Month 2: add a second weekly shoulder session (pike push-ups cover this here).",
      "Ongoing: measure waist + shoulders every 4 weeks. Watch the ratio move.",
    ],
    refs: [
      "Fan et al. Proc R Soc B 2005 — waist-to-shoulder ratio & attractiveness.",
      "Schoenfeld BJ et al. Sports Med 2019 — volume/hypertrophy dose-response.",
    ],
  },
  {
    id: "recovery", title: "Train Hard, Recover Harder", icon: "battery-charging", category: "Recovery",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["recovery", "rest days", "adaptation", "growth"],
    summary: "You don't grow from training — you grow from recovering from training. Minimum effective dose + maximum effective recovery beats daily destruction.",
    why: [
      "Muscle protein synthesis stays elevated ~24–48h post-session. Training a muscle hard again before it recovers adds fatigue, not growth.",
      "Rest days aren't weakness; supercompensation happens during them.",
      "Chronic under-recovery shows up as flat mood, dropping numbers, and elevated resting heart rate before it shows up as injury.",
    ],
    steps: [
      "3–5 training days weekly beats 7. Design every session to be repeatable — done right, you leave the gym able to train tomorrow.",
      "Sleep + protein + steps on rest days. Rest ≠ couch rot.",
      "Weekly check: resting HR up 5–8 bpm for 3+ days + motivation gone? Take 2 full days off.",
      "Every 6–8 weeks of hard progress, take a lighter week (halve your sets). You'll come back stronger.",
    ],
    mistakes: [
      "Ego-training through joint pain. Muscle pumps; tendons complain slowly then snap fast.",
      "Confusing 'I'm not sore' with 'I'm not recovered' — soreness isn't the metric.",
      "Adding more work when progress stalls, instead of checking sleep and food first.",
    ],
    progression: [
      "Learn your minimum effective volume — more is not better, better is better.",
      "Schedule deloads before you need them.",
      "Track morning energy + resting heart rate as recovery gauges.",
    ],
    refs: [
      "Kellmann M et al. Front Physiol 2018 — recovery & overtraining review.",
      "ACSM position stand: progression & recovery (2009).",
    ],
  },
  {
    id: "warmup", title: "The 3-Minute Warm-Up That Prevents 3-Month Injuries", icon: "gauge", category: "Form",
    goals: ["muscle", "fitness", "strength"], minutes: 1,
    keywords: ["warm-up", "injury prevention", "mobility prep"],
    summary: "Cold tissue tears; warm tissue performs. Three minutes of ramping beats a foam-roller dissertation — and saves you from the injury that erases months of progress.",
    why: [
      "Dynamic warm-ups improve force output ~2–5% and reduce soft-tissue strain risk.",
      "Specificity matters most: rehearse the actual movement easier before doing it hard.",
      "Static long-hold stretching before strength work temporarily reduces power — save it for after.",
    ],
    steps: [
      "60s: get temperature up — jumping jacks, brisk march in place, arm circles.",
      "60s: mobilize today's joints — shoulder rolls + hip circles for upper/lower days.",
      "60s: rehearsal sets — half your first exercise's reps at easy difficulty (incline push-ups before real ones).",
      "Then attack the working sets.",
    ],
    mistakes: [
      "Zero-to-max on the first set of the day. That's how 25-year-olds get 40-year-old shoulders.",
      "10-minute static-stretch ceremonies before training.",
      "Skipping the rehearsal set because bodyweight 'doesn't count.' It counts.",
    ],
    progression: [
      "Make the 3 minutes automatic — same ritual every session.",
      "As loads/variations get harder, add a second rehearsal set.",
      "Short on time? Cut the main workout, never the warm-up.",
    ],
    refs: [
      "Fradkin AJ et al. J Strength Cond Res 2010 — warm-up & performance meta-analysis.",
      "McCrary JM et al. Scand J Med Sci Sports 2015 — pre-exercise stretching review.",
    ],
  },
  {
    id: "eyes", title: "De-Puff & Wake Up Your Face (Mornings)", icon: "eye", category: "Looks",
    goals: ["looksmax"], minutes: 2,
    keywords: ["eye bags", "dark circles", "puffiness", "tired eyes"],
    summary: "Periorbital puffiness and a foggy face are mostly sleep, salt, alcohol, and congestion — fixable levers, not genetics. Run the morning protocol.",
    why: [
      "Fluid pools in the thin under-eye tissue overnight, especially with high-sodium dinners, alcohol, or sleeping flat.",
      "Allergies/nasal congestion dilate facial veins (allergic 'shiners') — treating congestion visibly brightens the eye area.",
      "Sun damage thins periorbital skin making vessels more visible — SPF again.",
    ],
    steps: [
      "Sleep 7–9h with your head slightly elevated (extra pillow).",
      "Evening: cut the salty late-night snacks; alcohol close to bed = guaranteed puff.",
      "Morning: 30 seconds cold water on face, gentle outward eye massage, hydrate.",
      "If you wake congested: address allergies (wash bedding hot weekly, consider antihistamine/steroid spray talk with a doctor).",
    ],
    mistakes: [
      "Jade rollers and cucumber theater — pleasant, marginal, not the foundation.",
      "Rubbing eyes hard — breaks capillaries and loosens the thinnest skin on your body.",
      "Ignoring allergies — chronic rubbing/congestion do more damage than any cream fixes.",
    ],
    progression: [
      "Week 1: fix sleep + late salt/alcohol.",
      "Week 2: add head elevation + cold water routine.",
      "Ongoing: morning face photo log — spot your personal puff triggers within a month.",
    ],
    refs: [
      "Sundelin T et al. R Soc Open Sci 2013 — sleep-deprivation cues: eye redness, swelling & hanging eyelids.",
      "American Academy of Allergy/AAAAI patient guidance on allergic rhinitis & 'shiners'.",
    ],
  },
  {
    id: "grip-neck", title: "Neck Training: The Ignored 5% That Changes Photos", icon: "anchor", category: "Looks",
    goals: ["looksmax", "strength"], minutes: 2,
    keywords: ["neck size", "grip strength", "forearms", "thick neck"],
    summary: "A thick neck signals athleticism even in a t-shirt and frames the jaw. Direct neck work 2–3×/week is safe when loaded progressively — and it repays the effort faster than almost any other muscle.",
    why: [
      "Combat and collision sports use direct neck training routinely — it measurably increases neck circumference (+2–4 cm typical over months) and reduces injury risk.",
      "The trapezius/neck complex is visible in every photo and every shirt.",
      "Posture gains come free — the deep flexors you train with neck curls are the anti-forward-head muscles.",
    ],
    steps: [
      "Neck curls: lie head-off-bench, chin-to-chest, strict 2s up, 2s down. Start with hands assisting as needed.",
      "Neck extensions: same setup face-down, extend to horizontal.",
      "Keep reps in the 10–25 range, slower tempo, zero jerking.",
      "2–3 sessions weekly. Your other training covers shrugs/indirect load.",
    ],
    mistakes: [
      "Loading with plates on the forehead from day one. Bodyweight-only for weeks.",
      "Fast, bouncy reps on the most delicate chain in the body.",
      "Skipping the back of the neck — extension work balances the front.",
    ],
    progression: [
      "Phase 1: bodyweight curls + extensions — start light, 2–3 sets each.",
      "Phase 2: add a light plate (towel on forehead) once 25 strict bodyweight reps are easy.",
      "Measure track: soft tape around neck monthly — 0.5 cm changes are noticeable.",
    ],
    safety: [
    "The neck is trained light, slow, and controlled — heavy loads on the cervical spine are how people get hurt. Bodyweight and light bands first.",
    "Never do weighted neck bridges or bouncy movements at home without coaching.",
    "Any sharp pain, numbness, or tingling in the arms or hands means stop immediately and get checked.",
    "If you have had a neck injury or whiplash, get a physio's sign-off before training it.",
    ],
    refs: [
      "Hrysomallis C. Sports Med 2016 — neck strength & injury reduction.",
      "NSCA guidance on cervical strengthening for athletes.",
    ],
  },
  {
    id: "track", title: "Measure Everything (Weekly, Not Daily)", icon: "notebook-pen", category: "Mindset",
    goals: ["muscle", "fatloss", "looksmax", "fitness", "strength"], minutes: 2,
    keywords: ["tracking progress", "measurements", "weekly weigh-in", "body data"],
    summary: "What gets measured gets managed. Weight, waist, progress photos, and a simple training log — captured weekly, judged monthly.",
    why: [
      "Self-monitoring is one of the strongest predictors of weight-loss and training success across behavioral studies.",
      "Daily scale readings fluctuate ±1–2 kg with water/sodium/gut content — weekly averages reveal the truth.",
      "Photos catch changes numbers miss: posture, taper scheme, face definition.",
    ],
    steps: [
      "Pick one morning weekly: weight, waist at navel, front/side photos in the same light/pose.",
      "Log it somewhere fixed (notes app is fine). No obsessing, just data.",
      "Judge every 4 weeks, not 4 days. Trend is the signal.",
      "Keep a training log (notebook or app) — sets, reps, and load tell the effort story.",
    ],
    mistakes: [
      "Weighing at random times in random states (post-meal, post-drink).",
      "Changing the plan off 3 days of data. Collect dots; connect them monthly.",
      "Tracking 15 metrics and drowning. Four numbers are enough.",
    ],
    progression: [
      "Week 1: establish your baseline capture ritual.",
      "Week 4: first monthly review — adjust calories/targets if trend disagrees with goal.",
      "Thereafter: review monthly, compare every 12 weeks.",
    ],
    refs: [
      "Michie S et al. Health Psychol Rev 2009 — self-monitoring & behavior change.",
      "Steinberg DM et al. Obesity 2015 — daily-weighing RCT (WISE study).",
    ],
  },
  {
    id: "sunlight", title: "Morning Light: Free Hormone & Sleep Lever", icon: "sun", category: "Recovery",
    goals: ["fitness", "looksmax", "fatloss"], minutes: 1,
    keywords: ["morning light", "circadian rhythm", "sunrise", "hormones"],
    summary: "Ten minutes of outdoor light within an hour of waking anchors your circadian clock — deeper sleep at night, steadier energy, better skin via better sleep.",
    why: [
      "Morning photons hitting the retina set the suprachiasmatic clock → properly timed cortisol peak and melatonin release ~14–16h later.",
      "Circadian misalignment is linked to worse metabolic health, appetite dysregulation, and mood.",
      "It's zero cost, zero risk (morning UV index is low), and takes one walk.",
    ],
    steps: [
      "Within 60 minutes of waking: get outside 5–15 minutes. Cloudy = go longer, windows don't count (glass filters the signal).",
      "Don't stare at the sun; just be outside, ideally moving (stacks with your steps).",
      "Evening mirror image: dim lights the last 60 minutes.",
    ],
    mistakes: [
      "Sunglasses during your morning light walk — defeats the purpose.",
      "Bright overhead light at 11 PM then wondering why sleep is shallow.",
      "Skipping it on overcast days — outdoor lux even in clouds crushes indoor lighting.",
    ],
    progression: [
      "Stack it onto morning steps — two levers, one walk.",
      "Keep timing consistent ±30 minutes daily.",
      "Judge success by falling-asleep speed 2 weeks in.",
    ],
    refs: [
      "Czeisler CA et al. Science 1986 — human circadian light response.",
      "Blume C et al. Somnologie 2019 — light & sleep review.",
    ],
  },
];

const ALL_GOALS: Goal[] = ["muscle", "fatloss", "strength", "looksmax", "fitness"];
export function tipsForGoals(goals: Goal[]): Tip[] {
  const selected = goals.length ? goals : ALL_GOALS;
  return TIPS.filter((t) => t.goals.some((g) => selected.includes(g)));
}

export const TIPS: Tip[] = [
  ...CORE_TIPS,
  ...NUTRITION_TIPS,
  ...TRAINING_TIPS,
  ...FATLOSS_TIPS,
  ...CARDIO_TIPS,
  ...RECOVERY_TIPS,
  ...SLEEP_TIPS,
  ...LOOKS_TIPS,
  ...FORM_TIPS,
  ...POSTURE_TIPS,
  ...SUPPLEMENT_TIPS,
  ...MINDSET_TIPS,
];

const CATEGORY_ORDER = [
  "Nutrition", "Training", "Fat Loss", "Cardio", "Recovery", "Sleep",
  "Form", "Posture", "Looks", "Supplements", "Mindset",
];
export const TIP_CATEGORIES = CATEGORY_ORDER.filter((c) => TIPS.some((t) => t.category === c));
