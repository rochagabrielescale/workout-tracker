# Deploy — Run on your phone over the internet

This folder is **already linked** to your existing Vercel project (`workout-tracker`, under `Gabriel's projects`). That means deploying is now a single command.

---

## Fastest path — one command, ~60 seconds

Open Terminal in this folder (on macOS: right-click the folder in Finder → **New Terminal at Folder**) and run:

```bash
npx vercel --prod --yes
```

First run will:
1. Install the Vercel CLI (no global install needed).
2. Pop a browser window asking you to log in to Vercel — sign in with your GitHub account.
3. Upload this folder, build it, and deploy it to `workout-tracker` on your `Gabriel's projects` team.

It'll print a production URL like `https://workout-tracker-xxxx.vercel.app`. Open that on your phone — you're live.

**Why this is one command:** I created `.vercel/project.json` in this folder pointing at your existing project ID and team ID. The CLI reads that file and skips every setup question.

### Making it feel like an app on your phone

iPhone Safari: open the URL → tap the share icon → **Add to Home Screen**. It'll launch full-screen with its own icon, no browser chrome.

### Pushing updates later

From this folder, after any change:

```bash
npx vercel --prod --yes
```

Same command, redeploys to the same URL.

---

## Alternative — run in your browser locally (no deploy)

If you just want to test on your laptop first before shipping:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). To also view it on your phone while on the same Wi-Fi: `npm run dev -- --host` — it prints a second URL starting with your Mac's IP.

---

## Alternative — GitHub-based workflow (auto-deploys on push)

If you want every `git push` to auto-redeploy:

1. Create a repo at https://github.com/new — name it `workout-tracker`, don't tick "Add a README".
2. Push this folder:
   ```bash
   rm -rf .git
   git init -b main
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/workout-tracker.git
   git push -u origin main
   ```
3. In Vercel → your `workout-tracker` project → **Settings → Git** → Connect the GitHub repo.

From then on, `git push` is the deploy button.
