import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The previous site lived under /en and /ar (locale prefixes).
      { source: "/en", destination: "/", permanent: true },
      { source: "/ar", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/ar/:path*", destination: "/:path*", permanent: true },
      // Section shortcuts that used to be single-page anchors.
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/products", destination: "/#products", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/sceneo", destination: "/products/sceneo", permanent: true },
      { source: "/amg", destination: "/work/amg", permanent: true },
      // LEAP 2026 is over; printed QR codes and vCard links still point here. Temporary, in case
      // an event page comes back.
      { source: "/leap", destination: "/", permanent: false },
      { source: "/leap/:path*", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
