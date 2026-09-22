import { groq } from "next-sanity";

export const projectsForDevnitoSiteQuery = groq`
  *[_type == "project" && displayOnDevnitoSite == true] | order(order asc, _createdAt desc) {
    "id": coalesce(slug.current, _id),
    _id,
    title,
    titleAr,
    "slug": slug.current,
    shortDescription,
    shortDescriptionAr,
    category,
    categoryAr,
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
    roleAr,
    overview,
    overviewAr,
    keyDecisions,
    keyDecisionsAr,
    results,
    resultsAr,
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
    clientRoleAr,
    company,
    companyAr,
    quote,
    quoteAr,
    shortQuote,
    shortQuoteAr,
    clientPhoto,
    source,
    videoUrl,
    screenshotProof,
    featured,
    order
  }
`;
