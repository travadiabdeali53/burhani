import chemicals from "@/assets/products/chemicals.webp";
import chemicals2 from "@/assets/products/chemicals2.webp";
import chemicals3 from "@/assets/products/chemicals3.webp";

function Chemicals() {
  return (
    <>
      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Building Chemicals</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          We supply a wide range of high-quality building chemicals from trusted
          brands like <span className="font-semibold">Sika Chemicals</span> and{" "}
          <span className="font-semibold">Fosroc Chemicals</span>. These products
          are widely used in modern construction for enhancing strength,
          durability, and performance of structures.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          At our shop, all types of building chemicals are available including
          waterproofing solutions, concrete admixtures, bonding agents, grouts,
          sealants, and repair compounds. Our products ensure long-lasting
          protection against water leakage, cracks, and environmental damage.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether it is residential, commercial, or industrial construction, we
          provide reliable chemical solutions that meet industry standards and
          improve overall construction quality.
        </p>
      </section>

      {/* APPLICATIONS */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h3 className="text-xl font-bold mb-4">Applications</h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Waterproofing for roofs, basements, and bathrooms</li>
          <li>Concrete strength enhancement using admixtures</li>
          <li>Crack filling and structural repair solutions</li>
          <li>Tile fixing and joint sealing applications</li>
          <li>Industrial flooring and surface hardening</li>
          <li>Protective coatings against corrosion and chemicals</li>
        </ul>
      </section>

      {/* IMAGES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Fencing Materials</h3>
      
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
              { img: chemicals2, title: "Sika All Chemicals" },
            { img: chemicals, title: "Forsoc Chemicals" },
            { img: chemicals3, title: "Sika Chapdur Floor Hardener" }, // NEW IMAGE
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

export default Chemicals;