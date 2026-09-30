import Link from "next/link";
import { img } from "@/lib/images";
import { ArrowLink, H2, IntroFlow, SectionLabel, Shot } from "@/components/site/ui";
import { BNB_SHOWCASES, Showcase } from "@/components/site/showcase";

const UNFEATURED = BNB_SHOWCASES.find((p) => p.name === "Unfeatured Films")!;

const glass = "rounded-full bg-ink/60 px-[13px] py-[7px] text-xs text-white backdrop-blur-[10px]";

export function DirectClients({ tilt, tall }: { tilt?: boolean; tall?: boolean }) {
  const cards = [
    {
      image: img.menajobs,
      alt: tall ? "MenaJobs.io" : "MenaJobs",
      meta: "Direct client · Marketplace",
      name: "MenaJobs",
      body: "A regional hiring marketplace for the Middle East.",
    },
    {
      image: img.bolloot,
      alt: "Bolloot",
      meta: "Direct client · Education marketplace",
      name: "Bolloot",
      body: tall ? "Course marketplace with live classes and instructor payouts." : "Courses, live classes and instructor payouts.",
    },
  ];
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3.5">
      {cards.map((c) => (
        <div
          key={c.name}
          data-reveal="1"
          {...(tilt ? { "data-tilt": "1" } : {})}
          className={
            tall
              ? "relative flex h-[clamp(360px,32vw,440px)] flex-col overflow-hidden rounded-3xl bg-panel text-white"
              : "relative flex h-[clamp(340px,30vw,420px)] flex-col overflow-hidden rounded-3xl bg-panel text-white"
          }
        >
          <div className={`flex min-h-0 flex-1 items-center justify-center px-[18px] pb-3.5 ${tall ? "pt-[58px]" : "pt-14"}`}>
            <Shot image={c.image} alt={c.alt} shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]" sizes="(max-width: 768px) 100vw, 45vw" />
          </div>
          <div className="relative px-5 pb-5">
            <div className="text-[12.5px] text-white/70">{c.meta}</div>
            <div className={`${tall ? "mt-1.5" : "mt-[5px]"} text-xl font-bold tracking-[-0.02em]`}>{c.name}</div>
            <div className={`${tall ? "mt-1.5" : "mt-[5px]"} text-[13.5px] leading-[1.5] text-white/78`}>{c.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PartnerWork() {
  return (
    <section id="work" className="px-section pt-section pb-[clamp(40px,5vw,70px)]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-[30px]">
          <div className="max-w-[700px] flex-[1_1_460px]">
            <div data-reveal="1">
              <SectionLabel index="(03)" label="Partner work" />
            </div>
            <H2 className="mt-[22px] text-[clamp(32px,4vw,58px)] leading-[1.1]">
              <strong>Engineered by Devnito</strong>, delivered with our <strong>studio partners.</strong>
            </H2>
          </div>
          <div data-reveal="1" className="flex-[0_1_340px]">
            <p className="m-0 text-[14.5px] leading-[1.65] text-body">
              Stay Gold and Bread &amp; Butter Design own design and the client relationship. We lead the engineering. Real
              screens wherever clients allow it.
            </p>
            <ArrowLink href="/work" label="All work by partner" pill="outline" circle="ink" size="xs" className="mt-[22px]" />
          </div>
        </div>

        <div className="mt-[clamp(40px,5vw,64px)] flex flex-wrap gap-3.5">
          <Link
            href="/work/amg"
            data-reveal="1"
            data-tilt="1"
            className="relative flex h-[clamp(400px,40vw,560px)] min-w-0 flex-[2_1_520px] flex-col overflow-hidden rounded-card bg-panel text-white"
          >
            <div className="flex min-h-0 flex-1 items-center justify-center px-[22px] pt-16 pb-[18px]">
              <Shot image={img.amgHome} alt="AMG platform" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="absolute top-[18px] left-[18px]">
              <span className={glass}>Via Stay Gold</span>
            </div>
            <div className="px-[22px] pb-[22px]">
              <div className="text-[clamp(22px,2.2vw,30px)] leading-[1.15] font-bold tracking-[-0.025em]">
                AMG, a grading house rebuilt as software
              </div>
              <div className="mt-2 text-sm text-white/75">
                Submissions, grading, labels, QR tracking, shipping and a storefront on one platform.
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
            className="relative flex h-[clamp(400px,40vw,560px)] min-w-0 flex-[1_1_300px] flex-col overflow-hidden rounded-card bg-sage"
          >
            <div className="flex min-h-0 flex-1 items-center justify-center px-[18px] pt-[60px] pb-[18px]">
              <IntroFlow />
            </div>
            <div className="absolute top-[18px] left-[18px]">
              <span className={glass}>Via Stay Gold</span>
            </div>
            <div className="bg-white px-5 pt-[18px] pb-5">
              <div className="text-xl font-bold tracking-[-0.02em]">AI introductions network</div>
              <div className="mt-1 text-[13.5px] text-body">
                Tell it who you need to meet; matchmakers helped by AI find and introduce them.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap gap-3.5">
          <div
            data-reveal="1"
            data-mock="1"
            data-tilt="1"
            className="relative flex h-[clamp(400px,36vw,480px)] min-w-0 flex-[2_1_520px] flex-col overflow-hidden rounded-card bg-white"
          >
            <div className="flex min-h-0 flex-1 items-center justify-center bg-olive p-[clamp(16px,2.5vw,28px)]">
              <Shot image={img.sanboSite} alt="Sanbo, from sanbo.io" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]" />
            </div>
            <div className="flex flex-wrap items-end justify-between gap-3 border-t border-hair px-[22px] pt-[18px] pb-[22px]">
              <div>
                <div className="text-[12.5px] text-label">Via Stay Gold</div>
                <div className="mt-1 text-xl font-bold tracking-[-0.02em]">Sanbo</div>
                <div className="mt-1 text-[13.5px] text-body">The AI-native operating system for private-market investors.</div>
              </div>
              <a href="https://sanbo.io/" target="_blank" rel="noopener" className="font-mono text-[10.5px] text-soft">
                sanbo.io ↗
              </a>
            </div>
          </div>
          {[
            { href: "https://www.steakhouse.financial/", domain: "steakhouse.financial", name: "Steakhouse Financial", image: img.steakhouseSite },
            { href: "https://grove.financial/", domain: "grove.financial", name: "Grove Financial", image: img.groveSite },
          ].map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener"
              data-reveal="1"
              data-tilt="1"
              className="flex h-[clamp(400px,36vw,480px)] min-w-0 flex-[1_1_300px] flex-col overflow-hidden rounded-card bg-white"
            >
              <div className="relative min-h-0 flex-1 bg-panel">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shot image={b.image} alt={`${b.name}, ${b.domain}`} radius={false} shadow={false} sizes="(max-width: 768px) 100vw, 40vw" />
                </div>
              </div>
              <div className="px-5 pt-[18px] pb-5">
                <div className="text-[12.5px] text-label">With Bread &amp; Butter · Contributed engineering</div>
                <div className="mt-1 text-xl font-bold tracking-[-0.02em]">{b.name}</div>
              </div>
            </a>
          ))}
        </div>

        <Showcase project={UNFEATURED} credit="With Bread & Butter" />

        <div data-reveal="1" className="mt-[clamp(40px,5vw,60px)] flex flex-wrap items-baseline justify-between gap-5">
          <div className="text-[clamp(22px,2.2vw,30px)] font-bold tracking-[-0.03em]">Direct clients</div>
          <div className="text-[13.5px] text-body">Built by Devnito for founders who came to us directly.</div>
        </div>
        <div className="mt-[18px]">
          <DirectClients tilt />
        </div>
      </div>
    </section>
  );
}
