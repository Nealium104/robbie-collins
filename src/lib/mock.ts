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
  subtitle:
    "I want my students to be the best version of themselves, not a carbon copy of me.",
  quoteBreak:
    "There's nothing more fulfilling than witnessing a student's \"AHA!\" moment.",
  paragraphs: [
    "Teaching music is my deepest passion, and I've held the lifelong dream of becoming an educator. Explaining musical concepts to my students is second nature, and I find it easy to communicate ideas to others. All of my teaching stems from a place of developing strong fundamentals and unrelenting musicality (even in fundamentals). Generally, I try to make my teaching style cater to the students on an individual level. I have come to find that people learn in a variety of ways, and I enjoy the challenge of finding what works best for each student. I place great importance on promoting self-motivation by nurturing the students' curiosity; I want them to be the best version of themselves, not a carbon copy of myself. I make a point to encourage my students to stay curious by attending masterclasses, taking lessons with different musicians that peak their interest (not just trumpet players), and attending various conferences and seminars.",
    "I firmly believe that teaching is a mutual exchange. The best educators learn from their students as much as they impart knowledge onto them. There's nothing more fulfilling than witnessing a student's \"AHA!\" moment, or listening to them express their own ideas in a unique way. Their enthusiasm becomes my own, and I embrace the fresh perspectives they bring to the world of music while welcoming their suggestions. Thanks to this dynamic exchange of ideas, I continue to grow as a musician and each day feels fresh and new. It makes me eagerly anticipate the years of teaching that lie ahead for me.",
    "I have been fortunate enough to have had the opportunity to learn and collaborate with many colleagues across the world from different cultures, backgrounds, and religious affiliations. Having the chance to refresh and rethink my outlook with help from my colleagues from their own unique perspectives has allowed me to keep my mind open and think of different approaches when teaching. The organizations I have worked with, such as Interlochen Summer Arts Camp, Central Music Academy, Wesley Academy, my respective universities, ITG, and HBS have helped me grow as an educator and provided an outlet for me to mentor many young musicians with different goals and interests, all over the world. I am dedicated to ensuring that all students, regardless of their background, feel welcomed, supported, and empowered to reach their full potential in the world of music.",
  ],
};
