"use client";

import { useEffect } from "react";
import { trackLeap } from "@/lib/leap-analytics";

export function LeapAnalytics() {
  useEffect(() => {
    trackLeap("leap_page_view");
  }, []);

  return null;
}
