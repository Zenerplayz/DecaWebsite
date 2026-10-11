import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Lightbulb,
  Wallet,
  Hotel,
  Megaphone,
} from "lucide-react";
import { clusters } from "@/data/content";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/compete");
const clusterIcons = [BriefcaseBusiness, Lightbulb, Wallet, Hotel, Megaphone];

export default function Compete() {
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
        <header className="grid items-end gap-6 border-b border-pine-200 pb-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="eyebrow">Competition prep</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-pine-950 sm:text-5xl">
              Your next round starts here.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-pine-700">
              Choose your cluster, practice your exam, and build confidence
              before your next competition.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/compete/practice" className="btn-gold">
              Start a practice test{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/compete/roleplay" className="btn-outline">
              Role-play guide{" "}
              <BookOpen aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </header>
        <section aria-labelledby="clusters-heading" className="mt-8">
          <h2
            id="clusters-heading"
            className="text-2xl font-semibold tracking-tight text-pine-950 sm:text-3xl"
          >
            Choose your cluster
          </h2>
          <p className="mt-2 text-pine-700">
            Pick a cluster to go straight to its practice tests.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clusters.map((cluster, index) => {
              const Icon = clusterIcons[index];
              return (
                <li key={cluster.id}>
                  <Link
                    href={`/compete/practice?cluster=${cluster.id}`}
                    className="group flex h-full flex-col rounded-xl border border-pine-200 bg-white p-5 transition-colors hover:border-pine-600 hover:bg-pine-50 sm:p-6"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-pine-700"
                      />
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-5 w-5 text-pine-700"
                      />
                    </div>
                    <h3 className="text-xl font-semibold leading-snug text-pine-950">
                      {cluster.name}
                    </h3>
                    <p className="mt-2 leading-relaxed text-pine-700">
                      {cluster.description}
                    </p>
                    <span className="mt-auto pt-5 font-semibold text-pine-900">
                      Practice {cluster.shortName.toLowerCase()}{" "}
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="flex flex-col rounded-xl border border-pine-200 bg-pine-50 p-5 sm:p-6">
              <BookOpen
                aria-hidden="true"
                className="mb-4 h-6 w-6 text-pine-700"
              />
              <h3 className="text-xl font-semibold text-pine-950">
                Prepare for your role-play
              </h3>
              <p className="mt-2 leading-relaxed text-pine-700">
                Review scoring criteria, organize your response, and practice
                presenting to a judge.
              </p>
              <Link href="/compete/roleplay" className="text-link mt-auto pt-5">
                Open the training guide{" "}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
