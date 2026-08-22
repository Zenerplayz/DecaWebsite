"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  RotateCcw,
} from "lucide-react";
import { shuffle } from "@/data/questions";
import type { ClusterInfo, PracticeQuestion } from "@/data/types";
import { cn } from "@/lib/utils";

type Stage = "setup" | "quiz" | "results";
type DifficultyFilter = "all" | "easy" | "medium" | "hard";

const difficultyStyles: Record<PracticeQuestion["difficulty"], string> = {
  easy: "text-leaf-600",
  medium: "text-gold-700",
  hard: "text-pine-950",
};

/* Editorial small-caps group label */
const groupLabel = "text-xs font-bold uppercase tracking-[0.2em] text-gold-700";

const lengthOptions = [
  { value: 10, label: "10 questions" },
  { value: 25, label: "25 questions" },
  { value: 0, label: "All available" },
];

function scoreCopy(percent: number): string {
  if (percent >= 90) return "District champion energy.";
  if (percent >= 70) return "Strong — sharpen the details.";
  return "Every pro started here — run it again.";
}

function shuffleChoices(q: PracticeQuestion): PracticeQuestion {
  const order = shuffle([0, 1, 2, 3]);
  return {
    ...q,
    choices: order.map((i) => q.choices[i]) as PracticeQuestion["choices"],
    correctIndex: order.indexOf(q.correctIndex),
  };
}

export default function QuizClient({
  questions,
  clusters,
}: {
  questions: PracticeQuestion[];
  clusters: ClusterInfo[];
}) {
  return (
    <Suspense>
      <QuizInner questions={questions} clusters={clusters} />
    </Suspense>
  );
}

function QuizInner({
  questions,
  clusters,
}: {
  questions: PracticeQuestion[];
  clusters: ClusterInfo[];
}) {
  const searchParams = useSearchParams();
  const queryCluster = searchParams.get("cluster");
  const validCluster = clusters.some((c) => c.id === queryCluster)
    ? (queryCluster as string)
    : "all";
  const [stage, setStage] = useState<Stage>("setup");
  const [clusterId, setClusterId] = useState<string>(validCluster);
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");
  const [length, setLength] = useState<number>(10);
  const [deck, setDeck] = useState<PracticeQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [current, setCurrent] = useState<number>(0);

  const pool = useMemo(() => {
    return questions.filter(
      (q) =>
        (clusterId === "all" || q.clusterId === clusterId) &&
        (difficulty === "all" || q.difficulty === difficulty),
    );
  }, [questions, clusterId, difficulty]);

  const availableCount = pool.length;
  const plannedCount =
    length === 0 ? availableCount : Math.min(length, availableCount);

  const startQuiz = () => {
    const selected = shuffle(pool).slice(0, plannedCount).map(shuffleChoices);
    setDeck(selected);
    setAnswers({});
    setCurrent(0);
    setStage("quiz");
  };

  const finishQuiz = () => {
    setStage("results");
  };

  const retakeSameSet = () => {
    setDeck((prev) => shuffle(prev));
    setAnswers({});
    setCurrent(0);
    setStage("quiz");
  };

  const newSetup = () => {
    setStage("setup");
    setDeck([]);
    setAnswers({});
    setCurrent(0);
  };

  const selectClusterChip = (id: string) => {
    setClusterId(id);
  };

  const selectDifficulty = (d: DifficultyFilter) => {
    setDifficulty(d);
    if (length !== 0 && length > pool.length) setLength(0);
  };

  if (stage === "setup") {
    return (
      <Setup
        clusters={clusters}
        clusterId={clusterId}
        onCluster={selectClusterChip}
        difficulty={difficulty}
        onDifficulty={selectDifficulty}
        length={length}
        onLength={setLength}
        availableCount={availableCount}
        plannedCount={plannedCount}
        onStart={startQuiz}
      />
    );
  }

  if (stage === "quiz") {
    return (
      <Quiz
        deck={deck}
        answers={answers}
        current={current}
        onAnswer={(questionId, choiceIndex) =>
          setAnswers((prev) => ({ ...prev, [questionId]: choiceIndex }))
        }
        onNavigate={setCurrent}
        onFinish={finishQuiz}
      />
    );
  }

  return (
    <Results
      deck={deck}
      answers={answers}
      onRetake={retakeSameSet}
      onNewSetup={newSetup}
    />
  );
}

type SetupProps = {
  clusters: ClusterInfo[];
  clusterId: string;
  onCluster: (id: string) => void;
  difficulty: DifficultyFilter;
  onDifficulty: (d: DifficultyFilter) => void;
  length: number;
  onLength: (n: number) => void;
  availableCount: number;
  plannedCount: number;
  onStart: () => void;
};

function Setup({
  clusters,
  clusterId,
  onCluster,
  difficulty,
  onDifficulty,
  length,
  onLength,
  availableCount,
  plannedCount,
  onStart,
}: SetupProps) {
  const difficultyChips: { value: DifficultyFilter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="font-display text-3xl font-bold tracking-tight text-pine-950 sm:text-4xl">
        Build your <span className="italic text-pine-700">test</span>
      </h2>

      <div className="mt-10">
        <p className={groupLabel}>Cluster</p>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          <button
            type="button"
            aria-pressed={clusterId === "all"}
            onClick={() => onCluster("all")}
            className={cn(
              "rounded-lg border px-4 py-3 text-left transition-colors duration-200",
              clusterId === "all"
                ? "border-pine-900 bg-pine-900 text-white"
                : "border-pine-900/15 bg-white/60 text-pine-950 hover:border-pine-400",
            )}
          >
            <span className="block font-semibold">All clusters</span>
            <span
              className={cn(
                "text-sm",
                clusterId === "all" ? "text-pine-100" : "text-pine-500",
              )}
            >
              Mixed practice
            </span>
          </button>
          {clusters.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={clusterId === c.id}
              onClick={() => onCluster(c.id)}
              className={cn(
                "rounded-lg border px-4 py-3 text-left transition-colors duration-200",
                clusterId === c.id
                  ? "border-pine-900 bg-pine-900 text-white"
                  : "border-pine-900/15 bg-white/60 text-pine-950 hover:border-pine-400",
              )}
            >
              <span className="block font-semibold">{c.name}</span>
              <span
                className={cn(
                  "text-sm",
                  clusterId === c.id ? "text-pine-100" : "text-pine-500",
                )}
              >
                {c.shortName}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rule mt-10 pt-8">
        <p className={groupLabel}>Difficulty</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {difficultyChips.map((d) => (
            <button
              key={d.value}
              type="button"
              aria-pressed={difficulty === d.value}
              onClick={() => onDifficulty(d.value)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-200",
                difficulty === d.value
                  ? "border-pine-900 bg-pine-900 text-white"
                  : "border-pine-900/15 bg-transparent text-pine-700 hover:border-pine-400",
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rule mt-10 pt-8">
        <p className={groupLabel}>Length</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {lengthOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              aria-pressed={length === opt.value}
              onClick={() => onLength(opt.value)}
              disabled={opt.value !== 0 && opt.value > availableCount}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40",
                length === opt.value
                  ? "border-pine-900 bg-pine-900 text-white"
                  : "border-pine-900/15 bg-transparent text-pine-700 hover:border-pine-400",
              )}
            >
              {opt.value === 0
                ? `All available (${availableCount})`
                : `${opt.label}${opt.value > availableCount ? ` — only ${availableCount}` : ""}`}
            </button>
          ))}
        </div>
      </div>

      {availableCount < 1 ? (
        <div className="mt-12 border-l-2 border-gold-400 pl-5">
          <p className="font-semibold text-pine-950">
            No questions match those filters yet.
          </p>
          <p className="mt-1 text-sm text-pine-600">
            Try a different cluster or loosen the difficulty filter.
          </p>
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-pine-900/10 pt-8 sm:flex-row sm:items-center">
          <p className="flex items-center gap-2 text-sm text-pine-600">
            <Clock aria-hidden="true" className="h-4 w-4 text-gold-600" />
            {plannedCount} question{plannedCount === 1 ? "" : "s"} ready
          </p>
          <button type="button" onClick={onStart} className="btn-gold w-full sm:w-auto">
            Start test
          </button>
        </div>
      )}
    </div>
  );
}

type QuizProps = {
  deck: PracticeQuestion[];
  answers: Record<number, number>;
  current: number;
  onAnswer: (questionId: number, choiceIndex: number) => void;
  onNavigate: (index: number) => void;
  onFinish: () => void;
};

function Quiz({
  deck,
  answers,
  current,
  onAnswer,
  onNavigate,
  onFinish,
}: QuizProps) {
  if (deck.length === 0) {
    return (
      <div className="mx-auto max-w-3xl py-16 text-center">
        <p className="font-display text-xl font-semibold text-pine-950">
          No questions match those filters.
        </p>
        <p className="mt-2 text-sm text-pine-600">
          Head back and adjust your setup to start practicing.
        </p>
      </div>
    );
  }

  const question = deck[current];
  const answeredCount = Object.keys(answers).length;
  const percent = Math.round(((current + 1) / deck.length) * 100);
  const isLast = current === deck.length - 1;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm font-semibold text-pine-700">
          Question{" "}
          <span className="font-display text-base font-bold text-pine-950">
            {current + 1}
          </span>{" "}
          of {deck.length}
        </p>
        <p className="text-sm text-pine-500">{answeredCount} answered</p>
      </div>
      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-pine-100">
        <div
          className="h-full rounded-full bg-pine-700 transition-all duration-300"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <article className="mt-10">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-[0.15em]">
          <span className="text-pine-500">{question.category}</span>
          <span aria-hidden="true" className="text-pine-300">
            ·
          </span>
          <span className={difficultyStyles[question.difficulty]}>
            {question.difficulty}
          </span>
        </p>

        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-pine-950 sm:text-4xl">
          {question.prompt}
        </h2>

        <div className="mt-8 flex flex-col gap-2.5">
          {question.choices.map((choice, index) => {
            const selected = answers[question.id] === index;
            return (
              <button
                key={index}
                type="button"
                aria-pressed={selected}
                onClick={() => onAnswer(question.id, index)}
                className={cn(
                  "w-full rounded-lg border px-5 py-3.5 text-left transition-colors duration-200",
                  selected
                    ? "border-pine-900 bg-pine-900 text-white"
                    : "border-pine-900/15 bg-white/60 text-pine-800 hover:border-pine-400 hover:bg-white",
                )}
              >
                <span
                  className={cn(
                    "mr-4 font-display text-lg font-semibold",
                    selected ? "text-gold-300" : "text-gold-600",
                  )}
                >
                  {String.fromCharCode(65 + index)}.
                </span>
                {choice}
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between gap-3 border-t border-pine-900/10 pt-6">
          <button
            type="button"
            onClick={() => onNavigate(current - 1)}
            disabled={current === 0}
            className="btn-outline px-4 py-2 text-sm disabled:invisible"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" /> Prev
          </button>
          <button type="button" onClick={onFinish} className="text-link text-sm">
            Finish early
          </button>
          {isLast ? (
            <button type="button" onClick={onFinish} className="btn-navy px-5 py-2 text-sm">
              Submit test
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate(current + 1)}
              className="btn-outline px-4 py-2 text-sm"
            >
              Next <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
          )}
        </div>
      </article>
    </div>
  );
}

type ResultsProps = {
  deck: PracticeQuestion[];
  answers: Record<number, number>;
  onRetake: () => void;
  onNewSetup: () => void;
};

function Results({ deck, answers, onRetake, onNewSetup }: ResultsProps) {
  const correctCount = deck.filter(
    (q) => answers[q.id] === q.correctIndex,
  ).length;
  const total = deck.length;
  const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const missed = deck.filter((q) => answers[q.id] !== q.correctIndex);

  const categoryTotals = new Map<string, { correct: number; total: number }>();
  for (const q of deck) {
    const entry = categoryTotals.get(q.category) ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (answers[q.id] === q.correctIndex) entry.correct += 1;
    categoryTotals.set(q.category, entry);
  }
  const breakdown = [...categoryTotals.entries()].sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="border-b border-pine-900/10 pb-10 text-center sm:pb-12">
        <p className={groupLabel}>Your score</p>
        <p className="mt-4 font-display text-6xl font-bold tracking-tight text-pine-950 sm:text-7xl">
          {correctCount}
          <span className="text-pine-600">/{total}</span>
        </p>
        <p className="mt-4 font-display text-xl italic text-pine-700">
          {scoreCopy(percent)}
        </p>
        <p className="mt-1.5 text-sm text-pine-500">{percent}% correct</p>
      </div>

      <section className="mt-10">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pine-500">
          Breakdown by category
        </h3>
        <ul className="mt-2 divide-y divide-pine-900/10">
          {breakdown.map(([category, stat]) => (
            <li key={category} className="flex items-baseline justify-between gap-4 py-3">
              <span className="text-sm font-medium text-pine-900">{category}</span>
              <span className="font-display text-lg font-semibold text-pine-700">
                {stat.correct}
                <span className="text-pine-600">/{stat.total}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={onRetake} className="btn-gold w-full sm:w-auto">
          <RotateCcw aria-hidden="true" className="h-4 w-4" /> Retake same set
        </button>
        <button type="button" onClick={onNewSetup} className="btn-outline w-full sm:w-auto">
          New setup
        </button>
      </div>

      {missed.length > 0 && (
        <section className="mt-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pine-500">
            Review missed questions ({missed.length})
          </h3>
          <ol className="mt-2 divide-y divide-pine-900/10">
            {missed.map((q) => {
              const userChoice = answers[q.id];
              return (
                <li key={q.id} className="py-6">
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-[0.15em]">
                    <span className="text-pine-500">{q.category}</span>
                    <span aria-hidden="true" className="text-pine-300">
                      ·
                    </span>
                    <span className={difficultyStyles[q.difficulty]}>{q.difficulty}</span>
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug text-pine-950">
                    {q.prompt}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 text-sm">
                    {userChoice !== undefined ? (
                      <p className="flex items-start gap-2.5 text-pine-600">
                        <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" />
                        <span>
                          You chose:{" "}
                          <span className="line-through decoration-gold-700/60">
                            {q.choices[userChoice]}
                          </span>
                        </span>
                      </p>
                    ) : (
                      <p className="italic text-pine-500">Not answered</p>
                    )}
                    <p className="flex items-start gap-2.5 font-medium text-pine-800">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-pine-600" />
                      <span>Correct: {q.choices[q.correctIndex]}</span>
                    </p>
                  </div>
                  <p className="mt-4 border-l-2 border-gold-300 pl-4 text-sm leading-relaxed text-pine-600">
                    {q.explanation}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>
      )}

      {missed.length === 0 && total > 0 && (
        <p className="mt-12 border-t border-pine-900/10 pt-8 text-center font-display text-xl italic text-leaf-700">
          Perfect run — you missed nothing. Keep that streak alive.
        </p>
      )}
    </div>
  );
}
