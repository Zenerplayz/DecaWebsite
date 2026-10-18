import type { SocialLink, ValuePillar } from "@/data/types";

/** Default public embed id. Override with NEXT_PUBLIC_BEHOLD_FEED_ID. */
const DEFAULT_BEHOLD_FEED_ID = "9z5NZ99pscFkKMuzDq6Q";

function readBeholdFeedId() {
  const override = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID;
  const value = (override === undefined ? DEFAULT_BEHOLD_FEED_ID : override).trim();
  if (!value || value === "YOUR_BEHOLD_COLLECTION_ID") return "";
  return value;
}

export const site = {
  chapterName: "Great Oaks Sycamore DECA",
  shortName: "Sycamore DECA",
  school: "Sycamore High School",
  tagline: "Where leaders are made.",
  mission:
    "We prepare emerging leaders and entrepreneurs in marketing, finance, hospitality, and management — through competition, connection, and community.",
  googleCalendarEmbedUrl:
    "https://calendar.google.com/calendar/embed?src=ae898793d0b05de6b58f1f66d3a310fe3971304fcf43eb5c8b534488fade9400%40group.calendar.google.com&ctz=America%2FNew_York",
  // Public Behold widget id from the embed snippet — not a secret.
  // NEXT_PUBLIC_BEHOLD_FEED_ID overrides this. An empty value, or the
  // placeholder YOUR_BEHOLD_COLLECTION_ID, hides the live widget.
  beholdFeedId: readBeholdFeedId(),
  advisorName: "Mr. Steedly",
  advisorEmail: "steedlym@sycamoreschools.org",
  stats: [
    { value: "300+", label: "Active Members" },
    { value: "125", label: "State Qualifiers ’25" },
    { value: "40+", label: "ICDC Qualifiers" },
  ],
  values: [
    {
      title: "Lead",
      description:
        "Help plan meetings and chapter activities, work with other members, and practice leading a team.",
    },
    {
      title: "Compete",
      description:
        "Prepare for DECA exams, role-plays, and written events with practice and feedback.",
    },
    {
      title: "Grow",
      description:
        "Explore business careers and practice communication, problem-solving, and presentation skills.",
    },
  ] as ValuePillar[],
  socials: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/sycamore.deca/",
      handle: "@sycamore.deca",
    },
  ] as SocialLink[],
  nav: [
    { label: "About", href: "/about" },
    { label: "Calendar", href: "/calendar" },
    { label: "Compete", href: "/compete" },
    { label: "Socials", href: "/socials" },
  ],
};
