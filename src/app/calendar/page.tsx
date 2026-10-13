import { ArrowUpRight, Bell } from "lucide-react";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import UpcomingEvents from "@/components/upcoming-events";
import PageSeo from "@/components/page-seo";

export const metadata = pageMetadata("/calendar");
export const revalidate = 300;

export default function CalendarPage() {
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
        <PageSeo route="/calendar" />
        {/* Masthead */}
        <header className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Sycamore DECA event calendar
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pine-600">
            Meetings, competitions, deadlines, and socials — everything coming
            up this year lives right here.
          </p>
        </header>

        <section aria-labelledby="upcoming-heading" className="mt-8">
          <h2
            id="upcoming-heading"
            className="mb-4 text-2xl font-semibold text-pine-950"
          >
            Next on the calendar
          </h2>
          <UpcomingEvents />
        </section>
        {site.googleCalendarEmbedUrl ? (
          <>
            <h2 className="mt-10 text-2xl font-semibold text-pine-950">
              Full chapter calendar
            </h2>
            {/* Open framed region — hairline border, no shadow card */}
            <div className="mt-4 overflow-hidden rounded-xl border border-pine-200 bg-white">
              <iframe
                src={site.googleCalendarEmbedUrl}
                title="Sycamore DECA Google Calendar"
                className="h-[600px] w-full border-0"
                loading="lazy"
              />
            </div>

            <p className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-pine-600">
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
