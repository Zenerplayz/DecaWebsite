import type { PracticeQuestion } from "@/data/types";
import { businessManagementQuestions } from "@/data/questions/business-management";
import { entrepreneurshipQuestions } from "@/data/questions/entrepreneurship";
import { financeQuestions } from "@/data/questions/finance";
import { hospitalityQuestions } from "@/data/questions/hospitality-tourism";
import { marketingQuestions } from "@/data/questions/marketing";

export const practiceQuestions: PracticeQuestion[] = [
  ...businessManagementQuestions,
  ...entrepreneurshipQuestions,
  ...financeQuestions,
  ...hospitalityQuestions,
  ...marketingQuestions,
];

export function getClusterQuestions(clusterId: string): PracticeQuestion[] {
  return practiceQuestions.filter((q) => q.clusterId === clusterId);
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
