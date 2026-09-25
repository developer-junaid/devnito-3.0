import { ogCard, ogSize } from "@/lib/og/card";

export const alt = "Sceneo · The website your video studio deserves";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "A Devnito product · $184", parts: ["The website your", { strong: "video studio" }, "deserves."] });
}
