export interface Officer {
  name: string;
  role: string;
  email?: string;
  photo?: string;
  blurb?: string;
}

export type EventType = "meeting" | "competition" | "deadline" | "social";

export interface ChapterEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  description: string;
}

export type DecaEventCategory =
  | "Principles"
  | "Series"
  | "Team Decision Making"
  | "Written"
  | "Online Exam";

export interface DecaEvent {
  name: string;
  code?: string;
  category: DecaEventCategory;
}

export interface ClusterInfo {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  examTopics: string[];
  events: DecaEvent[];
  tips: string[];
}

export interface PracticeQuestion {
  id: number;
  clusterId: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  prompt: string;
  choices: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export interface RubricScore {
  dimension: string;
  score: number;
}

export interface RoleplayScenario {
  id: string;
  clusterId: string;
  title: string;
  situation: string[];
  indicators: string[];
  demoFeedback: {
    scores: RubricScore[];
    strengths: string[];
    improvements: string[];
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HighlightPost {
  id: string;
  platform: "Instagram" | "TikTok" | "X";
  date: string;
  tag: string;
  title: string;
  blurb: string;
}

export interface ValuePillar {
  title: string;
  description: string;
}

export interface GuideStep {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: "Instagram" | "TikTok" | "X";
  url: string;
  handle: string;
}
