// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Training Protocols (18)
// ─────────────────────────────────────────────────────────────
import type { Tip } from "./types";

export const TRAINING_TIPS: Tip[] = [
  {
    id: "volume", title: "10–20 Hard Sets Per Muscle, Per Week", icon: "layers", category: "Training",
    goals: ["muscle", "strength"], minutes: 3,
    keywords: ["training volume", "sets per week", "hard sets", "hypertrophy"],
    summary: "Weekly hard sets per muscle is the master variable of hypertrophy. Below ~10 you're maintaining; 10–20 builds; beyond 20 mostly just costs recovery. Count and distribute them — don't guess.",
    why: [
      "Meta-analyses show a dose-response between weekly sets and muscle growth — more sets grow more muscle up to a point of diminishing returns.",
      "Systematic reviews of hypertrophy program design converge on weekly set counts as the strongest program lever you control.",
      "Counting sets makes plateaus diagnostic: if chest hasn't grown in 8 weeks, check whether it's actually getting 10+ hard sets — most programs underdose everything except the mirror muscles.",
    ],
    steps: [
      "List your movements and count weekly hard sets per muscle (a bench press is a chest set, a triceps set, a front-delt set).",
      "Bring lagging muscles to 10+ sets weekly by adding 2–3 sets — not by rewriting the program.",
      "Spread volume over 2+ sessions per muscle (see the frequency protocol) — 16 sets in one session is junk volume by set 12.",
      "Adjust by recovery: performance rising and muscles feeling worked? Hold. Stalling and beat up? Cut 20%.",
    ],
    mistakes: [
      "Counting warm-up or half-effort sets — a 'hard set' is 1–3 reps from failure with clean form.",
      "Doubling volume overnight — add ~2–3 sets per muscle per week max, or soreness eats the next session.",
      "Volume for the muscles you like, excuses for the ones you don't. The count exposes this instantly.",
    ],
    progression: [
      "Week 1: audit your current weekly sets per muscle. Most people find 6–8 for legs, 18 for chest.",
      "Week 2–3: rebalance toward even 10+ everywhere.",
      "Months 2+: add 2–3 sets weekly to priority muscles until 15–20, then hold.",
    ],
    refs: [
      "Schoenfeld BJ et al. J Sports Sci 2017 — resistance training volume dose-response meta-analysis.",
      "Baz-Valle E et al. Sports Med 2022 — systematic review of hypertrophy training program design.",
    ],
  },
  {
    id: "double-progression", title: "Run Double Progression On Everything", icon: "trending-up", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["progression method", "reps", "logbook", "adding weight"],
    summary: "Double progression is the simplest engine of growth: pick a rep range (say 8–12), add reps until you hit the top on every set, then add weight and drop back to the bottom. Repeat forever. No app, no spreadsheet gymnastics.",
    why: [
      "Progressive overload is the primary training driver identified by every major strength-medicine position statement — the question is only how to systematize it.",
      "Double progression auto-adjusts to good and bad days: reps float within the range instead of forcing ego lifts or sandbagging.",
      "It converts training into a measurable game — the logbook shows progress in weeks, which is the strongest adherence drug available.",
    ],
    steps: [
      "Pick a range per exercise: 6–10 for heavy compounds, 8–15 for machines and isolation.",
      "Work within the range: when all sets hit the top number with clean form, add 2.5kg (upper) / 5kg (lower).",
      "Log every set: exercise × weight × reps. The logbook is the program.",
      "Stuck at the same weight×reps for 3 sessions? That's information — see the plateau protocol (deload, then add a set).",
    ],
    mistakes: [
      "Adding reps by cutting range of motion — depth and control are part of the rep.",
      "Jumping weight before the top of the range is hit everywhere, then stalling and feeling 'weak'.",
      "Changing exercises every 3 weeks so nothing can be progressed. Double progression punishes program hopping — that's a feature.",
    ],
    progression: [
      "Week 1: set your ranges and log every set.",
      "Ongoing: one rep or one weight step per exercise per 1–2 weeks is elite progress. Chase pennies, not miracles.",
      "Every 6–8 weeks: reassess ranges (heavier for strength goals, moderate for size).",
    ],
    refs: [
      "American College of Sports Medicine. Med Sci Sports Exerc 2009 — progression models position stand.",
      "Kraemer WJ, Ratamess NA. Med Sci Sports Exerc 2004 — training progression & adaptation.",
    ],
  },
  {
    id: "rir", title: "Leave 1–3 Reps In The Tank", icon: "gauge", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 3,
    keywords: ["reps in reserve", "training intensity", "training to failure"],
    summary: "Training to absolute failure on every set is not required for growth — and it taxes recovery badly. Stopping 1–3 reps short (RIR 1–3) produces nearly identical hypertrophy for a fraction of the fatigue. Save failure for isolation work and testing weeks.",
    why: [
      "Meta-analysis shows sets taken close to failure grow muscle similarly to failure training — proximity matters more than reaching failure itself.",
      "Failure sets cost disproportionately in recovery: they extend nervous-system fatigue and damage future session quality.",
      "Compound lifts near failure degrade form first — the last reps become injury roulette, not stimulus.",
    ],
    steps: [
      "Rate each set honestly: RIR 2 means you could have done 2 more clean reps. If you're not sure, the set was probably closer to failure than you think.",
      "Compounds (squat, deadlift, bench, row): RIR 2–3 on working sets. Isolation (curls, laterals, machines): RIR 0–1 is fine.",
      "The last set of an isolation exercise can go to failure as a weekly test — track it.",
      "If bar speed collapses and form shifts mid-range, the set ended one rep ago.",
    ],
    mistakes: [
      "Counting RIR while filming for Instagram, not for the log — honest assessment requires attention.",
      "Never approaching failure at all: RIR 5+ sets produce little stimulus. 'Hard but controlled' is the target.",
      "Grinding heavy deadlifts to failure weekly — the tax lands on your spine and next week's session.",
    ],
    progression: [
      "Week 1: practice rating every set; write RIR next to each.",
      "Weeks 2–8: hold RIR 1–3, progress via double progression.",
      "Every 6–8 weeks: one week of testing (RIR 0) to recalibrate honesty.",
    ],
    refs: [
      "Refalo MC et al. Sports Med 2023 — proximity to failure & hypertrophy meta-analysis.",
      "Grgic J et al. Sports Med 2021 — effects of training to failure on strength/hypertrophy.",
    ],
  },
  {
    id: "rest-intervals", title: "Rest 2–3 Minutes On The Big Lifts", icon: "timer", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["rest between sets", "rest time", "strength recovery"],
    summary: "Rest is a training variable, not laziness. One-minute rests on squats turn every set after the first into a cardio compromise. 2–3 minutes on compounds and 1–2 on isolation lets you lift more per set — and lifting more is the whole point.",
    why: [
      "RCT and meta-analysis data show longer rests (2–3 min) produce greater strength and hypertrophy than 60s when volume is self-paced — you complete more quality reps.",
      "Phosphocreatine — the fuel for max-effort reps — takes ~3 minutes to substantially replenish.",
      "Short rests don't 'burn more fat'; total weekly work and progression drive the outcome.",
    ],
    steps: [
      "Compounds (squat, deadlift, bench, overhead, row): rest 2:30–3:00 between hard sets.",
      "Machines and isolation: 1:30–2:00 is plenty.",
      "Time it with a stopwatch. Perceived rest is always shorter than real rest.",
      "Use the rest deliberately: breathe slowly, rehearse the next set's cue, don't scroll — scrolling stretches 2 minutes into 6.",
    ],
    mistakes: [
      "Resting too little on compounds, too long on curls — backwards from physiology and priorities.",
      "Confusing supersets with rest discipline — antagonist supersets are fine, but time the pair honestly.",
      "Adding weight while cutting rest and calling the resulting grind 'progress'.",
    ],
    progression: [
      "Week 1: actually time your current rests — most people overestimate.",
      "Week 2+: hold 2–3 min on compounds; let double progression use the recovered strength.",
      "Deload weeks: same rests, lighter load — rest length isn't the variable to cut.",
    ],
    refs: [
      "Schoenfeld BJ et al. J Strength Cond Res 2016 — longer rest intervals & muscle growth RCT.",
      "Grgic J et al. Sports Med 2018 — rest interval duration meta-analysis.",
    ],
  },
  {
    id: "frequency", title: "Hit Each Muscle Twice A Week", icon: "repeat", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["training frequency", "twice a week", "muscle groups", "split"],
    summary: "For equal weekly volume, spreading a muscle's sets across two sessions beats cramming them into one. Twice-weekly frequency also makes 10–20 weekly sets physically completable with quality reps.",
    why: [
      "Meta-analysis finds 2×/week frequency superior to 1× for hypertrophy when weekly volume isn't equated — and volume-equated trials show the practical benefit of spreading high volumes.",
      "Volume-equated comparisons show later sets of a 12-set 'blitz' produce diminishing stimulus — quality reps concentrate early in a session.",
      "Muscle protein synthesis after a session elevates for ~24–48h in trained lifters — a twice-weekly pulse keeps the build signal on more of the week.",
    ],
    steps: [
      "Pick a structure that guarantees 2× per muscle: full-body ×3, upper/lower ×4, or push/pull/legs ×2 (advanced).",
      "Split each muscle's weekly sets roughly in half between its two days (e.g., chest: 6 sets Monday, 6 Thursday).",
      "Order the split so soreness doesn't sabotage the second hit — legs Monday, legs again Friday (not Wednesday).",
      "If life allows only 3 sessions, full-body beats bro-splits every time.",
    ],
    mistakes: [
      "The classic bro-split: chest Monday annihilation, then chest untouched for 7 days — one growth pulse, six idle days.",
      "Doubling frequency without halving per-session volume — that's just more volume, which has its place but isn't 'testing frequency'.",
      "Five-day splits that collapse to 4 in real life, orphaning a muscle group entirely.",
    ],
    progression: [
      "Week 1: choose the split that matches your real schedule, not your fantasy one.",
      "Week 2+: run volume half/half per muscle per week.",
      "Ongoing: change the split only when the schedule changes — not out of boredom.",
    ],
    refs: [
      "Schoenfeld BJ et al. J Sports Sci 2016 — weekly training frequency & hypertrophy meta-analysis.",
      "Zaroni RS et al. J Strength Cond Res 2019 — high vs low frequency, volume-equated trial.",
    ],
  },
  {
    id: "loading-spectrum", title: "5–30 Reps All Build — Pick Per Exercise", icon: "arrow-up-down", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["rep ranges", "heavy or light", "repetition range", "hypertrophy"],
    summary: "Muscle grows across a huge rep spectrum as long as sets are hard and progression happens. Heavy low-rep work builds maximal strength efficiently; moderate reps (6–15) offer the best size-to-fatigue ratio; high reps (15–30) suit joints, machines, and home training.",
    why: [
      "Meta-analyses of loading trials show hypertrophy is broadly similar from ~5 to ~30 reps when sets approach failure — strength, however, favors heavy loads.",
      "Moderate ranges let you accumulate productive volume with less joint stress and shorter sessions than pure low-rep work.",
      "Bodyweight trainees can absolutely build with 15–30 rep sets — difficulty is what matters, not the number on the dumbbell.",
    ],
    steps: [
      "Anchor big lifts in 5–10 reps — they respect time and build strength alongside size.",
      "Run machines and isolation in 8–15; band/dumbbell high-rep work in 15–30 when equipment is light.",
      "Whatever the range: last set at RIR 1–2 (see the RIR protocol). Light and easy grows nothing.",
      "Progress within each range using double progression before adding a new exercise.",
    ],
    mistakes: [
      "Worshipping the 'hypertrophy range' as magical — effort and progression beat any specific number.",
      "Living exclusively at 1–3 reps — great for skill and nerve, inefficient as a hypertrophy diet.",
      "Treating light sets as cardio — a 25-rep set near failure is legitimate training.",
    ],
    progression: [
      "Week 1: assign a rep range per exercise in your log.",
      "Weeks 2+: double progression inside each range.",
      "Every 8–12 weeks: shift one lift's range (e.g., squat 5s → 8s) for variety and joint respite.",
    ],
    refs: [
      "Schoenfeld BJ et al. J Sports Sci 2017 — low vs high load training meta-analysis.",
      "Lasevicius T et al. Eur J Appl Physiol 2018 — effects of different loads to failure on hypertrophy/strength.",
    ],
  },
  {
    id: "exercise-order", title: "Compounds First, While You're Fresh", icon: "list-checks", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["compound lifts", "exercise order", "isolation", "priority"],
    summary: "The first exercises of a session get your best energy, focus, and nervous system. Put the highest-value lifts there — squats before leg extensions, weighted pull-ups before curls. Priority is an ordering decision, not a hope.",
    why: [
      "Program-design reviews consistently place exercise selection and order among the highest-impact variables; fatigue accumulated early degrades everything after it.",
      "Neural demand tracks complexity: heavy compounds need the freshest nervous system to load progressively and stay safe.",
      "Most people's weak points are the lifts they schedule last, when tanks are empty.",
    ],
    steps: [
      "Order template: explosive/heavy compound → secondary compound → isolation → core/neck.",
      "Put your priority muscle's first exercise in slot one. If arms are the goal, they don't need to die at the end forever.",
      "One heavy 'main lift' per session is plenty; two max-effort compounds share quality.",
      "Supersets allowed — but keep the heavy compound standalone with full rest.",
    ],
    mistakes: [
      "Five isolation exercises before the squat, then wondering why legs 'don't respond'.",
      "Doing abs first on leg day and squatting on a fatigued core.",
      "Reordering every session — order is part of the program; keep it stable so progress is measurable.",
    ],
    progression: [
      "Week 1: write the order once, follow it for 8 weeks.",
      "Ongoing: rotate priority by swapping the first slot — the rest holds.",
      "Deload weeks: same order, reduced load — structure survives intensity cuts.",
    ],
    refs: [
      "Baz-Valle E et al. Sports Med 2022 — hypertrophy program design systematic review.",
      "American College of Sports Medicine. Med Sci Sports Exerc 2009 — position stand.",
    ],
  },
  {
    id: "training-log", title: "Log Every Set Or You're Guessing", icon: "notebook-pen", category: "Training",
    goals: ["muscle", "strength", "fitness", "fatloss"], minutes: 2,
    keywords: ["workout log", "tracking lifts", "progress notebook"],
    summary: "A training log converts effort into data: what you lifted, how many reps, how hard it felt. Without it, progressive overload is folklore — you'll repeat the same sessions for months and call it a plateau. Paper, app, notes file: any system you'll actually keep.",
    why: [
      "Self-monitoring is among the most validated behavior-change techniques across health psychology taxonomies — what gets recorded improves.",
      "Progress monitoring meta-analyses show tracking progress itself increases goal attainment — the logbook is part of the program.",
      "Double progression, RIR honesty, and volume audits are all impossible without records.",
    ],
    steps: [
      "Log four things per set: exercise, weight, reps, RIR. Nothing else needed.",
      "Log immediately between sets — memory rewrites lifts within hours.",
      "Review every 4 weeks: which exercises progressed? Which stalled? Rebalance volume toward the stalled ones.",
      "One notebook or one notes-app file. Frictionless beats fancy — the log you keep beats the app you abandon.",
    ],
    mistakes: [
      "Logging only good days — bad sessions are the diagnostic gold.",
      "Tracking bodyweight daily but lifts never — the gym numbers are the controllable ones.",
      "Switching systems monthly. Pick once; the system is the habit.",
    ],
    progression: [
      "Week 1: full logging, no changes to training.",
      "Weeks 2–4: progress using the log.",
      "Week 5: first audit — adjust one variable (volume or exercise) based on data, not vibes.",
    ],
    refs: [
      "Michie S et al. Health Psychol Rev 2009 — self-monitoring in behavior change techniques.",
      "Harkin B et al. Psychol Bull 2016 — progress monitoring & goal attainment meta-analysis.",
    ],
  },
  {
    id: "ramp-sets", title: "Ramp To A Top Set — Warm Up Like It Matters", icon: "activity", category: "Training",
    goals: ["strength", "muscle", "fitness"], minutes: 2,
    keywords: ["warm-up sets", "top set", "working weight", "ramp up"],
    summary: "Cold muscles under heavy bars are how injuries and ego-checks happen. A proper ramp — empty bar, then progressive jumps to your working weight — primes the nervous system, rehearses the groove, and measurably improves the set it protects.",
    why: [
      "Systematic reviews find warm-ups reliably enhance performance; even brief general + specific warm-ups improve power output.",
      "Meta-analysis of warm-up studies shows performance improvements across strength and endurance tasks, with specific movement rehearsal being the key component.",
      "Ramp sets are also diagnostic: unexpected grind at 60% signals poor sleep, under-eating, or coming illness — cheap early warning.",
    ],
    steps: [
      "3–5 minutes general warmth (bike, skipping, brisk walk) — enough to raise temperature, not fatigue.",
      "Ramp: bar × 10 → 40% × 5 → 60% × 3 → 80% × 1–2 → working sets. Bigger jumps as you get experienced.",
      "Working weight feels lighter after a ramp — that's the nervous system primed, use it.",
      "Later exercises (machines, isolation) need only one feeder set each.",
    ],
    mistakes: [
      "Ten minutes of stretching instead of ramping — static stretching before heavy lifting doesn't help performance and long holds can blunt it.",
      "Ramping to failure on the warm-up sets — they're rehearsals, not working sets.",
      "Skipping ramps on 'light' days — the habit is the protection.",
    ],
    progression: [
      "Week 1: install the ramp protocol on squat/bench/deadlift days.",
      "Ongoing: adjust jump sizes by feel; the structure never changes.",
      "Cold mornings/older lifters: add one intermediate step — err on the side of more.",
    ],
    refs: [
      "Fradkin AJ et al. Sports Med 2010 — warm-up & performance systematic review.",
      "McGowan CJ et al. Sports Med 2015 — warm-up strategies meta-analysis.",
    ],
  },
  {
    id: "deload", title: "Deload Before You're Forced To", icon: "pause", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["deload week", "planned recovery", "fatigue", "plateau"],
    summary: "Fatigue accumulates faster than adaptation if you never back off. A planned deload — same movements, ~50–60% of normal volume or load, for one week every 6–8 weeks — lets fitness surface instead of burying it under grinding exhaustion.",
    why: [
      "The training-injury 'workload paradox' shows rapid spikes in workload predict injury — planned fluctuations protect you.",
      "Periodization science treats planned recovery as a core programming principle, not weakness.",
      "Deloads fix the paradoxical stall: sometimes you're not undertraining, you're under-recovering — strength returns the week after backing off.",
    ],
    steps: [
      "Schedule it: every 6–8 weeks (or every 4 if you're 35+, sleeping poorly, or life-stressed).",
      "Deload format: same exercises, same days, 50–60% of the weight for half the sets. Movement quality, zero grinding.",
      "Keep frequency — touch every movement pattern so groove and mobility don't rust.",
      "Return week: pick up ~95% of previous loads; the freshness usually adds reps.",
    ],
    mistakes: [
      "Calling a missed week of junk food and zero movement a 'deload' — movement at reduced load is the mechanism.",
      "Deloading after every 2 weeks 'to be safe' — that's just undertraining with a nice name.",
      "Ignoring warning signs (sleep wrecked, joints aching, dreading sessions) because the calendar says week 4. The calendar is a backstop.",
    ],
    progression: [
      "Week 1: mark your next deload in the calendar.",
      "Run 6–8 week blocks between deloads.",
      "Track: post-deload, do key lifts gain reps within 2 weeks? You scheduled it right.",
    ],
    refs: [
      "Gabbett TJ. Br J Sports Med 2016 — training-injury prevention paradox: workload.",
      "Lorenz DS et al. Sports Health 2015 — periodization: current review.",
    ],
  },
  {
    id: "leg-day-myth", title: "The Leg-Day Hormone Myth (Still Train Legs)", icon: "triangle", category: "Training",
    goals: ["muscle", "strength"], minutes: 2,
    keywords: ["leg day", "legs", "testosterone myth", "squats"],
    summary: "'Heavy squats spike hormones and grow your whole body' is a myth that survived too long: studies equating exercise show the acute hormone bump doesn't drive extra growth elsewhere. Train legs anyway — they're half your muscle, your structural base, and the biggest visual game-changer there is.",
    why: [
      "Trials adding heavy leg exercise to arm training found no extra arm hypertrophy despite larger transient hormone responses — the 'anabolic spill-over' doesn't cash out.",
      "What actually drives growth is local mechanical tension and progressive volume per muscle.",
      "Legs carry the largest muscle groups: for body composition, athletic power, and simply not looking top-heavy, nothing else in the program pays like they do.",
    ],
    steps: [
      "Give legs 10+ weekly sets like any priority muscle: a squat/hinge pattern plus a quad and hamstring isolation.",
      "Scale to equipment: squats + Romanian deadlifts + split squats cover 90% of needs; machines fill gaps in a gym.",
      "Train legs on days you can commit — they cost the most recovery and deserve your best sleep nights.",
      "Judge leg progress in the log and the mirror, not by how sore you got.",
    ],
    mistakes: [
      "Skipping leg day because arms are the priority — nothing exposes an unbalanced physique faster.",
      "Equivocating 'hard leg day' with puking — progressive load over months is the stimulus, not single-session heroics.",
      "Expecting squats to grow your arms. The hormones don't mail packages.",
    ],
    progression: [
      "Week 1: count weekly leg sets honestly.",
      "Weeks 2–8: bring legs to 10–15 quality sets with double progression.",
      "Ongoing: hold leg volume constant as upper body grows — proportion is an asset.",
    ],
    refs: [
      "West DWD et al. Acta Physiol 2009 — exercise-induced hormone elevations do not enhance hypertrophy.",
      "Morton RW et al. J Appl Physiol 2016 — acute hormone responses & arm hypertrophy trial.",
    ],
  },
  {
    id: "neck-training", title: "Train Your Neck Like An Athlete", icon: "shield", category: "Training",
    goals: ["muscle", "looksmax", "fitness"], minutes: 3,
    keywords: ["neck training", "neck strength", "harness", "athlete neck"],
    summary: "The neck responds to training like any muscle group — and thicker, stronger necks are linked to lower concussion risk in contact sports, better crash resilience, and a visibly stronger frame. 2–3 short sessions weekly is all it takes.",
    why: [
      "Research in high-school athletes found greater neck strength was associated with lower concussion incidence — a trainable protective factor.",
      "Neck musculature responds robustly to progressive loading — it's skeletal muscle with the same growth machinery as your arms.",
      "A developed neck balances shoulder width and jawline proportions — the visual difference between 'gym guy' and 'built' often lives here.",
    ],
    steps: [
      "Start with harness or manual-resistance work: flexion, extension, lateral flexion — 2–3 sets × 15–25 each, twice weekly.",
      "Shrugs and rack pulls build the upper trapezius shelf; add neck curls lying on a bench for direct flexion.",
      "Progress slowly — the neck tolerates volume poorly at first. Start with manual resistance or very light bands.",
      "Never train through sharp pain; the neck demands clean technique more than intensity.",
    ],
    mistakes: [
      "Ego-lifting the neck day one — start lighter than feels necessary for 2 weeks.",
      "Hyperextending under load — range of motion stays controlled, chin tucked where appropriate.",
      "Ignoring it entirely and 'balancing' a big upper body on a toothpick — proportion is trainable.",
    ],
    progression: [
      "Weeks 1–2: light manual resistance, learn positions.",
      "Weeks 3–8: add harness/band load, progress reps first, weight second.",
      "Ongoing: 2× weekly forever — 15 minutes, real returns.",
    ],
    safety: [
    "Progress like a beginner even if you are advanced elsewhere — the neck adapts slower than big muscles and its spine is unforgiving.",
    "Start with isometrics (pushing against your own hand) and light harness work. Leave the heavy-plate neck bridges to supervised athletes.",
    "Train range-of-motion slowly, never explosively — bouncy reps load the cervical spine in ways it hates.",
    "Stop at once for sharp pain, dizziness, numbness, or tingling anywhere in the arms. A prior neck injury or whiplash history means get physio clearance first.",
    ],
    refs: [
      "Collins CL et al. J Prim Prev 2014 — neck strength & concussion in high school athletes.",
    ],
  },
  {
    id: "grip-longevity", title: "Grip Strength Predicts Everything — Train It", icon: "hand", category: "Training",
    goals: ["strength", "fitness", "muscle", "looksmax"], minutes: 2,
    keywords: ["grip strength", "forearms", "longevity marker", "dead hang"],
    summary: "Grip strength is one of the strongest single predictors of all-cause mortality and functional independence ever measured — and it's almost never trained directly. Loaded carries and dead hangs fix that in 10 minutes a week.",
    why: [
      "The PURE study across 17 countries found grip strength predicted cardiovascular mortality more strongly than systolic blood pressure — every 5kg drop raised risk materially.",
      "Grip tracks overall muscle quality and neural integrity; it's the cheapest 'biomarker' in the gym.",
      "Grip is the ceiling on pulling: rows, pull-ups, and deadlifts all die at the hands before the back does.",
    ],
    steps: [
      "Farmer carries: 2–4 sets × 30–40m with heavy dumbbells/kettlebells, weekly. Walk tall, don't lean.",
      "Dead hangs: 2–3 sets × max time at the end of pull sessions. Build toward 60s.",
      "Skip constant straps for warm-ups and moderate work; save them for top sets.",
      "Optional: thick-bar or towel-wrapped holds once carries feel easy.",
    ],
    mistakes: [
      "Wrist straps on everything — your back is stronger than your hands only because you never trained the hands.",
      "Only 'training grip' with spring grippers — supports (carries, hangs) build the forearm mass and endurance that matter.",
      "Testing grip monthly and calling that training. Load it, progress it, log it.",
    ],
    progression: [
      "Week 1: add carries and hangs to two sessions.",
      "Weeks 2–8: add load to carries weekly (+2.5kg/side), build hang time.",
      "Ongoing: carries graduate to heavier bells for the same distance — simple, brutal, effective.",
    ],
    refs: [
      "Leong DP et al. Lancet 2015 — grip strength & mortality across 17 countries (PURE).",
    ],
  },
  {
    id: "machines-vs-free", title: "Machines And Free Weights Both Build Muscle", icon: "dumbbell", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["machines", "free weights", "dumbbells", "barbells"],
    summary: "The free-weights-vs-machines holy war is marketing, not science. Head-to-head trials show comparable hypertrophy when effort and progression match. Use free weights for fundamentals and loading capacity; use machines for convenience, isolation, and joint-friendly volume.",
    why: [
      "A trial directly comparing free-weight and machine-based training found similar gains in muscle and strength over 8+ weeks with matched programming.",
      "Growth is driven by tension, effort, and progression per muscle — the hardware is downstream.",
      "Machines stabilize, which lets you push isolation muscles closer to failure safely — a legitimate hypertrophy advantage.",
    ],
    steps: [
      "Base the program on patterns you can load progressively: 1–2 free-weight compounds per session as the anchor.",
      "Fill volume with machines/isolation for lagging muscles — leg press, chest press, cables are tools, not cheating.",
      "Travel/home-limited? Resistance bands + bodyweight progressions follow the same rules (hard sets, progression) — see the calisthenics ladder.",
      "Choose exercises by the log: whichever version lets you progress smoothly with zero pain wins.",
    ],
    mistakes: [
      "Moralizing equipment — the logbook doesn't record brand loyalty.",
      "Machines-only training skipping the skill of stabilizing under load — carry some free-weight work for coordination.",
      "Free-weights-only dogma that abandons safe failure training on isolation muscles.",
    ],
    progression: [
      "Week 1: audit your split — are both tool families represented sensibly?",
      "Ongoing: swap individual exercises (not whole philosophies) when joints or plateaus say so.",
      "Deloads: machines shine — reduce load without losing groove.",
    ],
    refs: [
      "Schwanbeck SR et al. J Strength Cond Res 2020 — free-weight vs machine training trial.",
      "Baz-Valle E et al. Sports Med 2022 — hypertrophy training design review.",
    ],
  },
  {
    id: "doms-myth", title: "Soreness Is Not The Scoreboard", icon: "flame", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["soreness", "DOMS", "muscle damage", "scoreboard"],
    summary: "Chasing soreness is chasing a side effect. DOMS tracks novelty and eccentric novelty especially — not stimulus quality. Sore legs from a new machine prove nothing; progressive logs over months prove everything.",
    why: [
      "Expert reviews are explicit: post-exercise soreness is not a valid indicator of muscle adaptation — it correlates more with exercise novelty than growth.",
      "Well-trained muscles adapt to damage: the same productive program makes you less sore over time while growth continues.",
      "Pursuing soreness via constant new exercises destroys the repetition and progression that actually drive adaptation.",
    ],
    steps: [
      "Score sessions by the log: did reps or load improve vs 2 weeks ago? That's the scoreboard.",
      "Embrace repetition: same core lifts for 8–12 weeks, progressed weekly.",
      "If a session leaves you unable to train again for 3+ days, the session was too much, not 'effective'.",
      "New exercises are legitimate tools — introduce at most 1–2 per month, deliberately.",
    ],
    mistakes: [
      "'No soreness = no growth' — some of the strongest lifters alive are rarely sore.",
      "Using soreness as permission to skip: DOMS is not an injury by itself, mild movement helps (see the DOMS-care protocol).",
      "Equating pain with progress on recovery tools — soreness from stretching ballistic programs into your knees is damage, not gains.",
    ],
    progression: [
      "Week 1: add a 'progressed?' column to the log.",
      "Months 1–3: same exercise menu, progressed. Soreness fades, numbers rise.",
      "Ongoing: change exercises by plan or plateau — never by soreness-hunting.",
    ],
    refs: [
      "Schoenfeld BJ, Contreras B. Strength Cond J 2013 — is postexercise muscle soreness a valid indicator of adaptations?",
      "Hyldahl RD, Hubal MJ. Muscle Nerve 2014 — eccentric exercise-induced muscle damage & adaptation.",
    ],
  },
  {
    id: "weighted-core", title: "Load Your Abs Like Any Other Muscle", icon: "weight", category: "Training",
    goals: ["muscle", "looksmax", "strength"], minutes: 2,
    keywords: ["abs", "core training", "weighted ab work", "six pack"],
    summary: "Abs are skeletal muscle: they respond to progressive tension. Endless planks train endurance; weighted crunches, hanging leg raises, and cable work build the visible blocks. Visibility still depends on body fat — but the muscle underneath is trainable.",
    why: [
      "Core-training reviews treat the abdominals as loadable hypertrophy muscle — progressive resistance builds thickness; endless low-load reps build little.",
      "Training reviews note spinal flexion under control is how the rectus abdominis contracts most completely — 'crunches are dangerous' doesn't survive scrutiny at moderate loads.",
      "Loaded anti-extension/anti-rotation work (suitcase carries, rollouts) also transfers directly to squat and deadlift bracing.",
    ],
    steps: [
      "Pick 2–3: weighted cable crunches (10–15 reps), hanging knee/leg raises (progress to straight-leg), rollouts or ab-wheel (progress distance).",
      "Train abs 2× weekly, 3–4 hard sets each session, progressed like everything else (double progression).",
      "Add static support weekly: one suitcase-carry or side-plank set for obliques and bracing skill.",
      "Remember the visibility equation: abs are built in the gym and revealed in the kitchen (see the deficit protocol).",
    ],
    mistakes: [
      "Hundred-rep bodyweight crunch circuits forever — no progressive load, no growth.",
      "Holding planks for 4 minutes to 'tone' — endurance work wearing a physique costume.",
      "Training abs daily to 'burn belly fat' — spot reduction isn't real; recovery is.",
    ],
    progression: [
      "Week 1: install 2 weighted ab exercises, log them.",
      "Weeks 2–8: progress load/reps weekly.",
      "Ongoing: rotate exercise A/B quarterly; keep one bracing carry forever.",
    ],
    refs: [
      "Contreras B, Schoenfeld B. Strength Cond J 2011 — to crunch or not to crunch: evidence-based core training.",
      "Baz-Valle E et al. Sports Med 2022 — program design review (exercise selection principles).",
    ],
  },
  {
    id: "calisthenics-ladder", title: "Progress Bodyweight Skills On A Ladder", icon: "footprints", category: "Training",
    goals: ["fitness", "muscle", "strength"], minutes: 3,
    keywords: ["bodyweight skills", "skill progressions", "muscle-up", "advanced calisthenics"],
    summary: "Bodyweight training works exactly like barbell training — when you treat variations as a progression ladder instead of collecting push-up totals. Move up a rung when you clear the current one's standard, with reps clean.",
    why: [
      "Progression-model position stands apply to all resistance training: increasing mechanical demand over time drives adaptation, whatever provides the resistance.",
      "Ladders solve the bodyweight problem of 'more reps forever' — harder variations restore the low-rep, high-tension stimulus needed for strength and size.",
      "Skill movements (pull-ups, dips, pistol progressions) reward frequent, quality practice — a ladder gives every session a clear target.",
    ],
    steps: [
      "Pick 3 patterns: push (incline push-up → push-up → diamond → archer → one-arm progression), pull (scap pulls → negatives → band-assisted → pull-up → weighted), legs (assisted squat → squat → split squat → pistol progression).",
      "Define each rung's standard: e.g., 3×8 clean reps before advancing.",
      "Two weekly sessions per pattern; log variations × sets × reps like any lift.",
      "Negatives (slow 3–5s lowering) are the bridge rung to most skills — they work.",
    ],
    mistakes: [
      "Chest-to-floor sagging push-ups forever — 40 sloppy reps advance you nowhere; 3×8 clean incline push-ups do.",
      "Skipping pull progressions — pushing/pulling balance needs a ladder too, not just bands.",
      "Advancing with 5 ugly reps. The standard is the standard; form quality is the currency.",
    ],
    progression: [
      "Week 1: find your current rung on each ladder (max clean standard).",
      "Weeks 2–8: progress one rung per pattern per month — realistic and sustainable.",
      "Ongoing: a completed ladder isn't the end — add load (vest, belt) and keep climbing.",
    ],
    refs: [
      "American College of Sports Medicine. Med Sci Sports Exerc 2009 — progression models position stand.",
      "Kraemer WJ, Ratamess NA. Med Sci Sports Exerc 2004 — progression & adaptation mechanisms.",
    ],
  },
  {
    id: "program-hopping", title: "Run A Program For 8–12 Weeks Minimum", icon: "anchor", category: "Training",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["training program", "program consistency", "stick to plan", "8 weeks"],
    summary: "Every new program feels good for two weeks — that's novelty, not progress. Adaptation needs repeated exposure to the same stimulus with progression. Pick a sane program and run it until the log, not your boredom, decides it's done.",
    why: [
      "Progression-model science requires measurable repeated stimuli; constantly rotating exercises resets the progression clock to zero.",
      "Soreness-driven novelty chasing (see the DOMS protocol) feels productive while the log goes sideways.",
      "Experienced coaches converge on the same rule: adherence to a structured program is the common factor behind results.",
    ],
    steps: [
      "Choose any established program matching your schedule (3-day full body and 4-day upper/lower are undefeated for most people).",
      "Commit in writing: start date, review date 8 weeks out.",
      "Change nothing except weights/reps (double progression) for 8 weeks. Note exercises you dislike — swap at the review, not mid-week.",
      "At review: what progressed? Reorder priorities, keep the skeleton. One variable at a time.",
    ],
    mistakes: [
      "Internet-program-surfing: two weeks each of five influencer splits adds up to zero months of training.",
      "'Confusing the muscles' on purpose — muscles don't need confusing, they need progressive overload.",
      "Quitting programs because week 2–3 feels stale. Stale is what adaptation looks like from the inside.",
    ],
    progression: [
      "Week 0: pick and write the program + review date.",
      "Weeks 1–8: execute and log. Nothing else.",
      "Week 8: review the log, adjust priorities, run another block.",
    ],
    refs: [
      "American College of Sports Medicine. Med Sci Sports Exerc 2009 — progression & program structure.",
      "Lorenz DS et al. Sports Health 2015 — periodization: current review.",
    ],
  },
];
