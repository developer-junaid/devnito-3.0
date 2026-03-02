"use client";

import Image from "next/image";
import { founder, siteConfig } from "@/content/site";
import { useContactForm } from "@/components/contact-form-provider";

export function Founder() {
  const { openContactForm } = useContactForm();

  return (
    <section id="founder" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute -top-8 -right-12 -z-10 max-w-[320px] w-[260px] rotate-6 opacity-[0.08] select-none sm:w-[320px]">
        <Image src="/logo.svg" alt="" width={320} height={230} className="h-auto w-full" />
      </div>

      <div className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-3xl border border-card-border bg-card shadow-[var(--card-shadow)]">
          <div className="flex flex-col lg:flex-row">
            {/* Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 sm:aspect-[3/4] lg:aspect-auto lg:w-[42%]">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>

            {/* Divider */}
            <div className="hidden w-px shrink-0 bg-border/50 lg:block" />

            {/* Content */}
            <div className="flex w-full flex-col justify-center p-8 sm:p-12 lg:w-[58%] lg:p-16">
              <p className="mb-4 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
                <span className="section-dot" />
                Meet the Founder
              </p>

              <h2 className="mb-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {founder.name}
              </h2>

              <p
                className="mb-6 text-sm font-medium sm:text-base"
                style={{
                  background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {founder.title}
              </p>

              <p className="mb-8 text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-relaxed">
                {founder.bio}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {founder.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-foreground/70"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={openContactForm}
                  className="btn-gradient inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                >
                  Book a Call
                </button>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
