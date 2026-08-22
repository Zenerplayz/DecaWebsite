import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import { site } from "@/data/site";

export const metadata = { title: "Join" };

const steps = [
  {
    numeral: "01",
    title: "Visit Mr. Steedly",
    desc: "Stop by his room in the marketing wing — he’ll get you signed up.",
  },
  {
    numeral: "02",
    title: "Come to meetings",
    desc: "Dates and locations are posted on the calendar. That’s it — you’re in.",
  },
];

export default function Join() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        {/* Masthead */}
        <header className="max-w-2xl">
          <span className="eyebrow">Join Us</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Become a member
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-pine-600">
            In a marketing class?{" "}
            <em className="font-display italic text-pine-800">
              Then you’re already in.
            </em>
          </p>
        </header>

        {/* Steps — open typographic sequence */}
        <ol className="mx-auto mt-14 max-w-2xl border-t border-pine-900/10 sm:mt-16">
          {steps.map((s) => (
            <li key={s.numeral} className="rule flex items-start gap-6 py-10 sm:gap-10 sm:py-12">
              <span className="ghost-numeral shrink-0" aria-hidden="true">
                {s.numeral}
              </span>
              <div className="pt-1 sm:pt-2">
                <h2 className="font-display text-xl font-semibold text-pine-950 sm:text-2xl">
                  {s.title}
                </h2>
                <p className="mt-2 max-w-md leading-relaxed text-pine-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto max-w-2xl">
          <Link href="/calendar" className="text-link">
            See meeting dates
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        {/* FAQ — borderless accordion */}
        <section aria-labelledby="faq-heading" className="mx-auto mt-20 max-w-2xl sm:mt-24">
          <h2 id="faq-heading" className="font-display text-2xl font-bold text-pine-950 sm:text-3xl">
            Questions, answered
          </h2>
          <div className="mt-6">
            {faqs.map((f) => (
              <details key={f.question} className="group rule">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-medium text-pine-950 marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                  />
                </summary>
                <p className="max-w-xl pb-6 pr-8 leading-relaxed text-pine-600">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="mx-auto mt-16 max-w-2xl rule pt-12 pb-4 sm:mt-20">
          <span className="eyebrow">Still have questions?</span>
          <p className="font-display text-2xl font-medium leading-snug text-pine-950 sm:text-3xl">
            Email{" "}
            <a
              href={`mailto:${site.advisorEmail}`}
              className="text-link italic"
            >
              {site.advisorName}
            </a>{" "}
            — he’ll take care of the rest.
          </p>
        </div>
      </div>
    </section>
  );
}
