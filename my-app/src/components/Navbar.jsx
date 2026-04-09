import logo from "../assets/logo.webp";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Products", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f8f7f3] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Burhani Steel & Hardware" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-[#0B1F3A] font-semibold text-sm tracking-wide group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FACC15] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-[#0B1F3A] text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-[#FACC15] hover:text-[#0B1F3A] transition-all duration-300"
            >
              Get Quote
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 text-[#0B1F3A]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-yellow-400/20 px-6 py-6 flex flex-col gap-5 text-white animate-slideDown">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold text-base tracking-wide border-b border-white/10 pb-3 hover:text-yellow-400 transition-all duration-200"
            >
              {link}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-yellow-400 text-[#0B1F3A] text-center px-5 py-3 rounded font-bold tracking-wide hover:bg-yellow-300 transition-all duration-300"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}