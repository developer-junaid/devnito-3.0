"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState, useTransition, type FormEvent, type ReactNode } from "react";
import { submitSceneoRequest } from "@/app/(site)/actions";
import { img } from "@/lib/images";
import { CONTACT_EMAIL } from "@/lib/site";
import { ArrowButton, ArrowLink } from "@/components/site/ui";
import { useScrolledPast } from "@/components/site/motion";

/*
 * Every Sceneo buy button goes to SCENEO_CHECKOUT_URL once it is set. Until then the same
 * buttons open a short request form, so the page can launch before checkout is ready.
 */

type Purchase = { checkoutUrl: string | null; openRequest: () => void };

const PurchaseContext = createContext<Purchase>({ checkoutUrl: null, openRequest: () => {} });

export function SceneoPurchaseProvider({ checkoutUrl, children }: { checkoutUrl: string | null; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <PurchaseContext.Provider value={{ checkoutUrl, openRequest: () => setOpen(true) }}>
      {children}
      {!checkoutUrl && <RequestDialog open={open} onClose={() => setOpen(false)} />}
    </PurchaseContext.Provider>
  );
}

export function useSceneoPurchase() {
  return useContext(PurchaseContext);
}

const LABELS = {
  hero: { live: "Buy Sceneo · $184", soon: "Request Sceneo · $184" },
  pricing: { live: "Buy now", soon: "Request Sceneo" },
} as const;

/** Arrow-pill buy button: checkout link when live, request form otherwise. */
export function SceneoBuy({ variant }: { variant: keyof typeof LABELS }) {
  const { checkoutUrl, openRequest } = useSceneoPurchase();
  const size = variant === "hero" ? "lgx" : "full";
  if (checkoutUrl) {
    return <ArrowLink href={checkoutUrl} label={LABELS[variant].live} size={size} angled={false} external />;
  }
  return (
    <ArrowButton
      label={LABELS[variant].soon}
      size={size}
      angled={false}
      onClick={openRequest}
    />
  );
}

/** Line under the pricing card. */
export function SceneoCheckoutNote() {
  const { checkoutUrl } = useSceneoPurchase();
  return (
    <div className="text-center text-[12.5px] text-white/55">
      {checkoutUrl
        ? "Secure checkout through Whop. Instant download after purchase."
        : "Checkout opens soon. Request now and we'll contact you for payment and setup."}
    </div>
  );
}

/** Fixed pill that appears after ~90% of the first viewport. */
export function BuyBar() {
  const show = useScrolledPast(0.9);
  const { checkoutUrl, openRequest } = useSceneoPurchase();
  const cta = "btn-label bg-white px-[18px] py-[11px] text-[12.5px] whitespace-nowrap text-ink";
  return (
    <div
      inert={!show}
      // w-max: see FloatingNav; a fixed box at left:50% only gets half the viewport otherwise.
      className="fixed bottom-4 left-1/2 z-[80] flex w-max max-w-[calc(100vw-24px)] items-center gap-3.5 rounded-full border border-white/10 bg-ink/86 py-1.5 pr-1.5 pl-[18px] text-white backdrop-blur-[18px] transition-transform duration-700 ease-expo"
      style={{ transform: `translate(-50%, ${show ? "0px" : "160%"})` }}
    >
      <Image src={img.devnitoLogo.src} alt="" width={18} height={18} className="block object-contain" />
      <span className="text-sm font-bold">Sceneo</span>
      <span className="text-sm text-white/65">$184</span>
      {checkoutUrl ? (
        <a href={checkoutUrl} target="_blank" rel="noopener" className={cta}>
          Buy now
        </a>
      ) : (
        <button type="button" onClick={openRequest} className={cta}>
          Request
        </button>
      )}
    </div>
  );
}

const field =
  "box-border w-full appearance-none rounded-none border-0 border-b border-white/25 bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-white/45 focus:border-white";

const EMAIL = /.+@.+\..+/;

function RequestDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState({ email: "", name: "", link: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [sending, startSending] = useTransition();
  const valid = EMAIL.test(form.email);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid || sending) return;
    setStatus("idle");
    startSending(async () => {
      const res = await submitSceneoRequest(form);
      setStatus(res.ok ? "sent" : "error");
    });
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="sceneo-request-title"
      className="m-auto w-[calc(100%-28px)] max-w-[480px] rounded-card border border-white/10 bg-raised p-0 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-[clamp(24px,5vw,36px)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full border border-white/20 text-lg leading-none text-white/80 hover:text-white"
        >
          ×
        </button>

        {status === "sent" ? (
          <div role="status" className="flex flex-col gap-4 pt-2">
            <div className="flex size-12 items-center justify-center rounded-full bg-acc text-xl">✓</div>
            <div id="sceneo-request-title" className="text-[28px] leading-[1.1] font-bold tracking-[-0.035em]">
              Requested.
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-white/75">
              We&apos;ll contact you at {form.email} for payment and setup ASAP.
            </p>
            <button type="button" onClick={onClose} className="self-start text-sm text-white/70 hover:text-white">
              Back to Sceneo
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex flex-col gap-4">
            <div className="mono-label text-[11px] text-sky">Sceneo · $184 one-time</div>
            <div id="sceneo-request-title" className="pr-10 text-[28px] leading-[1.1] font-bold tracking-[-0.035em]">
              Available for purchase soon.
            </div>
            <p className="m-0 text-[15px] leading-[1.6] text-white/75">
              Checkout is opening shortly. Leave your email and we&apos;ll contact you for payment and setup ASAP.
            </p>
            <div className="mt-1 flex flex-col gap-1">
              <input aria-label="Email" type="email" required autoComplete="email" placeholder="Email" value={form.email} onChange={set("email")} className={field} />
              <input aria-label="Name" autoComplete="name" placeholder="Name (optional)" value={form.name} onChange={set("name")} className={field} />
              <input aria-label="Studio website" autoComplete="url" placeholder="Studio website (optional)" value={form.link} onChange={set("link")} className={field} />
            </div>
            {status === "error" && (
              <p role="alert" className="m-0 text-sm leading-[1.5] text-[#F29B94]">
                We couldn&apos;t send your request. Please try again, or email{" "}
                <a href={`mailto:${CONTACT_EMAIL}?subject=Sceneo`} className="font-semibold text-white underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
            <div className="mt-2">
              <ArrowButton type="submit" label={sending ? "Sending…" : "Request Sceneo"} size="lg" angled={false} disabled={!valid || sending} />
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
