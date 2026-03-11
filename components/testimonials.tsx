"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  testimonials,
  videoTestimonials,
  type VideoTestimonialItem,
  type TestimonialItem,
} from "@/content/site";
import { Modal } from "@/components/ui/modal";

function VideoCard({ item }: { item: VideoTestimonialItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const hasVideo = !!item.videoUrl;

  function togglePlay(e: React.MouseEvent) {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="flex w-[220px] flex-shrink-0 flex-col sm:w-[240px]">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white/5">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={item.videoUrl}
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            playsInline
            onEnded={() => setPlaying(false)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--gradient-start)]/10 via-[var(--gradient-mid)]/8 to-[var(--gradient-end)]/10">
            <span className="text-4xl font-bold text-[var(--gradient-start)]/20">
              {item.initials}
            </span>
          </div>
        )}

        <button
          onClick={hasVideo ? togglePlay : undefined}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105"
          style={{ background: "var(--brand-gradient)" }}
          disabled={!hasVideo}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="2" y="1" width="3.5" height="12" rx="1" />
              <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M3 1.5v11l9-5.5z" />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-3 px-0.5">
        <p className="text-sm font-semibold text-foreground">{item.name}</p>
        <p className="text-xs text-muted">
          {item.title}, {item.company}
        </p>
      </div>
    </div>
  );
}

const QUOTE_CHAR_LIMIT = 180;

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
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
          style={{ background: "var(--brand-gradient)" }}
        >
          {item.initials}
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
        className="marquee-track flex w-max gap-5"
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
    <section id="testimonials" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -top-6 -left-10 -z-10 w-[240px] max-w-[300px] -rotate-12 opacity-[0.08] select-none sm:w-[300px]">
        <Image src="/logo.svg" alt="" width={300} height={215} className="h-auto w-full" />
      </div>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <p className="mb-3 flex items-center text-xs font-medium uppercase tracking-widest text-muted">
          <span className="section-dot" />
          Client Testimonials &amp; Reviews
        </p>
        <h2 className="font-heading mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What clients say
        </h2>
      </div>

      {/* Video testimonials marquee — moves left */}
      {/* Uncomment when you have real video testimonials:
      <div className="mb-14">
        <Marquee direction="left" duration={50}>
          {videoTestimonials.map((vt) => (
            <VideoCard key={vt.id} item={vt} />
          ))}
        </Marquee>
      </div>
      */}

      {/* Written testimonials marquee — moves right */}
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
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ background: "var(--brand-gradient)" }}
              >
                {activeTestimonial.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {activeTestimonial.name}
                </p>
                <p className="text-sm text-muted">
                  {activeTestimonial.title}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
