"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Trophy,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { shuffle } from "@/data/questions";
import type { ClusterInfo, PracticeQuestion } from "@/data/types";

type Stage = "setup" | "quiz" | "results";
type DifficultyFilter = "all" | "easy" | "medium" | "hard";

const difficultyStyles: Record<PracticeQuestion["difficulty"], string> = {
  easy: "bg-leaf-100 text-leaf-700",
  medium: "bg-gold-100 text-gold-700",
  hard: "bg-pine-950 text-white",
};

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
    <div className="card mx-auto max-w-3xl p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-gold-500" />
        <h2 className="font-display text-xl font-bold text-pine-950">
          Build your test
        </h2>
      </div>

      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-pine-600">
        Cluster
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onCluster("all")}
          className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
            clusterId === "all"
              ? "border-gold-500 bg-gold-50 ring-2 ring-gold-500"
              : "border-pine-200 bg-white hover:border-pine-400 hover:bg-pine-50"
          }`}
        >
          <span className="block font-semibold text-pine-950">All clusters</span>
          <span className="text-sm text-pine-600">Mixed practice</span>
        </button>
        {clusters.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onCluster(c.id)}
            className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
              clusterId === c.id
                ? "border-gold-500 bg-gold-50 ring-2 ring-gold-500"
                : "border-pine-200 bg-white hover:border-pine-400 hover:bg-pine-50"
            }`}
          >
            <span className="block font-semibold text-pine-950">{c.name}</span>
            <span className="text-sm text-pine-600">{c.shortName}</span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-pine-600">
        Difficulty
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {difficultyChips.map((d) => (
          <button
            key={d.value}
            type="button"
            onClick={() => onDifficulty(d.value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
              difficulty === d.value
                ? "border-pine-900 bg-pine-900 text-white"
                : "border-pine-200 bg-white text-pine-700 hover:border-pine-400 hover:bg-pine-50"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-pine-600">
        Length
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {lengthOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onLength(opt.value)}
            disabled={opt.value !== 0 && opt.value > availableCount}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${
              length === opt.value
                ? "border-pine-900 bg-pine-900 text-white"
                : "border-pine-200 bg-white text-pine-700 hover:border-pine-400 hover:bg-pine-50"
            }`}
          >
            {opt.value === 0
              ? `All available (${availableCount})`
              : `${opt.label}${opt.value > availableCount ? ` — only ${availableCount}` : ""}`}
          </button>
        ))}
      </div>

      {availableCount < 1 ? (
        <div className="mt-8 rounded-xl border border-dashed border-pine-200 bg-pine-50 p-6 text-center">
          <p className="font-semibold text-pine-950">
            No questions match those filters yet.
          </p>
          <p className="mt-1 text-sm text-pine-600">
            Try a different cluster or loosen the difficulty filter.
          </p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-2 text-sm text-pine-600">
            <Clock className="h-4 w-4 text-gold-500" />
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
      <div className="card mx-auto max-w-3xl p-8 text-center">
        <p className="font-semibold text-pine-950">
          No questions match those filters.
        </p>
        <p className="mt-1 text-sm text-pine-600">
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
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-pine-700">
          Question {current + 1} of {deck.length}
        </p>
        <p className="text-sm text-pine-600">{answeredCount} answered</p>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-pine-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pine-600 to-pine-400 transition-all duration-300"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className="card mt-6 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge bg-pine-100 text-pine-700">{question.category}</span>
          <span className={`badge ${difficultyStyles[question.difficulty]}`}>
            {question.difficulty}
          </span>
        </div>

        <h2 className="mt-4 font-display text-xl font-bold leading-snug text-pine-950 sm:text-2xl">
          {question.prompt}
        </h2>

        <div className="mt-6 flex flex-col gap-3">
          {question.choices.map((choice, index) => {
            const selected = answers[question.id] === index;
            return (
              <button
                key={index}
                type="button"
                aria-pressed={selected}
                onClick={() => onAnswer(question.id, index)}
                className={`w-full rounded-xl border px-4 py-3 text-left font-medium transition-all duration-200 ${
                  selected
                    ? "border-gold-500 bg-gold-50 ring-2 ring-gold-500 text-pine-950"
                    : "border-pine-200 bg-white text-pine-800 hover:border-pine-400 hover:bg-pine-50"
                }`}
              >
                <span className="mr-3 font-bold text-gold-600">
                  {String.fromCharCode(65 + index)}.
                </span>
                {choice}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onNavigate(current - 1)}
            disabled={current === 0}
            className="btn-outline px-4 py-2 text-sm disabled:invisible"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </button>
          <button
            type="button"
            onClick={onFinish}
            className="text-sm font-semibold text-pine-600 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
          >
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
              Next <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
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
      <div className="card overflow-hidden">
        <div className="bg-gradient-to-br from-pine-900 to-pine-700 px-6 py-10 text-center sm:px-10">
          <Trophy className="mx-auto h-10 w-10 text-gold-300" />
          <p className="mt-4 font-display text-5xl font-bold text-white sm:text-6xl">
            {correctCount}/{total}
          </p>
          <p className="mt-2 text-lg font-semibold text-gold-300">{percent}%</p>
          <p className="mt-3 text-base text-pine-100">{scoreCopy(percent)}</p>
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold text-pine-950">
            Breakdown by category
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {breakdown.map(([category, stat]) => {
              const pct = Math.round((stat.correct / stat.total) * 100);
              return (
                <div key={category}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-pine-800">{category}</span>
                    <span className="text-pine-600">
                      {stat.correct}/{stat.total}
                    </span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-pine-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={onRetake} className="btn-gold w-full sm:w-auto">
              <RotateCcw className="h-4 w-4" /> Retake same set
            </button>
            <button type="button" onClick={onNewSetup} className="btn-outline w-full sm:w-auto">
              New setup
            </button>
          </div>
        </div>
      </div>

      {missed.length > 0 && (
        <div className="mt-8">
          <h3 className="font-display text-lg font-bold text-pine-950">
            Review missed questions ({missed.length})
          </h3>
          <div className="mt-4 flex flex-col gap-4">
            {missed.map((q) => {
              const userChoice = answers[q.id];
              return (
                <div key={q.id} className="card p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge bg-pine-100 text-pine-700">{q.category}</span>
                    <span className={`badge ${difficultyStyles[q.difficulty]}`}>
                      {q.difficulty}
                    </span>
                  </div>
                  <p className="mt-3 font-semibold leading-snug text-pine-950">
                    {q.prompt}
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    {userChoice !== undefined && (
                      <div className="flex items-start gap-2 rounded-xl border border-pine-200 bg-white px-3 py-2">
                        <span className="badge bg-pine-900 text-white">
                          <X className="h-3 w-3" /> Your answer
                        </span>
                        <span className="text-sm text-pine-800 line-through decoration-gold-700/60">
                          {q.choices[userChoice]}
                        </span>
                      </div>
                    )}
                    {userChoice === undefined && (
                      <p className="text-sm italic text-pine-600">Not answered</p>
                    )}
                    <div className="flex items-start gap-2 rounded-xl border border-leaf-200 bg-leaf-50 px-3 py-2">
                      <span className="badge bg-leaf-600 text-white">
                        <Check className="h-3 w-3" /> Correct
                      </span>
                      <span className="text-sm font-medium text-leaf-700">
                        {q.choices[q.correctIndex]}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 rounded-xl bg-pine-50 px-4 py-3 text-sm leading-relaxed text-pine-700">
                    {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {missed.length === 0 && total > 0 && (
        <p className="card mt-8 p-6 text-center font-semibold text-leaf-700">
          Perfect run — you missed nothing. Keep that streak alive.
        </p>
      )}
    </div>
  );
}
