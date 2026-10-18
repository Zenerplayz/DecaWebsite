import PageSeo from "@/components/page-seo";
import InstagramFeed from "@/components/instagram-feed";
import { site } from "@/data/site";
import { InstagramIcon, TikTokIcon, XIcon } from "@/components/social-icons";
import { pageMetadata } from "@/data/seo";

const platformIcon = { Instagram: InstagramIcon, TikTok: TikTokIcon, X: XIcon };

export const metadata = pageMetadata("/socials");

export default function Socials() {
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
          <PageSeo route="/socials" />
        {/* Masthead */}
        <header className="max-w-2xl">

          <h1 className="page-title">
            Chapter photos & updates
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

        <section className="mt-10 border-t border-pine-200 pt-7" aria-label="Instagram">
          <InstagramFeed feedId={site.beholdFeedId} />
        </section>
      </div>


    </section>
  );
}
