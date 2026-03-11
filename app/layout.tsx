import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = siteConfig.url;
const siteName = siteConfig.name;
const siteTitle = siteConfig.title;
const siteDescription =
  "Founder-led architecture, web & mobile engineering, and long-term product partnership — from MVP to scale. 70+ engagements, 100+ projects delivered worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
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
    "Junaid Qureshi",
  ],
  authors: [{ name: "Junaid Qureshi", url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: siteConfig.description,
  founder: {
    "@type": "Person",
    name: "Junaid Qureshi",
    jobTitle: "Full-Stack Engineer & Solution Architect",
    url: siteConfig.social.linkedin,
  },
  areaServed: "Worldwide",
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "Software Architecture",
    "Full-Stack Engineering",
  ],
  priceRange: "$60/hr",
  sameAs: [siteConfig.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} style={{ colorScheme: "dark" }}>
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
