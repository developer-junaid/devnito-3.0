import { cookies, headers } from "next/headers";
import { localeForCountry, type Locale } from "@/i18n/routing";
import { LEAP_LOCALE_COOKIE } from "@/lib/leap-locale-cookie";

export { LEAP_LOCALE_COOKIE };

/** Resolves the display locale for the (unprefixed) /leap page: a manual cookie override wins, otherwise geo. */
export async function resolveLeapLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LEAP_LOCALE_COOKIE)?.value;
  if (cookieLocale === "en" || cookieLocale === "ar") return cookieLocale;

  const headerList = await headers();
  const country = headerList.get("x-vercel-ip-country");
  return localeForCountry(country);
}
