import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { heroPhoto } from "@/data/photos";
import Pillars from "@/components/pillars";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* ── Magazine opening ───────────────────────────────────────── */}
      <section className="pt-16">
        <div className="container-page pb-20 pt-14 sm:pb-28 sm:pt-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <header className="max-w-2xl self-center motion-safe:animate-fade-up lg:col-span-7">

              <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine-950 sm:text-6xl lg:text-7xl">
                Where leaders
                <br />
                are made.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-pine-600">
                {site.chapterName} brings students together at {site.school} to learn about business, prepare for competitions, and get involved in the chapter.
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

            <figure className="lg:col-span-5 lg:mt-14">
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
              <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-xs text-pine-600">
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
                  "flex flex-col py-8 sm:py-12",
                  i > 0 && "border-t border-pine-900/10 sm:border-l sm:border-t-0",
                  i === 0 && "sm:pr-10",
                  i === site.stats.length - 1 && "sm:pl-10",
                  i > 0 &&
                    i < site.stats.length - 1 &&
                    "sm:px-10",
                )}
              >
                <dt className="order-2 mt-2 text-xs font-bold uppercase tracking-[0.18em] text-pine-600">
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

      {/* ── Calendar invitation: asymmetric split ─────────────────── */}
      <section className="pt-16 sm:pt-24">
        <div className="container-page">
          <div className="grid gap-8 border-t border-pine-900/10 pt-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-end md:gap-16 sm:pt-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl lg:text-5xl">
              Never miss{" "}
              a meeting.
            </h2>
            <div>
              <p className="leading-relaxed text-pine-600">
                Meeting dates, competition days, and deadlines all live on the
                chapter calendar — subscribe once and everything lands straight
                on your phone.
              </p>
              <Link href="/calendar" className="text-link mt-5">
                Open the calendar
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission: clean full-width pine band ───────────────────── */}
      <section className="mt-20 bg-pine-950 sm:mt-28">
        <div className="container-page py-24 sm:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Our Mission
            </p>
            <p className="mt-6 font-display text-3xl font-medium leading-snug text-white sm:text-4xl lg:text-5xl">
              “{site.mission}”
            </p>
            <Link href="/compete" className="btn-gold mt-12">
              Explore Competition Prep
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section id="interest" aria-labelledby="interest-heading" className="bg-cream">
        <div className="container-page py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
            <div>
              <p className="eyebrow">Support Sycamore DECA</p>
              <h2 id="interest-heading" className="font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
                Interested in helping?
              </h2>
              <p className="mt-5 leading-relaxed text-pine-600">
                Help our students grow as leaders. Fill out the form below to connect with us about sponsorship opportunities and supporting Sycamore DECA.
              </p>
              <a
                href="https://docs.google.com/forms/d/11PadbmuAMaLJX_ocdckvgBq91qoEWoWJkLbkTEHepfQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link mt-6"
              >
                Open form in a new tab
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="min-w-0 overflow-hidden rounded-2xl border border-pine-900/10 bg-white p-1 shadow-soft sm:p-3">
              <iframe
                src="https://docs.google.com/forms/d/11PadbmuAMaLJX_ocdckvgBq91qoEWoWJkLbkTEHepfQ/viewform?embedded=true"
                title="Sycamore DECA sponsorship interest form"
                loading="lazy"
                className="block h-[1100px] w-full border-0 sm:h-[1000px]"
              >
                Loading sponsorship interest form…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
