import { groq } from "next-sanity";

export const projectsForDevnitoSiteQuery = groq`
  *[_type == "project" && displayOnDevnitoSite == true] | order(order asc, _createdAt desc) {
    "id": coalesce(slug.current, _id),
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    category,
    clientName,
    isConfidential,
    coverImage,
    galleryImages[]{
      ...,
      "alt": coalesce(alt, ""),
      "mobile": coalesce(mobile, false)
    },
    stack,
    role,
    overview,
    keyDecisions,
    results,
    featured,
    order
  }
`;

export const testimonialsForDevnitoSiteQuery = groq`
  *[_type == "testimonial" && displayOnDevnitoSite == true] | order(order asc, _createdAt desc) {
    "id": _id,
    _id,
    clientName,
    clientRole,
    company,
    quote,
    shortQuote,
    clientPhoto,
    source,
    videoUrl,
    screenshotProof,
    featured,
    order
  }
`;
