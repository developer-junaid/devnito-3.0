"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motionEnabled } from "@/hooks/use-devnito-motion";

/**
 * Sticky card stack: as the next `[data-stack]` card slides over, the one beneath it
 * scales down 6% and dims. Children should be `[data-stack]` wrappers around a single card.
 */
export function StackEffect({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || !motionEnabled()) return;
    const stacks = Array.from(root.querySelectorAll<HTMLElement>("[data-stack]"));
    let raf = 0;
    const loop = () => {
      stacks.forEach((s, i) => {
        const inner = s.firstElementChild as HTMLElement | null;
        const next = stacks[i + 1];
        if (!inner) return;
        let p = 0;
        if (next) {
          const d = next.getBoundingClientRect().top - s.getBoundingClientRect().top;
          p = 1 - Math.max(0, Math.min(1, d / Math.max(1, s.offsetHeight)));
        }
        inner.style.transform = `scale(${1 - p * 0.06})`;
        inner.style.filter = p > 0.01 ? `brightness(${1 - p * 0.35})` : "";
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      stacks.forEach((s) => {
        const inner = s.firstElementChild as HTMLElement | null;
        if (inner) inner.style.transform = inner.style.filter = "";
      });
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
