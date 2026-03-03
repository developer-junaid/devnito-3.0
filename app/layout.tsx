import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://devnito.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Devnito — Founder-led Engineering Partner for Product Teams",
    template: "%s | Devnito",
  },
  description:
    "Founder-led architecture, web & mobile engineering, and long-term product partnership — from MVP to scale. 70+ engagements, 100+ projects delivered worldwide.",
  keywords: [
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
    canonical: "/",
  },
  openGraph: {
    title: "Devnito — Founder-led Engineering Partner for Product Teams",
    description:
      "Founder-led architecture, web & mobile engineering, and long-term product partnership — from MVP to scale. 70+ engagements, 100+ projects delivered worldwide.",
    url: siteUrl,
    siteName: "Devnito",
    locale: "en_US",
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
    title: "Devnito — Founder-led Engineering Partner for Product Teams",
    description:
      "Founder-led architecture, web & mobile engineering, and long-term product partnership — from MVP to scale. 70+ engagements, 100+ projects delivered worldwide.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Devnito",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description:
    "Founder-led architecture, web & mobile engineering, and long-term partnership for product teams that need to scale.",
  founder: {
    "@type": "Person",
    name: "Junaid Qureshi",
    jobTitle: "Founder & CEO",
    url: "https://www.linkedin.com/in/developer-junaid/",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Software Architecture",
    "Full-Stack Engineering",
  ],
  priceRange: "$60/hr",
  sameAs: ["https://www.linkedin.com/in/developer-junaid/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ colorScheme: "light" }}>
      <body className="antialiased">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
