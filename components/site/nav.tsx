"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { img } from "@/lib/images";
import { ArrowLink } from "@/components/site/ui";
import { useScrolledPast } from "@/components/site/motion";

export type NavItem = { label: string; href: string; active?: boolean };
export type NavCta = { label: string; href: string };

/** Route hrefs go through next/link; same-page anchors stay plain. */
function NavAnchor({ href, className, children, onClick }: { href: string; className?: string; children: ReactNode; onClick?: () => void }) {
  if (href.startsWith("#") || /^(https?:|mailto:)/.test(href)) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Logo({ size = 30 }: { size?: number }) {
  return <Image src={img.devnitoLogo.src} alt="" width={size} height={size} className="block object-contain" priority />;
}

/** Top bar inside each hero panel: logo, pill nav and a right-hand action. Collapses to a menu below 640px. */
export function SiteHeader({
  items,
  right,
  cta,
  homeHref = "/",
}: {
  items: NavItem[];
  right: ReactNode;
  cta: NavCta;
  homeHref?: string;
}) {
  return (
    <div className="relative flex flex-wrap items-center justify-between gap-4">
      <NavAnchor href={homeHref} className="flex items-center gap-2.5">
        <Logo />
        <span className="text-xl font-bold tracking-[-0.02em]">Devnito</span>
      </NavAnchor>
      <nav
        aria-label="Primary"
        className="flex items-center rounded-full border border-white/10 bg-white/8 p-[5px] text-sm backdrop-blur-[14px] max-sm:hidden"
      >
        {items.map((item) => (
          <NavAnchor
            key={item.label}
            href={item.href}
            className={clsx(
              "rounded-full px-[18px] py-[9px] transition-colors",
              item.active ? "bg-white/14" : "hover:bg-white/12",
            )}
          >
            {item.label}
          </NavAnchor>
        ))}
      </nav>
      <div className="max-sm:hidden">{right}</div>
      <MobileMenu items={items} cta={cta} className="sm:hidden" />
    </div>
  );
}

/** Pill nav that drops in once the visitor scrolls past the hero. */
export function FloatingNav({ items, cta, threshold = 0.6 }: { items: NavItem[]; cta: NavCta; threshold?: number }) {
  const past = useScrolledPast(threshold);
  return (
    <div
      className="fixed top-3.5 left-1/2 z-[80] flex items-center gap-1.5 rounded-full border border-white/8 bg-ink/78 py-1.5 pr-1.5 pl-4 text-white backdrop-blur-[18px] transition-transform duration-700 ease-expo"
      style={{ transform: `translate(-50%, ${past ? "0px" : "-160%"})` }}
      inert={!past}
    >
      <NavAnchor href="/" className="shrink-0">
        <Image src={img.devnitoLogo.src} alt="Devnito" width={20} height={20} className="block object-contain" />
      </NavAnchor>
      <nav aria-label="Sections" className="mx-1.5 flex gap-0.5 text-[13px] max-sm:hidden">
        {items.map((item) => (
          <NavAnchor key={item.label} href={item.href} className="rounded-full px-3 py-2 transition-colors hover:bg-white/10">
            {item.label}
          </NavAnchor>
        ))}
      </nav>
      <MobileMenu items={items} cta={cta} compact className="sm:hidden" />
      <NavAnchor
        href={cta.href}
        className="rounded-full bg-white px-4 py-[9px] text-[12.5px] font-bold tracking-[0.04em] whitespace-nowrap text-ink uppercase"
      >
        {cta.label}
      </NavAnchor>
    </div>
  );
}

/** Full-screen menu for narrow viewports (portalled: the floating nav's transform would trap it). */
export function MobileMenu({
  items,
  cta,
  compact,
  className,
}: {
  items: NavItem[];
  cta: NavCta;
  compact?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className={clsx(
          "flex items-center gap-2 rounded-full border border-white/15 bg-white/8 font-semibold backdrop-blur-[14px]",
          compact ? "px-3 py-2 text-[12.5px]" : "px-[18px] py-3 text-sm",
        )}
      >
        <span aria-hidden="true" className="flex flex-col gap-[3px]">
          <span className="block h-px w-3.5 bg-current" />
          <span className="block h-px w-3.5 bg-current" />
        </span>
        Menu
      </button>

      {open &&
        createPortal(
          <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-3.5 z-[90] flex flex-col rounded-panel bg-ink p-6 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center justify-between">
            <NavAnchor href="/" onClick={close} className="flex items-center gap-2.5">
              <Logo size={26} />
              <span className="text-lg font-bold tracking-[-0.02em]">Devnito</span>
            </NavAnchor>
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold"
            >
              Close
            </button>
          </div>
          <nav aria-label="Menu" className="mt-12 flex flex-col">
            {items.map((item, i) => (
              <NavAnchor
                key={item.label}
                href={item.href}
                onClick={close}
                className="flex items-baseline justify-between border-t border-white/12 py-4 text-[34px] font-bold tracking-[-0.035em]"
              >
                {item.label}
                <span className="font-mono text-[11px] font-normal tracking-[0.14em] text-white/50">0{i + 1}</span>
              </NavAnchor>
            ))}
          </nav>
          <div className="mt-auto" onClick={close}>
            <ArrowLink href={cta.href} label={cta.label} size="md" circle="acc" magnetic={false} />
          </div>
        </div>,
          document.body,
        )}
    </div>
  );
}

/** Bottom row of the contact panels: logo, a middle slot and a right slot. */
export function FooterBar({ middle, right }: { middle: ReactNode; right: ReactNode }) {
  return (
    <div className="mt-[30px] flex flex-wrap items-center justify-between gap-[18px] border-t border-white/12 pt-6 text-[13.5px] text-white/65">
      <span className="flex items-center gap-2.5 text-base font-bold text-white">
        <Image src={img.devnitoLogo.src} alt="" width={24} height={24} className="object-contain" />
        Devnito
      </span>
      {middle}
      {right}
    </div>
  );
}

/** Footer nav links shared by the contact panels. */
export function FooterNav({ home = "" }: { home?: string }) {
  return (
    <nav aria-label="Footer" className="flex flex-wrap gap-6">
      <Link href="/work">Work</Link>
      <NavAnchor href={`${home}#services`}>Services</NavAnchor>
      <NavAnchor href={`${home}#products`}>Products</NavAnchor>
      <NavAnchor href={`${home}#about`}>About</NavAnchor>
    </nav>
  );
}
