"use client";

import type { MouseEvent } from "react";
import { leapConfig } from "@/content/leap";
import { useContactForm } from "@/components/contact-form-provider";
import { trackLeap, type LeapEvent } from "@/lib/leap-analytics";

const iconClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-[var(--gradient-start)]/40 hover:text-[var(--gradient-start)]";

export function LeapSocialLinks() {
  const { contact } = leapConfig;

  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconClass}
        onClick={() => trackLeap("leap_linkedin_click")}
      >
        <LinkedInIcon />
      </a>
      <a
        href={`mailto:${contact.email}`}
        aria-label="Email"
        className={iconClass}
        onClick={() => trackLeap("leap_email_click")}
      >
        <EmailIcon />
      </a>
      <a
        href={contact.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Devnito"
        className={iconClass}
        onClick={() => trackLeap("leap_devnito_click")}
      >
        <GlobeIcon />
      </a>
      <a
        href={contact.portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Personal portfolio"
        className={iconClass}
        onClick={() => trackLeap("leap_portfolio_click")}
      >
        <PortfolioIcon />
      </a>
    </div>
  );
}

export function LeapCtaButtons({
  layout = "save-first",
}: {
  layout?: "save-first" | "book-first";
}) {
  const { openContactForm } = useContactForm();
  const bookingUrl = leapConfig.bookingUrl;

  function handleBook() {
    trackLeap("leap_book_meeting");
    if (bookingUrl) {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
      return;
    }
    openContactForm();
  }

  async function handleSave(event: MouseEvent<HTMLAnchorElement>) {
    trackLeap("leap_save_contact");

    const ua = navigator.userAgent;
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOS) return;

    event.preventDefault();
    try {
      const res = await fetch(leapConfig.vcardPath);
      if (!res.ok) throw new Error("Unable to download contact");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Junaid-Qureshi.vcf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.location.href = leapConfig.vcardPath;
    }
  }

  const saveHref = leapConfig.vcardPath;
  const saveLabel = layout === "book-first" ? "Save My Contact" : "Save Contact";
  const bookLabel = layout === "book-first" ? "Book 15 Minutes" : "Book a Meeting";

  const saveButton = (
    <a
      key="save"
      href={saveHref}
      onClick={handleSave}
      className={
        layout === "save-first"
          ? "btn-gradient inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 sm:flex-1"
          : "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-gray-50 sm:flex-1"
      }
    >
      <DownloadIcon />
      {saveLabel}
    </a>
  );

  const bookButton = (
    <button
      key="book"
      type="button"
      onClick={handleBook}
      className={
        layout === "book-first"
          ? "btn-gradient inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 sm:flex-1"
          : "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-gray-50 sm:flex-1"
      }
    >
      <CalendarIcon />
      {bookLabel}
    </button>
  );

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      {layout === "book-first" ? (
        <>
          {bookButton}
          {saveButton}
        </>
      ) : (
        <>
          {saveButton}
          {bookButton}
        </>
      )}
    </div>
  );
}

export function LeapTextLinks({
  events,
}: {
  events?: Partial<Record<"linkedin" | "email" | "devnito" | "portfolio", LeapEvent>>;
}) {
  const { contact } = leapConfig;
  const linkClass =
    "text-sm font-medium text-muted transition-colors hover:text-[var(--gradient-start)]";

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        onClick={() => trackLeap(events?.linkedin ?? "leap_linkedin_click")}
      >
        LinkedIn
      </a>
      <a
        href={`mailto:${contact.email}`}
        className={linkClass}
        onClick={() => trackLeap(events?.email ?? "leap_email_click")}
      >
        Email
      </a>
      <a
        href={contact.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        onClick={() => trackLeap(events?.devnito ?? "leap_devnito_click")}
      >
        Devnito
      </a>
      <a
        href={contact.portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        onClick={() => trackLeap(events?.portfolio ?? "leap_portfolio_click")}
      >
        Personal Portfolio
      </a>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 3.5 6 3.5 9s-1 6-3.5 9c-2.5-3-3.5-6-3.5-9s1-6 3.5-9z" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
      <path d="M14 4h6v6M10 14L20 4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v12M7 11l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
