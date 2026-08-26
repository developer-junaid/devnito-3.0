import { leapConfig } from "@/content/leap";

export function LeapFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="text-sm font-medium"
          style={{
            background: "linear-gradient(135deg, #4c4886, #6086b9, #77ccf3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Met me at {leapConfig.event.name}, {leapConfig.event.city}
        </p>
        <p className="mt-3 text-xs text-foreground/40">
          Devnito &copy; {year} · {leapConfig.person.name}
        </p>
      </div>
    </footer>
  );
}
