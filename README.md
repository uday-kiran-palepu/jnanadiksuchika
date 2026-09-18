# Jnana Diksuchika

Next.js 14 (App Router) site — learning, knowledge base, workshops, and professional services.

**Brand:** Jnana Diksuchika — *Knowledge that gives you direction.*

## Stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS (M3-bridged tokens + Jnana Diksuchika CSS variables)
- framer-motion, three.js (lazy compass), lucide-react
- Central i18n: `locales/en.json` + `locales/te.json` via `LanguageProvider` (`useLocale().t`)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123) (dev binds to port **43123**).

If Preview shows **500** or `Cannot find module './NNN.js'`, the `.next` cache is stale (often after `npm run build` while dev is still running). Stop the server and run:

```bash
npm run dev:clean
```

Production build:

```bash
rm -rf .next && npm run build
npm start
```

## Environment

Copy `.env.example` → `.env.local`. No secrets are required for the current mock UI.

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for sitemap, robots, OG |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | FUTURE — KB payment checkout |
| `DATABASE_URL` / auth vars | FUTURE — CMS, API, auth |

## Language

Header **EN / తె** toggles one locale at a time (never both). Preference persists in `localStorage` (`jd-locale`). Add keys under `locales/*.json` and call `t("nav.courses")`.

## App structure

- Routes: `app/` (Learning: courses/tools/KB, Services, Workshops, About, Contact, Account shells)
- Shared UI: `components/ui` (Button, Card, Section, Skeleton)
- Mock data: `lib/data/*` + re-exports in `data/index.ts`
- SEO: `lib/seo/metadata.ts`, `app/sitemap.ts`, `app/robots.ts`

## Push to GitHub

GitHub repo: **`uday-kiran-palepu/jnanadiksuchika`** — https://github.com/uday-kiran-palepu/jnanadiksuchika.git

The Cursor cloud agent pushes to **Cursor `origin`** only (no GitHub token). To mirror to GitHub on your machine (WSL recommended on Windows):

```bash
gh auth login
chmod +x scripts/push-to-github.sh
./scripts/push-to-github.sh
```

Or:

```bash
git remote add github https://github.com/uday-kiran-palepu/jnanadiksuchika.git
# or: git remote set-url github https://github.com/uday-kiran-palepu/jnanadiksuchika.git
git push -u github main
```

## Deploy on Vercel

1. Push this repository to GitHub (`jnanadiksuchika`).
2. Import in [Vercel](https://vercel.com) (framework: **Next.js**).
3. Build: `npm run build`. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. No other env vars required for the static/client features.
5. After deploy, all `app/` routes are included (services, account shells, sitemap, robots).

## FUTURE (documented, not implemented)

- Auth (login/profile are UI shells only)
- Razorpay / UPI for KB plans
- CMS / API for courses and articles
- Real CRM / calendar for services intake
