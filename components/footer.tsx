"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-auto"
          />
          <span className="text-lg font-semibold text-foreground">
            {siteConfig.name}
          </span>
        </div>

        <p className="text-sm text-foreground/50">
          {siteConfig.name} &copy; {year}
        </p>

        <p className="text-xs text-foreground/40">{t("tagline")}</p>
      </div>
    </footer>
  );
}
