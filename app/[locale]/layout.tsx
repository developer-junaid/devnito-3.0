import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { routing, type Locale } from "@/i18n/routing";
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

const siteUrl = "https://devnito.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "Devnito — شريكك الهندسي بقيادة المؤسس"
    : "Devnito — Founder-led Engineering Partner for Product Teams";
  const description = isAr
    ? "تصميم معماري، وهندسة ويب وموبايل، وشراكة منتج طويلة المدى بقيادة المؤسس — من الفكرة الأولى إلى التوسع. أكثر من 70 مشروعًا و100+ عملية تسليم حول العالم."
    : "Founder-led architecture, web & mobile engineering, and long-term product partnership — from MVP to scale. 70+ engagements, 100+ projects delivered worldwide.";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Devnito",
    },
    description,
    keywords: isAr
      ? [
          "هندسة برمجيات بقيادة المؤسس",
          "شريك تطوير الويب",
          "تطوير تطبيقات الموبايل",
          "التصميم المعماري للبرمجيات",
          "تطوير Next.js",
          "تطوير React",
          "هندسة full-stack",
          "مدير تقني جزئي",
          "شريك هندسي",
          "Devnito",
        ]
      : [
          "founder-led engineering",
          "web development partner",
          "mobile app development",
          "software architecture",
          "Next.js development",
          "React development",
          "full-stack engineering",
          "fractional CTO",
          "engineering partner",
          "Devnito",
        ],
    authors: [{ name: "Junaid Qureshi", url: siteUrl }],
    creator: "Devnito",
    publisher: "Devnito",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "Devnito",
      locale: isAr ? "ar_AE" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Devnito — Founder-led Engineering Partner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    icons: {
      icon: "/logo.svg",
      apple: "/logo.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function buildJsonLd(locale: Locale) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Devnito",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: isAr
      ? "تصميم معماري وهندسة ويب وموبايل وشراكة طويلة المدى بقيادة المؤسس لفرق المنتجات التي تحتاج إلى التوسع."
      : "Founder-led architecture, web & mobile engineering, and long-term partnership for product teams that need to scale.",
    founder: {
      "@type": "Person",
      name: "Junaid Qureshi",
      jobTitle: isAr ? "المؤسس والرئيس التنفيذي" : "Founder & CEO",
      url: "https://www.linkedin.com/in/developer-junaid/",
    },
    areaServed: isAr ? "عالميًا" : "Worldwide",
    serviceType: isAr
      ? [
          "تطوير الويب",
          "تطوير تطبيقات الموبايل",
          "التصميم المعماري للبرمجيات",
          "هندسة Full-Stack",
        ]
      : [
          "Web Development",
          "Mobile App Development",
          "Software Architecture",
          "Full-Stack Engineering",
        ],
    priceRange: "$60/hr",
    sameAs: ["https://www.linkedin.com/in/developer-junaid/"],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  const jsonLd = buildJsonLd(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${ibmPlexSansArabic.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="antialiased">
        <NextIntlClientProvider locale={locale}>
          <Analytics />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
