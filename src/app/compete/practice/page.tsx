import type { Metadata } from "next";
import { practiceQuestions } from "@/data/questions";
import { clusters } from "@/data/content";
import QuizClient from "./quiz-client";

export const metadata: Metadata = { title: "Practice Tests" };

export default function PracticePage() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Competition Prep</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Practice tests
          </h1>
          <p className="mt-4 text-lg text-pine-600">
            Sharpen your cluster knowledge with realistic DECA-style questions and
            instant scoring. Pick a cluster, choose a length, and see how you stack up.
          </p>
        </div>
        <div className="mt-12">
          <QuizClient questions={practiceQuestions} clusters={clusters} />
        </div>
      </div>
    </section>
  );
}
