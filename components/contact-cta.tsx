"use client";

import Image from "next/image";
import { siteConfig } from "@/content/site";
import { useContactForm } from "@/components/contact-form-provider";

export function ContactCTA() {
  const { openContactForm } = useContactForm();

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card p-8 text-center shadow-[var(--card-shadow)] sm:p-14">
          <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-[var(--gradient-start)]/[0.03] via-transparent to-[var(--gradient-end)]/[0.03]" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 -z-0 w-[200px] max-w-[260px] -rotate-6 opacity-[0.12] select-none sm:w-[260px]">
            <Image src="/logo.svg" alt="" width={260} height={185} className="h-auto w-full" />
          </div>

          <div className="relative z-10">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something that scales.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              If you&apos;re a founder or product team looking for a partner who
              can lead and deliver, I&apos;d love to hear what you&apos;re
              building.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={openContactForm}
                className="btn-gradient inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
              >
                Book a Call
              </button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
              >
                Email
              </a>
            </div>

            <p className="mt-8 text-sm text-muted">
              Based in Pakistan&ensp;·&ensp;Working globally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
