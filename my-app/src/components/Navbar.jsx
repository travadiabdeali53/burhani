import logo from "../assets/logo.webp";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// ─── Nav link definitions ────────────────────────────────────────────────────
// type: "route"  → React Router <Link>
// type: "hash"   → scroll to an anchor on the homepage
const NAV_LINKS = [
  { label: "Home", type: "route", to: "/" },
  { label: "About", type: "route", to: "/about" },
  { label: "Products", type: "route", to: "/products" },
  { label: "Contact", type: "hash", to: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false); // drives close animation
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  useEffect(() => {
    if (!isHome) return;

    const section = document.querySelector("#contact");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("contact");
        } else {
          setActiveSection(""); // reset when not visible
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isHome]);
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(""); // reset when leaving homepage
    }
  }, [location.pathname]);

  // ── Track scroll position ──────────────────────────────────────────────────
  useEffect(() => {
    // Initialise immediately (page may already be scrolled on mount)
    setScrolled(window.scrollY > 20);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on route change ─────────────────────────────────────
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // ── Close menu when clicking outside ──────────────────────────────────────
  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        closeMobileMenu();
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  // ── Animated close helper ─────────────────────────────────────────────────
  function closeMobileMenu() {
    if (!menuOpen) return;
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 220); // matches animation duration
  }

  // ── Handle nav link clicks ────────────────────────────────────────────────
  function handleLinkClick(link) {
    closeMobileMenu();

    // ✅ HANDLE HASH LINKS
    if (link.type === "hash") {
      if (isHome) {
        const el = document.querySelector(link.to);
        const yOffset = -80; // adjust based on navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document
            .querySelector(link.to)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
      return;
    }

    // ✅ HANDLE ROUTE LINKS
    if (link.to === "/" && location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("");
      return;
    }

    navigate(link.to);
  }

  // ── Navbar background logic ───────────────────────────────────────────────
  // Transparent on homepage until user scrolls; solid on all other pages
  const solidBg = true;

  return (
    <nav
      ref={menuRef}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${solidBg ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      {/* ── Top bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0"
          aria-label="Burhani Steel & Hardware — Home"
        >
          <img
            src={logo}
            alt="Burhani Steel & Hardware"
            loading="lazy"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const active =
              (link.type === "hash" && activeSection === "contact") ||
              (link.type === "route" &&
                location.pathname === link.to &&
                activeSection !== "contact");
            return (
              <li key={link.label}>
                {link.type === "hash" ? (
                  <button
                    onClick={() => handleLinkClick(link)}
                    className={`
    relative font-semibold text-sm tracking-wide group
    transition-colors duration-200
    ${active ? "text-[#FACC15]" : solidBg ? "text-[#0B1F3A]" : "text-white"}
  `}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#FACC15] transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => handleLinkClick(link)}
                    className={`
                      relative font-semibold text-sm tracking-wide group
                      transition-colors duration-200
                      ${
                        active
                          ? "text-[#FACC15]"
                          : solidBg
                            ? "text-[#0B1F3A]"
                            : "text-white"
                      }
                    `}
                  >
                    {link.label}
                    <span
                      className="
    absolute -bottom-1 left-0 h-0.5 bg-[#FACC15]
    w-0 group-hover:w-full
    transition-all duration-300
  "
                    />
                  </Link>
                )}
              </li>
            );
          })}

          {/* CTA button */}
          <li>
            <button
              onClick={() => handleLinkClick({ type: "hash", to: "#contact" })}
              className="bg-[#0B1F3A] text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-[#FACC15] hover:text-[#0B1F3A] transition-all duration-300"
            >
              Get Quote
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`
            md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 p-1
            transition-colors duration-200
            ${solidBg ? "text-[#0B1F3A]" : "text-white"}
          `}
          onClick={() => (menuOpen ? closeMobileMenu() : setMenuOpen(true))}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      {(menuOpen || closing) && (
        <div
          className={`
            md:hidden bg-[#0B1F3A] border-t border-[#FACC15]/20
            px-6 py-6 flex flex-col gap-1
            overflow-hidden
            ${closing ? "animate-slideUp" : "animate-slideDown"}
          `}
        >
          {NAV_LINKS.map((link) => {
            const active =
              (link.type === "hash" && activeSection === "contact") ||
              (link.type === "route" &&
                location.pathname === link.to &&
                activeSection !== "contact");
            return (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link)}
                className={`
                  w-full text-left font-semibold text-base tracking-wide
                  border-b border-white/10 py-3.5
                  transition-colors duration-200 flex items-center gap-2
                  ${active ? "text-[#FACC15]" : "text-white hover:text-[#FACC15]"}
                `}
              >
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] shrink-0" />
                )}
                {link.label}
              </button>
            );
          })}

          {/* Mobile CTA */}
          <button
            onClick={() => handleLinkClick({ type: "hash", to: "#contact" })}
            className="mt-4 bg-[#FACC15] text-[#0B1F3A] text-center px-5 py-3 rounded font-black text-sm tracking-widest uppercase hover:bg-yellow-300 transition-all duration-300 w-full"
          >
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
}
