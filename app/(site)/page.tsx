import type { Metadata } from "next";
import { FloatingNav } from "@/components/site/nav";
import { Hero, HOME_NAV } from "@/components/home/hero";
import { CreditsStrip, Featured } from "@/components/home/featured";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { PartnerWork } from "@/components/home/partner-work";
import { Partnerships } from "@/components/home/partnerships";
import { Testimonials } from "@/components/home/testimonials";
import { Founder, Products } from "@/components/home/products";
import { Contact } from "@/components/home/contact";

export const metadata: Metadata = {
  title: { absolute: "Devnito · We build products people use" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <FloatingNav items={HOME_NAV} cta={{ label: "Let's talk", href: "#contact" }} threshold={0.75} />
      <main>
        <Hero />
        <CreditsStrip />
        <Featured />
        <About />
        <Services />
        <PartnerWork />
        <Partnerships />
        <Testimonials />
        <Products />
        <Founder />
        <Contact />
      </main>
    </>
  );
}
