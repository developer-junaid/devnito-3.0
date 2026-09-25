import { CONTACT_EMAIL } from "@/lib/site";
import { Spotlight } from "@/components/site/motion";
import { FooterBar, FooterNav } from "@/components/site/nav";
import { H2 } from "@/components/site/ui";
import { ContactForm } from "@/components/home/contact-form";

const STEPS = ["You send a brief", "A 30-minute call with Junaid", "A written scope, timeline and estimate"];

export function Contact() {
  return (
    <section id="contact" className="p-3.5">
      <div
        data-dark="1"
        className="relative overflow-hidden rounded-panel bg-panel px-[clamp(28px,5vw,72px)] pt-[clamp(30px,5vw,72px)] pb-[30px] text-white"
      >
        <div data-parallax="0.25" className="text-sm text-white/55">
          (07)
        </div>
        <div className="mt-1 text-[15px] font-semibold">Contact</div>
        <div className="mt-[clamp(40px,6vw,80px)] flex flex-wrap items-start gap-[clamp(30px,5vw,80px)]">
          <div className="flex max-w-[520px] flex-[1_1_360px] flex-col gap-7">
            <H2 dark className="text-[clamp(40px,5.6vw,84px)] leading-[1.05] tracking-[-0.045em]">
              Let&apos;s <strong>discuss</strong> what you&apos;re <strong>building.</strong>
            </H2>
            <p className="m-0 max-w-[40ch] text-base leading-[1.6] text-white/72">
              Three quick steps. Junaid reads every brief and replies within one business day.
            </p>
            <ol className="m-0 flex list-none flex-col gap-2.5 p-0 text-[14.5px]">
              {STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-3 border-t border-white/12 py-3.5 last:border-b">
                  <span className="w-[26px] font-mono text-[11px] text-white/50">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-x-[22px] gap-y-2 text-[14.5px]">
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white">
                {CONTACT_EMAIL}
              </a>
              <span className="text-white/60">US · UAE · Europe · Australia</span>
            </div>
          </div>
          <ContactForm />
        </div>
        <FooterBar middle={<FooterNav />} right={<span>© 2026 Devnito. All rights reserved.</span>} />
        <Spotlight />
      </div>
    </section>
  );
}
