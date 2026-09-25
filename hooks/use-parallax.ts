"use client";

import { useEffect } from "react";
import { motionEnabled } from "@/hooks/use-devnito-motion";

/** Port of devnito-parallax.js: `[data-parallax="speed"]` moves on Y relative to the viewport centre. */
export function useParallax(key: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (!motionEnabled() || !els.length) return;

    let raf = 0;
    const loop = () => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translate3d(0,${(p * -100 * (Number(el.dataset.parallax) || 0.2)).toFixed(1)}px,0)`;
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      els.forEach((el) => (el.style.transform = ""));
    };
  }, [key]);
}
