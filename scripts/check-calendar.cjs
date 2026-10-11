const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

// Compile the real parser in memory, without adding a test runtime dependency.
const parserPath = path.join(__dirname, "../src/lib/calendar.ts");
const output = ts.transpileModule(fs.readFileSync(parserPath, "utf8"), {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
    esModuleInterop: true,
  },
}).outputText;
const moduleExports = {};
new Function("require", "exports", output)(
  (id) => (id === "@/data/site" ? { site: {} } : require(id)),
  moduleExports,
);
const { parseUpcomingEvents } = moduleExports;
const now = new Date("2026-10-11T18:00:00Z");
const wrap = (events) =>
  ["BEGIN:VCALENDAR", "VERSION:2.0", ...events, "END:VCALENDAR"].join("\r\n");
const event = (lines) => ["BEGIN:VEVENT", ...lines, "END:VEVENT"];

assert.deepEqual(parseUpcomingEvents(wrap([]), now), []);
assert.throws(() => parseUpcomingEvents("not a calendar", now));
const dates = parseUpcomingEvents(
  wrap([
    ...event([
      "UID:past",
      "DTSTART:20261010T160000Z",
      "DTEND:20261010T170000Z",
      "SUMMARY:Past",
    ]),
    ...event([
      "UID:future",
      "DTSTART:20261013T160000Z",
      "DTEND:20261013T170000Z",
      "SUMMARY:Meeting",
      "LOCATION:Marketing wing",
    ]),
    ...event([
      "UID:cancelled",
      "DTSTART:20261012T160000Z",
      "DTEND:20261012T170000Z",
      "STATUS:CANCELLED",
    ]),
    ...event([
      "UID:day",
      "DTSTART;VALUE=DATE:20261011",
      "DTEND;VALUE=DATE:20261012",
      "SUMMARY:All-day deadline",
    ]),
  ]),
  now,
);
assert.deepEqual(
  dates.map((x) => x.id),
  ["day:2026-10-11", "future:2026-10-13T16:00:00.000Z"],
);
assert.equal(dates[0].allDay, true);
assert.equal(dates[1].location, "Marketing wing");
assert.equal(
  parseUpcomingEvents(
    wrap([
      ...event([
        "UID:day",
        "DTSTART;VALUE=DATE:20261010",
        "DTEND;VALUE=DATE:20261011",
      ]),
    ]),
    now,
  ).length,
  0,
);

const recurring = parseUpcomingEvents(
  wrap([
    ...event([
      "UID:series",
      "DTSTART:20261010T190000Z",
      "DTEND:20261010T200000Z",
      "RRULE:FREQ=DAILY;COUNT=6",
      "EXDATE:20261012T190000Z",
      "SUMMARY:Workshop",
    ]),
    ...event([
      "UID:series",
      "RECURRENCE-ID:20261013T190000Z",
      "DTSTART:20261013T210000Z",
      "DTEND:20261013T220000Z",
      "SUMMARY:Moved workshop",
    ]),
    ...event([
      "UID:series",
      "RECURRENCE-ID:20261014T190000Z",
      "DTSTART:20261014T190000Z",
      "DTEND:20261014T200000Z",
      "STATUS:CANCELLED",
    ]),
  ]),
  now,
);
assert.deepEqual(
  recurring.map((x) => x.start),
  [
    "2026-10-11T19:00:00.000Z",
    "2026-10-13T21:00:00.000Z",
    "2026-10-15T19:00:00.000Z",
  ],
);
assert.equal(recurring[1].title, "Moved workshop");

const timezone = [
  "BEGIN:VTIMEZONE",
  "TZID:America/New_York",
  "BEGIN:STANDARD",
  "DTSTART:19701101T020000",
  "TZOFFSETFROM:-0400",
  "TZOFFSETTO:-0500",
  "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
  "END:STANDARD",
  "BEGIN:DAYLIGHT",
  "DTSTART:19700308T020000",
  "TZOFFSETFROM:-0500",
  "TZOFFSETTO:-0400",
  "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
  "END:DAYLIGHT",
  "END:VTIMEZONE",
];
const dst = parseUpcomingEvents(
  wrap([
    ...timezone,
    ...event([
      "UID:dst",
      "DTSTART;TZID=America/New_York:20261030T150000",
      "DTEND;TZID=America/New_York:20261030T160000",
      "RRULE:FREQ=WEEKLY;COUNT=2",
      "SUMMARY:Weekly meeting",
    ]),
  ]),
  now,
);
assert.deepEqual(
  dst.map((x) => x.start),
  ["2026-10-30T19:00:00.000Z", "2026-11-06T20:00:00.000Z"],
);
assert.equal(
  parseUpcomingEvents(
    wrap([
      ...event([
        "UID:series",
        "DTSTART:20261011T190000Z",
        "DTEND:20261011T200000Z",
        "RRULE:FREQ=DAILY;COUNT=8",
      ]),
    ]),
    now,
    3,
  ).length,
  3,
);
console.log(
  "Calendar checks passed: empty/invalid feed, past and cancelled events, all-day dates, recurrence exclusions and moved events, Eastern DST, and card limit.",
);
