import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import slide5 from "../assets/slide5.webp";
import slide6 from "../assets/slide6.webp";
import slide7 from "../assets/slide7.webp";
import slide8 from "../assets/slide8.webp";
import welcome2 from "../assets/welcome2.webp";

import { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "Tata Kamdhenu Steel",
    img: slide2,
    label: "Tata Tiscon Steel",
    sub: "High Strenght And Contruction Resistance",
  },
  {
    title: "Kamdhenu Steel",
    img: slide6,
    label: "Kamdhenu Steel",
    sub: "Sampurna Surksha Ki Guarantee",
  },
  {
    title: "JSW Steel Limited",
    img: slide1,
    label: "JSW Steel Limited",
    sub: "Innovative Steel Solutions",
  },
  {
    title: "Jindal Steel",
    img: slide7,
    label: "Jindal Steel",
    sub: "The Steel of India",
  },
  {
    title: "SAIL Steel",
    img: slide3,
    label: "SAIL Steel",
    sub: "Reliable Steel Solutions",
  },
  {
    title: "Sika India",
    img: slide4,
    label: "Sika India",
    sub: "Sustainable Steel Solutions",
  },
  {
    title: "Fosroc Chemicals",
    img: slide8,
    label: "Fosroc Chemicals",
    sub: "Constructive Solutions | Building Services",
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
      <div className="max-w-7xl mx-auto px-6 pb-7">
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
                        loading="lazy"
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
      {/* ABOUT TEXT SECTION */}
<section className="bg-[#efefef] pt-5 pb-4 md:pt-8 md:pb-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 grid md:grid-cols-[1.5fr_1fr] gap-5 items-center">

    {/* LEFT TEXT */}
    <div className="text-gray-700 text-[13px] sm:text-[14px] md:text-base leading-6 sm:leading-7 md:leading-8 text-left md:text-justify">

      {/* HEADING */}
      <h2 className="text-[28px] sm:text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-4 leading-tight">
        Welcome to{" "}
        <span className="text-[#FACC15]">
          Burhani Steel & Hardware
        </span>
      </h2>

      <p>
        Established in 1994 in Surendranagar (Gujarat, India),
        <span className="font-semibold text-[#0B1F3A]">
          {" "}Burhani Steel & Hardware
        </span>,
        also known as
        <span className="font-semibold">
          {" "}Gujarat Steel & Hardware
        </span>,
        is a trusted name in supplying premium-quality steel and hardware products.
      </p>

      <p className="mt-4">
        We deal in
        <span className="font-semibold">
          {" "}TMT Bars, Pipes, Structural Steel, Plates
        </span>
        and more—known for their
        <span className="font-semibold">
          {" "}strength, durability, and reliability
        </span>.
        Our product range also includes
        <span className="font-semibold">
          {" "}Tata Barbed Wire, Bansal Barbed Wire, Tata Chain Link Jali,
          Bansal Chain Link Jali, all types of GI Wire, and Knotted Chain Link
        </span>,
        catering to diverse fencing and structural applications.
      </p>

      <p className="mt-4">
        Backed by strong partnerships with industry leaders like
        <span className="font-semibold">
          {" "}Tata Steel, JSW Steel Ltd., SAIL, and All Types of Raipur Structural Steel 
        </span>,
        along with trusted secondary brands like
        <span className="font-semibold">
          {" "}Kamdhenu and Electro Steel
        </span>,
        we ensure
        <span className="font-semibold">
          {" "}consistent quality, ready stock availability, and dependable supply{" "}
        </span>
        across Surendranagar and beyond.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end mt-2 md:mt-0">
      <img
        src={welcome2}
        alt="Steel Products"
        loading="lazy"
        className="w-full max-w-[340px] md:max-w-[500px] lg:max-w-[580px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] object-cover rounded-xl shadow-md"
      />
    </div>

  </div>
</section>
    </section>
  );
}
