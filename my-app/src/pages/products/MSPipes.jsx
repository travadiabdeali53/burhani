import pipes from "@/assets/products/pipes.webp";

export default function MSPipes() {
  return (
    <>
      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">MS Pipes (Mild Steel Pipes)</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          MS Pipes (Mild Steel Pipes) are widely used in construction,
          infrastructure, and industrial applications due to their strength,
          durability, and cost-effectiveness. These pipes are manufactured using
          high-quality steel, ensuring excellent performance and long service
          life.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          We offer MS Pipes in various sizes, thicknesses, and grades to meet
          diverse project requirements. Known for their high load-bearing
          capacity and weldability, these pipes are suitable for both structural
          and fluid transportation purposes.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our MS Pipes provide reliable performance, corrosion resistance (with
          proper coating), and easy installation, making them a preferred choice
          for engineers, contractors, and fabricators.
        </p>
      </section>

      {/* APPLICATIONS */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl font-bold mb-4">Applications</h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Structural frameworks and construction supports</li>
          <li>Water supply and drainage systems</li>
          <li>Industrial pipelines and machinery structures</li>
          <li>Fabrication of gates, railings, and scaffolding</li>
          <li>Fencing and agricultural applications</li>
          <li>Oil, gas, and general fluid transportation</li>
        </ul>
      </section>

      {/* IMAGE */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">MS Pipes</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="group rounded-xl overflow-hidden border border-transparent hover:border-[#FACC15] shadow-md hover:shadow-xl transition duration-300">
            
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={pipes}
                alt="MS Pipes"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <p className="p-3 font-semibold text-center text-gray-800 group-hover:text-[#FACC15] transition">
              Mild Steel Pipes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

