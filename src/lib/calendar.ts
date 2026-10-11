import ICAL from "ical.js";
import { site } from "@/data/site";

export type ChapterEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  location: string;
};

export function parseUpcomingEvents(
  ics: string,
  now = new Date(),
  limit = 6,
): ChapterEvent[] {
  const calendar = new ICAL.Component(ICAL.parse(ics));
  if (calendar.name !== "vcalendar") throw new Error("Invalid calendar feed");
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const horizon = now.getTime() + 366 * 86400000;
  const results = new Map<string, ChapterEvent>();
  const components = calendar.getAllSubcomponents("vevent");
  function add(event: ICAL.Event, start: ICAL.Time, end: ICAL.Time) {
    if (event.component.getFirstPropertyValue("status") === "CANCELLED") return;
    const allDay = start.isDate;
    const startValue = allDay
      ? start.toString()
      : start.toJSDate().toISOString();
    const endValue = allDay ? end.toString() : end.toJSDate().toISOString();
    if (allDay ? endValue <= today : Date.parse(endValue) <= now.getTime())
      return;
    if (Date.parse(startValue) > horizon) return;
    const id = `${event.uid}:${startValue}`;
    results.set(id, {
      id,
      title: event.summary || "Chapter event",
      start: startValue,
      end: endValue,
      allDay,
      location: event.location || "",
    });
  }
  for (const component of components) {
    const event = new ICAL.Event(component);
    // ICAL.Event resolves series exceptions from the parent calendar.
    if (event.isRecurrenceException()) continue;
    if (!event.isRecurring()) {
      add(event, event.startDate, event.endDate);
      continue;
    }
    const iterator = event.iterator();
    let exhausted = false;
    for (let count = 0; count < 50000; count++) {
      const next = iterator.next();
      if (!next || next.toJSDate().getTime() > horizon) {
        exhausted = true;
        break;
      }
      const occurrence = event.getOccurrenceDetails(next);
      add(occurrence.item, occurrence.startDate, occurrence.endDate);
    }
    if (!exhausted) throw new Error("Calendar recurrence limit exceeded");
  }
  // Also include exceptions moved into the window from an earlier occurrence.
  for (const component of components) {
    const event = new ICAL.Event(component);
    if (event.isRecurrenceException())
      add(event, event.startDate, event.endDate);
  }
  return [...results.values()]
    .sort((a, b) => Date.parse(a.start) - Date.parse(b.start))
    .slice(0, limit);
}

export async function getUpcomingEvents(
  limit = 6,
): Promise<{ events: ChapterEvent[]; unavailable: boolean }> {
  try {
    const calendarId = new URL(site.googleCalendarEmbedUrl).searchParams.get(
      "src",
    );
    if (!calendarId) throw new Error("Missing chapter calendar");
    const response = await fetch(
      `https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`,
      { next: { revalidate: 300 }, signal: AbortSignal.timeout(8000) },
    );
    if (!response.ok) throw new Error("Calendar unavailable");
    return {
      events: parseUpcomingEvents(await response.text(), new Date(), limit),
      unavailable: false,
    };
  } catch {
    return { events: [], unavailable: true };
  }
}
