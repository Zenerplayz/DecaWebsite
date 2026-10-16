import type { PracticeQuestion } from "@/data/types";

export type QuizAttempt = {
  deck: PracticeQuestion[];
  answers: Record<number, number>;
  current: number;
};

export function serializeQuizAttempt({ deck, answers, current }: QuizAttempt): string {
  return JSON.stringify({
    version: 1,
    deck: deck.map(({ id, prompt, choices }) => ({ id, prompt, choices })),
    answers,
    current,
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Rebuild explanations and grading from the current question bank while keeping
// the saved choice order. Discard stale or malformed attempts instead of grading
// a different question or attaching an answer to a different choice.
export function parseQuizAttempt(
  raw: string | null,
  questions: PracticeQuestion[],
): QuizAttempt | null {
  if (!raw) return null;
  try {
    const saved: unknown = JSON.parse(raw);
    if (
      !isRecord(saved) || saved.version !== 1 ||
      !Array.isArray(saved.deck) || saved.deck.length === 0 ||
      saved.deck.length > questions.length || !isRecord(saved.answers) ||
      !Number.isInteger(saved.current) || typeof saved.current !== "number" ||
      saved.current < 0 || saved.current >= saved.deck.length
    ) return null;

    const bank = new Map(questions.map((question) => [question.id, question]));
    const ids = new Set<number>();
    const deck: PracticeQuestion[] = [];
    for (const entry of saved.deck) {
      if (!isRecord(entry) || typeof entry.id !== "number" || ids.has(entry.id)) return null;
      const question = bank.get(entry.id);
      if (
        !question || entry.prompt !== question.prompt ||
        !Array.isArray(entry.choices) || entry.choices.length !== 4 ||
        !entry.choices.every((choice) => typeof choice === "string") ||
        JSON.stringify([...entry.choices].sort()) !== JSON.stringify([...question.choices].sort())
      ) return null;
      ids.add(entry.id);
      const choices = entry.choices as PracticeQuestion["choices"];
      deck.push({
        ...question,
        choices,
        correctIndex: choices.indexOf(question.choices[question.correctIndex]),
      });
    }

    const answers: Record<number, number> = {};
    for (const [id, choice] of Object.entries(saved.answers)) {
      if (
        !ids.has(Number(id)) || String(Number(id)) !== id ||
        typeof choice !== "number" || !Number.isInteger(choice) || choice < 0 || choice > 3
      ) return null;
      answers[Number(id)] = choice;
    }
    return { deck, answers, current: saved.current };
  } catch {
    return null;
  }
}
