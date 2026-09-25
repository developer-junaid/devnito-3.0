"use client";

import clsx from "clsx";
import { useState, useTransition, type FormEvent } from "react";
import { submitBrief } from "@/app/(site)/actions";
import { ArrowButton } from "@/components/site/ui";
import { CONTACT_EMAIL } from "@/lib/site";

const NEEDS = [
  "A new product",
  "Rebuild or modernize",
  "MyHealthClinic for my clinic",
  "A Sceneo site for my studio",
  "Engineering leadership",
  "Something else",
];
const BUDGETS = ["Under $10k", "$10k–25k", "$25k–50k", "$50k+", "Not sure yet"];
const TIMINGS = ["Right away", "Within 1–3 months", "Later this year", "Just exploring"];

const EMPTY = { name: "", email: "", company: "", link: "", message: "" };
const EMAIL = /.+@.+\..+/;

function Chip({ on, label, onClick, multi }: { on: boolean; label: string; onClick: () => void; multi?: boolean }) {
  return (
    <button
      type="button"
      data-hover="1"
      onClick={onClick}
      {...(multi ? { "aria-pressed": on } : { role: "radio", "aria-checked": on })}
      className={clsx(
        "rounded-full border px-[18px] py-[11px] text-[14.5px] transition-[background-color,color,border-color] duration-[250ms]",
        on ? "border-white bg-white text-ink" : "border-white/30 bg-transparent text-white",
      )}
    >
      {label}
    </button>
  );
}

function StepLabel({ children }: { children: string }) {
  return <div className="mono-label text-[11px] text-white/60">{children}</div>;
}

function StepTitle({ children }: { children: string }) {
  return <div className="text-[clamp(22px,2.2vw,30px)] font-bold tracking-[-0.03em]">{children}</div>;
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" data-hover="1" onClick={onClick} className="text-sm text-white/70">
      ← Back
    </button>
  );
}

const field =
  "box-border w-full appearance-none rounded-none border-0 border-b border-white/25 bg-transparent py-3.5 text-white outline-none transition-colors placeholder:text-white/45 focus:border-white";

/** Three-step brief: needs → budget & timing → details, then a summary. */
export function ContactForm() {
  const [step, setStep] = useState(1);
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [timing, setTiming] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState(false);
  const [sending, startSending] = useTransition();

  const ok1 = needs.length > 0;
  const ok2 = !!budget && !!timing;
  const ok3 = !!form.name.trim() && EMAIL.test(form.email);
  const shown = step === 4 ? 3 : step;

  const set = (k: keyof typeof EMPTY) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const back = () => {
    setError(false);
    setStep((s) => Math.max(1, s - 1));
  };
  const reset = () => {
    setStep(1);
    setNeeds([]);
    setBudget(null);
    setTiming(null);
    setForm(EMPTY);
    setError(false);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!ok3 || sending) return;
    setError(false);
    startSending(async () => {
      const res = await submitBrief({ needs, budget: budget!, timing: timing!, ...form });
      if (res.ok) setStep(4);
      else setError(true);
    });
  };

  return (
    <div className="flex min-h-[480px] min-w-0 flex-[1.3_1_440px] flex-col gap-[26px] rounded-card border border-white/10 bg-raised p-[clamp(24px,3.5vw,44px)]">
      <div className="flex items-center gap-3.5 font-mono text-xs text-white/70">
        <span>{step === 4 ? "Sent" : `0${shown}`}</span>
        <div className="h-0.5 flex-1 overflow-hidden rounded-sm bg-white/15">
          <div
            className="h-full bg-white transition-[width] duration-[600ms] ease-expo"
            style={{ width: `${step === 4 ? 100 : (shown / 3) * 100}%` }}
          />
        </div>
        <span>03</span>
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-[22px]">
          <StepTitle>What can we help with?</StepTitle>
          <StepLabel>Pick any that apply</StepLabel>
          <div className="flex flex-wrap gap-2">
            {NEEDS.map((n) => (
              <Chip
                key={n}
                multi
                label={n}
                on={needs.includes(n)}
                onClick={() => setNeeds((xs) => (xs.includes(n) ? xs.filter((x) => x !== n) : [...xs, n]))}
              />
            ))}
          </div>
          <div className="mt-2.5 flex justify-end">
            <ArrowButton label="Continue" size="lg" angled={false} disabled={!ok1} onClick={() => ok1 && setStep(2)} />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-[22px]">
          <StepTitle>Budget and timing</StepTitle>
          <StepLabel>Estimated budget (USD)</StepLabel>
          <div role="radiogroup" aria-label="Estimated budget (USD)" className="flex flex-wrap gap-2">
            {BUDGETS.map((b) => (
              <Chip key={b} label={b} on={budget === b} onClick={() => setBudget(b)} />
            ))}
          </div>
          <StepLabel>When do you want to start?</StepLabel>
          <div role="radiogroup" aria-label="When do you want to start?" className="flex flex-wrap gap-2">
            {TIMINGS.map((t) => (
              <Chip key={t} label={t} on={timing === t} onClick={() => setTiming(t)} />
            ))}
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <BackButton onClick={back} />
            <ArrowButton label="Continue" size="lg" angled={false} disabled={!ok2} onClick={() => ok2 && setStep(3)} />
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={submit} noValidate className="flex flex-col gap-[18px]">
          <StepTitle>About you</StepTitle>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-[22px] gap-y-1.5">
            <input aria-label="Your name" name="name" autoComplete="name" required placeholder="Your name" value={form.name} onChange={set("name")} className={clsx(field, "text-[17px]")} />
            <input aria-label="Work email" name="email" type="email" autoComplete="email" required placeholder="Work email" value={form.email} onChange={set("email")} className={clsx(field, "text-[17px]")} />
            <input aria-label="Company" name="company" autoComplete="organization" placeholder="Company (optional)" value={form.company} onChange={set("company")} className={clsx(field, "text-[17px]")} />
            <input aria-label="Website or link" name="link" autoComplete="url" placeholder="Website or link (optional)" value={form.link} onChange={set("link")} className={clsx(field, "text-[17px]")} />
          </div>
          <textarea
            aria-label="Project details"
            name="message"
            rows={4}
            placeholder="Tell us about the project: what it does, who uses it, where it stands today."
            value={form.message}
            onChange={set("message")}
            className={clsx(field, "resize-y text-base leading-[1.5]")}
          />
          <div className="text-[12.5px] text-white/55">Happy to sign an NDA before the call.</div>
          {error && (
            <p role="alert" className="m-0 text-[14px] leading-[1.5] text-[#F29B94]">
              We couldn&apos;t send your brief. Please try again, or email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          )}
          <div className="mt-1.5 flex items-center justify-between">
            <BackButton onClick={back} />
            <ArrowButton
              type="submit"
              label={sending ? "Sending…" : "Send brief"}
              size="lg"
              angled={false}
              disabled={!ok3 || sending}
            />
          </div>
        </form>
      )}

      {step === 4 && (
        <div className="flex flex-1 flex-col justify-center gap-[18px]" role="status">
          <div className="flex size-14 items-center justify-center rounded-full bg-acc text-2xl">✓</div>
          <div className="text-[clamp(26px,2.8vw,38px)] leading-[1.1] font-bold tracking-[-0.035em]">
            Thanks, {form.name.trim().split(" ")[0] || "there"}.
          </div>
          <p className="m-0 max-w-[44ch] text-[15.5px] leading-[1.6] text-white/75">
            Your brief is with Junaid. Expect a reply at {form.email} within one business day, with times for a 30-minute
            call.
          </p>
          <div className="flex flex-wrap gap-2">
            {[...needs, budget, timing].filter(Boolean).map((x) => (
              <span key={x} className="rounded-full border border-white/25 px-[13px] py-[7px] text-[13px]">
                {x}
              </span>
            ))}
          </div>
          <button type="button" data-hover="1" onClick={reset} className="self-start text-sm text-white/70">
            Send another brief
          </button>
        </div>
      )}
    </div>
  );
}
