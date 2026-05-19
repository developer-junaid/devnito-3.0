"use client";

/**
 * This route mounts Sanity Studio inside Next.js at /studio.
 * The Studio is a fully client-side React app, so this page must be a
 * client component. Metadata/viewport exports for the route live in the
 * sibling layout.tsx (which is a server component).
 */

import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
