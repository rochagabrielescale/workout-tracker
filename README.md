# FORGE. — Workout Tracker

A mobile-first strength training tracker. React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`dist/` is the static output — deploy it anywhere.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project → Import Git Repository** → pick the repo.
3. Framework preset: **Vite**. No env vars needed.
4. Click **Deploy**.

That's it — open the preview URL on your phone. For a standalone app-like feel, tap the browser share icon and choose **Add to Home Screen**.

## Structure

```
src/
  main.jsx               entry
  App.jsx                tab navigation + workout state
  theme.js               design tokens (colors, fonts)
  icons.jsx              inline SVG icon set
  data.js                sample data (swap for backend later)
  components/            Phone, BottomNav, StatusBar, Card, Mono, etc.
  screens/               Dashboard, ActiveWorkout, Stats, Library,
                         History, Calendar, Measurements, Profile
```

## Notes

- Renders full-screen on phones; shows a phone-bezel preview on desktop.
- Dashboard has two style variants (Hero / Data-first) — toggle in the **You** tab.
- Data is static for now; the `data.js` module is the single source of truth and can be swapped for a backend later.
