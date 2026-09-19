export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  contributions: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
};

export const projects: Project[] = [
  {
    id: "enterprise-data-platform",
    title: "Enterprise Data Platform",
    type: "Senior Capstone Project — Wayne State University",
    description:
      "A full-stack enterprise data platform designed to help users explore public policy data through interactive dashboards and data-driven interfaces.",
    contributions: [
      "Collaborated with a team of student developers to design and build a full-stack enterprise data platform.",
      "Built an automated ETL pipeline using public APIs to collect, process, and validate data.",
      "Developed scripts for data import, validation, and database updates using PostgreSQL.",
      "Designed and implemented dashboards and user interface components to display actionable data insights.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "PostgreSQL",
      "Public APIs",
      "ETL",
    ],
  },
];