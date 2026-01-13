import CCSDays from '../assets/days.jpg';
import ITcon from '../assets/ITcon.jpg';
import Techtonic from '../assets/techtonic.jpg';
import GeneralAssembly from '../assets/G.A..jpg';
import Pixels from '../assets/Pixels.jpg';
import Tree from '../assets/Tree of Hope.jpg';
import IQ from '../assets/IQ.jpg';
import JPCSGA from '../assets/JPCS.jpg';

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
    date: "Jan 2026",
    image: CCSDays,
  },
  {
    id: 2,
    title: "CCS General Assembly",
    role: "Chairperson",
    date: "Aug 2025",
    image: GeneralAssembly, 
  },
  {
    id: 3,
    title: "JPCS General Assembly",
    role: "JPCS President",
    date: "Mar 2025",
    image: JPCSGA,
  },
  {
    id: 4,
    title: "IQ League: Vanguard",
    role: "JPCS President",
    date: "June 2025",
    image: IQ,
  },
  {
    id: 5,
    title: "Tree of Hope 2024: Deck the Dreams",
    role: "JPCS President",
    date: "Dec 2024",
    image: Tree,
  },
  {
    id: 6,
    title: "Enrichment Seminar: Pixels & Patterns",
    role: "CCS-SC Business Manager",
    date: "Sept 2025",
    image: Pixels,
  },
  {
    id: 7,
    title: "Enrichment Seminar: Techtonic Shift",
    role: "CCS-SC Business Manager",
    date: "Oct 2025",
    image: Techtonic,
  },
  {
    id: 8,
    title: "JPCS ITcon 2026",
    role: "Capstone Presenter",
    date: "Jan 2026",
    image: ITcon,
  },
  
];