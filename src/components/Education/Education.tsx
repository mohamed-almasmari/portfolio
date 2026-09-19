function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Education
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Academic Background</h2>

        <div className="mt-10 max-w-4xl rounded-xl border border-slate-800 bg-slate-950 p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">
                Wayne State University
              </h3>

              <p className="mt-2 text-lg text-cyan-400">
                Bachelor of Science in Computer Science
              </p>

              <p className="mt-2 text-slate-400">Detroit, MI</p>
            </div>

            <div className="md:text-right">
              <p className="font-semibold text-white">2025</p>

              <p className="mt-1 text-slate-400">GPA: 3.66</p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8">
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <img
                src="/degree.png"
                alt="Bachelor of Science in Computer Science degree"
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
