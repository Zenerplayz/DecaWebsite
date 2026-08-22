import { Bell } from "lucide-react";
import { eventTypeStyles, events } from "@/data/content";
import { site } from "@/data/site";

export const metadata = { title: "Calendar" };

function fmt(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export default function CalendarPage() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="max-w-xl">
          <span className="eyebrow">Calendar</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            What’s coming up
          </h1>
          <p className="mt-4 text-lg text-pine-600">
            Meetings, competitions, deadlines, and socials — everything coming up
            this year, at a glance.
          </p>
        </div>

        <div className="card mt-10 divide-y divide-pine-100 overflow-hidden">
          {events.map((e) => (
            <article key={e.id} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-6">
              <div className="w-full sm:w-56">
                <p className="text-sm font-bold uppercase tracking-wide text-pine-400">{fmt(e.date)}</p>
                <p className="mt-0.5 text-xs font-medium text-pine-500">{e.time}</p>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display font-bold text-pine-950">{e.title}</h2>
                  <span className={`badge ${eventTypeStyles[e.type]}`}>{e.type}</span>
                </div>
                <p className="mt-1 text-sm text-pine-600">{e.description} · {e.location}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-pine-500">
          <Bell className="h-4 w-4 text-gold-500" />
          Subscribe to the chapter Google Calendar so events land straight on your phone.
        </p>

        {site.googleCalendarEmbedUrl ? (
          <div className="card mt-10 overflow-hidden p-2">
            <iframe
              src={site.googleCalendarEmbedUrl}
              title="Sycamore DECA Google Calendar"
              className="h-[600px] w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
