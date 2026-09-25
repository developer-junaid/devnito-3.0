import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { img, type SiteImage } from "@/lib/images";
import { ArrowLink, BrowserDots, Cover, H2, SectionLabel, Shot } from "@/components/site/ui";
import { StackEffect } from "@/components/home/stack-effect";

/* ----------------------------------------------------------------------------------------------
 * Credits strip under the hero
 * ------------------------------------------------------------------------------------------- */

const CREDITS = [
  {
    href: "/work#stay-gold",
    label: "Via Stay Gold · since 2022",
    count: "10",
    body: "HartBeat Ventures, Aoki Labs, Markham Valley, BYL Ventures, Destiny, Sanbo, AMG, Union AI",
    rest: "+ ventures of Will Smith & Keisuke Honda",
  },
  {
    href: "/work#bnb",
    label: "With Bread & Butter · since 2025",
    count: "10+",
    body: "Steakhouse Financial, Grove Financial, Unfeatured Films, SunTrends, Cognitiv",
    rest: "and more across the partnership",
  },
  { href: "#products", label: "Devnito products", count: "3", body: "MyHealthClinic, Sceneo, MentorJunaid" },
  { href: "/work#direct", label: "Direct clients", count: "↗", body: "MenaJobs, Bolloot", rest: "and more" },
];

export function CreditsStrip() {
  return (
    <section className="px-section pt-[26px] pb-2.5">
      <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] border-t border-ink">
        {CREDITS.map((c, i) => {
          const Anchor = c.href.startsWith("#") ? "a" : Link;
          return (
            <Anchor
              key={c.label}
              href={c.href}
              data-reveal="1"
              className={clsx("flex flex-col gap-3.5 py-[22px]", i < CREDITS.length - 1 && "pr-6")}
            >
              <span className="mono-label flex justify-between text-[11px] text-body">
                <span>{c.label}</span>
                <span>{c.count}</span>
              </span>
              <span className="text-[clamp(20px,1.9vw,26px)] leading-[1.25] font-bold tracking-[-0.03em]">
                {c.body} {c.rest && <span className="font-light text-label">{c.rest}</span>}
              </span>
            </Anchor>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------------------------
 * Featured stack: six sticky cards, credited by organisation.
 * ------------------------------------------------------------------------------------------- */

type Card = {
  bg: string;
  counter: string;
  counterClass: string;
  eyebrow: string;
  name: ReactNode;
  small?: boolean;
  org: string;
  body: string;
  bodyClass: string;
  wide?: boolean;
  tags?: string[];
  stat?: { count: number; suffix: string; label: string; labelClass: string };
  cta?: { label: string; href: string; pill: "white" | "ink"; circle: "acc" | "ink" };
  footTags?: string[];
  /** Approved photo of the person; `position` sets the crop focus in the 3:4 frame. */
  portrait?: { image: SiteImage; alt: string; position?: string };
  mock: ReactNode;
};

function Chrome({ url, tone = "dark", divider }: { url: string; tone?: "dark" | "light"; divider?: boolean }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-1.5 px-3.5 py-[11px]",
        tone === "light" ? "border-b border-hair" : divider ? "border-b border-white/8" : "bg-[#111]",
      )}
    >
      <BrowserDots tone={tone} />
      <span
        className={clsx(
          "ml-3 rounded-full px-3 py-[5px] text-[11.5px]",
          tone === "light" ? "bg-[#F2F1ED] text-body" : "bg-white/6 text-white/70",
        )}
      >
        {url}
      </span>
    </div>
  );
}

const frame = "flex min-h-[340px] flex-1 flex-col overflow-hidden rounded-[20px]";

const CARDS: Card[] = [
  {
    bg: "bg-ink text-white",
    counter: "Via Stay Gold · Website",
    counterClass: "text-white/60",
    eyebrow: "Actor · Comedian · Hollywood star",
    name: (
      <>
        Kevin
        <br />
        Hart
      </>
    ),
    org: "HartBeat Ventures",
    body: "With Stay Gold, we engineered hartbeatventures.com, the home of Kevin Hart's venture firm.",
    bodyClass: "text-white/72",
    tags: ["Jumanji", "Central Intelligence", "Founder, HartBeat"],
    cta: { label: "Visit site", href: "https://www.hartbeatventures.com/", pill: "white", circle: "acc" },
    portrait: { image: img.portraitHart, alt: "Kevin Hart", position: "object-[58%_22%]" },
    mock: (
      <div className={clsx(frame, "border border-white/10 bg-night")}>
        <Chrome url="hartbeatventures.com" divider />
        <div data-reveal="1" className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Shot image={img.hartbeatPortfolio} alt="HartBeat Ventures portfolio, hartbeatventures.com" radius={false} shadow={false} />
          </div>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-acc text-white",
    counter: "Via Stay Gold · Website",
    counterClass: "text-white/75",
    eyebrow: "Grammy-nominated DJ & producer",
    name: (
      <>
        Steve
        <br />
        Aoki
      </>
    ),
    org: "Aoki Labs",
    body: "With Stay Gold, we engineered aokilabs.vc, the site for Steve Aoki's venture arm. Its portfolio includes Audio Media Grading, the platform we rebuilt.",
    bodyClass: "text-white/85",
    tags: ["200+ shows a year", "65M+ platform reach"],
    stat: { count: 11, suffix: "M", label: "followers on Instagram", labelClass: "text-white/85" },
    cta: { label: "Visit site", href: "https://www.aokilabs.vc", pill: "white", circle: "ink" },
    portrait: { image: img.portraitAoki, alt: "Steve Aoki", position: "object-[50%_20%]" },
    mock: (
      <div className={clsx(frame, "bg-night")}>
        <Chrome url="aokilabs.vc" />
        <div data-reveal="1" className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Shot image={img.aokiSite} alt="Aoki Labs, aokilabs.vc" radius={false} shadow={false} />
          </div>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-sand text-ink",
    counter: "Via Stay Gold · Website",
    counterClass: "text-body",
    eyebrow: "Marvel's Shang-Chi · Actor",
    name: (
      <>
        Simu
        <br />
        Liu
      </>
    ),
    org: "Markham Valley Ventures",
    body: "With Stay Gold, we engineered markham.vc for the AAPI-focused venture firm Simu Liu co-founded.",
    bodyClass: "text-deep",
    tags: ["Shang-Chi", "Barbie", "UNICEF Canada Ambassador"],
    stat: { count: 10, suffix: "M+", label: "global social reach", labelClass: "text-deep" },
    cta: { label: "Visit site", href: "https://www.markham.vc", pill: "ink", circle: "acc" },
    portrait: { image: img.portraitSimu, alt: "Simu Liu", position: "object-top" },
    mock: (
      <div className={clsx(frame, "bg-white")}>
        <Chrome url="markham.vc" tone="light" />
        <div data-reveal="1" className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Shot image={img.markhamSite} alt="Markham Valley Ventures, markham.vc" radius={false} shadow={false} />
          </div>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-panel text-white",
    counter: "Via Stay Gold",
    counterClass: "text-white/60",
    eyebrow: "Founder & CEO, Destiny · Angel investor",
    name: (
      <>
        Sohail
        <br />
        Prasad
      </>
    ),
    org: "Destiny (D/XYZ)",
    body: "Sohail founded Forge (NYSE: FRGE) and now leads Destiny, whose Destiny Tech100 (NYSE: DXYZ) opens private tech to public investors. Through Stay Gold, Devnito engineers for Destiny.",
    bodyClass: "text-white/72",
    stat: { count: 150, suffix: "+", label: "startups backed, including 10+ unicorns", labelClass: "text-white/72" },
    footTags: ["Founder, Forge (NYSE: FRGE)", "YC alum", "Thiel Fellow", "30 Under 30"],
    portrait: { image: img.portraitSohail, alt: "Sohail Prasad" },
    mock: (
      <a href="https://destiny.xyz/" target="_blank" rel="noopener" className={clsx(frame, "bg-night")}>
        <Chrome url="destiny.xyz" />
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-[#F3F0EA]">
            <Shot image={img.destinySite} alt="Destiny, destiny.xyz" radius={false} shadow={false} />
          </div>
        </div>
      </a>
    ),
  },
  {
    bg: "bg-forest text-white",
    counter: "Via Stay Gold · Platform",
    counterClass: "text-white/65",
    eyebrow: "AI-native OS for private-market investors",
    name: "Sanbo",
    small: true,
    org: "Built for Tashi Nakanishi · BYL Ventures",
    body: "Tashi Nakanishi of X&, owner of BYL Ventures, built Sanbo, the AI-native operating system for private-market investors: every deal, document and data point in one live layer. Devnito leads its development.",
    bodyClass: "text-white/78",
    wide: true,
    tags: ["Pipeline", "Portfolio", "IC memos", "English & Japanese"],
    cta: { label: "Visit site", href: "http://sanbo.io/", pill: "white", circle: "acc" },
    portrait: { image: img.portraitTashi, alt: "Tashi Nakanishi" },
    mock: (
      <div className={clsx(frame, "bg-night")}>
        <Chrome url="sanbo.io" />
        <div data-reveal="1" className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-olive p-4">
            <Shot image={img.sanboSite} alt="Sanbo, from sanbo.io" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    bg: "bg-white text-ink",
    counter: "Via Stay Gold",
    counterClass: "text-body",
    eyebrow: "Oscar winner · Japan football icon",
    name: (
      <>
        Will Smith
        <br />
        <span className="font-light text-soft">&amp;</span> Keisuke Honda
      </>
    ),
    small: true,
    org: "Stay Gold · since 2022",
    body: "Through our long-term engineering relationship with Stay Gold, we supported ventures connected to Will Smith and footballer Keisuke Honda.",
    bodyClass: "text-body",
    wide: true,
    tags: ["Academy Award winner", "3 FIFA World Cups"],
    cta: { label: "How we embed", href: "#services", pill: "ink", circle: "acc" },
    portrait: { image: img.portraitWill, alt: "Will Smith", position: "object-[74%_30%]" },
    mock: (
      <div
        data-mock="1"
        className={clsx(frame, "justify-between bg-ink p-[clamp(24px,3vw,40px)] text-white")}
      >
        <div className="mono-label text-[11px] text-sky">Stay Gold network</div>
        <div className="flex flex-col gap-1 text-[clamp(24px,2.6vw,38px)] leading-[1.1] font-bold tracking-[-0.035em]">
          <span className="font-light text-white/55">Will Smith</span>
          <span>Keisuke Honda</span>
          <span className="font-light text-white/55">Giannis Antetokounmpo</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Architecture", "Sanbo", "Fund websites"].map((t) => (
            <span key={t} className="rounded-full border border-white/20 px-3 py-[7px] text-[12.5px]">
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

function FeaturedCard({ card, index }: { card: Card; index: number }) {
  return (
    <div
      className={clsx(
        "flex min-h-[clamp(520px,74vh,660px)] origin-top flex-wrap overflow-hidden rounded-panel",
        card.bg,
      )}
    >
      <div className="flex flex-[1_1_340px] flex-col justify-between gap-[30px] p-[clamp(28px,4vw,52px)]">
        <div className={clsx("flex justify-between font-mono text-[11.5px] tracking-[0.12em] uppercase", card.counterClass)}>
          <span>0{index + 1} / 06</span>
          <span>{card.counter}</span>
        </div>
        <div>
          <div className="mb-3.5 inline-flex items-center gap-2 text-[13.5px] font-semibold opacity-85">
            <span className="size-[7px] rounded-full bg-current" />
            {card.eyebrow}
          </div>
          <div
            className={clsx(
              "font-bold tracking-[-0.055em]",
              card.small ? "text-[clamp(44px,5.4vw,86px)] leading-[0.94]" : "text-[clamp(52px,6.6vw,104px)] leading-[0.92]",
            )}
          >
            {card.name}
          </div>
          <div className="mt-5 text-[clamp(18px,1.6vw,22px)] font-semibold">{card.org}</div>
          <p className={clsx("mt-2 text-[15px] leading-[1.6]", card.wide ? "max-w-[38ch]" : "max-w-[36ch]", card.bodyClass)}>
            {card.body}
          </p>
          {card.tags && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {card.tags.map((t) => (
                <span key={t} className="rounded-full border border-current px-[13px] py-[7px] text-[12.5px] font-semibold opacity-85">
                  {t}
                </span>
              ))}
            </div>
          )}
          {card.stat && (
            <div className="mt-[18px] flex items-baseline gap-2.5">
              <span className="text-[clamp(34px,3.4vw,48px)] font-bold tracking-[-0.04em]">
                <span data-count={card.stat.count}>{card.stat.count}</span>
                {card.stat.suffix}
              </span>
              <span className={clsx("text-sm", card.stat.labelClass)}>{card.stat.label}</span>
            </div>
          )}
        </div>
        {card.cta && (
          <ArrowLink
            href={card.cta.href}
            label={card.cta.label}
            size="xs"
            pill={card.cta.pill}
            circle={card.cta.circle}
            className="self-start"
          />
        )}
        {card.footTags && (
          <div className="flex flex-wrap gap-2">
            {card.footTags.map((t) => (
              <span key={t} className="rounded-full border border-white/25 px-3.5 py-2 text-[13px]">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="relative flex min-w-0 flex-[1.35_1_420px] p-[clamp(14px,2vw,22px)]">
        {card.portrait && (
          <div
            className={clsx(
              "absolute right-[clamp(24px,3vw,40px)] bottom-[clamp(24px,3vw,40px)] z-[3] aspect-[3/4] w-[clamp(140px,30%,230px)] overflow-hidden rounded-[20px] border-[5px] border-white bg-[#2A2B2F] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]",
              index % 2 ? "rotate-3" : "-rotate-3",
            )}
          >
            <Cover image={card.portrait.image} alt={card.portrait.alt} sizes="230px" className={card.portrait.position} />
          </div>
        )}
        {card.mock}
      </div>
    </div>
  );
}

export function Featured() {
  return (
    <section id="featured" className="px-3.5 pt-[clamp(70px,9vw,120px)]">
      <div className="mx-auto mb-[clamp(40px,5vw,64px)] flex max-w-[1320px] flex-wrap items-end justify-between gap-[30px] px-[clamp(14px,4vw,56px)]">
        <div data-reveal="1" className="flex-[1_1_240px]">
          <SectionLabel index="Featured" label="Names you know" />
        </div>
        <H2 className="max-w-[760px] flex-[2_1_520px] text-[clamp(32px,4vw,58px)] leading-[1.1]">
          The <strong>venture firms</strong> behind some of the <strong>biggest names</strong> in entertainment and sport.
        </H2>
      </div>

      <StackEffect className="mx-auto flex max-w-[1360px] flex-col gap-[22px] pb-10">
        {/* Sticky only once the card's two columns sit side by side; stacked cards are taller
            than the viewport and the next card would cover their screenshots. */}
        {CARDS.map((card, i) => (
          <div key={i} data-stack="1" className="lg:sticky" style={{ top: 80 + i * 16 }}>
            <FeaturedCard card={card} index={i} />
          </div>
        ))}
      </StackEffect>
    </section>
  );
}
