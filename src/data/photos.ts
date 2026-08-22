import type { ChapterPhoto } from "@/data/types";

/**
 * Real photos from the @sycamore.deca Instagram feed, self-hosted in /public/images.
 * Each links back to its original Instagram post. To add a photo: save the image
 * to public/images/, then append an entry here.
 */
export const chapterPhotos: ChapterPhoto[] = [
  {
    src: "/images/icdc-winners.jpg",
    alt: "Sycamore DECA award winners at the International Career Development Conference",
    permalink: "https://www.instagram.com/p/DX1snQkFglV/",
  },
  {
    src: "/images/deca-camp-1.jpg",
    alt: "Sycamore DECA members at the annual Ohio DECA leadership camp",
    permalink: "https://www.instagram.com/p/Da0dUOlltAs/",
  },
  {
    src: "/images/seniors-2026.jpg",
    alt: "Sycamore DECA graduating seniors",
    permalink: "https://www.instagram.com/p/DXzFC2-iCum/",
  },
  {
    src: "/images/gossett-advisor.jpg",
    alt: "Ms. Gossett, Sycamore DECA advisor",
    permalink: "https://www.instagram.com/p/DcBU_7ao2HE/",
  },
  {
    src: "/images/deca-camp-2.jpg",
    alt: "Students gathered at Ohio DECA camp",
    permalink: "https://www.instagram.com/p/Da0dUOlltAs/",
  },
  {
    src: "/images/banquet-2026.jpg",
    alt: "Sycamore DECA end-of-year banquet announcement",
    permalink: "https://www.instagram.com/p/DYUvoH3IucT/",
  },
  {
    src: "/images/advisor-cincinnati.jpg",
    alt: "Sycamore DECA at the Cincinnati Open",
    permalink: "https://www.instagram.com/p/DbmRBZDoz3C/",
  },
  {
    src: "/images/advisor-cincinnati.jpg",
    alt: "Sycamore DECA at the Cincinnati Open",
    permalink: "https://www.instagram.com/p/DbmRBZDoz3C/",
  },
];

/** Chapter-provided photos (not from the Instagram feed — no permalink). */
export const aboutPhoto: ChapterPhoto = {
  src: "/images/aboutpage.jpg",
  alt: "Sycamore DECA members on stage with their award plaques at a chapter ceremony",
};

export const advisorPhoto: ChapterPhoto = {
  src: "/images/steedly.jpg",
  alt: "Chapter advisor Mr. Steedly at the Cincinnati Open tennis tournament",
};

/** Curated picks for prominent placements (hero, section features). */
export const heroPhoto = chapterPhotos[0];
