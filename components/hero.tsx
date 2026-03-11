"use client";

import Image from "next/image";
import { useContactForm } from "@/components/contact-form-provider";

export function Hero() {
  const { openContactForm } = useContactForm();

  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute top-20 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 gradient-blur rounded-full opacity-80" />
      <div className="pointer-events-none absolute top-16 right-[-5%] -z-10 hidden max-w-[480px] w-[420px] opacity-[0.07] select-none lg:block xl:right-[2%] xl:w-[480px]">
        <Image
          src="/logo.svg"
          alt=""
          width={480}
          height={340}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="animate-fade-in mb-5 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
            <span className="section-dot" />
            Fractional CTO & Engineering Partner
          </p>

          <h1 className="animate-slide-up text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
            Strategic Engineering for Products built to{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              scale.
            </span>
          </h1>

          <p className="animate-slide-up mt-6 max-w-2xl text-lg leading-relaxed text-muted [animation-delay:100ms]">
            I lead your technical strategy and execution so you can focus on
            growth. — with clear communication and senior technical leadership.
          </p>

          <div className="animate-slide-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center [animation-delay:200ms]">
            <button
              onClick={openContactForm}
              className="btn-gradient inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
            >
              Book an Architecture Call
            </button>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-gray-50"
            >
              View Selected Work
            </a>
          </div>

          <p className="animate-fade-in mt-8 text-sm text-muted [animation-delay:400ms]">
            Proven across 70+ deliveries&ensp;·&ensp;Supporting $10M+ in client
            scale&ensp;·&ensp;Built for performance
          </p>
        </div>
      </div>

      <div className="animate-fade-in absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 [animation-delay:600ms] sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted/50">
          Scroll
        </span>
        <div className="h-8 w-px overflow-hidden bg-border">
          <div className="h-full w-full animate-scroll-line bg-foreground/30" />
        </div>
      </div>
    </section>
  );
}
