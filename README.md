<p align="center">
  <img src="public/images/devnito-logo.png" alt="Devnito" width="80" />
</p>

<h1 align="center">Devnito</h1>

<p align="center">
  <strong>We build products people use.</strong>
</p>

<p align="center">
  <a href="https://devnito.com">Live Site</a> · <a href="https://www.linkedin.com/in/developer-junaid/">LinkedIn</a>
</p>

<br />

## About

Devnito is a founder-led product engineering studio run by **Junaid Qureshi**. This repository is the devnito.com website: four pages rebuilt from the design handoff in `design_handoff_devnito_site/`, plus an embedded Sanity Studio.

<br />

## Tech Stack

| Layer          | Technology                                              |
| -------------- | ------------------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)          |
| **Language**   | TypeScript                                              |
| **Styling**    | Tailwind CSS v4 (design tokens in `app/(site)/site.css`) |
| **Fonts**      | Manrope + Geist Mono via `next/font`                    |
| **Forms**      | [Formspree](https://formspree.io/) via a server action  |
| **Deployment** | Vercel                                                  |

<br />

## Routes

| Route              | What it is                                                      |
| ------------------ | --------------------------------------------------------------- |
| `/`                | Homepage (featured work, services, products, 3-step brief form) |
| `/work`            | Portfolio by partner: `#stay-gold`, `#bnb`, `#direct`, `#products` |
| `/work/amg`        | AMG case study                                                  |
| `/products/sceneo` | Sceneo template sales page                                      |
| `/studio`          | Sanity Studio                                                   |

Old `/en/*` and `/ar/*` URLs permanently redirect to the matching new route, and the retired LEAP 2026 page (`/leap`, linked from printed QR codes) redirects to `/` (`next.config.ts`).

<br />

## Project Structure

```
app/
├── (site)/                 # Main site: own root layout, English only
│   ├── layout.tsx          # Fonts, metadata, JSON-LD, motion root
│   ├── site.css            # Tokens (colours, radii, easing) + motion CSS
│   ├── actions.ts          # submitBrief → Formspree
│   ├── page.tsx            # /
│   ├── work/page.tsx       # /work
│   ├── work/amg/page.tsx   # /work/amg
│   ├── products/sceneo/    # /products/sceneo
│   └── **/opengraph-image.tsx
├── studio/                 # Sanity Studio
└── sitemap.ts, robots.ts
components/
├── site/                   # Shared: ui.tsx (buttons, H2, Shot…), nav.tsx, motion.tsx, contact-panel.tsx
├── home/                   # Homepage sections
└── amg/, sceneo/           # Page-specific client pieces
hooks/
├── use-devnito-motion.ts   # Reveals, H2 sweep, counters, magnetic, tilt (port of devnito-motion.js)
└── use-parallax.ts         # [data-parallax] (port of devnito-parallax.js)
lib/
├── images.ts               # Image manifest (src + intrinsic size) for public/images
├── site.ts                 # URLs, contact email, Sceneo checkout URL
└── og/                     # Shared OG card + bundled Manrope
```

All motion respects `prefers-reduced-motion`.

<br />

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # fill in the Sanity IDs; SCENEO_CHECKOUT_URL once checkout is ready
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

<br />

## Environment

| Variable              | Used for                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| `FORMSPREE_ENDPOINT`  | Optional override for the homepage brief form. Defaults to `FORMSPREE_FORM_ID` in `lib/site.ts`. |
| `SCENEO_CHECKOUT_URL` | Every Sceneo buy button. Read at build time. Until set, the buttons open a "request" form that goes to Formspree. |
| `NEXT_PUBLIC_SANITY_*`, `SANITY_STUDIO_*` | Sanity Studio at `/studio`                          |

<br />

## Editing Content

Copy lives next to the components that render it (arrays at the top of each section file in `components/home/` and the page files under `app/(site)/`). To add or replace an image, drop it in `public/images/` and add its entry (with width and height) to `lib/images.ts`.

<br />

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com) — zero configuration needed.

```bash
npm run build   # Production build
npm start       # Start production server
```

**Post-deploy checklist:**

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console) (`https://devnito.com/sitemap.xml`)
- [ ] Test OG image at [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Set `SCENEO_CHECKOUT_URL` in Vercel and redeploy once checkout is ready
- [ ] Add https://devnito.com as a CORS origin (with credentials) in sanity.io/manage so `/studio` can log in
- [ ] Verify Formspree receives a test brief
- [ ] Run [Lighthouse](https://pagespeed.web.dev/) audit

<br />

## Security Headers

The following headers are applied to all routes via `next.config.ts`:

- `Strict-Transport-Security` — enforces HTTPS
- `X-Content-Type-Options` — prevents MIME sniffing
- `Referrer-Policy` — controls referrer information
- `Permissions-Policy` — restricts browser APIs
- `X-DNS-Prefetch-Control` — enables DNS prefetching

<br />

## License

Private. All rights reserved.

<br />

---

<p align="center">
  Built by <a href="https://www.linkedin.com/in/developer-junaid/">Junaid Qureshi</a> · <a href="https://devnito.com">devnito.com</a>
</p>
