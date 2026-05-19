import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    defineField({
      name: "clientName",
      title: "Client name",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clientRole",
      title: "Client role / title",
      type: "string",
      group: "content",
      description: "e.g. CEO, Founder, Product Manager.",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      group: "content",
      description: "e.g. Stay Gold (USA).",
    }),
    defineField({
      name: "quote",
      title: "Full quote",
      type: "text",
      rows: 6,
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortQuote",
      title: "Short quote",
      type: "text",
      rows: 3,
      group: "content",
      description:
        "Optional shorter version for compact spots (e.g. video card title).",
    }),
    defineField({
      name: "clientPhoto",
      title: "Client photo",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Upwork", value: "upwork" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Direct", value: "direct" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      initialValue: "direct",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      group: "media",
      description:
        "YouTube URL for video testimonials. Required when source is 'Video'.",
      hidden: ({ parent }) => parent?.source !== "video",
    }),
    defineField({
      name: "screenshotProof",
      title: "Screenshot proof",
      type: "image",
      group: "media",
      options: { hotspot: true },
      description:
        "Optional screenshot (e.g. Upwork/LinkedIn review). Not used as the main display.",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "visibility",
      initialValue: false,
    }),
    defineField({
      name: "displayOnPersonalSite",
      title: "Show on personal site (developerjunaid.com)",
      type: "boolean",
      group: "visibility",
      initialValue: true,
    }),
    defineField({
      name: "displayOnDevnitoSite",
      title: "Show on Devnito site (devnito.com)",
      type: "boolean",
      group: "visibility",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      group: "visibility",
      description: "Lower numbers appear first.",
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "company",
      media: "clientPhoto",
      source: "source",
    },
    prepare({ title, subtitle, media, source }) {
      const sourceLabel = source ? ` · ${source}` : "";
      return {
        title,
        subtitle: `${subtitle ?? ""}${sourceLabel}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
