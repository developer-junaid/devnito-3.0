"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/content/site";
import { useContactForm } from "@/components/contact-form-provider";
import clsx from "clsx";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openContactForm } = useContactForm();

  return (
    <nav className="fixed top-0 right-0 left-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <Image src="/logo.svg" alt="" width={24} height={24} className="h-6 w-auto" />
          {siteConfig.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href === "#contact" ? (
              <button
                key={link.href}
                onClick={openContactForm}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={openContactForm}
            className="btn-gradient rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Book a Call
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <path d="M5 5l10 10" />
                <path d="M15 5L5 15" />
              </>
            ) : (
              <>
                <path d="M3 6h14" />
                <path d="M3 10h14" />
                <path d="M3 14h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={clsx(
          "overflow-hidden border-t border-border bg-background transition-all duration-200 md:hidden",
          mobileOpen ? "max-h-80" : "max-h-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) =>
            link.href === "#contact" ? (
              <button
                key={link.href}
                onClick={() => {
                  setMobileOpen(false);
                  openContactForm();
                }}
                className="rounded-lg px-3 py-2.5 text-left text-sm text-muted transition-colors hover:bg-gray-100 hover:text-foreground"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-gray-100 hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={() => {
              setMobileOpen(false);
              openContactForm();
            }}
            className="btn-gradient mt-2 rounded-full px-5 py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-90"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
