# Big Switch — Pre-Enhancement Audit

**Date:** 2026-09-18  
**Source brand:** Jnana Diksuchika → target **Big Switch**  
**Stack:** Next.js 14.2 App Router, TypeScript, Tailwind (M3-style tokens), framer-motion, three.js, lucide-react

## Routes (`app/**/page.tsx`)

| Route | Status | Notes |
|-------|--------|-------|
| `/` | OK | Home sections: Hero, Pathways, TechStack, About, Team, Workshops, Gallery, Testimonials, CTA |
| `/about` | OK | Manifesto-style sections; heavy JD branding |
| `/team` | OK | Filterable roster + layout metadata |
| `/workshops`, `/workshops/[slug]` | OK | Cohort catalog + Cohort04 detail |
| `/courses`, `/courses/[slug]` | OK | Catalog + Go/Raft deep detail |
| `/tools`, `/tools/[slug]`, `/tools/system-states` | OK | Raft visualizer + system-states lab — **preserve** |
| `/knowledge-base`, `/knowledge-base/[slug]` | OK | Catalog + Raft guide detail; no pricing/marketplace UI yet |
| `/contact` | OK | Form states + Kakinada map — **preserve** |
| `/terms`, `/privacy` | OK | Legal copy with JD name |
| `not-found` | OK | Present |

**Missing for Big Switch IA:** `/services` (+ detail slugs), `/account/login`, `/account/profile`, SEO `sitemap.ts` / `robots.ts`, centralized `/locales`.

## Components & architecture

- **Layout:** Fixed `Header` + `pt-20` main + `Footer` — padding OK; nav crowded on desktop.
- **i18n:** `LanguageProvider` + scattered `pick(locale, en, te)` — locale persists (`jd-locale`). **Never** shows EN+TE at once (good). No JSON locale files; incomplete coverage.
- **Images:** `ImagePlaceholder` maps to `/public/images/stock-*.jpg` + `logo.png` — real assets, not blur-only.
- **3D:** `CompassAnimation` (three.js) eagerly imported in Hero — needs lazy + `prefers-reduced-motion`.
- **Data:** Split under `components/*/data.ts` — should centralize under `/data` or `/lib/data`.
- **Design:** M3 blue/orange tokens; background `#faf8ff` reads purple-tinted. Inter + Plus Jakarta (Inter is generic).

## Dead / weak links

- No `href="#"` found in nav primary paths.
- Footer socials point at generic linkedin.com / github.com / youtube.com (acceptable stubs).
- Cookie Settings → `/terms#sec-07` (verify anchor exists).
- No `/services` or Learning mega-nav yet.

## Build / preview health

- Scripts: `dev` / `dev:clean` on port **43123**; known stale-`.next` 500 after build → always `dev:clean`.
- Remotes: Cursor `origin` authenticated; GitHub remote may be absent — agent has no GH token; document user push via `scripts/push-to-github.sh`.
- `node_modules` may be cold on fresh agents — run `npm install` before build.

## Phase priorities (this enhancement)

1. Fix/stabilize build & routing baseline  
2. Big Switch nav + centralized EN/te locales  
3. Design system tokens + Button/Card/Section  
4. Homepage rewrite (pillars, KB, services, FAQ, 3D lazy)  
5. Services + Account shells + KB plans UI  
6. SEO, a11y/perf, `/data` centralization, README/env  
7. Full route curl QA + green `npm run build`

## Preserve

Raft visualizer, contact form states, system-states, terms/privacy structure, workshops/courses tooling under Learning.

## Post-enhancement status (2026-09-18)

- [x] Audit written  
- [x] Big Switch nav + EN/te JSON i18n (`bs-locale`)  
- [x] Design tokens + Button/Card/Section  
- [x] Homepage rewrite + lazy 3D compass  
- [x] Services listing + 7 detail routes  
- [x] Account login/profile shells (no fake auth)  
- [x] KB plans UI (payment integration comments only)  
- [x] sitemap.ts / robots.ts / metadata helpers  
- [x] `rm -rf .next && npm run build` green (39 routes)  
- [x] Route curl QA: all key paths 200 (404 for unknown)  
- [x] Dev: `npm run dev:clean` on **43123**  

