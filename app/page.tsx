import { ContactFormProvider } from "@/components/contact-form-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Packages } from "@/components/packages";
import { Work } from "@/components/work";
import { ProofStrip } from "@/components/proof-strip";
import { Testimonials } from "@/components/testimonials";
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
        <ProofStrip />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </ContactFormProvider>
  );
}
