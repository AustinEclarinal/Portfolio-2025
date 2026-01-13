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
    id: 1,
    title: "CCS Day 2026",
    role: "CCS-SC Business Manager",
    date: "January 2026",
    image: "https://placehold.co/600x800/2f9e44/FFF?text=CCS+Days+2026",
  },
  {
    id: 2,
    title: "CCS General Assembly",
    role: "Chairperson",
    date: "Aug 2025",
    image: "https://placehold.co/600x800/25262b/FFF?text=General+Assembly", 
  },
  {
    id: 3,
    title: "JPCS General Assembly",
    role: "JPCS President",
    date: "Mar 2025",
    image: "https://placehold.co/600x800/1971c2/FFF?text=JPCS+General+Assembly",
  },
  {
    id: 4,
    title: "IQ League: Vanguard",
    role: "JPCS President",
    date: "June 2025",
    image: "https://placehold.co/600x800/e8590c/FFF?text=IQ+League",
  },
  {
    id: 5,
    title: "Tree of Hope 2024: Deck the Dreams",
    role: "JPCS President",
    date: "Dec 2024",
    image: "https://placehold.co/600x800/2f9e44/FFF?text=Outreach",
  },
  {
    id: 6,
    title: "Enrichment Seminar: Pixels & Patterns",
    role: "CCS-SC Business Manager",
    date: "Sept 2025",
    image: "https://placehold.co/600x800/2f9e44/FFF?text=Outreach",
  },
  {
    id: 7,
    title: "Enrichment Seminar: Techtonic Shift",
    role: "CCS-SC Business Manager",
    date: "Oct 2025",
    image: "https://placehold.co/600x800/2f9e44/FFF?text=Outreach",
  },
  
];