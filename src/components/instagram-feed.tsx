"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BeholdWidget from "@behold/react";
import { chapterPhotos } from "@/data/photos";

export default function InstagramFeed({ feedId }: { feedId: string }) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setTimedOut(true), 12000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={timedOut && !loaded ? "hidden" : "min-h-[360px]"}>
        <BeholdWidget feedId={feedId} onLoad={() => setLoaded(true)} />
      </div>
      {timedOut && !loaded ? (
        <div>
          <p role="status" className="mb-5 text-sm text-pine-600">The live feed is taking a little longer. Here are a few moments from the chapter while it reconnects.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {chapterPhotos.slice(0, 3).map(photo => (
              <a key={photo.src} href={photo.permalink} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-pine-600">{photo.alt}</p>
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}