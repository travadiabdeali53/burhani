import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Animate from "../components/Animate";
import Footer from "../components/Footer";

import cert1 from "../assets/cert1.webp";
import cert2 from "../assets/cert2.webp";

export default function Certificates() {
  const certificates = [cert1, cert2];

  const [selected, setSelected] = useState(null);

  const nextImage = () => {
    setSelected((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelected((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selected === null) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }

      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <div className="bg-white font-['Poppins',sans-serif]">
      {/* HERO SECTION */}
      <section className="relative bg-[#0B1F3A] text-white pt-14 pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots" width="28" height="28">
                <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Animate variant="fadeDown" duration="duration-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#FACC15]" />
              <span className="text-[#FACC15] text-xs font-bold tracking-widest uppercase">
                Quality Assurance
              </span>
              <div className="w-8 h-0.5 bg-[#FACC15]" />
            </div>
          </Animate>

          <Animate variant="fadeUp" delay="delay-100" duration="duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none">
              OUR <span className="text-[#FACC15]">CERTIFICATES</span>
            </h2>
          </Animate>

          <Animate variant="fadeUp" delay="delay-300" duration="duration-500">
            <div className="mt-6 text-white/40 text-xs font-semibold tracking-wide">
              <Link to="/">Home</Link> /{" "}
              <span className="text-[#FACC15]">Certificates</span>
            </div>
          </Animate>
        </div>
      </section>

      {/* CERTIFICATES GRID */}
      <section className="py-16 bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {certificates.map((certificate, index) => (
              <Animate
                key={index}
                variant="fadeUp"
                delay={index === 0 ? "delay-100" : "delay-300"}
                duration="duration-700"
              >
                <div
                  onClick={() => setSelected(index)}
                  className="
        bg-white
        border
        border-gray-200
        rounded-lg
        p-3
        cursor-pointer
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
                >
                  <img
                    src={certificate}
                    alt={`Certificate ${index + 1}`}
                    className="
              w-full
              h-[260px]
              sm:h-[300px]
              lg:h-[340px]
              object-contain
            "
                  />
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN GALLERY */}
      {selected !== null && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setSelected(null)}
            className="
        absolute
        top-5
        right-5
        text-white
        text-4xl
        font-light
        hover:text-[#FACC15]
      "
          >
            ×
          </button>

          {/* Previous */}
          <button
            onClick={prevImage}
            className="
    absolute
    left-2 sm:left-4
    top-1/2
    -translate-y-1/2
    w-10 h-10 sm:w-12 sm:h-12
    rounded-full
    bg-black/60
    text-white
    text-2xl sm:text-4xl
    flex items-center justify-center
    hover:bg-[#FACC15]
    hover:text-[#0B1F3A]
    transition-all
  "
          >
            ‹
          </button>

          {/* Certificate */}
          <img
            src={certificates[selected]}
            alt="Certificate"
            className="
        max-h-[85vh]
        max-w-[90vw]
        object-contain
        bg-white
        p-2
        shadow-2xl
      "
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="
    absolute
    right-2 sm:right-4
    top-1/2
    -translate-y-1/2
    w-10 h-10 sm:w-12 sm:h-12
    rounded-full
    bg-black/60
    text-white
    text-2xl sm:text-4xl
    flex items-center justify-center
    hover:bg-[#FACC15]
    hover:text-[#0B1F3A]
    transition-all
  "
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 text-white text-sm">
            {selected + 1} / {certificates.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
