# Portfolio Website - CLAUDE.md

## Project Overview
Muhammad Saad Khalil's personal portfolio website. A single-page application showcasing React Native development work, built with Next.js 15 and exported as a static site.

## Tech Stack
- **Framework**: Next.js 15.5.2 (static export, `output: 'export'`, `distDir: 'dist'`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React, React Icons, Heroicons
- **Fonts**: Outfit, Inter (Google Fonts)

## Project Structure
```
src/app/
  page.tsx      # Main single-page component (all sections live here)
  layout.tsx    # Root layout, metadata, SEO, JSON-LD schema
  globals.css   # Global styles, neobrutalist theme, custom classes
  sitemap.ts    # Sitemap generation
  robots.ts     # Robots.txt generation
public/         # Static assets (images, logos, favicons, PDF resume)
```

## Key Architecture Notes
- **Single page**: All sections (Hero, Expertise, Work, Reviews, CTA, Footer) are in `src/app/page.tsx` as one component. No routing.
- **Static export**: No server-side features. `next start` won't work — use `next build` then serve the `dist/` folder.
- **Images**: `unoptimized: true` due to static export — use Next.js `<Image>` but expect no optimization.
- **`'use client'`**: The entire page is a client component (uses hooks, framer-motion).

## Design System
- **Theme**: Neobrutalist — heavy black borders (`border-4 border-black`), hard box shadows (`shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`), uppercase bold text.
- **Custom classes**: `btn-neo-black`, `btn-neo-white`, `neobrutalist-bg`, `mesh-background` — defined in `globals.css`.
- **No border-radius** on most elements (`rounded-none` is the norm).

## Data
All content (apps, expertise, reviews) is hardcoded as arrays at the top of `page.tsx`. No CMS or API calls.

### Portfolio Apps
1. MyndSpark — health/wellness React Native app
2. LoyalAI — relationship loyalty app with GPT-4
3. FanGenie — fan engagement with Stripe
4. SplitMart — educational marketplace

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Build static export to dist/
npm run lint     # Run ESLint
```

## SEO
- Metadata defined in `layout.tsx` with Open Graph, Twitter cards, and JSON-LD structured data.
- Canonical URL: `https://saadkhalil.dev`
- Sitemap and robots.txt auto-generated via `sitemap.ts` / `robots.ts`.

## Contact Info in Code
- Email: `saadkhalil9999@gmail.com`
- WhatsApp: `+923229953346`
- GitHub: `https://github.com/saadkhalil01`
- LinkedIn: `https://www.linkedin.com/in/saad-khalil-0912b2232/`
