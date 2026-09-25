import Image from "next/image";
import clsx from "clsx";
import { img, type SiteImage } from "@/lib/images";
import { Spotlight } from "@/components/site/motion";
import { SiteHeader, type NavItem } from "@/components/site/nav";
import { ArrowLink, Eyebrow, Headline } from "@/components/site/ui";
import { HeroSlides } from "@/components/home/hero-slides";

export const HOME_NAV: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
];

// Four drifting columns; each list is doubled so the -50% loop is seamless.
const MOSAIC: { images: SiteImage[]; anim: string; offset?: string }[] = [
  { images: [img.mhcDashboard, img.sceneoStudio, img.sceneoCuts], anim: "animate-[mosaic-up_70s_linear_infinite]" },
  { images: [img.sceneoHero, img.mentorjunaid, img.menajobs], anim: "animate-[mosaic-down_80s_linear_infinite]", offset: "-mt-[180px]" },
  { images: [img.amgHome, img.amgGradingDetail, img.mhcStaff], anim: "animate-[mosaic-up_90s_linear_infinite]" },
  { images: [img.mhcPatients, img.mhcQueue, img.bolloot], anim: "animate-[mosaic-down_75s_linear_infinite]", offset: "-mt-[120px]" },
];

const AVATARS = [
  { label: "HB", className: "bg-night text-[#E0413A] text-xs" },
  { label: "AL", className: "bg-night text-white text-[11px]" },
  { label: "MV", className: "bg-white text-ink text-[11px]" },
  { label: "BYL", className: "bg-night text-white text-[10px]" },
  { label: "D/XYZ", className: "bg-[#F5F4EF] text-ink text-[10px]" },
];

function Mosaic() {
  return (
    <div aria-hidden="true" data-mosaic="1" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_70%_40%,#000_20%,transparent_80%)] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-[-30%] left-[36%] grid h-[170%] w-[90%] origin-top-left [transform:perspective(1800px)_rotateX(24deg)_rotateY(-16deg)_rotateZ(10deg)] grid-cols-4 items-start gap-[18px] opacity-55 brightness-50 saturate-[0.8]">
        {MOSAIC.map((col, c) => (
          <div key={c} className={col.offset}>
            <div className={clsx("flex flex-col gap-[18px]", col.anim)}>
              {[...col.images, ...col.images].map((image, i) => (
                <Image
                  key={i}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt=""
                  sizes="25vw"
                  className="block h-auto w-full rounded-[14px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_60px_-30px_rgba(0,0,0,0.9)]"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="p-3.5">
      <div data-dark="1" data-hero-card="1" className="relative overflow-hidden rounded-panel bg-ink text-white">
        <Mosaic />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(20,21,24,0.97)_0%,rgba(20,21,24,0.9)_40%,rgba(20,21,24,0.7)_70%,rgba(20,21,24,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,21,24,0.92)_0%,rgba(20,21,24,0)_45%)]" />

        <div className="relative flex min-h-[min(900px,calc(100vh-28px))] flex-col p-[clamp(20px,3vw,40px)]">
          <SiteHeader
            items={HOME_NAV}
            cta={{ label: "Start a project", href: "#contact" }}
            right={<ArrowLink href="#contact" label="Start a project" circle="white" size="md" />}
          />

          <div className="mt-[clamp(60px,11vw,150px)] max-w-[1000px]">
            <Eyebrow>Founder-led product engineering</Eyebrow>
            <Headline
              className="mt-[22px] text-[clamp(46px,7.6vw,112px)]"
              parts={["We ", { strong: "build products" }, " people ", { strong: "use." }]}
            />
            <p data-hero="1" className="mt-[26px] max-w-[46ch] text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-white/72">
              Asset and investment platforms, healthcare systems, grading and ecommerce operations, AI products and
              mobile apps. Designed, engineered and shipped by a small senior team.
            </p>
          </div>

          <div className="mt-auto flex flex-wrap items-end justify-between gap-7 pt-12">
            <a href="#featured" data-hero="1" className="flex max-w-[460px] flex-col gap-3.5">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex pl-3">
                  {AVATARS.map((a) => (
                    <span
                      key={a.label}
                      className={clsx(
                        "-ml-3 flex size-[46px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-ink font-extrabold",
                        a.className,
                      )}
                    >
                      {a.label}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[11px] tracking-[0.14em] text-white/70 uppercase">
                  Engineered with Stay Gold for
                </span>
              </div>
              <div className="text-[clamp(22px,2.3vw,32px)] leading-[1.15] font-bold tracking-[-0.03em]">
                Kevin Hart, Steve Aoki, Simu Liu <span className="font-light text-white/65">&amp; Sohail Prasad</span>
              </div>
              <span className="text-[13px] text-sky">See the work ↓</span>
            </a>
            <HeroSlides />
          </div>
        </div>
        <Spotlight />
      </div>
    </section>
  );
}
