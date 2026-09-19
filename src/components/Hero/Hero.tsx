function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-slate-950 px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Frontend & Full-Stack Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            Mohamed Almasmari
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
            Frontend and full-stack developer with a Bachelor of Science
            in Computer Science from Wayne State University. I build
            end-to-end web applications using React.js, JavaScript,
            PostgreSQL, and modern web technologies.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-white transition hover:border-slate-500"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Detroit, Michigan</span>
            <span>B.S. Computer Science</span>
            <span>GPA: 3.66</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;