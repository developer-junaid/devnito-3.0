import { buildLeapVCard } from "@/content/leap";

export function GET() {
  return new Response(buildLeapVCard(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="Junaid-Qureshi.vcf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
