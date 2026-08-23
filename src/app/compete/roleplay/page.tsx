import Link from "next/link";
import { ArrowRight, Timer } from "lucide-react";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/compete/roleplay");

const formatStats = [
  {
    value: "10",
    unit: "min",
    label: "Prep time",
    detail:
      "Read the case, study the performance indicators, and outline your answer before the judge calls you in.",
  },
  {
    value: "10",
    unit: "min",
    label: "Presentation",
    detail:
      "Present your solution directly to the judge as if they were the decision-maker in the scenario.",
  },
  {
    value: "5",
    unit: "criteria",
    label: "How you're scored",
    detail:
      "Judges rate how well you address each listed indicator, plus your overall structure and professionalism.",
  },
];

const rubric = [
  {
    title: "Opening & Professionalism",
    description:
      "Top marks go to competitors who greet the judge confidently, introduce themselves, and state the problem and their recommendation within the first thirty seconds.",
  },
  {
    title: "Application of Performance Indicators",
    description:
      "Top marks require you to explicitly work every listed indicator into your answer with business terminology, not just mention it once and move on.",
  },
  {
    title: "Use of Case Facts",
    description:
      "Top marks come from citing specific numbers, names, and constraints from the scenario to justify each decision you make.",
  },
  {
    title: "Solution Structure",
    description:
      "Top marks reward a clear problem-solution-benefit flow where the judge always knows which point you are on and why it matters.",
  },
  {
    title: "Communication & Closing",
    description:
      "Top marks belong to presenters who keep steady eye contact, manage their time, and end with a confident summary and call to action.",
  },
];

const prepPlan = [
  {
    title: "Read the performance indicators first",
    body: "Before anything else, scan the indicator list so you know exactly what the judge is listening for.",
  },
  {
    title: "Skim the case twice",
    body: "First pass for the big picture, second pass to underline key facts, numbers, and constraints.",
  },
  {
    title: "Outline opener, three main points, close",
    body: "Decide your opening statement, group your solution into three points, and plan how you will end.",
  },
  {
    title: "Assign evidence to each point",
    body: "Attach a specific case fact or number to every main point so nothing sounds like an opinion.",
  },
  {
    title: "Rehearse your opener once",
    body: "Say your first thirty seconds out loud. A strong start calms nerves and sets the tone.",
  },
  {
    title: "Breathe",
    body: "Take one slow breath before you knock. Composure reads as confidence to the judge.",
  },
];

const sampleIndicators = [
  "Explain the nature of customer complaint handling.",
  "Demonstrate a customer-service mindset.",
  "Apply active-listening techniques.",
  "Offer a resolution that protects the store's policies.",
  "Determine ways to retain the customer after the issue.",
];

function SectionHeader({
  num,
  kicker,
  title,
  lead,
}: {
  num: string;
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="relative">
      <span
        aria-hidden="true"
        className="ghost-numeral absolute -top-8 right-0 hidden select-none lg:block"
      >
        {num}
      </span>
      <p className="eyebrow">
        {num} · {kicker}
      </p>
      <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-pine-600">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

export default function Roleplay() {
  return (
    <section className="pt-16">
      <div className="container-page py-16 sm:py-20">
        {/* ── Chapter opening ─────────────────────────────────────────── */}
        <header>
          <span className="eyebrow">Role-Play Training</span>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine-950 sm:text-6xl">
            Win your <em className="italic">role-play</em>.
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-pine-700">
            Ten minutes of prep decides most role-plays. This guide walks
            through the format, the rubric judges carry into the room, and a
            repeatable prep plan — so you walk in ready, not hopeful.
          </p>
        </header>

        {/* ── Format stat bar ─────────────────────────────────────────── */}
        <ul className="mt-14 grid grid-cols-1 divide-y divide-pine-900/10 border-y border-pine-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {formatStats.map((s) => (
            <li key={s.label} className="py-7 sm:px-8 sm:py-9 sm:first:pl-0">
              <p className="font-display text-5xl font-semibold tracking-tight text-pine-950">
                {s.value}
                <span className="ml-1 font-display text-2xl font-medium italic text-pine-600">
                  {" "}
                  {s.unit}
                </span>
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
                {s.label}
              </p>
              <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-pine-600">
                {s.detail}
              </p>
            </li>
          ))}
        </ul>

        {/* ── 01 · The rubric ─────────────────────────────────────────── */}
        <article className="mt-24 border-t border-pine-900/10 pt-14">
          <SectionHeader
            num="01"
            kicker="Judging"
            title="How judges score you"
            lead="Every judge scores against the same printed scorecard. Learn its five criteria and you already know exactly what to rehearse."
          />

          <dl className="mt-12 divide-y divide-pine-900/10 border-t border-pine-900/10">
            {rubric.map((r, i) => (
              <div
                key={r.title}
                className="grid gap-2 py-7 sm:grid-cols-[14rem_1fr] sm:gap-10 sm:py-8"
              >
                <dt>
                  <span
                    aria-hidden="true"
                    className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-gold-700"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-semibold text-pine-950">
                    {r.title}
                  </span>
                </dt>
                <dd className="max-w-[58ch] leading-relaxed text-pine-600">
                  {r.description}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-pine-500">
            Scores across the five criteria combine into one total — a weak
            opening drags down every point that follows, which is why this
            guide spends so much time on the first thirty seconds.
          </p>
        </article>

        {/* ── 02 · The prep plan ──────────────────────────────────────── */}
        <article className="mt-24 border-t border-pine-900/10 pt-14">
          <SectionHeader
            num="02"
            kicker="Preparation"
            title="Your ten-minute prep plan"
            lead="Six steps, ten minutes. Run this exact sequence every time you practice until it becomes reflex."
          />

          <ol className="relative mt-12 max-w-2xl space-y-10">
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-[11px] top-3 w-px bg-pine-200"
            />
            {prepPlan.map((step, i) => (
              <li key={step.title} className="relative pl-12 sm:pl-14">
                <span className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-pine-200 bg-cream font-display text-xs font-semibold text-gold-700">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-pine-950">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[56ch] leading-relaxed text-pine-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-12 flex max-w-xl items-start gap-3 border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-pine-600">
            <Timer aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            <span>
              <strong className="font-semibold text-pine-950">
                Roughly two minutes per step.
              </strong>{" "}
              If you fall behind, prioritize the outline over rehearsing.
            </span>
          </p>
        </article>

        {/* ── 03 · Sample scenario ────────────────────────────────────── */}
        <article className="mt-24 border-t border-pine-900/10 pt-14">
          <SectionHeader
            num="03"
            kicker="In practice"
            title="A scenario, up close"
            lead="This is what a prep sheet looks like when it lands in front of you. Practice outlining against it with a ten-minute timer running."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <blockquote className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
                Retail Merchandising Series
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-pine-400">
                Customer Complaint
              </p>
              <p className="mt-6 border-l-2 border-gold-400 pl-6 font-display text-xl italic leading-relaxed text-pine-900 sm:pl-8 sm:text-2xl">
                You are the shift lead at Northgate Outfitters, a mid-size
                apparel retailer. A longtime customer returns a $180 jacket
                bought six weeks ago, well past the 30-day return window,
                claiming a zipper failed under normal use. She has posted
                negatively about the store online before and has a large local
                following. The jacket shows clear signs of wear beyond the
                zipper. Corporate policy allows store credit as an exception
                but no cash refunds past 30 days. Two other customers are
                waiting in line behind her.
              </p>
              <footer className="mt-4 pl-6 text-sm text-pine-500 sm:pl-8">
                — the kind of competing-priorities case where structure beats
                brilliance.
              </footer>
            </blockquote>

            <aside className="lg:border-l lg:border-pine-900/10 lg:pl-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pine-950">
                Performance indicators
              </h3>
              <ul className="mt-5 space-y-4">
                {sampleIndicators.map((ind) => (
                  <li
                    key={ind}
                    className="flex items-start gap-3 text-sm leading-relaxed text-pine-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                    />
                    {ind}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </article>

        {/* ── Closing panel ───────────────────────────────────────────── */}
        <div className="mt-24 rounded-3xl bg-pine-950 px-8 py-14 sm:px-14 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Put it into practice.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pine-200">
              The best role-play prep is reps — run cluster practice tests to
              drill the exam knowledge behind every performance indicator.
            </p>
            <Link href="/compete/practice" className="btn-gold mt-8">
              Take a practice test
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
