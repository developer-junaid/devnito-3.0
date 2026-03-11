import Image from "next/image";
import { stats } from "@/content/site";

export function ProofStrip() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[var(--gradient-start)]/[0.03] via-[var(--gradient-mid)]/[0.02] to-[var(--gradient-end)]/[0.03]" />
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="relative z-10 text-center">
            <p className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              <span
                style={{
                  background: "var(--brand-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
            </p>
            <p className="mt-2 text-sm font-medium text-foreground/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
