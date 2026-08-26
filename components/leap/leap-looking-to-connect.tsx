import { leapConfig, leapConnectChips } from "@/content/leap";

export function LeapLookingToConnect() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 flex items-center justify-center text-xs font-medium uppercase tracking-widest text-muted">
          <span className="section-dot" />
          {leapConfig.event.label}
        </p>

        <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card px-6 py-8 text-center shadow-[var(--card-shadow)] sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--gradient-start)]/[0.03] via-transparent to-[var(--gradient-end)]/[0.03]" />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Looking to Connect
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              I&apos;m at LEAP to meet founders building ambitious products,
              agencies and consultancies looking for a reliable engineering
              partner, investors supporting portfolio companies that need
              technical execution, and technology leaders exploring product and
              AI partnerships.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {leapConnectChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-foreground/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
