"use client";

import { useLocale, useTranslations } from "next-intl";
import { leapConfig, leapConnectChips } from "@/content/leap";
import type { Locale } from "@/i18n/routing";

export function LeapLookingToConnect() {
  const t = useTranslations("leap.lookingToConnect");
  const locale = useLocale() as Locale;
  const chips = leapConnectChips[locale];

  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 flex items-center justify-center text-xs font-medium uppercase tracking-widest text-muted">
          <span className="section-dot" />
          {leapConfig[locale].event.label}
        </p>

        <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card px-6 py-8 text-center shadow-[var(--card-shadow)] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/[0.03] via-transparent to-[var(--gradient-end)]/[0.03]" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              {t("body")}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-foreground/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
