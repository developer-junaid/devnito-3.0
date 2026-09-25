import type { Metadata } from "next";
import Link from "next/link";
import { img } from "@/lib/images";
import { INNER_NAV } from "@/lib/site";
import { Spotlight } from "@/components/site/motion";
import { FloatingNav, FooterNav, SiteHeader } from "@/components/site/nav";
import { ContactPanel } from "@/components/site/contact-panel";
import { Arrow, ArrowLink, Cover, H2, Headline, SectionHeader, SectionLabel } from "@/components/site/ui";
import { Pipeline } from "@/components/amg/pipeline";

export const metadata: Metadata = {
  title: "AMG case study",
  description:
    "Audio Media Grading authenticates, grades and encapsulates recorded music. Devnito moved every step of that process, from submission to storefront, onto one modern platform.",
  alternates: { canonical: "/work/amg" },
};

const FACTS = [
  ["Client", "Audio Media Grading"],
  ["Our role", "Product engineering & modernization"],
  ["Surfaces", "Storefront · Account · Ops"],
  ["Stack", "Next.js · Node.js · PostgreSQL"],
];

const APPROACH = [
  {
    label: "The challenge",
    body: "Submissions, grading records, labels, payments and shipping were split across older tools. Staff re-keyed the same item data at every step.",
  },
  {
    label: "What we built",
    body: "One architecture for the storefront, the submission and payment flow, internal grading and labelling tools, and the shipping and returns path.",
  },
  {
    label: "How we shipped it",
    body: "Incrementally. Old and new ran in parallel, and each surface switched over only once it matched the process it replaced.",
  },
];

const NOTES = [
  {
    title: "Parallel running",
    body: "The legacy system and the new platform ran side by side, surface by surface, until each switch-over was safe.",
  },
  { title: "One item record", body: "Grade, label, code, order and shipment all hang off a single record, so data is entered once." },
  {
    title: "Print and digital together",
    body: "Labels and QR/barcode identifiers are generated for print and resolve to the live digital record.",
  },
  { title: "Payments in the flow", body: "Payments, insured values and shipping are part of submission, not a separate checkout." },
];

// Sample rows for the recreated operator console.
const QUEUE = [
  { id: "AMG-24-1187", title: "Kind of Blue — 1959 pressing", media: "Vinyl LP", grade: "9.2", status: "Labelled", tone: "bg-[#E6F4EC] text-[#1F8A5B]" },
  { id: "AMG-24-1188", title: "Rumours — first UK press", media: "Vinyl LP", grade: "8.8", status: "Grading", tone: "bg-[#EEF3FC] text-acc" },
  { id: "AMG-24-1189", title: "Thriller — sealed cassette", media: "Cassette", grade: null, status: "Checked in", tone: "bg-[#FDF1E4] text-[#A5561A]" },
  { id: "AMG-24-1190", title: "Nevermind — promo CD", media: "CD", grade: "9.6", status: "Ready to ship", tone: "bg-[#F2F1ED] text-body" },
];

function OpsConsole() {
  const row = "grid grid-cols-[1.1fr_2fr_1fr_0.8fr_1fr] px-3.5 py-[11px]";
  return (
    <div data-mock="1" className="flex min-h-[420px] overflow-hidden rounded-3xl border border-[#E4E3DE] bg-[#F6F6F3] text-[12.5px]">
      <div className="flex w-[190px] shrink-0 flex-col gap-1 bg-ink px-3.5 py-5 text-white max-sm:hidden">
        <div className="mb-[18px] font-extrabold tracking-[0.08em]">AMG · OPS</div>
        <span className="rounded-lg bg-white/12 px-2.5 py-2 font-semibold">Intake queue</span>
        {["Grading", "Label printing", "Shipping", "Customers"].map((x) => (
          <span key={x} className="px-2.5 py-2 opacity-65">
            {x}
          </span>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3.5 px-[22px] py-5">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <span className="text-lg font-bold tracking-[-0.02em]">Intake queue</span>
          <span className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-ink px-[11px] py-1.5 text-white">All · 42</span>
            <span className="rounded-full border border-[#DDDCD6] px-[11px] py-1.5">Awaiting grade · 17</span>
            <span className="rounded-full border border-[#DDDCD6] px-[11px] py-1.5">Ready to ship · 9</span>
          </span>
        </div>
        <div className="overflow-x-auto rounded-[14px] border border-hair bg-white">
          <div className="min-w-[560px]">
            <div className={`${row} border-b border-hair text-label`}>
              <span>Item ID</span>
              <span>Title</span>
              <span>Media</span>
              <span>Grade</span>
              <span>Status</span>
            </div>
            {QUEUE.map((q, i) => (
              <div key={q.id} className={`${row} items-center ${i < QUEUE.length - 1 ? "border-b border-[#F2F1ED]" : ""}`}>
                <span className="font-mono">{q.id}</span>
                <span className="font-semibold">{q.title}</span>
                <span>{q.media}</span>
                {q.grade ? <span className="font-bold">{q.grade}</span> : <span className="text-soft">—</span>}
                <span>
                  <span className={`rounded-full px-[9px] py-1 ${q.tone}`}>{q.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2.5">
          {[
            ["Checked in today", "26"],
            ["Labels printed", "31"],
            ["Shipments out", "12"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-[14px] border border-hair bg-white p-3.5">
              <div className="text-label">{k}</div>
              <div className="mt-1.5 text-[22px] font-bold tracking-[-0.03em]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AmgCaseStudyPage() {
  return (
    <>
      <FloatingNav
        items={INNER_NAV.map(({ label, href }) => ({ label, href }))}
        cta={{ label: "Let's talk", href: "#contact" }}
        page="Case study"
      />
      <main>
        {/* Hero */}
        <section className="p-3.5">
          <div data-dark="1" data-hero-card="1" className="relative overflow-hidden rounded-panel bg-ink text-white">
            <Cover
              image={img.amgGradingDetail}
              alt=""
              priority
              data-hero-img="1"
              className="object-[right_top] blur-[1.5px] brightness-[0.4] saturate-[0.7]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(20,21,24,0.97)_0%,rgba(20,21,24,0.9)_45%,rgba(20,21,24,0.55)_80%,rgba(20,21,24,0.4)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,21,24,0.95)_0%,rgba(20,21,24,0)_50%)]" />
            <div className="relative flex min-h-[min(820px,calc(100vh-28px))] flex-col p-[clamp(20px,3vw,40px)]">
              <SiteHeader
                items={INNER_NAV}
                cta={{ label: "Start a project", href: "#contact" }}
                right={<ArrowLink href="#contact" label="Start a project" circle="white" size="md" />}
              />
              <div className="mt-[clamp(50px,9vw,120px)] max-w-[980px]">
                <Link
                  href="/work"
                  data-hero="1"
                  className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.16em] text-white/72 uppercase"
                >
                  ← Work <span className="opacity-50">/</span> Case study <span className="opacity-50">/</span>{" "}
                  <span className="text-sky">AMG</span>
                </Link>
                <Headline
                  className="mt-[22px] text-[clamp(44px,7vw,104px)]"
                  parts={["A grading house, ", { strong: "rebuilt as software." }]}
                />
                <p data-hero="1" className="mt-[26px] mb-0 max-w-[50ch] text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-white/72">
                  Audio Media Grading authenticates, grades and encapsulates recorded music. We moved every step of that
                  process, from submission to storefront, onto one modern platform.
                </p>
              </div>
              <div data-hero="1" className="mt-auto grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-2.5 pt-11">
                {FACTS.map(([k, v]) => (
                  <div key={k} className="rounded-[18px] border border-white/14 bg-ink/50 px-[18px] py-4 backdrop-blur-[14px]">
                    <div className="text-[12.5px] text-white/60">{k}</div>
                    <div className="mt-1.5 text-[15px] font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <Spotlight />
          </div>
        </section>

        {/* (01) Overview */}
        <section className="px-section pt-section pb-[clamp(40px,5vw,70px)]">
          <div className="wrap flex flex-wrap justify-between gap-[clamp(30px,5vw,80px)]">
            <div data-reveal="1" className="max-w-[360px] flex-[1_1_240px]">
              <SectionLabel index="(01)" label="Overview" />
            </div>
            <div className="max-w-[820px] flex-[2_1_520px]">
              <H2 className="leading-[1.14] text-[clamp(30px,3.6vw,52px)]">
                Grading is a <strong>physical process</strong> with a paper trail. We gave it <strong>one source of truth.</strong>
              </H2>
              <p data-reveal="1" className="mt-7 mb-0 max-w-[58ch] text-base leading-[1.7] text-body">
                Items arrive, get authenticated, graded, labelled, encapsulated, tracked and shipped back. Each of those
                steps lived in a different older system, with manual handoffs in between. We replaced them surface by
                surface, so the business kept operating the whole time.
              </p>
            </div>
          </div>
        </section>

        <section className="px-section pb-[clamp(70px,9vw,120px)]">
          <div data-reveal="1" data-tilt="1" className="wrap relative h-[clamp(360px,52vw,740px)] overflow-hidden rounded-[28px] bg-white">
            <Cover image={img.amgHome} alt="AMG storefront" className="object-[left_top]" sizes="(max-width: 1400px) 100vw, 1320px" zoom />
          </div>
        </section>

        {/* (02) Challenge & approach */}
        <section className="p-3.5">
          <div data-dark="1" className="relative overflow-hidden rounded-panel bg-panel p-[clamp(30px,5vw,72px)] text-white">
            <SectionLabel index="(02)" label="Challenge & approach" dark />
            <div className="mt-[clamp(30px,4vw,56px)] flex flex-wrap gap-[clamp(30px,5vw,80px)]">
              <div className="flex-[1_1_380px]">
                <H2 dark className="text-[clamp(28px,3.2vw,46px)] leading-[1.14]">
                  Replace every system <strong>without stopping</strong> the one business they run.
                </H2>
              </div>
              <div className="grid flex-[1_1_380px] gap-3">
                {APPROACH.map((a) => (
                  <div key={a.label} data-reveal="1" className="rounded-[20px] border border-white/10 bg-white/5 px-6 py-[22px]">
                    <div className="text-[12.5px] text-sky">{a.label}</div>
                    <p className="mt-2.5 mb-0 text-[15.5px] leading-[1.6] text-white/78">{a.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <Spotlight />
          </div>
        </section>

        {/* (03) Pipeline */}
        <section className="px-section pt-section pb-[clamp(40px,5vw,70px)]">
          <div className="wrap">
            <SectionHeader index="(03)" label="The pipeline" align="start">
              <strong>Five stages</strong>, one item record <strong>end to end.</strong>
            </SectionHeader>
            <Pipeline />
          </div>
        </section>

        {/* (04) Screens */}
        <section className="px-section pt-[clamp(50px,7vw,100px)] pb-[clamp(70px,9vw,120px)]">
          <div className="wrap">
            <SectionHeader index="(04)" label="Selected screens" align="start">
              What <strong>customers</strong> and <strong>operators</strong> actually see.
            </SectionHeader>
            <div className="mt-[clamp(36px,5vw,60px)] flex flex-wrap gap-3.5">
              {[
                { image: img.amgSubmissionCart, alt: "Submission builder", pos: "object-[right_top]", title: "Submission builder.", body: "Media type, per-item pricing, return insurance and shipping resolve into one estimated total." },
                { image: img.amgGradingDetail, alt: "Graded item record", pos: "object-[left_top]", title: "Graded item record.", body: "Encapsulated media, grade label, catalogue metadata and downloadable assets." },
              ].map((f) => (
                <figure key={f.title} data-reveal="1" data-tilt="1" className="m-0 min-w-0 flex-[1_1_420px]">
                  <div className="relative h-[clamp(300px,32vw,460px)] overflow-hidden rounded-3xl bg-white">
                    <Cover image={f.image} alt={f.alt} className={f.pos} sizes="(max-width: 900px) 100vw, 50vw" zoom />
                  </div>
                  <figcaption className="mt-3.5 text-[14.5px] leading-[1.55] text-body">
                    <strong className="text-ink">{f.title}</strong> {f.body}
                  </figcaption>
                </figure>
              ))}
            </div>
            <figure data-reveal="1" className="mt-3.5 mb-0">
              <OpsConsole />
              <figcaption className="mt-3.5 flex flex-wrap justify-between gap-2.5 text-[14.5px] leading-[1.55] text-body">
                <span>
                  <strong className="text-ink">Operator console.</strong> Intake queue, grade entry, label printing and batch
                  status in one view.
                </span>
                <span className="font-mono text-[11px] text-soft">Interface recreated · sample data</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* (05) Engineering notes */}
        <section className="px-section pb-[clamp(70px,9vw,120px)]">
          <div className="wrap flex flex-wrap gap-[clamp(30px,5vw,80px)]">
            <div data-reveal="1" className="max-w-[360px] flex-[1_1_240px]">
              <SectionLabel index="(05)" label="Engineering notes" />
            </div>
            <div className="flex-[2_1_520px] border-t border-rule">
              {NOTES.map((n, i) => (
                <div key={n.title} data-reveal="1" className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-b border-rule py-6">
                  <span className="text-[17px] text-soft">0{i + 1}</span>
                  <div>
                    <div className="text-[19px] font-bold tracking-[-0.02em]">{n.title}</div>
                    <p className="mt-1.5 mb-0 text-[15px] leading-[1.6] text-body">{n.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (06) Outcome */}
        <section className="px-section pb-[clamp(70px,9vw,120px)]">
          <div
            data-reveal="1"
            className="wrap flex flex-wrap items-end justify-between gap-[30px] rounded-panel bg-white p-[clamp(30px,5vw,72px)]"
          >
            <div className="flex-[1_1_520px]">
              <SectionLabel index="(06)" label="Outcome" />
              <H2 className="mt-6 text-[clamp(28px,3.2vw,46px)] leading-[1.14]">
                Customers use <strong>one account.</strong> Operators work from <strong>one queue.</strong>
              </H2>
            </div>
            <p className="m-0 flex-[0_1_360px] text-[15.5px] leading-[1.65] text-body">
              Customers submit, track and receive graded media in one place, and staff no longer re-key data between
              systems. The engagement is ongoing, and the platform keeps expanding.
            </p>
          </div>
        </section>

        {/* Next project */}
        <section className="px-section pb-[clamp(70px,9vw,120px)]">
          <Link
            href="/work"
            data-reveal="1"
            data-tilt="1"
            className="wrap relative block h-[clamp(340px,34vw,480px)] overflow-hidden rounded-panel bg-ink text-white"
          >
            <Cover image={img.mhcDashboard} alt="MyHealthClinic" className="object-[left_top] brightness-[0.45]" sizes="(max-width: 1400px) 100vw, 1320px" zoom />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,21,24,0.92)_0%,rgba(20,21,24,0.4)_70%)]" />
            <div className="absolute right-[clamp(26px,4vw,56px)] bottom-[clamp(26px,4vw,50px)] left-[clamp(26px,4vw,56px)] flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="text-sm text-white/65">Next project</div>
                <div className="mt-2 text-[clamp(36px,5vw,76px)] leading-none font-bold tracking-[-0.045em]">MyHealthClinic</div>
                <div className="mt-2.5 text-[15px] text-white/75">A clinic&apos;s whole day, on one screen.</div>
              </div>
              <span className="flex size-16 items-center justify-center rounded-full bg-white text-[22px] text-ink">
                <Arrow />
              </span>
            </div>
          </Link>
        </section>

        <ContactPanel
          heading={
            <>
              Running on <strong>old systems?</strong> Let&apos;s <strong>talk.</strong>
            </>
          }
          cta="Start a project"
          middle={<FooterNav home="/" />}
        />
      </main>
    </>
  );
}
