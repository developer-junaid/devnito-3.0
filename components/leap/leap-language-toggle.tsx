"use client";

import { useTranslations, useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { LEAP_LOCALE_COOKIE } from "@/lib/leap-locale-cookie";

export function LeapLanguageToggle() {
  const t = useTranslations("leap.language");
  const locale = useLocale() as Locale;

  function switchTo(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LEAP_LOCALE_COOKIE}=${next}; path=/; max-age=31536000`;
    window.location.reload();
  }

  return (
    <div className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-card p-0.5 text-[11px] font-medium">
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2 py-1 transition-colors ${
          locale === "en" ? "bg-foreground text-background" : "text-muted"
        }`}
      >
        {t("en")}
      </button>
      <button
        type="button"
        onClick={() => switchTo("ar")}
        aria-pressed={locale === "ar"}
        className={`rounded-full px-2 py-1 transition-colors ${
          locale === "ar" ? "bg-foreground text-background" : "text-muted"
        }`}
      >
        {t("ar")}
      </button>
    </div>
  );
}
