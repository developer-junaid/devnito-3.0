"use client";

import Link from "next/link";
import { trackLeap } from "@/lib/leap-analytics";

export function LeapHomeBanner({ href }: { href: string }) {
  return (
    <Link
      href={href}
      onClick={() => {
        const nextRef =
          new URL(href, "https://devnito.com").searchParams.get("ref") || "home";
        trackLeap("leap_home_click", { ref: nextRef });
      }}
      className="flex min-h-11 items-center justify-center px-4 py-2.5 text-center text-[13px] font-medium text-white sm:text-sm"
      style={{ background: "var(--brand-gradient)" }}
    >
      <span className="sm:hidden">Met Junaid at LEAP 2026 →</span>
      <span className="hidden sm:inline">
        Met Junaid, our founder, at LEAP 2026? Open his card →
      </span>
    </Link>
  );
}
