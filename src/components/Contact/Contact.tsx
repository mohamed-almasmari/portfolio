function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Let's Connect
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
          I'm interested in software engineering opportunities and connecting
          with other developers. Feel free to reach out.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/mohamed-almasmari-4b406622b/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mohamed-almasmari"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://app.joinhandshake.com/profiles/fs5kwf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-500 hover:text-cyan-400"
          >
            Handshake
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;