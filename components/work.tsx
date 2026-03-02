"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type ProjectItem } from "@/content/site";
import { Modal } from "@/components/ui/modal";
import { useContactForm } from "@/components/contact-form-provider";

function ProjectShowcase({
  project,
  onOpen,
  reverse,
}: {
  project: ProjectItem;
  onOpen: () => void;
  reverse: boolean;
}) {
  return (
    <button
      onClick={onOpen}
      className="group block w-full overflow-hidden rounded-3xl border border-card-border bg-card text-left shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-xl"
    >
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 lg:aspect-auto lg:w-[55%]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          ) : (
            <div className="flex h-full min-h-[240px] w-full items-center justify-center bg-gradient-to-br from-[var(--gradient-start)]/5 via-[var(--gradient-mid)]/3 to-[var(--gradient-end)]/5">
              <span className="text-6xl font-bold text-[var(--gradient-start)]/10">
                {project.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="hidden w-px shrink-0 bg-border/50 lg:block" />

        {/* Content */}
        <div className="flex w-full flex-col justify-center p-7 sm:p-10 lg:w-[45%] lg:p-12">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              {project.industry}
            </p>
            {project.status && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                {project.status}
              </span>
            )}
          </div>

          <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl lg:text-[1.65rem]">
            {project.name}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.summary}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--gradient-start)] transition-colors group-hover:text-[var(--gradient-mid)]">
            View case study
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}

type GalleryItem = { src: string; mobile?: boolean } | string;

function resolveGalleryItem(item: GalleryItem) {
  if (typeof item === "string") return { src: item, mobile: false };
  return { src: item.src, mobile: !!item.mobile };
}

function ImageGallery({
  images,
  name,
}: {
  images: GalleryItem[];
  name: string;
}) {
  const [idx, setIdx] = useState(0);

  const current = resolveGalleryItem(images[idx]);

  function go(dir: -1 | 1) {
    setIdx((prev) => (prev + dir + images.length) % images.length);
  }

  return (
    <>
      <div className="relative -mx-4 mb-5 sm:mb-6">
        <div
          className={`relative overflow-hidden rounded-xl bg-gray-50 sm:rounded-2xl ${
            current.mobile
              ? "aspect-[9/14] mx-auto max-w-[280px] sm:max-w-[320px]"
              : "aspect-[16/9]"
          }`}
        >
          <Image
            src={current.src}
            alt={`${name} screenshot ${idx + 1}`}
            fill
            className={
              current.mobile ? "object-contain" : "object-cover object-top"
            }
            sizes={current.mobile ? "320px" : "600px"}
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className={`absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 ${
                current.mobile ? "left-0 sm:left-2" : ""
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 4l-4 4 4 4" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className={`absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 ${
                current.mobile ? "right-0 sm:right-2" : ""
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 4l4 4-4 4" />
              </svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="mt-3 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx
                    ? "w-6 bg-[var(--gradient-start)]"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function ProjectModalContent({
  project,
  onBookCall,
}: {
  project: ProjectItem;
  onBookCall: () => void;
}) {
  const galleryImages = project.gallery?.length
    ? project.gallery
    : project.image
      ? [project.image]
      : null;

  return (
    <div className="sm:pr-4">
      {galleryImages && (
        <ImageGallery images={galleryImages} name={project.name} />
      )}

      <div className="mb-1 flex flex-wrap items-center gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {project.industry}
        </p>
        {project.status && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            {project.status}
          </span>
        )}
      </div>
      <h2 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">
        {project.name}
      </h2>
      <div className="mb-5 flex flex-wrap items-center gap-1.5 sm:mb-6 sm:gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-muted sm:px-3 sm:py-1 sm:text-xs"
          >
            {tag}
          </span>
        ))}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium text-[var(--gradient-start)] transition-colors hover:bg-[var(--gradient-start)]/5 sm:px-3 sm:py-1 sm:text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            View Live
          </a>
        )}
      </div>

      <div className="space-y-5 sm:space-y-6">
        <div>
          <h4 className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted sm:mb-2 sm:text-xs">
            Overview
          </h4>
          <p className="text-[13px] leading-relaxed text-foreground sm:text-sm">
            {project.modal.overview}
          </p>
        </div>

        <div>
          <h4 className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted sm:mb-2 sm:text-xs">
            My Role
          </h4>
          <p className="text-[13px] leading-relaxed text-foreground sm:text-sm">
            {project.modal.role}
          </p>
        </div>

        <div>
          <h4 className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted sm:mb-2 sm:text-xs">
            Key Decisions
          </h4>
          <ul className="space-y-1.5">
            {project.modal.keyDecisions.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2 text-[13px] text-foreground sm:text-sm"
              >
                <span
                  className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: "var(--brand-gradient)" }}
                />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted sm:mb-2 sm:text-xs">
            Results
          </h4>
          <ul className="space-y-1.5">
            {project.modal.results.map((r) => (
              <li
                key={r}
                className="flex items-start gap-2 text-[13px] text-foreground sm:text-sm"
              >
                <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-green-500/60" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted sm:mb-2 sm:text-xs">
            Stack
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.modal.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-muted sm:px-3 sm:py-1 sm:text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5 p-4 sm:p-5">
          <p className="text-[13px] text-muted sm:text-sm">
            Interested in a similar engagement?
          </p>
          <button
            onClick={onBookCall}
            className="btn-gradient mt-3 inline-flex rounded-full px-5 py-2 text-[13px] font-medium transition-opacity hover:opacity-90 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const { openContactForm } = useContactForm();

  function handleBookCall() {
    setActiveProject(null);
    setTimeout(openContactForm, 250);
  }

  return (
    <section id="work" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <p className="mb-3 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
            <span className="section-dot" />
            Our Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected work
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              onOpen={() => setActiveProject(project)}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>

      <Modal
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject?.name}
      >
        {activeProject && (
          <ProjectModalContent
            project={activeProject}
            onBookCall={handleBookCall}
          />
        )}
      </Modal>
    </section>
  );
}
