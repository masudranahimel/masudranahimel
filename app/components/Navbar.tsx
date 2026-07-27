"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto max-w-6xl rounded-3xl border transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "border-white/10 bg-white/5 backdrop-blur-xl"
        }`}
      >
        <div
          className={`flex items-center justify-between px-5 transition-all duration-500 md:px-7 ${
            scrolled ? "h-12" : "h-14"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-tight text-white md:text-base"
          >
            Masud Rana Himel
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <li>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="transition-colors hover:text-white">
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="mailto:masudranahimel.info@gmail.com"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200 md:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 md:hidden"
          >
            <span
              className={`h-px w-4 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-4 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`grid transition-all duration-300 md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/10 px-5 py-5">
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="block rounded-xl px-3 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#skills"
                    onClick={closeMenu}
                    className="block rounded-xl px-3 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    Skills
                  </a>
                </li>

                <li>
                  <a
                    href="#projects"
                    onClick={closeMenu}
                    className="block rounded-xl px-3 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="block rounded-xl px-3 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <a
                href="mailto:masudranahimel.info@gmail.com"
                onClick={closeMenu}
                className="mt-4 flex w-full justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
