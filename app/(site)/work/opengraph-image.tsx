import { ogCard, ogSize } from "@/lib/og/card";

export const alt = "Devnito · Software that businesses run on";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Selected work · 70+ projects delivered", parts: ["Software that", { strong: "businesses run on." }] });
}
