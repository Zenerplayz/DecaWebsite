import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { clusters } from "@/data/content";
import { heroPhoto } from "@/data/photos";
import type { ClusterInfo } from "@/data/types";

export const metadata = { title: "Compete" };

export default function Compete() {
  return (
    <section className="pt-16">
      <div className="container-page py-16 sm:py-20">
        {/* Hero — text left, photo staggered right */}
        <header className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="max-w-2xl self-center lg:col-span-7 motion-safe:animate-fade-up">
            <span className="eyebrow">Competition Hub</span>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-pine-950 sm:text-5xl lg:text-6xl">
              Train like an <em className="italic text-pine-700">athlete</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pine-600">
              Everything you need to win: a field guide to all five DECA
              clusters, timed practice tests, and role-play prep that holds up
              in front of a judge.
            </p>
          </div>

          <figure className="lg:col-span-5 lg:mt-14">
            <a
              href={heroPhoto.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl focus-visible:outline-offset-4"
            >
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="aspect-[4/5] h-auto w-full object-cover"
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
                From the feed
              </a>
            </figcaption>
          </figure>
        </header>

        {/* Cluster index — editorial list, hairline rows */}
        <div className="mt-20 sm:mt-28">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
              Choose your cluster
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-600">
              Five categories · Every DECA event
            </p>
          </div>

          <div className="rule mt-8">
            <ul>
              {clusters.map((cluster, i) => (
                <ClusterRow key={cluster.id} cluster={cluster} index={i} />
              ))}
            </ul>
          </div>
        </div>

        {/* Deep-dive callouts — typographic blocks, not cards */}
        <div className="mt-20 sm:mt-28">
          <div className="rule" />
          <div className="grid gap-12 pt-12 sm:pt-14 lg:grid-cols-2 lg:gap-16">
            <div className="border-l-2 border-gold-400 pl-6 sm:pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-600">
                Self-paced drills
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-pine-950">
                Practice Tests
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-pine-600">
                Timed cluster exams with instant scoring and explanations,
                filtered to your cluster so every question counts.
              </p>
              <Link href="/compete/practice" className="text-link mt-5">
                Start practicing
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:pl-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-600">
                Ten minutes to confident
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-pine-950">
                Role-Play Training Guide
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-pine-600">
                How role-plays are scored, and how to structure a winning
                answer — from your opening thirty seconds to a close the judge
                remembers.
              </p>
              <Link href="/compete/roleplay" className="text-link mt-5">
                Open the training guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClusterRow({
  cluster,
  index,
}: {
  cluster: ClusterInfo;
  index: number;
}) {
  return (
    <li className="border-b border-pine-900/10">
      <Link
        href={`/compete/practice?cluster=${cluster.id}`}
        className="group grid gap-x-6 gap-y-2 px-2 py-7 transition-colors duration-200 hover:bg-pine-50 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:px-4"
      >
        <span aria-hidden="true" className="ghost-numeral hidden sm:block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pine-600">
            {cluster.shortName} · {cluster.events.length} events
          </p>
          <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-pine-950 sm:text-3xl">
            {cluster.name}
          </h3>
          <p className="mt-1 font-display text-base italic text-gold-700">
            {cluster.tagline}
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-pine-600">
            {cluster.events.map((e) => e.name).join("  ·  ")}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 self-end text-pine-300 transition-colors duration-200 group-hover:text-gold-600 sm:self-center"
        />
      </Link>
    </li>
  );
}
