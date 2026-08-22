<!-- BEGIN:project-reminders -->

# ⚠️ PROJECT REMINDERS — READ FIRST

At the top of `PLAN.md` there is a **"BEFORE LAUNCH — DO THESE THINGS"** checklist
(placeholder advisor name/email, joinUrl, Behold widget URL, sample content, git push).

**Every session: read that checklist and remind the user about unfinished items.
Do not let the site ship with placeholder/sample data still in place.**

<!-- END:project-reminders -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
