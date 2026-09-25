"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { img, type SiteImage } from "@/lib/images";

type Tab = { label: string; image: SiteImage; desc: string };

const SHOTS: Tab[] = [
  { label: "Hero", image: img.scHero, desc: "Your reel loops behind the headline, with a sound toggle and a service ticker underneath." },
  {
    label: "Selected cuts · 16:9",
    image: img.scCutsWide,
    desc: "Scroll to scrub through the timeline. Each clip shows its code, format and a short description.",
  },
  {
    label: "Selected cuts · 9:16",
    image: img.scCutsVertical,
    desc: "Vertical clips get a vertical frame, so shortform work is shown the way it was cut.",
  },
  { label: "What we cut", image: img.scServices, desc: "Services with a one-line pitch and the exact deliverables for each." },
  { label: "Timeline & clients", image: img.scTimeline, desc: "Your process as four steps, a scrolling client strip and a testimonial slider." },
  { label: "Contact", image: img.scContact, desc: "A big email button that copies the address, plus a second link of your choice." },
];

const CMS: Tab[] = [
  {
    label: "Site content",
    image: img.scCmsStudio,
    desc: "One document holds the whole site, split into tabs: brand, hero, stats, cuts, services, process, clients, contact and buttons.",
  },
  { label: "Brand & SEO", image: img.scCmsBrand, desc: "Brand name, tagline, page title, description and the social share image." },
  { label: "Hero reel", image: img.scCmsReel, desc: "Paste a YouTube link or upload an MP4, and edit the scrolling ticker under the hero." },
  { label: "Services", image: img.scCmsServices, desc: "Add, reorder or remove services and their deliverables by dragging." },
  { label: "Clients", image: img.scCmsClients, desc: "Upload a logo, or type a name to show it as text in the scrolling strip." },
  {
    label: "Contact & footer",
    image: img.scCmsContact,
    desc: "Contact email, the line above the headline, the second button and footer links.",
  },
];

const FAQS = [
  {
    q: "Do I need to know how to code?",
    a: "No, not to manage content. Everything day to day happens in Sanity. Initial deployment follows the setup guide; if you would rather not, Devnito can set it up for you.",
  },
  {
    q: "Can you customise it for my studio?",
    a: "Yes. Devnito can brand, extend or fully set up Sceneo for you. Get in touch with what you need and we will send a quote.",
  },
  { q: "Can I use my own reel and videos?", a: "Yes. Use a YouTube link or upload MP4s straight into Sanity for the hero and each cut." },
  {
    q: "Where is it hosted?",
    a: "Sceneo is built to deploy on Vercel. Sanity hosts the content. Both have free tiers suitable for most studios.",
  },
  {
    q: "How do I receive it?",
    a: "Right after checkout, the source code and setup guide are ready to download from your Whop account. You also get a receipt by email.",
  },
  {
    q: "What can I do with it?",
    a: "Each purchase covers one website, for your own studio or for a client. Customise it as much as you like. You can't resell or redistribute Sceneo itself, as a template, theme or starter kit, on its own or bundled into another product.",
  },
];

function TabList({ tabs, active, onPick, label }: { tabs: Tab[]; active: number; onPick: (i: number) => void; label: string }) {
  return (
    <div role="tablist" aria-label={label} className="mt-[clamp(30px,4vw,50px)] flex flex-wrap gap-2">
      {tabs.map((t, i) => (
        <button
          key={t.label}
          type="button"
          role="tab"
          aria-selected={active === i}
          onClick={() => onPick(i)}
          className={clsx(
            "rounded-full border px-[18px] py-[11px] text-[14.5px] font-semibold transition-colors duration-[250ms]",
            active === i ? "border-ink bg-ink text-white" : "border-ink/20 bg-transparent text-ink",
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** True once the element is within ~one viewport of the screen. */
function useNear<T extends Element>() {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "100% 0px" });
    io.observe(el.parentElement ?? el); // the wrapper is display: contents, so watch its box parent
    return () => io.disconnect();
  }, []);
  return [ref, near] as const;
}

/**
 * Every tab's image stays mounted; the hidden ones switch to eager loading once the panel is
 * near the viewport, so changing tabs never waits on a lazy load.
 */
function TabImages({ tabs, active, className }: { tabs: Tab[]; active: number; className?: string }) {
  const [ref, near] = useNear<HTMLDivElement>();
  return (
    <div ref={ref} className="contents">
      {tabs.map((t, i) => (
    <Image
      key={t.image.src}
      src={t.image.src}
      width={t.image.width}
      height={t.image.height}
      alt={t.label}
      loading={near ? "eager" : "lazy"}
      sizes="(max-width: 900px) 100vw, 70vw"
      aria-hidden={i !== active}
      className={clsx("h-auto max-h-full w-auto max-w-full rounded-shot", i === active ? "block" : "hidden", className)}
    />
      ))}
    </div>
  );
}

export function ScreenTabs() {
  const [shot, setShot] = useState(0);
  const s = SHOTS[shot];
  return (
    <>
      <TabList tabs={SHOTS} active={shot} onPick={setShot} label="Sceneo screens" />
      <div role="tabpanel" data-reveal="1" className="mt-4 flex flex-col gap-[18px] rounded-card bg-panel p-[clamp(14px,2.4vw,28px)]">
        <div className="flex aspect-video max-h-[72vh] w-full items-center justify-center">
          <TabImages tabs={SHOTS} active={shot} className="shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]" />
        </div>
        <div className="flex flex-wrap justify-between gap-2.5 text-white">
          <div className="text-base font-bold">{s.label}</div>
          <div className="max-w-[60ch] text-[14.5px] leading-[1.55] text-white/72">{s.desc}</div>
        </div>
      </div>
    </>
  );
}

export function CmsTabs() {
  const [cms, setCms] = useState(0);
  const c = CMS[cms];
  return (
    <>
      <TabList tabs={CMS} active={cms} onPick={setCms} label="Sanity Studio screens" />
      <div role="tabpanel" data-reveal="1" className="mt-4 flex flex-wrap items-center gap-6 rounded-card bg-[#15161C] p-[clamp(14px,2.4vw,28px)]">
        <div className="flex aspect-[16/10] max-h-[70vh] min-w-0 flex-[2_1_460px] items-center justify-center">
          <TabImages tabs={CMS} active={cms} className="shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
        </div>
        <div className="flex max-w-[360px] flex-[1_1_240px] flex-col gap-2.5 p-2 text-white">
          <div className="text-xl font-bold tracking-[-0.02em]">{c.label}</div>
          <div className="text-[15px] leading-[1.6] text-white/72">{c.desc}</div>
        </div>
      </div>
    </>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex max-w-[760px] flex-[2_1_480px] flex-col">
      {FAQS.map((f, i) => (
        <div key={f.q} className="border-t border-ink/15">
          <button
            type="button"
            aria-expanded={open === i}
            aria-controls={`faq-${i}`}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="box-border flex w-full items-center justify-between gap-5 py-[22px] text-left text-[clamp(17px,1.6vw,21px)] font-bold tracking-[-0.02em]"
          >
            {f.q}
            <span
              aria-hidden="true"
              className="shrink-0 text-[22px] font-light transition-transform duration-[400ms] ease-expo"
              style={{ transform: `rotate(${open === i ? 45 : 0}deg)` }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div id={`faq-${i}`} className="max-w-[62ch] pb-[22px] text-[15.5px] leading-[1.6] text-body">
              {f.a}
            </div>
          )}
        </div>
      ))}
      <div className="border-t border-ink/15" />
    </div>
  );
}
