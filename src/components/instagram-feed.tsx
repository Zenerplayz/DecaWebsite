"use client";

import { useCallback, useEffect, useState } from "react";
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

  if (!showWidget) {
    return (
      <p role="status" className="text-sm text-pine-700">
        Instagram posts are unavailable here.{" "}
        {instagram ? (
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm"
          >
            View {instagram.handle}
          </a>
        ) : (
          "View the chapter directly on Instagram."
        )}
      </p>
    );
  }

  return (
    <div id="live-instagram-feed" className="min-h-48">
      <behold-widget feed-id={feedId} />
    </div>
  );
}
