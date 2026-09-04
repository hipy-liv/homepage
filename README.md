# HiPy homepage

The public website for HiPy, a grassroots coding community based at the University of Liverpool. HiPy brings students, staff, and members of the public together to learn coding through free, friendly, hands-on events and activities.

## Editing the website

- **Upcoming events:** Edit [`src/data/events.json`](src/data/events.json). Each event needs a `title`, `description`, `location`, ISO-formatted `date`, and `eventbriteUrl`. Past events are automatically hidden and upcoming events are sorted by date.
- **Homepage content:** Edit [`src/pages/index.astro`](src/pages/index.astro) to change the introduction, About section, event presentation, resource cards, or call to action.
- **Resource activities:** Write the activities in [`src/pages/resources/personal-website-with-ai.md`](src/pages/resources/personal-website-with-ai.md) and [`src/pages/resources/analyse-data-with-ai.md`](src/pages/resources/analyse-data-with-ai.md). Keep the existing frontmatter at the top of each file.
- **Colours and styling:** Edit [`src/styles/global.css`](src/styles/global.css). The core colour palette is defined as custom properties at the beginning of the file.
- **Site title and description:** Edit [`src/consts.ts`](src/consts.ts). These values are used for browser and sharing metadata.
- **Logo and icons:** The stacked HiPy wordmark is stored at [`public/hipy-logo.png`](public/hipy-logo.png). Derived favicon and Apple touch icon files live alongside it in `public/`.

The events currently included in `events.json` are illustrative placeholders. Replace their dates, descriptions, locations, and Eventbrite URLs before launch.

## Local development

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Commands

| Command | Action |
| :-- | :-- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Build and preview with Wrangler |
| `npm run check` | Build, type-check, and validate the Cloudflare deployment |
| `npm run deploy` | Deploy to Cloudflare |

## Technology

The site uses [Astro](https://astro.build/) and is configured for deployment to [Cloudflare Workers](https://developers.cloudflare.com/workers/).
