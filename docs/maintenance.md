# Maintaining the chapter website

## Content ownership

- `src/data/site.ts`: advisor contact, chapter name, calendar, social links and statistics.
- `src/data/content.ts`: officers, event clusters and membership FAQs.
- `src/data/photos.ts`: chapter photos and source-post links.
- `src/data/questions/`: independent practice questions and explanations.
- `src/data/seo.ts`: page titles, descriptions and canonical URLs.

Confirm names, titles, counts and dates with the chapter before changing them. Do not invent events to fill an empty calendar. The advisor is the source for membership eligibility, registration and competition arrangements. Distinguish coaching examples from official DECA materials.

## Architecture

Next.js App Router, React and TypeScript provide server-rendered pages and a client-side practice quiz. Tailwind CSS and locally hosted Source Sans Pro define the presentation. Calendar summaries fetch the public Google Calendar feed and revalidate every five minutes. The socials page shows the Behold Instagram widget. Locally hosted photos remain on the homepage and about page, and the Instagram profile link stays available if the widget cannot load.

There is no application database, account system or paid API. Quiz attempts remain in the current tab's session storage. Calendar tests cover recurrence, exclusions, moved events, cancellations and daylight saving. Quiz tests cover restored progress, shuffled answer grading and invalid saved data.

## Release checklist

1. Confirm chapter content and event-specific rules against current official sources.
2. Run the checks in README.md. Keep quiz-session tests when changing metadata or layout.
3. Review the homepage, membership page, calendar and a quiz attempt at desktop and phone sizes.
4. Merge the reviewed pull request into `main`; the connected Vercel project deploys from GitHub.
5. Verify [sycamoredeca.com](https://sycamoredeca.com), metadata routes and quiz resume behavior after deployment.

Use Git history and pull requests for historical implementation notes. Keep this file focused on current operating instructions. Keep secrets, build output, local tooling state and test downloads out of Git.
