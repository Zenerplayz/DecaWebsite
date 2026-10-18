import PageSeo from "@/components/page-seo";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChartColumn,
  Map,
  Newspaper,
  PieChart,
  Smartphone,
  Timer,
  WholeWord,
  type LucideIcon,
} from "lucide-react";
import { pageMetadata } from "@/data/seo";
import { site } from "@/data/site";

export const metadata = pageMetadata("/compete/roleplay");

const decaPlusLogin = "https://decaplus.org/login";
const workshopSlides =
  "https://docs.google.com/presentation/d/1bAxmFu66hm7qFux0iGjk-Pn9RgFpfZoTovS8yh4NKoQ/edit?usp=sharing";
const eliVideo =
  "https://drive.google.com/file/d/1gS7DO_D3k33qXiFfe8JwpTW5DuutLulb/view?usp=sharing";
const alpVideo =
  "https://drive.google.com/file/d/1NfyqZazMM68wk3Owc1_V85nmJZ_873YM/view?usp=sharing";
const laurenVideo =
  "https://drive.google.com/file/d/13puJgaYfgxv-KUnx0eSEQpCrQOsbdIDK/view";
const testWorkshopSlides =
  "https://docs.google.com/presentation/d/1c_Xbf2Z6ZHlc7Sby5iShcIZ5OJpWW6hO9Pl6PhZCRqo/edit?usp=sharing";

const formatStats = [
  {
    value: "10",
    unit: "min",
    label: "Individual-event example",
    detail:
      "Many individual role-play events allow ten minutes of preparation. Check your event's current guidelines.",
  },
  {
    value: "30 + 15",
    unit: "min",
    label: "Team decision making",
    detail:
      "FTDM allows thirty minutes to prepare and fifteen minutes for the interview, including judge questions.",
  },
  {
    value: "5",
    unit: "habits",
    label: "Practice focus",
    detail:
      "The five coaching areas below help you rehearse. They are not an official five-criterion DECA scorecard.",
  },
];

type StepLink = {
  href: string;
  label: string;
  schoolLogin?: boolean;
};

type WorkflowStep = {
  title: string;
  body: string;
  links?: StepLink[];
  callout?: string;
  advisor?: boolean;
};

const workflow: WorkflowStep[] = [
  {
    title: "Log in to DECA+",
    body: "Open DECA+ and sign in with the chapter login.",
    advisor: true,
    links: [{ href: decaPlusLogin, label: "DECA+ login" }],
  },
  {
    title: "Open your event",
    body: 'Click "Competitive Events," scroll, and pick your event. Each event page lists the guidelines, performance indicators, exam, prep time, and interview time.',
    callout:
      "If you have not picked an event yet, you cannot join mentoring. Check your email or ask an officer for the current event selection form.",
  },
  {
    title: "Go to “The Role-Play”",
    body: "Scroll down the event page and select The Role-Play.",
  },
  {
    title: "Download Sample Role-Play 1",
    body: "On the left-hand side, download Sample Role-Play 1.",
  },
  {
    title: "Watch how to prepare a role-play",
    body: "Watch Alp's video, then start your own outline.",
    links: [
      {
        href: alpVideo,
        label: "Alp: how to prepare a role-play",
        schoolLogin: true,
      },
    ],
  },
  {
    title: "Outline on a blank sheet of paper",
    body: "Use one page with six boxes: an introduction, four indicators, and a conclusion.",
    links: [{ href: "#outline", label: "See the outline template" }],
  },
  {
    title: "Learn your indicators",
    body: "Use DECA+ and the other resources on this page to understand the performance indicators, and tie each one into your solution.",
  },
  {
    title: "Re-watch an example",
    body: "Watch Eli's role-play, then review the sample role-plays on DECA+.",
    links: [{ href: eliVideo, label: "Eli's role-play video" }],
  },
  {
    title: "Prepare your role-play, including visuals",
    body: "Collaborating with people in the same event is fine. Come up with a unique, creative solution of your own.",
    links: [{ href: "#visuals", label: "See visuals that work" }],
  },
  {
    title: "Ask your mentor",
    body: "Ask questions while you are still preparing, before you present at mentoring.",
  },
  {
    title: "Bring your finished role-play to mentoring",
    body: "Business attire is not required for mentoring sessions.",
  },
];

const outlineBoxes: { title: string; body: string; script?: string }[] = [
  {
    title: "Intro",
    script: "Hi, my name is ___ and I am the [position] @ [company].",
    body: "Then summarize the solution and what you will discuss.",
  },
  {
    title: "Indicator #1",
    body: "Write the indicator out fully so you restate it, then add bullet points with elaboration and definitions.",
  },
  {
    title: "Indicator #2",
    body: "Same pattern: restate the indicator in full, then list the points you will make.",
  },
  {
    title: "Indicator #3",
    body: "Same pattern: restate the indicator in full, then list the points you will make.",
  },
  {
    title: "Indicator #4",
    body: "Same pattern: restate the indicator in full, then list the points you will make.",
  },
  {
    title: "Conclusion",
    body: "Wrap up your final points and thank the judges.",
  },
];

const workshopNotes = [
  "Introduce yourself with your first and last name and your position @ company.",
  "Summarize the question the prompt asked you to answer, then begin.",
  'State each indicator, for example: "Explain the nature of a promotional plan."',
  "Use DECA buzzwords such as touchpoints and customer relations.",
  "Use visuals: graphs, flyers, and similar aids.",
  "Elaborate on your ideas and how you would implement them.",
  "Reference other companies to strengthen your points (for example, Chick-fil-A).",
  "Close with a strong conclusion that leaves a lasting impression.",
];

type RubricRow = {
  n: number;
  ability: string;
  novice: string;
  developing: string;
  proficient: string;
  exemplary: string;
};

const rubricGroups: { label: string; rows: RubricRow[] }[] = [
  {
    label: "Performance indicators (example event's 4 PIs)",
    rows: [
      {
        n: 1,
        ability: "Distinguish between economic goods and services",
        novice: "0-3",
        developing: "4-7",
        proficient: "8-11",
        exemplary: "12",
      },
      {
        n: 2,
        ability: "Describe the functions of prices in markets",
        novice: "0-3",
        developing: "4-7",
        proficient: "8-11",
        exemplary: "12",
      },
      {
        n: 3,
        ability: "Explain the principles of supply and demand",
        novice: "0-3",
        developing: "4-7",
        proficient: "8-11",
        exemplary: "12",
      },
      {
        n: 4,
        ability: "Explain the concept of competition",
        novice: "0-3",
        developing: "4-7",
        proficient: "8-11",
        exemplary: "12",
      },
    ],
  },
  {
    label: "Solution",
    rows: [
      {
        n: 5,
        ability: "Unique: original thinking, fresh perspectives, insightful approach",
        novice: "0-2",
        developing: "3-5",
        proficient: "6-7",
        exemplary: "8",
      },
      {
        n: 6,
        ability: "Practical: actionable/viable solution in a real-world context",
        novice: "0-2",
        developing: "3-5",
        proficient: "6-7",
        exemplary: "8",
      },
      {
        n: 7,
        ability: "Effective: solution that achieves relevant outcomes",
        novice: "0-2",
        developing: "3-5",
        proficient: "6-7",
        exemplary: "8",
      },
    ],
  },
  {
    label: "Career competencies",
    rows: [
      {
        n: 8,
        ability: "Critical thinking: think critically to understand and solve problems",
        novice: "0-1",
        developing: "2-3",
        proficient: "4-5",
        exemplary: "6",
      },
      {
        n: 9,
        ability: "Communication: communicate clearly, effectively and with reason",
        novice: "0-1",
        developing: "2-3",
        proficient: "4-5",
        exemplary: "6",
      },
      {
        n: 10,
        ability: "Decision making: consider the impacts of decisions",
        novice: "0-1",
        developing: "2-3",
        proficient: "4-5",
        exemplary: "6",
      },
    ],
  },
  {
    label: "Overall impression",
    rows: [
      {
        n: 11,
        ability:
          "Overall career readiness through professionalism, poise and confidence",
        novice: "0-3",
        developing: "4-6",
        proficient: "7-9",
        exemplary: "10",
      },
    ],
  },
];

const visuals: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Pie chart",
    body: "Stats or demographics, such as a male and female split.",
    icon: PieChart,
  },
  {
    title: "Bar chart",
    body: "Target markets, such as an amount by age group.",
    icon: ChartColumn,
  },
  {
    title: "Instagram post mock-up",
    body: "A promotion shown as a social post.",
    icon: Smartphone,
  },
  {
    title: "Flyer / survey",
    body: "A handout for sharing information.",
    icon: Newspaper,
  },
  {
    title: "Store map",
    body: "Logistics. Show the layout and the new plan: door, product aisles, and checkout.",
    icon: Map,
  },
  {
    title: "Acronyms",
    body: "Get the point across in a few letters. Example: R.A.C.E. — Relationship building, Application, Communication, Empathy.",
    icon: WholeWord,
  },
];

const prepPlan = [
  {
    title: "Read the performance indicators first",
    body: "Before anything else, scan the indicator list so you know exactly what the judge is listening for.",
  },
  {
    title: "Skim the case twice",
    body: "First pass for the big picture, second pass to underline key facts, numbers, and constraints.",
  },
  {
    title: "Outline opener, three main points, close",
    body: "Decide your opening statement, group your solution into three points, and plan how you will end.",
  },
  {
    title: "Assign evidence to each point",
    body: "Attach a specific case fact or number to every main point so nothing sounds like an opinion.",
  },
  {
    title: "Rehearse your opener once",
    body: "Say your first thirty seconds out loud. A strong start calms nerves and sets the tone.",
  },
  {
    title: "Breathe",
    body: "Take one slow breath before you knock. Composure reads as confidence to the judge.",
  },
];

const sampleIndicators = [
  "Explain the nature of customer complaint handling.",
  "Demonstrate a customer-service mindset.",
  "Apply active-listening techniques.",
  "Offer a resolution that protects the store's policies.",
  "Determine ways to retain the customer after the issue.",
];

type GuideResource = {
  title: string;
  href: string;
  detail: string;
  schoolLogin?: boolean;
  advisor?: boolean;
};

const resources: GuideResource[] = [
  {
    title: "Role-play workshop slides",
    href: workshopSlides,
    detail: "Lauren and Polina. Publicly viewable.",
  },
  {
    title: "Eli's role-play video",
    href: eliVideo,
    detail: "Publicly viewable.",
  },
  {
    title: "Alp: how to prepare a role-play",
    href: alpVideo,
    detail: "Needs a school login",
    schoolLogin: true,
  },
  {
    title: "Lauren's role-play video",
    href: laurenVideo,
    detail: "Needs a school login",
    schoolLogin: true,
  },
  {
    title: "Test workshop slides",
    href: testWorkshopSlides,
    detail: "Needs a school login",
    schoolLogin: true,
  },
  {
    title: "DECA+ login",
    href: decaPlusLogin,
    detail: "Get the chapter login from",
    advisor: true,
  },
];

function AdvisorLink() {
  return (
    <a href={`mailto:${site.advisorEmail}`} className="text-link">
      {site.advisorName}
    </a>
  );
}

function ExternalOrHashLink({ link }: { link: StepLink }) {
  const external = link.href.startsWith("http");
  return (
    <span className="mt-3 flex flex-col items-start gap-1">
      <a
        href={link.href}
        className="text-link"
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {link.label}
        {external ? (
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        ) : null}
      </a>
      {link.schoolLogin ? (
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-gold-800">
          Needs a school login
        </span>
      ) : null}
    </span>
  );
}

function SectionHeader({
  num,
  kicker,
  title,
  lead,
  id,
}: {
  num: string;
  kicker: string;
  title: string;
  lead?: string;
  id?: string;
}) {
  return (
    <header className="relative">
      <span
        aria-hidden="true"
        className="ghost-numeral absolute -top-8 right-0 hidden select-none lg:block"
      >
        {num}
      </span>
      <p className="eyebrow">
        {num} · {kicker}
      </p>
      <h2
        id={id}
        className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-pine-950 sm:text-4xl"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-pine-600">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

export default function Roleplay() {
  return (
    <section className="pt-16">
      <div className="container-page py-10 sm:py-12">
        <PageSeo route="/compete/roleplay" />
        <header>
          <h1 className="page-title max-w-3xl">Role-play preparation</h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-pine-700">
            Build a clear response, apply the case facts and rehearse your
            presentation. Preparation time, interview length and scoring vary
            by event. Your current official guidelines and judge&apos;s form are
            authoritative.
          </p>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-pine-600">
            Check the{" "}
            <a
              className="text-link"
              href="https://www.deca.org/compete"
              target="_blank"
              rel="noopener noreferrer"
            >
              official event directory
            </a>{" "}
            for your event. The{" "}
            <a
              className="text-link"
              href="https://www.deca.org/compete/financial-services-team-decision-making"
              target="_blank"
              rel="noopener noreferrer"
            >
              FTDM guidelines
            </a>{" "}
            specify 30-minute preparation and a 15-minute interview.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 divide-y divide-pine-900/10 border-y border-pine-900/10 sm:mt-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {formatStats.map((s) => (
            <li key={s.label} className="py-7 sm:px-8 sm:py-9 sm:first:pl-0">
              <p className="font-display text-5xl font-semibold tracking-tight text-pine-950">
                {s.value}
                <span className="ml-1 font-display text-2xl font-medium italic text-pine-600">
                  {" "}
                  {s.unit}
                </span>
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
                {s.label}
              </p>
              <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-pine-600">
                {s.detail}
              </p>
            </li>
          ))}
        </ul>

        <article
          id="workflow"
          aria-labelledby="workflow-heading"
          className="mt-24 scroll-mt-28 border-t border-pine-900/10 pt-14"
        >
          <SectionHeader
            id="workflow-heading"
            num="01"
            kicker="Workflow"
            title="How to prep a sample role-play"
            lead="Follow this order before a mentoring session. It is the chapter's coaching routine for finding and preparing a sample. Your event page on DECA+ is where you confirm guidelines, indicators, and times."
          />

          <ol className="relative mt-12 max-w-2xl space-y-10">
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-[11px] top-3 w-px bg-pine-200"
            />
            {workflow.map((step, i) => (
              <li key={step.title} className="relative pl-12 sm:pl-14">
                <span className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-pine-200 bg-cream font-display text-xs font-semibold text-gold-700">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-pine-950">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[56ch] leading-relaxed text-pine-600">
                  {step.body}
                </p>
                {step.advisor ? (
                  <p className="mt-1.5 max-w-[56ch] leading-relaxed text-pine-600">
                    Get the chapter login from <AdvisorLink /> or your mentor.
                  </p>
                ) : null}
                {step.callout ? (
                  <p className="mt-3 max-w-[56ch] border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-pine-600">
                    {step.callout}
                  </p>
                ) : null}
                {step.links?.map((link) => (
                  <ExternalOrHashLink key={link.href} link={link} />
                ))}
              </li>
            ))}
          </ol>
        </article>

        <article
          id="outline"
          aria-labelledby="outline-heading"
          className="mt-24 scroll-mt-28 border-t border-pine-900/10 pt-14"
        >
          <SectionHeader
            id="outline-heading"
            num="02"
            kicker="Outline"
            title="One page, six boxes"
            lead="Lauren's template fits on a single sheet. This sample uses four performance indicators. If your event lists a different number, change the boxes and still restate each indicator in full."
          />

          <figure className="mt-12">
            <ol className="grid gap-4 sm:grid-cols-2">
              {outlineBoxes.map((box) => (
                <li
                  key={box.title}
                  className="card flex h-full flex-col p-5 sm:p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-pine-950">
                    {box.title}
                  </h3>
                  {box.script ? (
                    <p className="mt-3 font-display text-lg italic leading-relaxed text-pine-900">
                      {box.script}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed text-pine-600">
                    {box.body}
                  </p>
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 max-w-[62ch] text-sm leading-relaxed text-pine-600">
              Template from Lauren&apos;s outline. Eli&apos;s handwritten example
              follows the same idea: restate each indicator and list supporting
              points under it.
            </figcaption>
          </figure>
        </article>

        <article
          id="judging"
          aria-labelledby="judging-heading"
          className="mt-24 scroll-mt-28 border-t border-pine-900/10 pt-14"
        >
          <SectionHeader
            id="judging-heading"
            num="03"
            kicker="Judging"
            title="What judges look for"
            lead="Two references from the chapter workshop. The notes are coaching. The table is one sample judge form, not a universal DECA standard. Your event's official guidelines and judge form are authoritative."
          />

          <h3 className="mt-12 font-display text-2xl font-semibold text-pine-950">
            Workshop notes on a strong role-play
          </h3>
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-pine-600">
            From the chapter notes on Eli&apos;s role-play. Use them to rehearse.
            They are not scoring criteria.
          </p>
          <ul className="mt-6 max-w-2xl space-y-4">
            {workshopNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-3 leading-relaxed text-pine-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                />
                {note}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-pine-600">
            Five coaching habits still belong in rehearsal: a clear opening,
            each performance indicator applied to the case rather than only
            named, the scenario&apos;s facts and numbers with assumptions labeled,
            a structured solution, and a close that leaves time for questions.
            In team events, rehearse balanced speaking and clean handoffs.
            These habits are practice focus. They are not an official
            five-criterion DECA scorecard, and they do not carry point values.
          </p>

          <h3 className="mt-14 font-display text-2xl font-semibold text-pine-950">
            Example judge rubric
          </h3>
          <p className="mt-4 text-sm text-pine-600 sm:hidden">
            Swipe sideways to see all four score columns.
          </p>
          <div
            className="mt-4 overflow-x-auto"
            tabIndex={0}
            aria-label="Example judge rubric. Scroll horizontally to see every score column."
          >
            <table className="w-full min-w-[44rem] border-collapse text-sm">
              <caption
                id="rubric-caption"
                className="caption-top mb-4 max-w-[68ch] text-left text-sm leading-relaxed text-pine-600"
              >
                Example from a sample role-play&apos;s judge form. Indicators and
                wording change by event, so always check your event&apos;s form.
              </caption>
              <thead>
                <tr className="border-b border-pine-900/15 text-left">
                  <th
                    scope="col"
                    className="w-12 py-3 pr-3 text-xs font-bold uppercase tracking-[0.14em] text-gold-800"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="py-3 pr-4 text-xs font-bold uppercase tracking-[0.14em] text-gold-800"
                  >
                    Rate the participant&apos;s ability to
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-gold-800"
                  >
                    Novice
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-gold-800"
                  >
                    Developing
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-gold-800"
                  >
                    Proficient
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-gold-800"
                  >
                    Exemplary
                  </th>
                </tr>
              </thead>
              {rubricGroups.map((group) => (
                <tbody key={group.label}>
                  <tr>
                    <th
                      scope="rowgroup"
                      colSpan={6}
                      className="bg-pine-50 px-3 py-3 text-left font-display text-base font-semibold text-pine-950"
                    >
                      {group.label}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.n} className="border-b border-pine-900/10">
                      <td className="py-3 pr-3 align-top font-semibold tabular-nums text-pine-950">
                        {row.n}
                      </td>
                      <th
                        scope="row"
                        className="py-3 pr-4 text-left align-top font-normal leading-relaxed text-pine-800"
                      >
                        {row.ability}
                      </th>
                      <td className="px-2 py-3 text-center align-top tabular-nums text-pine-600">
                        {row.novice}
                      </td>
                      <td className="px-2 py-3 text-center align-top tabular-nums text-pine-600">
                        {row.developing}
                      </td>
                      <td className="px-2 py-3 text-center align-top tabular-nums text-pine-600">
                        {row.proficient}
                      </td>
                      <td className="px-2 py-3 text-center align-top tabular-nums text-pine-600">
                        {row.exemplary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
          <p className="mt-6 max-w-[62ch] border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-pine-600">
            <strong className="font-semibold text-pine-950">
              On this form the performance indicators are 48 of 100 points.
            </strong>{" "}
            Hit every indicator explicitly.
          </p>
        </article>

        <article
          id="visuals"
          aria-labelledby="visuals-heading"
          className="mt-24 scroll-mt-28 border-t border-pine-900/10 pt-14"
        >
          <SectionHeader
            id="visuals-heading"
            num="04"
            kicker="Visuals"
            title="Visuals that work"
            lead="Ideas from the chapter's visual guide. Use one or two that make your solution easier to follow. They are practice examples, not a required DECA format."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visuals.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="card p-5 sm:p-6">
                  <Icon aria-hidden="true" className="h-5 w-5 text-gold-800" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-pine-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-pine-600">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </article>

        <article
          id="in-the-room"
          aria-labelledby="in-the-room-heading"
          className="mt-24 scroll-mt-28 border-t border-pine-900/10 pt-14"
        >
          <SectionHeader
            id="in-the-room-heading"
            num="05"
            kicker="In the room"
            title="A flexible preparation plan"
            lead="Work through these six steps within your event's allotted preparation time. Team events also need time to divide responsibilities and rehearse the handoff."
          />

          <ol className="relative mt-12 max-w-2xl space-y-10">
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-[11px] top-3 w-px bg-pine-200"
            />
            {prepPlan.map((step, i) => (
              <li key={step.title} className="relative pl-12 sm:pl-14">
                <span className="absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-pine-200 bg-cream font-display text-xs font-semibold text-gold-700">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-pine-950">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[56ch] leading-relaxed text-pine-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-12 flex max-w-xl items-start gap-3 border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-pine-600">
            <Timer
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-gold-800"
            />
            <span>
              <strong className="font-semibold text-pine-950">
                Spend most of your time on analysis and your outline.
              </strong>{" "}
              If you fall behind, prioritize the outline over rehearsing.
            </span>
          </p>
        </article>

        <article
          id="practice"
          aria-labelledby="practice-heading"
          className="mt-24 scroll-mt-28 border-t border-pine-900/10 pt-14"
        >
          <SectionHeader
            id="practice-heading"
            num="06"
            kicker="In practice"
            title="A scenario, up close"
            lead="An original retail practice scenario, not an official DECA case. Use your event's allotted preparation time and check its actual performance indicators."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <blockquote className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
                Retail role-play practice
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-pine-600">
                Customer Complaint
              </p>
              <p className="mt-6 border-l-2 border-gold-400 pl-6 font-display text-xl italic leading-relaxed text-pine-900 sm:pl-8 sm:text-2xl">
                You are the shift lead at Northgate Outfitters, a mid-size
                apparel retailer. A longtime customer returns a $180 jacket
                bought six weeks ago, well past the 30-day return window,
                claiming a zipper failed under normal use. She has posted
                negatively about the store online before and has a large local
                following. The jacket shows clear signs of wear beyond the
                zipper. Corporate policy allows store credit as an exception
                but no cash refunds past 30 days. Two other customers are
                waiting in line behind her.
              </p>
              <footer className="mt-4 pl-6 text-sm text-pine-600 sm:pl-8">
                — the kind of competing-priorities case where structure beats
                brilliance.
              </footer>
            </blockquote>

            <aside className="lg:border-l lg:border-pine-900/10 lg:pl-10">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-pine-950">
                Practice learning targets
              </h3>
              <ul className="mt-5 space-y-4">
                {sampleIndicators.map((ind) => (
                  <li
                    key={ind}
                    className="flex items-start gap-3 text-sm leading-relaxed text-pine-600"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                    />
                    {ind}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </article>

        <article
          id="resources"
          aria-labelledby="resources-heading"
          className="mt-24 scroll-mt-28 border-t border-pine-900/10 pt-14"
        >
          <SectionHeader
            id="resources-heading"
            num="07"
            kicker="Resources"
            title="Videos, slides, and DECA+"
            lead="Member examples from Eli, Lauren, Alp, and Polina. Files marked below open only with a school login. These examples are coaching. Your event's official guidelines still decide times, indicators, and scoring."
          />
          <ul className="mt-10 max-w-2xl divide-y divide-pine-900/10 border-y border-pine-900/10">
            {resources.map((resource) => (
              <li key={resource.href} className="py-6">
                <h3>
                  <a
                    href={resource.href}
                    className="text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.title}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </h3>
                <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-pine-600">
                  {resource.schoolLogin ? (
                    <span className="font-bold uppercase tracking-[0.14em] text-gold-800">
                      {resource.detail}
                    </span>
                  ) : (
                    resource.detail
                  )}
                  {resource.advisor ? (
                    <>
                      {" "}
                      <AdvisorLink /> or your mentor.
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-24 rounded-3xl bg-pine-950 px-8 py-14 sm:px-14 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Put it into practice.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pine-200">
              The best role-play prep is reps — run cluster practice tests to
              drill the exam knowledge behind every performance indicator.
            </p>
            <Link href="/compete/practice" className="btn-gold mt-8">
              Take a practice test
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
