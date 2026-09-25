"use client";

import Image from "next/image";
import { useState } from "react";
import { img, type SiteImage } from "@/lib/images";
import { Cover } from "@/components/site/ui";

export type VideoTestimonialItem = {
  headline: string;
  quote: string;
  name: string;
  role: string;
  portrait: SiteImage;
  /** YouTube video id. */
  videoId: string;
  mono?: boolean;
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-[8%] size-[42%] fill-current">
      <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
    </svg>
  );
}

/** Video testimonial: the designed poster until played, then the YouTube player in its place. */
export function VideoTestimonial({ item }: { item: VideoTestimonialItem }) {
  const [playing, setPlaying] = useState(false);
  const play = () => setPlaying(true);

  return (
    <div
      data-reveal="1"
      className="flex max-w-[650px] min-w-0 flex-[1_1_340px] flex-col overflow-hidden rounded-card bg-ink text-white"
    >
      <div className="group @container relative aspect-video overflow-hidden bg-[radial-gradient(120%_90%_at_100%_0%,#2B3A55_0%,#141518_55%),#141518]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={`${item.name}, client testimonial`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_78%_55%,rgba(47,111,208,0.35),transparent_70%)]" />
            <div className="absolute inset-0 grid grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-center gap-[5cqi] px-[6cqi] py-[7cqi]">
              <div className="flex min-w-0 flex-col gap-[2.4cqi]">
                <Image src={img.devnitoLogo.src} alt="" width={64} height={64} className="block h-auto w-[6cqi]" />
                <div className="font-mono text-[max(9px,1.9cqi)] tracking-[0.16em] text-sky uppercase">Client testimonial</div>
                <div className="text-[max(17px,5.4cqi)] leading-[1.05] font-bold tracking-[-0.035em] text-balance">
                  {item.headline}
                </div>
              </div>
              <div
                data-parallax="0.06"
                className="relative aspect-square overflow-hidden rounded-[3cqi] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)]"
              >
                <Cover
                  image={item.portrait}
                  alt={item.name}
                  sizes="300px"
                  className={item.mono ? "contrast-[1.05] grayscale" : undefined}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/15">
                  <span className="flex size-[max(44px,11cqi)] items-center justify-center rounded-full bg-acc text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-expo group-hover:scale-110">
                    <PlayIcon />
                  </span>
                </span>
              </div>
            </div>
            {/* Whole poster is the play target. */}
            <button
              type="button"
              onClick={play}
              aria-label={`Play ${item.name}'s video testimonial`}
              className="absolute inset-0 z-[2] cursor-pointer"
            />
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 px-[22px] py-5">
        <div className="text-[clamp(16px,1.5vw,19px)] leading-[1.45] font-medium">{item.quote}</div>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-base font-bold">{item.name}</div>
            <div className="mt-0.5 text-[13px] text-white/65">{item.role}</div>
          </div>
          {playing ? (
            <a
              href={`https://youtu.be/${item.videoId}`}
              target="_blank"
              rel="noopener"
              className="font-mono text-[11px] tracking-[0.12em] text-white/60 uppercase"
            >
              Watch on YouTube ↗
            </a>
          ) : (
            <button
              type="button"
              onClick={play}
              className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-white/80 uppercase transition-colors hover:text-white"
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-acc text-white">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-px size-2.5 fill-current">
                  <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
                </svg>
              </span>
              Play video
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
