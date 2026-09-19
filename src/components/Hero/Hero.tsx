import { Link } from "react-router";

function Hero() {
  const technologies = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
  ];

  return (
    <section
      id="home"
      className="scroll-mt-20 bg-slate-950 px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Software Engineer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            Mohamed Almasmari
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
            I build full-stack web applications.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
            Computer Science graduate from Wayne State University focused on
            building modern, scalable web applications with React, TypeScript,
            Node.js, Express.js, and PostgreSQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View My Projects
            </Link>

            <Link
              to="/#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-800 pt-6 text-sm text-slate-400">
            <span>Detroit, Michigan</span>
            <span>B.S. Computer Science</span>
            <span>Wayne State University</span>
            <span>GPA: 3.66</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
