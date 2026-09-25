import { ogCard, ogSize } from "@/lib/og/card";

export const alt = "Devnito · We build products people use";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Founder-led product engineering", parts: ["We", { strong: "build products" }, "people", { strong: "use." }] });
}
