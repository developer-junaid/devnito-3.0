import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devnito.com";

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/leap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
