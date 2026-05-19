import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./sanity/env";

/**
 * Optional: set `SANITY_STUDIO_HOSTNAME` in `.env.local` for a stable URL:
 * `https://<hostname>.sanity.studio`. Hostnames must start with a letter and are unique
 * platform-wide (if deploy says "already taken", pick another). If unset, the CLI
 * prompts on first deploy.
 */
const studioHost = process.env.SANITY_STUDIO_HOSTNAME;

export default defineCliConfig({
  api: { projectId, dataset },
  deployment: {
    autoUpdates: true,
    appId: "cbjbd520c0j45xzp8lqkd3my",
  },
  ...(studioHost ? { studioHost } : {}),
});
