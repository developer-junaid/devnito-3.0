import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "text",
      rows: 3,
      group: "content",
      description: "Used as the summary on the project card.",
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: "category",
      title: "Category / Industry",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clientName",
      title: "Client name",
      type: "string",
      group: "content",
      description:
        "Real client name. Hidden in UI when 'Confidential' is enabled.",
    }),
    defineField({
      name: "isConfidential",
      title: "Confidential",
      type: "boolean",
      group: "content",
      initialValue: false,
      description:
        "If enabled, the title is shown as 'Confidential …' and clientName is hidden.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery images",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "mobile",
              title: "Mobile screenshot",
              type: "boolean",
              description:
                "Enable for portrait/mobile-aspect screenshots. Affects display ratio in the gallery.",
              initialValue: false,
            },
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
      options: { layout: "tags" },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "role",
      title: "My role",
      type: "text",
      rows: 3,
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 5,
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "keyDecisions",
      title: "Key decisions",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [{ type: "string" }],
      group: "content",
      validation: (rule) => rule.required().min(1),
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
      title: "title",
      subtitle: "category",
      media: "coverImage",
      isConfidential: "isConfidential",
    },
    prepare({ title, subtitle, media, isConfidential }) {
      return {
        title: isConfidential ? `Confidential — ${title}` : title,
        subtitle,
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
