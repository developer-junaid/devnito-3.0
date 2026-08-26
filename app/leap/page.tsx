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

const title = "Junaid Qureshi at LEAP 2026";
const description =
  "Meet Junaid Qureshi, Founder & Head of Engineering at Devnito, at LEAP 2026 in Riyadh. Product engineering, technical leadership, AI, and strategic engineering partnerships.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/leap",
  },
  openGraph: {
    title: "Junaid Qureshi at LEAP 2026 | Devnito",
    description,
    url: leapConfig.contact.pageUrl,
    siteName: siteConfig.name,
    locale: "en_US",
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
    title: "Junaid Qureshi at LEAP 2026 | Devnito",
    description,
    images: ["/og-image.png"],
  },
};

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
