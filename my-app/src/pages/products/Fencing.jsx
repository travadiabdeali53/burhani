import fencing from "@/assets/products/fencing.webp";
import fencing2 from "@/assets/products/fencing2.webp";
import fencing3 from "@/assets/products/fencing3.webp";

export default function Fencing() {
  const applications = [
    "Agricultural land fencing and farm protection",
    "Residential and commercial boundary security",
    "Industrial site protection and restricted areas",
    "Highway and railway track fencing",
    "Construction site safety and demarcation",
    "Warehouse and storage area protection",
    "Security fencing for factories and plants",
    "Garden and landscape boundary fencing",
  ];

  return (
    <>
      {/* ================= DESCRIPTION ================= */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          We supply high-quality <strong>Fencing Material</strong> suitable for
          residential, commercial, agricultural, and industrial applications. Our
          store offers <strong>all Types of Barber wire</strong>, including
          durable and corrosion-resistant options designed for long-lasting
          performance. We proudly deal in premium quality barbed wire from{" "}
          <strong>Tata Bansal</strong>, ensuring strength, reliability, and
          superior protection.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4 text-justify">
          Along with barbed wires, we also provide a wide range of fencing
          solutions such as chain link fencing, binding wires, and other related
          materials. Our products are widely trusted for their strength, easy
          installation, and ability to withstand harsh environmental conditions.
        </p>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-6 text-[#2F2C6A] border-b pb-2">
          Applications
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {applications.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-3 h-3 border-2 border-[#2F2C6A] rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#2F2C6A] rounded-full"></span>
              </span>

              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMAGES ================= */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
  <h3 className="font-bold mb-6">Fencing Materials</h3>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { img: fencing, title: "Galvanized Wire Fencing" },
      { img: fencing2, title: "Barbed Wire" },
      { img: fencing3, title: "Chain Link Fencing" }, // NEW IMAGE
    ].map((p, i) => (
      <div
        key={i}
        className="group rounded-xl overflow-hidden border border-transparent hover:border-[#FACC15] shadow-md hover:shadow-xl transition duration-300"
      >
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* TITLE */}
        <p className="p-3 font-semibold text-center text-gray-800 group-hover:text-[#FACC15] transition">
          {p.title}
        </p>
      </div>
    ))}
  </div>
</section>
    </>
  );
}