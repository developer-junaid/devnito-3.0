import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { img, type SiteImage } from "@/lib/images";
import { INNER_NAV, SCENEO_DEMO_URL } from "@/lib/site";
import { Spotlight } from "@/components/site/motion";
import { FloatingNav, SiteHeader } from "@/components/site/nav";
import { ContactPanel } from "@/components/site/contact-panel";
import { ArrowLink, Badge, Eyebrow, Headline, Shot } from "@/components/site/ui";
import { DirectClients } from "@/components/home/partner-work";
import { MentorJunaidCard, MhcScreens } from "@/components/home/products";
import { BNB_SHOWCASES, Showcase } from "@/components/site/showcase";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from 70+ projects: platforms engineered with Stay Gold and Bread & Butter Design, direct client builds, and Devnito's own products.",
  alternates: { canonical: "/work" },
};

const CHAPTERS = [
  { href: "#stay-gold", n: "01 · Partner", meta: "Since 2022", name: "Stay Gold", note: "10 projects ↓" },
  { href: "#bnb", n: "02 · Partner", meta: "Since 2025", name: "Bread & Butter", note: "10+ projects ↓" },
  { href: "#direct", n: "03 · Direct", meta: "Devnito", name: "Direct clients", note: "↓" },
];

function ChapterHeader({
  eyebrow,
  title,
  body,
  facts,
  dark,
}: {
  eyebrow: string;
  title: string;
  body: string;
  facts?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-end justify-between gap-[30px] border-b pb-[26px]",
        dark ? "border-white/30" : "border-ink",
      )}
    >
      <div className="max-w-[760px] flex-[1_1_520px]">
        <div data-reveal="1" className={clsx("mono-label text-[11.5px]", dark ? "text-white/65" : "text-body")}>
          {eyebrow}
        </div>
        <h2 className="mt-[18px] mb-0 text-[clamp(40px,5.6vw,84px)] leading-none font-bold tracking-[-0.045em]">{title}</h2>
        <p data-reveal="1" className={clsx("mt-[18px] max-w-[56ch] text-base leading-[1.65]", dark ? "text-white/72" : "text-deep")}>
          {body}
        </p>
      </div>
      {facts}
    </div>
  );
}

function Facts({ design, projects }: { design: string; projects: string }) {
  const rows = [
    ["Our role", "Head of Engineering"],
    ["Design & client", design],
    ["Projects", projects],
  ];
  return (
    <div data-reveal="1" className="flex flex-[0_1_300px] flex-col gap-2 text-[13.5px]">
      {rows.map(([k, v], i) => (
        <div key={k} className={clsx("flex justify-between gap-3 py-2.5", i < rows.length - 1 && "border-b border-rule")}>
          <span className="text-label">{k}</span>
          <span className="font-semibold">{v}</span>
        </div>
      ))}
    </div>
  );
}

const VENTURE_SITES: { href: string; domain: string; who: string; name: string; image: SiteImage }[] = [
  {
    href: "https://www.hartbeatventures.com/",
    domain: "hartbeatventures.com",
    who: "Kevin Hart",
    name: "HartBeat Ventures",
    image: img.hartbeatMission,
  },
  { href: "https://www.aokilabs.vc", domain: "aokilabs.vc", who: "Steve Aoki", name: "Aoki Labs", image: img.aokiSite },
  { href: "https://www.markham.vc", domain: "markham.vc", who: "Simu Liu", name: "Markham Valley Ventures", image: img.markhamSite },
  {
    href: "https://www.bylventures.com",
    domain: "bylventures.com",
    who: "Giannis Antetokounmpo",
    name: "BYL Ventures",
    image: img.bylGiannis,
  },
];

const BNB_SITES = [
  { href: "https://www.steakhouse.financial/", domain: "steakhouse.financial", name: "Steakhouse Financial", image: img.steakhouseSite },
  { href: "https://grove.financial/", domain: "grove.financial", name: "Grove Financial", image: img.groveSite },
];

export default function WorkPage() {
  return (
    <>
      <FloatingNav
        items={[
          { label: "Stay Gold", href: "#stay-gold" },
          { label: "Bread & Butter", href: "#bnb" },
          { label: "Products", href: "#products" },
        ]}
        cta={{ label: "Let's talk", href: "#contact" }}
      />
      <main>
        {/* Hero */}
        <section className="p-3.5">
          <div data-dark="1" data-hero-card="1" className="relative overflow-hidden rounded-panel bg-ink p-[clamp(20px,3vw,40px)] text-white">
            <SiteHeader
              items={INNER_NAV}
              cta={{ label: "Start a project", href: "#contact" }}
              right={<ArrowLink href="#contact" label="Start a project" circle="white" size="md" />}
            />
            <div className="mt-[clamp(60px,9vw,130px)] flex flex-wrap items-end justify-between gap-[30px]">
              <div className="max-w-[900px] flex-[1_1_560px]">
                <Eyebrow dot={false}>Selected work · 70+ projects delivered</Eyebrow>
                <Headline
                  className="mt-[22px] text-[clamp(44px,7vw,104px)]"
                  parts={["Software that ", { strong: "businesses run on." }]}
                />
              </div>
              <p data-hero="1" className="m-0 flex-[0_1_380px] text-[15.5px] leading-[1.65] text-white/72">
                Much of our work ships through two long-term studio partners, who own the design and the client
                relationship. Devnito leads the engineering. We also build for clients directly, and run products of our
                own.
              </p>
            </div>
            <div data-hero="1" className="mt-[clamp(40px,5vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-2.5">
              {CHAPTERS.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  data-hover="1"
                  className="flex flex-col gap-[18px] rounded-[20px] border border-white/16 px-[22px] py-5 transition-colors hover:bg-white/6"
                >
                  <span className="mono-label flex justify-between text-[11px] text-white/60">
                    <span>{c.n}</span>
                    <span>{c.meta}</span>
                  </span>
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-2xl font-bold tracking-[-0.02em]">{c.name}</span>
                    <span className="text-[15px] text-white/70">{c.note}</span>
                  </span>
                </a>
              ))}
              <a href="#products" data-hover="1" className="flex flex-col gap-[18px] rounded-[20px] bg-white px-[22px] py-5 text-ink">
                <span className="mono-label flex justify-between text-[11px] text-body">
                  <span>04 · Owned</span>
                  <span>Devnito</span>
                </span>
                <span className="flex items-baseline justify-between gap-3">
                  <span className="text-2xl font-bold tracking-[-0.02em]">Our products</span>
                  <span className="text-[15px] text-body">3 products ↓</span>
                </span>
              </a>
            </div>
            <Spotlight />
          </div>
        </section>

        {/* Chapter 01 · Stay Gold */}
        <section id="stay-gold" className="px-section pt-[clamp(70px,9vw,120px)]">
          <div className="wrap">
            <ChapterHeader
              eyebrow="Chapter 01 · Engineering partner"
              title="Through Stay Gold"
              body="Since 2022 Devnito has led engineering for Stay Gold, the studio behind venture firms and platforms for founders, athletes and entertainers. Stay Gold owns brand, design and the client relationship. We own architecture and delivery."
              facts={<Facts design="Stay Gold" projects="10" />}
            />

            <div className="mt-[22px] flex flex-wrap gap-3.5">
              <Link
                href="/work/amg"
                data-reveal="1"
                data-tilt="1"
                className="relative flex h-[clamp(440px,42vw,580px)] min-w-0 flex-[2_1_560px] flex-col overflow-hidden rounded-card bg-panel text-white"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center px-[18px] pt-[58px] pb-3.5">
                  <Shot image={img.amgGradingDetail} alt="AMG graded item record" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]" />
                </div>
                <div className="absolute top-[18px] right-[18px] left-[18px] flex flex-wrap justify-between gap-2">
                  <Badge>Case study</Badge>
                  <span className="rounded-full bg-ink/60 px-[13px] py-[7px] text-xs backdrop-blur-[10px]">Via Stay Gold</span>
                </div>
                <div className="relative px-[22px] pb-[22px]">
                  <div className="text-[12.5px] text-white/70">Audio Media Grading · Platform transformation</div>
                  <div className="mt-1.5 text-[clamp(24px,2.4vw,32px)] leading-[1.15] font-bold tracking-[-0.025em]">
                    AMG, a decade-old grading business moved onto one platform
                  </div>
                  <div className="mt-2 max-w-[56ch] text-sm leading-[1.55] text-white/78">
                    Submissions, grading, labels, QR tracking, shipping and a storefront, migrated while the business kept
                    operating. Live at audiomediagrading.com.
                  </div>
                  <div className="btn-label mt-4 flex items-center justify-between bg-white px-[18px] py-3 text-[12.5px] text-ink">
                    <span>Read case study</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>

              <div
                data-reveal="1"
                data-tilt="1"
                className="relative flex h-[clamp(440px,42vw,580px)] min-w-0 flex-[1_1_320px] flex-col overflow-hidden rounded-card bg-sage text-ink"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center px-[18px] pt-[60px] pb-[18px]">
                  <Shot image={img.unionSite} alt="Union, from unionagency.co" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]" sizes="(max-width: 768px) 100vw, 35vw" />
                </div>
                <div className="absolute top-[18px] left-[18px]">
                  <span className="rounded-full bg-ink px-[13px] py-[7px] text-xs text-white">Via Stay Gold</span>
                </div>
                <div className="bg-white px-5 pt-[18px] pb-5">
                  <div className="flex justify-between gap-2.5 text-[12.5px] text-label">
                    <span>AI · Introductions network</span>
                    <span className="font-mono text-[10.5px]">unionagency.co</span>
                  </div>
                  <div className="mt-1.5 text-xl font-bold tracking-[-0.02em]">Union AI</div>
                  <div className="mt-1 text-[13.5px] leading-[1.5] text-body">
                    Tell Union who you need to meet. Matchmakers, helped by AI, find the right person, check both sides want
                    to meet, and introduce you.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3.5 flex flex-wrap gap-3.5">
              <a
                href="http://sanbo.io/"
                target="_blank"
                rel="noopener"
                data-reveal="1"
                data-tilt="1"
                className="relative flex h-[clamp(400px,36vw,480px)] min-w-0 flex-[2_1_560px] flex-col overflow-hidden rounded-card bg-white"
              >
                <div className="flex min-h-0 flex-1 items-center justify-center bg-olive p-[clamp(16px,2.5vw,28px)]">
                  <Shot image={img.sanboSite} alt="Sanbo, from sanbo.io" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]" />
                </div>
                <div className="flex flex-wrap items-end justify-between gap-3 border-t border-hair px-[22px] pt-[18px] pb-[22px]">
                  <div>
                    <div className="text-[12.5px] text-label">Via Stay Gold · Private-market investing</div>
                    <div className="mt-1.5 text-xl font-bold tracking-[-0.02em]">Sanbo</div>
                    <div className="mt-1 text-[13.5px] text-body">
                      The AI-native operating system for private-market investors. Deals, portfolio, IC memos and cited
                      answers in one live layer. Devnito is development lead.
                    </div>
                  </div>
                  <span className="font-mono text-[10.5px] text-soft">sanbo.io ↗</span>
                </div>
              </a>
              <div
                data-reveal="1"
                className="flex h-[clamp(400px,36vw,480px)] min-w-0 flex-[1_1_320px] flex-col justify-between rounded-card bg-ink p-[26px] text-white"
              >
                <div className="mono-label text-[11px] text-sky">Via Stay Gold · Ventures</div>
                <div>
                  <div className="flex flex-col gap-0.5 text-[clamp(26px,2.6vw,36px)] leading-[1.1] font-bold tracking-[-0.035em]">
                    <span>Will Smith</span>
                    <span className="font-light text-white/60">&amp; Keisuke Honda</span>
                  </div>
                  <p className="mt-3.5 mb-0 text-sm leading-[1.6] text-white/72">
                    Engineering support for ventures connected to the actor and the Japanese football icon.
                  </p>
                </div>
              </div>
            </div>

            <div data-reveal="1" className="mt-[clamp(40px,5vw,60px)] flex flex-wrap items-baseline justify-between gap-5">
              <div className="text-[clamp(22px,2.2vw,30px)] font-bold tracking-[-0.03em]">Venture firm websites</div>
              <div className="text-[13.5px] text-body">Engineered by Devnito, designed by Stay Gold.</div>
            </div>
            <div className="mt-[18px] grid grid-cols-[repeat(auto-fill,minmax(min(100%,290px),1fr))] gap-3.5">
              {VENTURE_SITES.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  data-reveal="1"
                  data-tilt="1"
                  className="flex flex-col overflow-hidden rounded-tile bg-white"
                >
                  <div className="relative flex h-[210px] items-center justify-center bg-panel p-3">
                    <Shot image={s.image} alt={`${s.name} · ${s.who}`} sizes="(max-width: 768px) 100vw, 300px" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]" />
                  </div>
                  <div className="px-[18px] pt-4 pb-[18px]">
                    <div className="flex justify-between text-[12.5px] text-label">
                      <span>{s.who} · Via Stay Gold</span>
                      <span>↗</span>
                    </div>
                    <div className="mt-1 text-lg font-bold tracking-[-0.02em]">{s.name}</div>
                  </div>
                </a>
              ))}
              <a
                href="https://destiny.xyz/"
                target="_blank"
                rel="noopener"
                data-reveal="1"
                data-tilt="1"
                className="flex flex-col overflow-hidden rounded-tile bg-white"
              >
                <div className="relative flex h-[210px] items-center justify-center bg-panel p-3">
                  <Shot
                    image={img.destinyHoldings}
                    alt="Destiny top 10 holdings, destiny.xyz"
                    sizes="(max-width: 768px) 100vw, 300px"
                    shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]"
                  />
                </div>
                <div className="px-[18px] pt-4 pb-[18px]">
                  <div className="text-[12.5px] text-label">Sohail Prasad · Via Stay Gold</div>
                  <div className="mt-1 text-lg font-bold tracking-[-0.02em]">Destiny · NYSE: DXYZ</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Chapter 02 · Bread & Butter */}
        <section id="bnb" className="px-section pt-[clamp(90px,11vw,150px)]">
          <div className="wrap">
            <ChapterHeader
              eyebrow="Chapter 02 · Engineering partner"
              title="With Bread & Butter"
              body="Devnito is the engineering half of Bread & Butter Design, a US studio. An initial engagement in 2025 grew into more than ten projects. Bread & Butter leads design and the client; we build what they design."
              facts={<Facts design="Bread & Butter Design" projects="10+" />}
            />
            <div className="mt-[22px] flex flex-wrap gap-3.5">
              {BNB_SITES.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  data-reveal="1"
                  data-tilt="1"
                  className="flex min-w-0 flex-[1_1_420px] flex-col overflow-hidden rounded-card bg-white"
                >
                  <div className="relative h-[clamp(260px,26vw,360px)] bg-panel">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shot image={s.image} alt={`${s.name}, ${s.domain}`} radius={false} shadow={false} sizes="(max-width: 900px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div className="px-[22px] pt-5 pb-[22px]">
                    <div className="flex justify-between gap-2.5 text-[12.5px] text-label">
                      <span>Via Bread &amp; Butter · Contributed engineering</span>
                      <span>↗</span>
                    </div>
                    <div className="mt-1.5 text-[22px] font-bold tracking-[-0.02em]">{s.name}</div>
                    <div className="mt-1 text-[13.5px] leading-[1.5] text-body">
                      Engineering on the public website, built to Bread &amp; Butter&apos;s design.
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {BNB_SHOWCASES.map((project) => (
              <Showcase key={project.name} project={project} />
            ))}
            <div
              data-reveal="1"
              className="mt-3.5 flex flex-wrap items-end justify-between gap-8 rounded-card bg-white p-[clamp(28px,4vw,56px)]"
            >
              <blockquote className="m-0 flex-[1_1_520px] text-[clamp(20px,2.2vw,32px)] leading-[1.28] font-normal tracking-[-0.025em] text-pretty">
                <span className="text-acc">“</span>Extremely scalable, fast, high-performing code… The code mimics the
                design, so there is minimal QA needed. Their attention to detail is fantastic. They are partners to us, and
                I trust them with any project.<span className="text-acc">”</span>
              </blockquote>
              <div className="flex w-full flex-[0_1_260px] items-center gap-3.5 border-t border-ink pt-4">
                <span className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white">
                  DS
                </span>
                <div>
                  <div className="text-[15px] font-bold tracking-[0.02em] uppercase">Drew Sima</div>
                  <div className="mt-0.5 text-[13px] text-body">Co-founder, Bread &amp; Butter Design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 03 · Direct */}
        <section id="direct" className="px-section pt-[clamp(90px,11vw,150px)]">
          <div className="wrap">
            <ChapterHeader
              eyebrow="Chapter 03 · Direct engagements"
              title="Direct clients"
              body="Products Devnito designed and built for founders who came to us directly. The client owns the product; we own delivery."
            />
            <div className="mt-[22px]">
              <DirectClients tilt tall />
            </div>
          </div>
        </section>

        {/* Chapter 04 · Products */}
        <section id="products" className="px-3.5 pt-[clamp(90px,11vw,150px)] pb-3.5">
          <div data-dark="1" className="relative overflow-hidden rounded-panel bg-ink p-[clamp(28px,5vw,70px)] text-white">
            <div className="wrap">
              <ChapterHeader
                dark
                eyebrow="Chapter 04 · Owned by Devnito"
                title="Our own products"
                body="Products we designed, built and run ourselves, and license to other businesses."
                facts={
                  <div data-reveal="1" className="text-sm text-white/72">
                    3 products
                  </div>
                }
              />

              <div data-reveal="1" className="mt-[22px] flex flex-wrap overflow-hidden rounded-card bg-cream text-ink">
                <div className="flex flex-[1_1_360px] flex-col justify-between gap-[30px] p-[clamp(26px,4vw,52px)]">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-wine text-white">Flagship SaaS</Badge>
                      <span className="rounded-full border border-ink px-[13px] py-[7px] text-xs">
                        Launching soon in Saudi Arabia &amp; Pakistan
                      </span>
                    </div>
                    <div className="mt-6 text-[clamp(34px,4vw,56px)] leading-none font-bold tracking-[-0.045em]">MyHealthClinic</div>
                    <p className="mt-3.5 max-w-[44ch] text-base leading-[1.6] text-deep">
                      Clinic management for hospitals and clinics. One record of the day, from the patient token to the
                      receipt: queues, doctor workflows, prescriptions, vitals, revenue and staff roles.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {["Live queue", "Prescriptions & vitals", "Billing", "Staff roles"].map((t) => (
                        <span key={t} className="rounded-full bg-white px-[13px] py-[7px] text-[13px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowLink href="https://app.myhealthclinic.online/" label="Open the app" pill="ink" circle="wine" size="sm" className="self-start" />
                </div>
                <MhcScreens well="bg-[#EAE6DE]" />
              </div>

              <div className="mt-3.5 flex flex-wrap gap-3.5">
                <a
                  href={SCENEO_DEMO_URL}
                  target="_blank"
                  rel="noopener"
                  data-reveal="1"
                  data-tilt="1"
                  className="relative flex h-[clamp(420px,40vw,540px)] min-w-0 flex-[2_1_560px] flex-col overflow-hidden rounded-3xl bg-well"
                >
                  <div className="flex min-h-0 flex-1 items-center justify-center px-[18px] pt-[58px] pb-3.5">
                    <Shot image={img.sceneoHero} alt="Sceneo Studio homepage" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]" />
                  </div>
                  <div className="relative flex flex-wrap items-end justify-between gap-4 px-[22px] pb-[22px]">
                    <div className="max-w-[52ch]">
                      <div className="text-[12.5px] text-white/70">Product · Website template for video studios</div>
                      <div className="mt-1.5 text-[clamp(24px,2.4vw,32px)] font-bold tracking-[-0.025em]">Sceneo</div>
                      <div className="mt-1.5 text-sm leading-[1.55] text-white/78">
                        A ready-made site for video production and creative agencies. Reel timeline, services and process, all
                        editable in Sanity.
                      </div>
                    </div>
                    <span className="btn-label bg-white px-[18px] py-3 text-[12.5px] text-ink">View live demo ↗</span>
                  </div>
                </a>
                <MentorJunaidCard label="Product · Learning platform" className="h-[clamp(420px,40vw,540px)] min-w-0 flex-[1_1_320px] rounded-3xl" />
              </div>
            </div>
            <Spotlight />
          </div>
        </section>

        <ContactPanel
          className="px-3.5 pb-3.5"
          heading={
            <>
              Your project could be <strong>next.</strong>
            </>
          }
          cta="Let's talk"
          middle={<span>Partner work is shown with the permission of Stay Gold and Bread &amp; Butter Design.</span>}
        />
      </main>
    </>
  );
}
