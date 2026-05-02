const stats = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "20+",
    label: "Years Experience",
    sub: "Serving since 2005",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "5000+",
    label: "Happy Customers",
    sub: "Across Gujarat & India",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    value: "1,00,000+",
    label: "Tons Sold",
    sub: "Quality steel delivered",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "Best",
    label: "Competitive Prices",
    sub: "Market-best rates always",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    value: "Huge",
    label: "Ready Inventory",
    sub: "Immediate dispatch available",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FACC15] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#FACC15] font-bold tracking-widest text-xs uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Numbers That
            <span className="text-[#FACC15]"> Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/5 hover:bg-[#FACC15] border border-white/10 hover:border-[#FACC15] rounded-xl p-6 text-center transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="text-[#FACC15] group-hover:text-[#0B1F3A] flex justify-center mb-4 transition-colors duration-300">
                {stat.icon}
              </div>

              <p className="text-3xl font-black text-white group-hover:text-[#0B1F3A] transition-colors duration-300 mb-1">
                {stat.value}
              </p>
              <p className="text-white/80 group-hover:text-[#0B1F3A] font-bold text-sm transition-colors duration-300 mb-1">
                {stat.label}
              </p>
              <p className="text-white/40 group-hover:text-[#0B1F3A]/60 text-xs transition-colors duration-300">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-8 py-3">
            <div className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse" />
            <p className="text-white/80 text-sm font-medium">
              Burhani Steel & Hardware, also known as Gujarat Steel & Hardware — A Trusted Name in Steel Supply
            </p>
            <div className="w-2 h-2 bg-[#FACC15] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}