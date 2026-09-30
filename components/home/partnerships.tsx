"use client";

import clsx from "clsx";
import { useState, type ReactNode } from "react";
import { img } from "@/lib/images";
import { Arrow, Cover, SectionHeader } from "@/components/site/ui";

const ROWS = [
  { key: "2022", title: "Stay Gold", note: "Long-term engineering leadership" },
  { key: "10+", title: "Bread & Butter Design", note: "Engineering partner across a multi-year relationship" },
  { key: "AMG", title: "Audio Media Grading", note: "Platform modernization, ongoing" },
  { key: "Talent", title: "Celebrity venture firms", note: "Via Stay Gold: HartBeat, Aoki Labs, Markham Valley, BYL & more" },
];

const panel = "absolute inset-0 flex flex-col justify-between p-[30px]";

const PANELS: ReactNode[] = [
  <div key="sg" className={clsx(panel, "bg-panel text-white")}>
    <div className="mono-label text-[11px] text-sky">Stay Gold</div>
    <div>
      <div className="text-[clamp(64px,7vw,110px)] leading-[0.9] font-bold tracking-[-0.06em]">2022 →</div>
      <p className="mt-[18px] max-w-[34ch] text-[15px] leading-[1.6] text-white/72">
        Owning architecture and delivery alongside Stay Gold&apos;s design and product teams, release after release.
      </p>
    </div>
  </div>,
  <div key="bnb" className={clsx(panel, "bg-acc text-white")}>
    <div className="mono-label text-[11px]">Bread &amp; Butter Design</div>
    <div>
      <div className="text-[clamp(64px,7vw,110px)] leading-[0.9] font-bold tracking-[-0.06em]">10+</div>
      <p className="mt-[18px] max-w-[34ch] text-[15px] leading-[1.6]">
        Projects delivered as the engineering half of a design studio, built to match the design with minimal QA.
      </p>
    </div>
  </div>,
  <div key="amg" className="absolute inset-0 bg-white">
    <Cover image={img.amgSubmissionCart} alt="AMG submission builder" className="object-[top_right]" sizes="(max-width: 768px) 100vw, 40vw" zoom />
  </div>,
  <div key="talent" className={clsx(panel, "bg-ink text-white")}>
    <div className="mono-label text-[11px] text-sky">Via Stay Gold</div>
    <div className="flex flex-col gap-0.5 text-[clamp(22px,2.4vw,34px)] leading-[1.12] font-bold tracking-[-0.035em]">
      <span>HartBeat Ventures</span>
      <span className="font-light text-white/55">Aoki Labs</span>
      <span>Markham Valley</span>
      <span className="font-light text-white/55">BYL Ventures</span>
      <span>&amp; more</span>
    </div>
    <a href="#featured" className="text-[13px] text-sky">
      See the featured work ↑
    </a>
  </div>,
];

export function Partnerships() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-section py-[clamp(70px,9vw,130px)]">
      <div className="wrap">
        <SectionHeader index="(04)" label="Partnerships" align="start">
          <strong>Trust</strong> is a record of <strong>projects shipped</strong>, not logos collected.
        </SectionHeader>
        <div className="mt-[clamp(40px,5vw,64px)] flex flex-wrap items-stretch gap-[clamp(20px,3vw,36px)]">
          <div data-reveal="1" className="flex min-w-0 flex-[3_1_480px] flex-col border-t border-rule">
            {ROWS.map((r, i) => (
              <button
                key={r.key}
                type="button"
                data-hover="1"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={clsx(
                  "grid grid-cols-[70px_minmax(0,1fr)_44px] items-center gap-4 rounded-2xl border-b border-rule px-[18px] py-[22px] text-left transition-colors duration-[450ms] max-sm:grid-cols-[56px_minmax(0,1fr)_40px] max-sm:gap-3 max-sm:px-3",
                  active === i ? "bg-panel text-white" : "bg-transparent text-ink",
                )}
              >
                <span className="text-[17px] font-medium">{r.key}</span>
                <span>
                  <span className="block text-[clamp(18px,1.7vw,22px)] font-semibold tracking-[-0.02em]">{r.title}</span>
                  <span className="mt-[3px] block text-[13.5px] opacity-72">{r.note}</span>
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border border-current">
                  <Arrow />
                </span>
              </button>
            ))}
          </div>
          <div data-reveal="1" className="relative min-h-[380px] min-w-0 flex-[2_1_340px] overflow-hidden rounded-tile">
            {PANELS.map((p, i) => (
              <div
                key={i}
                aria-hidden={active !== i}
                className="absolute inset-0 transition-opacity duration-[600ms]"
                style={{ opacity: active === i ? 1 : 0 }}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
