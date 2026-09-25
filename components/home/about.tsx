import clsx from "clsx";
import { ArrowLink, H2, SectionLabel } from "@/components/site/ui";

const STATS = [
  { count: 70, suffix: "+", body: "Projects delivered across the US, UAE, Europe and Australia." },
  { count: 10, suffix: "+", body: "Projects with Bread & Butter Design, across a multi-year partnership." },
  { count: 2022, from: 2010, body: "Start of the long-term engineering relationship with Stay Gold." },
  { count: 6, body: "Sectors: SaaS, investment, healthcare, ecommerce, AI and mobile.", dark: true },
];

export function About() {
  return (
    <section id="about" className="px-section pt-section pb-[clamp(50px,6vw,80px)]">
      <div className="wrap flex flex-wrap justify-between gap-[clamp(30px,5vw,80px)]">
        <div data-reveal="1" className="flex max-w-[380px] flex-[1_1_280px] flex-col justify-between gap-10">
          <div>
            <SectionLabel index="(01)" label="About Devnito" />
          </div>
          <p className="m-0 text-[15px] leading-[1.65] text-body">
            One senior team from first sketch to production. The founder writes code, makes the architectural calls and
            stays on the project after launch.
          </p>
        </div>
        <div className="max-w-[820px] flex-[2_1_520px]">
          <H2 className="text-[clamp(30px,3.9vw,56px)] leading-[1.14]">
            <strong>Devnito</strong> designs, engineers and ships software for <strong>investment firms</strong>,{" "}
            <strong>clinics</strong>, operators and founders who need it to <strong>work every day.</strong>
          </H2>
          <div data-reveal="1" className="mt-9">
            <ArrowLink href="#work" label="See the work" pill="outline" circle="ink" size="mdo" />
          </div>
        </div>
      </div>
      <div className="wrap mt-[clamp(60px,7vw,100px)] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
        {STATS.map((s) => (
          <div
            key={s.body}
            data-reveal="1"
            className={clsx(
              "flex min-h-[210px] flex-col justify-between rounded-3xl px-[26px] py-7",
              s.dark ? "bg-ink text-white" : "bg-white",
            )}
          >
            <div className="text-[clamp(48px,5vw,72px)] leading-none font-semibold tracking-[-0.05em]">
              <span data-count={s.count} data-from={s.from}>
                {s.count}
              </span>
              {s.suffix}
            </div>
            <div className={clsx("text-[15px] leading-[1.5]", s.dark ? "text-white/72" : "text-body")}>{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
