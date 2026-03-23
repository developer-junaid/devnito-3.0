import Image from "next/image";

const notForItems = [
  "MVPs with $1k budgets",
  '"Quick fixes" or patchwork projects',
  "Teams not ready to invest in scalable systems",
  "Projects without a clear business goal",
];

const forItems = [
  "Founders building products meant to scale",
  "Teams replacing legacy systems with production-grade architecture",
  "Companies that need senior engineering leadership — not just code",
  "Businesses ready to invest in quality that compounds",
];

export function NotFor() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute top-12 -left-10 -z-10 w-[260px] max-w-[320px] -rotate-12 opacity-[0.08] select-none sm:w-[320px]">
        <Image
          src="/logo.svg"
          alt=""
          width={320}
          height={230}
          className="h-auto w-full"
        />
      </div>

      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
            <span className="section-dot" />
            Fit Check
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Is this the right fit?
          </h2>
          <p className="mt-4 text-muted">
            We do our best work with the right partners. Here&apos;s how to know
            if we&apos;re aligned.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-card-border bg-card p-7 shadow-[var(--card-shadow)] sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-foreground">
              This is{" "}
              <span className="text-red-500/80">not</span> for
            </h3>
            <ul className="flex flex-col gap-3">
              {notForItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500/70">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-card-border bg-card p-7 shadow-[var(--card-shadow)] sm:p-8">
            <h3 className="mb-5 text-lg font-semibold text-foreground">
              Built for
            </h3>
            <ul className="flex flex-col gap-3">
              {forItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--gradient-start)]/10 text-[var(--gradient-start)]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
