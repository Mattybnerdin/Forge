# FORGE — Fitness PWA

A fully offline, privacy-first fitness PWA. No account, no server, no ads.

## Features
- 35+ exercises: weightlifting, bodyweight, TRX/suspension, mobility, cardio
- Animated SVG muscle diagrams (front + back) for every exercise
- Gym mode vs Home mode — filters appropriate exercises
- Recovery from injury mode — 7 injury areas, auto-modifies workouts
- Full workout logging (sets, reps, weight, notes)
- Progress tracking with activity chart and PR detection
- 100% offline after first load (Service Worker)
- All data stored in localStorage — no servers, ever
- Export/import data as JSON

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Source: main branch / root
3. Done! Your PWA lives at `https://yourusername.github.io/your-repo/`

## Install as PWA
On mobile: open in browser → share → "Add to Home Screen"
On desktop Chrome: click install icon in address bar

## File Structure
```
fitpwa/
├── index.html        ← entire app (single file)
├── data/exercises.js ← exercise database
├── manifest.json     ← PWA manifest
├── sw.js             ← service worker (offline)
├── icons/            ← app icons (add your own PNGs)
└── README.md
```

## Privacy
- Zero telemetry. Zero analytics. Zero external requests (after fonts load).
- All workout logs live in the user's own browser localStorage.
- Export/import lets users own their data fully.
