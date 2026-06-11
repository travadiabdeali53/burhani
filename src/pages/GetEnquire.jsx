import { useState } from "react";
import { Link } from "react-router-dom";
import Animate from "../components/Animate";
import Footer from "../components/Footer";
import steelproducts from "../assets/steelproducts.webp";

export default function GetEnquire() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.city ||
      !form.requirement
    ) {
      alert("All fields are required (*)");
      return;
    }

    const message = `*Burhani Steel & Hardware Enquiry*

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
City: ${form.city}

Requirement:
${form.requirement}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/919429647672?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white font-['Poppins',sans-serif]">
      {/* ══════════════════════════
          HERO BANNER
      ══════════════════════════ */}
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
          <Animate variant="fadeUp">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              SHARE YOUR{" "}
              <span className="text-[#FACC15] text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                REQUIREMENTS
              </span>
            </h1>
          </Animate>

          <div className="mt-4 text-white/40 text-xs">
            <Link to="/">Home</Link> /{" "}
            <span className="text-[#FACC15]">Get Enquiry</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          FORM SECTION
      ══════════════════════════ */}
      <section className="py-12 sm:py-16 pb-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-10 items-stretch">
            {/* LEFT FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-7 rounded-2xl shadow-md border border-gray-200 flex flex-col h-full"
            >
              <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                {/* Name */}
                <div>
                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full mt-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    Your Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full mt-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full mt-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    Your City <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full mt-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#0B1F3A]">
                    Requirements <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    placeholder="Enter your requirement"
                    rows="4"
                    required
                    className="w-full mt-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FACC15] focus:ring-2 focus:ring-[#FACC15]/30"
                  />
                </div>
                
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#0B1F3A] text-white py-3 rounded font-bold tracking-wide hover:bg-[#FACC15] hover:text-[#0B1F3A] transition-all duration-300"
                >
                  Submit on WhatsApp
                </button>
              </div>
            </form>

            {/* RIGHT IMAGE */}
            <div className="mt-6 lg:mt-0 flex justify-center">
              <img
                src={steelproducts}
                alt="Steel Products"
                className="rounded-2xl shadow-xl w-full h-[260px] sm:h-[460px] lg:h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
