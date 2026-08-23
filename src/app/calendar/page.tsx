import { ArrowUpRight, Bell } from "lucide-react";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/calendar");

export default function CalendarPage() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        {/* Masthead */}
        <header className="max-w-2xl">
          <span className="eyebrow">Calendar</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            What’s coming up
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-600">
            Meetings, competitions, deadlines, and socials — everything coming
            up this year lives right here.
          </p>
        </header>

        {site.googleCalendarEmbedUrl ? (
          <>
            {/* Open framed region — hairline border, no shadow card */}
            <div className="mt-10 overflow-hidden rounded-xl border border-pine-900/10 bg-white sm:mt-12">
              <iframe
                src={site.googleCalendarEmbedUrl}
                title="Sycamore DECA Google Calendar"
                className="h-[600px] w-full border-0"
                loading="lazy"
              />
            </div>

            <p className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-pine-600">
              <span className="inline-flex items-center gap-2">
                <Bell aria-hidden="true" className="h-4 w-4 text-gold-600" />
                Subscribe so chapter events land straight on your phone.
              </span>
              <a
                href={site.googleCalendarEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Open in Google Calendar
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}
