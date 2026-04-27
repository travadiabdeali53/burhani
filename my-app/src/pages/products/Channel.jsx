import beams from "@/assets/products/beams.webp";
import structural_steel from "@/assets/products/structural_steel.webp";

export default function Channel() {
  return (
    <>
      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">
          Channels & Beams (Structural Steel)
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Channels and Beams are essential structural components used in modern
          construction for providing <span className="font-semibold">high strength</span>,{" "}
          <span className="font-semibold">load-bearing capacity</span>, and{" "}
          <span className="font-semibold">long-term durability</span>. These
          products form the backbone of strong and stable structures.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          We supply all types of <span className="font-semibold">MS Channels</span>,{" "}
          <span className="font-semibold">C-Channels</span>,{" "}
          <span className="font-semibold">I-Beams</span>, and{" "}
          <span className="font-semibold">H-Beams</span> in various sizes and
          thicknesses to meet diverse construction needs.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our products ensure <span className="font-semibold">structural stability</span>,{" "}
          <span className="font-semibold">resistance to heavy loads</span>, and{" "}
          <span className="font-semibold">excellent performance</span> in
          residential, commercial, and industrial projects, making them ideal
          for durable and long-lasting buildings.
        </p>
      </section>

      {/* APPLICATIONS */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl font-bold mb-4">Applications</h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Structural frameworks for buildings and construction</li>
          <li>Industrial sheds, warehouses, and factories</li>
          <li>Bridges and infrastructure projects</li>
          <li>Support structures for roofs and platforms</li>
          <li>Fabrication and heavy engineering works</li>
          <li>Columns, beams, and reinforcement structures</li>
        </ul>
      </section>
{/* IMAGES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Channels & Beams</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: structural_steel, title: "JSW Steel Ltd." },
            { img: beams, title: "Sail Structurals" },
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

