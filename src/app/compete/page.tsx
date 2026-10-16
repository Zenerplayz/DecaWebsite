import PageSeo from "@/components/page-seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clusters } from "@/data/content";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/compete");

export default function Compete() {
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
          <PageSeo route="/compete" />
        <header className="max-w-2xl">
          <p className="eyebrow">Member resources</p>
          <h1 className="page-title">
            Competition prep
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-pine-700">
            Choose your cluster to practice exam questions, or use the role-play
            guide to prepare your presentation.
          </p>
        </header>
        <section
          aria-labelledby="clusters-heading"
          className="mt-10 grid gap-6 border-t border-pine-200 pt-7 lg:grid-cols-[1fr_2fr] lg:gap-16"
        >
          <div>
            <h2 id="clusters-heading" className="section-title">
              Practice by cluster
            </h2>
            <p className="mt-3 max-w-xs leading-relaxed text-pine-700">
              Select a subject, then choose your difficulty and test length.
            </p>
            <Link href="/compete/practice" className="text-link mt-5">
              Practice all clusters{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <ul className="divide-y divide-pine-200 border-y border-pine-200">
            {clusters.map((cluster) => (
              <li key={cluster.id}>
                <Link
                  href={`/compete/practice?cluster=${cluster.id}`}
                  className="group grid grid-cols-[1fr_auto] items-center gap-5 py-5 transition-colors hover:bg-pine-50"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-pine-950 group-hover:underline group-hover:underline-offset-4">
                      {cluster.name}
                    </h3>
                    <p className="mt-1 max-w-lg text-sm leading-relaxed text-pine-700">
                      {cluster.description}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-pine-700"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section
          className="mt-10 grid gap-4 border-t border-pine-200 pt-7 lg:grid-cols-[1fr_2fr] lg:gap-16"
          aria-labelledby="roleplay-heading"
        >
          <h2 id="roleplay-heading" className="section-title">
            Role-play preparation
          </h2>
          <div>
            <p className="max-w-xl leading-relaxed text-pine-700">
              Review the format, organize your response, and practice presenting
              to a judge.
            </p>
            <Link href="/compete/roleplay" className="text-link mt-4">
              Read the role-play guide{" "}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
