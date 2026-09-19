function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Software engineer focused on full-stack development.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm a Computer Science graduate from Wayne State University with
            experience building full-stack web applications, data-driven
            platforms, REST APIs, and responsive user interfaces. I work
            primarily with React, TypeScript, Node.js, Express.js, PostgreSQL,
            and modern development tools.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My experience includes developing an enterprise public policy data
            platform as part of my senior capstone and currently building
            JobPilot, a full-stack job discovery and application tracking
            platform. I focus on writing maintainable software, solving
            practical problems, and continuously strengthening my engineering
            skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
