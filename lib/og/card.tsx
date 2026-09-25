import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

type Part = string | { strong: string };

/** Shared 1200×630 social card: dark hero panel with the page's two-tone headline. */
export async function ogCard({ eyebrow, parts }: { eyebrow: string; parts: Part[] }) {
  const dir = path.join(process.cwd(), "lib/og");
  const [light, bold, logo] = await Promise.all([
    readFile(path.join(dir, "manrope-300.ttf")),
    readFile(path.join(dir, "manrope-700.ttf")),
    readFile(path.join(process.cwd(), "public/images/devnito-logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 18,
          background: "#EFEEEA",
          fontFamily: "Manrope",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            borderRadius: 30,
            color: "#FFFFFF",
            backgroundColor: "#141518",
            backgroundImage:
              "radial-gradient(circle at 85% 20%, rgba(47,111,208,0.45), transparent 55%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 64px 64px, 64px 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={40} height={40} alt="" />
            <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>Devnito</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 20, letterSpacing: "0.16em", color: "rgba(255,255,255,0.72)" }}>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#7CBCEC" }} />
              {eyebrow.toUpperCase()}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: 92,
                lineHeight: 1,
                letterSpacing: "-0.045em",
                fontWeight: 300,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 1000,
              }}
            >
              {parts.flatMap((p, i) => {
                const strong = typeof p !== "string";
                return (strong ? p.strong : p)
                  .split(/\s+/)
                  .filter(Boolean)
                  .map((w, j) => (
                    <span key={`${i}-${j}`} style={{ marginRight: 24, ...(strong ? { fontWeight: 700, color: "#FFFFFF" } : {}) }}>
                      {w}
                    </span>
                  ));
              })}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Manrope", data: light, weight: 300, style: "normal" },
        { name: "Manrope", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
