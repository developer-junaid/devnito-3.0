"use client";

import { track } from "@vercel/analytics";

export type LeapEvent =
  | "leap_page_view"
  | "leap_home_click"
  | "leap_save_contact"
  | "leap_linkedin_click"
  | "leap_book_meeting"
  | "leap_email_click"
  | "leap_devnito_click"
  | "leap_portfolio_click"
  | "leap_project_click";

export function getLeapRef(): string {
  if (typeof window === "undefined") return "direct";
  return new URLSearchParams(window.location.search).get("ref") || "direct";
}

export function trackLeap(
  event: LeapEvent,
  extra?: Record<string, string>,
) {
  track(event, { ref: getLeapRef(), ...extra });
}
