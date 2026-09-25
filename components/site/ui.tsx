import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import type { SiteImage } from "@/lib/images";

/* ----------------------------------------------------------------------------------------------
 * Arrow buttons: an uppercase pill with a circular arrow beside it (magnetic on hover).
 * ------------------------------------------------------------------------------------------- */

const PILL_TONES = {
  white: "bg-white text-ink",
  ink: "bg-ink text-white",
  outline: "border border-ink",
} as const;

const CIRCLE_TONES = {
  acc: "bg-acc text-white",
  white: "bg-white text-ink",
  ink: "bg-ink text-white",
  wine: "bg-wine text-white",
} as const;

// Exact paddings / circle sizes from the design files.
const SIZES = {
  xs: { pill: "px-5 py-3 text-[12.5px]", circle: "size-11" }, // Visit site, All work by partner
  sm: { pill: "px-[22px] py-[13px] text-[12.5px]", circle: "size-[46px]" }, // product CTAs
  md: { pill: "px-[22px] py-[14px] text-[13px]", circle: "size-[47px] text-[18px]" }, // Start a project
  mdo: { pill: "px-6 py-[14px] text-[13px]", circle: "size-[49px] text-[18px]" }, // See the work
  lg: { pill: "px-[26px] py-[15px] text-[13px]", circle: "size-[50px] text-[18px]" }, // form steps
  lgx: { pill: "px-[26px] py-4 text-[13px]", circle: "size-[51px] text-[18px]" }, // Sceneo hero
  full: { pill: "flex-1 text-center px-[26px] py-[17px] text-[13px]", circle: "size-[53px] text-[18px]" }, // pricing card
  xl: { pill: "px-[30px] py-[18px] text-[15px]", circle: "size-[60px] text-[20px]" }, // contact panels
} as const;

type ArrowButtonProps = {
  label: ReactNode;
  pill?: keyof typeof PILL_TONES;
  circle?: keyof typeof CIRCLE_TONES;
  size?: keyof typeof SIZES;
  /** Rotate the arrow -45° (↗). The form and buy buttons use a straight arrow. */
  angled?: boolean;
  className?: string;
};

function ArrowButtonInner({ label, pill = "white", circle = "acc", size = "md", angled = true }: ArrowButtonProps) {
  const s = SIZES[size];
  return (
    <>
      <span className={clsx("btn-label", PILL_TONES[pill], s.pill)}>{label}</span>
      <span className={clsx("ml-1.5 flex shrink-0 items-center justify-center rounded-full", CIRCLE_TONES[circle], s.circle)}>
        <Arrow angled={angled} />
      </span>
    </>
  );
}

export function Arrow({ angled = true }: { angled?: boolean }) {
  return <span className={clsx("inline-block", angled && "-rotate-45")}>→</span>;
}

/** Link-styled arrow button. Internal hrefs use next/link; `http`/`mailto` open as plain anchors. */
export function ArrowLink({
  href,
  external,
  className,
  magnetic = true,
  ...props
}: ArrowButtonProps & { href: string; external?: boolean; magnetic?: boolean }) {
  const cls = clsx(props.size === "full" ? "flex" : "inline-flex", "items-center", className);
  const data = magnetic ? { "data-magnetic": "1" } : {};
  if (external || /^(https?:|mailto:|#)/.test(href)) {
    const blank = external ?? /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...data} {...(blank ? { target: "_blank", rel: "noopener" } : {})}>
        <ArrowButtonInner {...props} />
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...data}>
      <ArrowButtonInner {...props} />
    </Link>
  );
}

export function ArrowButton({
  className,
  disabled,
  onClick,
  type = "button",
  ...props
}: ArrowButtonProps & Pick<ComponentProps<"button">, "disabled" | "onClick" | "type">) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-disabled={disabled}
      data-hover="1"
      className={clsx(
        props.size === "full" ? "flex w-full" : "inline-flex",
        "items-center transition-opacity duration-300",
        disabled && "opacity-40",
        className,
      )}
    >
      <ArrowButtonInner {...props} />
    </button>
  );
}

/* ----------------------------------------------------------------------------------------------
 * Section header: "(0N)" counter + label on the left, two-tone H2 on the right.
 * ------------------------------------------------------------------------------------------- */

export function SectionLabel({ index, label, dark }: { index: ReactNode; label: ReactNode; dark?: boolean }) {
  return (
    <>
      <div className={clsx("text-sm", dark ? "text-white/55" : "text-label")}>{index}</div>
      <div className="mt-1 text-[15px] font-semibold">{label}</div>
    </>
  );
}

/** Two-tone H2: light-weight soft text, with the key phrases wrapped in <strong>. */
export function H2({
  children,
  dark,
  className = "text-[clamp(30px,3.6vw,52px)]",
  ...props
}: ComponentProps<"h2"> & { dark?: boolean }) {
  return (
    <h2
      className={clsx(
        "h2-tone",
        dark ? "text-white/62 [&_strong]:text-white" : "text-soft [&_strong]:text-ink",
        !className.includes("tracking-") && "tracking-[-0.035em]",
        !className.includes("leading-") && "leading-[1.12]",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionHeader({
  index,
  label,
  children,
  className,
  align = "end",
}: {
  index: ReactNode;
  label: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "end" | "start";
}) {
  return (
    <div className={clsx("flex flex-wrap justify-between gap-[30px]", align === "end" && "items-end", className)}>
      <div data-reveal="1" className="flex-[1_1_240px]">
        <SectionLabel index={index} label={label} />
      </div>
      <H2 className="max-w-[700px] flex-[2_1_480px] text-[clamp(30px,3.6vw,52px)]">{children}</H2>
    </div>
  );
}

/** Small mono eyebrow with a light-blue dot (hero lines). */
export function Eyebrow({ children, dot = true, className }: { children: ReactNode; dot?: boolean; className?: string }) {
  return (
    <div
      data-hero="1"
      className={clsx(
        "flex items-center gap-2.5 font-mono text-[11.5px] tracking-[0.16em] text-white/72 uppercase",
        className,
      )}
    >
      {dot && <span className="size-[7px] shrink-0 rounded-full bg-sky" />}
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------------------------------------
 * Headline: H1 with words wrapped for the word-by-word entrance.
 * ------------------------------------------------------------------------------------------- */

export type HeadlinePart = string | { strong: string };

export function Headline({ parts, className }: { parts: HeadlinePart[]; className?: string }) {
  let i = 0;
  const words = (text: string) =>
    text.split(/(\s+)/).map((w, k) =>
      !w ? null : /^\s+$/.test(w) ? (
        w
      ) : (
        <span key={k} className="w-o">
          <span className="w-i" style={{ "--i": i++ } as CSSProperties}>
            {w}
          </span>
        </span>
      ),
    );
  return (
    <h1
      className={clsx(
        "m-0 leading-none font-light tracking-[-0.045em] text-white/78 [&_strong]:font-bold [&_strong]:text-white",
        className,
      )}
    >
      {parts.map((p, k) => (typeof p === "string" ? <span key={k}>{words(p)}</span> : <strong key={k}>{words(p.strong)}</strong>))}
    </h1>
  );
}

/* ----------------------------------------------------------------------------------------------
 * Screenshots
 * ------------------------------------------------------------------------------------------- */

/**
 * A screenshot scaled to fit its box without cropping (object-fit: contain behaviour).
 * The parent should be a flex box that centres it and bounds its height.
 */
export function Shot({
  image,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 60vw",
  priority,
  shadow = true,
  radius = true,
}: {
  image: SiteImage;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  shadow?: boolean | string;
  radius?: boolean;
}) {
  return (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={clsx(
        "block h-auto max-h-full w-auto max-w-full",
        radius && "rounded-shot",
        shadow === true ? "shot-shadow" : shadow || undefined,
        className,
      )}
    />
  );
}

/** Screenshot that covers its box (hero backgrounds, cropped showcase frames). */
export function Cover({
  image,
  alt,
  className,
  sizes = "100vw",
  zoom,
  ...rest
}: {
  image: SiteImage;
  alt: string;
  className?: string;
  sizes?: string;
  /** Scroll-in zoom + drift (card images in devnito-motion.js). */
  zoom?: boolean;
} & Pick<ComponentProps<"img">, "style"> & { priority?: boolean; "data-hero-img"?: string }) {
  return (
    <Image
      src={image.src}
      alt={alt}
      fill
      sizes={sizes}
      className={clsx("object-cover", className)}
      {...(zoom ? { "data-zoom": "1" } : {})}
      {...rest}
    />
  );
}

/* ----------------------------------------------------------------------------------------------
 * Small pieces
 * ------------------------------------------------------------------------------------------- */

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx("rounded-full px-[13px] py-[7px] text-xs", className)}>{children}</span>
  );
}

/** Uppercase status badge: "Case study", "Coming soon", "Flagship SaaS". */
export function Badge({ children, className = "bg-white text-ink" }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx("rounded-full px-[13px] py-[7px] text-xs font-bold tracking-[0.05em] uppercase", className)}>
      {children}
    </span>
  );
}

export function BrowserDots({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const c = tone === "dark" ? "bg-[#3a3b3f]" : "bg-[#d8d4ca]";
  return (
    <>
      <span className={clsx("size-2 rounded-full", c)} />
      <span className={clsx("size-2 rounded-full", c)} />
      <span className={clsx("size-2 rounded-full", c)} />
    </>
  );
}
