import { Link, useParams } from "react-router";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { projectID } = useParams();

  const project = projects.find((project) => project.id === projectID);

  if (!project) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            404
          </p>

          <h1 className="mt-3 text-4xl font-bold">Project Not Found</h1>

          <p className="mt-4 text-slate-400">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/#projects"
            className="mt-8 inline-flex font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-950 px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/#projects"
          className="inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Projects
        </Link>

        <header className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              {project.type}
            </p>

            <span
              className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                project.status === "Completed"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {project.description}
          </p>

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

          {(project.github || project.liveDemo) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View GitHub
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </header>

        <section className="mt-16 border-t border-slate-800 pt-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Overview
          </p>

          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            About the Project
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            {project.overview}
          </p>
        </section>

        <section className="mt-16 border-t border-slate-800 pt-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Work
          </p>

          <h2 className="mt-3 text-2xl font-bold md:text-3xl">
            Key Contributions
          </h2>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {project.contributions.map((contribution) => (
              <li
                key={contribution}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <span className="text-cyan-400" aria-hidden="true">
                  ▹
                </span>

                <span className="leading-7 text-slate-300">{contribution}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-16 border-t border-slate-800 pt-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Highlights
            </p>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Project Highlights
            </h2>

            <ul className="mt-8 space-y-4">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-4 text-slate-300">
                  <span className="text-cyan-400" aria-hidden="true">
                    ✓
                  </span>

                  <span className="leading-7">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <section className="mt-16 border-t border-slate-800 pt-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Engineering
            </p>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">Challenges</h2>

            <ul className="mt-8 space-y-4">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-4 text-slate-300">
                  <span className="text-cyan-400" aria-hidden="true">
                    ▹
                  </span>

                  <span className="leading-7">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProjectDetails;
