function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-center">
      <div className="mx-auto max-w-6xl space-x-2">
        <p className="text-sm text-slate-500">
          © 2026 Mohamed Almasmari. All rights reserved.
        </p>

        <a
          href="https://www.linkedin.com/in/mohamed-almasmari-4b406622b/"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mohamed-almasmari"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
        >
          GitHub
        </a>
         <a
          href="https://app.joinhandshake.com/profiles/fs5kwf"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-sm text-slate-500 transition hover:text-cyan-400"
        >
          HandShake
        </a>
      </div>
    </footer>
  );
}

export default Footer;
