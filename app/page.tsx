import { ContactFormProvider } from "@/components/contact-form-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Packages } from "@/components/packages";
import { Work } from "@/components/work";
import { Founder } from "@/components/founder";
import { ProofStrip } from "@/components/proof-strip";
import { Testimonials } from "@/components/testimonials";
import { NotFor } from "@/components/not-for";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <ContactFormProvider>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Work />
        <Founder />
        <ProofStrip />
        <Testimonials />
        <NotFor />
        <ContactCTA />
      </main>
      <Footer />
    </ContactFormProvider>
  );
}
