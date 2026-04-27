import tmt from "@/assets/products/tmt.webp";
import tmt2 from "@/assets/products/tmt2.webp";
import tmt3 from "@/assets/products/tmt3.webp";
import tmt4 from "@/assets/products/tmt4.webp";
import tmt5 from "@/assets/products/tmt5.webp";

export default function TMTBars() {
  const data = {
    description:
      "TMT Bars are the most essential element in the growth of infrastructure in our country. They are used to strengthen the entire building structure during any natural calamity like an earthquake. It bonds perfectly with cement due to its rib pattern with the higher AR value and ductility that particularly means more resilience to any kind of load. TMT Bars are easily butt welded, lap welded and manual arc-welded without any pre-heating, due to its low carbon content. The special corrosion-resistant grades are used for coastal areas as well as moist land. The periphery of TMT Bars is hard while the core is comparatively soft which makes it ductile. Its inherent microstructures of the soft-core make easily bendable.",
    sizes: [
      "8 MM",
      "10 MM",
      "12 MM",
      "16 MM",
      "20 MM",
      "25 MM",
      "28 MM",
      "32 MM",
      "36 MM",
      "40 MM",
    ],
    weights: [
      "0.395",
      "0.617",
      "0.888",
      "1.578",
      "2.466",
      "3.854",
      "4.830",
      "6.313",
      "7.990",
      "9.876",
    ],
    grades: [
      "IS 1786 Fe 500 D",
      "IS 1786 Fe 550 D",
      "Corrosion Resistant Steel (CRS)",
    ],
    primary: [
      { title: "VSP Rebars", img: tmt2 },
      { title: "JSW Rebars", img: tmt },
    ],
    secondary: [
      { title: "Kamdhenu Steel", img: tmt4 },
      { title: "Key 2 Steel", img: tmt5 },
      { title: "ET TMT Steel", img: tmt3 },
    ],
  };

  return (
    <>
      {/* DESCRIPTION */}
<section className="py-12 max-w-6xl mx-auto px-4">
  <p className="text-gray-700 leading-relaxed text-justify text-[15px] sm:text-base md:text-lg">
    <span className="font-bold text-black">TMT Bars</span> are the most essential
    element in the growth of infrastructure in our country. They are used to
    strengthen the entire building structure during any natural calamity like an
    earthquake. It bonds perfectly with cement due to its rib pattern with the
    higher AR value and ductility that particularly means more resilience to any
    kind of load. <span className="font-bold text-black">TMT Bars</span> are
    easily butt welded, lap welded and manual arc-welded without any
    pre-heating, due to its low carbon content. The special corrosion-resistant
    grades are used for coastal areas as well as moist land. The periphery of
    <span className="font-bold text-black"> TMT Bars </span>
    is hard while the core is comparatively soft which makes it ductile. Its
    inherent microstructures of the soft-core make easily bendable.
  </p>
</section>

      {/* SIZE + WEIGHT TABLE */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Sizes</h3>

        <div className="overflow-x-auto">
          <div className="min-w-max border rounded-lg overflow-hidden">
            <div
              className="grid text-center text-sm"
              style={{
                gridTemplateColumns: `120px repeat(${data.sizes.length}, 100px)`,
              }}
            >
              {/* SIZE */}
              <div className="bg-[#2F2C6A] text-white p-3 font-semibold">
                Size
              </div>

              {data.sizes.map((s, i) => (
                <div key={i} className="bg-[#2F2C6A] text-white p-3 border-l">
                  {s}
                </div>
              ))}

              {/* WEIGHT */}
              <div className="bg-[#3C3A80] text-white p-3 font-semibold">
                Weight (kg/m)
              </div>

              {data.weights.map((w, i) => (
                <div key={i} className="bg-[#3C3A80] text-white p-3 border-l">
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRADES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Grades</h3>
        <ul className="space-y-2">
          {data.grades.map((g, i) => (
            <li key={i}>• {g}</li>
          ))}
        </ul>
      </section>

      {/* PRIMARY */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Primary Producers</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.primary.map((p, i) => (
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

      {/* SECONDARY */}
      {data.secondary.length > 0 && (
        <section className="pb-12 max-w-6xl mx-auto px-4">
          <h3 className="font-bold mb-6">Secondary Producers</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.secondary.map((p, i) => (
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
      )}
    </>
  );
}
