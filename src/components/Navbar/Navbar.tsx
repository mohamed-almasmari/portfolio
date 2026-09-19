import { useState } from "react";
import { Link } from "react-router";

const navLinks = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Education", to: "/#education" },
  { label: "Contact", to: "/#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-5">
          <Link
            to="/#home"
            onClick={closeMenu}
            className="text-xl font-bold text-white transition hover:text-cyan-400"
          >
            Mohamed Almasmari
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-md border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <span className="text-xl" aria-hidden="true">
                ✕
              </span>
            ) : (
              <span className="text-xl" aria-hidden="true">
                ☰
              </span>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <ul
            id="mobile-navigation"
            className="space-y-1 border-t border-slate-800 py-4 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;