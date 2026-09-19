function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © 2026 Mohamed Almasmari. All rights reserved.
        </p>

        <nav aria-label="Social links" className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/mohamed-almasmari-4b406622b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mohamed-almasmari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://app.joinhandshake.com/profiles/fs5kwf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition hover:text-cyan-400"
          >
            Handshake
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
