import Link from "next/link";
import { ArrowRight, Briefcase, ClipboardCheck, Lightbulb, Megaphone, PiggyBank, Plane, Sparkles } from "lucide-react";
import { clusters } from "@/data/content";
import type { ClusterInfo } from "@/data/types";

const clusterIcons: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  lightbulb: Lightbulb,
  "piggy-bank": PiggyBank,
  plane: Plane,
  megaphone: Megaphone,
};

export const metadata = { title: "Compete" };

export default function Compete() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Competition Hub</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Train like an athlete
          </h1>
          <p className="mt-4 text-lg text-pine-600">
            Everything you need to win: cluster guides, practice tests,
            and role-play prep.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clusters.map((c) => (
            <ClusterCard key={c.id} cluster={c} />
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="card flex flex-col p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine-950 text-gold-400">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-pine-950">Practice Tests</h3>
            <p className="mt-2 flex-1 text-sm text-pine-600">
              Timed cluster exams with instant scoring and explanations, filtered to your cluster.
            </p>
            <Link href="/compete/practice" className="btn-navy mt-6 self-start">
              Start practicing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="card flex flex-col p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine-950 text-gold-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-pine-950">Role-Play Training Guide</h3>
            <p className="mt-2 flex-1 text-sm text-pine-600">
              Learn how role-plays are scored and how to structure a winning answer —
              from your opening thirty seconds to a confident close.
            </p>
            <Link href="/compete/roleplay" className="btn-outline mt-6 self-start">
              Open training guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClusterCard({ cluster }: { cluster: ClusterInfo }) {
  const Icon = clusterIcons[cluster.icon] ?? Briefcase;
  return (
    <Link
      href={`/compete/practice?cluster=${cluster.id}`}
      className="card flex flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine-950 text-gold-400">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="mt-4 font-display text-lg font-bold text-pine-950">{cluster.name}</h2>
      <p className="mt-1 text-sm font-medium italic text-gold-700">{cluster.tagline}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-pine-600">{cluster.description}</p>
      <ul className="mt-4 space-y-1.5">
        {cluster.events.slice(0, 3).map((e) => (
          <li key={e.name} className="flex items-start gap-2 text-sm text-pine-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
            {e.name}
          </li>
        ))}
      </ul>
    </Link>
  );
}
