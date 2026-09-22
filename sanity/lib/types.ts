import type { SanityImageSource } from "@sanity/image-url";

export type SanityImage = SanityImageSource;

export interface GalleryImage {
  _key?: string;
  asset?: { _ref: string; _type: string };
  alt?: string;
  mobile?: boolean;
  hotspot?: unknown;
  crop?: unknown;
}

export interface Project {
  id: string;
  _id: string;
  title: string;
  titleAr?: string;
  slug?: string;
  shortDescription: string;
  shortDescriptionAr?: string;
  category: string;
  categoryAr?: string;
  clientName?: string;
  isConfidential?: boolean;
  coverImage?: SanityImage;
  galleryImages?: GalleryImage[];
  stack: string[];
  role: string;
  roleAr?: string;
  overview: string;
  overviewAr?: string;
  keyDecisions: string[];
  keyDecisionsAr?: string[];
  results: string[];
  resultsAr?: string[];
  featured?: boolean;
  order?: number;
}

export type TestimonialSource = "upwork" | "linkedin" | "direct" | "video";

export interface Testimonial {
  id: string;
  _id: string;
  clientName: string;
  clientRole?: string;
  clientRoleAr?: string;
  company?: string;
  companyAr?: string;
  quote: string;
  quoteAr?: string;
  shortQuote?: string;
  shortQuoteAr?: string;
  clientPhoto?: SanityImage;
  source: TestimonialSource;
  videoUrl?: string;
  screenshotProof?: SanityImage;
  featured?: boolean;
  order?: number;
}
