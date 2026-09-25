/**
 * Sanity CLI (`sanity deploy` / `sanity build`) only inlines `SANITY_STUDIO_*` into the
 * browser bundle. Next.js only inlines `NEXT_PUBLIC_*`. Use both names in `.env.local`
 * with the same values so hosted Studio and embedded `/studio` both get a real projectId.
 *
 * Prefer the first *valid* value when reading env (not first non-empty). A placeholder
 * `SANITY_STUDIO_PROJECT_ID=your_project_id_here` on Vercel must not override a correct
 * `NEXT_PUBLIC_SANITY_PROJECT_ID` — that mismatch crashes `createClient` at build time.
 */
const SANITY_PROJECT_ID_RE = /^[a-z0-9-]+$/;
const SANITY_DATASET_RE = /^[a-z0-9-_]+$/;

/*
 * Every variable is referenced by its literal name: bundlers (Next.js for `/studio`, the Sanity
 * CLI for hosted Studio) only inline `process.env.X` written out in full. A dynamic
 * `process.env[key]` is undefined in the browser, which crashes the Studio with
 * "Configuration must contain `projectId`".
 */
const ENV: Record<string, string | undefined> = {
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_VERSION: process.env.SANITY_STUDIO_API_VERSION,
};

function readEnv(...keys: string[]): string {
  for (const key of keys) {
    const value = ENV[key]?.trim();
    if (value) return value;
  }
  return "";
}

function firstValidId(
  values: string[],
  pattern: RegExp,
): string {
  return values.find((v) => pattern.test(v)) ?? "";
}

export const apiVersion =
  readEnv("SANITY_STUDIO_API_VERSION", "NEXT_PUBLIC_SANITY_API_VERSION") ||
  "2024-01-01";

export const projectId = firstValidId(
  [
    readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID", "SANITY_STUDIO_PROJECT_ID"),
    readEnv("SANITY_STUDIO_PROJECT_ID", "NEXT_PUBLIC_SANITY_PROJECT_ID"),
  ],
  SANITY_PROJECT_ID_RE,
);

export const dataset = firstValidId(
  [
    readEnv("NEXT_PUBLIC_SANITY_DATASET", "SANITY_STUDIO_DATASET"),
    readEnv("SANITY_STUDIO_DATASET", "NEXT_PUBLIC_SANITY_DATASET"),
  ],
  SANITY_DATASET_RE,
);

export const isSanityConfigured = Boolean(projectId && dataset);
