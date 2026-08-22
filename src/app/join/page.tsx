import Link from "next/link";
import { CheckCircle, CreditCard, FileText, Users } from "lucide-react";
import { faqs } from "@/data/content";
import { site } from "@/data/site";

export const metadata = { title: "Join" };

const steps = [
  { icon: FileText, title: "Fill out the form", desc: "Two minutes, no experience needed." },
  { icon: CreditCard, title: `Pay dues (${site.duesAmount})`, desc: "Covers local, state & national membership." },
  { icon: Users, title: "Show up Thursday", desc: `${site.meetingInfo}. That’s it — you’re in.` },
];

export default function Join() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Join Us</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Become a member
          </h1>
          <p className="mt-4 text-lg text-pine-600">
            Anyone can join. The best time was September — the second-best time is today.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="card relative p-7">
              <span className="absolute right-6 top-6 font-display text-3xl font-bold text-pine-100">
                {i + 1}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine-950 text-gold-400">
                <s.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display font-bold text-pine-950">{s.title}</h2>
              <p className="mt-1.5 text-sm text-pine-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={site.joinUrl} className="btn-gold">
            Open Membership Form
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="text-center font-display text-2xl font-bold text-pine-950">FAQ</h2>
          <div className="card mt-6 divide-y divide-pine-100 overflow-hidden">
            {faqs.map((f) => (
              <details key={f.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-pine-950 marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.question}
                  <CheckCircle className="h-4 w-4 shrink-0 text-gold-500 opacity-0 transition group-open:opacity-100" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-pine-600">{f.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-pine-500">
            Questions? Email{" "}
            <Link href={`mailto:${site.advisorEmail}`} className="font-semibold text-pine-800 underline decoration-gold-400 underline-offset-2">
              {site.advisorEmail}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
