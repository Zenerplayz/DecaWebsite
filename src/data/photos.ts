import type { ChapterPhoto } from "@/data/types";

/** Homepage hero. The file is also the organization image in the site schema. */
export const heroPhoto: ChapterPhoto = {
  src: "/images/icdc-winners.jpg",
  alt: "Sycamore DECA award winners at the International Career Development Conference",
  permalink: "https://www.instagram.com/p/DX1snQkFglV/",
};

/** Chapter-provided photos (not from the Instagram feed — no permalink). */
export const aboutPhoto: ChapterPhoto = {
  src: "/images/aboutpage.jpg",
  alt: "Sycamore DECA members on stage with their award plaques at a chapter ceremony",
};

export const advisorPhoto: ChapterPhoto = {
  src: "/images/steedly.jpg",
  alt: "Chapter advisor Mr. Steedly at the Cincinnati Open tennis tournament",
};
