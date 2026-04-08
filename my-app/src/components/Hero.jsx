import steel1 from "../assets/steel1.png";
import steel2 from "../assets/steel2.jpg";
import steel3 from "../assets/steel3.png";
import steel4 from "../assets/steel4.png";
import steel5 from "../assets/steel5.png";
import steel6 from "../assets/steel6.png";
import steel7 from "../assets/steel7.png";
import steel8 from "../assets/steel8.png";
import steel9 from "../assets/steel9.png";


function ImgBox({ label, src, className = "", tint = "gray" }) {
  const bg =
    tint === "yellow"
      ? "bg-[#FACC15]/15 border-[#FACC15]/30"
      : tint === "dark"
        ? "bg-[#0B1F3A]/10 border-[#0B1F3A]/20"
        : "bg-gray-200 border-gray-300";

  return (
    <div
      className={`relative border-2 rounded-xl overflow-hidden ${bg} ${className}`}
    >
      {/* IMAGE */}
      <img src={src} alt={label} className="w-full h-full object-cover" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* LABEL */}
      {label && (
        <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold">
          {label}
        </span>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white pt-16 sm:pt-24  relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="herogrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#0B1F3A"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#herogrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 py-6 lg:py-10">
          {/* ══════════════════════════
              LEFT — Text Content
          ══════════════════════════ */}
          <div className="w-full lg:w-[44%] flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-1">
            {/* Trusted badge */}
            <div className="inline-flex items-center gap-2 bg-[#FACC15]/10 border border-[#FACC15]/40 rounded-full px-3 py-1 mb-4">
              <div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full animate-pulse" />
              <span className="text-[#0B1F3A] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                Trusted Since 1994
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[5rem] font-black text-[#0B1F3A] leading-[1.0] tracking-tight mb-4">
              HIGH
              <br />
              <span className="relative inline-block">
                QUALITY
                <span className="absolute -bottom-1 left-0 w-full h-[5px] sm:h-[6px] bg-[#FACC15] rounded" />
              </span>
              <br />
              STEEL
              <br />
              SUPPLIER
            </h1>

            {/* Sub brand name */}
            <h2 className="text-xs sm:text-sm lg:text-base font-bold text-[#FACC15] tracking-[0.18em] uppercase mt-5 mb-3">
              Burhani Steel & Hardware
            </h2>

            {/* Description */}
            <p className="text-[#0B1F3A]/55 text-sm sm:text-[15px] leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md mb-7 font-medium">
              Ahmedabad's most trusted source for premium steel. We supply TMT
              bars, angles, pipes, sheets and all structural steel needs for
              construction & industrial projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <a
                href="#contact"
                className="bg-[#0B1F3A] text-white px-6 sm:px-8 py-3 font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-[#FACC15] hover:text-[#0B1F3A] transition-all duration-300 rounded"
              >
                Contact Now
              </a>
              <a
                href="#products"
                className="border-2 border-[#0B1F3A] text-[#0B1F3A] px-6 sm:px-8 py-3 font-bold text-xs sm:text-sm tracking-widest uppercase hover:border-[#FACC15] hover:text-[#FACC15] transition-all duration-300 rounded"
              >
                Our Products
              </a>
            </div>

            {/* ISI Certified card — clean inline placement */}
            
          </div>

          {/* ══════════════════════════
              RIGHT — Image Mosaic Grid
              Always visible on all devices
          ══════════════════════════ */}
          <div className="w-full lg:w-[56%] z-10 order-2" style={{ marginTop: "-20px" }}>
            {/* ── MOBILE (< lg): stacked responsive grid ── */}
            <div className="lg:hidden flex flex-col gap-2.5">
              {/* Row 1: 1 wide image */}
              <ImgBox label="TMT Bars" src={steel1} className="flex-1" />

              {/* Row 2: 2 equal */}
              <div className="grid grid-cols-2 gap-2.5">
                <ImgBox label="Steel Angles" src={steel2} className="flex-1" />
                <ImgBox label="MS Pipes" src={steel3} className="flex-1" />
              </div>

              {/* Row 3: 3 small */}
              <div className="grid grid-cols-3 gap-2.5">
                <ImgBox label="Steel Sheets & Plates" src={steel4} className="" />
                <ImgBox label="Channels & Beams" src={steel5} className="flex-1" />
                <ImgBox label="GI / HR Coils" src={steel6} className="h-20" />
              </div>

              {/* Row 4: 2 unequal */}
              <div
                className="grid gap-2.5"
                style={{ gridTemplateColumns: "2fr 1fr" }}
              >
                <ImgBox label="Hardware & Fasteners" src={steel7} className="h-24 w-45" />
                <ImgBox label="Wire Mesh & Rod" src={steel8} className="h-24" />
              </div>
            </div>

            {/* ── DESKTOP (lg+): rich mosaic layout ── */}
            <div className="hidden lg:flex flex-col gap-3">
              {/* Row 1: big + 2 stacked */}
              <div
                className="grid gap-3"
                style={{ gridTemplateColumns: "1.7fr 1fr" }}
              >
                <ImgBox label="TMT Bars" src={steel1} className="h-60" />
                <div className="flex flex-col gap-2">
                  <ImgBox label="Steel Angles" src={steel2} className="h-26" />
                  <ImgBox label="MS Pipes" src={steel3} className="h-20" />
                </div>
              </div>

              {/* Row 2: 3 equal */}
              <div className="grid grid-cols-3 gap-3">
                <ImgBox label="Steel Sheets & Plates" src={steel4} className="flex-1" />
                <ImgBox label="Channels & Beams" src={steel5} className="flex1" />
                <ImgBox label="GI / HR Coils" src={steel6} className="flex-1" />
              </div>

              {/* Row 3: wide + small + small */}
              <div
                className="grid gap-3"
                style={{ gridTemplateColumns: "1fr 1fr 1.2fr" }}
              >
                <ImgBox label="Hardware & Fasteners" src={steel7} className="" />
                <ImgBox label="Wire Mesh & Rod" src={steel8} className="flex-1" />
                <ImgBox label="Warehouse / Yard " src={steel9} className="flex-1" />
              </div>
            </div>

            {/* Accent dots — desktop */}
            <div className="hidden lg:flex justify-end gap-1.5 mt-2 pr-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"
                  style={{ opacity: 1 - i * 0.13 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 50"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
