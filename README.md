# HiPy homepage

The public website for HiPy, a grassroots coding community based at the University of Liverpool. HiPy brings students, staff, and members of the public together to learn coding through free, friendly, hands-on events and activities.

## Editing the website

- **Upcoming events:** Events are read from the Firestore collection configured by `PUBLIC_FIREBASE_EVENTS_COLLECTION`. Past events are automatically hidden and upcoming events are sorted by date.
- **Homepage content:** Edit [`src/pages/index.astro`](src/pages/index.astro) to change the introduction, About section, event presentation, resource cards, or call to action.
- **Resource activities:** Write the activities in [`src/pages/resources/personal-website-with-ai.md`](src/pages/resources/personal-website-with-ai.md) and [`src/pages/resources/analyse-data-with-ai.md`](src/pages/resources/analyse-data-with-ai.md). Keep the existing frontmatter at the top of each file.
- **Colours and styling:** Edit [`src/styles/global.css`](src/styles/global.css). The core colour palette is defined as custom properties at the beginning of the file.
- **Site title and description:** Edit [`src/consts.ts`](src/consts.ts). These values are used for browser and sharing metadata.
- **Logo and icons:** The stacked HiPy wordmark is stored at [`public/hipy-logo.png`](public/hipy-logo.png). Derived favicon and Apple touch icon files live alongside it in `public/`.

## Firestore events

Copy `.env.example` to `.env` and add the Firebase web app configuration shown under **Firebase console → Project settings → Your apps**. These values identify the Firebase project but do not grant administrative access; Firestore Security Rules control which data can be read.

The default collection is `events`. Set `PUBLIC_FIREBASE_EVENTS_COLLECTION` to use a different collection name. Each document requires:

| Field | Firestore type | Description |
| :-- | :-- | :-- |
| `title` | string | Event title |
| `description` | string | Short event summary |
| `location` | string | Venue or online location |
| `date` | timestamp | Event date and start time; ISO date strings are also accepted |
| `eventbriteUrl` | string | HTTPS Eventbrite booking URL, or an empty string if booking is not yet open |

For a public events listing, the collection can allow public reads while denying all browser writes. Apply and deploy an equivalent rule in the Firebase console:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /events/{eventId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

If a custom collection name is used, update `events` in the rule as well. Do not use Firestore test-mode rules in production.

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
