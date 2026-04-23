import { Link } from "react-router-dom";
import { useEffect } from "react";
import Animate from "../components/Animate";
import Footer from "../components/Footer";

// ─── Replace these imports with your actual asset paths ──────────────────────
import aboutImg from "../assets/about.webp";
import sail from "../assets/brands/sail.webp";
import jsw from "../assets/brands/jsw.webp";
import vizag from "../assets/brands/vizag.webp";
import electrosteel from "../assets/brands/electro-steel.webp";
import kamdhenu from "../assets/brands/kamdhenu-steel.webp";
import key2 from "../assets/brands/key-2-steel.webp";
import ettmt from "../assets/brands/et-tmt.webp";

// ─── Data ─────────────────────────────────────────────────────────────────────

const primaryBrands = [
  {
    name: "SAIL Steel",
    full: "Steel Authority of India Ltd.",
    link: "/products/sail",
    logo: sail,
  },
  {
    name: "JSW Steel",
    full: "JSW Steel Ltd.",
    link: "/products/jsw",
    logo: jsw,
  },
  {
    name: "VIZAG Steel",
    full: "Rashtriya Ispat Nigam Limited",
    link: "/products?brand=vizag",
    logo: vizag,
  },
  {
    name: "Electro Steel",
    full: "Electro Steel India Ltd.",
    link: "/products/electrosteel",
    logo: electrosteel,
  },
];

const secondaryBrands = [
  {
    name: "Kamdhenu Steel",
    full: "Kamdhenu Steel & Alloys",
    link: "/products/kamdhenu",
    logo: kamdhenu,
  },
  {
    name: "Kay2 TMT Bars",
    full: "Kay2 TMT Bars",
    link: "/products/key2",
    logo: key2,
  },
  {
    name: "ET TMT",
    full: "ET-TMT Steel",
    link: "/products/ettmt",
    logo: ettmt,
  },
];

const checkpoints = [
  "We provide Test Certificates of our products",
  "We provide F.O.R. Delivery",
  "We provide Transportation, Weight, Loading, or Unloading",
  "To inquire about any of the Iron and Steel products click View Products",
];

const whyUs = [
  {
    title: "Guaranteed Quality",
    desc: "Every product is ISI certified and sourced directly from top manufacturers.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Best Market Rates",
    desc: "Competitive pricing with no hidden charges. Bulk discounts available.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    desc: "Large ready stock ensures same-day or next-day dispatch to your site.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Expert Guidance",
    desc: "Our team helps you choose the right grade and section for your project.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

// ─── Logo Card ────────────────────────────────────────────────────────────────

function LogoCard({ name, full, link = "#", logo, delay = "" }) {
  return (
    <Animate variant="scaleUp" delay={delay} duration="duration-500">
      <Link to={link} className="block">
        <div
          className="
          group 
          w-[150px] sm:w-[165px] md:w-[185px] lg:w-[210px]
          h-[140px] sm:h-[150px] md:h-[165px]

          border border-gray-200 
          hover:border-[#FACC15] hover:border-2

          bg-white hover:bg-[#f0f7ff]   /* 💡 light cold blue */

          rounded-xl flex flex-col items-center justify-center
          gap-2   /* ✅ controls spacing */

          px-3 py-4

          shadow-sm hover:shadow-md
          hover:-translate-y-1 hover:scale-[1.04]

          transition-all duration-300
        "
        >
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt={name}
              loading="lazy"
              className="
                h-14 sm:h-16 md:h-20   /* ✅ bigger logo */
                w-auto object-contain

                transition duration-300
                group-hover:scale-110
              "
            />
          </div>

          {/* Text */}
          <div className="text-center leading-tight">
            <p
              className="
              font-black text-[#0B1F3A] 
              text-xs sm:text-sm
            "
            >
              {name}
            </p>

            <p
              className="
              text-gray-400 
              text-[10px] sm:text-xs
              mt-0.5
            "
            >
              {full}
            </p>
          </div>
        </div>
      </Link>
    </Animate>
  );
}
// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {

  return (
    <div className="bg-white font-['Poppins',sans-serif]">
      {/* ══════════════════════════
          1. HERO BANNER
      ══════════════════════════ */}
      <section className="relative bg-[#0B1F3A] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="aboutdots"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutdots)" />
          </svg>
        </div>

        {/* Ghost letters */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(80px,15vw,180px)] font-black text-white/[0.03] select-none leading-none pointer-events-none hidden md:block tracking-tighter pr-4">
          BSH
        </div>

        {/* Yellow glow */}
        <div className="absolute -bottom-12 left-1/3 w-80 h-32 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Animate variant="fadeDown" duration="duration-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#FACC15]" />
              <span className="text-[#FACC15] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                Who We Are
              </span>
              <div className="w-8 h-0.5 bg-[#FACC15]" />
            </div>
          </Animate>

          <Animate variant="fadeUp" delay="delay-100" duration="duration-700">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              ABOUT <span className="text-[#FACC15]">US</span>
            </h1>
          </Animate>

          <Animate
            variant="fadeUp"
            delay="delay-200"
            duration="duration-600"
          ></Animate>

          {/* Breadcrumb */}
          <Animate variant="fadeUp" delay="delay-300" duration="duration-500">
            <div className="flex items-center justify-center gap-2 mt-6 text-white/30 text-xs font-semibold tracking-wide">
              <Link to="/" className="hover:text-[#FACC15] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FACC15]">About Us</span>
            </div>
          </Animate>
        </div>
      </section>

      {/* ══════════════════════════
          2. ABOUT CONTENT
      ══════════════════════════ */}
      <section className="py-8 sm:py-12 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT — Text */}
            <div>
              <Animate variant="fadeRight" duration="duration-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-0.5 bg-[#FACC15]" />
                  <span className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
                    Our Story
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] leading-tight mb-5">
                  About Our Shop
                  <br />
                  <span className="relative inline-block">
                    &amp; Business
                    <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-[#FACC15] rounded" />
                  </span>
                </h2>
              </Animate>

              <Animate
                variant="fadeUp"
                delay="delay-100"
                duration="duration-600"
              >
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-4 text-justify">
                  <strong className="text-[#0B1F3A]">
                    Burhani Steel &amp; Hardware
                  </strong>{" "}
                  is a trusted supplier of a comprehensive range of steel and
                  fencing products, including <strong>TMT Bars</strong>,{" "}
                  <strong>Mild Steel Angles</strong>, <strong>Channels</strong>,{" "}
                  <strong>Beams</strong>, <strong>Wire Rod Coils</strong>,{" "}
                  <strong>Rounds</strong>, <strong>Plates</strong>,{" "}
                  <strong>Sheets</strong>, <strong>Alloy Steel</strong>, as well
                  as <strong>Tata Barbed Wire</strong>,{" "}
                  <strong>Bansal Barbed Wire</strong>,{" "}
                  <strong>Chain Link Jali</strong>, <strong>GI Wire</strong>,
                  and <strong>Knotted Chain Link</strong> solutions.
                </p>

                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-6 text-justify">
                  We cater to contractors, builders, and industries across
                  Surendranagar and Gujarat, delivering{" "}
                  <strong>superior quality materials</strong>,{" "}
                  <strong>prompt supply</strong>, and{" "}
                  <strong>reliable after-sales service</strong>.
                </p>
              </Animate>

              {/* Checklist */}
              <Animate
                variant="fadeUp"
                delay="delay-200"
                duration="duration-600"
              >
                <ul className="space-y-2.5 mb-8">
                  {checkpoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#FACC15] rounded flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-[#0B1F3A]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </Animate>
            </div>

            {/* RIGHT — Image */}
            <Animate
              variant="fadeLeft"
              delay="delay-100"
              duration="duration-800"
            >
              <div className="relative">
                {/* Main image */}
                <div className="h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={aboutImg}
                    alt="Burhani Steel business"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ISI badge floating */}
                <div className="absolute top-4 left-4 bg-[#0B1F3A] rounded-xl px-3 py-2.5 shadow-lg">
                  <p className="text-[#FACC15] font-black text-lg leading-none">
                    ISI
                  </p>
                  <p className="text-white/60 text-[9px] font-bold tracking-wider uppercase mt-0.5">
                    Certified
                  </p>
                </div>

                {/* Years badge floating */}
                <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-[#FACC15] rounded-xl px-4 py-3 shadow-xl border-4 border-white">
                  <p className="text-[#0B1F3A] font-black text-2xl leading-none">
                    30+
                  </p>
                  <p className="text-[#0B1F3A]/70 text-[10px] font-bold tracking-wider uppercase mt-0.5">
                    Years
                  </p>
                </div>

                {/* Decorative dot cluster */}
                <div className="absolute -left-4 -bottom-4 grid grid-cols-4 gap-1 opacity-30 hidden sm:grid">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"
                    />
                  ))}
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          3. WHY CHOOSE US
      ══════════════════════════ */}
      <section className="py-14 sm:py-16 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="whydots"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#whydots)" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FACC15]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FACC15]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Animate variant="fadeDown" duration="duration-700">
            <div className="text-center mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-6 h-0.5 bg-[#FACC15]" />
                <span className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
                  Our Promise
                </span>
                <div className="w-6 h-0.5 bg-[#FACC15]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Why Builders Trust{" "}
                <span className="text-[#FACC15]">Burhani</span>
              </h2>
            </div>
          </Animate>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUs.map((item, i) => (
              <Animate
                key={i}
                variant="fadeUp"
                delay={`delay-[${i * 100}ms]`}
                duration="duration-600"
              >
                <div className="group bg-white/5 hover:bg-[#FACC15] border border-white/10 hover:border-[#FACC15] rounded-xl p-5 sm:p-6 transition-all duration-300 h-full">
                  <div className="text-[#FACC15] group-hover:text-[#0B1F3A] mb-3 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-white group-hover:text-[#0B1F3A] font-black text-sm sm:text-base mb-1.5 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/50 group-hover:text-[#0B1F3A]/70 text-xs leading-relaxed transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          4. PRIMARY BRANDS
      ══════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate variant="fadeDown" duration="duration-700">
            <div className="text-center mb-3">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-6 h-0.5 bg-[#FACC15]" />
                <span className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
                  Our Partners
                </span>
                <div className="w-6 h-0.5 bg-[#FACC15]" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A]">
                We Deal In Renowned Primary Brands
              </h2>
            </div>
          </Animate>

          <Animate variant="fadeUp" delay="delay-100" duration="duration-600">
            <p className="text-center text-gray-500 text-sm max-w-lg mx-auto mb-10 sm:mb-12">
              Authorised dealers and stockists of India's top primary steel
              producers — genuine, ISI-certified material guaranteed on every
              order.
            </p>
          </Animate>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {primaryBrands.map((b, i) => (
              <LogoCard key={b.name} {...b} />
            ))}
          </div>

          {/* Divider */}
          <Animate variant="fadeIn" duration="duration-500">
            <div className="flex items-center gap-4 my-14">
              <div className="flex-1 h-px bg-gray-200" />
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shrink-0 shadow-sm">
                <div className="w-2 h-2 bg-[#FACC15] rounded-full" />
                <span className="text-[#0B1F3A] text-[10px] font-bold tracking-widest uppercase">
                  Secondary Producers
                </span>
                <div className="w-2 h-2 bg-[#FACC15] rounded-full" />
              </div>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </Animate>

          {/* ── Secondary Brands ── */}
          <Animate variant="fadeDown" duration="duration-700">
            <div className="text-center mb-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1F3A]">
                We Are Distributors of Secondary Steel Producers
              </h2>
            </div>
          </Animate>

          <Animate variant="fadeUp" delay="delay-100" duration="duration-600">
            <p className="text-center text-gray-500 text-sm max-w-lg mx-auto mb-10 sm:mb-12">
              We also stock trusted secondary manufacturers to serve every
              project budget and specification requirement.
            </p>
          </Animate>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {secondaryBrands.map((b, i) => (
              <LogoCard key={b.name} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          5. CTA STRIP
      ══════════════════════════ */}
      <Animate variant="fadeUp" duration="duration-700">
        <section className="py-12 sm:py-14 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] mb-3">
              Ready to place an order?
            </h3>
            <p className="text-gray-500 text-sm mb-7">
              Contact us today for the best rates on TMT bars, angles, pipes,
              sheets and all structural steel products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 w-full">
              <Link
                to="/#contact"
                className="w-full sm:w-auto text-center
  bg-[#0B1F3A] text-white
  px-6 py-3 rounded font-bold text-sm tracking-widest uppercase
  hover:bg-[#FACC15] hover:text-[#0B1F3A]
  transition-all duration-300 shadow-md"
              >
                Contact Us
              </Link>
              <Link
                to="/products"
                className="w-full sm:w-auto text-center
  border-2 border-[#0B1F3A] text-[#0B1F3A]
  px-6 py-3 rounded font-bold text-sm tracking-widest uppercase
  hover:border-[#FACC15] hover:text-[#FACC15]
  transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </Animate>

      <Footer />
    </div>
  );
}
