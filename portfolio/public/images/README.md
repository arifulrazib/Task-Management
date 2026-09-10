# Images

Drop your real assets here — the site already references these paths.

## Profile
- `profile.jpg` — your portrait for the hero.
  After adding it, open `components/Hero.tsx` and replace the placeholder
  block (marked with a comment) with the `<Image src="/images/profile.jpg" ... />`
  snippet in that comment.

## Projects (`/projects`)
One thumbnail per case study, named by its `slug` from `data/projects.ts`:
- `remittance.jpg`
- `home-find.jpg`
- `admin-portal.jpg`
- `flight-booking.jpg`
- `ekyc.jpg`
- `tourism.jpg`

After adding a project image, set `hasImage: true` on that project in
`data/projects.ts` so the placeholder overlay is replaced by the real image.

Recommended sizes: thumbnails ~1600×1100, cover images ~1920×1080.
Use optimized JPG/WebP. `next/image` handles responsive sizing automatically.

## Tools (`/tools`)
Optional — the tool cards render initials by default, no logo files needed.

## Resume
Place `resume.pdf` in `/public` (not here) so the "Download Resume" button works.
