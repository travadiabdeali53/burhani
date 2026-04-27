import angle from "@/assets/products/angle2.webp";

export default function SteelAngles() {
  return (
    <section className="bg-[#eeeeee] py-12">
      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Steel Angles</h2>

        <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base md:text-lg text-justify">
          <span className="font-bold text-black">Steel Angles</span> are one of
          the most widely used structural steel products, known for their
          strength, durability, and versatility. Manufactured with precision,
          they provide excellent support in construction and fabrication work.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4 text-[15px] sm:text-base md:text-lg text-justify">
          We supply high-quality{" "}
          <span className="font-bold text-black">steel angles</span> suitable
          for various structural applications such as frames, supports, and
          reinforcements. These angles are available in different sizes and
          thicknesses to meet the requirements of residential, commercial, and
          industrial projects.
        </p>

        <p className="text-gray-700 leading-relaxed text-[15px] sm:text-base md:text-lg text-justify">
          Our <span className="font-bold text-black">steel angles</span> ensure
          high load-bearing capacity, corrosion resistance, and long service
          life, making them a reliable choice for engineers, contractors, and
          fabricators.
        </p>
      </section>

      {/* APPLICATIONS */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl font-bold mb-4">Applications</h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] sm:text-base">
          <li>Structural frameworks and building supports</li>
          <li>Fabrication of gates, grills, and railings</li>
          <li>Industrial sheds and warehouses</li>
          <li>Bridges and infrastructure projects</li>
          <li>Machinery and equipment supports</li>
          <li>General construction and reinforcement work</li>
        </ul>
      </section>

      {/* IMAGE */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Steel Angles</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="group bg-white rounded-xl overflow-hidden border border-transparent hover:border-[#FACC15] shadow-md hover:shadow-xl transition duration-300">
            
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={angle}
                alt="Steel Angles"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <p className="p-3 font-semibold text-center text-gray-800 group-hover:text-[#FACC15] transition">
              Structural Steel Angles
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}