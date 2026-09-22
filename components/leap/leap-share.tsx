"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { leapConfig } from "@/content/leap";
import type { Locale } from "@/i18n/routing";

export function LeapShare() {
  const t = useTranslations("leap.share");
  const locale = useLocale() as Locale;

  return (
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted">
          {t("shareThisPage")}
        </p>
        <div className="rounded-2xl border border-card-border bg-white p-4 shadow-[var(--card-shadow)]">
          <Image
            src="/leap-qr.svg"
            alt={t("qrAlt")}
            width={160}
            height={160}
            unoptimized
            className="h-40 w-40"
          />
        </div>
        <p className="mt-3 text-xs text-muted">{leapConfig[locale].contact.pageUrl}</p>
      </div>
    </section>
  );
}
