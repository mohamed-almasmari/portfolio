export type Project = {
  id: string;
  title: string;
  type: string;
  description: string;
  overview: string;
  contributions: string[];
  technologies: string[];
  highlights?: string[];
  challenges?: string[];
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

    overview:
      "This senior capstone project focused on building a full-stack platform for collecting, processing, storing, and presenting public policy data. The application integrated data from public APIs, processed the data through backend pipelines, stored structured information in PostgreSQL, and presented the results through a React-based user interface.",

    contributions: [
      "Collaborated with a team of student developers to design and build a full-stack enterprise data platform.",
      "Built an automated ETL pipeline using public APIs to collect, process, and validate data.",
      "Developed scripts for data import, validation, and database updates using PostgreSQL.",
      "Designed and implemented dashboards and user interface components to display actionable data insights.",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Python",
      "Flask",
      "PostgreSQL",
      "Docker",
      "Public APIs",
      "ETL",
    ],

    highlights: [
      "Integrated multiple public data sources into a centralized application.",
      "Implemented data validation before database insertion.",
      "Built responsive React interfaces for exploring congressional district data.",
      "Worked across frontend, backend, database, and testing responsibilities.",
    ],
  },

  {
    id: "jobpilot",
    title: "JobPilot",
    type: "Full-Stack Personal Project — In Development",

    description:
      "A full-stack job discovery and application tracking platform designed to help job seekers discover opportunities, organize applications, and manage the job search process from one place.",

    overview:
      "JobPilot is being designed as a centralized platform for job discovery and application tracking. The platform will support opportunities from sources such as LinkedIn, Indeed, Handshake, authorized job APIs and feeds, and company career pages. Users will be able to save jobs, track applications through different stages, manage resumes, receive job alerts, and view application analytics. Planned AI capabilities include job matching, job-description analysis, and interview preparation.",

    contributions: [
      "Designing the application as a full-stack TypeScript platform with separate frontend and backend responsibilities.",
      "Building the frontend with React, TypeScript, React Router, Redux Toolkit, RTK Query, and Tailwind CSS.",
      "Designing REST API endpoints with Node.js, TypeScript, and Express.js.",
      "Designing the PostgreSQL data model and database access layer with Prisma ORM.",
      "Planning secure authentication using JWT and password hashing.",
      "Planning background processing for job alerts and scheduled tasks using Redis and BullMQ.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "React Hook Form",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Redis",
      "BullMQ",
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vitest",
      "React Testing Library",
      "Supertest",
    ],

    highlights: [
      "Centralized job discovery and application tracking.",
      "Application pipeline stages for Applied, Assessment, Interview, Rejected, and Offer.",
      "Resume upload and file-management capabilities.",
      "Job alerts and application analytics.",
      "Planned AI-powered job matching and job-description analysis.",
      "Planned interview-preparation capabilities using an LLM API.",
      "Containerized development and deployment architecture.",
      "Automated testing and CI/CD workflow.",
    ],

    challenges: [
      "Designing a scalable data model for jobs, applications, users, resumes, and application stages.",
      "Integrating multiple authorized job data sources behind a consistent application interface.",
      "Designing background processing for scheduled job discovery and notifications.",
      "Separating planned AI functionality from the core job tracking workflow so the application remains modular.",
    ],
  },
];