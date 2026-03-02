import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Devnito — Founder-led Engineering Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#FAFAF8",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Devnito
          </div>

          <div
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
              borderRadius: 4,
            }}
          />

          <div
            style={{
              fontSize: 28,
              color: "#6b6b6b",
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            Founder-led engineering partner for product teams that need to scale.
          </div>

          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 16,
              fontSize: 18,
              color: "#1a1a1a",
            }}
          >
            <span>Architecture</span>
            <span style={{ color: "#6086b9" }}>·</span>
            <span>Web & Mobile</span>
            <span style={{ color: "#6086b9" }}>·</span>
            <span>Long-term Partnership</span>
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 18,
            color: "#6b6b6b",
            letterSpacing: "0.05em",
          }}
        >
          devnito.com
        </div>
      </div>
    ),
    { ...size }
  );
}
