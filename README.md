<p align="center">
  <img src="public/logo.svg" alt="Junaid Qureshi" width="80" />
</p>

<h1 align="center">Junaid Qureshi</h1>

<p align="center">
  <strong>Full-stack engineer & solution architect — personal portfolio.</strong>
</p>

<p align="center">
  <a href="https://junaidqureshi.com">Live Site</a> · <a href="https://www.linkedin.com/in/developer-junaid/">LinkedIn</a> · <a href="https://github.com/developerjunaid">GitHub</a>
</p>

<br />

## About

This is the source code for **Junaid Qureshi**'s personal portfolio site — a single-page, minimal landing that showcases experience as a senior full-stack engineer, solution architect, and Head of Engineering at Stay Gold (US). The site highlights packages, selected work, proof, testimonials, and contact — all with a clean, portfolio-first approach.

<br />

## Tech Stack

| Layer          | Technology                                     |
| -------------- | ---------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language**   | TypeScript                                     |
| **Styling**    | Tailwind CSS v4                                |
| **Font**       | Inter via `next/font`                          |
| **Forms**      | [Formspree](https://formspree.io/)             |
| **Deployment** | Vercel                                         |

**No heavy dependencies.** No animation libraries, no headless UI kits, no CMS. The entire site ships minimal JavaScript with zero client-side routing.

<br />

## Features

- **Single-page architecture** — everything above the fold or one scroll away
- **Personal hero** — photo, headline, short bio, credentials, and CTAs (Book a Call, View Work, LinkedIn, GitHub)
- **Modal-driven detail** — packages and case studies expand into accessible modals (focus trap, keyboard nav, ARIA)
- **CSS marquee testimonials** — smooth infinite scroll, pause on hover, zero JS animation overhead
- **Dynamic OG image** — auto-generated at the edge via `opengraph-image.tsx`
- **SEO hardened** — structured data (JSON-LD), auto-generated sitemap & robots.txt, canonical URLs, security headers
- **Content-as-code** — all copy lives in a single `content/site.ts` file
- **Responsive** — designed for all screen sizes with custom breakpoint grid system
- **Lighthouse 90+** — optimized fonts, images, minimal bundle

<br />

## Project Structure

```
devnito-3.0/
├── app/
│   ├── layout.tsx              # Root layout, metadata, SEO, JSON-LD
│   ├── page.tsx                # Single-page composition
│   ├── globals.css              # Design tokens, animations, custom grid
│   ├── opengraph-image.tsx      # Dynamic OG image (edge)
│   ├── sitemap.ts               # Auto-generated sitemap.xml
│   └── robots.ts                # Auto-generated robots.txt
├── components/
│   ├── navbar.tsx               # Sticky nav with mobile menu
│   ├── hero.tsx                 # Hero with photo, bio, credentials, CTAs
│   ├── packages.tsx             # Service packages (3 cards → modals)
│   ├── work.tsx                 # Selected work showcase (alternating layout)
│   ├── proof-strip.tsx          # Stats strip (engagements, rate, delivery)
│   ├── testimonials.tsx         # Marquee testimonial carousel
│   ├── contact-cta.tsx          # Final CTA section
│   ├── contact-form-modal.tsx   # Contact form (Formspree integration)
│   ├── contact-form-provider.tsx # Global modal state (React Context)
│   ├── footer.tsx               # Footer
│   └── ui/
│       └── modal.tsx            # Accessible modal primitive
├── content/
│   └── site.ts                  # All editable content in one place
└── public/
    ├── logo.svg                 # Brand mark & favicon
    ├── dp.png                   # Portfolio photo
    └── ...                      # Project screenshots & assets
```

<br />

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

<br />

## Editing Content

All website copy is centralized in **`content/site.ts`**. Edit the exported objects and the site updates instantly:

| Export              | Controls                                                             |
| ------------------- | -------------------------------------------------------------------- |
| `siteConfig`        | Site name, URL, email, social links (LinkedIn, GitHub), Formspree ID |
| `founder`           | Name, title, photo, hero headline, hero bio, full bio, credentials   |
| `navLinks`          | Navigation items                                                     |
| `packages`          | Service packages — cards & modal details                             |
| `projects`          | Case studies — cards, galleries & modal details                      |
| `stats`             | Proof strip numbers (engagements, rate, etc.)                        |
| `testimonials`      | Client quotes with avatars                                           |
| `videoTestimonials` | Video testimonial entries                                            |

<br />

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com) — zero configuration needed.

```bash
npm run build   # Production build
npm start       # Start production server
```

**Post-deploy checklist:**

- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console) (`https://junaidqureshi.com/sitemap.xml`)
- [ ] Test OG image at [opengraph.xyz](https://www.opengraph.xyz)
- [ ] Verify Formspree form receives submissions
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
  Built by <a href="https://www.linkedin.com/in/developer-junaid/">Junaid Qureshi</a> · <a href="https://junaidqureshi.com">junaidqureshi.com</a>
</p>
