# Sycamore DECA — Website Plan

> ## 📌 SESSION STATUS (updated Aug 21, 2026)
>
> **Done:**
> - Site fully built as a static Next.js app (`src/data/` holds all content)
> - Google Calendar iframe wired into `/calendar` (URL lives in `src/data/site.ts`)
> - Behold widget placeholder ready in `src/data/site.ts` (`beholdWidgetUrl`)
> - `.gitignore` verified; `.opencode/` added to it
> - Git installed & configured (user: Sebis Chuermeyer, sebischuermeyer1@gmail.com)
> - Repo initialized, branch `main`, committed and **pushed**:
>   https://github.com/Zenerplayz/DecaWebsite
>
> **Not done yet (pick up here):**
> 1. **Vercel deploy NOT done** — decawebsite.vercel.app returns 404.
>    User must import repo at vercel.com → Add New → Project → Import DecaWebsite.
> 2. **QA test incomplete** — build + lint pass, all 10 routes prerender statically,
>    but live page-by-page check was interrupted. Note: starting a background
>    `npm start` from opencode's shell hung twice; next session either use
>    `npm run dev` manually in a separate terminal, or deploy first and QA the
>    live URL directly.
> 3. Fill the "BEFORE LAUNCH" checklist below (placeholders).

> ## ⚠️ BEFORE LAUNCH — DO THESE THINGS
>
> **Every opencode session should check this list and nag until it's done.**
>
> - [x] `src/data/site.ts` → advisor is Mr. Steedly (steedlym@sycamoreschools.org)
> - [x] `joinUrl` removed — joining = visit Mr. Steedly's room in the marketing wing
> - [x] Officers roster filled in (13 real officers, no blurbs)
> - [x] Socials — Instagram only: @sycamore.deca
> - [x] Stats — 150+ members, 125 state qualifiers '25, 40+ ICDC qualifiers
> - [x] Awards section removed; hardcoded events removed (Google Calendar is sole source)
> - [x] Dues references cut (amount unknown); "Est. 2014" removed
> - [x] `beholdWidgetUrl` set (feed 9z5NZ99pscFkKMuzDq6Q); sample highlight cards removed — /socials shows the live Instagram feed
> - [ ] Final QA pass after content complete (user plans a full review + subagent sweep)

---

A static website for the Great Sycamore DECA chapter: fully hardcoded content,
no backend, no database, deployed free on Vercel.

---

## 1. Architecture

**Fully static Next.js site.** All content lives in code. There is no backend,
no database, no auth, no environment variables.

| Concern | Approach |
|---|---|
| Content (officers, awards, events, FAQs, highlights) | Hardcoded in `src/data/content.ts` + `src/data/site.ts` — edit file, push, live in ~1 min |
| Calendar | Event list hardcoded in `src/data/content.ts`; optional Google Calendar iframe embed on `/calendar` |
| Socials | Platform links from `src/data/site.ts`; optional third-party embed widget (e.g. Behold.so) on `/socials` |
| Practice tests | Static question bank in `src/data/questions/*`, client-side scoring |
| Role-play prep | Static guide at `/compete/roleplay` |
| Join form | Link out (Google Form) via `joinUrl` in `src/data/site.ts` |

### Deliberately cut features
- **AI role-play judge** — too complex/high-maintenance; replaced with a static prep guide
- **Supabase / any database** — nothing needs dynamic data
- **Admin portal** — no dynamic content to manage; officers request changes via git
- **Instagram Graph API** — third-party widget embed if ever wanted

## 2. Site Map

```
/                    Landing (hero, stats, pillars, upcoming events, mission)
/about               Story, officers, advisor, awards
/calendar            Upcoming events list (+ optional Google Calendar embed)
/compete             Competition hub
/compete/clusters    Cluster guides (via /compete)
/compete/practice    Practice test engine (static question bank)
/compete/roleplay    Role-play training guide
/socials             Highlights grid + platform links
/join                How to join, dues, FAQ
```

## 3. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Components | Custom (`src/components`) + lucide-react icons |
| Hosting | Vercel free tier, auto-deploy on `git push` |

## 4. Maintenance Model

- **Content updates:** edit `src/data/site.ts` or `src/data/content.ts` → commit → push → redeployed automatically (~1 minute)
- **Yearly:** officer roster, dues, stats, theme refresh
- **Seasonal:** events list, announcements/highlights
- **Calendar:** optionally create a public Google Calendar and embed it on `/calendar`; until then the hardcoded events list is the source of truth

## 5. Deploy Checklist

1. ✅ `.gitignore` verified (covers `node_modules`, `.next/`, `.env*`)
2. `git init && git add . && git commit -m "Initial site"`
3. Create empty repo on GitHub (no README) → `git remote add origin <url> && git push -u origin main`
4. vercel.com → sign in with GitHub → Import repo → Deploy (zero config)
5. Optional: attach custom domain in Vercel settings

No env vars need to be set anywhere.

---

*Before launch: fill in placeholders in `src/data/site.ts` (advisor name/email,
real join URL) and swap sample content in `content.ts` for real chapter info.*
