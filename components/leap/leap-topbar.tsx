"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/content/site";
import { leapConfig } from "@/content/leap";
import { LeapLanguageToggle } from "@/components/leap/leap-language-toggle";
import type { Locale } from "@/i18n/routing";

export function LeapTopBar() {
  const t = useTranslations("leap.topbar");
  const locale = useLocale() as Locale;

  return (
    <header className="px-5 pt-5 sm:px-8">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt=""
            width={22}
            height={22}
            className="h-5 w-auto"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden shrink-0 rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted sm:inline sm:px-3 sm:text-[11px]">
            {leapConfig[locale].event.badge}
          </span>
          <span className="shrink-0 rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted sm:hidden">
            {t("badgeShort")}
          </span>
          <LeapLanguageToggle />
        </div>
      </div>
    </header>
  );
}
