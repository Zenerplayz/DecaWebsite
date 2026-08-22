import Link from "next/link";
import {
  Timer,
  ClipboardCheck,
  Mic,
  BookOpen,
  Target,
  ArrowRight,
} from "lucide-react";

export const metadata = { title: "Role-Play Training" };

const formatStats = [
  {
    icon: BookOpen,
    value: "About 10 minutes",
    label: "Prep time",
    detail:
      "Read the case, study the performance indicators, and outline your answer before the judge calls you in.",
  },
  {
    icon: Mic,
    value: "About 10 minutes",
    label: "Presentation",
    detail:
      "Present your solution directly to the judge as if they were the decision-maker in the scenario.",
  },
  {
    icon: Target,
    value: "Performance indicators",
    label: "How you are scored",
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
    body:
      "Before anything else, scan the indicator list so you know exactly what the judge is listening for.",
  },
  {
    title: "Skim the case twice",
    body:
      "First pass for the big picture, second pass to underline key facts, numbers, and constraints.",
  },
  {
    title: "Outline opener, three main points, close",
    body:
      "Decide your opening statement, group your solution into three points, and plan how you will end.",
  },
  {
    title: "Assign evidence to each point",
    body:
      "Attach a specific case fact or number to every main point so nothing sounds like an opinion.",
  },
  {
    title: "Rehearse your opener once",
    body:
      "Say your first thirty seconds out loud. A strong start calms nerves and sets the tone.",
  },
  {
    title: "Breathe",
    body:
      "Take one slow breath before you knock. Composure reads as confidence to the judge.",
  },
];

const sampleIndicators = [
  "Explain the nature of customer complaint handling.",
  "Demonstrate a customer-service mindset.",
  "Apply active-listening techniques.",
  "Offer a resolution that protects the store's policies.",
  "Determine ways to retain the customer after the issue.",
];

export default function Roleplay() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Role-Play Training</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Win your role-play
          </h1>
          <p className="mt-4 text-lg text-pine-600">
            Ten minutes of prep decides most role-plays. Learn the format, the
            rubric, and a repeatable prep plan so you walk into the room ready.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold text-pine-950">
            The format
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {formatStats.map((s) => (
              <div key={s.label} className="card p-7 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-pine-950 text-gold-400">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display text-xl font-bold text-pine-950">
                  {s.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-700">
                  {s.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-pine-600">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold text-pine-950">
            How judges score you
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rubric.map((r) => (
              <div key={r.title} className="card p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-100 text-gold-700">
                  <ClipboardCheck className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-pine-950">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pine-600">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold text-pine-950">
            Your 10-minute prep plan
          </h2>
          <div className="card mt-6 p-8">
            <ol className="relative space-y-8 border-l-2 border-pine-100 pl-8">
              {prepPlan.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-pine-950 font-display text-xs font-bold text-gold-400">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-pine-950">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-pine-600">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex items-center gap-3 rounded-xl bg-pine-50 p-4 text-sm text-pine-700">
              <Timer className="h-4 w-4 shrink-0 text-gold-600" />
              Roughly two minutes per step. If you fall behind, prioritize the
              outline over rehearsing.
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold text-pine-950">
            Sample scenario
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-pine-600">
            This is what a prep sheet looks like when it lands in front of you.
            Practice outlining against it with a ten-minute timer running.
          </p>
          <div className="card mt-6 p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge bg-pine-950 text-gold-400">
                Retail Merchandising Series
              </span>
              <span className="badge bg-gold-100 text-gold-700">
                Customer Complaint
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-pine-950">
              Situation
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-pine-600">
              You are the shift lead at Northgate Outfitters, a mid-size apparel
              retailer. A longtime customer returns a $180 jacket bought six
              weeks ago, well past the 30-day return window, claiming a zipper
              failed under normal use. She has posted negatively about the store
              online before and has a large local following. The jacket shows
              clear signs of wear beyond the zipper. Corporate policy allows
              store credit as an exception but no cash refunds past 30 days. Two
              other customers are waiting in line behind her.
            </p>
            <h3 className="mt-6 font-display text-base font-bold text-pine-950">
              Performance indicators
            </h3>
            <ul className="mt-3 space-y-2">
              {sampleIndicators.map((ind) => (
                <li key={ind} className="flex items-start gap-2 text-sm text-pine-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-pine-950 px-8 py-12 text-center shadow-lift sm:px-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-gold-400">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white">
            Put it into practice
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-pine-200">
            The best role-play prep is reps — run cluster practice tests to drill
            the exam knowledge behind every performance indicator.
          </p>
          <Link href="/compete/practice" className="btn-outline-light mt-8">
            Take a practice test
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
