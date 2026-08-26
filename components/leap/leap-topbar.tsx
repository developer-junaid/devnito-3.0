import Image from "next/image";
import { siteConfig } from "@/content/site";
import { leapConfig } from "@/content/leap";

export function LeapTopBar() {
  return (
    <header className="px-5 pt-5 sm:px-8">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt=""
            width={22}
            height={22}
            className="h-5 w-auto"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </div>
        <span className="shrink-0 rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted sm:px-3 sm:text-[11px]">
          <span className="sm:hidden">LEAP 2026</span>
          <span className="hidden sm:inline">{leapConfig.event.badge}</span>
        </span>
      </div>
    </header>
  );
}
