import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { dataset, isSanityConfigured, projectId } from "../env";

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

export function urlForImage(source: SanityImageSource | undefined | null) {
  if (!source || !builder) return null;
  return builder.image(source).auto("format").fit("max").url();
}
