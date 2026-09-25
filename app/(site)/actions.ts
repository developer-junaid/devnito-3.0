"use server";

import { FORMSPREE_FORM_ID } from "@/lib/site";

export type Brief = {
  needs: string[];
  budget: string;
  timing: string;
  name: string;
  email: string;
  company: string;
  link: string;
  message: string;
};

export type BriefResult = { ok: true } | { ok: false };

const EMAIL = /.+@.+\..+/;

/** POSTs a form to Formspree, which emails it to Junaid. FORMSPREE_ENDPOINT overrides the default form. */
async function sendToFormspree(body: URLSearchParams, tag: string): Promise<BriefResult> {
  const endpoint = process.env.FORMSPREE_ENDPOINT?.trim() || `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`[${tag}] Formspree responded ${res.status}: ${await res.text()}`);
      return { ok: false };
    }
    return { ok: true };
  } catch (err) {
    console.error(`[${tag}] Formspree request failed`, err);
    return { ok: false };
  }
}

/** Homepage three-step brief. */
export async function submitBrief(brief: Brief): Promise<BriefResult> {
  if (!brief.needs.length || !brief.budget || !brief.timing || !brief.name.trim() || !EMAIL.test(brief.email)) {
    return { ok: false };
  }

  const body = new URLSearchParams();
  brief.needs.forEach((n) => body.append("needs[]", n));
  body.set("budget", brief.budget);
  body.set("timing", brief.timing);
  body.set("name", brief.name.trim());
  body.set("email", brief.email.trim());
  body.set("company", brief.company.trim());
  body.set("link", brief.link.trim());
  body.set("message", brief.message.trim());
  body.set("_subject", `New brief from ${brief.name.trim()}`);
  return sendToFormspree(body, "contact");
}

export type SceneoRequest = { email: string; name: string; link: string };

/** Sceneo purchase request, used until SCENEO_CHECKOUT_URL is set. */
export async function submitSceneoRequest(request: SceneoRequest): Promise<BriefResult> {
  if (!EMAIL.test(request.email)) return { ok: false };

  const body = new URLSearchParams();
  body.set("type", "Sceneo purchase request ($184)");
  body.set("email", request.email.trim());
  body.set("name", request.name.trim());
  body.set("link", request.link.trim());
  body.set("_subject", `Sceneo request from ${request.name.trim() || request.email.trim()}`);
  return sendToFormspree(body, "sceneo");
}
