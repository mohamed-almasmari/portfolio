function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Software developer focused on building practical web applications.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I am a frontend and full-stack developer with a Bachelor of Science
            in Computer Science from Wayne State University. My experience
            includes building end-to-end web applications, working with
            PostgreSQL databases, and developing interactive user interfaces
            with React.js.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-400">
            During my senior capstone project, I collaborated with a team to
            design and build an enterprise data platform. I worked with public
            APIs, automated data pipelines, PostgreSQL, data validation, and
            interactive dashboards.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-400">
            I have a strong foundation in data structures, algorithms,
            object-oriented programming, debugging, problem solving, and
            software testing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
