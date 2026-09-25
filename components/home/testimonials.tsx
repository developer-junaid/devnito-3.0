import Image from "next/image";
import clsx from "clsx";
import { img, type SiteImage } from "@/lib/images";
import { SectionHeader } from "@/components/site/ui";
import { VideoTestimonial, type VideoTestimonialItem } from "@/components/home/video-testimonial";

const VIDEOS: VideoTestimonialItem[] = [
  {
    headline: "2+ years partnership. Reliable, fast, easy to work with.",
    quote: "“I've worked with Junaid and team for over two years.”",
    name: "Kelsey Glassman",
    role: "Owner, graphic design agency (USA)",
    portrait: img.portraitKelsey,
    videoId: "drdJtIfbm-g",
  },
  {
    headline: "5+ years. 10+ projects. Scalable, high-performance systems.",
    quote: "“Almost 5 years, and together we've completed 10 plus projects.”",
    name: "Drew Sima",
    role: "Co-founder, Bread & Butter Design (USA)",
    portrait: img.portraitDrew,
    videoId: "ew2Q1K_yZ6Q",
    mono: true,
  },
];

const QUOTES: { quote: string; name: string; role: string; source: string; avatar?: SiteImage }[] = [
  {
    quote:
      "Junaid was a key partner in rebuilding the tech stack for my company. His work encompassed front and back-end functionality, and he was an excellent thought partner in thinking through the operational implications based on technical decision points.",
    name: "Jeremy Downs",
    avatar: img.avatarJeremy,
    role: "CEO, Audio Media Grading (USA)",
    source: "LinkedIn",
  },
  {
    quote:
      "Junaid is one of the most reliable and capable engineers I've worked with. He delivers high-quality work, communicates clearly, and takes real ownership of projects. He's fast, detail-oriented, and great at turning ideas into scalable solutions. Highly recommended.",
    name: "Vincent Higgins",
    avatar: img.avatarVincent,
    role: "CEO, Stay Gold (USA)",
    source: "Client",
  },
  {
    quote:
      "Junaid and Devnito are the best! Everything they do is so beautiful and always works perfect. We hardly have to do QA. Junaid and Devnito are so easy to work with and get things done so quickly without compromising quality or communication.",
    name: "Andrew",
    // Andrew is Drew Sima (Bread & Butter), reviewing on Upwork.
    avatar: img.avatarDrew,
    role: "Cognitiv Cannes Lions 2026 microsite",
    source: "Upwork ★ 5.0",
  },
  {
    quote:
      "Junaid was instrumental in building our platform from both a technical and product perspective. He handled system architecture, complex workflows, and full-stack development with strong ownership. As requirements evolved, he adapted quickly and delivered stable, scalable solutions.",
    name: "Ayoub Djassem Sayhi",
    avatar: img.avatarAyoub,
    role: "CEO, A2P & Telecom Solutions (Algeria)",
    source: "LinkedIn",
  },
  {
    quote:
      "Scalable, high-performance systems with strong attention to detail. Code consistently matches design with minimal QA needed.",
    name: "Drew Sima",
    avatar: img.avatarDrew,
    role: "Co-founder, Bread & Butter Design (USA)",
    source: "Client",
  },
  {
    quote:
      "Incredibly reliable team. Great communication, easy to work with, and everything is handled with precision and intention.",
    name: "Kelsey Glassman",
    avatar: img.avatarKelsey,
    role: "Owner, graphic design agency (USA)",
    source: "Client",
  },
  {
    quote:
      "Our client requested a number of last-minute changes, and Junaid handled everything calmly and professionally without missing a beat. He still delivered high-quality work on an extremely aggressive timeline.",
    name: "Andrew",
    // Andrew is Drew Sima (Bread & Butter), reviewing on Upwork.
    avatar: img.avatarDrew,
    role: "Cognitiv campaign microsite",
    source: "Upwork ★ 5.0",
  },
  {
    quote:
      "Very, very excited to have found Junaid. He is an incredible Developer and has so much talent — now trying to convince him to work full time for us. I seriously recommend him for any high-level project.",
    name: "Tayler",
    role: "Manager, Sandero Cloud (USA)",
    source: "Client",
  },
];

/**
 * Tilted photo tile with an accent tile peeking out behind it (echoes the portrait frames in the
 * featured stack). Both straighten on hover. Falls back to initials when there is no photo.
 */
function Avatar({ name, image, flip }: { name: string; image?: SiteImage; flip: boolean }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className="relative size-[60px] shrink-0">
      <span
        aria-hidden="true"
        className={clsx(
          "absolute inset-0 rounded-2xl bg-acc transition-transform duration-500 ease-expo group-hover:rotate-0",
          flip ? "-rotate-[9deg]" : "rotate-[9deg]",
        )}
      />
      <span
        className={clsx(
          "absolute inset-0 overflow-hidden rounded-2xl border-[3px] border-white bg-ink shadow-[0_14px_28px_-14px_rgba(20,21,24,0.55)] transition-transform duration-500 ease-expo group-hover:rotate-0",
          flip ? "rotate-[4deg]" : "-rotate-[4deg]",
        )}
      >
        {image ? (
          <Image src={image.src} alt={name} fill sizes="60px" className="object-cover" />
        ) : (
          <span aria-label={name} role="img" className="flex size-full items-center justify-center text-lg font-bold tracking-[-0.02em] text-white">
            {initials}
            <span className="text-sky">.</span>
          </span>
        )}
      </span>
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="px-section pb-[clamp(70px,9vw,130px)]">
      <div className="wrap">
        <SectionHeader index="Clients" label="In their words" className="mb-[clamp(30px,4vw,50px)]">
          Founders and CEOs who <strong>keep coming back.</strong>
        </SectionHeader>

        <div className="flex flex-wrap gap-3.5">
          {VIDEOS.map((v) => (
            <VideoTestimonial key={v.name} item={v} />
          ))}
        </div>

        <div className="mt-3.5 [column-gap:14px] [columns:3_300px]">
          {QUOTES.map((q, i) => (
            <figure
              key={q.quote}
              data-reveal="1"
              className="group mb-3.5 flex break-inside-avoid flex-col gap-[22px] rounded-tile bg-white px-6 pt-[26px] pb-[22px]"
            >
              <blockquote className="m-0 text-base leading-[1.6] text-pretty text-quote">“{q.quote}”</blockquote>
              <figcaption className="flex items-center gap-4 border-t border-hair pt-5">
                <Avatar name={q.name} image={q.avatar} flip={i % 2 === 1} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[14.5px] font-bold">{q.name}</span>
                  <span className="mt-0.5 block text-[12.5px] text-label">{q.role}</span>
                </span>
                <span className="shrink-0 self-end font-mono text-[10.5px] tracking-[0.1em] text-soft uppercase">{q.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
