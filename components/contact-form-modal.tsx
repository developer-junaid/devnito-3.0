"use client";

import { useState, type FormEvent } from "react";
import { Modal } from "@/components/ui/modal";
import { siteConfig } from "@/content/site";

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "Architecture Blueprint", label: "Architecture Blueprint" },
  { value: "Build / Rebuild", label: "Build / Rebuild" },
  { value: "Engineering Partner", label: "Engineering Partner" },
  { value: "Not sure yet", label: "Not sure yet" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select a range (optional)" },
  { value: "Under $5k", label: "Under $5k" },
  { value: "$5k – $15k", label: "$5k – $15k" },
  { value: "$15k – $50k", label: "$15k – $50k" },
  { value: "$50k+", label: "$50k+" },
  { value: "Not sure", label: "Not sure" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactFormModal({ open, onClose }: ContactFormModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleClose() {
    onClose();
    if (status === "success") {
      setTimeout(() => setStatus("idle"), 300);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        `https://formspree.io/f/${siteConfig.formspreeId}`,
        {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setErrorMsg(
          body?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-[var(--gradient-start)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)]/10";
  const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted";

  return (
    <Modal open={open} onClose={handleClose} title="Book a Call">
      {status === "success" ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 14l6 6L22 8" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Thanks! We&apos;ll be in touch.
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            We&apos;ve received your details and will get back to you within 24
            hours to set up a call.
          </p>
          <button
            onClick={handleClose}
            className="btn-gradient mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Close
          </button>
        </div>
      ) : (
        <div>
          <h2 className="mb-1 text-xl font-bold text-foreground">
            Book a Call
          </h2>
          <p className="mb-6 text-sm text-muted">
            Tell us a bit about your project and we&apos;ll set up a call.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className={labelClass}>
                  Name *
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-service" className={labelClass}>
                  Service Interest
                </label>
                <select id="cf-service" name="service" className={inputClass}>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cf-budget" className={labelClass}>
                  Budget Range
                </label>
                <select id="cf-budget" name="budget" className={inputClass}>
                  {BUDGET_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cf-message" className={labelClass}>
                Project Brief
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={3}
                placeholder="Tell us a bit about what you're building..."
                className={inputClass + " resize-none"}
              />
            </div>

            {status === "error" && (
              <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-gradient inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send & Book a Call"
              )}
            </button>

            <p className="text-center text-xs text-muted/60">
              We&apos;ll respond within 24 hours.
            </p>
          </form>
        </div>
      )}
    </Modal>
  );
}
