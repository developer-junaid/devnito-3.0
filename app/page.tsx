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
import { fetchProjects, fetchTestimonials } from "@/sanity/lib/fetchers";

/** Fetch Sanity at request time so Vercel runtime env vars apply (not only build-time). */
export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const leapHref = `/leap?ref=${encodeURIComponent(ref || "home")}`;

  const [projects, { testimonials, videoTestimonials }] = await Promise.all([
    fetchProjects(),
    fetchTestimonials(),
  ]);

  return (
    <ContactFormProvider>
      <Navbar leapHref={leapHref} />
      <main>
        <Hero />
        <Packages />
        <Work projects={projects} />
        <Founder />
        <ProofStrip />
        <Testimonials
          testimonials={testimonials}
          videoTestimonials={videoTestimonials}
        />
        <NotFor />
        <ContactCTA />
      </main>
      <Footer />
    </ContactFormProvider>
  );
}
