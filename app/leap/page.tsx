import type { Metadata } from "next";
import { ContactFormProvider } from "@/components/contact-form-provider";
import { LeapAnalytics } from "@/components/leap/leap-analytics";
import { LeapTopBar } from "@/components/leap/leap-topbar";
import { LeapHero } from "@/components/leap/leap-hero";
import { LeapWhatIDo } from "@/components/leap/leap-what-i-do";
import { LeapSelectedWork } from "@/components/leap/leap-selected-work";
import { LeapLookingToConnect } from "@/components/leap/leap-looking-to-connect";
import { LeapFinalCta } from "@/components/leap/leap-final-cta";
import { LeapShare } from "@/components/leap/leap-share";
import { LeapFooter } from "@/components/leap/leap-footer";
import { leapConfig } from "@/content/leap";
import { siteConfig } from "@/content/site";
import { resolveLeapLocale } from "@/lib/geo-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveLeapLocale();
  const isAr = locale === "ar";

  const title = isAr
    ? "جنيد قريشي في LEAP 2026"
    : "Junaid Qureshi at LEAP 2026";
  const description = isAr
    ? "تعرّف على جنيد قريشي، المؤسس ورئيس الهندسة في Devnito، في LEAP 2026 بالرياض. هندسة المنتجات، والقيادة التقنية، والذكاء الاصطناعي، والشراكات الهندسية الاستراتيجية."
    : "Meet Junaid Qureshi, Founder & Head of Engineering at Devnito, at LEAP 2026 in Riyadh. Product engineering, technical leadership, AI, and strategic engineering partnerships.";
  const ogTitle = isAr ? `${title} | Devnito` : "Junaid Qureshi at LEAP 2026 | Devnito";

  return {
    title,
    description,
    alternates: {
      canonical: "/leap",
    },
    openGraph: {
      title: ogTitle,
      description,
      url: leapConfig[locale].contact.pageUrl,
      siteName: siteConfig.name,
      locale: isAr ? "ar_AE" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Junaid Qureshi at LEAP 2026 — Devnito",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default function LeapPage() {
  return (
    <ContactFormProvider source="LEAP 2026">
      <LeapAnalytics />
      <LeapTopBar />
      <main>
        <LeapHero />
        <LeapWhatIDo />
        <LeapSelectedWork />
        <LeapLookingToConnect />
        <LeapFinalCta />
        <LeapShare />
      </main>
      <LeapFooter />
    </ContactFormProvider>
  );
}
