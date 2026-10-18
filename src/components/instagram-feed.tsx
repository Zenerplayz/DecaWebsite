"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { chapterPhotos } from "@/data/photos";
import { site } from "@/data/site";

const BEHOLD_WIDGET_SCRIPT = "https://w.behold.so/widget.js";

type BeholdWindow = Window & { __bhldScript?: boolean };

/**
 * Load Behold's module once, matching their embed snippet:
 * guard with window.__bhldScript, then append the module script to head.
 * The timeout is cleared if this effect is replayed before the script attaches,
 * so React Strict Mode does not skip the load.
 */
function useBeholdWidgetScript(enabled: boolean, onError: () => void) {
  useEffect(() => {
    if (!enabled) return;

    const beholdWindow = window as BeholdWindow;
    if (beholdWindow.__bhldScript) return;
    beholdWindow.__bhldScript = true;

    const script = document.createElement("script");
    script.type = "module";
    script.src = BEHOLD_WIDGET_SCRIPT;
    script.addEventListener("error", onError);

    const timeoutId = window.setTimeout(() => {
      document.head.append(script);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
      script.removeEventListener("error", onError);
      if (!script.isConnected) beholdWindow.__bhldScript = false;
    };
  }, [enabled, onError]);
}

export default function InstagramFeed({ feedId }: { feedId: string }) {
  const [liveUnavailable, setLiveUnavailable] = useState(false);
  const instagram = site.socials.find((social) => social.platform === "Instagram");
  const showWidget = Boolean(feedId) && !liveUnavailable;
  const markUnavailable = useCallback(() => setLiveUnavailable(true), []);

  useBeholdWidgetScript(showWidget, markUnavailable);

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
        {instagram ? (
          <div className="flex flex-wrap items-center justify-end gap-4">
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm"
            >
              Open {instagram.handle}
            </a>
          </div>
        ) : null}
        {showWidget ? (
          <div id="live-instagram-feed" className="mt-6 min-h-48">
            <behold-widget feed-id={feedId} />
          </div>
        ) : (
          <p role="status" className="mt-4 text-sm text-pine-700">
            Instagram posts are unavailable here. View the chapter directly on Instagram.
          </p>
        )}
      </div>
    </>
  );
}
