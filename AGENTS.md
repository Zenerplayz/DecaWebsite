# Project guidance

Read README.md and docs/maintenance.md before changing the site. Preserve the
chapter's current design, keyboard navigation and quiz-session recovery.
Keep chapter facts verifiable and distinguish coaching from official DECA rules.
Run lint, calendar/quiz tests, the production build and built-page metadata checks
for relevant changes. Never commit secrets, generated build files or local logs.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
