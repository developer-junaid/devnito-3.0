import Image from "next/image";
import {
  LeapCtaButtons,
  LeapTextLinks,
} from "@/components/leap/leap-actions";

export function LeapFinalCta() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card px-6 py-10 text-center shadow-[var(--card-shadow)] sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/[0.03] via-transparent to-[var(--gradient-end)]/[0.03]" />
          <div className="pointer-events-none absolute -bottom-8 -right-8 w-[180px] max-w-[220px] -rotate-6 opacity-[0.12] select-none sm:w-[220px]">
            <Image
              src="/logo.svg"
              alt=""
              width={220}
              height={156}
              className="h-auto w-full"
            />
          </div>

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              If you&apos;re building a serious digital product — or need the
              engineering capability behind one — let&apos;s talk.
            </p>

            <div className="mx-auto mt-8 max-w-md">
              <LeapCtaButtons layout="book-first" />
            </div>

            <div className="mt-8">
              <LeapTextLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
