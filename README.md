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
