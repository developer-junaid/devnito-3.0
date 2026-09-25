"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STAGES = [
  { title: "Submission", body: "Customers build a submission, choose media type, insurance and shipping, and pay online." },
  { title: "Intake & grading", body: "Items are checked in, authenticated, graded and recorded against catalogue data." },
  { title: "Labels & codes", body: "Grade labels print with QR and barcode identifiers tied to the item record." },
  { title: "Shipping", body: "Return shipping, insured values and packing documents flow from the same data." },
  { title: "Storefront", body: "Public pages, the graded archive and merchandise sit on the same platform." },
];

/** Five pipeline stages; the highlight walks through them every 2.6s and follows hover. */
export function Pipeline() {
  const [step, setStep] = useState(0);
  const timer = useRef<number>(undefined);

  const restart = useCallback(() => {
    window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setStep((s) => (s + 1) % STAGES.length), 2600);
  }, []);

  useEffect(() => {
    restart();
    return () => window.clearInterval(timer.current);
  }, [restart]);

  return (
    <div className="mt-[clamp(36px,5vw,60px)] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
      {STAGES.map((s, i) => (
        <div
          key={s.title}
          data-reveal="1"
          onMouseEnter={() => {
            setStep(i);
            restart();
          }}
          className="flex min-h-[250px] flex-col gap-3.5 rounded-3xl px-[22px] py-6 transition-colors duration-[450ms]"
          style={{ background: step === i ? "#141518" : "#FFFFFF", color: step === i ? "#FFFFFF" : "#141518" }}
        >
          <span className="font-mono text-xs opacity-60">0{i + 1}</span>
          <span className="mt-auto text-[21px] font-bold tracking-[-0.02em]">{s.title}</span>
          <span className="text-sm leading-[1.55] opacity-75">{s.body}</span>
        </div>
      ))}
    </div>
  );
}
