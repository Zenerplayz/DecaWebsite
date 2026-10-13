import Image from "next/image";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { officers } from "@/data/content";
import { site } from "@/data/site";
import { aboutPhoto, advisorPhoto } from "@/data/photos";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/about");

const president = officers.find((o) => o.role === "President");
const vicePresidents = officers.filter((o) => o.role.startsWith("VP"));
const associates = officers.filter(
  (o) => o.role !== "President" && !o.role.startsWith("VP"),
);

function RosterRow({ name, role }: { name: string; role: string }) {
  return (
    <li className="group rule flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <span className="text-xl font-semibold text-pine-950">
        {name}
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.15em] text-pine-600 sm:text-right">
        {role}
      </span>
    </li>
  );
}

export default function About() {
  return (
    <section className="pt-16">
      {/* ── Masthead ─────────────────────────────────────────────── */}
      <div className="container-page pt-10 pb-10 sm:pt-12 sm:pb-12">

        <p className="eyebrow">Great Oaks Sycamore DECA</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-pine-950 sm:text-5xl">
          Our chapter
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pine-700">
          {site.mission}
        </p>

        {/* Wide editorial photograph */}
        <figure className="mt-8 sm:mt-10">
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src={aboutPhoto.src}
              alt={aboutPhoto.alt}
              fill
              preload
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover object-bottom"
            />
          </div>
          <figcaption className="mt-3 text-sm text-pine-700">
            Chapter members at our awards ceremony.
          </figcaption>
        </figure>
      </div>

      {/* ── Officer roster: typographic list on a white band ─────── */}
      <div className="border-y border-pine-100 bg-white">
        <div className="container-page py-10 sm:py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
              The officer team
            </h2>
            <p className="mt-4 leading-relaxed text-pine-600">
              Thirteen students plan every meeting, social, and competition
              season. Find any of them in the halls — they&rsquo;re happy to talk
              DECA.
            </p>
          </div>

          {/* President, given room to breathe */}
          {president && (
            <article className="mt-8 pb-4 sm:mt-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-700">
                {president.role}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
                {president.name}
              </h3>
            </article>
          )}

          {vicePresidents.length > 0 && (
            <section aria-label="Vice presidents">
              <h3 className="pt-8 text-sm font-bold uppercase tracking-[0.2em] text-pine-600">
                Vice Presidents
              </h3>
              <ul className="mt-2">
                {vicePresidents.map((o) => (
                  <RosterRow key={o.name} name={o.name} role={o.role} />
                ))}
              </ul>
            </section>
          )}

          {associates.length > 0 && (
            <section aria-label="Associates">
              <h3 className="pt-12 text-sm font-bold uppercase tracking-[0.2em] text-pine-600">
                Associates
              </h3>
              <ul className="mt-2">
                {associates.map((o) => (
                  <RosterRow key={o.name} name={o.name} role={o.role} />
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* ── Advisor: drop-cap profile paired with portrait ───────── */}
      <div className="container-page py-10 sm:py-14">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
          <figure className="order-2 mx-auto w-full max-w-sm md:order-1 md:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image
                src={advisorPhoto.src}
                alt={advisorPhoto.alt}
                fill
                sizes="(min-width: 768px) 320px, (min-width: 640px) 384px, calc(100vw - 2rem)"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="order-1 md:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-700">
              Chapter Advisor
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
              {site.advisorName}
            </h2>
            <p className="mt-5 leading-relaxed text-pine-700">
              Every meeting, fundraiser, and competition entry passes through one
              classroom in the marketing wing. {site.advisorName} teaches the
              chapter’s business courses and helps members prepare for exams,
              role-plays, and competition.
            </p>
            <p className="mt-6">
              <a href={`mailto:${site.advisorEmail}`} className="text-link">
                Email {site.advisorName}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>

        {/* ── Quiet closing invitation ───────────────────────────── */}
        <div className="rule mt-20 flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-lg text-2xl font-semibold leading-snug text-pine-950">
            Interested in joining?
          </p>
          <Link href="/join" className="text-link shrink-0">
            Join the chapter
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
