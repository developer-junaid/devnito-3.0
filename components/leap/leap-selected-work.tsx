"use client";

import { leapSelectedWork } from "@/content/leap";
import { trackLeap } from "@/lib/leap-analytics";

export function LeapSelectedWork() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 flex items-center justify-center text-xs font-medium uppercase tracking-widest text-muted">
          <span className="section-dot" />
          Selected Work
        </p>
        <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Instant proof of delivery
        </h2>
        <p className="mx-auto mb-8 max-w-md text-center text-sm leading-relaxed text-muted">
          Selected products I&apos;ve helped engineer and deliver through my
          leadership roles and engineering partnerships.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {leapSelectedWork.map((project) => {
            const content = (
              <>
                {project.tag ? (
                  <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                    {project.tag}
                  </p>
                ) : null}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[15px] font-semibold text-foreground">
                    {project.name}
                  </h3>
                  {project.href ? (
                    <span className="mt-0.5 text-muted" aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                {project.meta ? (
                  <p className="mt-2 text-xs leading-relaxed text-muted/80">
                    {project.meta}
                  </p>
                ) : null}
              </>
            );

            if (project.href) {
              return (
                <a
                  key={project.name}
                  href={project.href}
                  className="rounded-2xl border border-card-border bg-card p-5 text-left shadow-[var(--card-shadow)] transition-colors hover:border-[var(--gradient-start)]/25"
                  onClick={() =>
                    trackLeap("leap_project_click", { project: project.name })
                  }
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={project.name}
                className="rounded-2xl border border-card-border bg-card p-5 shadow-[var(--card-shadow)]"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}
