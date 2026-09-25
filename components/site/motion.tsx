"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { motionEnabled, useDevnitoMotion } from "@/hooks/use-devnito-motion";
import { useParallax } from "@/hooks/use-parallax";

/** Sets `data-motion` on <html> before first paint so reveal states never flash. */
export const motionBootScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motion='1'`;

/** Page-level motion: reveals, counters, magnetic/tilt, parallax, scroll progress and cursor. */
export function MotionRoot() {
  const pathname = usePathname();
  useDevnitoMotion(pathname);
  useParallax(pathname);
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
    </>
  );
}

const noSubscribe = () => () => {};

/** Client-only flag read after hydration (false during SSR). */
function useClientFlag(read: () => boolean) {
  return useSyncExternalStore(noSubscribe, read, () => false);
}

function useMotionEnabled() {
  return useClientFlag(motionEnabled);
}

function ScrollProgress() {
  const enabled = useMotionEnabled();
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const loop = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] h-0.5 w-full origin-left scale-x-0 bg-acc"
    />
  );
}

type CursorMode = "link" | "img" | null;

/** Dot + ring cursor on fine pointers; grows over links, shows "View" over images. */
function CustomCursor() {
  const enabled = useClientFlag(() => motionEnabled() && window.matchMedia("(pointer: fine)").matches);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>(null);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (ev: MouseEvent) => {
      mx = ev.clientX;
      my = ev.clientY;
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const over = (ev: MouseEvent) => {
      const t = ev.target as Element | null;
      if (!t?.closest) return;
      setMode(t.closest("a,button,[data-hover]") ? "link" : t.closest("[data-reveal] img,[data-mock]") ? "img" : null);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    const loop = () => {
      rx += (mx - rx) * 0.17;
      ry += (my - ry) * 0.17;
      if (ring.current) ring.current.style.translate = `${rx}px ${ry}px`;
      if (dot.current) dot.current.style.translate = `${mx}px ${my}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    document.addEventListener("mouseover", over);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, [enabled]);

  if (!enabled) return null;
  const size = mode === "img" ? 100 : mode === "link" ? 64 : 42;

  return (
    <>
      <style>{"html, html * { cursor: none !important; }"}</style>
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[10001] -mt-1 -ml-1 size-2 rounded-full bg-white mix-blend-difference transition-opacity duration-300"
        style={{ opacity: visible && !mode ? 1 : 0 }}
      />
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[10000] flex items-center justify-center rounded-full border border-white mix-blend-difference"
        style={{
          width: size,
          height: size,
          margin: `${-size / 2}px 0 0 ${-size / 2}px`,
          background: mode ? "#fff" : "transparent",
          opacity: visible ? 1 : 0,
          transform: pressed ? "scale(0.82)" : undefined,
          transition:
            "width .45s var(--ease-expo), height .45s var(--ease-expo), margin .45s var(--ease-expo), background .35s, opacity .3s, transform .3s",
        }}
      >
        <span
          className="font-mono text-[11px] leading-none font-semibold tracking-[0.14em] text-black uppercase transition-opacity duration-[250ms]"
          style={{ opacity: mode === "img" ? 1 : 0 }}
        >
          {mode === "img" ? "View" : ""}
        </span>
      </div>
    </>
  );
}

/** Cursor spotlight for dark panels. Place as a direct child of a `relative` panel. */
export function Spotlight() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const g = glow.current;
    const host = g?.parentElement;
    if (!g || !host || !motionEnabled()) return;
    const move = (ev: MouseEvent) => {
      const r = host.getBoundingClientRect();
      g.style.opacity = "1";
      g.style.background = `radial-gradient(560px circle at ${ev.clientX - r.left}px ${ev.clientY - r.top}px, rgba(124,188,236,0.14), transparent 65%)`;
    };
    const leave = () => (g.style.opacity = "0");
    host.addEventListener("mousemove", move);
    host.addEventListener("mouseleave", leave);
    return () => {
      host.removeEventListener("mousemove", move);
      host.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={glow}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-0 mix-blend-screen transition-opacity duration-[600ms]"
    />
  );
}

/** True once the page has scrolled past `fraction` of the viewport height. */
export function useScrolledPast(fraction: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const check = () => setPast(window.scrollY > window.innerHeight * fraction);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [fraction]);
  return past;
}
