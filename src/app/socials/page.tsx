import Script from "next/script";
import { site } from "@/data/site";
import { InstagramIcon, TikTokIcon, XIcon } from "@/components/social-icons";

const platformIcon = { Instagram: InstagramIcon, TikTok: TikTokIcon, X: XIcon };

export const metadata = { title: "Socials" };

export default function Socials() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="max-w-xl">
          <span className="eyebrow">Socials</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Follow the chapter
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {site.socials.map((s) => {
              const Icon = platformIcon[s.platform];
              return (
                <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="btn-outline gap-2 px-5 py-2.5 text-sm">
                  <Icon className="h-4 w-4" />
                  {s.handle}
                </a>
              );
            })}
          </div>
        </div>

        <h2 className="mt-16 font-display text-2xl font-bold text-pine-950">
          Latest on Instagram
        </h2>
        <div className="card mt-8 p-4">
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
