# Chrisco Educational Centre — Next.js site

A bright, child-friendly school website for Chrisco Educational Centre (Woodley, Nairobi), built with Next.js (App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
app/
  layout.tsx          Root layout — loads fonts (Baloo 2 + Nunito via next/font),
                       global CSS, and renders the shared Navbar/Footer/WhatsApp button
  globals.css          The full "Bright Days" design system (colours, components, layout)
  page.tsx             Homepage ("/")
  about/page.tsx        "/about"
  academics/page.tsx    "/academics"   (Learning)
  admissions/page.tsx   "/admissions"
  cocurricular/page.tsx "/cocurricular" (Fun Stuff)
  contact/page.tsx      "/contact"
  facilities/page.tsx   "/facilities"  (Our Campus)
  gallery/page.tsx      "/gallery"

components/
  Navbar.tsx            Top nav with dropdowns + mobile drawer (client component)
  Footer.tsx             Site footer
  WhatsAppFloat.tsx       Floating WhatsApp button
  ScrollReveal.tsx        Global scroll-reveal animations, counter animations,
                          and FAQ accordion behaviour (client component, runs on every route)
  AdmissionsForm.tsx      Admissions enquiry form (client component, local submit state)
  ContactForm.tsx         Contact form (client component, local submit state)
  GalleryGrid.tsx         Gallery filter tabs + lightbox (client component, local state)

public/
  logo.png              Site logo (sun + book mascot)
```

## Notes

- Pages are server components by default; only the pieces that need interactivity
  (`Navbar`, `ScrollReveal`, the two forms, and `GalleryGrid`) are marked `"use client"`.
- Fonts are loaded with `next/font/google`, which self-hosts the font files at build
  time — no external request at runtime, no layout shift.
- All internal links use Next.js `<Link>` for client-side navigation.
- The colour palette and component classes (`.sticker-card`, `.btn-sun`, `.eyebrow`,
  etc.) live entirely in `app/globals.css` — there's no CSS-in-JS or CSS modules, so
  styling stays easy to scan in one place.

## Build for production

```bash
npm run build
npm run start
```
