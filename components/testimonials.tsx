"use client";

import { useState } from "react";
import Image from "next/image";
import {
  testimonials,
  videoTestimonials,
  type VideoTestimonialItem,
  type TestimonialItem,
} from "@/content/site";
import { Modal } from "@/components/ui/modal";

function VideoCard({ item }: { item: VideoTestimonialItem }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="group w-full max-w-[560px]">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-card-border bg-card shadow-[var(--card-shadow)]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${item.title}`}
            className="block h-full w-full"
          >
            <Image
              src={thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 560px"
            />

            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                style={{ background: "var(--brand-gradient)" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="translate-x-px"
                >
                  <path d="M5 3v14l12-7z" />
                </svg>
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60 sm:text-[11px]">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold leading-snug text-white sm:text-base">
                {item.title}
              </p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

const QUOTE_CHAR_LIMIT = 180;

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Avatar({
  name,
  avatar,
  size = 40,
}: {
  name: string;
  avatar?: string;
  size?: number;
}) {
  if (avatar) {
    return (
      <Image
        src={avatar}
        alt={name}
        width={size * 2}
        height={size * 2}
        quality={90}
        className="shrink-0 rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
      style={{
        background: "var(--brand-gradient)",
        width: size,
        height: size,
      }}
    >
      {getInitials(name)}
    </div>
  );
}

function QuoteCard({
  item,
  onReadMore,
}: {
  item: TestimonialItem;
  onReadMore?: () => void;
}) {
  const needsTruncation = item.quote.length > QUOTE_CHAR_LIMIT;
  const displayText = needsTruncation
    ? item.quote.slice(0, QUOTE_CHAR_LIMIT).trimEnd() + "..."
    : item.quote;

  return (
    <figure className="relative flex w-[320px] flex-shrink-0 flex-col rounded-3xl border border-card-border bg-card p-7 shadow-[var(--card-shadow)] sm:w-[360px] sm:p-8">
      <div className="mb-5 text-4xl leading-none text-[var(--gradient-start)]/20 select-none">
        &ldquo;
      </div>

      <blockquote className="mb-8 flex-1">
        <p className="text-[15px] leading-relaxed text-foreground">
          {displayText}
          {needsTruncation && onReadMore && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReadMore();
              }}
              className="ml-1 inline text-[13px] font-medium text-[var(--gradient-start)] hover:text-[var(--gradient-mid)]"
            >
              Read more
            </button>
          )}
        </p>
      </blockquote>

      <figcaption className="flex items-center gap-3">
        <div className="relative">
          <Avatar name={item.name} avatar={item.avatar} />
          <span
            className="absolute -right-0.5 bottom-0.5 block h-2.5 w-2.5 rounded-full border-2 border-card"
            style={{ background: "#4ade80" }}
          />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{item.name}</p>
          <p className="text-xs text-muted">{item.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function Marquee({
  children,
  direction = "left",
  duration = 40,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className="marquee-track flex w-max gap-5 group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] =
    useState<TestimonialItem | null>(null);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -top-6 -left-10 -z-10 w-[240px] max-w-[300px] -rotate-12 opacity-[0.08] select-none sm:w-[300px]">
        <Image
          src="/logo.svg"
          alt=""
          width={300}
          height={215}
          className="h-auto w-full"
        />
      </div>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <p className="mb-3 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
          <span className="section-dot" />
          Client Testimonials &amp; Reviews
        </p>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What our clients say
        </h2>
      </div>

      {/* Video testimonials */}
      <div className="mx-auto mb-16 grid max-w-[1200px] gap-5 px-5 sm:grid-cols-2 sm:gap-6 sm:px-8">
        {videoTestimonials.map((vt) => (
          <VideoCard key={vt.id} item={vt} />
        ))}
      </div>

      {/* Written testimonials marquee */}
      <Marquee direction="right" duration={60}>
        {testimonials.map((t) => (
          <QuoteCard
            key={t.id}
            item={t}
            onReadMore={() => setActiveTestimonial(t)}
          />
        ))}
      </Marquee>

      <Modal
        open={!!activeTestimonial}
        onClose={() => setActiveTestimonial(null)}
        title={activeTestimonial?.name}
      >
        {activeTestimonial && (
          <div className="sm:pr-4">
            <div className="mb-6 text-5xl leading-none text-[var(--gradient-start)]/20 select-none">
              &ldquo;
            </div>
            <p className="mb-8 text-[15px] leading-relaxed text-foreground sm:text-base sm:leading-relaxed">
              {activeTestimonial.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar
                  name={activeTestimonial.name}
                  avatar={activeTestimonial.avatar}
                  size={48}
                />
                <span
                  className="absolute -right-0.5 -bottom-0.5 block h-2.5 w-2.5 rounded-full border-2 border-card"
                  style={{ background: "#4ade80" }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {activeTestimonial.name}
                </p>
                <p className="text-sm text-muted">{activeTestimonial.title}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
