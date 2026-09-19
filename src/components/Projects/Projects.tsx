import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Projects I've Built</h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          A selection of software projects I've worked on, including full-stack
          applications, data platforms, and projects currently in development.
        </p>

        <div className="mt-10 space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
