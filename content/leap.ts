import { founder, siteConfig } from "@/content/site";

/**
 * Optional scheduling URL (Calendly or similar).
 * When empty, "Book a Meeting" opens the existing Devnito contact form.
 * Set NEXT_PUBLIC_LEAP_BOOKING_URL to replace it without a code change.
 */
export const LEAP_BOOKING_URL =
  process.env.NEXT_PUBLIC_LEAP_BOOKING_URL?.trim() ?? "";

export const leapConfig = {
  event: {
    name: "LEAP 2026",
    city: "Riyadh",
    label: "AT LEAP 2026 · RIYADH",
    badge: "LEAP 2026 · Riyadh",
  },
  person: {
    name: founder.name,
    firstName: "Junaid",
    lastName: "Qureshi",
    role: "Engineering Leader · Founder, Devnito",
    company: siteConfig.name,
    photo: founder.photo,
    headline:
      "I build and lead the engineering behind production-grade digital products.",
    supporting:
      "Working with startups, agencies, and international teams across the US, UAE, Europe, and other markets — from architecture and technical leadership to full-stack product delivery.",
    credibility:
      "70+ Deliveries · US / UAE / Europe · Venture-Backed & Global Products · Engineering Leadership",
  },
  contact: {
    email: siteConfig.email,
    linkedin: siteConfig.social.linkedin,
    companyUrl: "https://www.devnito.com",
    portfolioUrl: "https://www.developerjunaid.com",
    pageUrl: `${siteConfig.url}/leap`,
  },
  vcardPath: "/leap/vcard",
  bookingUrl: LEAP_BOOKING_URL,
};

export const leapWhatIDo = [
  {
    title: "Product Engineering",
    body: "Architecture through production delivery for SaaS, web, mobile, and complex digital platforms.",
  },
  {
    title: "Engineering Partner",
    body: "Senior engineering capability for startups, agencies, and teams that need reliable delivery without building a large internal engineering organization.",
  },
  {
    title: "Technical Leadership",
    body: "Architecture, engineering strategy, team leadership, integrations, performance, scalability, and AI-ready systems.",
  },
] as const;

export interface LeapWorkItem {
  name: string;
  description: string;
  tag?: string;
  meta?: string;
  href?: string;
}

export const leapSelectedWork: LeapWorkItem[] = [
  {
    name: "Dedicate",
    description: "Asset and portfolio management platform.",
    tag: "Product / FinTech",
    meta: "Engineering leadership",
  },
  {
    name: "AMG — Audio Media Grading",
    description:
      "Record grading, commerce, operations, admin, and customer-facing platform.",
    tag: "Operations / Commerce",
    meta: "Jeremy Downs · CEO",
    href: "/#work",
  },
  {
    name: "Union AI",
    description: "AI-native mobile product with React Native product engineering.",
    tag: "AI / Mobile",
    meta: "Samvit Ramadurgam · Founder & CEO",
  },
  {
    name: "HartBeat",
    description: "Digital product engineering within the HartBeat ecosystem.",
    tag: "Media / Digital Product",
    meta: "Kevin Hart's media & entertainment company",
  },
  {
    name: "Aoki Labs",
    description:
      "Digital product engineering for the venture and investment ecosystem.",
    tag: "Venture / Investment",
    meta: "Venture platform founded by Steve Aoki",
  },
  {
    name: "Markham Valley Ventures",
    description: "Digital platform engineering for the venture ecosystem.",
    tag: "Venture / Investment",
    meta: "Venture firm co-founded by Simu Liu",
  },
  {
    name: "Destiny (DXYZ)",
    description: "Digital product engineering for the investment platform.",
    tag: "FinTech / Investment",
    meta: "Sohail Prasad · Founder & CEO",
  },
  {
    name: "Mecare",
    description: "Healthcare ERP and mobile suite for clinic operations.",
    tag: "HealthTech",
    href: "/#work",
  },
];

export const leapConnectChips = [
  "Founders",
  "CTOs & Product Leaders",
  "Agencies & Consultancies",
  "Venture Studios",
  "Investors & Ecosystem Builders",
  "AI & Technology Partners",
] as const;

export function buildLeapVCard(): string {
  const { person, contact } = leapConfig;
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "PRODID:-//Devnito//LEAP 2026//EN",
    `N:${person.lastName};${person.firstName};;;`,
    `FN:${person.name}`,
    `ORG:${person.company}`,
    `TITLE:${person.role}`,
    `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
    `URL;TYPE=WORK:${contact.companyUrl}`,
    `item1.URL:${contact.linkedin}`,
    "item1.X-ABLabel:LinkedIn",
    `item2.URL:${contact.portfolioUrl}`,
    "item2.X-ABLabel:Portfolio",
    "NOTE:Met at LEAP 2026\\, Riyadh",
    "END:VCARD",
  ];

  return lines.join("\r\n") + "\r\n";
}
