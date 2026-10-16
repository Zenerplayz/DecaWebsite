import { practiceQuestions } from "@/data/questions";
import { clusters } from "@/data/content";
import QuizClient from "./quiz-client";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/compete/practice");

export default function PracticePage() {
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
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
      </div>
    </section>
  );
}
