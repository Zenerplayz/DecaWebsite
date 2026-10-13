"use client";

import { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { chapterPhotos } from "@/data/photos";
import { site } from "@/data/site";

export default function InstagramFeed({ feedId }: { feedId: string }) {
  const [showLive, setShowLive] = useState(false);
  const [liveUnavailable, setLiveUnavailable] = useState(false);
  return (
    <>
      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-3">
        {chapterPhotos.slice(0, 3).map((photo) => (
          <figure key={photo.src}>
            <a
              href={photo.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus-visible:outline-offset-4"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1000}
                height={1000}
                sizes="(min-width: 1152px) 350px, (min-width: 640px) 33vw, calc(100vw - 2rem)"
                className="aspect-square h-auto w-full object-cover"
              />
            </a>
            <figcaption className="mt-3 text-sm leading-relaxed text-pine-700">
              {photo.alt}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 border-t border-pine-200 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            aria-expanded={showLive}
            aria-controls="live-instagram-feed"
            onClick={() => setShowLive((previous) => !previous)}
            className="text-link"
          >
            {showLive
              ? "Hide live Instagram posts"
              : "Show live Instagram posts"}
          </button>
          <a
            href={site.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm"
          >
            Open @sycamore.deca
          </a>
        </div>
        <div id="live-instagram-feed" hidden={!showLive}>
          {showLive ? (
            <div className="mt-6">
              <p
                role={liveUnavailable ? "status" : undefined}
                className="mb-4 text-sm text-pine-700"
              >
                {liveUnavailable
                  ? "Instagram posts are unavailable here. View the chapter directly on Instagram."
                  : "If posts don’t appear, view the chapter directly on Instagram."}
              </p>
              {!liveUnavailable ? (
                <>
                  <Script
                    src="https://w.behold.so/widget.js"
                    type="module"
                    strategy="afterInteractive"
                    onError={() => setLiveUnavailable(true)}
                  />
                  <behold-widget feed-id={feedId} />
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
