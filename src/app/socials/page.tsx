import Script from "next/script";
import { highlights } from "@/data/content";
import { site } from "@/data/site";
import { InstagramIcon, TikTokIcon, XIcon } from "@/components/social-icons";

const platformIcon = { Instagram: InstagramIcon, TikTok: TikTokIcon, X: XIcon };
const platformStyles = {
  Instagram: "bg-pink-50 text-pink-600",
  TikTok: "bg-pine-100 text-pine-800",
  X: "bg-pine-950 text-white",
};

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
          Recent highlights
        </h2>
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {highlights.map((h) => {
            const Icon = platformIcon[h.platform];
            return (
              <article key={h.id} className="card break-inside-avoid p-6 transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${platformStyles[h.platform]}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-pine-400">
                    {new Date(h.date + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                </div>
                <span className="badge mt-4 bg-gold-100 text-gold-700">{h.tag}</span>
                <h3 className="mt-2 font-display font-bold text-pine-950">{h.title}</h3>
                <p className="mt-1 text-sm text-pine-600">{h.blurb}</p>
              </article>
            );
          })}
        </div>
        {site.beholdWidgetUrl ? (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-pine-950">
              Latest on Instagram
            </h2>
            <div className="card mt-8 p-4">
              <div className="behold-widget" data-url={site.beholdWidgetUrl} />
            </div>
          </div>
        ) : null}
      </div>

      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="lazyOnload"
      />
    </section>
  );
}
