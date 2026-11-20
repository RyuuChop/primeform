// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Recovery & Sleep Protocols (18)
// ─────────────────────────────────────────────────────────────
import type { Tip } from "./types";

export const RECOVERY_TIPS: Tip[] = [
  {
    id: "supercompensation", title: "Stress + Rest = Growth. Cut Either Half And It's Just Soreness", icon: "refresh-cw", category: "Recovery",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["stress and rest", "adaptation", "recovery balance", "training cycle"],
    summary: "Training is the stimulus; adaptation happens between sessions — during sleep, food, and easy days. The rhythm of stress and recovery is the entire game: skip the rest half and you're not 'extra dedicated', you're just interrupting the build.",
    why: [
      "The workload-fatigue model shows fitness accrues when training stress is followed by recovery — chronic overload without recovery produces staleness and injury risk.",
      "Periodization research treats planned recovery phases as core programming, not optional softness.",
      "Muscle protein synthesis after a session runs 24–48h+ — the growth you want literally cannot complete inside the gym hour.",
    ],
    steps: [
      "Schedule rest days like sessions: at least 1–2 per week where training is genuinely easy (walks count, HIIT doesn't).",
      "Protect the big three recovery inputs: 7–9h sleep, protein target, and a calorie intake that matches your goal.",
      "Use easy days actively: walks, mobility, light swimming — blood flow without load (see the active-recovery protocol).",
      "Track readiness simply: morning pulse, sleep quality, motivation, aches. Two down for 3+ days = back off.",
    ],
    mistakes: [
      "Filling rest days with 'just a quick' HIIT — that's six training days wearing a disguise.",
      "Reading fatigue as weakness of character instead of information about load.",
      "Recovering perfectly between sessions, then never deloading across months — fatigue compounds slowly and silently (see the deload protocol).",
    ],
    progression: [
      "Week 1: pencil rest days into the calendar and defend them.",
      "Ongoing: adjust the training/rest ratio by how the log trends, not by guilt.",
      "Every 6–8 weeks: deload week (see deload protocol).",
    ],
    refs: [
      "Gabbett TJ. Br J Sports Med 2016 — training-injury prevention paradox: workload.",
      "Lorenz DS et al. Sports Health 2015 — periodization: current review.",
    ],
  },
  {
    id: "doms-care", title: "Treat DOMS With Movement — Not Stretching", icon: "flame", category: "Recovery",
    goals: ["muscle", "fitness", "strength"], minutes: 2,
    keywords: ["sore muscles", "DOMS relief", "recovery from soreness", "movement"],
    summary: "Stretching before or after training barely touches next-day soreness — the Cochrane review is blunt about it. What actually helps: light movement of the sore muscles, sleep, and time. Soreness is not damage to fear or a badge to chase (see the DOMS-myth protocol).",
    why: [
      "The Cochrane systematic review found stretching produces negligible reduction in muscle soreness — pre- and post-exercise.",
      "Recovery-technique meta-analyses show active recovery and massage outperform stretching for reducing soreness perception.",
      "Light activity increases blood flow and temporarily relieves the stiffness — the 'walk it off' folklore survives because it works.",
    ],
    steps: [
      "Sore day protocol: 10–20 minutes easy movement using the sore muscles (walk, easy spin, light sets at 30–40%).",
      "Keep protein and sleep at target — repair needs substrate and time (see supercompensation protocol).",
      "Train the sore muscle if the soreness is mild (you can move normally) — reduced load for a day or two is fine.",
      "Sharp pain, heavy dark urine, or swelling after extreme unaccustomed work = medical attention, not a rest day (rhabdomyolysis is rare but real).",
    ],
    mistakes: [
      "Long static stretching sessions to 'flush' the soreness — the data say otherwise; you're stretching irritated tissue.",
      "Painkiller habit for soreness — some evidence anti-inflammatories blunt adaptation; save them for real need.",
      "Skipping days because of DOMS — mild soreness trains fine at reduced load; total rest prolongs the cycle.",
    ],
    progression: [
      "First sore episode: walk + normal eating, note the 48h arc it follows.",
      "Ongoing: soreness fading with training consistency = expected; treat it as calibration data.",
      "Novel exercise introduced? Schedule the sore window before your key sessions.",
    ],
    refs: [
      "Herbert RD et al. Cochrane Database Syst Rev 2011 — stretching to prevent/reduce muscle soreness.",
      "Dupuy O et al. Front Physiol 2018 — recovery techniques meta-analysis.",
    ],
  },
  {
    id: "foam-roll", title: "Foam Rolling: Real But Modest — Use It Right", icon: "waves", category: "Recovery",
    goals: ["fitness", "muscle", "strength"], minutes: 2,
    keywords: ["foam rolling", "mobility", "tight muscles", "self massage"],
    summary: "Foam rolling doesn't 'release fascia' or fix posture, but trials do show it reduces soreness perception and briefly improves range of motion without performance loss. Treat it as a warm-up tool and a comfort tool — not therapy.",
    why: [
      "Meta-analyses show foam rolling reduces delayed-onset muscle soreness perception and slightly improves ROM in the short term.",
      "Effects on actual performance are small to neutral — rolling doesn't replace warming up; it complements it.",
      "The mechanism is likely nervous-system (pain gating, stretch tolerance), which is why the effects are real but temporary.",
    ],
    steps: [
      "Before training: 30–60s per muscle group as part of the warm-up ramp (see ramp-sets protocol), then dynamic work.",
      "After training or on sore days: 1–2 minutes per sore area at a tolerable pressure — 'hurt so good', not white pain.",
      "Slow passes: ~3cm/second; pause on tender spots briefly, breathe.",
      "Budget honestly: 5 minutes rolling, then train. It's not a session.",
    ],
    mistakes: [
      "Thirty-minute rolling sessions as a substitute for actual warm-up or mobility work.",
      "Rolling directly on injuries, joints, or the lower back — bones and nerves don't appreciate it.",
      "Believing it 'breaks up scar tissue' — the physics don't support it; the nervous system is the story.",
    ],
    progression: [
      "Week 1: add 5-min rolling to warm-ups; note perceived stiffness before/after.",
      "Ongoing: keep it as a 5-min tool; drop it guilt-free when time is tight — it's a garnish, not the meal.",
      "Persistent painful spots that never release: that's an assessment question for a professional, not more rolling.",
    ],
    refs: [
      "Cheatham SW et al. J Athl Train 2015 — foam rolling: effects on performance & ROM meta-analysis.",
      "Wiewelhove T et al. Sports Med 2019 — foam rolling for performance & recovery meta-analysis.",
    ],
  },
  {
    id: "sauna", title: "Sauna 2–4x Weekly — The Best-Supported Heat Habit", icon: "flame-kindling", category: "Recovery",
    goals: ["fitness", "looksmax"], minutes: 2,
    keywords: ["sauna", "heat therapy", "cardiovascular", "post workout heat"],
    summary: "Regular sauna use shows some of the best observational data of any recovery ritual: large Finnish cohorts link frequent sessions to lower cardiovascular and all-cause mortality. 15–20 minutes at ~80°C, 2–4 times weekly. Post-training or separate days — hydrate and don't treat records as the goal.",
    why: [
      "The Kuopio Ischaemic Heart Disease cohort found men using sauna 4–7×/week had substantially lower fatal cardiovascular and all-cause mortality versus 1×/week.",
      "Sauna acutely lowers blood pressure and improves vascular function similar in direction to moderate exercise.",
      "Post-exercise sauna may extend plasma volume and heat tolerance — plausibly useful for endurance work.",
    ],
    steps: [
      "Start with 10–15 min at 70–80°C, build toward 15–20 min, 2–4 sessions weekly.",
      "Post-lifting or on off days both work; leave 20–30 min after hard sessions if the heat feels draining.",
      "Hydrate before and after; replace sodium on heavy-sweat days.",
      "Finish cool (shower), not drenched. Consistency across weeks is what the data reward.",
    ],
    mistakes: [
      "Alcohol + sauna — the Finnish cohort data specifically flag this combo.",
      "Treating it as competition — longer isn't better if you're dizzy; fainting in a hot room is a medical event.",
      "Sauna as a weight-loss tool — the loss is water; it returns with the first glass.",
    ],
    progression: [
      "Weeks 1–2: 2 × 10 min, learn your tolerance.",
      "Weeks 3–8: 3–4 × 15 min.",
      "Ongoing: 2–4 weekly as a standing ritual; skip when ill or severely dehydrated.",
    ],
    safety: [
    "Hydrate before and after. Never combine alcohol with sauna — blood-pressure crashes and heart-rhythm problems in the heat are a real, documented danger.",
    "Keep sessions to 15–20 minutes to start. Leave immediately if you feel dizzy, nauseated, or unwell, and cool down gradually.",
    "If you have a heart condition, very low or high blood pressure, or are pregnant, get your doctor's guidance on duration and temperature first.",
    "Never sauna while drunk or alone when unwell — fainting in a hot room is an emergency, not a nap.",
    ],
    refs: [
      "Laukkanen T et al. JAMA Intern Med 2015 — sauna bathing & fatal cardiovascular disease/all-cause mortality.",
      "Kunutsor SK et al. Neurology 2018 — sauna bathing & reduced stroke risk.",
    ],
  },
  {
    id: "cold-immersion", title: "Cold Plunges: Real Effects, Right Timing", icon: "snowflake", category: "Recovery",
    goals: ["fitness", "looksmax"], minutes: 3,
    keywords: ["ice bath", "cold plunge", "cold shower", "cold water"],
    summary: "Cold water immersion (5–15°C, 2–5 min) reliably reduces soreness and leaves you alert — but taken immediately after lifting, it can blunt strength and muscle gains. Time it: after endurance days, on rest days, or 4–6+ hours after lifting. Morning plunges are fine on non-lifting days.",
    why: [
      "Trials show cold water immersion immediately post-resistance-training attenuates muscle and strength gains (Roberts) — vasoconstriction and reduced inflammatory signaling cut both ways.",
      "Reviews confirm acute benefits: reduced soreness perception, faster subjective recovery, transient increases in alertness and catecholamines.",
      "The 'immune and metabolism transformation' claims from social media outrun the data — the honest case is recovery comfort and alertness, with timing discipline for lifters.",
    ],
    steps: [
      "Lifters: plunge on rest days or after easy/cardio sessions; if you must plunge post-lifting, wait 4–6 hours.",
      "Protocol: 10–15°C water, 2–5 minutes, submerged to the neck. Shivering is fine; numbness and pain are not.",
      "Morning plunge on rest days doubles as the alertness ritual — cold shower works at lower strength.",
      "Never plunge alone in open water, and never with uncontrolled breathing issues or heart conditions without medical advice.",
    ],
    mistakes: [
      "Daily post-lift plunges during a muscle-building phase — you're paying gains for soreness relief.",
      "Ice baths 'for the discipline' at 4°C for 10 minutes — more is not better; the dose is minutes, not torture.",
      "Plunging before training — the numbed, stiff muscles won't produce quality work.",
    ],
    progression: [
      "Weeks 1–2: end showers 30–60s cold, build tolerance.",
      "Weeks 3–8: 2–3 × 2–3 min at 12–15°C, rest-day or evening timing.",
      "Ongoing: keep it 2–3× weekly around training, never daily post-lift in a growth phase.",
    ],
    safety: [
    "Cold shock is real and fast: gasping, panic, and a heart-rate spike hit in the first seconds. Never plunge alone, always have someone nearby, and enter gradually while controlling your breathing.",
    "1–3 minutes is the useful range. Longer is not stronger — beyond that you are losing heat, not gaining benefit, and hypothermia risk climbs.",
    "If you have a heart condition, high blood pressure, or Raynaud's disease, or are pregnant, talk to a doctor first — cold water spikes heart rate and blood pressure hard.",
    "Warm up afterwards with movement and dry clothes — not an immediate hot shower, which can drop blood pressure suddenly.",
    "In open water, know the depth, currents, and your exit before you get in. Ice baths: use a thermometer, not guesswork.",
    ],
    refs: [
      "Roberts LA et al. J Physiol 2015 — cold water immersion attenuates hypertrophy/strength adaptations.",
      "Fyfe JJ et al. J Appl Physiol 2019 — post-exercise cold water immersion & training adaptations.",
    ],
  },
  {
    id: "active-recovery", title: "Easy Days: The Underrated Accelerator", icon: "leaf", category: "Recovery",
    goals: ["fitness", "muscle", "fatloss"], minutes: 2,
    keywords: ["rest days", "easy movement", "recovery day", "light activity"],
    summary: "A genuinely easy day — 20–40 minute walk, easy cycling, mobility flow — outperforms both couch-lock and accidental workouts. It moves blood, loosens stiff tissue, and adds NEAT without adding recovery debt. The hard part is keeping it genuinely easy.",
    why: [
      "Recovery meta-analyses find active recovery reduces soreness perception versus passive rest — movement is medicine here.",
      "Easy movement maintains the NEAT floor that protects both fat loss and metabolic health (see the neat-cut protocol).",
      "Low-intensity movement supports glycogen repletion and doesn't interfere with adaptation the way hard cardio can (see the concurrent protocol).",
    ],
    steps: [
      "Pick 1–2 easy-day formats you actually enjoy: morning walk route, easy bike, swim, long stretching session with a podcast.",
      "Cap intensity: nose breathing, full sentences (talk test), zero sets to failure.",
      "30–45 minutes is plenty; longer is fine if it's truly easy.",
      "Put easy days after your hardest sessions — the calendar does the programming.",
    ],
    mistakes: [
      "Easy day becoming 'moderate day' within 10 minutes — ego sneaks in through pace.",
      "Zero-movement rest days every week — stiffness and mood dip; movement helps.",
      "Filling rest days with chores-level exhaustion and calling it recovery — psychological rest counts too.",
    ],
    progression: [
      "Week 1: one protected easy day weekly.",
      "Weeks 2+: scale to 2 easy days if sessions are hard.",
      "Ongoing: keep a standing easy-day route — decisions kill easy days.",
    ],
    refs: [
      "Dupuy O et al. Front Physiol 2018 — recovery techniques meta-analysis.",
      "Seiler S. Scand J Med Sci Sports 2010 — intensity distribution & recovery balance.",
    ],
  },
  {
    id: "otw-signs", title: "Know The Overtraining Red Flags", icon: "alert-triangle", category: "Recovery",
    goals: ["strength", "muscle", "fitness"], minutes: 2,
    keywords: ["overtraining", "burnout", "fatigue signs", "warning flags"],
    summary: "Overreaching is common; true overtraining syndrome is rare but ruins months. The skill is reading early signals: performance falling for 2+ weeks despite eating and sleeping adequately, resting pulse drifting up, mood and sleep degrading. Answer: rest and food, not more willpower.",
    why: [
      "The joint ECSS/ACSM consensus distinguishes functional overreaching (recoverable in days–weeks) from overtraining syndrome (months) — the response to early signs determines which you get.",
      "Workload science shows performance decline under accumulating load is data, not weakness — the fix is planned recovery.",
      "Mood-state deterioration reliably precedes performance collapse — it's the earliest cheap instrument you own.",
    ],
    steps: [
      "Watch four gauges weekly: key-lift performance, resting morning pulse, sleep quality, and training motivation.",
      "2+ gauges down for 2 weeks with adequate food/sleep → take a deload or 3–4 easy days immediately.",
      "During suspected overreaching: cut volume 50% for a week, keep protein high, sleep 8h+. Retest after.",
      "Symptoms persisting weeks after real rest (fatigue, low mood, disrupted sleep) = see a doctor; exclude illness, anemia, thyroid, depression.",
    ],
    mistakes: [
      "Answering falling performance with more volume — the defining mistake of the condition.",
      "Blaming 'lack of discipline' for physiological signals — discipline includes backing off.",
      "Self-diagnosing overtraining from one bad week — that's usually life stress and sleep debt (see the stress-bucket protocol).",
    ],
    progression: [
      "Week 1: set up your four-gauge weekly check (5 minutes).",
      "Ongoing: act on 2-week signals; log what you did and how you responded.",
      "Recovery from a real overreach: return at 80% volume, rebuild over 2 weeks.",
    ],
    refs: [
      "Meeusen R et al. Eur J Sport Sci 2013 — prevention, diagnosis & treatment of the overtraining syndrome (ECSS/ACSM joint consensus).",
      "Gabbett TJ. Br J Sports Med 2016 — training-injury prevention paradox.",
    ],
  },
  {
    id: "stress-bucket", title: "Life Stress Borrows From Recovery — Budget It", icon: "battery-charging", category: "Recovery",
    goals: ["fitness", "muscle", "strength", "fatloss"], minutes: 2,
    keywords: ["life stress", "recovery budget", "burnout", "mental load"],
    summary: "Your body doesn't separate 'work stress' from 'squat stress' — recovery capacity is one budget. Deadline weeks, relationship strain, and poor sleep all draw from it. Training hard through every storm is how plateaus get made; scaling load to the stress budget is how they get avoided.",
    why: [
      "Research on stress and recovery shows high life-stress individuals respond to training with more fatigue, injuries, and illness — the stress response is systemic.",
      "Perceived stress interacts with training load in predicting injury and illness in athletes — the bucket genuinely overflows.",
      "Sleep restriction and stress together amplify cortisol and reduce training tolerance — two levers, one budget.",
    ],
    steps: [
      "Rate life stress weekly (1–5). High-stress weeks: cut training volume 20–30%, keep intensity on the main lifts, never add new programs.",
      "Protect sleep first — it's the recovery multiplier (see the sleep protocols).",
      "Install one daily decompression slot: walk, breathing, journaling (see the journaling protocol) — 10 minutes counts.",
      "During genuinely brutal weeks: maintenance mode — 2 short full-body sessions, daily walks, sleep. That IS the program for now.",
    ],
    mistakes: [
      "Treating training as the stress-relief to pile onto unlimited stress — moderate training relieves stress; excessive training adds to it.",
      "Skipping training entirely during stress (the opposite error) — reduced training is protective; zero training removes the anchor.",
      "Using stimulants to override fatigue — the debt gets paid with interest.",
    ],
    progression: [
      "Week 1: start the weekly 1–5 stress rating next to your training log.",
      "Ongoing: match the week's plan to the rating — this one habit prevents most burnout spirals.",
      "After high-stress phases: deload week, then rebuild (see the deload protocol).",
    ],
    refs: [
      "Stults-Kolehmainen MA, Sinha R. Front Psychol 2014 — effects of stress on physical activity & recovery.",
      "Meeusen R et al. Eur J Sport Sci 2013 — overtraining consensus: stress as systemic load.",
    ],
  },
];

export const SLEEP_TIPS: Tip[] = [
  {
    id: "sleep-regularity", title: "Same Sleep Window Daily — Regularity Beats Duration", icon: "calendar-check-2", category: "Sleep",
    goals: ["fitness", "looksmax", "muscle", "fatloss"], minutes: 2,
    keywords: ["sleep schedule", "consistent bedtime", "wake time", "circadian"],
    summary: "New large-cohort data suggest sleep regularity — going to bed and waking at consistent times — predicts health outcomes even more strongly than total duration. Anchor your wake time 7 days a week and a consistent bed window follows. Same time, even weekends. That's the whole protocol.",
    why: [
      "A 2024 analysis of ~60,000 people found sleep regularity predicted mortality risk more strongly than sleep duration in their models.",
      "Circadian science shows irregular timing desynchronizes internal clocks — 'social jet lag' degrades metabolic and mood markers like travel would.",
      "Consistent timing strengthens the melatonin and cortisol rhythms that make falling asleep and waking automatic.",
    ],
    steps: [
      "Fix your wake time first — it's the anchor the body clock obeys, weekends included (±30 min).",
      "Set a bedtime alarm 8 hours before wake time — an alarm for bed, not just for waking.",
      "Build the last hour into the same shape nightly (see the wind-down protocol) — routine is the on-ramp.",
      "After bad nights: no sleeping in past +1 hour. Recover with an earlier bedtime, not a late morning.",
    ],
    mistakes: [
      "Weekend 3-hour shifts — Monday feels like jet lag because physiologically it is.",
      "Chasing 8 hours at random times — duration without timing still desynchronizes the clock.",
      "Long afternoon naps breaking the pressure for bedtime (see the naps protocol).",
    ],
    progression: [
      "Week 1: fixed wake time, 7/7 days.",
      "Week 2: fixed bed window (±30 min), 7/7.",
      "Ongoing: 30-day consistency streak — this single protocol moves most people's sleep quality.",
    ],
    refs: [
      "Windred DP et al. SLEEP 2024 — sleep regularity vs duration as mortality predictor.",
      "Watson NF et al. Sleep 2015 — AASM/SRS consensus: 7+ hours for adults.",
    ],
  },
  {
    id: "caffeine-cutoff", title: "Caffeine Has A Curfew: 8–10 Hours Before Bed", icon: "coffee", category: "Sleep",
    goals: ["fitness", "looksmax", "muscle"], minutes: 2,
    keywords: ["caffeine", "coffee", "sleep quality", "curfew"],
    summary: "Caffeine's half-life is ~5 hours, so the 4 PM double espresso is still a quarter-active at midnight — measurably cutting deep sleep even when you fall asleep fine. Cutoff: 8–10 hours before bed (1–2 PM for a 10–11 PM bedtime). Decaf exists and is good now.",
    why: [
      "A controlled trial showed 400mg caffeine 6h before bed objectively destroyed sleep quality while subjects didn't notice — subjective 'I sleep fine on caffeine' is unreliable.",
      "Caffeine antagonizes adenosine — the sleep-pressure molecule — so late doses hollow out deep sleep specifically.",
      "Half-life varies (3–7h) with genetics; slow metabolizers carry a bedtime dose in their blood for a full workday.",
    ],
    steps: [
      "Set your cutoff: bedtime minus 8–10 hours. Write it down; it's earlier than you think.",
      "Count all sources: coffee, tea, cola, pre-workout, energy drinks, dark chocolate.",
      "Afternoon substitution ladder: decaf coffee, herbal tea, sparkling water, a walk (see the post-meal-walk protocol).",
      "Taper, don't quit: if you're a heavy drinker, drop one serving every 3 days to dodge withdrawal headaches.",
    ],
    mistakes: [
      "'Caffeine doesn't affect me' — the trial data say your perception is the least reliable instrument in the room.",
      "Pre-workout at 6 PM for an 8 PM session — you're buying the session with tomorrow's sleep.",
      "Quitting cold turkey into a 3-day withdrawal headache and blaming the protocol.",
    ],
    progression: [
      "Week 1: track all caffeine doses and times honestly.",
      "Week 2: enforce the cutoff; move the last dose earlier.",
      "Week 3–4: judge by morning alertness and sleep-onset speed — most people feel the difference within a week.",
    ],
    refs: [
      "Drake C et al. J Clin Sleep Med 2013 — caffeine effects on sleep taken 0, 3, or 6 hours before bed.",
      "Fredholm BB et al. Pharmacol Rev 1999 — actions of caffeine in the brain: adenosine antagonism.",
    ],
  },
  {
    id: "alcohol-sleep", title: "Alcohol Is A Sleep Tax — Even Two Drinks", icon: "wine", category: "Sleep",
    goals: ["looksmax", "fitness", "muscle"], minutes: 2,
    keywords: ["alcohol", "sleep quality", "drinking", "REM sleep"],
    summary: "Alcohol sedates you into sleep, then fragments the second half of the night: REM and deep sleep both suffer, breathing worsens, and you wake less restored. Meta-analysis of 27 trials is unambiguous. 'Nightcap' is a loan you repay at 3 AM.",
    why: [
      "The definitive meta-analysis found alcohol reduces sleep latency but suppresses REM in the first half of the night and fragments sleep in the second half, at every dose.",
      "Alcohol relaxes airway muscles, worsening snoring and apnea — you get less oxygen exactly when recovery should peak.",
      "Deep sleep is when growth hormone pulses — the repair window your training paid for gets taxed.",
    ],
    steps: [
      "Default: no alcohol within 3 hours of bed on any night you care about tomorrow.",
      "If drinking socially: earlier is strictly better, water between drinks, and accept the tax consciously.",
      "Track the A/B: one week with your usual intake, one without — morning energy and watch sleep data will make the case.",
      "Swap the ritual: sparkling water in the same glass, same time, same chair (see the alcohol protocol).",
    ],
    mistakes: [
      "Believing it helps — faster onset isn't better sleep, it's sedation.",
      "Using it to switch off after stress — see the stress-bucket protocol for tools that don't borrow from REM.",
      "Judging by sleep-onset speed only — the damage hides in the back half of the night.",
    ],
    progression: [
      "Week 1: log drinks and bedtime gap.",
      "Week 2: enforce the 3-hour rule.",
      "Ongoing: most people settle at 0–2 drinks weekly, earlier in the evening, once they see the data.",
    ],
    safety: [
      "Do not use alcohol as a sleep aid — it lights you up at first but fragments the second half of the night. Never stack it with sleeping pills (like zolpidem) or sedatives; the combination suppresses breathing.",
      "It interacts with many medications — sleep medicines, antidepressants, painkillers, and anxiety drugs. Ask your doctor or pharmacist about your specific prescriptions.",
      "Plan your ride: even the morning after, alcohol still slows reaction time while driving or operating machinery.",
      "Zero during pregnancy or breastfeeding — there is no known safe dose.",
      "If you are a heavy daily drinker, do NOT stop cold turkey on your own — alcohol withdrawal can cause seizures and needs medical supervision.",
    ],
    refs: [
      "Ebrahim IO et al. Alcohol Clin Exp Res 2013 — alcohol & sleep meta-analysis of 27 studies.",
    ],
  },
  {
    id: "cool-room", title: "Sleep Cold: 17–19°C Room, Warm Bed", icon: "thermometer", category: "Sleep",
    goals: ["looksmax", "fitness", "muscle"], minutes: 1,
    keywords: ["bedroom temperature", "cold room", "sleep environment", "degrees"],
    summary: "Your core temperature must drop ~1°C to initiate and hold deep sleep. A cool room (17–19°C) with warm bedding is the fastest lever most people haven't pulled. Hot stuffy bedrooms quietly shred sleep quality — especially for looks-conscious lifters whose recovery depends on it.",
    why: [
      "Reviews of thermal environment research show heat exposure consistently degrades sleep quality and continuity; the cool-but-comfortable zone is 17–19°C for most adults.",
      "The pre-bed temperature drop is itself a circadian signal — warm shower 1–2h before bed accelerates the core drop (the warm-up produces the cool-down).",
      "Deep sleep is where growth hormone pulses — the anabolic window you're sleeping through at 26°C.",
    ],
    steps: [
      "Set the room to 17–19°C (thermostat or fan + ventilation). Cool air, warm blanket.",
      "Take a warm shower 1–2h before bed — the post-shower core-temperature drop deepens sleepiness.",
      "Breathable bedding; feet out of the blanket is the human thermostat's fine adjustment.",
      "Hot climate? Pre-cool the room with a fan/ac 30 min before bed; cold shower before bed as the fallback.",
    ],
    mistakes: [
      "Warm cozy bedrooms 'for comfort' — the comfort is costing you deep sleep.",
      "Heavy late meals + hot room — digestion and heat stack against sleep onset (see the eat-slow protocol for meal timing).",
      "Cranking it to 15°C and shivering — too cold wakes you too; the band is 17–19.",
    ],
    progression: [
      "Week 1: lower the room 2–3°C from current; note sleep-onset change.",
      "Week 2: add the warm-shower timing.",
      "Ongoing: seasonal adjustments; the principle (cool air, warm bed) never changes.",
    ],
    refs: [
      "Okamoto-Mizuno K, Mizuno K. J Physiol Anthropol 2012 — effects of thermal environment on sleep.",
      "Harding EC, Franks NP, Wisden W. Curr Opin Physiol 2020 — sleep & thermoregulation.",
    ],
  },
  {
    id: "wind-down", title: "Build A 60-Minute Wind-Down You Don't Negotiate", icon: "lamp", category: "Sleep",
    goals: ["looksmax", "fitness", "muscle"], minutes: 2,
    keywords: ["bedtime routine", "evening ritual", "relax", "unwind"],
    summary: "Sleep doesn't toggle on — it ramps down. A fixed final hour: dim lights, no work inputs, low-stimulation ritual (reading, stretching, shower), then bed at the same time. Behavioral sleep guidelines put routines like this at the core of non-drug insomnia treatment.",
    why: [
      "Clinical practice guidelines for insomnia place stimulus control and wind-down routines among the first-line, evidence-based treatments — better supported than any supplement.",
      "Bright light and work arousal in the final hour delay melatonin and raise alertness — the anteroom of sleep gets skipped.",
      "Rituals work by association: the same sequence nightly trains the brain that this pattern ends in sleep.",
    ],
    steps: [
      "Set the alarm: bed-60-minutes. When it rings, the day ends — work, arguments, and news included.",
      "Dim the house: lamps, warm bulbs, screens on night mode (see the screens protocol).",
      "Fixed sequence, 3–4 elements: warm shower → stretch/read 20 min → tomorrow's clothes out → lights out. Same order nightly.",
      "No 'productivity wind-downs' — email at 11 PM is not reading; the brain knows the difference.",
    ],
    mistakes: [
      "Trying to sleep directly from work mode — you're asking the nervous system to downshift three gears in one minute.",
      "Starting the wind-down 'when tired' — tired arrives at midnight; the alarm starts at 9:45 regardless.",
      "Making the routine elaborate and abandonable — 3 boring steps nightly beat 7 occasional ones.",
    ],
    progression: [
      "Week 1: dim lights + phone away 60 min before bed only.",
      "Week 2: full sequence, same order nightly.",
      "Ongoing: it should feel almost boring. Boring is the feature.",
    ],
    refs: [
      "Edinger JD et al. J Clin Sleep Med 2021 — behavioral/psychological treatment of insomnia: AASM clinical practice guideline.",
      "Morgenthaler TI et al. Sleep 2006 — practice parameters for behavioral treatment of sleep disorders.",
    ],
  },
  {
    id: "stimulus-control", title: "Bed = Sleep Only (The 20-Minute Rule)", icon: "bed-double", category: "Sleep",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["insomnia", "cant sleep", "bed association", "20 minute rule"],
    summary: "Can't sleep after ~20 minutes in bed? Get up, dim room, do something dull, return when sleepy. Bed must mean one thing or your brain learns bed = worrying. This 'stimulus control' rule is among the most effective non-drug insomnia treatments ever tested.",
    why: [
      "Stimulus control is a first-line component of CBT-I, the gold-standard insomnia treatment endorsed by clinical guidelines.",
      "Lying awake in bed pairs the bed context with frustration/alertness — the association is what keeps chronic insomniacs wired at bedtime.",
      "Clock-watching converts insomnia into arithmetic stress; the rule removes the scoreboard.",
    ],
    steps: [
      "In bed ~20 minutes without sleep → leave the bed. Dim room, dull book or breathing, no clock-checking, no phone.",
      "Return only when genuinely sleepy (heavy eyelids), not merely bored. Repeat as needed — the rule doesn't bend at 2 AM.",
      "Fixed wake time regardless of the rough night (see the sleep-regularity protocol) — never compensate by sleeping in.",
      "Daytime rule: no work, meals, series, or scrolling in bed. Bed = sleep (and intimacy). That's the full list.",
    ],
    mistakes: [
      "Staying in bed 'trying harder' — effort is precisely the wrong tool for sleep.",
      "Checking the time during the night wake-up — the arithmetic spiral follows instantly.",
      "Sleeping in after a bad night — it feels merciful and prolongs the pattern; early bedtime is the repair.",
    ],
    progression: [
      "Week 1: enforce the 20-minute rule without exception.",
      "Weeks 2–4: it typically stops being needed most nights — the association rebuilt.",
      "Ongoing: the rule stays written down for the rough weeks. Rules beat willpower at 3 AM.",
    ],
    refs: [
      "Edinger JD et al. J Clin Sleep Med 2021 — CBT-I clinical practice guideline.",
      "Morgenthaler TI et al. Sleep 2006 — practice parameters: stimulus control therapy.",
    ],
  },
  {
    id: "screens-honest", title: "Screens: It's The Light AND The Content", icon: "smartphone", category: "Sleep",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["screens", "blue light", "phone before bed", "scrolling"],
    summary: "Evening screens hurt sleep two ways: bright light delays your clock, and engaging content keeps your mind in daytime mode. The honest fix covers both — brightness down and night mode, yes, but the bigger lever is ending the feed 60 minutes before bed (see the wind-down protocol).",
    why: [
      "The controlled PNAS study found evening e-reader use on backlit devices delayed melatonin, shifted the clock, and impaired next-morning alertness versus paper books.",
      "Reviews note light at night suppresses melatonin in a brightness- and wavelength-dependent way — night mode helps but doesn't neutralize.",
      "Content arousal (feeds, arguments, series cliffhangers) independently delays sleep — the 'just one more episode' is a light problem AND a dopamine one.",
    ],
    steps: [
      "Night mode/sunset scheduling on all devices from ~2h before bed — automatic, not willpower.",
      "Phone charges outside the bedroom. Buy a ¥200/$10 alarm clock — the most cost-effective sleep supplement ever sold.",
      "Last hour = analog: paper book, stretching, journaling (see the journaling protocol), conversation.",
      "If screens are unavoidable (late work), minimum dose: brightness floor, distance, and stop 30 min before bed minimum.",
    ],
    mistakes: [
      "Night mode as a license to scroll until 1 AM — you've dimmed the light, kept the arousal.",
      "Phone-in-bed 'just to check the alarm' — the check becomes 40 minutes reliably.",
      "Blue-light glasses as a total fix — helpful marginally; the content and timing matter more.",
    ],
    progression: [
      "Week 1: charger moves out of the bedroom. Non-negotiable.",
      "Week 2: screens end at the wind-down alarm.",
      "Ongoing: the analog hour becomes the day's best hour. Most people keep it forever.",
    ],
    refs: [
      "Chang AM et al. Proc Natl Acad Sci USA 2015 — evening use of light-emitting e-readers.",
      "Blume C et al. Somnologie 2019 — effects of light on circadian rhythm & sleep (review).",
    ],
  },
  {
    id: "naps", title: "Nap Like A Pro: 10–20 Minutes, Before 3 PM", icon: "moon", category: "Sleep",
    goals: ["fitness", "looksmax"], minutes: 2,
    keywords: ["nap", "power nap", "siesta", "afternoon sleep"],
    summary: "A short early-afternoon nap measurably restores alertness and mood without stealing tonight's sleep. The rules are strict: 10–20 minutes (or a full 90), and before ~3 PM. Thirty-minute 5 PM naps are the worst of both worlds.",
    why: [
      "Trials show brief naps (10–20 min) improve alertness and performance with minimal sleep inertia — you wake before deep sleep begins.",
      "The 90-minute option lets a full sleep cycle complete and wake you at a light stage — the only long nap that doesn't grog.",
      "Late or long naps reduce the sleep pressure your bedtime depends on — the circadian system charges interest.",
    ],
    steps: [
      "Set a 20-minute alarm: lie down, eyes closed, and stop worrying whether you sleep — rest alone restores measurably.",
      "Time window: 1–3 PM, when the circadian dip makes dozing easy and the evening untouched.",
      "Dark, cool, horizontal if possible; a chair works in a pinch. Eye mask is the cheap upgrade.",
      "Waking groggy from a 20-min nap? You overshot — set the alarm earlier; the grogginess is deep-sleep entry.",
    ],
    mistakes: [
      "The 45-minute couch crash at 6 PM — tonight's sleep pays for it.",
      "Caffeine-napping 'for the buzz' at 4 PM — the science of the combo is real; the timing here isn't.",
      "Using naps to repay chronic 5-hour nights — naps supplement sleep; they don't replace the window (see sleep-regularity).",
    ],
    progression: [
      "Week 1: test a 15-min nap after lunch; note afternoon alertness.",
      "Ongoing: deploy 2–3× weekly as needed — a tool, not an obligation.",
      "If napping wrecks bedtime consistently, retire it and fix the night window instead.",
    ],
    refs: [
      "Brooks A, Lack L. Sleep 2006 — brief daytime nap duration RCT.",
      "Dhand R, Sohal H. Am J Med 2006 — good sleep, bad sleep: the role of daytime naps.",
    ],
  },
  {
    id: "sleep-appetite", title: "Short Sleep Feeds Fat Gain — Hunger Rises, Willpower Falls", icon: "ice-cream-bowl", category: "Sleep",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    keywords: ["sleep and hunger", "cravings", "appetite hormones", "junk food"],
    summary: "Sleep restriction is a fat-loss sabotage machine: hunger hormones shift toward appetite, cravings skew to calorie-dense food, and — cruelly — the weight you do lose skews toward muscle. The trials are striking: same diet, different sleep, different body composition.",
    why: [
      "Controlled studies show sleep restriction raises ghrelin, lowers leptin, and increases subjective hunger — subjects eat measurably more the next day.",
      "The Nedeltcheva trial: identical deficit, 5.5h vs 8.5h sleep — the short-sleep group lost 55% less fat and 60% more lean mass. Same calories, different body.",
      "Sleep-deprived brains show amplified reward response to junk food in imaging studies — cravings aren't weakness, they're wiring.",
    ],
    steps: [
      "Non-negotiable floor: 7 hours. Below that, your deficit loses its muscle-protecting properties (see the cutting-protein protocol for the pairing).",
      "Fix the window first (sleep-regularity protocol) — duration follows timing far more easily than the reverse.",
      "Craving emergency on short-sleep days: pre-decide the day's meals the night before. Hungry, sleep-deprived choices are unreliable.",
      "Track the correlation one week: sleep hours vs next-day cravings — your own data will close the argument.",
    ],
    mistakes: [
      "Dieting harder to overcome sleep-deprived hunger — you're raising the stakes on a losing hand.",
      "Borrowing sleep for cardio sessions at 5 AM chronically — net effect can be negative.",
      "Ignoring sleep because 'diet and training are on point' — sleep is the third pillar, not a bonus.",
    ],
    progression: [
      "Week 1: log sleep hours + next-day hunger quality (1–5).",
      "Week 2+: hold 7h+ through the entire cut — treat it as part of the diet, not separate from it.",
      "If you can't find 7h, the honest move is pausing the deficit until you can.",
    ],
    refs: [
      "Nedeltcheva AV et al. Ann Intern Med 2010 — insufficient sleep undermines dietary efforts to reduce adiposity.",
      "Spiegel K et al. Ann Intern Med 2004 — sleep restriction & ghrelin/leptin/hunger.",
    ],
  },
  {
    id: "apnea-flag", title: "Loud Snoring + Daytime Fog? Get Checked For Sleep Apnea", icon: "volume-x", category: "Sleep",
    goals: ["fitness", "looksmax", "muscle"], minutes: 2,
    keywords: ["sleep apnea", "snoring", "CPAP", "breathing during sleep"],
    summary: "If you snore loudly, wake unrefreshed despite hours in bed, or fight daytime sleepiness, sleep apnea is a real possibility — it's common, underdiagnosed, and it quietly crushes recovery, testosterone, blood pressure, and mood. No supplement or protocol beats a proper diagnosis.",
    why: [
      "Population studies estimate nearly a billion adults worldwide have obstructive sleep apnea, with most cases undiagnosed — prevalence rises steeply with body fat and age.",
      "Untreated OSA drives hypertension, cardiovascular risk, daytime accidents, and blunted testosterone — it undermines every other protocol on this site.",
      "Treatment (typically CPAP) reliably restores sleep quality and daytime function in confirmed cases — among the highest-ROI medical interventions in sleep medicine.",
    ],
    steps: [
      "Screen yourself: do you snore loudly (partner testimony counts), wake gasping, fight sleepiness after 7+ hours, or get morning headaches? Two yeses = get evaluated.",
      "Ask a partner or use a sleep-recording app for one night — snoring patterns are data.",
      "See a doctor about a sleep study (home tests exist and are accessible now). It's a routine ask, not an extreme one.",
      "Interim measures while waiting: side-sleeping, alcohol cutoff (see alcohol-sleep), weight loss if applicable — all genuinely reduce severity.",
    ],
    mistakes: [
      "Dismissing snoring as cosmetic — it's the most visible symptom of a mechanical airway problem.",
      "Self-treating with mouth tapes or nostril strips as a diagnosis substitute — strips are harmless; assumption is not.",
      "Attributing chronic fatigue to laziness — undiagnosed apnea makes 'try harder' physiologically meaningless.",
    ],
    progression: [
      "Week 1: honest self-screen + one partner-verified night.",
      "If flagged: book the medical evaluation. Everything else in the library works better after.",
      "Diagnosed? Treatment + this library's sleep protocols stack — they're compatible, not competing.",
    ],
    refs: [
      "Peppard PE et al. Am J Epidemiol 2013 — increased prevalence of sleep-disordered breathing.",
      "Benjafield AV et al. Lancet Respir Med 2019 — global prevalence of obstructive sleep apnea.",
    ],
  },
];
