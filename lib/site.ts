import type { NavItem } from "@/components/site/nav";

export const SITE_URL = "https://devnito.com";
export const CONTACT_EMAIL = "junaid@devnito.com";
export const SCENEO_DEMO_URL = "https://sceneo-devnito.vercel.app/";

/** Formspree form that receives homepage briefs (the recipient inbox is set in Formspree). */
export const FORMSPREE_FORM_ID = "mnjbrwrz";

/**
 * Payment link for every Sceneo buy button. Until it is set, the buttons open a request form
 * instead (components/sceneo/purchase.tsx).
 */
export function sceneoCheckoutUrl(): string | null {
  return process.env.SCENEO_CHECKOUT_URL?.trim() || null;
}

/** Hero nav on the inner pages (Work and case studies). */
export const INNER_NAV: NavItem[] = [
  { label: "Work", href: "/work", active: true },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#about" },
];
