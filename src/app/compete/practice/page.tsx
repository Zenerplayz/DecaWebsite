import { practiceQuestions } from "@/data/questions";
import { clusters } from "@/data/content";
import QuizClient from "./quiz-client";
import { pageMetadata } from "@/data/seo";
import Link from "next/link";
import PageSeo from "@/components/page-seo";

export const metadata = pageMetadata("/compete/practice");

export default function PracticePage() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <PageSeo route="/compete/practice" />
        <div className="max-w-2xl">

          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Free DECA practice tests
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-pine-600">
            Practice with {practiceQuestions.length} multiple-choice questions across
            marketing, finance, hospitality and tourism, entrepreneurship, and business
            management. Choose your cluster, difficulty, and test length, then review
            your score and explanations after the test.
          </p>
          <p className="mt-3 leading-relaxed text-pine-600">
            These are chapter-created study questions, not official DECA exams.
            Use them alongside your event guidelines and classroom preparation.
          </p>
        </div>
        <div className="mt-14 border-t border-pine-900/10 pt-12">
          <QuizClient questions={practiceQuestions} clusters={clusters} />
        </div>
        <section aria-labelledby="practice-guide-heading" className="mt-12 border-t border-pine-900/10 pt-8">
          <h2 id="practice-guide-heading" className="text-2xl font-semibold text-pine-950">How to use these DECA practice questions</h2>
          <ol className="mt-4 max-w-2xl list-decimal space-y-3 pl-5 leading-relaxed text-pine-700">
            <li>Choose the cluster that matches your event and select a difficulty.</li>
            <li>Start with 10 questions, choose 25, or practice all available questions in your selection.</li>
            <li>After finishing, read the explanations and revisit topics you missed before another practice set.</li>
          </ol>
          <h3 className="mt-8 text-xl font-semibold text-pine-950">Practice by business topic</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {clusters.map((cluster) => (
              <li key={cluster.id}>
                <a href={`/compete/practice?cluster=${cluster.id}`} className="text-link">
                  {cluster.name} practice questions
                </a>
                <p className="mt-1 text-sm text-pine-600">
                  {practiceQuestions.filter((question) => question.clusterId === cluster.id).length} questions · {cluster.examTopics.slice(0, 3).join(", ")}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl leading-relaxed text-pine-700">
            Preparing for a presentation too? Follow our <Link href="/compete/roleplay" className="underline underline-offset-4">DECA role-play preparation guide</Link>
            {" "}and check <a href="https://www.deca.org/compete" className="underline underline-offset-4">DECA’s official competitive event resources</a>
            {" "}for your event’s current requirements.
          </p>
        </section>
      </div>
    </section>
  );
}
