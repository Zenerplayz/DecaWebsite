import type {
  ClusterInfo,
  FaqItem,
  Officer,
} from "@/data/types";

export const officers: Officer[] = [
  { name: "Alp O", role: "President" },
  { name: "Kat S", role: "VP of Marketing" },
  { name: "Myra S", role: "VP of Partnerships" },
  { name: "Brooke R", role: "VP of Community Outreach" },
  { name: "Lauren R", role: "VP of Competition" },
  { name: "Sam X", role: "VP of Leadership Development" },
  { name: "Alex S", role: "Marketing Associate" },
  { name: "Eric K", role: "Partnership Associate" },
  { name: "Caitlin M", role: "Community Outreach Associate" },
  { name: "Polina C", role: "Competition Associate" },
  { name: "Maya M", role: "Leadership Development Associate" },
  { name: "Vihaan J", role: "Executive Associate" },
  { name: "Sebi S", role: "Operations Associate" },
];

export const clusters: ClusterInfo[] = [
  {
    id: "business-management",
    name: "Business Management + Administration",
    shortName: "Management",
    tagline: "Run the business.",
    description:
      "Management, operations, HR, and strategy events for students who want to lead organizations.",
    icon: "briefcase",
    examTopics: [
      "Management functions",
      "Business law basics",
      "Human resources",
      "Operations management",
      "Ethics & corporate responsibility",
      "Strategic planning",
    ],
    events: [
      { name: "Principles of Business Management", code: "PBM", category: "Principles" },
      { name: "Business Services Marketing Series", category: "Series" },
      { name: "Business Law & Ethics Team Decision Making", category: "Team Decision Making" },
    ],
    tips: [
      "Anchor every answer in the performance indicators.",
      "Use business vocabulary judges expect to hear.",
      "Structure answers as problem → solution → result.",
    ],
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    shortName: "Entrepreneurship",
    tagline: "Build it from nothing.",
    description:
      "For future founders — start-up planning, innovation, and growth strategy events.",
    icon: "lightbulb",
    examTopics: [
      "Opportunity recognition",
      "Business plans & models",
      "Marketing for startups",
      "Financial projections",
      "Risk management",
      "Growth strategies",
    ],
    events: [
      { name: "Principles of Entrepreneurship", code: "PET", category: "Principles" },
      { name: "Start-Up Business Plan", category: "Written" },
      { name: "Independent Business Plan", category: "Written" },
    ],
    tips: [
      "Know your numbers — judges always ask about costs.",
      "Pitch like you already own the business.",
      "Show a clear path from idea to revenue.",
    ],
  },
  {
    id: "finance",
    name: "Finance",
    shortName: "Finance",
    tagline: "Master the money.",
    description:
      "Accounting, banking, personal finance, and investment events for number-minded competitors.",
    icon: "piggy-bank",
    examTopics: [
      "Accounting fundamentals",
      "Personal finance",
      "Banking & credit",
      "Investments & risk",
      "Financial statements",
      "Regulation & ethics",
    ],
    events: [
      { name: "Principles of Finance", code: "PFN", category: "Principles" },
      { name: "Business Finance Series", code: "BFS", category: "Series" },
      { name: "Accounting Applications", category: "Team Decision Making" },
    ],
    tips: [
      "Double-check units — dollars vs percentages trip people up.",
      "Explain the ‘why’ behind every recommendation.",
      "Practice reading financial statements quickly.",
    ],
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality + Tourism",
    shortName: "Hospitality",
    tagline: "Create the experience.",
    description:
      "Hotel, restaurant, travel, and event management events for service-minded leaders.",
    icon: "plane",
    examTopics: [
      "Guest service excellence",
      "Hotel & lodging operations",
      "Food service management",
      "Travel & tourism trends",
      "Event planning",
      "Safety & sanitation",
    ],
    events: [
      { name: "Principles of Hospitality", code: "PHI", category: "Principles" },
      { name: "Quick Serve Restaurant Management", code: "QSRM", category: "Series" },
      { name: "Hotel & Lodging Management", code: "HLM", category: "Series" },
    ],
    tips: [
      "Lead with customer experience in every answer.",
      "Know service recovery steps cold.",
      "Smile and energy count — hospitality judges notice.",
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    shortName: "Marketing",
    tagline: "Sell the story.",
    description:
      "Retail, sports, entertainment, and communications events for creative competitors who close.",
    icon: "megaphone",
    examTopics: [
      "Marketing mix (4 Ps)",
      "Consumer behavior",
      "Market research",
      "Pricing & promotion",
      "Selling process",
      "Digital & social media marketing",
    ],
    events: [
      { name: "Principles of Marketing", code: "PMK", category: "Principles" },
      { name: "Retail Merchandising Series", code: "RMS", category: "Series" },
      { name: "Sports & Entertainment Marketing", code: "SEM", category: "Series" },
      { name: "Travel & Tourism Management", code: "TMD", category: "Series" },
    ],
    tips: [
      "Open strong — your first 30 seconds set the tone.",
      "Always tie recommendations back to the target market.",
      "Close with a clear call to action, then stop talking.",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Who can join Sycamore DECA?",
    answer:
      "Any Sycamore High School student, grades 9–12, who is taking (or has taken) a marketing class.",
  },
  {
    question: "When and where do we meet?",
    answer: "Meeting dates, times, and locations are posted on our Calendar page.",
  },
  {
    question: "Do I have to compete?",
    answer:
      "Competition is the heart of DECA, so part of being in DECA is competing!",
  },
  {
    question: "What is a role-play event?",
    answer:
      "You get a real-world business scenario and ~10 minutes to prepare, then present your solution to a judge using listed performance indicators.",
  },
  {
    question: "How do I sign up?",
    answer: "Visit Mr. Steedly’s room in the marketing wing — he’ll get you registered.",
  },
];
