import type { SocialLink, ValuePillar } from "@/data/types";

export const site = {
  chapterName: "Great Sycamore DECA",
  shortName: "Sycamore DECA",
  school: "Sycamore High School",
  tagline: "Where leaders are made.",
  mission:
    "We prepare emerging leaders and entrepreneurs in marketing, finance, hospitality, and management — through competition, connection, and community.",
  googleCalendarEmbedUrl:
    "https://calendar.google.com/calendar/embed?src=ae898793d0b05de6b58f1f66d3a310fe3971304fcf43eb5c8b534488fade9400%40group.calendar.google.com&ctz=America%2FNew_York",
  beholdFeedId: "9z5NZ99pscFkKMuzDq6Q",
  advisorName: "Mr. Steedly",
  advisorEmail: "steedlym@sycamoreschools.org",
  stats: [
    { value: "150+", label: "Active Members" },
    { value: "125", label: "State Qualifiers ’25" },
    { value: "40+", label: "ICDC Qualifiers" },
  ],
  values: [
    {
      title: "Lead",
      description:
        "Officers, committee chairs, and classroom leaders — we build the confidence to take the front of the room.",
    },
    {
      title: "Compete",
      description:
        "From role-plays to written events, we train like athletes and show up ready on competition day.",
    },
    {
      title: "Serve",
      description:
        "We give back through community partnerships and fundraisers that make our chapter proud.",
    },
  ] as ValuePillar[],
  socials: [
    {
      platform: "Instagram",
      url: "https://instagram.com/sycamore.deca",
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
