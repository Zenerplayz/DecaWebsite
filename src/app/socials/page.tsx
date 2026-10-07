import InstagramFeed from "@/components/instagram-feed";
import { site } from "@/data/site";
import { InstagramIcon, TikTokIcon, XIcon } from "@/components/social-icons";
import { pageMetadata } from "@/data/seo";

const platformIcon = { Instagram: InstagramIcon, TikTok: TikTokIcon, X: XIcon };

export const metadata = pageMetadata("/socials");

export default function Socials() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        {/* Masthead */}
        <header className="max-w-2xl">

          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Follow the chapter
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-600">
            See chapter photos, competition results, and announcements from @sycamore.deca.
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
        <div className="mt-16 rounded-2xl border border-pine-100 bg-white p-5 shadow-soft sm:p-8">
          <span className="eyebrow">Latest from @sycamore.deca</span>
          <InstagramFeed feedId={site.beholdFeedId} />
          <p className="mt-6 text-sm text-pine-600">Prefer Instagram? <a href={site.socials[0].url} target="_blank" rel="noopener noreferrer" className="text-link">View the chapter feed directly</a></p>
        </div>
      </div>


    </section>
  );
}
