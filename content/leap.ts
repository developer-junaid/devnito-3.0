import { founder, siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/routing";

/**
 * Optional scheduling URL (Calendly or similar).
 * When empty, "Book a Meeting" opens the existing Devnito contact form.
 * Set NEXT_PUBLIC_LEAP_BOOKING_URL to replace it without a code change.
 */
export const LEAP_BOOKING_URL =
  process.env.NEXT_PUBLIC_LEAP_BOOKING_URL?.trim() ?? "";

export interface LeapConfigContent {
  event: {
    name: string;
    city: string;
    label: string;
    badge: string;
  };
  person: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    company: string;
    photo: string;
    headline: string;
    supporting: string;
    credibility: string;
  };
  contact: {
    email: string;
    linkedin: string;
    companyUrl: string;
    portfolioUrl: string;
    pageUrl: string;
  };
  vcardPath: string;
  bookingUrl: string;
}

export const leapConfig: Record<Locale, LeapConfigContent> = {
  en: {
    event: {
      name: "LEAP 2026",
      city: "Riyadh",
      label: "AT LEAP 2026 · RIYADH",
      badge: "LEAP 2026 · Riyadh",
    },
    person: {
      name: founder.en.name,
      firstName: "Junaid",
      lastName: "Qureshi",
      role: "Engineering Leader · Founder, Devnito",
      company: siteConfig.name,
      photo: founder.en.photo,
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
  },
  ar: {
    event: {
      name: "LEAP 2026",
      city: "الرياض",
      label: "في LEAP 2026 · الرياض",
      badge: "LEAP 2026 · الرياض",
    },
    person: {
      name: founder.ar.name,
      firstName: "Junaid",
      lastName: "Qureshi",
      role: "قائد هندسي · مؤسس Devnito",
      company: siteConfig.name,
      photo: founder.ar.photo,
      headline:
        "أبني وأقود الهندسة وراء منتجات رقمية جاهزة للإنتاج.",
      supporting:
        "أعمل مع الشركات الناشئة والوكالات والفرق الدولية عبر الولايات المتحدة والإمارات وأوروبا وأسواق أخرى — من التصميم المعماري والقيادة التقنية إلى تسليم المنتجات الكاملة.",
      credibility:
        "أكثر من 70 عملية تسليم · الولايات المتحدة / الإمارات / أوروبا · منتجات عالمية مدعومة برأس مال جريء · قيادة هندسية",
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
  },
};

export interface LeapWhatIDoItem {
  title: string;
  body: string;
}

export const leapWhatIDo: Record<Locale, readonly LeapWhatIDoItem[]> = {
  en: [
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
  ],
  ar: [
    {
      title: "هندسة المنتجات",
      body: "من التصميم المعماري إلى التسليم الإنتاجي لمنصات SaaS والويب والموبايل والمنصات الرقمية المعقدة.",
    },
    {
      title: "شريك هندسي",
      body: "قدرة هندسية أولى للشركات الناشئة والوكالات والفرق التي تحتاج تسليمًا موثوقًا دون بناء منظمة هندسية داخلية كبيرة.",
    },
    {
      title: "القيادة التقنية",
      body: "التصميم المعماري، والاستراتيجية الهندسية، وقيادة الفريق، والتكاملات، والأداء، وقابلية التوسع، وأنظمة جاهزة للذكاء الاصطناعي.",
    },
  ],
};

export interface LeapWorkItem {
  name: string;
  description: string;
  tag?: string;
  meta?: string;
  href?: string;
}

export const leapSelectedWork: Record<Locale, LeapWorkItem[]> = {
  en: [
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
  ],
  ar: [
    {
      name: "Dedicate",
      description: "منصة لإدارة الأصول والمحافظ الاستثمارية.",
      tag: "منتج / تقنية مالية",
      meta: "قيادة هندسية",
    },
    {
      name: "AMG — Audio Media Grading",
      description: "منصة لتقييم الأسطوانات، والتجارة، والعمليات، والإدارة، وواجهة العملاء.",
      tag: "العمليات / التجارة",
      meta: "Jeremy Downs · الرئيس التنفيذي",
      href: "/#work",
    },
    {
      name: "Union AI",
      description: "منتج موبايل أصيل الذكاء الاصطناعي بهندسة منتج React Native.",
      tag: "الذكاء الاصطناعي / الموبايل",
      meta: "Samvit Ramadurgam · المؤسس والرئيس التنفيذي",
    },
    {
      name: "HartBeat",
      description: "هندسة منتجات رقمية ضمن منظومة HartBeat.",
      tag: "الإعلام / المنتجات الرقمية",
      meta: "شركة كيفن هارت للإعلام والترفيه",
    },
    {
      name: "Aoki Labs",
      description: "هندسة منتجات رقمية لمنظومة رأس المال الجريء والاستثمار.",
      tag: "رأس المال الجريء / الاستثمار",
      meta: "منصة استثمارية أسسها ستيف أوكي",
    },
    {
      name: "Markham Valley Ventures",
      description: "هندسة منصات رقمية لمنظومة رأس المال الجريء.",
      tag: "رأس المال الجريء / الاستثمار",
      meta: "شركة استثمارية شارك في تأسيسها سيمو ليو",
    },
    {
      name: "Destiny (DXYZ)",
      description: "هندسة منتجات رقمية لمنصة استثمارية.",
      tag: "تقنية مالية / استثمار",
      meta: "Sohail Prasad · المؤسس والرئيس التنفيذي",
    },
    {
      name: "Mecare",
      description: "نظام ERP صحي وحزمة تطبيقات موبايل لعمليات العيادات.",
      tag: "التقنية الصحية",
      href: "/#work",
    },
  ],
};

export const leapConnectChips: Record<Locale, readonly string[]> = {
  en: [
    "Founders",
    "CTOs & Product Leaders",
    "Agencies & Consultancies",
    "Venture Studios",
    "Investors & Ecosystem Builders",
    "AI & Technology Partners",
  ],
  ar: [
    "المؤسسون",
    "المدراء التقنيون وقادة المنتجات",
    "الوكالات والاستشاريون",
    "استوديوهات المشاريع الناشئة",
    "المستثمرون وبناة المنظومة",
    "شركاء الذكاء الاصطناعي والتقنية",
  ],
};

export function buildLeapVCard(locale: Locale = "en"): string {
  const { person, contact } = leapConfig[locale];
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
