import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { heroPhoto } from "@/data/photos";
import Pillars from "@/components/pillars";
import UpcomingEvents from "@/components/upcoming-events";

export const revalidate = 300;

export default function Home() {
  return (
    <>
      <section className="pt-16">
        <div className="container-page pb-10 pt-10 sm:pb-12 sm:pt-14">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-12">
            <header>
              <p className="eyebrow">Great Oaks · Sycamore High School</p>
              <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tight text-pine-950 sm:text-6xl lg:text-7xl">
                Sycamore
                <br />
                DECA.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-pine-700">
                Learn business, prepare for competition, and take part in
                chapter life at Sycamore High School.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href="/join" className="btn-gold">
                  Join the chapter{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/compete" className="text-link">
                  Competition prep
                </Link>
              </div>
            </header>
            <figure>
              <a
                href={heroPhoto.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-offset-4"
              >
                <Image
                  src={heroPhoto.src}
                  alt={heroPhoto.alt}
                  width={1000}
                  height={1000}
                  preload
                  sizes="(min-width: 1152px) 620px, (min-width: 1024px) 55vw, calc(100vw - 2rem)"
                  className="aspect-[4/3] h-auto w-full object-cover object-[center_58%]"
                />
              </a>
              <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-pine-700">
                <span>Our chapter at ICDC · Atlanta</span>
                <a
                  href={heroPhoto.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  View photo{" "}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </figcaption>
            </figure>
          </div>
          <dl
            aria-label="Chapter at a glance"
            className="mt-10 grid grid-cols-3 gap-x-5 border-y border-pine-200 py-5 sm:mt-12 sm:py-6"
          >
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-semibold leading-snug text-pine-700 sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section
        className="container-page py-8 sm:py-10"
        aria-labelledby="chapter-life-heading"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="chapter-life-heading" className="section-title">
            Life in the chapter
          </h2>
          <Link href="/about" className="text-link text-sm">
            Meet the chapter{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <Pillars />
      </section>
      <section
        className="container-page py-10 sm:py-12"
        aria-labelledby="home-events-heading"
      >
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-4 border-t border-pine-200 pt-8">
          <div>
            <h2 id="home-events-heading" className="section-title">
              Chapter calendar
            </h2>
            <p className="mt-2 text-pine-700">
              Meetings, competitions, and deadlines.
            </p>
          </div>
          <Link href="/calendar" className="text-link text-sm">
            Full calendar <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <UpcomingEvents limit={3} />
      </section>
      <section
        className="bg-pine-950 text-white"
        aria-labelledby="practice-heading"
      >
        <div className="container-page grid gap-6 py-9 sm:py-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <div className="max-w-xl">
            <h2 id="practice-heading" className="section-title text-white">
              Prepare for your next event.
            </h2>
            <p className="mt-3 leading-relaxed text-pine-100">
              Practice your cluster exam or work through the role-play guide
              before competition.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/compete/practice"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-white underline decoration-white/40 underline-offset-4"
            >
              Practice tests{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/compete/roleplay"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-white underline decoration-white/40 underline-offset-4"
            >
              Role-play guide{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="interest"
        aria-labelledby="interest-heading"
        className="container-page py-10 sm:py-12"
      >
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <div className="max-w-xl">
            <h2 id="interest-heading" className="section-title">
              Support the chapter
            </h2>
            <p className="mt-3 leading-relaxed text-pine-700">
              Interested in sponsoring Sycamore DECA? Contact our chapter about
              opportunities to support students and competition.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              href="https://docs.google.com/forms/d/11PadbmuAMaLJX_ocdckvgBq91qoEWoWJkLbkTEHepfQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Sponsorship inquiry{" "}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href={`mailto:${site.advisorEmail}`} className="text-link">
              Email {site.advisorName}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
