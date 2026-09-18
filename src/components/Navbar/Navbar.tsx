function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="text-xl font-bold text-white"
        >
          Mohamed Almasmari
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#home"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;