// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Form & Posture Protocols (9)
// ─────────────────────────────────────────────────────────────
import type { Tip } from "./types";

export const FORM_TIPS: Tip[] = [
  {
    id: "full-rom", title: "Full Range Of Motion Wins The Rep", icon: "move-vertical", category: "Form",
    goals: ["muscle", "strength", "fitness"], minutes: 2,
    keywords: ["range of motion", "depth", "full reps", "stretch under load"],
    summary: "Half reps build half the muscle. Trials comparing squat depths and curl ranges consistently favor full range for growth — especially the lengthened position, which appears to be where the hypertrophy signal is strongest. Depth first, then load.",
    why: [
      "The Bloomquist squat trial found deep squats produced significantly more quadriceps and glute growth than shallow squats at matched training effort.",
      "A recent meta-analysis on range of motion found full-ROM training generally outperforms partials for hypertrophy, with the stretched position carrying extra weight.",
      "Full range also builds usable flexibility — deep squatting and full-ROM pressing train mobility as a side effect.",
    ],
    steps: [
      "Set your depth standard before load: squat to at least parallel (hip crease at knee level) if mobility allows; press to lockout; pull-ups chin over bar.",
      "Reduce the weight until full range is clean — ego is the tax; the log pays it back within weeks.",
      "Work the stretched position deliberately: pause 1 beat at the bottom of curls, presses, and rows.",
      "Limited mobility? Add 2–3 minutes of loaded stretching for the limiting area after training, and use tolerable partials meanwhile — not instead.",
    ],
    mistakes: [
      "Adding plates while depth quietly rises — quarter-squat PRs impress nobody in the mirror later.",
      "Bouncing out of the stretched position — control is the difference between stimulus and joint grinding.",
      "Copying others' range — anatomy (hip sockets, limb lengths) varies; your full range is yours.",
    ],
    progression: [
      "Week 1: film one set of each main lift; define your clean full range.",
      "Weeks 2–8: double progression inside that range (see the double-progression protocol).",
      "Ongoing: load rises only when range and control hold — the video doesn't lie.",
    ],
    refs: [
      "Bloomquist K et al. J Strength Cond Res 2013 — squat depth & hypertrophy RCT.",
      "Wolf MG et al. Sports Med 2023 — partial vs full range of motion: systematic review/meta-analysis.",
    ],
  },
  {
    id: "neutral-spine", title: "Neutral Spine Is A Skill — Train It Like One", icon: "ruler", category: "Form",
    goals: ["strength", "fitness", "muscle"], minutes: 2,
    keywords: ["spine", "back pain", "deadlift form", "neutral back"],
    summary: "Your spine tolerates enormous load when it moves as one piece and complains when discs take bending stress under load. 'Neutral spine' isn't a mystical posture — it's keeping your natural curve while hinging at the hips, bracing, and moving load with the hips and shoulders instead of the lower back.",
    why: [
      "Spinal biomechanics research (McGill and others) shows repeated loaded flexion is the damaging pattern for lumbar discs — the mechanism behind lifting injuries, not 'squats are bad'.",
      "Hip-hinge technique shifts load to the hip extensors — the strongest muscles you own — while the spine transmits rather than bends.",
      "Bracing (a firm 360° breath) raises intra-abdominal pressure and stiffens the cylinder — the natural weight belt your body already has.",
    ],
    steps: [
      "Learn the hinge: stand 30cm from a wall facing away, push hips back until they touch — knees soft, chest proud. That's the deadlift/RDL shape.",
      "Brace before every heavy rep: big belly breath, 360° expansion, hold through the rep, breathe between reps.",
      "Set the bar path close — the load tracks over midfoot; distance from the spine multiplies the moment arm on your discs.",
      "Film from the side on heavy sets. Rounding, hyperextension, or the hips shooting up early all show up on camera first.",
    ],
    mistakes: [
      "Rounding into the morning stretch on deadlifts because the plates 'feel light' — discs count reps, not intentions.",
      "Hyperextending (ribs up, hips forward) at lockout — the opposite fault, same stress category.",
      "Belts as a substitute for bracing — the belt amplifies a skill you must own first.",
    ],
    progression: [
      "Weeks 1–2: drill the hinge daily (2×10 wall touches), film light deadlifts.",
      "Weeks 3–8: add load only with clean video.",
      "Ongoing: brace-check before every heavy set, forever — it's a 3-second habit with a career-length payoff.",
    ],
    refs: [
      "McGill SM. Clin Biomech 1997 — biomechanics of low back injury: implications for lifting.",
    ],
  },
  {
    id: "cadence", title: "Run With A Shorter, Quicker Stride", icon: "footprints", category: "Form",
    goals: ["fitness", "fatloss"], minutes: 2,
    keywords: ["running form", "stride", "steps per minute", "running technique"],
    summary: "Overstriding — foot landing far ahead of the hips, often heel-first with a locked knee — multiplies braking and impact. The fix is mechanical, not mystical: increase step rate ~5–10% and land under your center of mass. Research shows this single cue reduces braking forces and joint load immediately.",
    why: [
      "The Heiderscheit trial showed increasing step rate by 5–10% reduced stride length, braking impulse, and hip/knee joint loading — same speed, less impact.",
      "Cadence in the ~170–180 range characterizes efficient runners at easy paces (it's descriptive, not magic — but most recreational runners sit at 150–160).",
      "Quieter footfalls track the biomechanics: loud heel-slapping is the audible signature of overstriding.",
    ],
    steps: [
      "Count your steps for 30 seconds on an easy run (right foot × 4). Double it: that's cadence.",
      "Raise it ~5% using a metronome app or a playlist at the new BPM. Don't jump 15% at once.",
      "Cue 'land under your hips' and 'run quietly' — the feet follow the ears.",
      "Retest monthly; let cadence rise with fitness, never by sprinting your easy runs to hit a number.",
    ],
    mistakes: [
      "Forcing 180 instantly — a 10% jump in one week overloads calves and Achilles; 5% per month is the ramp.",
      "Copying elite runners' mechanics — they're different people with different bodies and different paces.",
      "Buying super-shoes or fancy insoles before fixing cadence — the free fix comes first.",
    ],
    progression: [
      "Week 1: measure baseline cadence.",
      "Weeks 2–5: +5% with metronome on easy runs only.",
      "Ongoing: another +5% once the new rhythm feels natural. Stop when running is quiet and knees are grateful.",
    ],
    refs: [
      "Heiderscheit BC et al. J Orthop Sports Phys Ther 2011 — step rate manipulation & running mechanics.",
    ],
  },
  {
    id: "landing", title: "Land Soft: Jump, Sprint, Squat Without Wrecking Your Knees", icon: "arrow-down-to-line", category: "Form",
    goals: ["fitness", "strength", "muscle"], minutes: 2,
    keywords: ["knee pain", "jumping", "landing mechanics", "joint health"],
    summary: "Jumping and sprinting build serious athleticism — if you land like an athlete. Soft knees tracking over the toes, quiet feet, hips back. The research on ACL injury shows landing mechanics are trainable and matter, especially for anyone whose knees have a history of complaining.",
    why: [
      "Prospective research (Hewett and colleagues) identified knee-valgus and stiff, knee-dominant landing as strong predictors of ACL injury — mechanics are measurable risk.",
      "Prevention programs built on landing/cutting technique demonstrably reduce ACL injury rates in team-sport populations.",
      "Soft landings also keep you training: stiff landings concentrate load in joints; soft ones distribute it through muscles — which is where adaptation happens.",
    ],
    steps: [
      "Drill the pattern: jump from a small box, land and stick for 2 seconds — knees tracking over toes, chest over knees, silent landing.",
      "Progress box height only when landings stay silent and aligned.",
      "In workouts: jump squats, lunges, and skipping all follow the same rule — quiet feet, knees out, hips back.",
      "Fatigue breaks form: high-rep jumping after hard leg work is where mechanics die. Program jumps early in sessions.",
    ],
    mistakes: [
      "Knees caving inward on landing — the classic risk marker; cue 'spread the floor'.",
      "Loud, stiff, straight-legged landings — the joints are the shock absorbers; let them bend.",
      "Skipping the basics and going straight to plyo-box circus tricks. Sticking fundamentals first.",
    ],
    progression: [
      "Weeks 1–2: 3×5 low box landings, film from the front.",
      "Weeks 3–6: add height and small hops.",
      "Ongoing: before any jump-heavy session, one warm-up round of stick-landings. Cheap insurance.",
    ],
    refs: [
      "Hewett TE et al. Am J Sports Med 2005 — biomechanical predictors of ACL injury risk.",
      "Webster KE, Hewett TE. J Orthop Res 2018 — meta-analysis of ACL injury-reduction training programs.",
    ],
  },
];

export const POSTURE_TIPS: Tip[] = [
  {
    id: "sitting-breaks", title: "Sitting Kills Slowly — Move Every 30–60 Minutes", icon: "armchair", category: "Posture",
    goals: ["fitness", "fatloss", "looksmax"], minutes: 2,
    keywords: ["sitting", "sedentary", "desk breaks", "back pain", "movement"],
    summary: "Long uninterrupted sitting is a health risk even for people who train — but the data also show the risk shrinks dramatically with regular movement breaks and adequate daily activity. The fix is rhythm, not furniture: stand or walk for 2–5 minutes every half hour to hour.",
    why: [
      "The Ekelund meta-analysis of >1 million people found high daily activity (60–75 min) substantially attenuated the sitting-mortality link — movement is the antidote, posture-of-the-moment less so.",
      "Lab trials show breaking up sitting with short walks improves post-meal glucose and blood pressure versus continuous sitting.",
      "Sitting also shortens hip flexors and deadens glutes for hours — the postural half of the problem compounds the metabolic one.",
    ],
    steps: [
      "Set a recurring timer (or use an app/watch nudge): every 30–60 min, stand up and move 2–5 minutes.",
      "Convert seated calls to walking calls — most workdays hide 30–60 minutes of phone time.",
      "Drink from a small glass — the refill trip is a built-in break, plus hydration (see the water protocols).",
      "Training still matters: the desk job doesn't exempt you from the gym, and the gym doesn't exempt you from the breaks. Both, always.",
    ],
    mistakes: [
      "One 6 AM workout licensing 10 motionless hours — the attenuation isn't full; breaks are additive protection.",
      "Replacing sitting with all-day standing — standing still has its own complaints; the goal is variation.",
      "Waiting for motivation — the timer is the mechanism; motivation never shows up at minute 47 of an email.",
    ],
    progression: [
      "Week 1: install the timer; 2-minute breaks at whatever frequency you'll actually keep.",
      "Weeks 2–4: tighten to 30–45 min intervals; add walking calls.",
      "Ongoing: it becomes the rhythm you don't notice — which is the point.",
    ],
    refs: [
      "Ekelund U et al. Lancet 2016 — does physical activity attenuate the sitting-mortality link? meta-analysis.",
      "Dempsey PC et al. Diabetes Care 2016 — breaking up sitting & metabolic outcomes.",
    ],
  },
  {
    id: "sit-stand-honest", title: "Standing Desks: Honest Review", icon: "person-standing", category: "Posture",
    goals: ["fitness", "looksmax"], minutes: 2,
    keywords: ["standing desk", "sitting vs standing", "desk setup"],
    summary: "The honest read on standing desks: Cochrane found sit-stand desks reduce sitting time somewhat, with small, low-certainty effects on wellbeing — and standing still all day isn't the win either. Desks are one tool in the movement-break system (see the sitting-breaks protocol), not a health device.",
    why: [
      "The Cochrane review of sit-stand workstation studies found modest reductions in sitting (~30–60 min/day shorter-term) with unclear, small effects on health markers.",
      "Prolonged static standing carries its own discomfort and vein complaints — variation beats any single fixed position.",
      "The verified wins come from movement frequency, not furniture posture — any desk setup serving that goal is 'correct'.",
    ],
    steps: [
      "If you have one: alternate 30–60 min sitting / 15–30 min standing. Set a timer; the schedule is the product.",
      "Standing posture: weight even on both feet, knees soft, screen at eye level, elbows ~90°.",
      "No standing desk? Achieve the same with scheduled breaks + walking calls — cheaper and equally evidence-backed.",
      "Anti-fatigue mat and comfortable shoes if you stand; barefoot on hard floors for hours is a foot complaint generator.",
    ],
    mistakes: [
      "Buying the desk and calling the project done — a sit-stand desk you never switch is a very expensive sitting desk.",
      "All-day standing marathon on day one — feet and varicose complaints arrive by Thursday.",
      "Screen at lap height on a laptop — desk height doesn't fix a neck craned at 30° (see the phone-neck protocol).",
    ],
    progression: [
      "Week 1: sit/stand rotation on a timer, whatever your setup.",
      "Ongoing: audit monthly — are you actually alternating? The log decides.",
      "Ergonomics baseline: screen top at eye level, keyboard at elbow height, in both positions.",
    ],
    refs: [
      "Shrestha N et al. Cochrane Database Syst Rev 2018 — workplace interventions to reduce sitting.",
      "Ekelund U et al. Lancet 2016 — activity, sitting time & mortality meta-analysis.",
    ],
  },
  {
    id: "chin-tucks", title: "Chin Tucks: The Forward-Head Corrective", icon: "chevrons-up", category: "Posture",
    goals: ["looksmax", "fitness"], minutes: 2,
    keywords: ["chin tucks", "neck exercise", "forward head fix", "posture"],
    summary: "Hours of screens slide the head forward and down — adding visible neck load and strain. The deep-neck-flexor 'chin tuck' is the standard corrective with trial support: it retrains the muscles that stack the head back over the shoulders. Two minutes, twice daily.",
    why: [
      "Biomechanical modeling shows neck flexion angle multiplies effective head load on the cervical spine — from ~5kg upright to 27kg at 60° flexion (the famous Hansraj table).",
      "Trials of deep neck flexor training in forward-head posture report improved craniovertebral angle and reduced neck pain versus no exercise.",
      "A stacked head also reads as confident and alert in person — the fastest 'looksmaxx' in the library costs nothing.",
    ],
    steps: [
      "The move: glide your head straight back (make a double chin), eyes level. Hold 5s, release. That's one rep.",
      "Do 10 reps, 2–3× daily — anchored to habits: coffee refill, standing break (see sitting-breaks), pre-bed wind-down.",
      "Combine with the reverse: daily chest-doorway stretch (30s per side) — the front-of-neck/chest tissues need length as the neck gains strength.",
      "Ergonomics alongside: screen top at eye level, phone raised (see phone-neck protocol). Exercises fight; habits decide.",
    ],
    mistakes: [
      "Tilting the head down instead of gliding back — nose stays level; you're making a double chin, not bowing.",
      "Doing 200 reps once and never again — frequency beats volume for posture muscles.",
      "Expecting years of desk posture to fix in a week — think 8–12 weeks of daily reps, plus environmental fixes.",
    ],
    progression: [
      "Week 1: 10 chin tucks 2× daily + doorway chest stretch.",
      "Weeks 2–8: add holds (5→10s) and a third daily set.",
      "Ongoing: profile photo monthly — the head position drift back is visible and motivating.",
    ],
    refs: [
      "Harman K et al. J Manipulative Physiol Ther 2005 — exercise & cervicocranial posture: pilot trial.",
      "Hansraj KK. Surg Technol Int 2014 — cervical spine stresses by head posture/angle.",
    ],
  },
  {
    id: "phone-neck", title: "Raise The Phone, Save The Neck", icon: "monitor-smartphone", category: "Posture",
    goals: ["looksmax", "fitness"], minutes: 1,
    keywords: ["phone posture", "texting neck", "neck pain", "screen height"],
    summary: "The average person logs hours daily looking down at a phone held at chest height — the single biggest postural load of modern life. The fix is embarrassingly simple: raise the device to near eye level, and your neck stops training flexion 4 hours a day.",
    why: [
      "The Hansraj biomechanical analysis quantified it: 45–60° of neck flexion turns a 5kg head into 22–27kg of effective cervical load — sustained for hours daily.",
      "Research in young adults links heavy smartphone use with higher neck pain rates — the 'text neck' association, strongest in high-use users.",
      "Raised-device use pairs with chin tucks (see that protocol): environment removes the load, exercise re-stacks the alignment.",
    ],
    steps: [
      "Hold the phone at eye level, elbows supported where possible. Yes, it feels odd for 3 days; the neck adapts faster than the habit.",
      "Desk setup: laptop on a riser (or books) + separate keyboard — the screen decides neck angle, not the keyboard.",
      "Voice-to-text for long messages; the thumbs and neck both win.",
      "Set one recurring daily check: 'where is my screen right now?' — the awareness IS the protocol.",
    ],
    mistakes: [
      "Neck-down scrolling in bed for an hour — the worst position, sustained. Raise it or read on your back with the phone overhead-ish.",
      "Buying 'posture corrector' braces instead — passive braces don't build the muscles or fix the environment; they just fabric-massage your shoulders.",
      "Fixing the phone while ignoring the laptop — most people's worst flexion happens at the desk.",
    ],
    progression: [
      "Week 1: phone at eye level + laptop riser. That's the whole intervention.",
      "Ongoing: pair with the chin-tuck protocol for the retraining half.",
      "Monthly: side-profile photo — watch the head drift back over the shoulders.",
    ],
    refs: [
      "Hansraj KK. Surg Technol Int 2014 — assessment of stresses in the cervical spine by head position.",
      "Damasceno GM et al. Eur Spine J 2018 — text neck & neck pain in 18–21-year-olds.",
    ],
  },
  {
    id: "kyphosis", title: "Un-Slump The Upper Back: Strength Beats Stretching", icon: "stretch-horizontal", category: "Posture",
    goals: ["looksmax", "fitness", "strength"], minutes: 2,
    keywords: ["upper back", "hunched back", "thoracic", "slouching", "rounding"],
    summary: "Age- and desk-driven upper-back rounding (kyphosis) responds to training: trials show targeted back-extensor strengthening and posture-training (including yoga-based programs) measurably reduce hyperkyphosis. Rows and back extensions aren't just gym moves — they're posture surgery.",
    why: [
      "The Sinaki study found women with stronger back extensors had significantly less kyphosis progression over years — spinal extensor strength tracks upright posture.",
      "Katzman's trials showed yoga-based posture programs improved kyphosis angle in older adults — the curve is modifiable at any age.",
      "Training balance matters: most programs are push-dominant; rows, face pulls, and back extensions counteract the hours of flexed positions.",
    ],
    steps: [
      "Add 8–12 weekly sets of upper-back work: rows (any implement), face pulls, reverse flyes, back extensions.",
      "Train back extensions/holds directly: 2× weekly, 2–3 sets of 10 reps or 3×20s holds (prone, chest lifted).",
      "Posture resets hourly: stand tall, chest proud, shoulder blades back-and-down, 10 slow breaths (stack with sitting-breaks).",
      "Wall angel test monthly: back against wall, can your head, shoulders and wrists touch simultaneously? Track the improvement.",
    ],
    mistakes: [
      "Stretching the chest alone and skipping the strengthening — the evidence favors strength as the driver.",
      "Rows performed with the same rounded posture being 'fixed' — chest proud, pull to the ribs.",
      "Expecting structural changes to reverse fully — significant remodeling takes months; skeletal extremes may need professional input.",
    ],
    progression: [
      "Week 1: baseline wall-angel + profile photo.",
      "Weeks 2–12: back-extensor + row volume installed; retest monthly.",
      "Ongoing: keep 8+ upper-back sets weekly forever — it's the standing desk of muscle.",
    ],
    refs: [
      "Sinaki M et al. Mayo Clin Proc 2002 — back extensor strength & kyphosis.",
      "Katzman WB et al. Am J Phys Med Rehabil 2017 — yoga for hyperkyphosis: randomized trial.",
    ],
  },
];
