# Ariful Islam — Portfolio

A premium, dark, editorial portfolio for a UX/UI & Product Designer.
Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing your content

Almost everything lives in `/data` — no need to touch components:

| What | File |
|------|------|
| Name, headline, email, SEO, social links | `data/site.ts` |
| Projects & case studies | `data/projects.ts` |
| Experience timeline | `data/experience.ts` |
| Skills | `data/skills.ts` |
| Tools | `data/tools.ts` |
| Testimonials | `data/testimonials.ts` |

### Images
See `public/images/README.md`. Add `profile.jpg`, project thumbnails, and
`public/resume.pdf`. Placeholders render cleanly until you do.

### Placeholders
Text like `[Add project outcome]` is intentional — replace with real content.
No fake metrics, testimonials or clients are used anywhere.

## Structure

```
app/                 Routes (home + /work/[slug] dynamic case studies)
components/          Reusable UI (Hero, ProjectCard, Experience, ...)
components/ui/       Primitives (Reveal, SectionHeading, MagneticButton)
data/                Editable content
lib/                 Shared motion config
public/images/       Your assets
```

## Notes
- Fully responsive (390px → 1440px+), redesigned per breakpoint.
- Respects `prefers-reduced-motion` (parallax & major animations disabled).
- Custom cursor is desktop-only and never blocks accessibility.
- Accessible: semantic HTML, focus states, skip link, alt text, keyboard nav.
