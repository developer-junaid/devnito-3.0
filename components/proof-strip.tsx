import Image from "next/image";
import { stats } from "@/content/site";

export function ProofStrip() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#4c4886]/[0.03] via-[#6086b9]/[0.02] to-[#77ccf3]/[0.03]" />
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              style={{
                background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
