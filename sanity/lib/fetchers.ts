import "server-only";

import {
  projects as fallbackProjects,
  testimonials as fallbackTestimonials,
  videoTestimonials as fallbackVideoTestimonials,
  type ProjectItem,
  type TestimonialItem,
  type VideoTestimonialItem,
} from "@/content/site";
import type { Locale } from "@/i18n/routing";

import { sanityClient } from "./client";
import { urlForImage } from "./image";
import {
  projectsForDevnitoSiteQuery,
  testimonialsForDevnitoSiteQuery,
} from "./queries";
import type {
  GalleryImage,
  Project,
  SanityImage,
  Testimonial,
} from "./types";

function logSanityFallback(message: string) {
  console.warn(`[sanity] ${message}`);
}

/** Prefers the Arabic field when the locale is "ar" and it has content, otherwise falls back to English. */
function pick(
  locale: Locale,
  en: string,
  ar: string | undefined | null,
): string {
  if (locale === "ar" && ar && ar.trim().length > 0) return ar;
  return en;
}

function pickList(
  locale: Locale,
  en: string[],
  ar: string[] | undefined | null,
): string[] {
  if (locale === "ar" && ar && ar.length > 0) return ar;
  return en;
}

function imageUrl(source: SanityImage | undefined): string | undefined {
  const url = urlForImage(source ?? null);
  return url ?? undefined;
}

function mapGalleryItem(
  item: GalleryImage,
): { src: string; mobile?: boolean } | undefined {
  const src = imageUrl(item);
  if (!src) return undefined;
  return { src, mobile: !!item.mobile };
}

function extractYouTubeId(url: string | undefined): string | null {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([^?&/]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/embed\/([^?&/]+)/,
    /youtube\.com\/shorts\/([^?&/]+)/,
  ];
  for (const re of patterns) {
    const match = url.match(re);
    if (match?.[1]) return match[1];
  }
  return null;
}

const CONFIDENTIAL_PREFIX: Record<Locale, string> = {
  en: "Confidential",
  ar: "سري",
};

function projectToItem(project: Project, locale: Locale): ProjectItem {
  const coverImage = imageUrl(project.coverImage);
  const gallery = (project.galleryImages ?? [])
    .map(mapGalleryItem)
    .filter((g): g is { src: string; mobile?: boolean } => Boolean(g));

  const title = pick(locale, project.title, project.titleAr);
  const prefix = CONFIDENTIAL_PREFIX[locale];
  const displayName = project.isConfidential
    ? title.toLowerCase().startsWith(prefix.toLowerCase())
      ? title
      : `${prefix} ${title}`
    : title;

  return {
    id: project.slug || project._id,
    name: displayName,
    industry: pick(locale, project.category, project.categoryAr),
    summary: pick(locale, project.shortDescription, project.shortDescriptionAr),
    tags: project.stack.slice(0, 4),
    image: coverImage,
    gallery: gallery.length > 0 ? gallery : undefined,
    modal: {
      overview: pick(locale, project.overview, project.overviewAr),
      role: pick(locale, project.role, project.roleAr),
      keyDecisions: pickList(locale, project.keyDecisions, project.keyDecisionsAr),
      results: pickList(locale, project.results, project.resultsAr),
      stack: project.stack,
    },
  };
}

function testimonialToQuoteItem(t: Testimonial, locale: Locale): TestimonialItem {
  const role = pick(locale, t.clientRole ?? "", t.clientRoleAr);
  const company = pick(locale, t.company ?? "", t.companyAr);
  const companySuffix = company ? `, ${company}` : "";
  return {
    id: t._id,
    quote: pick(locale, t.quote, t.quoteAr),
    name: t.clientName,
    title: `${role}${companySuffix}`.trim().replace(/^,\s*/, ""),
    avatar: imageUrl(t.clientPhoto),
  };
}

const VIDEO_TESTIMONIAL_LABEL: Record<Locale, string> = {
  en: "Client Testimonial",
  ar: "شهادة عميل",
};

function testimonialToVideoItem(
  t: Testimonial,
  locale: Locale,
): VideoTestimonialItem | null {
  const youtubeId = extractYouTubeId(t.videoUrl);
  if (!youtubeId) return null;
  return {
    id: t._id,
    youtubeId,
    title: pick(locale, t.shortQuote || t.clientName, t.shortQuoteAr),
    label: VIDEO_TESTIMONIAL_LABEL[locale],
  };
}

export async function fetchProjects(locale: Locale): Promise<ProjectItem[]> {
  if (!sanityClient) {
    logSanityFallback(
      "Using static projects — set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET (Vercel → Environment Variables), then redeploy.",
    );
    return fallbackProjects[locale];
  }
  try {
    const data = await sanityClient.fetch<Project[]>(
      projectsForDevnitoSiteQuery,
      {},
      { next: { revalidate: 60 } },
    );
    if (!data || data.length === 0) {
      logSanityFallback(
        "Using static projects — no published projects have “Show on Devnito site” enabled in Sanity.",
      );
      return fallbackProjects[locale];
    }
    return data.map((project) => projectToItem(project, locale));
  } catch (error) {
    console.error("[sanity] fetchProjects failed, using fallback:", error);
    return fallbackProjects[locale];
  }
}

export async function fetchTestimonials(locale: Locale): Promise<{
  testimonials: TestimonialItem[];
  videoTestimonials: VideoTestimonialItem[];
}> {
  if (!sanityClient) {
    logSanityFallback(
      "Using static testimonials — set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET on Vercel.",
    );
    return {
      testimonials: fallbackTestimonials[locale],
      videoTestimonials: fallbackVideoTestimonials[locale],
    };
  }
  try {
    const data = await sanityClient.fetch<Testimonial[]>(
      testimonialsForDevnitoSiteQuery,
      {},
      { next: { revalidate: 60 } },
    );
    if (!data || data.length === 0) {
      logSanityFallback(
        "Using static testimonials — none have “Show on Devnito site” enabled in Sanity.",
      );
      return {
        testimonials: fallbackTestimonials[locale],
        videoTestimonials: fallbackVideoTestimonials[locale],
      };
    }

    const videoTestimonials: VideoTestimonialItem[] = [];
    const writtenTestimonials: TestimonialItem[] = [];

    for (const t of data) {
      if (t.source === "video") {
        const v = testimonialToVideoItem(t, locale);
        if (v) videoTestimonials.push(v);
        continue;
      }
      writtenTestimonials.push(testimonialToQuoteItem(t, locale));
    }

    return {
      testimonials:
        writtenTestimonials.length > 0
          ? writtenTestimonials
          : fallbackTestimonials[locale],
      videoTestimonials:
        videoTestimonials.length > 0
          ? videoTestimonials
          : fallbackVideoTestimonials[locale],
    };
  } catch (error) {
    console.error("[sanity] fetchTestimonials failed, using fallback:", error);
    return {
      testimonials: fallbackTestimonials[locale],
      videoTestimonials: fallbackVideoTestimonials[locale],
    };
  }
}
