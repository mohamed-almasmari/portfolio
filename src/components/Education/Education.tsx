function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 bg-slate-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Education
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Academic Background</h2>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-950 p-6 md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
            <div>
              <p className="text-sm font-medium text-cyan-400">
                Wayne State University
              </p>

              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Bachelor of Science in Computer Science
              </h3>

              <p className="mt-3 text-slate-400">Detroit, Michigan</p>
            </div>

            <div className="md:text-right">
              <p className="font-semibold text-white">2025</p>

              <p className="mt-2 text-slate-400">GPA: 3.66</p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Degree
            </p>

            <div className="overflow-hidden rounded-xl border border-slate-800">
              <img
                src="/degree.png"
                alt="Bachelor of Science in Computer Science degree from Wayne State University"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
