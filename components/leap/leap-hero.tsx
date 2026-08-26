import Image from "next/image";
import { leapConfig } from "@/content/leap";
import { LeapCtaButtons, LeapSocialLinks } from "@/components/leap/leap-actions";

export function LeapHero() {
  const { person, event } = leapConfig;

  return (
    <section className="relative overflow-hidden px-5 pt-8 pb-14 sm:px-8 sm:pt-10 sm:pb-16">
      <div className="pointer-events-none absolute top-8 left-1/2 -z-10 h-[360px] w-[420px] -translate-x-1/2 rounded-full gradient-blur opacity-80" />

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="mb-5 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
          <span className="section-dot" />
          {event.label}
        </p>

        <div className="relative mb-5 h-28 w-28 sm:h-36 sm:w-36">
          <div
            className="absolute -inset-[3px] rounded-full"
            style={{ background: "var(--brand-gradient)" }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-background bg-gray-100">
            <Image
              src={person.photo}
              alt={person.name}
              fill
              priority
              quality={75}
              sizes="144px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          {person.name}
        </h1>
        <p
          className="mt-1.5 text-sm font-medium sm:text-base"
          style={{
            background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {person.role}
        </p>

        <h2 className="mt-5 max-w-md text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
          {person.headline}
        </h2>

        <div className="mt-7 w-full max-w-md">
          <LeapCtaButtons layout="save-first" />
        </div>

        <div className="mt-5">
          <LeapSocialLinks />
        </div>

        <p className="mt-7 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
          {person.supporting}
        </p>
        <p className="mt-4 text-sm font-medium text-foreground/70">
          {person.credibility}
        </p>
      </div>
    </section>
  );
}
