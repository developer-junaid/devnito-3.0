import { ogCard, ogSize } from "@/lib/og/card";

export const alt = "AMG case study · A grading house, rebuilt as software";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: "Case study · AMG", parts: ["A grading house,", { strong: "rebuilt as software." }] });
}
