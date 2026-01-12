export interface Experience {
  id: number;
  title: string;
  role: string;
  date: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "College of Computer Studies General Assembly",
    role: "Business Manager & Chairperson",
    date: "August 2025",
    description: [
      "Orchestrated logistics and flow for over 400 attendees[cite: 45].",
      "Designed tech-centric icebreakers tailored to student skills[cite: 46].",
      "Facilitated onboarding for incoming freshmen[cite: 47]."
    ],
  },
  {
    id: 2,
    title: "JPCS General Assembly",
    role: "President & Chairperson",
    date: "March 2025",
    description: [
      "Spearheaded planning for a department-wide event to foster camaraderie[cite: 51].",
      "Collaborated with the executive board to manage program flow and officer induction[cite: 52].",
      "Oversaw event logistics ensuring high attendee engagement[cite: 53]."
    ],
  },
  {
    id: 3,
    title: "IQ League: Vanguard",
    role: "President & Chairperson",
    date: "June 2025",
    description: [
      "Partnered with PUPASCII to co-host an inter-collegiate academic competition[cite: 57].",
      "Formulated gameplay mechanics and rulesets for 'Pixel Number'[cite: 58].",
      "Supervised on-site execution and led a team of officers to adjudicate matches[cite: 59]."
    ],
  },
  {
    id: 4,
    title: "MAËLYS Cosmetics",
    role: "Freelance Customer Service Agent",
    date: "June 2025 - Present",
    description: [
      "Managed high-volume customer inquiries and resolved billing disputes[cite: 17].",
      "Coordinated logistics for returns, exchanges, and lost packages[cite: 18].",
    ],
  },
];