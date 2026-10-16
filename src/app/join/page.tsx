import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/join");

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="container-page py-10 sm:py-12">
        {/* Masthead */}
        <header className="mx-auto max-w-2xl">

          <h1 className="page-title">
            Become a member
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-pine-600">
            Taking a marketing class, or taken one before? Visit Mr. Steedly
            to confirm your registration, then join us at a meeting.
          </p>
        </header>

        {/* Steps — open typographic sequence */}
        <ol className="mx-auto mt-8 max-w-2xl border-t border-pine-900/10 sm:mt-10">
          {steps.map((s) => (
            <li key={s.numeral} className="rule flex items-start gap-6 py-6 sm:gap-8 sm:py-8">
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

        <div className="mx-auto flex max-w-2xl flex-wrap gap-x-6 gap-y-2">
          <Link href="/calendar" className="text-link">
            See meeting dates
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
          <a href={`mailto:${site.advisorEmail}`} className="text-link">
            Ask {site.advisorName} about joining
          </a>
        </div>

        {/* FAQ — borderless accordion */}
        <section aria-labelledby="faq-heading" className="mx-auto mt-12 max-w-2xl sm:mt-14">
          <h2 id="faq-heading" className="font-display text-2xl font-bold text-pine-950 sm:text-3xl">
            Common questions
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
