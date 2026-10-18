import PageSeo from "@/components/page-seo";
import { ArrowUpRight, Bell } from "lucide-react";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import UpcomingEvents from "@/components/upcoming-events";
import { agendaEmbedUrl, getUpcomingEvents } from "@/lib/calendar";

export const metadata = pageMetadata("/calendar");
export const revalidate = 300;

export default async function CalendarPage() {
  const { events } = await getUpcomingEvents(1);
  const showEmbed = events.length > 0 && Boolean(site.googleCalendarEmbedUrl);
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
          <PageSeo route="/calendar" />
        {/* Masthead */}
        <header className="max-w-2xl">
          <h1 className="page-title">
            What’s coming up
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
        {showEmbed ? (
          <>
            <h2 className="mt-10 text-2xl font-semibold text-pine-950">
              Full chapter calendar
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-pine-200 bg-white">
              <iframe
                src={agendaEmbedUrl(site.googleCalendarEmbedUrl)}
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
