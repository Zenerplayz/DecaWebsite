export interface Officer {
  name: string;
  role: string;
  email?: string;
  photo?: string;
  blurb?: string;
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

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ValuePillar {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: "Instagram" | "TikTok" | "X";
  url: string;
  handle: string;
}

export interface ChapterPhoto {
  src: string;
  alt: string;
  /** Instagram post URL, when the photo came from the @sycamore.deca feed. */
  permalink?: string;
}
