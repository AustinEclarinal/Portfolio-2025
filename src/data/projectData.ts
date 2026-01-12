// src/data/projectData.ts
import entangledLogo from '../assets/Entangled Choices.png';
import laststandLogo from '../assets/Last Stand.png';
import godzillaLogo from '../assets/menu.jpg';
import pythoLogo from '../assets/pythomancer.png';
import eventLogo from '../assets/Eventilador.png';
import cinemaLogo from '../assets/Cinema.png';
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  playLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pythomancer: Syntax and Sorcery",
    description: "A 2D action-adventure game where players harness the power of Python programming to cast spells, solve puzzles, and defeat enemies in a magical realm.",
    image: pythoLogo,
    tags: ["Gdevelop"],
    playLink: "https://austinedev.itch.io/pythomancer-syntax-and-sorcery",
    githubLink: "https://github.com/AustinEclarinal/Pythomancer-Syntax-And-Sorcery-BetaV3",
  },
  {
    id: 2,
    title: "Entangled Choices",
    description: "A narrative-driven adventure game where players' decisions shape the storyline, leading to multiple endings and unique character interactions. Your choices trully matter",
    image: entangledLogo,
    tags: ["Godot", "GDScript", "Dialogic Extension"],
    playLink: "https://austinedev.itch.io/entangled-choices",
    githubLink: "https://github.com/AustinEclarinal/Entangled-Choices-Prototype",
  },
  {
    id: 3,
    title: "Godzilla: Destroy All Monsters",
    description: "A side scroller where players control Godzilla as he ravages cities, firing a powerful atomic breath and an intense combat with a familiar enemy to stop him from destruction.",
    image: godzillaLogo,
    tags: ["Gdevelop"],
    playLink: "https://austinedev.itch.io/godzilla-destroy-all-monsters",
    githubLink: "https://github.com/AustinEclarinal/Godzilla-Destroy-All-Monsters",
  },

  {
    id: 4,
    title: "Last Stand",
    description: "A 2-player top-down survival shooter where players fend off endless waves of enemies, utilizing melee and range weapons to survive as long as possible in an apocalyptic setting.",
    image: laststandLogo,
    tags: ["Gdevelop", "Integration Developer"],
    playLink: "https://austinedev.itch.io/last-stand",
    githubLink: "https://github.com",
  },

  {
    id: 5,
    title: "Eventilador",
    description: "A desktop application that streamlines event management, allowing users to create, organize, and track events efficiently with an intuitive interface.",
    image: eventLogo,
    tags: ["VB.net", "SQL SSMS"],
    playLink: "",
    githubLink: "https://github.com/AustinEclarinal/Eventilador/tree/main",
  },

   {
    id: 6,
    title: "Cinema Booking System",
    description: "A small and simple cinema booking system that enables users to browse movie listings, select seats, and make reservations online with ease.",
    image: cinemaLogo,
    tags: ["VB.net", "SQL SSMS"],
    playLink: "",
    githubLink: "https://github.com/AustinEclarinal/cinema-booking-system",
  },


];