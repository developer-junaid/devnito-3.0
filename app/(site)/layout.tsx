import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { MotionRoot, motionBootScript } from "@/components/site/motion";
import { SITE_URL } from "@/lib/site";
import "./site.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Founder-led product engineering. Asset and investment platforms, healthcare systems, grading and ecommerce operations, AI products and mobile apps, designed, engineered and shipped by a small senior team.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devnito · We build products people use",
    template: "%s · Devnito",
  },
  description,
  applicationName: "Devnito",
  authors: [{ name: "Junaid Qureshi", url: SITE_URL }],
  creator: "Devnito",
  publisher: "Devnito",
  openGraph: {
    siteName: "Devnito",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  themeColor: "#141518",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Devnito",
  url: SITE_URL,
  logo: `${SITE_URL}/images/devnito-logo.png`,
  email: "junaid@devnito.com",
  description,
  founder: {
    "@type": "Person",
    name: "Junaid Qureshi",
    jobTitle: "Founder",
    url: "https://www.linkedin.com/in/developer-junaid/",
  },
  areaServed: ["United States", "United Arab Emirates", "Europe", "Australia"],
  serviceType: ["Product engineering", "Build & rebuild", "Healthcare systems", "AI & mobile", "Engineering leadership"],
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="overflow-x-clip">{children}</div>
        <MotionRoot />
        <Analytics />
      </body>
    </html>
  );
}
