import { Link } from "react-router-dom";
import Animate from "../components/Animate";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-white font-['Poppins',sans-serif]">
      {/* ══════════════════════════
          1. HERO BANNER
      ══════════════════════════ */}
      <section className="relative bg-[#0B1F3A] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 overflow-hidden">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="contactdots"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactdots)" />
          </svg>
        </div>

        {/* Ghost Letters */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(80px,15vw,180px)] font-black text-white/[0.03] select-none leading-none pointer-events-none hidden md:block tracking-tighter pr-4">
          BSH
        </div>

        {/* Yellow Glow */}
        <div className="absolute -bottom-12 left-1/3 w-80 h-32 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Animate variant="fadeDown" duration="duration-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#FACC15]" />
              <span className="text-[#FACC15] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                Get In Touch
              </span>
              <div className="w-8 h-0.5 bg-[#FACC15]" />
            </div>
          </Animate>

          <Animate variant="fadeUp" delay="delay-100" duration="duration-700">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
              CONTACT <span className="text-[#FACC15]">US</span>
            </h1>
          </Animate>

          {/* Breadcrumb */}
          <Animate variant="fadeUp" delay="delay-300" duration="duration-500">
            <div className="flex items-center justify-center gap-2 mt-6 text-white/30 text-xs font-semibold tracking-wide">
              <Link to="/" className="hover:text-[#FACC15] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FACC15]">Contact Us</span>
            </div>
          </Animate>
        </div>
      </section>

      {/* ══════════════════════════
          2. CONTACT SECTION
      ══════════════════════════ */}
      <section className="py-10 sm:py-14 lg:py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-5 lg:gap-6 items-start">
            {/* LEFT SIDE */}
            <div>
              <Animate variant="fadeRight" duration="duration-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-0.5 bg-[#FACC15]" />
                  <span className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
                    Contact Information
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] leading-tight mb-6">
                  Let’s Connect With
                  <br />
                  <span className="relative inline-block">
                    Burhani Steel
                    <span className="absolute -bottom-1 left-0 w-full h-[5px] bg-[#FACC15] rounded" />
                  </span>
                </h2>
              </Animate>

              <div className="space-y-8">
                {/* ADDRESS */}
                <Animate
                  variant="fadeUp"
                  delay="delay-100"
                  duration="duration-600"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#FACC15] flex items-center justify-center shrink-0 shadow-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#0B1F3A] mb-2">
                        Office Address
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Burhani Steel & Hardware,
                        <br />
                        Opposite Mandavraiji Chembur,
                        <br />
                        Kukda Press Jin,
                        <br />
                        Surendranagar – 363001, Gujarat
                      </p>
                    </div>
                  </div>
                </Animate>

                {/* PHONE */}
                <Animate
                  variant="fadeUp"
                  delay="delay-200"
                  duration="duration-600"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#FACC15] flex items-center justify-center shrink-0 shadow-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#0B1F3A] mb-2">
                        Contact Number
                      </h3>

                      <a
                        href="tel:+919429647672"
                        className="block text-[#0B1F3A] font-black text-lg sm:text-xl hover:text-[#FACC15] transition-colors"
                      >
                        +91 9429647672
                      </a>

                      <a
                        href="tel:+919033772756"
                        className="block text-gray-600 text-base mt-1 hover:text-[#FACC15] transition-colors"
                      >
                        +91 9033772756
                      </a>
                    </div>
                  </div>
                </Animate>

                {/* EMAIL */}
                <Animate
                  variant="fadeUp"
                  delay="delay-300"
                  duration="duration-600"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#FACC15] flex items-center justify-center shrink-0 shadow-md">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#0B1F3A] mb-2">
                        E-mail Address
                      </h3>

                      <a
                        href="mailto:info@burhanisteels.com"
                        className="text-gray-600 hover:text-[#FACC15] transition-colors text-sm sm:text-base"
                      >
                        info@burhanisteels.com
                      </a>
                    </div>
                  </div>
                </Animate>
              </div>
            </div>

            {/* RIGHT SIDE - MAP */}
            <Animate
              variant="fadeLeft"
              delay="delay-100"
              duration="duration-800"
            >
              <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-200">
                <div className="rounded-xl overflow-hidden h-[320px] sm:h-[380px] lg:h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.26392313831!2d71.6346787658239!3d22.72287250532792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959413a9d468ad1%3A0xd75ae8120118590!2sBurhani%20Steel%20%26%20Hardware!5e0!3m2!1sen!2sin!4v1775646163437!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Burhani Steel Location"
                  ></iframe>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          3. CTA SECTION
      ══════════════════════════ */}
      <section className="py-12 sm:py-14 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Animate variant="fadeUp" duration="duration-700">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] mb-3">
              Need Steel Products For Your Project?
            </h3>

            <p className="text-gray-500 text-sm mb-7">
              Contact us today for the best rates on TMT bars, angles,
              structural steel, fencing materials and hardware products.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/products"
                className="bg-[#0B1F3A] text-white px-6 py-3 rounded font-bold text-sm tracking-widest uppercase hover:bg-[#FACC15] hover:text-[#0B1F3A] transition-all duration-300 shadow-md"
              >
                View Products
              </Link>

              <a
                href="tel:+919429647672"
                className="border-2 border-[#0B1F3A] text-[#0B1F3A] px-6 py-3 rounded font-bold text-sm tracking-widest uppercase hover:border-[#FACC15] hover:text-[#FACC15] transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </Animate>
        </div>
      </section>

      <Footer />
    </div>
  );
}
