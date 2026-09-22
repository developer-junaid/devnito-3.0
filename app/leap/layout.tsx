import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { resolveLeapLocale } from "@/lib/geo-locale";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devnito.com"),
};

export default async function LeapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await resolveLeapLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${ibmPlexSansArabic.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Analytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
