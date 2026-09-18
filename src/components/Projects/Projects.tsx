function Projects() {
  const projects = [
    {
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

  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Projects I've Built
        </h2>

        <div className="mt-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6 md:p-8"
            >
              <p className="text-sm font-medium text-cyan-400">
                {project.type}
              </p>

              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                {project.description}
              </p>

              <h4 className="mt-8 text-lg font-semibold">
                Contributions
              </h4>

              <ul className="mt-4 space-y-3 text-slate-400">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-3"
                  >
                    <span className="text-cyan-400">▹</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
                  >
                    {technology}
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

export default Projects;