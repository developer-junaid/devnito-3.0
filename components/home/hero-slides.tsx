"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  { mark: "AL", markClass: "bg-night text-white", name: "Steve Aoki", meta: "Aoki Labs · via Stay Gold" },
  { mark: "MV", markClass: "bg-sand text-ink", name: "Simu Liu", meta: "Markham Valley · via Stay Gold" },
  { mark: "BYL", markClass: "bg-forest text-white", name: "Giannis Antetokounmpo", meta: "BYL Ventures · via Stay Gold" },
];

/** Three-up credit strip in the hero, advancing every 6s. */
export function HeroSlides() {
  const [slide, setSlide] = useState(0);
  const timer = useRef<number>(undefined);

  const restart = useCallback(() => {
    window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
  }, []);

  useEffect(() => {
    restart();
    return () => window.clearInterval(timer.current);
  }, [restart]);

  return (
    <div data-hero="1" className="min-w-0 flex-[0_1_640px]">
      <div className="mb-3.5 flex items-center gap-3.5 font-mono text-xs text-white/80">
        <span>0{slide + 1}</span>
        <div className="h-0.5 flex-1 overflow-hidden rounded-sm bg-white/22">
          <div
            className="h-full bg-white transition-[width] duration-[900ms] ease-expo"
            style={{ width: `${((slide + 1) / SLIDES.length) * 100}%` }}
          />
        </div>
        <span>03</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-1">
        {SLIDES.map((s, i) => (
          <button
            key={s.name}
            type="button"
            data-hover="1"
            onClick={() => {
              setSlide(i);
              restart();
            }}
            aria-pressed={slide === i}
            className="flex min-w-0 gap-[11px] rounded-2xl border border-white/14 bg-ink/50 p-[9px] text-left backdrop-blur-[14px] transition-opacity duration-[600ms]"
            style={{ opacity: slide === i ? 1 : 0.6 }}
          >
            <span
              className={`flex size-16 shrink-0 items-center justify-center rounded-[10px] text-[15px] font-extrabold tracking-[-0.02em] ${s.markClass}`}
            >
              {s.mark}
            </span>
            <span className="flex min-w-0 flex-col justify-between">
              <span className="text-[14.5px] leading-[1.25] font-semibold text-white">{s.name}</span>
              <span className="text-xs text-white/70">{s.meta}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
