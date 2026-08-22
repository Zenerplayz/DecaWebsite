import { Bell } from "lucide-react";
import { site } from "@/data/site";

export const metadata = { title: "Calendar" };

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
            this year lives right here.
          </p>
        </div>

        <p className="mt-8 flex items-center gap-2 text-sm text-pine-600">
          <Bell className="h-4 w-4 text-gold-500" />
          Subscribe to the chapter Google Calendar so events land straight on your phone.
        </p>

        {site.googleCalendarEmbedUrl ? (
          <div className="card mt-6 overflow-hidden p-2">
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
