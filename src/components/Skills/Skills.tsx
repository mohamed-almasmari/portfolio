function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
        "RTK Query",
        "React Hook Form",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
      ],
    },
    {
      title: "Databases & Data",
      skills: [
        "PostgreSQL",
        "Prisma ORM",
        "SQL",
        "Public API Integration",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Docker Compose",
        "Vite",
        "npm",
      ],
    },
    {
      title: "Testing",
      skills: [
        "React Testing Library",
        "Software Testing",
        "Debugging",
      ],
    },
    {
      title: "Currently Exploring",
      skills: [
        "Redis",
        "BullMQ",
        "LLM APIs",
        "Background Jobs",
        "AI-Powered Applications",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Technologies & Tools</h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Technologies I use to build, test, and maintain modern full-stack web
          applications.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
