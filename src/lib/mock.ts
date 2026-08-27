import type {
  BioSection,
  HomeParagraph,
  PhilosophySection,
  Recording,
} from "./content";

export const homeParagraphs: HomeParagraph[] = [
  {
    text: "I am a trumpet player and teacher based in the United States, performing across orchestral, chamber, and early music settings.",
    position: 1,
  },
  {
    text: "My work ranges from baroque trumpet and natural trumpet performance to modern orchestral playing and studio recording.",
    position: 2,
  },
];

export const bioHeader =
  "A trumpet player, teacher, and lifelong student of the instrument.";

export const bioSections: BioSection[] = [
  {
    paragraphs: [
      "I began playing trumpet in middle school and have been chasing the sound ever since.",
      "My training spans modern and historical performance practice.",
    ],
    image: {
      url: "https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393790/Robbie/HBS_mstzwo.jpg",
      width: 1600,
      height: 1067,
      alt: "Robbie performing with the Handel and Haydn Society",
    },
  },
  {
    paragraphs: [
      "Alongside performing, I maintain a private teaching studio for students at every level.",
    ],
    image: {
      url: "https://res.cloudinary.com/dwbwyzsyp/image/upload/v1687393810/Robbie/baroqueTrumpetReduced_tw01ol.jpg",
      width: 1600,
      height: 1067,
      alt: "Robbie playing baroque trumpet",
    },
  },
];

export const recordings: Recording[] = [
  {
    videoId: "dQw4w9WgXcQ",
    description: "Placeholder recording.",
    position: 1,
  },
  {
    videoId: "9bZkp7q19f0",
    description: "Placeholder recording.",
    position: 2,
  },
];

export const philosophy: PhilosophySection = {
  paragraphs: [
    "Every student arrives with a different set of strengths, and the job of a teacher is to find them first.",
    "I focus on fundamentals: air, sound, and a relaxed approach to the instrument that holds up under pressure.",
    "Lessons are collaborative. I want students leaving with something specific to work on and a clear reason why.",
  ],
};
