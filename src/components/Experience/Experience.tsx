function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Experience
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Work Experience
        </h2>

        <div className="mt-10 max-w-4xl">
          <div className="border-l border-slate-700 pl-6">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">
                  Store Clerk
                </h3>

                <p className="mt-1 text-cyan-400">
                  Marathon Gas Station
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Detroit, MI
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li className="flex gap-3">
                <span className="text-cyan-400">▹</span>
                <span>
                  Delivered consistent customer service in a high-traffic
                  retail environment.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400">▹</span>
                <span>
                  Operated the cash register accurately while managing
                  transactions under pressure.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;