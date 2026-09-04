# HiPy homepage contributor guide

## Project purpose

This Astro site is the public homepage for HiPy, a grassroots coding community based at the University of Liverpool. Keep the experience welcoming to students, staff, members of the public, complete beginners, and experienced coders.

## Content and tone

- Write in clear, friendly British English.
- Avoid jargon, gatekeeping, and assumptions about prior coding experience.
- Emphasise practical learning, community, curiosity, and free access.
- Keep event details in `src/data/events.json`; do not hard-code individual events into the page.
- Keep activity content in the Markdown files under `src/pages/resources/`.

## Design

- Preserve the stacked Atkinson Bold HiPy wordmark in `public/hipy-logo.png` and use it consistently.
- Retain the warm cream, near-black, lime, coral, and violet visual system.
- Maintain keyboard accessibility, visible focus states, semantic headings, and responsive layouts.
- Prefer lightweight Astro and CSS solutions over adding client-side frameworks or dependencies.

## Validation

- Run `npm run build` after site changes.
- Check that event dates use ISO 8601 format and Eventbrite links use HTTPS.
- Do not commit generated `dist/` output or dependencies from `node_modules/`.
