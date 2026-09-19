import { Link } from "react-router";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, 6);

  const hiddenTechnologyCount =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-slate-700 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            {project.type}
          </p>

          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            {project.title}
          </h3>
        </div>

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

      <p className="mt-5 max-w-3xl leading-7 text-slate-400">
        {project.description}
      </p>

      <h4 className="mt-8 text-lg font-semibold">
        Key Contributions
      </h4>

      <ul className="mt-4 space-y-3 text-slate-400">
        {project.contributions.slice(0, 3).map((contribution) => (
          <li
            key={contribution}
            className="flex gap-3"
          >
            <span
              className="text-cyan-400"
              aria-hidden="true"
            >
              ▹
            </span>

            <span>{contribution}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        {visibleTechnologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
          >
            {technology}
          </span>
        ))}

        {hiddenTechnologyCount > 0 && (
          <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400">
            +{hiddenTechnologyCount} more
          </span>
        )}
      </div>

      <div className="mt-8">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          View Project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;