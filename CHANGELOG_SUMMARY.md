# Taco-IT Website Change Journal

## Session 1 – Platform Upgrade & Project Audit
- Upgraded the stack from Remix 1 / React 17 to Remix 2.17.1 with React 18, refreshed Emotion, MUI, Tailwind, and build tooling (`package.json`, scripts, entry points, config files).
- Replaced legacy Remix entry APIs with React 18 hydration/streaming patterns (`app/entry.client.jsx`, `app/entry.server.jsx`) and switched app-wide meta exports to the Remix 2 array format.
- Cleaned imports to use `@remix-run/react`, updated the Vercel handler, regenerated Tailwind inputs, and ensured `npm run build` succeeds on the new foundation.

## Session 2 – Routing Fixes & Navigation Cleanup
- Renamed the root index route to `_index.jsx` to restore rendering under Remix 2 route discovery rules.
- Converted anchor-based meta exports for service routes (Consult / Develop / Manage) to the new Remix array shape and fixed navigation dead links by introducing a `Home` tab while removing `Services`/`About`.
- Implemented smooth scrolling for hash links so `Contact` jumps correctly on the first click across every route.

## Session 3 – Homepage Shell & Service Reskin
- Rebuilt the homepage with a gradient hero, reorganized navigation/footer, refreshed service highlights, and removed the outdated wallpaper styles (`HomePage`, `Home`, `Nav`, `Footer`, `Service`, `Services`).
- Applied cohesive styling / layout updates to the Consult, Develop, and Manage pages, including new copy blocks and modernized grids, while removing old CSS artifacts.
- Tailored `Offerings` components into reusable, card-based layouts for both development and managed services.

## Session 4 – Interactive Enhancements
- Added a hero-level canvas effect (`HeroCanvas`) with particle dispersion and IntersectionObserver-powered reveal animations for hero highlight cards.
- Extended reveal animations to the services grid plus development/managed offerings via lightweight observers for polished on-scroll motion.
- Introduced `HeroImageParallax` to give consult and managed service hero imagery a subtle scroll-linked transform, and logged analytics/tracking work for a future session (`TODO_INTERACTIVE_NOTES.md`).

## Session 5 – Hero Refinement & Comfort Tweaks
- Rebuilt the landing hero wrapper with a rounded, softly faded container that blends into the background, adds generous internal padding, and keeps highlights inside the same glassmorphism panel (`Home.jsx`).
- Layered multiple gradient/blur backdrops with `HeroCanvas` to avoid hard edges while maintaining the interactive particle effect.
- Ensured corresponding references (nav smooth-scroll helper, page layouts) remain intact; `npm run build` continues to pass with existing Remix future-flag warnings.

## Session 6 – Service Artwork Refresh
- Designed bespoke gradient-based SVG illustrations for Develop, Consult, and Manage service cards to replace the stock photography (`app/Images/develop.svg`, `consult.svg`, `manage.svg`).
- Updated the services component to point at the new assets so the section matches the updated brand palette and glassmorphism aesthetic (`app/Components/Services.jsx`).
- Swapped the public contact email across footer and contact modules to `inquiry@taco-it.com`.

---
- Latest build verification: `npm run build` (Remix future-flag warnings only).
