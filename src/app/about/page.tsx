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
      <span className="font-display text-xl text-pine-950 transition-colors duration-200 group-hover:text-gold-700">
        {name}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-pine-600 sm:text-right">
        {role}
      </span>
    </li>
  );
}

export default function About() {
  return (
    <section className="pt-16">
      {/* ── Masthead ─────────────────────────────────────────────── */}
      <div className="container-page pt-16 pb-12 sm:pt-24 sm:pb-16">
        <span className="eyebrow">{site.school}</span>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine-950 sm:text-6xl lg:text-7xl">
          Great Oaks Sycamore DECA
        </h1>
        <p className="mt-8 max-w-2xl font-display text-xl italic leading-relaxed text-pine-700 sm:text-2xl">
          {site.mission}
        </p>

        {/* Wide editorial photograph */}
        <figure className="mt-14 sm:mt-20">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
            <Image
              src={aboutPhoto.src}
              alt={aboutPhoto.alt}
              fill
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm text-pine-600">
            {aboutPhoto.alt}.
          </figcaption>
        </figure>
      </div>

      {/* ── Values: single-column flow with ghost index ──────────── */}
      <div className="container-page py-16 sm:py-24">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
          What we stand for
        </h2>
        <ol className="mt-10 sm:mt-14">
          {site.values.map((v, i) => (
            <li
              key={v.title}
              className="rule grid gap-3 py-8 sm:grid-cols-[6rem_1fr] sm:gap-10 sm:py-10"
            >
              <span className="ghost-numeral" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-pine-950">
                  {v.title}
                </h3>
                <p className="mt-3 max-w-prose leading-relaxed text-pine-600">
                  {v.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Officer roster: typographic list on a white band ─────── */}
      <div className="border-y border-pine-100 bg-white">
        <div className="container-page py-16 sm:py-24">
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
            <article className="mt-12 pb-8 sm:mt-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
                {president.role}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
                {president.name}
              </h3>
            </article>
          )}

          {vicePresidents.length > 0 && (
            <section aria-label="Vice presidents">
              <h3 className="pt-8 text-xs font-bold uppercase tracking-[0.2em] text-pine-600">
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
              <h3 className="pt-12 text-xs font-bold uppercase tracking-[0.2em] text-pine-600">
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
      <div className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
          <figure className="order-2 mx-auto w-full max-w-sm md:order-1 md:mx-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">
              Chapter Advisor
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
              {site.advisorName}
            </h2>
            <p className="mt-6 leading-relaxed text-pine-600 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:font-semibold first-letter:text-pine-950">
              Every meeting, fundraiser, and competition entry passes through one
              classroom in the marketing wing. {site.advisorName} teaches the
              business courses that feed the chapter, coaches competitors from
              their first role-play all the way to ICDC, and keeps{" "}
              {site.shortName} focused on what DECA is really for — becoming the
              kind of leader people want to follow.
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
          <p className="max-w-lg font-display text-2xl italic leading-snug text-pine-950 sm:text-3xl">
            Think you&rsquo;d fit in? Come see for yourself.
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
