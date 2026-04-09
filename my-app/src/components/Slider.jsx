import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import slide5 from "../assets/slide5.webp";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "Tata Kamdhenu Steel",
    img: slide2,
    label: "Tata Kamdhenu Steel",
    sub: "High Strenght And Contruction Resistance",
  },
  {
    title: "JSW Steel Limited",
    img: slide1,
    label: "JSW Steel Limited",
    sub: "Innovative Steel Solutions",
  },
  {
    title: "SAIL Steel",
    img: slide3,
    label: "SAIL Steel",
    sub: "Reliable Steel Solutions",
  },
  {
    title: "ESL Steel (Vedanta)",
    img: slide4,
    label: "ESL Steel (Vedanta)",
    sub: "Sustainable Steel Solutions",
  },
  {
    title: "RINL Vizag Steel",
    img: slide5,
    label: "RINL Vizag Steel",
    sub: "Efficient Steel Solutions",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 3500);
  };

  return (
    <section className="pywebp bg-[#f6f7f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#FACC15] font-bold tracking-widest text-xs uppercase mb-2">
            Gallery
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-[#0B1F3A]">
            Our Facilities & Products
          </h2>
        </div>

        <div className="relative">
          {/* Slider Track */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="min-w-full relative">
                  {/* Placeholder */}
                  <div className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[550px] relative overflow-hidden">
                    {/* IMAGE */}
                    <div className="w-full h-full bg-[#0B1F3A]">
                      <img
                        src={slide.img}
                        alt={slide.label}
                        className="w-full h-full object-contain sm:object-cover"
                      />
                    </div>
                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-[#0B1F3A]/30"></div>

                    {/* TEXT OVERLAY */}
                    <div className="absolute bottom-4 left-4 right-4">
                      {/* LABEL → ALWAYS VISIBLE */}
                      <p className="text-white font-bold text-sm md:text-lg">
                        {slide.label}
                      </p>

                      {/* SUBTITLE → ONLY DESKTOP */}
                      <p className="hidden md:block text-white/80 text-sm">
                        {slide.sub}
                      </p>
                    </div>
                    {/* SLIDE COUNT */}
                    <div className="absolute bottom-4 right-6">
                      <span className="bg-[#FACC15] text-[#0B1F3A] text-xs font-black px-3 py-1 rounded">
                        {i + 1} / {slides.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => {
              prev();
              resetTimer();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#FACC15] text-[#0B1F3A] w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 font-black z-10"
          >
            ‹
          </button>
          <button
            onClick={() => {
              next();
              resetTimer();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#FACC15] text-[#0B1F3A] w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 font-black z-10"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                resetTimer();
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-[#FACC15]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
