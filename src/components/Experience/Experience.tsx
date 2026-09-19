function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Experience
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Professional Experience
        </h2>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6 md:p-8">
          <p className="text-sm font-medium text-cyan-400">Amazon Flex</p>

          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Delivery Partner
          </h3>

          <h4 className="mt-8 text-lg font-semibold">Key Responsibilities</h4>

          <ul className="mt-4 space-y-3 text-slate-400">
            <li className="flex gap-3">
              <span className="text-cyan-400" aria-hidden="true">
                ▹
              </span>

              <span>
                Delivered 30,000+ packages while maintaining reliable and
                accurate service.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400" aria-hidden="true">
                ▹
              </span>

              <span>
                Managed high-volume routes independently in a fast-paced
                environment.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400" aria-hidden="true">
                ▹
              </span>

              <span>
                Used logistics and navigation tools to manage deliveries and
                resolve route issues.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
