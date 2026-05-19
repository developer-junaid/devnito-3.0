/**
 * Sanity CLI (`sanity deploy` / `sanity build`) only inlines `SANITY_STUDIO_*` into the
 * browser bundle. Next.js only inlines `NEXT_PUBLIC_*`. Use both names in `.env.local`
 * with the same values so hosted Studio and embedded `/studio` both get a real projectId.
 */
export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION ||
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  "2024-01-01";

export const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "";

export const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "";

export const isSanityConfigured = Boolean(projectId && dataset);
