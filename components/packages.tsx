"use client";

import { useState } from "react";
import Image from "next/image";
import { packages, type PackageItem } from "@/content/site";
import { Modal } from "@/components/ui/modal";
import { useContactForm } from "@/components/contact-form-provider";

function PackageCard({
  pkg,
  onOpen,
}: {
  pkg: PackageItem;
  onOpen: () => void;
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-card-border bg-card p-7 shadow-[var(--card-shadow)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">{pkg.title}</h3>
        <span className="rounded-full bg-[var(--gradient-start)]/10 px-3 py-1 text-xs font-medium text-[var(--gradient-start)]">
          {pkg.tag}
        </span>
      </div>

      <p className="mb-5 text-[15px] text-muted">{pkg.oneLiner}</p>

      <ul className="mb-7 flex flex-col gap-2.5">
        {pkg.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2.5 text-sm text-foreground"
          >
            <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--brand-gradient)]" />
            {b}
          </li>
        ))}
      </ul>

      <button
        onClick={onOpen}
        className="mt-auto rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-[var(--gradient-start)]/30 hover:text-[var(--gradient-start)]"
      >
        {pkg.cta}
      </button>
    </div>
  );
}

function PackageModalContent({
  pkg,
  onBookCall,
}: {
  pkg: PackageItem;
  onBookCall: () => void;
}) {
  return (
    <div className="pr-4">
      <div className="mb-2 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3">
        <h2 className="text-2xl font-bold text-foreground">{pkg.title}</h2>
        <span className="rounded-full bg-[var(--gradient-start)]/10 px-3 py-1 text-xs font-medium text-[var(--gradient-start)]">
          {pkg.tag}
        </span>
      </div>
      <p className="mb-6 text-[15px] text-muted">{pkg.oneLiner}</p>

      <div className="space-y-6">
        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
            Who it&apos;s for
          </h4>
          <p className="text-sm leading-relaxed text-foreground">
            {pkg.modal.whoItsFor}
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
            Deliverables
          </h4>
          <ul className="space-y-1.5">
            {pkg.modal.deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-[var(--brand-gradient)]" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
            Timeline
          </h4>
          <p className="text-sm leading-relaxed text-foreground">
            {pkg.modal.timeline}
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
            What I need from you
          </h4>
          <p className="text-sm leading-relaxed text-foreground">
            {pkg.modal.whatINeed}
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
            Outcome
          </h4>
          <p className="text-sm leading-relaxed text-foreground">
            {pkg.modal.outcome}
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5 p-5">
          <p className="text-lg font-semibold text-foreground">
            {pkg.modal.pricing}
          </p>
          <button
            onClick={onBookCall}
            className="btn-gradient mt-3 inline-flex rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}

export function Packages() {
  const [activePackage, setActivePackage] = useState<PackageItem | null>(null);
  const { openContactForm } = useContactForm();

  function handleBookCall() {
    setActivePackage(null);
    setTimeout(openContactForm, 250);
  }

  return (
    <section
      id="packages"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute bottom-16 -right-10 -z-10 w-[300px] max-w-[380px] rotate-12 opacity-[0.10] select-none sm:w-[380px]">
        <Image
          src="/logo.svg"
          alt=""
          width={380}
          height={270}
          className="h-auto w-full"
        />
      </div>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
            <span className="section-dot" />
            Packages
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose the engagement that fits
          </h2>
          <p className="mt-4 text-muted">
            Clear scopes, senior oversight, and delivery you can trust.
          </p>
        </div>

        <div className="grid-cards">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onOpen={() => setActivePackage(pkg)}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Need something custom? We can scope it in a quick call.
        </p>
      </div>

      <Modal
        open={!!activePackage}
        onClose={() => setActivePackage(null)}
        title={activePackage?.title}
      >
        {activePackage && (
          <PackageModalContent
            pkg={activePackage}
            onBookCall={handleBookCall}
          />
        )}
      </Modal>
    </section>
  );
}
