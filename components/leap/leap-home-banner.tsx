"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { trackLeap } from "@/lib/leap-analytics";

export function LeapHomeBanner({ href }: { href: string }) {
  const t = useTranslations("leap.homeBanner");

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
      <span className="sm:hidden">{t("short")}</span>
      <span className="hidden sm:inline">{t("long")}</span>
    </Link>
  );
}
