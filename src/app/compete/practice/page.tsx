import type { Metadata } from "next";
import { practiceQuestions } from "@/data/questions";
import { clusters } from "@/data/content";
import QuizClient from "./quiz-client";

export const metadata: Metadata = { title: "Practice Tests" };

export default function PracticePage() {
  return (
    <section className="pt-16">
      <div className="container-page py-16">
        <div className="max-w-2xl">
          <span className="eyebrow">Competition Prep</span>
          <h1 className="font-display text-4xl font-bold tracking-tight text-pine-950 sm:text-5xl">
            Practice <span className="italic text-pine-700">tests</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-pine-600">
            Sharpen your cluster knowledge with realistic DECA-style questions and
            instant scoring. Pick a cluster, choose a length, and see how you stack up.
          </p>
        </div>
        <div className="mt-14 border-t border-pine-900/10 pt-12">
          <QuizClient questions={practiceQuestions} clusters={clusters} />
        </div>
      </div>
    </section>
  );
}
