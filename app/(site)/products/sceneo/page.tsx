import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { img, type SiteImage } from "@/lib/images";
import { CONTACT_EMAIL, SCENEO_DEMO_URL, sceneoCheckoutUrl } from "@/lib/site";
import { Spotlight } from "@/components/site/motion";
import { SiteHeader, type NavItem } from "@/components/site/nav";
import { Eyebrow, H2, Headline, SectionHeader } from "@/components/site/ui";
import { CmsTabs, Faq, ScreenTabs } from "@/components/sceneo/interactive";
import { BuyBar, SceneoBuy, SceneoCheckoutNote, SceneoPurchaseProvider } from "@/components/sceneo/purchase";

export const metadata: Metadata = {
  title: "Sceneo · Website template for video studios",
  description:
    "Sceneo is a ready-made site for video production and creative agencies. Built with Next.js and managed in Sanity. One-time payment of $184.",
  alternates: { canonical: "/products/sceneo" },
};

const NAV: NavItem[] = [
  { label: "Screens", href: "#screens" },
  { label: "Features", href: "#included" },
  { label: "CMS", href: "#cms" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    title: "Background reel hero",
    body: "Paste a YouTube link or upload an MP4. It loops silently behind the headline and visitors can unmute it.",
  },
  { title: "Selected cuts timeline", body: "Your work laid out like an edit timeline. Scroll to scrub between clips, in 16:9 or 9:16." },
  { title: "Services and process", body: "A service list with deliverables, and a four-step timeline from brief to delivery." },
  { title: "Clients and testimonials", body: "A scrolling client strip (logos or names) and a testimonial slider." },
  {
    title: "Contact that converts",
    body: "A big copy-to-clipboard email button plus a second link for Instagram, Calendly or anything else.",
  },
  {
    title: "SEO and sharing",
    body: "Page title, description and a social share image, or an auto-generated card from your headline.",
  },
];

const STEPS = [
  { title: "Buy", body: "One-time payment of $184." },
  { title: "Get the code", body: "Download the source and setup guide straight after checkout." },
  { title: "Add your work", body: "Add your reel, cuts, services and clients in Sanity." },
  { title: "Launch", body: "Deploy to Vercel and connect your domain." },
];

const INCLUDED = [
  "Full Next.js source code",
  "Sanity Studio, every section editable",
  "Responsive on desktop and mobile",
  "Setup and deployment guide",
  "Email support for setup questions",
];

const PHONES: { image: SiteImage; alt: string; offset?: boolean }[] = [
  { image: img.scMHero, alt: "Sceneo on mobile: hero" },
  { image: img.scMCuts, alt: "Sceneo on mobile: selected cuts", offset: true },
  { image: img.scMContact, alt: "Sceneo on mobile: contact" },
];

export default function SceneoPage() {
  const checkout = sceneoCheckoutUrl();

  return (
    <SceneoPurchaseProvider checkoutUrl={checkout}>
      <BuyBar />
      <main>
        {/* Hero */}
        <section className="p-3.5">
          <div
            data-dark="1"
            data-hero-card="1"
            className="relative overflow-hidden rounded-panel bg-ink px-[clamp(20px,3vw,40px)] pt-[clamp(20px,3vw,40px)] text-white"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_10%,transparent_75%)] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-30%] left-1/2 h-[70%] w-[90%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(47,111,208,0.45),transparent)]"
            />

            <SiteHeader
              items={NAV}
              cta={checkout ? { label: "Buy Sceneo · $184", href: checkout } : { label: "Request Sceneo", href: "#pricing" }}
              right={
                <Link href="/#products" className="text-sm text-white/75">
                  All products
                </Link>
              }
            />

            <div className="relative mx-auto mt-[clamp(56px,9vw,120px)] flex max-w-[980px] flex-col items-center gap-6 text-center">
              <Eyebrow className="justify-center">A Devnito product · Website template</Eyebrow>
              <Headline
                className="text-[clamp(44px,7vw,104px)] text-balance"
                parts={["The website your ", { strong: "video studio" }, " deserves."]}
              />
              <p data-hero="1" className="m-0 max-w-[56ch] text-[clamp(16px,1.4vw,19px)] leading-[1.6] text-pretty text-white/75">
                Sceneo is a ready-made site for video production and creative agencies. Built with Next.js and managed in
                Sanity, so your team updates the reel, cuts, services and clients without touching code.
              </p>
              <div data-hero="1" className="flex flex-wrap items-center justify-center gap-3">
                <SceneoBuy variant="hero" />
                <a
                  href={SCENEO_DEMO_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn-label border border-white/30 px-6 py-4 text-[13px] transition-colors hover:bg-white/10"
                >
                  View live demo
                </a>
              </div>
              <div data-hero="1" className="flex flex-wrap justify-center gap-x-[22px] gap-y-2 text-[13.5px] text-white/65">
                <span>One-time payment</span>
                <span>Next.js + Sanity CMS</span>
                <span>Deploys to Vercel</span>
              </div>
            </div>

            <div data-parallax="0.08" className="relative mx-auto mt-[clamp(48px,7vw,90px)] max-w-[1180px]">
              <div className="overflow-hidden rounded-t-[18px] border border-b-0 border-white/12 bg-well shadow-[0_-30px_80px_-30px_rgba(47,111,208,0.5)]">
                <div className="flex items-center gap-[7px] border-b border-white/8 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="ml-3 font-mono text-[11.5px] text-white/50">sceneo-devnito.vercel.app</span>
                </div>
                <Image
                  src={img.scHero.src}
                  width={img.scHero.width}
                  height={img.scHero.height}
                  alt="Sceneo homepage"
                  sizes="(max-width: 1240px) 100vw, 1180px"
                  priority
                  className="block h-auto w-full"
                />
              </div>
            </div>
            <Spotlight />
          </div>
        </section>

        {/* (01) Screens */}
        <section id="screens" className="px-section pt-section">
          <div className="wrap">
            <SectionHeader index="(01)" label="Screens">
              Pages built to <strong>show the work.</strong>
            </SectionHeader>
            <ScreenTabs />
          </div>
        </section>

        {/* (02) What's included */}
        <section id="included" className="px-section pt-section">
          <div className="wrap">
            <SectionHeader index="(02)" label="What's included">
              Every section a studio needs, <strong>ready on day one.</strong>
            </SectionHeader>
            <div className="mt-[clamp(30px,4vw,50px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-3.5">
              {FEATURES.map((f, i) => (
                <div key={f.title} data-reveal="1" className="flex flex-col gap-3 rounded-tile bg-white px-[26px] py-7">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-label">0{i + 1}</div>
                  <div className="text-xl font-bold tracking-[-0.02em]">{f.title}</div>
                  <div className="text-[15px] leading-[1.6] text-body">{f.body}</div>
                </div>
              ))}
            </div>

            <div
              data-reveal="1"
              className="mt-3.5 flex flex-wrap items-center gap-[clamp(30px,5vw,70px)] rounded-card bg-panel p-[clamp(24px,4vw,56px)] text-white"
            >
              <div className="flex max-w-[420px] flex-[1_1_300px] flex-col gap-[18px]">
                <div className="mono-label text-[11px] text-sky">Fully responsive</div>
                <div className="text-[clamp(26px,2.8vw,38px)] leading-[1.1] font-bold tracking-[-0.035em]">
                  Built for the phone your clients watch on.
                </div>
                <div className="text-[15.5px] leading-[1.6] text-white/72">
                  Every section, including the cuts timeline, is designed for mobile, not just shrunk to fit.
                </div>
              </div>
              <div className="flex min-w-0 flex-[2_1_420px] items-start justify-center gap-[clamp(10px,2vw,22px)]">
                {PHONES.map((p) => (
                  <div
                    key={p.alt}
                    className={`min-w-0 max-w-[260px] flex-[1_1_0] overflow-hidden rounded-card border-[6px] border-[#2A2B2F] bg-well shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)] ${p.offset ? "mt-10" : ""}`}
                  >
                    <Image
                      src={p.image.src}
                      width={p.image.width}
                      height={p.image.height}
                      alt={p.alt}
                      sizes="(max-width: 768px) 33vw, 260px"
                      className="block h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              data-reveal="1"
              className="mt-3.5 flex flex-wrap items-center justify-between gap-x-[60px] gap-y-5 rounded-card bg-white p-[clamp(28px,3.5vw,48px)]"
            >
              <div className="text-sm text-label">Made for</div>
              <div className="flex flex-[1_1_500px] flex-wrap gap-x-9 gap-y-2.5 text-[clamp(20px,2vw,26px)] font-bold tracking-[-0.02em]">
                <span>Video editing agencies</span>
                <span>Production studios</span>
                <span>Creators and freelancers</span>
              </div>
            </div>
          </div>
        </section>

        {/* (03) CMS */}
        <section id="cms" className="px-section pt-section">
          <div className="wrap">
            <SectionHeader index="(03)" label="Sanity CMS">
              Edit every word, clip and logo <strong>without touching code.</strong>
            </SectionHeader>
            <CmsTabs />
          </div>
        </section>

        {/* (04) How it works */}
        <section id="how" className="px-section pt-section">
          <div className="wrap">
            <SectionHeader index="(04)" label="How it works">
              From purchase to <strong>live site.</strong>
            </SectionHeader>
            <div className="mt-[clamp(30px,4vw,50px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))]">
              {STEPS.map((s, i) => (
                <div key={s.title} data-reveal="1" className="flex flex-col gap-2.5 border-t border-ink/15 py-[26px] pr-[22px]">
                  <div className="font-mono text-xs text-acc">Step {i + 1}</div>
                  <div className="text-[19px] font-bold">{s.title}</div>
                  <div className="text-[14.5px] leading-[1.55] text-body">{s.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (05) Pricing */}
        <section id="pricing" className="px-3.5 pt-section">
          <div data-dark="1" className="relative overflow-hidden rounded-panel bg-panel px-[clamp(24px,5vw,72px)] py-[clamp(30px,5vw,72px)] text-white">
            <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-[clamp(30px,5vw,80px)]">
              <div className="flex flex-[1_1_360px] flex-col gap-[22px]">
                <div data-parallax="0.2" className="text-sm text-white/55">
                  (05) Pricing
                </div>
                <H2 dark className="text-[clamp(38px,5vw,76px)] leading-[1.05] tracking-[-0.045em]">
                  One price. <strong>Yours to keep.</strong>
                </H2>
                <p className="m-0 max-w-[44ch] text-base leading-[1.6] text-white/72">
                  Need it branded, extended or set up for you? Devnito can customise Sceneo for your studio.
                </p>
                <Link href="/#contact" className="self-start border-b border-white/40 pb-[3px] text-[15px] font-semibold">
                  Ask about customisation
                </Link>
              </div>
              <div
                data-reveal="1"
                className="flex max-w-[480px] flex-[1_1_380px] flex-col gap-6 rounded-card border border-white/10 bg-raised p-[clamp(26px,3.5vw,40px)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold">Sceneo</span>
                  <span className="mono-label text-[11px] text-sky">Website template</span>
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-[clamp(56px,6vw,80px)] leading-none font-bold tracking-[-0.05em]">$184</span>
                  <span className="text-[15px] text-white/60">one-time</span>
                </div>
                <ul className="m-0 flex list-none flex-col p-0 text-[15px]">
                  {INCLUDED.map((x) => (
                    <li key={x} className="flex gap-3 border-t border-white/10 py-[13px] last:border-b">
                      <span className="text-sky">✓</span>
                      {x}
                    </li>
                  ))}
                </ul>
                <SceneoBuy variant="pricing" />
                <SceneoCheckoutNote />
              </div>
            </div>
            <Spotlight />
          </div>
        </section>

        {/* (06) FAQ */}
        <section id="faq" className="px-section pt-section pb-[clamp(70px,9vw,120px)]">
          <div className="wrap flex flex-wrap justify-between gap-[30px]">
            <div data-reveal="1" className="flex-[1_1_240px]">
              <div className="text-sm text-label">(06)</div>
              <div className="mt-1 text-[15px] font-semibold">Questions</div>
            </div>
            <Faq />
          </div>
        </section>
      </main>

      <footer className="px-section pb-[90px]">
        <div className="wrap flex flex-wrap justify-between gap-3.5 border-t border-ink/15 pt-[26px] text-sm text-body">
          <span>Sceneo is a Devnito product.</span>
          <div className="flex flex-wrap gap-[22px]">
            <Link href="/">Devnito</Link>
            <Link href="/work">Work</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </footer>
    </SceneoPurchaseProvider>
  );
}
