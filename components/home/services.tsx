"use client";

import clsx from "clsx";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { img } from "@/lib/images";
import { Spotlight } from "@/components/site/motion";
import { H2, Shot } from "@/components/site/ui";

const SERVICES: { title: string; desc: string; proof: string; panel: ReactNode; bg: string }[] = [
  {
    title: "Product engineering",
    desc: "Design to production for web platforms that hold real money and real data.",
    proof: "Sanbo · MenaJobs",
    bg: "bg-olive",
    panel: <Shot image={img.sanboSite} alt="Sanbo, from sanbo.io" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]" />,
  },
  {
    title: "Build & rebuild",
    desc: "New systems, and careful modernization of the ones a business already runs on.",
    proof: "AMG",
    bg: "bg-mist",
    panel: <Shot image={img.amgGradingDetail} alt="AMG graded item record" />,
  },
  {
    title: "Healthcare systems",
    desc: "Clinical workflows, queues, vitals and patient apps that staff use all day.",
    proof: "MyHealthClinic",
    bg: "bg-mist",
    panel: <Shot image={img.mhcQueue} alt="MyHealthClinic live queue" />,
  },
  {
    title: "AI & mobile",
    desc: "React Native and Expo apps with practical AI built in.",
    proof: "AI introductions network · MentorJunaid",
    bg: "bg-mist",
    panel: <Shot image={img.mentorjunaid} alt="MentorJunaid" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]" />,
  },
  {
    title: "Engineering leadership",
    desc: "Architecture, delivery and technical direction embedded in your team.",
    proof: "Stay Gold since 2022 · Bread & Butter Design",
    bg: "bg-raised",
    panel: <LeadershipRecord />,
  },
];

const RECORD = [
  { year: "2022 →", name: "Stay Gold", note: "Architecture & delivery · AMG, Sanbo & more" },
  { year: "2025 →", name: "Bread & Butter Design", note: "Building to design · 10+ projects" },
  { year: "2023 →", name: "Devnito", note: "Founder-led delivery · 70+ projects" },
];

function LeadershipRecord() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 overflow-hidden text-white">
      <div className="font-mono text-[11px] tracking-[0.12em] text-white/60 uppercase">Leadership record · Head of Engineering</div>
      <div>
        {RECORD.map((r) => (
          <div
            key={r.name}
            className="grid grid-cols-[minmax(62px,80px)_minmax(0,1fr)] items-baseline gap-3.5 border-t border-white/14 py-3"
          >
            <span className="font-mono text-xs text-white/60">{r.year}</span>
            <span>
              <span className="block text-[clamp(17px,1.7vw,22px)] leading-[1.2] font-bold tracking-[-0.02em]">{r.name}</span>
              <span className="mt-[3px] block text-[13px] text-sky">{r.note}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const [svc, setSvc] = useState(0);
  const paused = useRef(false);
  const s = SERVICES[svc];

  useEffect(() => {
    const t = window.setInterval(() => {
      if (!paused.current) setSvc((i) => (i + 1) % SERVICES.length);
    }, 4200);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section id="services" className="p-3.5">
      <div
        data-dark="1"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        className="relative overflow-hidden rounded-panel bg-panel p-[clamp(28px,4.5vw,64px)] text-white"
      >
        <div className="flex flex-wrap justify-between gap-10">
          <div data-reveal="1" className="max-w-[640px] flex-[1_1_420px]">
            <div data-parallax="0.25" className="text-sm text-white/55">
              (02)
            </div>
            <div className="mt-1 text-[15px] font-semibold">Our expertise</div>
            <H2 dark className="mt-[26px] text-[clamp(30px,3.6vw,52px)] leading-[1.1]">
              From first commit to <strong>production</strong>, on every <strong>surface.</strong>
            </H2>
          </div>
          <div data-reveal="1" className="flex flex-[0_1_320px] flex-col items-start gap-1 text-[clamp(18px,1.6vw,22px)] font-medium">
            {SERVICES.map((item, i) => (
              <button
                key={item.title}
                type="button"
                data-hover="1"
                onMouseEnter={() => setSvc(i)}
                onClick={() => setSvc(i)}
                aria-pressed={svc === i}
                className="py-1.5 text-left transition-[opacity,transform] duration-[400ms,500ms]"
                style={{ opacity: svc === i ? 1 : 0.35, transform: `translateX(${svc === i ? 10 : 0}px)` }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[clamp(40px,5vw,70px)] flex flex-wrap items-end gap-[clamp(24px,3vw,40px)]">
          <div className="flex max-w-[320px] flex-[1_1_240px] flex-col gap-3.5" aria-live="polite">
            <div className="font-mono text-xs text-white/55">0{svc + 1} / 05</div>
            <div className="text-[22px] font-semibold tracking-[-0.02em]">{s.title}</div>
            <p className="m-0 text-[15px] leading-[1.6] text-white/70">{s.desc}</p>
            <div className="text-[13px] text-sky">{s.proof}</div>
            <div className="mt-2.5 flex gap-2">
              <button
                type="button"
                data-hover="1"
                aria-label="Previous service"
                onClick={() => setSvc((i) => (i + SERVICES.length - 1) % SERVICES.length)}
                className="flex size-[42px] items-center justify-center rounded-full border border-white/30"
              >
                ←
              </button>
              <button
                type="button"
                data-hover="1"
                aria-label="Next service"
                onClick={() => setSvc((i) => (i + 1) % SERVICES.length)}
                className="flex size-[42px] items-center justify-center rounded-full bg-white text-ink"
              >
                →
              </button>
            </div>
          </div>

          <div className="relative h-[clamp(340px,40vw,560px)] min-w-0 flex-[3_1_520px] overflow-hidden rounded-[20px] bg-raised">
            {SERVICES.map((item, i) => (
              <div
                key={item.title}
                aria-hidden={svc !== i}
                className={clsx(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-[800ms]",
                  i === 4 ? "p-[clamp(20px,3vw,36px)]" : "p-[clamp(16px,3vw,36px)]",
                  item.bg,
                )}
                style={{ opacity: svc === i ? 1 : 0 }}
              >
                {item.panel}
              </div>
            ))}
          </div>
        </div>
        <Spotlight />
      </div>
    </section>
  );
}
