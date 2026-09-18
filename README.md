# jnana-diksuchika

Next.js 14 (App Router) site with TypeScript and Tailwind CSS.

## Stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS (custom `primary`, `accent`, and `gray` tokens)
- lucide-react, framer-motion (installed for upcoming UI work)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123) (dev binds to port **43123**).

If Preview shows **500** or `Cannot find module './NNN.js'` in the terminal, the dev cache is stale (often after `npm run build` while dev is still running). Stop the server and run:

```bash
npm run dev:clean
```

Production build (stop the dev server first, or use a fresh `.next`):

```bash
npm run build
npm start
```

## Push to GitHub (`JnanaDiksuchika`)

GitHub repository: **`uday-kiran-palepu/jnanadiksuchika`** — https://github.com/uday-kiran-palepu/jnanadiksuchika.git

**On Windows**, use **WSL** (GitHub CLI does not run in PowerShell):

```bash
# Install GitHub CLI if needed: https://cli.github.com/
gh auth login

cd /path/to/JnanaDiksuchika   # your clone (e.g. from origin repo clone)
chmod +x scripts/push-to-github.sh
./scripts/push-to-github.sh
```

Or create the empty repo on [github.com/new](https://github.com/new) (name: `JnanaDiksuchika`), then:

```bash
git remote add github https://github.com/uday-kiran-palepu/JnanaDiksuchika.git
git push -u github main
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), import the repo (framework preset: **Next.js**).
3. Build command: `npm run build` (default). Output: Next.js default.
4. No environment variables are required for the current static/client-side features.
5. After deploy, set your production domain in Vercel; all routes under `app/` are included.

## Language toggle

The header **EN / తె** switch stores preference in `localStorage` and shows either English or Telugu copy on key surfaces (navigation, hero, courses, knowledge base, tools). Expand translations in `lib/i18n/LanguageProvider.tsx` and page components using `pick(locale, en, te)`.

## App structure

Routes live under `app/` (not `src/app`). Shared `Header` and `Footer` are rendered from the root `layout.tsx`.
