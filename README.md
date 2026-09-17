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

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

## App structure

Routes live under `app/` (not `src/app`). Shared `Header` and `Footer` are rendered from the root `layout.tsx`.
