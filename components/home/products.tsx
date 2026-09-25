import { img } from "@/lib/images";
import { ArrowLink, Badge, Cover, H2, SectionHeader, SectionLabel, Shot } from "@/components/site/ui";

export function MentorJunaidCard({ label, className }: { label: string; className: string }) {
  return (
    <div data-reveal="1" className={`relative flex flex-col overflow-hidden bg-panel text-white ${className}`}>
      <div className="flex min-h-0 flex-1 items-center justify-center px-[18px] pb-3.5 pt-14">
        <Shot image={img.mentorjunaid} alt="MentorJunaid" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]" sizes="(max-width: 768px) 100vw, 35vw" />
      </div>
      <div className="absolute top-4 left-4">
        <Badge>Coming soon</Badge>
      </div>
      <div className="relative px-5 pb-5">
        <div className="text-[12.5px] text-white/70">{label}</div>
        <div className="mt-[5px] text-xl font-bold tracking-[-0.02em]">MentorJunaid</div>
        <div className="mt-[5px] text-[13.5px] leading-[1.5] text-white/78">Learning roadmaps and an AI mentor.</div>
      </div>
    </div>
  );
}

/** MyHealthClinic screens: sign-in above, dashboard and queue below. */
export function MhcScreens({ well }: { well: string }) {
  return (
    <div className="flex min-w-0 flex-[1.4_1_460px] flex-col gap-3 p-[clamp(14px,2vw,22px)]">
      <div className={`flex items-center justify-center overflow-hidden rounded-[18px] p-[clamp(12px,2vw,20px)] ${well}`}>
        <Shot image={img.mhcLogin} alt="MyHealthClinic sign-in with live queue" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)]" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className={`flex items-center justify-center overflow-hidden rounded-[14px] p-2 ${well}`}>
          <Shot image={img.mhcDashboard} alt="MyHealthClinic dashboard" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)]" sizes="(max-width: 768px) 50vw, 30vw" />
        </div>
        <div className={`flex items-center justify-center overflow-hidden rounded-[14px] p-2 ${well}`}>
          <Shot image={img.mhcQueue} alt="MyHealthClinic queue" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)]" sizes="(max-width: 768px) 50vw, 30vw" />
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="px-section pb-[clamp(70px,9vw,130px)]">
      <div className="wrap">
        <SectionHeader index="(05)" label="Devnito products" align="start" className="mb-[clamp(30px,4vw,50px)]">
          Three products we <strong>own, build and license</strong> to other businesses.
        </SectionHeader>

        <div data-reveal="1" className="flex flex-wrap overflow-hidden rounded-card bg-cocoa text-white">
          <div className="flex flex-[1_1_360px] flex-col justify-between gap-[30px] p-[clamp(26px,4vw,52px)]">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Flagship SaaS</Badge>
                <span className="rounded-full border border-white/35 px-[13px] py-[7px] text-xs">
                  Launching soon in hospitals in Saudi Arabia &amp; Pakistan
                </span>
              </div>
              <div className="mt-[26px] text-[clamp(36px,4.4vw,64px)] leading-none font-bold tracking-[-0.045em]">MyHealthClinic</div>
              <p className="mt-3.5 max-w-[44ch] text-base leading-[1.6] text-white/75">
                Clinic management for hospitals and clinics. One record of the day, from the patient token to the receipt:
                live queues, doctor workflows, prescriptions, vitals, billing and staff roles.
              </p>
            </div>
            <ArrowLink href="https://app.myhealthclinic.online/" label="Open MyHealthClinic" size="sm" className="self-start" />
          </div>
          <MhcScreens well="bg-cream" />
        </div>

        <div className="mt-3.5 flex flex-wrap gap-3.5">
          <div
            data-reveal="1"
            className="relative flex h-[clamp(420px,40vw,540px)] min-w-0 flex-[2_1_560px] flex-col overflow-hidden rounded-card bg-well text-white"
          >
            <div className="flex min-h-0 flex-1 items-center justify-center px-[18px] pt-14 pb-3.5">
              <Shot image={img.sceneoHero} alt="Sceneo Studio homepage" shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]" />
            </div>
            <div className="flex flex-wrap items-end justify-between gap-5 px-6 pb-6">
              <div className="max-w-[52ch]">
                <div className="text-[12.5px] text-white/70">Website template · Next.js + Sanity</div>
                <div className="mt-1.5 text-[clamp(28px,3vw,42px)] font-bold tracking-[-0.04em]">Sceneo</div>
                <div className="mt-1.5 text-[14.5px] leading-[1.55] text-white/80">
                  A ready-made site for video production and creative agencies, fully editable from the CMS.
                </div>
              </div>
              <ArrowLink href="/products/sceneo" label="Get Sceneo · $184" size="sm" />
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_320px]">
            <MentorJunaidCard label="Learning platform" className="min-h-[340px] flex-1 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="px-section pb-[clamp(70px,9vw,130px)]">
      <div className="wrap flex flex-wrap items-center gap-[clamp(30px,5vw,80px)]">
        <div data-reveal="1" className="relative aspect-[4/5] max-w-[460px] flex-[1_1_300px] overflow-hidden rounded-card bg-ink">
          <Cover image={img.junaid} alt="Junaid Qureshi, founder of Devnito" className="object-[center_top]" sizes="(max-width: 768px) 100vw, 460px" zoom />
        </div>
        <div className="flex-[1_1_380px]">
          <div data-reveal="1">
            <SectionLabel index="(06)" label="Founder-led" />
          </div>
          <H2 className="mt-[22px] text-[clamp(30px,3.6vw,52px)]">
            <strong>Senior engineering</strong>, without layers of <strong>account management.</strong>
          </H2>
          <p data-reveal="1" className="mt-[22px] max-w-[46ch] text-base leading-[1.65] text-body">
            Junaid Qureshi leads delivery and writes code. Clients talk to the person making the architectural calls, across
            engagements in the US, UAE, Europe and Australia.
          </p>
          <div data-reveal="1" className="mt-[26px] flex flex-wrap gap-2">
            {["United States", "UAE", "Europe", "Australia"].map((r) => (
              <span key={r} className="rounded-full bg-white px-3.5 py-2 text-[13.5px]">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
