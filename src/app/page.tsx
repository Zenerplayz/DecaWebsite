import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { heroPhoto } from "@/data/photos";
import Pillars from "@/components/pillars";
import UpcomingEvents from "@/components/upcoming-events";
import { cn } from "@/lib/utils";

export const revalidate = 300;

export default function Home() {
  return (
    <>
      {/* ── Magazine opening ───────────────────────────────────────── */}
      <section className="pt-16">
        <div className="container-page pb-12 pt-10 sm:pb-16 sm:pt-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <header className="max-w-2xl self-center motion-safe:animate-fade-up lg:col-span-7">
              <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine-950 sm:text-6xl lg:text-7xl">
                Where leaders
                <br />
                are made.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-pine-600">
                {site.chapterName} brings students together at {site.school} to
                learn about business, prepare for competitions, and get involved
                in the chapter.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link href="/join" className="btn-gold">
                  Join the Chapter
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/calendar" className="text-link">
                  See what’s coming up
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </header>

            <figure className="lg:col-span-5 lg:mt-0">
              <a
                href={heroPhoto.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-sm focus-visible:outline-offset-4"
              >
                <Image
                  src={heroPhoto.src}
                  alt={heroPhoto.alt}
                  width={800}
                  height={1000}
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="aspect-[4/5] h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:scale-[1.03]"
                />
              </a>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-pine-600">
                <span className="uppercase tracking-[0.18em]">
                  Sycamore DECA · ICDC, Atlanta
                </span>
                <a
                  href={heroPhoto.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-semibold text-gold-700 underline decoration-gold-300 underline-offset-4 hover:text-gold-600"
                >
                  View Instagram post
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Stats: hairline row of oversized numerals ─────────────── */}
      <section aria-label="Chapter at a glance">
        <div className="container-page">
          <dl className="grid grid-cols-1 border-t border-pine-900/10 sm:grid-cols-3">
            {site.stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "flex flex-col py-6 sm:py-8",
                  i > 0 &&
                    "border-t border-pine-900/10 sm:border-l sm:border-t-0",
                  i === 0 && "sm:pr-10",
                  i === site.stats.length - 1 && "sm:pl-10",
                  i > 0 && i < site.stats.length - 1 && "sm:px-10",
                )}
              >
                <dt className="order-2 mt-2 text-sm font-bold uppercase tracking-[0.18em] text-pine-600">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-5xl font-semibold tracking-tight text-pine-950 sm:text-6xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Pillars: three columns split by vertical hairlines ────── */}
      <section className="bg-white">
        <div className="container-page py-12 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
              What we do
            </h2>
          </div>

          <Pillars />

          <div className="mt-2 pt-8 md:hidden">
            <Link href="/compete" className="text-link">
              See how we compete
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" aria-labelledby="home-events-heading">
        <div className="container-page">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Around the chapter</p>
              <h2
                id="home-events-heading"
                className="text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl"
              >
                Coming up next
              </h2>
              <p className="mt-2 text-pine-700">
                Meetings, competitions, and deadlines. Keep your next date in
                sight.
              </p>
            </div>
            <Link href="/calendar" className="text-link">
              Full calendar{" "}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <UpcomingEvents limit={3} />
        </div>
      </section>
      {/* ── Mission: clean full-width pine band ───────────────────── */}
      <section className="bg-pine-950">
        <div className="container-page py-12 sm:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
              Our Mission
            </p>
            <p className="mt-6 font-display text-3xl font-medium leading-snug text-white sm:text-4xl lg:text-4xl">
              “{site.mission}”
            </p>
            <Link href="/compete" className="btn-outline-light mt-6">
              Explore Competition Prep
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="interest"
        aria-labelledby="interest-heading"
        className="bg-cream"
      >
        <div className="container-page py-12 sm:py-16">
          <div className="grid items-center gap-6 rounded-2xl border border-pine-200 bg-white p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div className="max-w-2xl">
              <p className="eyebrow">Support Sycamore DECA</p>
              <h2
                id="interest-heading"
                className="text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl"
              >
                Help our next generation of leaders.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pine-700">
                Connect with our chapter about sponsorship opportunities and
                help students grow through competition, connection, and
                community.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a
                href="https://docs.google.com/forms/d/11PadbmuAMaLJX_ocdckvgBq91qoEWoWJkLbkTEHepfQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Become a sponsor{" "}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href={`mailto:${site.advisorEmail}`} className="text-link">
                Talk to {site.advisorName}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
