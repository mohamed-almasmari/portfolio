import { useParams } from "react-router";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { projectID } = useParams();

  const project = projects.find(
    (project) => project.id === projectID
  );

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h1 className="text-4xl font-bold">
          Project Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Project
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {project.description}
        </p>
      </div>
    </main>
  );
}

export default ProjectDetails;