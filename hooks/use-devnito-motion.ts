"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";
export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function motionEnabled() {
  return (
    typeof window !== "undefined" &&
    document.documentElement.dataset.motion === "1" &&
    !window.matchMedia(REDUCED_MOTION).matches
  );
}

/**
 * Port of design_handoff_devnito_site/pages/devnito-motion.js.
 *
 * Reveal states live in CSS (app/(site)/site.css) keyed on `data-in` / `data-done`, so this hook
 * only decides *when* to flip them. Re-runs whenever `key` (the pathname) changes.
 */
export function useDevnitoMotion(key: string) {
  useEffect(() => {
    if (!motionEnabled()) return;

    const off: (() => void)[] = [];
    const timers: number[] = [];
    let raf = 0;
    const on = <K extends keyof HTMLElementEventMap>(
      target: HTMLElement,
      type: K,
      fn: (ev: HTMLElementEventMap[K]) => void,
    ) => {
      target.addEventListener(type, fn);
      off.push(() => target.removeEventListener(type, fn));
    };
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    const all = <T extends Element = HTMLElement>(sel: string) =>
      Array.from(document.querySelectorAll<T & HTMLElement>(sel));

    // Fire once per element when it scrolls in (or is already above the fold after an anchor jump).
    const pending = new Map<Element, (() => void)[]>();
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && fire(e.target)),
      { threshold: 0.1 },
    );
    const fire = (el: Element) => {
      const fns = pending.get(el);
      if (!fns) return;
      pending.delete(el);
      io.unobserve(el);
      fns.forEach((f) => f());
    };
    const reveal = (el: Element, fn: () => void) => {
      pending.set(el, [...(pending.get(el) ?? []), fn]);
      io.observe(el);
    };
    const sweep = () =>
      pending.forEach((_, el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) fire(el);
      });

    // Hero: headline words, supporting lines, card clip and background image.
    raf = requestAnimationFrame(() => {
      all("main h1:not([data-in])").forEach((h) => (h.dataset.in = "1"));
      all("[data-hero]:not([data-in])").forEach((el, i) => {
        el.style.setProperty("--hero-delay", `${650 + i * 110}ms`);
        el.dataset.in = "1";
      });
      all("[data-hero-card]:not([data-in])").forEach((el) => {
        el.dataset.in = "1";
        later(() => (el.dataset.done = "1"), 1500);
      });
      all("[data-hero-img]:not([data-in])").forEach((el) => (el.dataset.in = "1"));
    });

    // Fade-ups, staggered 100ms per revealing sibling.
    all("[data-reveal]:not([data-in])").forEach((el) => {
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) =>
        c.hasAttribute("data-reveal"),
      );
      const delay = Math.min(Math.max(0, siblings.indexOf(el)), 6) * 100;
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      reveal(el, () => {
        el.dataset.in = "1";
        later(() => (el.dataset.done = "1"), 1200 + delay);
      });
    });

    // H2s: clip-path sweep, then each <strong> inks in.
    all("main h2:not([data-in])").forEach((h) => {
      h.querySelectorAll<HTMLElement>("strong").forEach((s, i) => s.style.setProperty("--si", String(i)));
      reveal(h, () => {
        h.dataset.in = "1";
        later(() => (h.dataset.done = "1"), 1400);
      });
    });

    // Card images: zoom settles, then drifts with scroll.
    const zooms = all<HTMLImageElement>("img[data-zoom]:not([data-px])");
    zooms.forEach((img) => {
      img.style.transform = "scale(1.3)";
      img.style.transition = `transform 1.8s ${EASE}`;
      img.style.willChange = "transform";
      reveal(img.closest("[data-reveal]") ?? img.parentElement ?? img, () => {
        img.style.transform = "scale(1.1)";
        later(() => {
          img.dataset.px = "1";
          img.style.transition = "transform 0.2s linear";
        }, 1800);
      });
    });

    // Count-ups.
    all("[data-count]:not([data-counted])").forEach((el) => {
      const to = Number(el.dataset.count);
      const from = Number(el.dataset.from ?? 0);
      el.textContent = String(from);
      reveal(el, () => {
        el.dataset.counted = "1";
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / 1800);
          el.textContent = String(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 4))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    });

    // Magnetic buttons: follow the cursor, arrow turns.
    all("[data-magnetic]").forEach((a) => {
      const arrow = a.lastElementChild as HTMLElement | null;
      on(a, "mousemove", (ev) => {
        const r = a.getBoundingClientRect();
        a.style.transition = `transform 0.55s ${EASE}`;
        a.style.transform = `translate(${(ev.clientX - r.left - r.width / 2) * 0.22}px,${(ev.clientY - r.top - r.height / 2) * 0.35}px)`;
        if (arrow) {
          arrow.style.transition = `transform 0.55s ${EASE}`;
          arrow.style.transform = "rotate(45deg) scale(1.08)";
        }
      });
      on(a, "mouseleave", () => {
        a.style.transform = "";
        if (arrow) arrow.style.transform = "";
      });
    });

    // ±5° perspective tilt.
    all("[data-tilt]").forEach((c) => {
      on(c, "mousemove", (ev) => {
        const r = c.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width - 0.5;
        const y = (ev.clientY - r.top) / r.height - 0.5;
        c.style.transition = "transform 0.25s ease-out";
        c.style.transform = `perspective(1200px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale(1.01)`;
      });
      on(c, "mouseleave", () => {
        c.style.transition = `transform 0.8s ${EASE}`;
        c.style.transform = "";
      });
    });

    const loop = () => {
      zooms.forEach((img) => {
        if (!img.dataset.px || img.offsetParent === null || !img.parentElement) return;
        const r = img.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight));
        img.style.transform = `scale(1.1) translateY(${p * -4}%)`;
      });
      sweep();
      raf = requestAnimationFrame(loop);
    };
    const start = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(start);
      timers.forEach(clearTimeout);
      io.disconnect();
      off.forEach((f) => f());
    };
  }, [key]);
}
