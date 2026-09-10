# Ariful Islam — Portfolio

A dark, minimal developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Design adapted from a reference UI-designer template into a full-stack developer profile.

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000.

## Add your photo

The layout expects your headshot here:

```
portfolio/public/profile.png
```

Drop your transparent-background PNG there (a 4:5 portrait crop looks best).
Until the file exists, the profile card gracefully shows your initials instead
of a broken image — nothing breaks.

## Edit your content

Everything is driven from **one typed file**:

```
src/data/profile.ts
```

- `profile` — name, role, email, tagline, location, photo path
- `socials` — links (Behance, GitHub, LinkedIn, Twitter)
- `stats` — the hero counters
- `projects` — the recent-projects grid
- `experience` — the timeline
- `skills` — the tech badges
- `reviews` — the testimonials carousel

No component markup needs editing to update copy.

## Contact form

The form posts to `src/app/api/contact/route.ts`, a working stub that validates
input and returns success. Wire it to a real provider (Resend, Nodemailer/SMTP,
SendGrid, or a DB) where the `TODO` comment is. Keep secrets in **UPPERCASE**
env vars, e.g. `RESEND_API_KEY`, `CONTACT_TO_EMAIL`.

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the dev server           |
| `npm run build` | Production build               |
| `npm run start` | Serve the production build     |
| `npm run lint`  | Lint with ESLint / Next config |

## Deploy

Deploys cleanly to Vercel (zero config) or any Node host via `npm run build && npm run start`.
```bash
# Vercel
npx vercel --cwd portfolio
```
