import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { Spotlight } from "@/components/site/motion";
import { FooterBar } from "@/components/site/nav";
import { ArrowLink, H2 } from "@/components/site/ui";

/** Closing contact panel for the inner pages: big two-tone line, one CTA, footer row. */
export function ContactPanel({
  heading,
  cta,
  middle,
  className = "p-3.5",
}: {
  heading: ReactNode;
  cta: string;
  middle: ReactNode;
  className?: string;
}) {
  return (
    <section id="contact" className={className}>
      <div
        data-dark="1"
        className="relative overflow-hidden rounded-panel bg-panel px-[clamp(28px,5vw,72px)] pt-[clamp(30px,5vw,72px)] pb-[30px] text-white"
      >
        <div className="text-sm text-white/55">Contact</div>
        <div className="mt-[clamp(30px,5vw,60px)] flex flex-wrap items-end justify-between gap-10">
          <H2 dark className="flex-[1_1_600px] text-[clamp(38px,5.6vw,84px)] leading-[1.05] tracking-[-0.045em]">
            {heading}
          </H2>
          <ArrowLink href={`mailto:${CONTACT_EMAIL}`} label={cta} size="xl" />
        </div>
        <div className="mt-[clamp(40px,5vw,64px)] [&>div]:mt-0">
          <FooterBar middle={middle} right={<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>} />
        </div>
        <Spotlight />
      </div>
    </section>
  );
}
