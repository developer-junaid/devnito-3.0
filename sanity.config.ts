import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

/**
 * - Next.js embedded Studio (`/studio`): leave `SANITY_STUDIO_BASEPATH` unset → defaults to `/studio`.
 * - Hosted Studio (`sanity deploy` → `*.sanity.studio`): run `npm run sanity:deploy`, which sets
 *   `SANITY_STUDIO_BASEPATH=/` so the app lives at the hostname root.
 */
const basePath = process.env.SANITY_STUDIO_BASEPATH ?? "/studio";

export default defineConfig({
  name: "devnito-site",
  title: "Devnito — Content Studio",
  basePath,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool()],
});
