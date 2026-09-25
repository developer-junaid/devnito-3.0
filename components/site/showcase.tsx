import clsx from "clsx";
import { img, type SiteImage } from "@/lib/images";
import { Shot } from "@/components/site/ui";

export type ShowcaseProject = {
  name: string;
  /** Live URL, when the site is public. */
  href?: string;
  domain?: string;
  body: string;
  hero: SiteImage;
  scenes: { image: SiteImage; alt: string }[];
};

// Larger Bread & Butter projects: the site's hero plus a strip of inner screens.
export const BNB_SHOWCASES: ShowcaseProject[] = [
  {
    name: "Unfeatured Films",
    href: "https://unfeatured.com/",
    domain: "unfeatured.com",
    body: "Engineering on the public website, built to Bread & Butter's design.",
    hero: img.unfeaturedHero,
    scenes: [
      { image: img.unfeaturedNoHands, alt: "Unfeatured Films: No Hands, in theaters 2027" },
      { image: img.unfeaturedOriginal, alt: "Unfeatured Films: original films" },
      { image: img.unfeaturedBranded, alt: "Unfeatured Films: branded films" },
      { image: img.unfeaturedCraft, alt: "Unfeatured Films: craft and technology" },
      { image: img.unfeaturedContact, alt: "Unfeatured Films: get in touch" },
    ],
  },
  {
    name: "SunTrends",
    href: "https://sun-trends.com/",
    domain: "sun-trends.com",
    body: "Engineering on the WordPress redesign of the storefront, built to Bread & Butter's design.",
    hero: img.suntrendsHero,
    scenes: [
      { image: img.suntrendsAccessories, alt: "SunTrends: options, accessories and replacement parts" },
      { image: img.suntrendsParts, alt: "SunTrends: replacement parts" },
    ],
  },
  {
    name: "Cognitiv · Cannes Lions 2026",
    href: "https://cannes2026.cognitiv.ai/",
    domain: "cannes2026.cognitiv.ai",
    body: "Engineering on the Cannes Lions 2026 microsite for Cognitiv's Performance Parlor, built to Bread & Butter's design.",
    hero: img.cognitivHero,
    scenes: [
      { image: img.cognitivEvents, alt: "Cognitiv Cannes microsite: join our events" },
      { image: img.cognitivTeam, alt: "Cognitiv Cannes microsite: team and gallery" },
      { image: img.cognitivConversations, alt: "Cognitiv Cannes microsite: Conversations in the Performance Parlor" },
    ],
  },
];

/** Wide project card: hero screenshot on the left, credit, copy and a thumbnail strip on the right. */
export function Showcase({
  project,
  credit = "Via Bread & Butter",
  className = "mt-3.5",
}: {
  project: ShowcaseProject;
  /** "Via Bread & Butter" on /work, "With Bread & Butter" on the homepage, matching each page's cards. */
  credit?: string;
  className?: string;
}) {
  const Well = project.href ? "a" : "div";
  return (
    <div data-reveal="1" className={clsx("flex flex-wrap overflow-hidden rounded-card bg-white", className)}>
      <Well
        {...(project.href ? { href: project.href, target: "_blank", rel: "noopener" } : {})}
        data-mock="1"
        className="flex min-h-[clamp(260px,30vw,440px)] min-w-0 flex-[1.6_1_520px] items-center justify-center bg-night p-[clamp(14px,2vw,22px)]"
      >
        <Shot
          image={project.hero}
          alt={project.domain ? `${project.name}, ${project.domain}` : project.name}
          shadow="shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]"
        />
      </Well>
      <div className="flex min-w-0 flex-[1_1_320px] flex-col justify-between gap-6 px-[22px] pt-5 pb-[22px]">
        <div>
          <div className="flex justify-between gap-2.5 text-[12.5px] text-label">
            <span>{credit} · Contributed engineering</span>
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener" className="shrink-0 font-mono text-[10.5px] whitespace-nowrap text-soft">
                {project.domain} ↗
              </a>
            )}
          </div>
          <div className="mt-1.5 text-[22px] font-bold tracking-[-0.02em]">{project.name}</div>
          <div className="mt-1 text-[13.5px] leading-[1.5] text-body">{project.body}</div>
        </div>
        <div className={clsx("grid gap-2", project.scenes.length > 2 ? "grid-cols-3" : "grid-cols-2")}>
          {project.scenes.map((scene) => (
            <div key={scene.alt} className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-[10px] bg-night">
              <Shot image={scene.image} alt={scene.alt} radius={false} shadow={false} sizes="(max-width: 768px) 50vw, 200px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
