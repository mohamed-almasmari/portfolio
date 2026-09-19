import { Link } from "react-router";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-950 p-6 md:p-8">
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