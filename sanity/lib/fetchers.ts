import "server-only";

import {
  projects as fallbackProjects,
  testimonials as fallbackTestimonials,
  videoTestimonials as fallbackVideoTestimonials,
  type ProjectItem,
  type TestimonialItem,
  type VideoTestimonialItem,
} from "@/content/site";

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

function projectToItem(project: Project): ProjectItem {
  const coverImage = imageUrl(project.coverImage);
  const gallery = (project.galleryImages ?? [])
    .map(mapGalleryItem)
    .filter((g): g is { src: string; mobile?: boolean } => Boolean(g));

  const displayName = project.isConfidential
    ? project.title.toLowerCase().startsWith("confidential")
      ? project.title
      : `Confidential ${project.title}`
    : project.title;

  return {
    id: project.slug || project._id,
    name: displayName,
    industry: project.category,
    summary: project.shortDescription,
    tags: project.stack.slice(0, 4),
    image: coverImage,
    gallery: gallery.length > 0 ? gallery : undefined,
    modal: {
      overview: project.overview,
      role: project.role,
      keyDecisions: project.keyDecisions,
      results: project.results,
      stack: project.stack,
    },
  };
}

function testimonialToQuoteItem(t: Testimonial): TestimonialItem {
  const company = t.company ? `, ${t.company}` : "";
  const role = t.clientRole ?? "";
  return {
    id: t._id,
    quote: t.quote,
    name: t.clientName,
    title: `${role}${company}`.trim().replace(/^,\s*/, ""),
    avatar: imageUrl(t.clientPhoto),
  };
}

function testimonialToVideoItem(t: Testimonial): VideoTestimonialItem | null {
  const youtubeId = extractYouTubeId(t.videoUrl);
  if (!youtubeId) return null;
  return {
    id: t._id,
    youtubeId,
    title: t.shortQuote || t.clientName,
    label: "Client Testimonial",
  };
}

export async function fetchProjects(): Promise<ProjectItem[]> {
  if (!sanityClient) return fallbackProjects;
  try {
    const data = await sanityClient.fetch<Project[]>(
      projectsForDevnitoSiteQuery,
      {},
      { next: { revalidate: 60 } },
    );
    if (!data || data.length === 0) return fallbackProjects;
    return data.map(projectToItem);
  } catch (error) {
    console.error("[sanity] fetchProjects failed, using fallback:", error);
    return fallbackProjects;
  }
}

export async function fetchTestimonials(): Promise<{
  testimonials: TestimonialItem[];
  videoTestimonials: VideoTestimonialItem[];
}> {
  if (!sanityClient) {
    return {
      testimonials: fallbackTestimonials,
      videoTestimonials: fallbackVideoTestimonials,
    };
  }
  try {
    const data = await sanityClient.fetch<Testimonial[]>(
      testimonialsForDevnitoSiteQuery,
      {},
      { next: { revalidate: 60 } },
    );
    if (!data || data.length === 0) {
      return {
        testimonials: fallbackTestimonials,
        videoTestimonials: fallbackVideoTestimonials,
      };
    }

    const videoTestimonials: VideoTestimonialItem[] = [];
    const writtenTestimonials: TestimonialItem[] = [];

    for (const t of data) {
      if (t.source === "video") {
        const v = testimonialToVideoItem(t);
        if (v) videoTestimonials.push(v);
        continue;
      }
      writtenTestimonials.push(testimonialToQuoteItem(t));
    }

    return {
      testimonials:
        writtenTestimonials.length > 0
          ? writtenTestimonials
          : fallbackTestimonials,
      videoTestimonials:
        videoTestimonials.length > 0
          ? videoTestimonials
          : fallbackVideoTestimonials,
    };
  } catch (error) {
    console.error("[sanity] fetchTestimonials failed, using fallback:", error);
    return {
      testimonials: fallbackTestimonials,
      videoTestimonials: fallbackVideoTestimonials,
    };
  }
}
