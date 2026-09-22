"use client";

import { useLocale, useTranslations } from "next-intl";
import { leapConfig } from "@/content/leap";
import type { Locale } from "@/i18n/routing";

export function LeapFooter() {
  const year = new Date().getFullYear();
  const t = useTranslations("leap.footer");
  const locale = useLocale() as Locale;
  const { event, person } = leapConfig[locale];

  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="text-sm font-medium"
          style={{
            background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {t("metAt", { event: event.name, city: event.city })}
        </p>
        <p className="mt-3 text-xs text-foreground/40">
          {t("copyright", { year, name: person.name })}
        </p>
      </div>
    </footer>
  );
}
