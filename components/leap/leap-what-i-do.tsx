"use client";

import { useLocale, useTranslations } from "next-intl";
import { leapWhatIDo } from "@/content/leap";
import type { Locale } from "@/i18n/routing";

export function LeapWhatIDo() {
  const t = useTranslations("leap.whatIDo");
  const locale = useLocale() as Locale;
  const items = leapWhatIDo[locale];

  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 flex items-center justify-center text-xs font-medium uppercase tracking-widest text-muted">
          <span className="section-dot" />
          {t("eyebrow")}
        </p>
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {t("title")}
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-card-border bg-card p-6 shadow-[var(--card-shadow)] sm:p-7"
            >
              <div
                className="mb-4 h-1.5 w-8 rounded-full"
                style={{ background: "var(--brand-gradient)" }}
              />
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
