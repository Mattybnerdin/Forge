const EXERCISES = [
  // ─── WEIGHTLIFTING ───────────────────────────────────────────────────────────
  {
    id: "barbell-squat", name: "Barbell Back Squat", category: "weightlifting",
    mode: ["gym"], muscles: { primary: ["quads","glutes"], secondary: ["hamstrings","core","lower-back"] },
    equipment: ["barbell","rack"], difficulty: 3,
    description: "Place barbell on upper traps, squat to parallel or below.",
    sets: "3-5", reps: "5-8", restSec: 180,
    injuryModifications: {
      knee: { swap: "leg-press", note: "Avoid deep knee flexion" },
      back: { swap: "goblet-squat", note: "Use goblet squat to reduce spinal load" },
      shoulder: { swap: "front-squat", note: "Switch to front squat or goblet" }
    }
  },
  {
    id: "deadlift", name: "Conventional Deadlift", category: "weightlifting",
    mode: ["gym"], muscles: { primary: ["hamstrings","glutes","lower-back"], secondary: ["traps","lats","core","quads"] },
    equipment: ["barbell"], difficulty: 4,
    description: "Hip-hinge pull from floor to lockout. Keep bar close to body.",
    sets: "3-5", reps: "3-6", restSec: 240,
    injuryModifications: {
      back: { swap: "romanian-deadlift", note: "Use RDL with lighter load, maintain neutral spine" },
      knee: { swap: "trap-bar-deadlift", note: "Trap bar reduces knee demand" },
      hamstring: { swap: "hip-thrust", note: "Reduce hamstring tension with hip thrusts" }
    }
  },
  {
    id: "bench-press", name: "Barbell Bench Press", category: "weightlifting",
    mode: ["gym"], muscles: { primary: ["chest"], secondary: ["triceps","front-delts"] },
    equipment: ["barbell","bench"], difficulty: 3,
    description: "Lower bar to mid-chest, press to lockout. Arch naturally.",
    sets: "3-5", reps: "5-8", restSec: 180,
    injuryModifications: {
      shoulder: { swap: "db-floor-press", note: "Dumbbell floor press limits shoulder ROM" },
      elbow: { swap: "pushup", note: "Reduce load with bodyweight pushups" },
      wrist: { swap: "db-bench-press", note: "Dumbbells allow neutral wrist position" }
    }
  },
  {
    id: "overhead-press", name: "Overhead Press", category: "weightlifting",
    mode: ["gym"], muscles: { primary: ["front-delts","side-delts"], secondary: ["triceps","upper-traps","core"] },
    equipment: ["barbell"], difficulty: 3,
    description: "Press bar from shoulders to overhead. Keep core tight.",
    sets: "3-4", reps: "5-8", restSec: 180,
    injuryModifications: {
      shoulder: { swap: "landmine-press", note: "Landmine press is shoulder-friendly at an angle" },
      neck: { swap: "db-lateral-raise", note: "Isolation work only" },
      back: { swap: "seated-db-press", note: "Seated reduces spinal compressive load" }
    }
  },
  {
    id: "barbell-row", name: "Barbell Row", category: "weightlifting",
    mode: ["gym"], muscles: { primary: ["lats","rhomboids"], secondary: ["biceps","rear-delts","lower-back"] },
    equipment: ["barbell"], difficulty: 3,
    description: "Hinge at hip, row bar to lower rib cage. Squeeze shoulder blades.",
    sets: "3-4", reps: "6-10", restSec: 120,
    injuryModifications: {
      back: { swap: "chest-supported-row", note: "Chest support eliminates lower back stress" },
      elbow: { swap: "cable-row", note: "Cable allows consistent tension without elbow stress" }
    }
  },
  {
    id: "romanian-deadlift", name: "Romanian Deadlift", category: "weightlifting",
    mode: ["gym"], muscles: { primary: ["hamstrings","glutes"], secondary: ["lower-back","core"] },
    equipment: ["barbell","dumbbells"], difficulty: 2,
    description: "Hinge at hips, lower weight with soft knees, feel hamstring stretch.",
    sets: "3-4", reps: "8-12", restSec: 120,
    injuryModifications: {
      hamstring: { swap: "hip-thrust", note: "Avoid hamstring stretch; hip thrust safer" },
      back: { swap: "single-leg-rdl", note: "Less spinal load with single leg variant" }
    }
  },
  {
    id: "goblet-squat", name: "Goblet Squat", category: "weightlifting",
    mode: ["gym","home"], muscles: { primary: ["quads","glutes"], secondary: ["core","upper-back"] },
    equipment: ["dumbbell","kettlebell"], difficulty: 1,
    description: "Hold weight at chest, squat deep. Great for beginners.",
    sets: "3", reps: "10-15", restSec: 90,
    injuryModifications: {
      knee: { note: "Limit depth to pain-free range" },
      back: { note: "Goblet position is inherently back-friendly" }
    }
  },
  {
    id: "hip-thrust", name: "Barbell Hip Thrust", category: "weightlifting",
    mode: ["gym"], muscles: { primary: ["glutes"], secondary: ["hamstrings","core"] },
    equipment: ["barbell","bench"], difficulty: 2,
    description: "Drive hips up to full extension against barbell. Squeeze glutes at top.",
    sets: "3-4", reps: "8-15", restSec: 90,
    injuryModifications: {
      back: { note: "Excellent low-back-friendly glute exercise" },
      knee: { note: "Minimal knee stress" }
    }
  },
  // ─── BODYWEIGHT ───────────────────────────────────────────────────────────────
  {
    id: "pushup", name: "Push-Up", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["chest"], secondary: ["triceps","front-delts","core"] },
    equipment: [], difficulty: 1,
    description: "Plank position, lower chest to floor, press up. Keep body rigid.",
    sets: "3", reps: "10-20", restSec: 60,
    injuryModifications: {
      wrist: { swap: "fist-pushup", note: "Pushup on fists for neutral wrist" },
      shoulder: { swap: "incline-pushup", note: "Incline reduces load and shoulder ROM" },
      elbow: { note: "Reduce range of motion, slow the movement" }
    }
  },
  {
    id: "pullup", name: "Pull-Up", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["lats"], secondary: ["biceps","rear-delts","core"] },
    equipment: ["pullup-bar"], difficulty: 3,
    description: "Hang from bar, pull chest to bar. Full extension at bottom.",
    sets: "3-4", reps: "5-12", restSec: 90,
    injuryModifications: {
      shoulder: { swap: "band-assisted-pullup", note: "Use band for assistance and reduced load" },
      elbow: { swap: "inverted-row", note: "Inverted row reduces elbow flexion load" },
      wrist: { note: "Use neutral grip if possible" }
    }
  },
  {
    id: "dip", name: "Tricep Dip", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["triceps","chest"], secondary: ["front-delts"] },
    equipment: ["parallel-bars","chair"], difficulty: 2,
    description: "Lower body between bars or on chair edge, press up.",
    sets: "3", reps: "8-15", restSec: 90,
    injuryModifications: {
      shoulder: { swap: "diamond-pushup", note: "Diamond pushup reduces shoulder impingement risk" },
      elbow: { swap: "tricep-pushdown", note: "Cable pushdown with less bodyweight load" }
    }
  },
  {
    id: "bodyweight-squat", name: "Bodyweight Squat", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["quads","glutes"], secondary: ["hamstrings","core"] },
    equipment: [], difficulty: 1,
    description: "Feet shoulder-width, squat to parallel, stand tall.",
    sets: "3", reps: "15-25", restSec: 60,
    injuryModifications: {
      knee: { swap: "wall-sit", note: "Wall sit is isometric, less knee stress" },
      back: { note: "Keep chest tall, avoid rounding" }
    }
  },
  {
    id: "lunge", name: "Reverse Lunge", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["quads","glutes"], secondary: ["hamstrings","core"] },
    equipment: [], difficulty: 1,
    description: "Step back into lunge, front knee over ankle. Alternate legs.",
    sets: "3", reps: "10-12 each", restSec: 60,
    injuryModifications: {
      knee: { swap: "glute-bridge", note: "Glute bridges avoid knee flexion" },
      hip: { note: "Reduce step depth" }
    }
  },
  {
    id: "glute-bridge", name: "Glute Bridge", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["glutes","hamstrings"], secondary: ["core","lower-back"] },
    equipment: [], difficulty: 1,
    description: "Lie on back, drive hips up, squeeze glutes at top.",
    sets: "3", reps: "15-20", restSec: 60,
    injuryModifications: {
      back: { note: "Excellent for back rehabilitation" },
      knee: { note: "Low knee stress exercise" }
    }
  },
  {
    id: "plank", name: "Plank", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["core"], secondary: ["shoulders","glutes","quads"] },
    equipment: [], difficulty: 1,
    description: "Forearm plank. Hold rigid position. Don't let hips sag or pike.",
    sets: "3", reps: "30-60s", restSec: 60,
    injuryModifications: {
      shoulder: { swap: "dead-bug", note: "Dead bug trains core without shoulder load" },
      back: { swap: "bird-dog", note: "Bird dog is gentle on the spine" },
      wrist: { note: "Use forearm plank only" }
    }
  },
  {
    id: "mountain-climber", name: "Mountain Climber", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["core"], secondary: ["shoulders","hip-flexors","quads"] },
    equipment: [], difficulty: 2,
    description: "From plank, drive knees alternately toward chest at pace.",
    sets: "3", reps: "30-45s", restSec: 60,
    injuryModifications: {
      shoulder: { swap: "plank", note: "Static plank removes dynamic shoulder stress" },
      knee: { swap: "dead-bug", note: "Dead bug avoids knee compression" }
    }
  },
  {
    id: "dead-bug", name: "Dead Bug", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["core"], secondary: ["hip-flexors"] },
    equipment: [], difficulty: 1,
    description: "On back, extend opposite arm/leg while keeping low back flat.",
    sets: "3", reps: "8-10 each side", restSec: 60,
    injuryModifications: {
      back: { note: "One of the safest core exercises for back issues" }
    }
  },
  {
    id: "bird-dog", name: "Bird Dog", category: "bodyweight",
    mode: ["home","gym"], muscles: { primary: ["core","lower-back"], secondary: ["glutes","shoulders"] },
    equipment: [], difficulty: 1,
    description: "On all fours, extend opposite arm and leg. Hold 2-3s.",
    sets: "3", reps: "8-10 each side", restSec: 60,
    injuryModifications: {
      back: { note: "Excellent for back rehabilitation and core stability" }
    }
  },
  // ─── SUSPENSION TRAINING ──────────────────────────────────────────────────────
  {
    id: "trx-row", name: "TRX Row", category: "suspension",
    mode: ["home","gym"], muscles: { primary: ["lats","rhomboids"], secondary: ["biceps","rear-delts","core"] },
    equipment: ["trx"], difficulty: 1,
    description: "Lean back holding TRX handles, row body up. Adjust angle for intensity.",
    sets: "3", reps: "10-15", restSec: 75,
    injuryModifications: {
      back: { note: "Reduce lean angle to lower load" },
      elbow: { note: "Adjust grip to neutral" }
    }
  },
  {
    id: "trx-pushup", name: "TRX Push-Up", category: "suspension",
    mode: ["home","gym"], muscles: { primary: ["chest"], secondary: ["triceps","core","stabilizers"] },
    equipment: ["trx"], difficulty: 2,
    description: "Feet in TRX, body in plank, perform push-up. Instability increases core demand.",
    sets: "3", reps: "8-15", restSec: 75,
    injuryModifications: {
      shoulder: { swap: "trx-row", note: "Rows are more shoulder-friendly" },
      wrist: { note: "Adjust handle angle for neutral wrist" }
    }
  },
  {
    id: "trx-squat", name: "TRX Squat", category: "suspension",
    mode: ["home","gym"], muscles: { primary: ["quads","glutes"], secondary: ["core","hamstrings"] },
    equipment: ["trx"], difficulty: 1,
    description: "Hold TRX, squat deep using handles for balance. Great for mobility.",
    sets: "3", reps: "12-20", restSec: 60,
    injuryModifications: {
      knee: { note: "Use handles to offload and control depth" },
      back: { note: "Upright torso reduces back stress" }
    }
  },
  {
    id: "trx-lunge", name: "TRX Lunge", category: "suspension",
    mode: ["home","gym"], muscles: { primary: ["quads","glutes"], secondary: ["hamstrings","core"] },
    equipment: ["trx"], difficulty: 2,
    description: "One foot in TRX strap behind you, lunge on front leg.",
    sets: "3", reps: "10-12 each", restSec: 75,
    injuryModifications: {
      knee: { swap: "trx-squat", note: "Bilateral squat is safer for knee issues" }
    }
  },
  {
    id: "trx-plank", name: "TRX Plank", category: "suspension",
    mode: ["home","gym"], muscles: { primary: ["core"], secondary: ["shoulders","glutes"] },
    equipment: ["trx"], difficulty: 2,
    description: "Feet in straps, hold plank position. Instability intensifies core challenge.",
    sets: "3", reps: "20-45s", restSec: 60,
    injuryModifications: {
      shoulder: { swap: "plank", note: "Floor plank removes instability overhead load" }
    }
  },
  {
    id: "trx-hamstring-curl", name: "TRX Hamstring Curl", category: "suspension",
    mode: ["home","gym"], muscles: { primary: ["hamstrings","glutes"], secondary: ["core","lower-back"] },
    equipment: ["trx"], difficulty: 2,
    description: "Heels in straps, bridge up, curl heels toward glutes.",
    sets: "3", reps: "10-15", restSec: 75,
    injuryModifications: {
      hamstring: { note: "Reduce range of motion during recovery" },
      back: { note: "Excellent low-back-friendly hamstring exercise" }
    }
  },
  // ─── MOBILITY ─────────────────────────────────────────────────────────────────
  {
    id: "hip-flexor-stretch", name: "Kneeling Hip Flexor Stretch", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["hip-flexors"], secondary: ["quads"] },
    equipment: [], difficulty: 1,
    description: "Half-kneeling, drive hip forward. Hold 30-60s each side.",
    sets: "2-3", reps: "30-60s each", restSec: 30,
    injuryModifications: {
      knee: { note: "Place pad under knee" },
      hip: { note: "Reduce forward drive, stay in pain-free range" }
    }
  },
  {
    id: "thoracic-rotation", name: "Thoracic Rotation", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["thoracic-spine","obliques"], secondary: ["lats"] },
    equipment: [], difficulty: 1,
    description: "Side-lying, rotate top arm open toward floor. 10 reps each side.",
    sets: "2-3", reps: "10-12 each", restSec: 30,
    injuryModifications: {
      back: { note: "Essential for back rehab — restores mobility safely" },
      shoulder: { note: "Reduce rotation if shoulder is involved" }
    }
  },
  {
    id: "world-greatest-stretch", name: "World's Greatest Stretch", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["hip-flexors","thoracic-spine"], secondary: ["groin","hamstrings","glutes"] },
    equipment: [], difficulty: 1,
    description: "Lunge + thoracic rotation + reach. Full body mobility in one move.",
    sets: "2", reps: "5-8 each side", restSec: 30,
    injuryModifications: {
      knee: { note: "Keep lunge shallow" },
      back: { note: "Move slowly, avoid any painful range" }
    }
  },
  {
    id: "cat-cow", name: "Cat-Cow", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["spine","core"], secondary: ["neck"] },
    equipment: [], difficulty: 1,
    description: "All-fours spinal flexion/extension. Move slowly, breathe with each rep.",
    sets: "2", reps: "10-15", restSec: 30,
    injuryModifications: {
      back: { note: "Gentle spinal mobility — excellent for back pain" },
      neck: { note: "Limit cervical movement" }
    }
  },
  {
    id: "pigeon-pose", name: "Pigeon Pose", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["glutes","piriformis","hip-flexors"], secondary: ["groin"] },
    equipment: [], difficulty: 1,
    description: "From plank, bring front shin horizontal, lower hips. Hold 45-90s.",
    sets: "2", reps: "45-90s each", restSec: 30,
    injuryModifications: {
      knee: { swap: "supine-figure-4", note: "Supine figure-4 removes knee stress" },
      hip: { note: "Use yoga block under hip for support" }
    }
  },
  {
    id: "supine-figure-4", name: "Supine Figure-4", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["glutes","piriformis"], secondary: ["hip-external-rotators"] },
    equipment: [], difficulty: 1,
    description: "On back, cross ankle over opposite knee, pull legs toward chest.",
    sets: "2", reps: "45-90s each", restSec: 30,
    injuryModifications: {
      knee: { note: "Safest glute stretch for knee issues" },
      hip: { note: "Control depth by changing leg angle" }
    }
  },
  {
    id: "doorway-chest-stretch", name: "Doorway Chest Stretch", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["chest","front-delts"], secondary: ["biceps"] },
    equipment: [], difficulty: 1,
    description: "Arms at 90° in doorway, lean forward gently. Hold 30s.",
    sets: "2", reps: "30-45s", restSec: 30,
    injuryModifications: {
      shoulder: { note: "Reduce arm angle if painful — don't push range" }
    }
  },
  {
    id: "ankle-circles", name: "Ankle Circles & Alphabet", category: "mobility",
    mode: ["home","gym"], muscles: { primary: ["ankles"], secondary: ["calves","tibialis"] },
    equipment: [], difficulty: 1,
    description: "Rotate ankles in full circles, then trace alphabet. Both feet.",
    sets: "2", reps: "10 each direction", restSec: 30,
    injuryModifications: {
      ankle: { note: "Core rehab for ankle sprains" }
    }
  },
  // ─── CARDIO ───────────────────────────────────────────────────────────────────
  {
    id: "jumping-jacks", name: "Jumping Jacks", category: "cardio",
    mode: ["home","gym"], muscles: { primary: ["full-body"], secondary: [] },
    equipment: [], difficulty: 1,
    description: "Classic full-body cardio warmup. Land softly.",
    sets: "3", reps: "30-60s", restSec: 30,
    injuryModifications: {
      knee: { swap: "step-jack", note: "Step out side to side instead of jumping" },
      ankle: { swap: "march-in-place", note: "March in place to keep heart rate up" }
    }
  },
  {
    id: "burpee", name: "Burpee", category: "cardio",
    mode: ["home","gym"], muscles: { primary: ["full-body"], secondary: [] },
    equipment: [], difficulty: 3,
    description: "Squat thrust to plank, pushup, jump. High-intensity full body.",
    sets: "3", reps: "10-15", restSec: 90,
    injuryModifications: {
      knee: { swap: "inchworm", note: "Inchworm is low-impact alternative" },
      back: { swap: "jumping-jacks", note: "Avoid spinal flexion under fatigue" },
      shoulder: { swap: "squat-jump", note: "Remove upper body component" }
    }
  },
  {
    id: "jump-rope", name: "Jump Rope", category: "cardio",
    mode: ["home","gym"], muscles: { primary: ["calves","shoulders"], secondary: ["core","full-body"] },
    equipment: ["jump-rope"], difficulty: 2,
    description: "Jump rope at moderate pace. Great low-equipment cardio.",
    sets: "5", reps: "60s on / 30s off", restSec: 30,
    injuryModifications: {
      ankle: { swap: "march-in-place", note: "March with high knees instead" },
      knee: { swap: "row-machine", note: "Low-impact rowing if available" },
      shoulder: { note: "Use handles only, reduce shoulder rotation" }
    }
  },
  {
    id: "inchworm", name: "Inchworm", category: "cardio",
    mode: ["home","gym"], muscles: { primary: ["hamstrings","shoulders","core"], secondary: ["chest"] },
    equipment: [], difficulty: 1,
    description: "Hinge forward, walk hands to plank, walk back. Slow and controlled.",
    sets: "3", reps: "8-12", restSec: 60,
    injuryModifications: {
      back: { note: "Gentle warming for back, move slowly" },
      hamstring: { note: "Bend knees as needed to maintain comfort" }
    }
  },
  {
    id: "high-knees", name: "High Knees", category: "cardio",
    mode: ["home","gym"], muscles: { primary: ["hip-flexors","quads"], secondary: ["core","calves"] },
    equipment: [], difficulty: 2,
    description: "Run in place driving knees to hip height. Stay on toes.",
    sets: "3", reps: "30-45s", restSec: 60,
    injuryModifications: {
      knee: { swap: "march-in-place", note: "Marching keeps heart rate without impact" },
      hip: { note: "Reduce knee height to pain-free range" }
    }
  }
];

// Muscle group metadata for SVG highlighting
const MUSCLE_GROUPS = {
  "chest": { label: "Chest", svgIds: ["chest-left","chest-right"] },
  "quads": { label: "Quadriceps", svgIds: ["quad-left","quad-right"] },
  "hamstrings": { label: "Hamstrings", svgIds: ["hamstring-left","hamstring-right"] },
  "glutes": { label: "Glutes", svgIds: ["glute-left","glute-right"] },
  "lats": { label: "Latissimus Dorsi", svgIds: ["lat-left","lat-right"] },
  "rhomboids": { label: "Rhomboids", svgIds: ["rhomboid-left","rhomboid-right"] },
  "lower-back": { label: "Lower Back", svgIds: ["lower-back"] },
  "core": { label: "Core / Abs", svgIds: ["abs-upper","abs-lower","oblique-left","oblique-right"] },
  "triceps": { label: "Triceps", svgIds: ["tricep-left","tricep-right"] },
  "biceps": { label: "Biceps", svgIds: ["bicep-left","bicep-right"] },
  "front-delts": { label: "Front Deltoids", svgIds: ["front-delt-left","front-delt-right"] },
  "side-delts": { label: "Side Deltoids", svgIds: ["side-delt-left","side-delt-right"] },
  "rear-delts": { label: "Rear Deltoids", svgIds: ["rear-delt-left","rear-delt-right"] },
  "traps": { label: "Trapezius", svgIds: ["trap-left","trap-right"] },
  "upper-traps": { label: "Upper Traps", svgIds: ["upper-trap-left","upper-trap-right"] },
  "calves": { label: "Calves", svgIds: ["calf-left","calf-right"] },
  "hip-flexors": { label: "Hip Flexors", svgIds: ["hip-flexor-left","hip-flexor-right"] },
  "thoracic-spine": { label: "Thoracic Spine", svgIds: ["thoracic"] },
  "spine": { label: "Spine", svgIds: ["thoracic","lumbar"] },
  "full-body": { label: "Full Body", svgIds: ["chest-left","chest-right","quad-left","quad-right","hamstring-left","hamstring-right","glute-left","glute-right","abs-upper","abs-lower"] },
  "shoulders": { label: "Shoulders", svgIds: ["front-delt-left","front-delt-right","side-delt-left","side-delt-right"] },
  "groin": { label: "Groin / Adductors", svgIds: ["adductor-left","adductor-right"] },
  "ankles": { label: "Ankles", svgIds: ["ankle-left","ankle-right"] },
  "stabilizers": { label: "Stabilizers", svgIds: [] },
  "obliques": { label: "Obliques", svgIds: ["oblique-left","oblique-right"] },
  "tibialis": { label: "Tibialis", svgIds: [] },
  "piriformis": { label: "Piriformis / Hip External Rotators", svgIds: ["glute-left","glute-right"] },
  "hip-external-rotators": { label: "Hip External Rotators", svgIds: ["glute-left","glute-right"] },
  "neck": { label: "Neck / Cervical", svgIds: [] }
};

// Injury areas and related exercises to avoid/include
const INJURY_PROFILES = {
  knee: {
    label: "Knee Pain",
    icon: "🦵",
    avoidCategories: [],
    avoidExercises: ["barbell-squat","lunge","jump-rope","burpee","jumping-jacks","high-knees"],
    prioritize: ["glute-bridge","hip-thrust","dead-bug","bird-dog","supine-figure-4","trx-row","cat-cow","ankle-circles"],
    note: "Focus on hip-dominant and non-weight-bearing exercises. Avoid high-impact and deep knee flexion."
  },
  back: {
    label: "Back Pain",
    icon: "🔙",
    avoidCategories: [],
    avoidExercises: ["deadlift","barbell-squat","barbell-row","burpee","overhead-press"],
    prioritize: ["bird-dog","dead-bug","cat-cow","glute-bridge","thoracic-rotation","world-greatest-stretch","hip-flexor-stretch","trx-row"],
    note: "Prioritize spinal mobility and core stabilization. Avoid heavy axial loading."
  },
  shoulder: {
    label: "Shoulder Pain",
    icon: "💪",
    avoidCategories: [],
    avoidExercises: ["overhead-press","bench-press","dip","trx-pushup","burpee"],
    prioritize: ["trx-row","barbell-row","glute-bridge","hip-thrust","doorway-chest-stretch","thoracic-rotation"],
    note: "Focus on pulling movements and avoid overhead pressing. Restore mobility with gentle stretches."
  },
  hamstring: {
    label: "Hamstring Strain",
    icon: "🦵",
    avoidCategories: [],
    avoidExercises: ["deadlift","romanian-deadlift","inchworm"],
    prioritize: ["glute-bridge","hip-thrust","supine-figure-4","bird-dog","trx-hamstring-curl","cat-cow"],
    note: "Avoid full hamstring stretch under load. Gentle isometrics and hip-dominant work first."
  },
  hip: {
    label: "Hip Pain",
    icon: "🦴",
    avoidCategories: [],
    avoidExercises: ["barbell-squat","lunge","trx-lunge","high-knees"],
    prioritize: ["supine-figure-4","pigeon-pose","cat-cow","hip-flexor-stretch","glute-bridge","bird-dog"],
    note: "Restore hip mobility first. Avoid impingement-prone positions."
  },
  ankle: {
    label: "Ankle Sprain",
    icon: "🦶",
    avoidCategories: [],
    avoidExercises: ["jump-rope","jumping-jacks","burpee","high-knees"],
    prioritize: ["ankle-circles","glute-bridge","dead-bug","trx-row","seated-exercises"],
    note: "Work on ankle mobility and stability. Avoid impact during initial recovery."
  },
  elbow: {
    label: "Elbow / Tennis Elbow",
    icon: "💪",
    avoidCategories: [],
    avoidExercises: ["bench-press","dip","barbell-row"],
    prioritize: ["glute-bridge","squat-variations","cat-cow","hip-thrust","mobility-work"],
    note: "Rest flexion-heavy movements. Focus on lower body and gentle mobility."
  },
  wrist: {
    label: "Wrist Pain",
    icon: "🤝",
    avoidCategories: [],
    avoidExercises: ["pushup","plank","bench-press","trx-pushup"],
    prioritize: ["fist-pushup","trx-row","glute-bridge","hip-thrust","squat-variations"],
    note: "Use neutral grip or fist position. Avoid wrist extension under load."
  }
};

if (typeof module !== 'undefined') module.exports = { EXERCISES, MUSCLE_GROUPS, INJURY_PROFILES };
