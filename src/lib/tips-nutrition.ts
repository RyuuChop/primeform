// ─────────────────────────────────────────────────────────────
//  PRIMEFORM — Nutrition Protocols (22)
// ─────────────────────────────────────────────────────────────
import type { Tip } from "./types";

export const NUTRITION_TIPS: Tip[] = [
  {
    id: "calories", title: "Calories Set The Ceiling — Quality Sets The Pace", icon: "calculator", category: "Nutrition",
    goals: ["muscle", "fatloss", "strength", "fitness", "looksmax"], minutes: 4,
    keywords: ["calories", "energy balance", "maintenance", "CICO"],
    summary: "No meal plan, superfood, or supplement beats energy balance. Estimate your maintenance, aim 300–500 kcal under it to lose fat or ~200–300 over it to build muscle, then spend those calories on minimally-processed food.",
    why: [
      "Controlled feeding studies show similar fat loss at the same calories regardless of diet type — Sacks et al. compared 4 popular macro splits and found no meaningful difference after 2 years.",
      "Metabolic ward data (Hall) confirm you cannot outrun intake: body fat tracks energy balance with remarkable precision.",
      "Food quality still matters for adherence, micronutrients, and hunger — but it works through calories, not instead of them.",
    ],
    steps: [
      "Estimate maintenance: bodyweight (kg) × 31–33 if fairly sedentary, × 35–38 if active. Adjust by real data after 2 weeks.",
      "Fat loss: subtract 300–500 kcal. Muscle gain: add 200–300 kcal and accept the scale rises slowly.",
      "Track honestly (app + food scale) for 2 weeks. Most first-time trackers underestimate intake by 20–40%.",
      "Recalculate every 5 kg of bodyweight change — your engine shrinks as you shrink.",
    ],
    mistakes: [
      "Cutting calories drastically Monday, then unconsciously eating them back by Friday — average intake decides everything.",
      "Trusting 'calories don't matter' diets or 'a calorie is a calorie' fanatics. Both miss the point: calories are the constraint, food choice is the lever.",
      "Weighing food cooked instead of raw (or ignoring oil) — cooking and oil change calories dramatically.",
    ],
    progression: [
      "Week 1–2: track without changing anything. Just see the truth.",
      "Week 3: set your target and hold it daily for 14 days.",
      "After 4 weeks: adjust ±100–200 kcal based on the trend line, not the daily readings.",
    ],
    refs: [
      "Sacks FM et al. N Engl J Med 2009 — POUNDS LOST: four diets, equal calories, equal loss.",
      "Hall KD, Guo J. Gastroenterology 2017 — Obesity Energetics: body weight regulation & diet composition.",
    ],
  },
  {
    id: "fiber", title: "Eat 25–38g Fiber Every Single Day", icon: "salad", category: "Nutrition",
    goals: ["fatloss", "fitness", "muscle", "looksmax"], minutes: 3,
    keywords: ["fiber", "gut health", "digestion", "vegetables"],
    summary: "Fiber is the cheapest appetite controller and health insurance you can buy. Most people eat half the target. Hit 14g per 1,000 kcal and you'll be fuller, more regular, and measurably lower your disease risk.",
    why: [
      "A landmark Lancet meta-analysis of 185 studies found 25–29g/day cuts all-cause mortality, heart disease, and type 2 diabetes risk by 15–30%.",
      "High-fiber foods stretch the stomach and slow gastric emptying — the same meal becomes more filling for fewer calories.",
      "Your gut bacteria ferment fiber into short-chain fatty acids that regulate appetite hormones and inflammation.",
    ],
    steps: [
      "Build each meal around one fiber anchor: beans, lentils, oats, berries, whole grains, or a big pile of vegetables.",
      "Swap white for whole: bread, rice, pasta — one swap per meal adds ~5g without changing the meal's shape.",
      "Add 1–2 tablespoons of chia or ground flaxseed to a shake or yogurt — that alone is 4–6g.",
      "Count fiber for 3 days. You'll instantly see where the gap is.",
    ],
    mistakes: [
      "Jumping from 10g to 35g overnight — you'll bloat and quit. Add 5g per week.",
      "Drinking juice and calling it fruit — the fiber is in the structure, not the sugar water.",
      "Fiber gummies and supplements over food — the benefit tracks whole-food structure, not just the fiber number.",
    ],
    progression: [
      "Week 1: measure your baseline. It's probably ~15g.",
      "Week 2–4: add one fiber anchor meal daily until you hit 25g+.",
      "Long-term: hold 25–38g. Consistency beats occasional perfect days.",
    ],
    safety: [
    "Ramp up slowly over 2–3 weeks. Jumping from low to high fiber overnight guarantees bloating, cramping, and gas.",
    "Raise your water along with fiber — fiber needs fluid to move things, or it can actually worsen constipation.",
    "If you have IBS or IBD, introduce fiber gently and consider a dietitian's help — aggressive fiber during a flare makes things worse.",
    "Fiber supplements (like psyllium) can slow medicine absorption — take medications 1 hour before or 2–4 hours after fiber doses.",
    ],
    refs: [
      "Reynolds A et al. Lancet 2019 — carbohydrate quality meta-analysis of 185 prospective studies & 58 trials.",
      "Howarth NC et al. Nutr Rev 2001 — dietary fiber & weight regulation.",
    ],
  },
  {
    id: "plants30", title: "Rotate 30 Different Plants Each Week", icon: "leaf", category: "Nutrition",
    goals: ["fitness", "looksmax", "fatloss"], minutes: 3,
    keywords: ["plant diversity", "gut microbiome", "fruits and vegetables", "variety"],
    summary: "Gut microbiome diversity tracks with the variety of plants you eat — not just total vegetables. The American Gut Project found 30+ different plant foods per week is the clearest behavioral marker of a healthy gut.",
    why: [
      "American Gut data (>10,000 participants) showed people eating 30+ plant types weekly had markedly more diverse microbiomes than those eating <10.",
      "Different fibers feed different bacterial species — monocropping your vegetables starves half your ecosystem.",
      "Greater microbiome diversity is associated with better metabolic markers and lower inflammation.",
    ],
    steps: [
      "Count everything plant-based: vegetables, fruits, grains, beans, nuts, seeds, herbs, spices. Diversity counts, not volume.",
      "Keep 3–4 frozen options (spinach, berries, edamame, mixed veg) so a diverse week doesn't require a big shop.",
      "Use the spice rack — herbs and spices count and each brings different polyphenols.",
      "Meal-prep with rotation: don't eat the same 5 meals all week. Batch two different recipes at once.",
    ],
    mistakes: [
      "Thinking quantity beats variety — 300g of the same broccoli is one plant, seven days a week.",
      "Counting white rice and white bread as 'plants' — refined grains lost the fiber and polyphenols that matter.",
      "Chasing exotic superfoods while ignoring cheap variety: frozen mixed vegetables beat one pricey smoothie.",
    ],
    progression: [
      "Week 1: tally your current number. Most people land at 10–15.",
      "Week 2–3: add 2–3 new plants per shop until you clear 30.",
      "Ongoing: rotate by season — the rotation itself is the habit.",
    ],
    refs: [
      "McDonald D et al. mBio 2018 — American Gut Project: plant diversity & microbiome diversity.",
      "Sonnenburg ED, Sonnenburg JL. EMBO Rep 2014 — starving our microbial selves: loss of fiber-degrading taxa.",
    ],
  },
  {
    id: "liquid-calories", title: "Liquid Calories Are The Silent Saboteur", icon: "glass-water", category: "Nutrition",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    keywords: ["soda", "juice", "sugary drinks", "liquid sugar"],
    summary: "Soda, juice, fancy coffee, and alcohol pour in hundreds of calories with almost zero satiety — your body barely registers them as food. Make water, coffee, and tea your default drinks and you remove an entire failure mode.",
    why: [
      "Meta-analyses consistently link sugar-sweetened beverage intake to weight gain — the strongest dietary link obesity research has found.",
      "Liquid calories bypass the stretch-and-satiety machinery of solid food: you eat the same meal on top of them.",
      "One daily 500ml soda is ~210 kcal — that's an entire fat-loss deficit cancelled before you chew anything.",
    ],
    steps: [
      "Audit every drink for one normal day — including milk, juice, and the splash of cream in coffee.",
      "Replace sweetened drinks with water, sparkling water, tea, or black coffee. Diet versions are an acceptable bridge (see the NNS protocol).",
      "Keep fruit whole: an orange fills you; orange juice is the sugar of 3 oranges with none of the brakes.",
      "Alcohol counts double — check the dedicated alcohol protocol before you pour.",
    ],
    mistakes: [
      "Fearing 'healthy' juices — a green smoothie bowl can out-calorie a burger with none of the fullness.",
      "Ignoring coffee-shop drinks: the daily large latte with syrup is a dessert with a lid.",
      "Switching to smoothies as a 'health move' — blended fruit removes the chewing that controls your intake.",
    ],
    progression: [
      "Week 1: cut sugary drinks entirely — the single highest-leverage swap in nutrition.",
      "Week 2: cut juice; keep fruit whole.",
      "Ongoing: treat any drink over ~50 kcal as an occasional dessert, not a beverage.",
    ],
    refs: [
      "Malik VS et al. Diabetes Care 2013 — sugar-sweetened beverages & weight gain meta-analysis.",
      "Zheng M et al. Br J Nutr 2015 — liquid versus solid calories & body weight.",
    ],
  },
  {
    id: "ultra-processed", title: "Cap Ultra-Processed Food At ~20% Of Intake", icon: "cookie", category: "Nutrition",
    goals: ["fatloss", "fitness", "muscle", "looksmax"], minutes: 3,
    keywords: ["processed food", "junk food", "packaged snacks", "additives"],
    summary: "Ultra-processed foods (chips, candy, soda, packaged snacks, most deli items) are engineered to be overeaten. In the first controlled trial ever run on this, people on an ultra-processed diet ate ~500 extra calories per day — same macros, same taste ratings.",
    why: [
      "Kevin Hall's NIH crossover RCT locked diets to identical protein, carbs, fat, sugar, and fiber — the ultra-processed arm still ate ~508 kcal more per day and gained fat in 2 weeks.",
      "Large cohort studies link high UPF intake to higher all-cause mortality and cardiometabolic disease.",
      "These foods combine hyper-palatable fat+sugar+salt with low chewing resistance and high calorie density — you finish them before satiety arrives.",
    ],
    steps: [
      "Define it simply: if it comes in plastic with >5 ingredients you wouldn't cook with, it's probably ultra-processed.",
      "Keep UPF out of the house by default. Willpower is a terrible gatekeeper; the kitchen is a better one.",
      "Allow 1–2 deliberate UPF servings daily (a protein bar, some chocolate) so you don't white-knuckle into a binge.",
      "Upgrade one staple at a time: cereal → oats, chips → popcorn, soda → sparkling water.",
    ],
    mistakes: [
      "Demonizing all processing — frozen vegetables, Greek yogurt, and whey are processed too. The target is hyper-palatable engineered snacks, not the freezer aisle.",
      "Buying 'healthy' UPF (protein cookies, granola) — the label changes, the engineering doesn't.",
      "Going 100% clean overnight and rebounding hard on day 9. Cap, don't ban.",
    ],
    progression: [
      "Week 1: count your UPF servings honestly.",
      "Week 2–3: shrink the count by one per day until ≤2.",
      "Ongoing: keep 80%+ of calories from whole or minimally-processed food without perfectionism.",
    ],
    refs: [
      "Hall KD et al. Cell Metab 2019 — inpatient RCT: ultra-processed vs unprocessed diets, matched nutrients.",
      "Schnabel LM et al. JAMA Intern Med 2019 — ultra-processed food intake & all-cause mortality (NutriNet-Santé).",
    ],
  },
  {
    id: "energy-density", title: "Eat Big By Eating Light (Energy Density)", icon: "soup", category: "Nutrition",
    goals: ["fatloss", "fitness"], minutes: 3,
    keywords: ["volume eating", "low calorie foods", "satiety", "portion size"],
    summary: "You get full on the weight of food, not its calories. Vegetables, fruit, broth soups, and lean proteins carry massive volume for few calories; oil, nuts, and cheese carry huge calories for tiny volume. Master the ratio and you'll never diet hungry again.",
    why: [
      "Rolls' laboratory studies show people eat a remarkably constant weight of food daily — lower the calorie density and intake falls while fullness holds.",
      "Adding water-rich vegetables or broth to the same meal reliably cuts total calories eaten by 20–30% without increasing hunger.",
      "A gram of oil is 9 kcal; a gram of most vegetables is under 0.5. Same stomach space, 18× the energy.",
    ],
    steps: [
      "Structure every plate: half non-starchy vegetables/salad, a palm of protein, a cupped handful of starch, a thumb of fat.",
      "Start lunch and dinner with broth soup or a large salad — pre-loading shaves the rest of the meal.",
      "Cook with spray or broth instead of free-pouring oil — one tablespoon of oil is 120 invisible calories.",
      "Make fruit your dessert default; make nuts and cheese measured garnishes, not snacks from the bag.",
    ],
    mistakes: [
      "Drowning salads in dressing — one creamy ladle can triple a 100-calorie salad.",
      "Treating 'healthy fats' as unlimited — olive oil, nuts, and avocado are nutritious AND calorie bombs.",
      "Drinking calories to feel full — volume works with structure and fiber, not juice.",
    ],
    progression: [
      "Week 1: rebuild dinner to the half-veg template daily.",
      "Week 2: add the soup/salad starter at lunch too.",
      "Ongoing: keep calorie density low as the default; high-density foods become deliberate, measured choices.",
    ],
    refs: [
      "Ello-Martin JA et al. Am J Clin Nutr 2005 — dietary energy density & weight management.",
      "Rolls BJ et al. Am J Clin Nutr 1999 — water-rich foods reduce energy intake.",
    ],
  },
  {
    id: "eat-slow", title: "Stretch Every Meal To 20 Minutes", icon: "utensils", category: "Nutrition",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    keywords: ["eating speed", "slow eating", "satiety signals", "mindful meals"],
    summary: "Your brain lags your stomach by ~20 minutes. Eat faster than that and you'll finish 200–500 extra calories before the 'full' signal arrives. Slowing down is free portion control that requires zero discipline after the first bite.",
    why: [
      "Trials show slow eating reduces total intake per meal and increases post-meal satiety — Andrade's work found meaningful calorie reductions just from pace instructions.",
      "A meta-analysis links fast eating to higher body weight and metabolic syndrome across populations.",
      "Chewing thoroughly also improves the mechanical digestion your stomach doesn't have to compensate for.",
    ],
    steps: [
      "Put the fork down between bites. It sounds stupid; it works like a governor.",
      "Set a 20-minute timer for lunch and dinner. The meal ends at the bell, not when the plate is empty.",
      "Add structure: one glass of water mid-meal, conversation if you eat with people.",
      "Never eat in front of a screen — pace collapses when attention is elsewhere (see the distracted-eating protocol).",
    ],
    mistakes: [
      "Skipping meals then inhaling everything at 9 PM — extreme hunger makes speed physiologically inevitable.",
      "Drinking your meals to 'save time' — see the liquid-calories protocol.",
      "Expecting this to feel natural in week one. It's a motor habit; retraining takes a month.",
    ],
    progression: [
      "Week 1: apply at dinner only — the meal with the most control.",
      "Week 2: extend to lunch.",
      "Week 4+: the pace becomes your default; keep the screen rule permanently.",
    ],
    refs: [
      "Andrade AM et al. J Am Diet Assoc 2008 — eating slowly reduces energy intake within a meal.",
      "Ohkuma T et al. Int J Obes 2015 — eating rate meta-analysis & body weight.",
    ],
  },
  {
    id: "protein-breakfast", title: "Front-Load Protein At Breakfast", icon: "egg", category: "Nutrition",
    goals: ["muscle", "fatloss", "strength"], minutes: 2,
    keywords: ["breakfast", "protein first", "morning meal", "appetite control"],
    summary: "A 30–40g protein breakfast crushes mid-morning cravings, steadies energy, and makes your daily protein target nearly automatic by 9 AM. Cereal-and-toast breakfasts do the opposite: spike, crash, snack.",
    why: [
      "RCTs show high-protein breakfasts increase fullness and reduce evening snacking versus low-protein starts (Leidy's trials in teens and adults).",
      "Breakfast protein is 'wasted' on most people — 10g from cereal does almost nothing for muscle protein synthesis, which responds to ~0.4g/kg doses.",
      "Getting a third of your protein before work means lunch and dinner only need two normal-sized anchors.",
    ],
    steps: [
      "Rotate 3 defaults you can make half-asleep: Greek yogurt + berries + granola (~35g), 3-egg omelet + cheese (~30g), or a whey shake + banana + oat bowl (~40g).",
      "Prep the night before (overnight oats, boiled eggs) so morning-you doesn't negotiate.",
      "If you train in the morning, that's your post-workout meal — same 30–40g target.",
      "No appetite in the morning? Shrink breakfast for a week — a shake counts. Appetite adapts after 7–10 days.",
    ],
    mistakes: [
      "Believing oatmeal + fruit is a protein breakfast — it's a carb breakfast wearing a health halo.",
      "Juice + toast: the classic 8g-protein crash combo.",
      "Skipping breakfast entirely then eating 70% of your calories after 6 PM — hunger then runs the evening.",
    ],
    progression: [
      "Week 1: hit 25g+ protein before 10 AM, 5 days.",
      "Week 2: raise to 30–40g daily.",
      "Ongoing: keep 2–3 defaults in rotation; boredom is the #1 breakfast killer.",
    ],
    refs: [
      "Leidy HJ et al. Am J Clin Nutr 2015 — protein breakfasts, satiety & weight management.",
      "Hoertel HA et al. Nutr J 2014 — randomized crossover trial of breakfast protein on appetite.",
    ],
  },
  {
    id: "meal-plan", title: "Plan Tomorrow's Meals Tonight", icon: "notebook-pen", category: "Nutrition",
    goals: ["fatloss", "muscle", "fitness", "strength"], minutes: 2,
    keywords: ["meal prep", "planning meals", "next day diet", "food decisions"],
    summary: "Every 'what's for dinner?' decision made while hungry is a decision your cravings make. A 3-minute evening plan removes hundreds of small choices from your hungriest, weakest hours.",
    why: [
      "Research on meal planning shows planners have higher diet quality and lower odds of obesity — the decision structure does the work.",
      "Self-control is worst exactly when food decisions happen: late, tired, hungry. Plans move decisions to when you're calm.",
      "Planned meals cost less and waste less — the financial win funds better ingredients.",
    ],
    steps: [
      "Each evening, write tomorrow's 3 meals + snack. 3 minutes. Specific: 'chicken, rice, broccoli', not 'something healthy'.",
      "Keep a list of 7 dinners you can cook on autopilot. Rotate; never improvise from scratch after a long day.",
      "Batch-prep one protein (tray of chicken thighs, pot of lentils) on Sunday — a prepared protein makes any plan 10× easier to follow.",
      "If the plan breaks, use the fallback: the meal you always have ingredients for (eggs + rice + frozen veg).",
    ],
    mistakes: [
      "Planning 7 perfect days that ignore your real life. Plan the schedule you have, including eating out.",
      "New recipes every night — novelty is for weekends; repetition is for weeknights.",
      "Planning in the morning — the window is the night before, when hunger has no vote.",
    ],
    progression: [
      "Week 1: plan dinners only.",
      "Week 2: plan all meals + prep one protein weekly.",
      "Ongoing: keep the fallback meal stocked. It's your insurance policy.",
    ],
    refs: [
      "Ducrot P et al. Int J Behav Nutr Phys Act 2017 — meal planning & diet quality/weight status.",
      "Michie S et al. Health Psychol Rev 2009 — self-regulation techniques in behavior change.",
    ],
  },
  {
    id: "grocery-env", title: "Engineer The Cart: Shop Fed, List In Hand", icon: "shopping-basket", category: "Nutrition",
    goals: ["fatloss", "fitness", "muscle"], minutes: 2,
    keywords: ["shopping list", "supermarket", "grocery shopping", "environment design"],
    summary: "Your kitchen determines your diet more than your willpower does. The grocery store is where you actually set your diet — walk it fed, with a list, and buy what the plan needs, not what the aisle suggests.",
    why: [
      "Food environment research consistently shows availability drives consumption: what's in the house gets eaten, what isn't, doesn't.",
      "Hunger at point of purchase measurably shifts choices toward high-calorie, immediate-gratification items.",
      "A pre-committed list converts shopping from a hundred temptation decisions into one decision made earlier.",
    ],
    steps: [
      "Shop after a meal, never hungry. If you must go hungry, buy nothing that isn't on the list.",
      "Build the list from your meal plan (see meal-plan protocol) — same items, same aisles, every week.",
      "Do the perimeter first: produce, meat, dairy, eggs. The center aisles hold the engineered traps.",
      "One 'fun item' max per trip, chosen deliberately. Total bans create smugglers.",
    ],
    mistakes: [
      "'It's for the kids/family' snacks that only you end up eating. If no one should eat it, don't buy it.",
      "Shopping without the plan — the list is the plan, translated.",
      "Falling for health-halo marketing: 'natural', 'keto', 'protein-added' labels don't change the engineering.",
    ],
    progression: [
      "Week 1: never shop hungry. Non-negotiable.",
      "Week 2: full list, perimeter-first route.",
      "Ongoing: audit the cart monthly — it should look like your plan written in food.",
    ],
    refs: [
      "Larson NI, Story MT, Nelson MC. Am J Prev Med 2009 — neighborhood food environments & diet.",
      "Michie S et al. Health Psychol Rev 2009 — environment restructuring in behavior change taxonomies.",
    ],
  },
  {
    id: "cook-home", title: "Cook 5+ Meals A Week At Home", icon: "cooking-pot", category: "Nutrition",
    goals: ["fatloss", "fitness", "muscle", "looksmax", "strength"], minutes: 2,
    keywords: ["home cooking", "cooking at home", "takeout", "restaurant meals"],
    summary: "Restaurant and takeaway food is calibrated to be irresistible: more oil, more salt, more sugar, bigger portions. People who cook most of their meals eat better without trying — the kitchen is the highest-leverage 'diet' that isn't a diet.",
    why: [
      "Analyses of tens of thousands of adults show frequent home cooking is associated with better diet quality, lower body fat, and lower food spending.",
      "You control oil, salt, sugar, and portion size — the four dials restaurants set against you.",
      "Cooking builds the skill that makes every other nutrition protocol actually executable.",
    ],
    steps: [
      "Own 5 recipes you can cook in ≤20 minutes: one pan protein, one pot grain, frozen veg. That's 90% of weeknights.",
      "Batch twice weekly: cook double portions, eat the second half for lunch.",
      "Equip the minimum: one sharp knife, one big pan, one sheet tray, rice cooker if grains are your staple.",
      "Track a simple streak: 5+ home meals per week. Eating out stays — but becomes an event, not a default.",
    ],
    mistakes: [
      "Starting with ambitious 15-ingredient recipes and quitting by Thursday. Boring and repeatable beats impressive and rare.",
      "Confusing 'homemade' with fried and creamy — technique matters as much as location.",
      "Letting one busy week erase the habit. One cooked meal still counts; keep the floor at 3.",
    ],
    progression: [
      "Week 1: count your current home meals honestly.",
      "Week 2–4: add one home meal per week until 5+.",
      "Ongoing: expand the 5-recipe list to 10. Rotation kills boredom.",
    ],
    refs: [
      "Wolfson JA, Bleich SN. Public Health Nutr 2015 — cooking frequency & diet quality/health markers.",
      "Mills S et al. Public Health Nutr 2017 — frequency of cooking & nutritional outcomes meta-analysis.",
    ],
  },
  {
    id: "restaurant-strategy", title: "Decode The Menu Before You're Seated", icon: "pizza", category: "Nutrition",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    keywords: ["eating out", "menu choices", "dining", "restaurant plan"],
    summary: "A single restaurant entrée routinely carries 1,000–2,000 calories before bread, drinks, or dessert. You don't need to skip restaurants — you need a script: decide what you'll order before hunger and menus do the deciding.",
    why: [
      "Lab analyses of chain and independent restaurant meals consistently find single dishes exceeding full daily energy needs — the average plate is far above home equivalents.",
      "Menu engineering works against you: descriptive names, 'healthy' sections, and placement steer you toward high-margin, high-calorie items.",
      "Decision-before-exposure is a validated self-control strategy: you choose while rational, not while starving.",
    ],
    steps: [
      "Check the menu online before leaving. Pick protein + vegetable-forward options; lock the choice in.",
      "Default order: grilled/roasted protein, sauce on the side, swap fries for vegetables or salad.",
      "Eat a protein snack before going out — arriving ravenous guarantees an entrée + appetizers.",
      "Decide drinks and dessert policy in advance: e.g., 'wine, no dessert' or 'share one dessert'. Pre-commit, don't negotiate at the table.",
    ],
    mistakes: [
      "'Being good' all day to earn a 2,000-calorie blowout — that's a binge with extra steps.",
      "Sauce and dressing on the side 'cancelled' — it only works if you actually use half.",
      "Alcohol + bread + entrée + dessert: each seems minor; the stack is the day's entire deficit.",
    ],
    progression: [
      "Week 1: use the pre-menu rule at your next restaurant visit.",
      "Week 2+: default order set — most people can reuse 2–3 orders at their usual places.",
      "Ongoing: enjoy restaurants; they're part of life. The script makes them compatible with the goal.",
    ],
    refs: [
      "Urban LE et al. J Acad Nutr Diet 2016 — energy content of restaurant meals vs requirements.",
      "Wu HW, Sturm R. J Acad Nutr Diet 2013 — calorie content of chain restaurant menu items.",
    ],
  },
  {
    id: "alcohol", title: "Alcohol: The Closer To Zero The Better", icon: "wine", category: "Nutrition",
    goals: ["fatloss", "fitness", "muscle", "looksmax", "strength"], minutes: 3,
    keywords: ["drinking", "beer", "wine", "alcohol health"],
    summary: "Alcohol is 7 kcal/g, blunts fat oxidation for hours, fragments deep sleep, and (beyond light intake) shows no health benefit. If results matter, treat alcohol as an occasional deliberate choice — not a weekly default.",
    why: [
      "Meta-analyses link regular alcohol intake to weight gain, and alcohol temporarily suppresses fat oxidation — your body burns the ethanol first.",
      "Even moderate evening drinking measurably fragments REM and deep sleep — you pay the next day in training and appetite (see alcohol-sleep protocol).",
      "The 'J-curve' of light drinking benefits has not survived modern cohort corrections — most current evidence puts the safe floor near zero.",
    ],
    steps: [
      "Audit honestly: count drinks for a normal week, including the 'just two' that become four.",
      "Set a hard weekly number you choose sober (e.g., ≤2 drinks/week), not a nightly negotiation.",
      "Deploy substitution: sparkling water with lime in the same glass. The ritual is half the craving.",
      "Never drink within 3 hours of bed on training days — the sleep damage eats tomorrow's session.",
    ],
    mistakes: [
      "Trading dinner calories for drinks — you get the calories AND the appetite.",
      "Believing red wine is medicine — the polyphenol story doesn't survive the dose that 'helps'.",
      "Day-of training drinking: post-match beers blunt the recovery you just earned.",
    ],
    progression: [
      "Week 1: count, don't change.",
      "Week 2–4: cut by half using substitution.",
      "Long-term: a deliberate 1–2/week cap. If cutting feels impossible, that's data — treat it seriously.",
    ],
    safety: [
    "Alcohol stacks dangerously with medications — sedatives, sleeping pills, painkillers (especially paracetamol/acetaminophen), and most prescription drugs. Ask your pharmacist or doctor about YOUR medications.",
    "Never drink and drive, and never operate machinery — even small amounts measurably slow reaction time and judgment.",
    "Zero during pregnancy or breastfeeding — there is no known safe dose.",
    "If you are a heavy daily drinker, do NOT stop cold turkey on your own — alcohol withdrawal can cause seizures and can be life-threatening; quitting needs medical supervision. Less is always better, and zero is the healthiest goal.",
    ],
    refs: [
      "Sayon-Orea C et al. Nutr Rev 2011 — alcohol intake & weight gain meta-analysis.",
      "Ebrahim IO et al. Alcohol Clin Exp Res 2013 — alcohol & sleep meta-analysis.",
    ],
  },
  {
    id: "sodium", title: "Watch Sodium — Mostly It Hides In Packages", icon: "droplets", category: "Nutrition",
    goals: ["fitness", "looksmax", "fatloss"], minutes: 2,
    keywords: ["salt", "blood pressure", "processed food", "hidden sodium"],
    summary: "High blood pressure starts in the kitchen decades before the diagnosis. The salt shaker isn't the enemy — bread, processed meat, sauces, and snacks deliver most of the ~9–12g/day most people eat. Target under 5g salt (2g sodium).",
    why: [
      "A BMJ meta-analysis links high salt intake to significantly higher stroke and cardiovascular disease risk — the dose-response is linear with no threshold.",
      "WHO guidance now targets <5g salt/day; most populations eat double, with ~75% coming from processed and restaurant food.",
      "Cutting sodium also visibly de-puffs — water follows sodium, especially around the face and eyes.",
    ],
    steps: [
      "Read labels on your top 10 packaged foods. Salt (g) × 1000 ÷ 40 = sodium (mg)-ish. Compare brands; pick lower.",
      "Season with acid (lemon, vinegar), heat (chili), and herbs first — salt last, at the table where you control it.",
      "Watch the big five: bread, processed meat, cheese, sauces/condiments, instant noodles.",
      "If your face puffs after takeaway, that's the sodium — drink water and expect the mirror to recover in 48h.",
    ],
    mistakes: [
      "Salting your home cooking blindly while the real load is the takeaway on Friday.",
      "Fearing salt during heavy training — heavy sweaters may need MORE sodium. Context matters.",
      "Sea salt/Himalayan salt as 'health upgrades' — sodium is sodium; the minerals are garnish-level.",
    ],
    progression: [
      "Week 1: label-audit your 10 most-bought packaged items.",
      "Week 2–3: swap the two worst offenders for lower-salt versions.",
      "Ongoing: season at the table, cook with acid and herbs, keep takeaway occasional.",
    ],
    safety: [
    "If you have heart failure, kidney disease, or take blood-pressure medication, your personal sodium target is set by your doctor — not by general guidelines.",
    "Be careful with potassium-based salt substitutes — they are dangerous for people on certain BP medications (ACE inhibitors, ARBs, potassium-sparing diuretics). Ask before switching.",
    "If you sweat heavily in heat, cutting sodium hard can backfire — your needs go up, not down.",
    "Most sodium hides in packaged food and restaurant meals, not your salt shaker — cooking at home is how you actually control it.",
    ],
    refs: [
      "Strazzullo P et al. BMJ 2009 — salt intake, stroke & cardiovascular disease meta-analysis.",
      "WHO Sodium Reduction Guideline 2023 — <2g sodium (5g salt) daily target.",
    ],
  },
  {
    id: "potassium", title: "Load Potassium-Rich Foods Daily", icon: "banana", category: "Nutrition",
    goals: ["fitness", "looksmax", "muscle"], minutes: 2,
    keywords: ["potassium foods", "bananas", "electrolytes", "blood pressure"],
    summary: "Blood pressure is a sodium-potassium story, and most people fail both halves. Potassium-rich foods — beans, potatoes, bananas, spinach, yogurt — actively counter sodium's pressure effect and support muscle function.",
    why: [
      "BMJ meta-analysis: increased potassium intake lowers blood pressure, with the strongest effects alongside higher sodium — food potassium beats supplements for safety.",
      "Cohort data show the sodium-to-potassium ratio predicts cardiovascular outcomes better than either mineral alone.",
      "Most adults eat roughly half the WHO-recommended 3,500mg+ of potassium daily — and whole food sources come with the fiber and micronutrients supplements lack.",
    ],
    steps: [
      "Daily anchors: one potato or beans, one banana or citrus, one big handful of leafy greens, some yogurt.",
      "Swap one refined side per day for a potassium source — roasted potato instead of fries-adjacent starch, beans into salads.",
      "Don't supplement blind: potassium pills are tightly dosed for safety reasons; food is the route.",
      "If you use a salt substitute (KCl), check with a doctor first if you have kidney issues or take BP medication.",
    ],
    mistakes: [
      "Relying on bananas alone — one banana is ~420mg; you need ~3,500mg. Beans and potatoes out-deliver.",
      "Boiling vegetables to death — potassium leaches into the water you pour away. Steam, roast, or use the water.",
      "Assuming you're the exception — almost everyone under-eats potassium unless they deliberately eat plants and beans.",
    ],
    progression: [
      "Week 1: add one potassium anchor daily.",
      "Week 2: hit two anchors daily (beans + greens + fruit covers it).",
      "Ongoing: keep the default plate plant-heavy; the ratio fixes itself.",
    ],
    safety: [
    "If you have kidney disease or take BP medications (ACE inhibitors, ARBs, potassium-sparing diuretics), do NOT load potassium foods or take supplements without your doctor — excess potassium can trigger dangerous heart-rhythm problems.",
    "Get potassium from food, not pills. Food is safe and self-limiting; supplements are where people get into trouble.",
    "Potassium-based salt substitutes are concentrated potassium — the same warning applies to them.",
    ],
    refs: [
      "Aburto NJ et al. BMJ 2013 — potassium intake, blood pressure & stroke meta-analysis.",
      "Yang Q et al. Arch Intern Med 2011 — sodium & potassium intake and mortality (US cohort).",
    ],
  },
  {
    id: "whole-grains", title: "Swap Refined For Whole Grains — Same Meals, Better Engine", icon: "wheat", category: "Nutrition",
    goals: ["fitness", "fatloss", "muscle"], minutes: 2,
    keywords: ["whole grains", "brown rice", "oats", "bread swap"],
    summary: "You don't need to fear carbs — you need to respect their packaging. Whole grains carry the bran and germ: more fiber, more micronutrients, slower absorption. The meal looks identical; the metabolic response doesn't.",
    why: [
      "A BMJ meta-analysis of 45 studies found 90g/day of whole grains (about 3 servings) cuts heart disease, cancer, and all-cause mortality risk by ~15–20%.",
      "Whole grains blunt the glucose spike versus refined versions — steadier energy, less rebound hunger.",
      "The fiber, magnesium, and B-vitamins lost in refining are precisely the ones training bodies burn through fastest.",
    ],
    steps: [
      "Run the one-swap rule: white bread → whole grain, white rice → brown/basin rice where you can, white pasta → whole-wheat.",
      "Check labels: 'whole grain' or 'whole wheat' first in the ingredient list, not 'wheat flour' marketing.",
      "Oats are the easiest win — steel-cut or rolled, not instant sachets loaded with sugar.",
      "Portion still matters: whole grain ≠ unlimited grain. One cupped handful per meal.",
    ],
    mistakes: [
      "'Multigrain' and 'made with whole grain' labels — two refined grains in a trench coat.",
      "Assuming whole grain means low-calorie — it means better-sourced calories.",
      "All-or-nothing: an 80/20 whole-grain kitchen is a sustainable win; 100% purity collapses.",
    ],
    progression: [
      "Week 1: swap breakfast to oats or whole-grain bread.",
      "Week 2: swap one more staple (rice or pasta).",
      "Ongoing: keep 2–3 whole-grain staples as house defaults.",
    ],
    refs: [
      "Aune D et al. BMJ 2016 — whole grain intake & cardiovascular/cancer/all-cause mortality meta-analysis.",
      "Reynolds A et al. Lancet 2019 — carbohydrate quality & human health meta-analysis.",
    ],
  },
  {
    id: "fish", title: "Oily Fish Twice A Week — Or Plan B", icon: "fish", category: "Nutrition",
    goals: ["fitness", "looksmax", "muscle", "strength"], minutes: 2,
    keywords: ["fish", "salmon", "sardines", "omega-3", "mercury"],
    summary: "EPA and DHA — the omega-3s that actually matter — come almost exclusively from oily fish. Two servings a week is the evidence-based dose for heart, brain, and inflammation support. Salmon, sardines, mackerel, herring.",
    why: [
      "Cohort and trial data associate regular oily fish intake with lower cardiovascular mortality — the effect tracks the long-chain omega-3 content, not fish per se.",
      "DHA is a structural component of brain and retina; intake tracks with cognitive maintenance in aging populations.",
      "Sardines and mackerel deliver protein + vitamin D + calcium (sardine bones) — the most nutrient-dense per rupee/dollar of the seafood aisle.",
    ],
    steps: [
      "Schedule it: fish twice weekly on fixed days (e.g., Tuesday salmon, Friday sardines). Decided calendar beats vague intention.",
      "Canned counts — sardines on toast or in a salad is a 3-minute meal.",
      "Vegan/plan B: algae-oil EPA/DHA capsules (the only plant source of the real thing). Flax/chia give ALA, which converts at only a few percent.",
      "Prefer smaller fish (sardines, mackerel) over large predators (tuna) to keep mercury low.",
    ],
    mistakes: [
      "Fried fish from the shop — the coating and oil change the story completely.",
      "Flax as a 'real' omega-3 source for DHA/EPA — conversion to the long-chain forms is poor and varies.",
      "Skipping fish entirely and skipping plan B too — then wondering why the omega-3 protocol is moot.",
    ],
    progression: [
      "Week 1: one oily-fish serving.",
      "Week 2: two servings on fixed days.",
      "Ongoing: keep the calendar slots; rotate 3–4 species for variety and contaminant spread.",
    ],
    safety: [
    "If pregnant, trying to conceive, or feeding young children: stick to low-mercury fish (salmon, sardines, trout) and strictly limit high-mercury ones (shark, swordfish, king mackerel, bigeye tuna).",
    "Fish allergy? Skip fish entirely and get your EPA/DHA from algae oil — same omega-3s, no allergy risk.",
    "Avoid raw or undercooked fish during pregnancy or if your immune system is weakened.",
    ],
    refs: [
      "Mozaffarian D, Rimm EB. JAMA 2006 — fish intake, contaminants & human health.",
      "Swanson D et al. Crit Rev Food Sci Nutr 2012 — omega-3 EPA/DHA biology & sources.",
    ],
  },
  {
    id: "nuts", title: "One Daily Handful Of Nuts (30g, Measured)", icon: "nut", category: "Nutrition",
    goals: ["fitness", "muscle", "fatloss", "looksmax"], minutes: 2,
    keywords: ["nuts", "almonds", "walnuts", "healthy fats", "snack"],
    summary: "Nuts are the rare snack where the evidence and the snack food agree. A measured 30g daily handful is linked to lower mortality, better cholesterol, and better satiety — but 'handful from the bag' is 800 calories waiting to happen. Measure once, enjoy daily.",
    why: [
      "A NEJM analysis of 120,000+ people found daily nut eaters were less likely to die over 30 years — independent of other diet factors.",
      "BMJ meta-analyses link nut intake to reduced cardiovascular disease; the fat matrix is mostly unsaturated.",
      "Despite being calorie-dense, nuts show poor calorie absorption (almond cell walls lock away ~20% of their energy) and high satiety.",
    ],
    steps: [
      "Weigh 30g once into a small container — learn what it looks like, then eyeball forever after.",
      "Prefer raw or dry-roasted, unsalted. Flavored = engineered snack territory.",
      "Rotate: almonds, walnuts (omega-3 ALA), pistachios, peanuts (budget protein).",
      "Deploy strategically: the 4 PM hunger slot, or chopped over yogurt/oats instead of granola.",
    ],
    mistakes: [
      "Bag-handfuls. 30g is a snack; 150g is a second dinner of fat calories.",
      "Honey-roasted/salted trail mixes — candy wearing nuts.",
      "Fearing the fat — the epidemiology is unambiguous at moderate doses.",
    ],
    progression: [
      "Week 1: buy unsalted, weigh one serving daily.",
      "Week 2: install at the hunger hour that used to find biscuits.",
      "Ongoing: keep it 30g; if weight stalls or drops too fast, it's an easy +200 quality calories.",
    ],
    safety: [
    "Nut allergy — even a mild one — means no nuts at all, and check labels for cross-contamination warnings.",
    "Measure the 30 g. Nuts are dense in calories, and 'a bowl' instead of 'a handful' can quietly double your intake.",
    "Choose plain, unsalted nuts — salted and flavored versions undo the heart benefit.",
    "Whole nuts are a choking hazard for children under ~4–5 years — use nut butters instead.",
    ],
    refs: [
      "Bao Y et al. N Engl J Med 2013 — nut consumption & total/m cause-specific mortality.",
      "Aune D et al. BMC Med 2016 — nut consumption & risk of cardiovascular disease meta-analysis.",
    ],
  },
  {
    id: "added-sugar", title: "Keep Added Sugar Under 10% Of Calories", icon: "candy", category: "Nutrition",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    keywords: ["sugar", "sweets", "dessert", "hidden sugar", "daily limit"],
    summary: "Sugar isn't poison — it's empty weight-gain leverage. WHO advises under 10% of calories from free sugars (ideally 5%): about 50g, ideally 25g. One soda plus one dessert clears both limits. Spend the budget deliberately.",
    why: [
      "BMJ meta-analysis: reducing free-sugar intake is associated with lower weight; increasing it, higher — via simple calorie displacement.",
      "WHO's 2015 guideline sets <10% (ideally <5%) of energy from free sugars based on dental and obesity evidence.",
      "Sugar adds calories without satiety, protein, or micronutrients — the definition of a bad deal in a deficit.",
    ],
    steps: [
      "Find your hidden sources: sauces (ketchup ~25% sugar), flavored yogurt, cereals, 'health' bars, coffee drinks.",
      "Swap flavored yogurt for plain + fruit — you'll cut ~15g sugar per serving without missing it after a week.",
      "Keep dessert deliberate: one chosen portion after a protein meal, not a grazed packet in front of a screen.",
      "Learn the aliases: glucose-fructose syrup, dextrose, maltose, 'fruit juice concentrate' are all added sugar.",
    ],
    mistakes: [
      "Fearing fruit — whole fruit's fiber and structure make it a non-issue. The target is added sugar.",
      "Demonizing one item (cake at a birthday) while ignoring daily liquid sugar — averages, not anecdotes.",
      "Swapping to 'sugar-free' junk and eating twice as much. The dose is still the dose.",
    ],
    progression: [
      "Week 1: count added sugar honestly for 3 days.",
      "Week 2–3: cut the single biggest source first.",
      "Ongoing: hold <10% of calories; savor the occasional deliberate dessert guilt-free.",
    ],
    refs: [
      "Te Morenga L et al. BMJ 2013 — dietary sugars & body weight meta-analysis.",
      "WHO Guideline: Sugars Intake 2015 — <10% energy from free sugars.",
    ],
  },
  {
    id: "adaptive-thermo", title: "Your Body Fights Fat Loss — Budget For It", icon: "gauge", category: "Nutrition",
    goals: ["fatloss"], minutes: 3,
    keywords: ["metabolic adaptation", "plateau", "starvation mode", "thrifty metabolism"],
    summary: "As you lose weight, your metabolism adapts: a smaller body burns less, and hunger hormones climb while fullness hormones fall. This is physiology, not failure. Expect it, measure it, and counter it with protein, lifting, and planned diet breaks.",
    why: [
      "Classic metabolic-ward work (Leibel) shows every 10% drop in bodyweight triggers a ~10–15% larger-than-expected drop in energy expenditure — the body defends its set point.",
      "Adaptive thermogenesis persists for years after weight loss — maintenance is an active skill, not a finish line.",
      "Resistance training and high protein specifically preserve the lean mass that most of the burn follows.",
    ],
    steps: [
      "Recalculate targets every 5kg down. The 500-kcal deficit you started with quietly becomes 300, then 200.",
      "Keep protein at 1.8–2.2g/kg and keep lifting heavy through the entire cut — non-negotiables for protecting metabolic mass.",
      "Watch NEAT shrink (you unconsciously move less in a deficit) — keep steps non-negotiable daily.",
      "Use the plateau protocol: audit intake for a week before assuming 'metabolic damage'. Measurement errors cause most stalls.",
    ],
    mistakes: [
      "Panicking at week 3 and slashing calories again — stacking deficits crushes training and muscle.",
      "Believing in 'starvation mode' making fat loss impossible — adaptation is real (~10–15%), not absolute.",
      "Stopping tracking after results start — adaptation punishes the unmeasured.",
    ],
    progression: [
      "Set intake by current weight, not starting weight.",
      "Every 8–10 weeks of deficit: take a 1–2 week maintenance break (see diet-break protocol).",
      "Judge progress on 4-week trend lines only.",
    ],
    refs: [
      "Leibel RL et al. N Engl J Med 1995 — changes in energy expenditure from weight change.",
      "Rosenbaum M, Leibel RL. Int J Obes 2010 — adaptive thermogenesis review.",
    ],
  },
  {
    id: "mindful-eating", title: "Eat Without Screens", icon: "eye", category: "Nutrition",
    goals: ["fatloss", "fitness", "looksmax"], minutes: 2,
    keywords: ["distracted eating", "screens", "mindful meals", "phone"],
    summary: "Distracted eating is a proven intake multiplier: people eat measurably more when attention is on a screen, and the effect compounds at the next meal because your brain never logged the last one. Meals are 20 minutes. Give them the 20.",
    why: [
      "A systematic review in AJCN found distraction reliably increases immediate and later intake — memory of eating is part of satiety.",
      "TV watching during meals specifically increases intake and suppresses the post-meal compensatory reduction.",
      "Attention is the cheapest appetite-control tool you own: same food, same plate, measurably less eaten when you're actually present.",
    ],
    steps: [
      "Rule: food happens at a table or counter, never at a desk or couch. No phone within arm's reach.",
      "If you share meals, talk. If alone, put the phone in another room — the withdrawal fades in a week.",
      "Serve portions on a plate — never eat from bags, tubs, or shared bowls where the bottom is invisible.",
      "After finishing, wait 10 minutes before considering seconds. The signal usually lands.",
    ],
    mistakes: [
      "Trading distraction for 'food noise' — chewing gum and sparkling water are legal tools; scrolling is not.",
      "Applying this to social meals and becoming a monk — shared, slow meals are the original mindful eating.",
      "Expecting this alone to fix intake — it's a multiplier on decent food choices, not a substitute.",
    ],
    progression: [
      "Week 1: one screen-free meal daily.",
      "Week 2: all meals screen-free; plate everything.",
      "Ongoing: keep the 10-minute seconds delay — it's the highest-ROI minute in nutrition.",
    ],
    refs: [
      "Robinson E et al. Am J Clin Nutr 2013 — eating attentively meta-analysis.",
      "Blass EM et al. Pediatrics 2006 — television viewing & meal intake.",
    ],
  },
  {
    id: "water-before", title: "A Glass Of Water Before Every Meal", icon: "droplet", category: "Nutrition",
    goals: ["fatloss", "fitness"], minutes: 1,
    keywords: ["water before meals", "appetite", "hydration trick", "fullness"],
    summary: "500ml of water 20–30 minutes before eating measurably reduces how much you eat at that meal — one of the few zero-cost, zero-side-effect appetite tools with randomized-trial backing. Your daily hydration target gets easier at the same time.",
    why: [
      "In an RCT in adults with obesity, pre-meal water produced significantly greater weight loss over 12 weeks versus a control group imagining fullness.",
      "Gastric stretch contributes to satiety — water adds stretch with zero calories (see the energy-density protocol for the principle).",
      "Mild dehydration is common and measurable as fatigue and worse mood — the pre-meal glass audits hydration three times a day by default.",
    ],
    steps: [
      "Keep a glass or bottle visible where you eat. Visibility is the trigger.",
      "Drink 500ml 20–30 minutes before lunch and dinner — not during, not after, to keep the stretch effect at meal start.",
      "Count it: 2 pre-meal glasses plus meals gets most people halfway to their daily target.",
      "Room temperature if cold water bothers your stomach — the timing matters, the temperature doesn't.",
    ],
    mistakes: [
      "Drinking liters at once — spread across the day; the kidneys handle steady input better.",
      "Using water to 'flush fat' — it's a portion-control and hydration tool, nothing more mystical.",
      "Chugging mid-meal to fill up — the pre-meal timing is what the trials tested.",
    ],
    progression: [
      "Week 1: pre-meal glass at dinner.",
      "Week 2: add lunch.",
      "Ongoing: automatic — bottle on the counter, glass at the table.",
    ],
    refs: [
      "Dennis EA et al. Obesity 2010 — water premeal RCT & weight loss.",
      "Armstrong LE et al. J Nutr 2012 — mild dehydration, mood & cognition.",
    ],
  },
];
