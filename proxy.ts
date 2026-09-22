import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing, localeForCountry } from "@/i18n/routing";

export default function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");
  const defaultLocale = localeForCountry(country);

  const handleI18nRouting = createMiddleware({
    ...routing,
    defaultLocale,
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|studio|leap|.*\\..*).*)"],
};
