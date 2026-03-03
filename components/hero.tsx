"use client";

import Image from "next/image";
import { founder, siteConfig } from "@/content/site";
import { useContactForm } from "@/components/contact-form-provider";

export function Hero() {
  const { openContactForm } = useContactForm();

  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute top-20 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 gradient-blur rounded-full opacity-80" />

      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Photo */}
          <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:h-[320px] lg:h-[380px] lg:w-[380px] lg:rounded-3xl">
            <Image
              src={founder.photo}
              alt={founder.name}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h1 className="animate-slide-up text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {founder.heroHeadline}
            </h1>

            <p
              className="animate-slide-up mt-2 text-base font-medium sm:text-lg [animation-delay:50ms]"
              style={{
                background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {founder.title}
            </p>

            <p className="animate-slide-up mt-5 max-w-xl text-[15px] leading-relaxed text-muted [animation-delay:100ms] sm:text-base">
              {founder.heroBio}
            </p>

            <div className="animate-slide-up mt-6 flex flex-wrap gap-2 [animation-delay:150ms]">
              {founder.credentials.map((cred) => (
                <span
                  key={cred}
                  className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                >
                  {cred}
                </span>
              ))}
            </div>

            <div className="animate-slide-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center [animation-delay:200ms]">
              <button
                onClick={openContactForm}
                className="btn-gradient order-first inline-flex w-full justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90 sm:w-auto"
              >
                Book a Call
              </button>
              <a
                href="#work"
                className="inline-flex justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
              >
                View My Work
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-[#0A66C2] hover:text-[#0A66C2]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="animate-fade-in mt-6 text-sm text-muted [animation-delay:300ms]">
              Trusted across 70+ client engagements · Delivered globally · Built for performance
            </p>
          </div>
        </div>
      </div>

      <div className="animate-fade-in absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 [animation-delay:600ms] sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted/50">Scroll</span>
        <div className="h-8 w-px overflow-hidden bg-border">
          <div className="h-full w-full animate-scroll-line bg-foreground/30" />
        </div>
      </div>
    </section>
  );
}
