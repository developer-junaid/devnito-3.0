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
  slug?: string;
  shortDescription: string;
  category: string;
  clientName?: string;
  isConfidential?: boolean;
  coverImage?: SanityImage;
  galleryImages?: GalleryImage[];
  stack: string[];
  role: string;
  overview: string;
  keyDecisions: string[];
  results: string[];
  featured?: boolean;
  order?: number;
}

export type TestimonialSource = "upwork" | "linkedin" | "direct" | "video";

export interface Testimonial {
  id: string;
  _id: string;
  clientName: string;
  clientRole?: string;
  company?: string;
  quote: string;
  shortQuote?: string;
  clientPhoto?: SanityImage;
  source: TestimonialSource;
  videoUrl?: string;
  screenshotProof?: SanityImage;
  featured?: boolean;
  order?: number;
}
