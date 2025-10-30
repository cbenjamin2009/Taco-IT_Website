## Working Notes for Taco-IT Website

### Project Snapshot
- Remix 2.17.x + React 18 SPA deployed to Vercel (`api` handler).
- TailwindCSS 3.4 with custom `app/styles/tailwind.css` input; generated stylesheet at `app/tailwind.css`.
- Hero and service pages use newly introduced interactive components (`HeroCanvas`, `HeroImageParallax`) and IntersectionObserver reveal animations.
- Routes: `_index.jsx` (landing), `/develop`, `/consult`, `/manage` use matching shell layouts with gradients, CTA blocks, and updated copy.

### Guardrails & Preferences
- **Command restrictions:** Do not run `npm run dev`; user prefers to start dev server manually (past attempt hung).
- **Hash navigation:** Use `handleAnchorClick` helper (in `Nav.jsx`) for smooth scrolling; ensure new hash links call this to avoid first-click stutter.
- **Nav contents:** Keep `Home`, `Develop`, `Consult`, `Manage`, `Contact` only unless user requests change.
- **Smooth scroll & parallax:** Maintain IntersectionObserver fallbacks (set visible immediately if unsupported). Avoid adding heavy libs.
- **Secret management:** The StaticForms access key is injected via `STATICFORMS_ACCESS_KEY` environment variable (root loader exposes it); do not hardcode keys in source.
- **Analytics:** Pending future task to add GA4 / conversion tracking. Sticky reminder lives in `TODO_INTERACTIVE_NOTES.md`.
- **Summaries:** Keep `CHANGELOG_SUMMARY.md` updated each session.

### Interactive Components
- `HeroCanvas.jsx`: pointer-reactive particle grid behind landing hero.
- `HeroImageParallax.jsx`: reusable scroll-linked transform; wraps hero imagery on service pages.
- Reveal animations implemented in `Home.jsx`, `Services.jsx`, `DevelopmentOfferings.jsx`, `ManagedOfferings.jsx`.
- Hero wrapper (`Home.jsx`) uses glassmorphism-style container with heavy padding, blurred gradients, and rounded corners—match this look for future hero tweaks.
- Custom SVG illustrations live in `app/Images/{develop,consult,manage}.svg` and power the homepage service cards; keep future artwork consistent with the gradient/blur theme.

### Future Opportunities
- Identity/imagery refresh (new assets, testimonial module).
- Further parallax/enhanced motion for cards/testimonial sections.
- Analytics instrumentation (GA4, CTA click tracking) when requested.

### Quick Checks Before PR
- Run `npm run build` (ok to ignore Remix future-flag warnings).
- Confirm hash links, CTA phone numbers, and contact form endpoints remain accurate after edits.
