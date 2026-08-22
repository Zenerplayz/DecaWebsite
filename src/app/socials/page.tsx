import Script from "next/script";
import { site } from "@/data/site";
import { InstagramIcon, TikTokIcon, XIcon } from "@/components/social-icons";

const platformIcon = { Instagram: InstagramIcon, TikTok: TikTokIcon, X: XIcon };

export const metadata = { title: "Socials" };

export default function Socials() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        {/* Masthead */}
        <header className="max-w-2xl">
          <span className="eyebrow">Socials</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Follow the chapter
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-600">
            Competition recaps, meeting reminders, and the occasional victory
            lap — the feed is the fastest way to see what we’re up to.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
            {site.socials.map((s) => {
              const Icon = platformIcon[s.platform];
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {s.handle}
                </a>
              );
            })}
          </div>
        </header>

        {/* Live feed — open on cream, no card shell */}
        <div className="mt-16">
          <span className="eyebrow">Latest from @sycamore.deca</span>
          <behold-widget feed-id={site.beholdFeedId} />
        </div>
      </div>

      {site.beholdFeedId ? (
        <Script
          src="https://w.behold.so/widget.js"
          type="module"
          strategy="lazyOnload"
        />
      ) : null}
    </section>
  );
}
