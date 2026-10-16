import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { getUpcomingEvents } from "@/lib/calendar";
import { site } from "@/data/site";

export default async function UpcomingEvents({
  limit = 6,
}: {
  limit?: number;
}) {
  const { events, unavailable } = await getUpcomingEvents(limit);
  if (!events.length) {
    return (
      <div className="rounded-xl border border-pine-200 bg-white p-6 sm:p-8">
        <CalendarDays
          aria-hidden="true"
          className="mb-3 h-7 w-7 text-pine-700"
        />
        <h3 className="text-xl font-semibold text-pine-950">
          {unavailable
            ? "The calendar is taking a moment"
            : "No upcoming events posted yet"}
        </h3>
        <p className="mt-2 max-w-xl leading-relaxed text-pine-700">
          {unavailable
            ? "We couldn’t load the event list. Check the chapter calendar directly for the latest dates."
            : "New meetings, competitions, and deadlines will appear here when they’re added to the chapter calendar."}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={site.googleCalendarEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Open Google Calendar{" "}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a href={`mailto:${site.advisorEmail}`} className="text-link">
            Ask {site.advisorName} about the next meeting
          </a>
        </div>
      </div>
    );
  }
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => {
        // Keep date-only events on their calendar day in Eastern time.
        const date = new Date(
          event.allDay ? `${event.start}T12:00:00Z` : event.start,
        );
        const options = { timeZone: "America/New_York" };
        const month = date.toLocaleDateString("en-US", {
          ...options,
          month: "short",
        });
        const day = date.toLocaleDateString("en-US", {
          ...options,
          day: "numeric",
        });
        const fullDate = date.toLocaleDateString("en-US", {
          ...options,
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
        const time = event.allDay
          ? "All day"
          : date.toLocaleTimeString("en-US", {
              ...options,
              hour: "numeric",
              minute: "2-digit",
              timeZoneName: "short",
            });
        return (
          <li
            key={event.id}
            className="rounded-xl border border-pine-200 bg-white p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <time
                dateTime={event.start}
                aria-label={fullDate}
                className="flex w-16 shrink-0 flex-col items-center rounded-lg bg-pine-50 py-2 text-pine-900"
              >
                <span className="text-sm font-semibold uppercase">{month}</span>
                <span className="text-3xl font-bold leading-tight">{day}</span>
              </time>
              <h3 className="pt-1 text-xl font-semibold leading-snug text-pine-950">
                {event.title}
              </h3>
            </div>
            <p className="mt-4 flex items-center gap-2 text-pine-700">
              <Clock aria-hidden="true" className="h-4 w-4 shrink-0" />
              {time}
            </p>
            {event.location ? (
              <p className="mt-2 flex items-start gap-2 text-pine-700">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                {event.location}
              </p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
