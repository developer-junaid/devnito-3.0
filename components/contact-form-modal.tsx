"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Modal } from "@/components/ui/modal";
import { siteConfig } from "@/content/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormModalProps {
  open: boolean;
  onClose: () => void;
  source?: string;
}

export function ContactFormModal({
  open,
  onClose,
  source,
}: ContactFormModalProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const t = useTranslations("contactForm");

  const SERVICE_OPTIONS = [
    { value: "", label: t("serviceOptions.placeholder") },
    { value: "Architecture Blueprint", label: t("serviceOptions.blueprint") },
    { value: "Build / Rebuild", label: t("serviceOptions.build") },
    { value: "Engineering Partner", label: t("serviceOptions.partner") },
    { value: "Not sure yet", label: t("serviceOptions.unsure") },
  ];

  const BUDGET_OPTIONS = [
    { value: "", label: t("budgetOptions.placeholder") },
    { value: "Under $5k", label: t("budgetOptions.under5k") },
    { value: "$5k – $15k", label: t("budgetOptions.range5to15") },
    { value: "$15k – $50k", label: t("budgetOptions.range15to50") },
    { value: "$50k+", label: t("budgetOptions.over50k") },
    { value: "Not sure", label: t("budgetOptions.unsure") },
  ];

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
        setErrorMsg(body?.errors?.[0]?.message || t("errorGeneric"));
        setStatus("error");
      }
    } catch {
      setErrorMsg(t("errorNetwork"));
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-[var(--gradient-start)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)]/10";
  const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted";

  return (
    <Modal open={open} onClose={handleClose} title={t("title")}>
      {status === "success" ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 14l6 6L22 8" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {t("successTitle")}
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
            {t("successBody")}
          </p>
          <button
            onClick={handleClose}
            className="btn-gradient mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            {t("close")}
          </button>
        </div>
      ) : (
        <div>
          <h2 className="mb-1 text-xl font-bold text-foreground">
            {t("title")}
          </h2>
          <p className="mb-6 text-sm text-muted">{t("subtitle")}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {source ? <input type="hidden" name="source" value={source} /> : null}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className={labelClass}>
                  {t("name")}
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  placeholder={t("namePlaceholder")}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="cf-email" className={labelClass}>
                  {t("email")}
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-service" className={labelClass}>
                  {t("serviceInterest")}
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
                  {t("budgetRange")}
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
                {t("projectBrief")}
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={3}
                placeholder={t("messagePlaceholder")}
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
                  {t("sending")}
                </span>
              ) : (
                t("submit")
              )}
            </button>

            <p className="text-center text-xs text-muted/60">
              {t("responseTime")}
            </p>
          </form>
        </div>
      )}
    </Modal>
  );
}
