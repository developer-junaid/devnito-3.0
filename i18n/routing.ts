import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const GULF_COUNTRIES = new Set([
  "AE",
  "SA",
  "QA",
  "KW",
  "BH",
  "OM",
]);

export function localeForCountry(country: string | null | undefined): Locale {
  return country && GULF_COUNTRIES.has(country) ? "ar" : "en";
}
