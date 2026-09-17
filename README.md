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

## App structure

Routes live under `app/` (not `src/app`). Shared `Header` and `Footer` are rendered from the root `layout.tsx`.
