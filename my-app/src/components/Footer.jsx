import logo3 from "../assets/logo3.png";
export default function Footer() {
  const quickLinks = ["Home", "About", "Products", "Contact"];
  const productLinks = [
    "TMT Bars",
    "Steel Angles",
    "MS Pipes",
    "Steel Sheets",
    "Channels & Beams",
    "Hardware",
  ];

  return (
    <footer id="contact" className="bg-[#0B1F3A]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Quick Links */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-[#FACC15]" />
            <h3 className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
              Quick Links
            </h3>
          </div>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-[#FACC15] text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-0.5 bg-[#FACC15] transition-all duration-200" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Our Products */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-[#FACC15]" />
            <h3 className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
              Our Products
            </h3>
          </div>
          <ul className="space-y-3">
            {productLinks.map((product) => (
              <li key={product}>
                <a
                  href="#products"
                  className="text-white/60 hover:text-[#FACC15] text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-0.5 bg-[#FACC15] transition-all duration-200" />
                  {product}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-[#FACC15]" />
            <h3 className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
              Contact Info
            </h3>
          </div>
          <ul className="space-y-5">
            <li className="flex gap-3">
              <span className="mt-0.5 text-[#FACC15] shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-white/60 text-sm leading-relaxed">
                Burhani Steel & Hardware,
                <br />
                Opposite Mandavraiji Chembur,
                <br />
                Kukda Press Jin,
                <br />
                Surendranagar – 363001, Gujarat
              </p>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#FACC15] shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <a
                href="tel:+919429647672"
                className="text-white/60 hover:text-[#FACC15] text-sm transition-colors"
              >
                +91 9429647672
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#FACC15] shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <a
                href="mailto:info@burhanisteels.com"
                className="text-white/60 hover:text-[#FACC15] text-sm transition-colors"
              >
                info@burhanisteels.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-[#FACC15] shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-white/60 text-sm">
                Mon–Sat: 9:00 AM – 7:00 PM
              </p>
            </li>
          </ul>
        </div>

        {/* Column 4: Map Placeholder */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-0.5 bg-[#FACC15]" />
            <h3 className="text-[#FACC15] font-bold text-xs tracking-widest uppercase">
              Our Location
            </h3>
          </div>
          <a
            href="https://maps.google.com/?q=Burhani+Steel+Surendranagar"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-44 hover:scale-[1.02] transition duration-300"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/20 shadow-lg">
              {/* GOOGLE MAP IFRAME */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.26392313831!2d71.6346787658239!3d22.72287250532792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959413a9d468ad1%3A0xd75ae8120118590!2sBurhani%20Steel%20%26%20Hardware!5e0!3m2!1sen!2sin!4v1775646163437!5m2!1sen!2sin"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-[#0B1F3A]/25 pointer-events-none"></div>

              {/* TEXT OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-white text-xs font-semibold bg-black/40 px-3 py-1 rounded">
                  Open in Google Maps
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src={logo3} alt="Burhani Steel" className="h-6 w-auto" />
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Burhani Steel & Hardware. All rights
            reserved.
          </p>
        </div>
        <p className="text-white/20 text-xs">
          Designed for Premium Steel Suppliers · Surendranagar
        </p>
      </div>
    </footer>
  );
}
