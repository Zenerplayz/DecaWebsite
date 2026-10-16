import PageSeo from "@/components/page-seo";
import { practiceQuestions } from "@/data/questions";
import { clusters } from "@/data/content";
import QuizClient from "./quiz-client";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/compete/practice");

export default function PracticePage() {
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
          <PageSeo route="/compete/practice" />
        <div className="max-w-2xl">

          <h1 className="page-title">
            Practice tests
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-pine-600">
            Choose your cluster and test length. After the test, review your score and explanations for the questions you missed.
          </p>
        </div>
        <div className="mt-10 border-t border-pine-900/10 pt-8">
          <QuizClient questions={practiceQuestions} clusters={clusters} />
        </div>
        <section className="mt-12 max-w-3xl border-t border-pine-900/10 pt-8" aria-labelledby="practice-guide-heading">
          <h2 id="practice-guide-heading" className="font-display text-2xl font-semibold text-pine-950">How to use these DECA practice questions</h2>
          <p className="mt-4 leading-relaxed text-pine-600">
            These are independent study questions, not official DECA exams.
            Choose a cluster, review missed answers and check uncertain explanations
            with your advisor. Your official exam blueprint and event guidelines
            determine the topics and rules for competition.
          </p>
          <a className="text-link mt-4 inline-block" href="https://www.deca.org/compete" target="_blank" rel="noopener noreferrer">Find official event resources</a>
        </section>
      </div>
    </section>
  );
}
