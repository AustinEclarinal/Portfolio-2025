// import portfolioImg from '../assets/portfolio.png';enable once pictures can be imported 

export interface Experience {
  id: number;
  title: string;
  role: string;
  date: string;
  image: string; 
}

export const experiences: Experience[] = [
  {
    id: 5,
    title: "CCS Day 2026",
    role: "Business Manager",
    date: "January 2026",
    image: "https://placehold.co/600x800/2f9e44/FFF?text=CCS+Days+2026",
  },
  {
    id: 1,
    title: "CCS General Assembly",
    role: "Chairperson",
    date: "Aug 2025",
    image: "https://placehold.co/600x800/25262b/FFF?text=General+Assembly", 
  },
  {
    id: 2,
    title: "JPCS Induction",
    role: "JPCS President",
    date: "Mar 2025",
    image: "https://placehold.co/600x800/1971c2/FFF?text=President",
  },
  {
    id: 3,
    title: "IQ League: Vanguard",
    role: "JPCS President",
    date: "June 2025",
    image: "https://placehold.co/600x800/e8590c/FFF?text=IQ+League",
  },
  {
    id: 4,
    title: "Tree of Hope 2024: Deck the Dreams",
    role: "Organizer",
    date: "Dec 2024",
    image: "https://placehold.co/600x800/2f9e44/FFF?text=Outreach",
  },
  
];