import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, Sparkles, Trophy, Users } from "lucide-react";
import { eventTypeStyles, events } from "@/data/content";
import { site } from "@/data/site";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  const upcoming = events.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-16">
        <div className="container-page relative py-24 text-center sm:py-32">
          <span className="eyebrow animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            {site.school} · Est. 2014
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-6xl lg:text-7xl">
            Where leaders are{" "}
            <span className="relative inline-block whitespace-nowrap">
              made.
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-10 h-[0.35em] rounded-sm bg-gold-300/70 sm:bottom-2"
              />
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pine-600">
            {site.chapterName} prepares emerging leaders and entrepreneurs through
            real competition, real connections, and a whole lot of fun.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/join" className="btn-gold w-full sm:w-auto">
              Join the Chapter
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/calendar" className="btn-outline w-full sm:w-auto">
              See Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-pine-100 bg-white/60">
        <div className="container-page grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-pine-950 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-pine-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Do</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-pine-950 sm:text-4xl">
              Three pillars, one chapter
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Trophy, title: "Compete", desc: "Role-plays, case studies, and written events across all five DECA clusters — from districts all the way to ICDC." },
              { icon: Users, title: "Lead", desc: "Run meetings, chair committees, and build the confidence to take the front of any room." },
              { icon: Calendar, title: "Connect", desc: "Socials, service projects, and alumni nights that make DECA the best part of the week." },
            ].map((c) => (
              <div key={c.title} className="card group p-8 transition duration-300 hover:border-pine-200 hover:shadow-lift">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pine-950 text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-pine-950">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-pine-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pine-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Mark Your Calendar</span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-pine-950">Upcoming events</h2>
            </div>
            <Link href="/calendar" className="btn-outline px-5 py-2 text-sm">
              Full calendar
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {upcoming.map((e) => (
              <article key={e.id} className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className={`badge ${eventTypeStyles[e.type]}`}>{e.type}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-pine-400">
                    {formatDate(e.date)}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-pine-950">{e.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-pine-600">{e.description}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-pine-500">
                  <Clock className="h-3.5 w-3.5 shrink-0" /> {e.time} · <MapPin className="h-3.5 w-3.5 shrink-0" /> {e.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-950 py-20 sm:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-leaf-600/20 blur-3xl" />
        <div className="container-page relative mx-auto max-w-3xl text-center">
          <span className="badge border border-gold-400/30 bg-gold-400/10 text-gold-300">Our Mission</span>
          <p className="mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
            “{site.mission}”
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/compete" className="btn-gold w-full sm:w-auto">
              Explore Competition Prep
            </Link>
            <Link href="/socials" className="btn-outline-light w-full sm:w-auto">
              Follow @sycamoredeca
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

