export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
};

export const projects: Project[] = [
  {
    id: "jobpilot",
    title: "JobPilot",
    description:
      "A full-stack job tracking application for organizing job applications and monitoring application progress.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    github: "",
  },

  {
    id: "ppa",
    title: "Public Policy Analytics",
    description:
      "A data-driven web application developed as part of a senior capstone project for analyzing public policy and congressional district data.",
    technologies: [
      "React",
      "Python",
      "Flask",
      "PostgreSQL",
      "Docker",
    ],
    github: "",
  },

  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A React weather application that displays weather information in Fahrenheit.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Weather API",
    ],
    github: "",
  },
];