import type { Metadata } from "next";

export const siteUrl = "https://sycamoredeca.com";

type SeoRoute = {
  title: string;
  description: string;
};

/**
 * Single source of truth for per-page SEO metadata.
 * To update a page's search listing, edit (or add) an entry here —
 * no layout or component changes needed.
 */
export const seoRoutes = {
  "/": {
    title: "Great Sycamore DECA — Lead. Compete. Serve.",
    description:
      "Great Sycamore DECA is the DECA chapter at Sycamore High School in Cincinnati, Ohio. Chapter info, event calendar, competition prep, and practice tests for members and future members.",
  },
  "/about": {
    title: "About",
    description:
      "Meet Great Sycamore DECA — the DECA chapter at Sycamore High School in Cincinnati, Ohio. Our mission, values, officer team, and chapter advisor Mr. Steedly.",
  },
  "/calendar": {
    title: "Calendar",
    description:
      "Sycamore DECA meeting dates and upcoming events for the Sycamore High School DECA chapter, including Ohio DECA district, state, and international competition dates.",
  },
  "/compete": {
    title: "Compete",
    description:
      "DECA competition prep from Sycamore DECA in Ohio — cluster guides for marketing, finance, hospitality & tourism, entrepreneurship, and business management events.",
  },
  "/compete/practice": {
    title: "Practice Tests",
    description:
      "Free DECA practice test questions from Sycamore DECA — marketing, finance, hospitality, entrepreneurship, and business management exam prep for Ohio DECA competitors.",
  },
  "/compete/roleplay": {
    title: "Role-Play Training",
    description:
      "How DECA role-play events work: judge what to expect, performance indicators, and preparation strategy from Sycamore DECA, Sycamore High School's chapter in Cincinnati, Ohio.",
  },
  "/join": {
    title: "Join",
    description:
      "How to join Sycamore DECA — the DECA chapter at Sycamore High School in Cincinnati, Ohio. Membership steps, meeting info, and answers to common questions.",
  },
  "/socials": {
    title: "Socials",
    description:
      "Follow Sycamore DECA on Instagram @sycamore.deca — photos and updates from the Sycamore High School DECA chapter in Cincinnati, Ohio.",
  },
} satisfies Record<string, SeoRoute>;

/** Build Next.js metadata for a route listed in `seoRoutes`. */
export function pageMetadata(route: keyof typeof seoRoutes): Metadata {
  const { title, description } = seoRoutes[route];
  return {
    title,
    description,
    alternates: {
      canonical: route === "/" ? "/" : route,
    },
    openGraph: {
      title,
      description,
      url: route,
      siteName: "Great Sycamore DECA",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
