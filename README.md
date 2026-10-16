# Sycamore DECA

The student-run website for Great Oaks Sycamore DECA at Sycamore High School in Cincinnati, Ohio. It brings chapter information, competition preparation and study tools into one place.

**[Visit the website](https://sycamoredeca.com)** · **[Practice tests](https://sycamoredeca.com/compete/practice)** · **[Role-play guide](https://sycamoredeca.com/compete/roleplay)**

Built and maintained as a student project by Sebastian Schuermeyer, with chapter content supplied by the chapter. Independent chapter website; not affiliated with DECA Inc.

## Features

- Chapter leadership, membership guidance, photos and contact information.
- Google Calendar summaries with recurrence, cancellation and Eastern-time handling.
- Cluster practice tests with randomized answers, explanations and recoverable progress in the same browser tab.
- Event-aware role-play coaching and links to official competition guidelines.
- Search metadata, canonical URLs, structured data and social sharing previews.

## Development

Use Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No application secrets or database are required. Calendar and optional Instagram content depend on external services; chapter pages remain usable when those services are unavailable.

```sh
npm run lint
npm test
npm run build
npm run test:seo
npm audit --omit=dev
npm start
```

`build` uses Next.js's Webpack production compiler for a reproducible build across supported development environments. `test:seo` checks the built pages; run it after `build`. GitHub Actions runs lint, functional checks, build and metadata checks before release.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/` | Public pages, metadata routes and shared layout |
| `src/components/` | Navigation, calendar summaries and chapter UI |
| `src/data/` | Chapter content, question bank and search metadata |
| `src/lib/` | Calendar parsing and quiz-session persistence |
| `public/images/` | Chapter photography |
| `scripts/` | Calendar, quiz-session and built-page checks |
| `docs/maintenance.md` | Content ownership, deployment and maintenance notes |
| `AGENTS.md`, `CLAUDE.md` | Guidance for coding assistants |

## Content and limitations

Practice questions are independent study material, not official DECA exams. Answer explanations should be reviewed by an advisor when uncertain. Official event rules and the actual judge's form take precedence over this site's coaching guidance.

Quiz progress uses session storage in the current tab; closing the tab can remove it. Chapter statistics, officer titles and event dates must be confirmed with the chapter. This repository does not establish search rankings, AI citations or measured student outcomes.

Photography and chapter branding retain their owners' rights. Source Sans Pro's SIL Open Font License is included in `src/app/fonts/LICENSE.md`.
