import steel1 from "@/assets/products/structural_steel.webp";
import steel2 from "@/assets/products/structural_steel2.webp";

export default function StructuralSteel() {
  const data = {
    description:
      "Structural Steel is a versatile metal that is used in construction, industrial sheds, fabrication and has many other applications. Produced in a large range of products and dimensions for commercial or consumer use. Valued for its strength, durability, and capability to withstand any natural calamities like earthquake. Comparatively, Structural Steel gives more strength to a building and thus reduces the overall steel requirement.",
  };

  return (
    <>
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          {data.description}
        </p>
      </section>

      {/* ANGLES */}
      <section className="pb-10 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Angles</h3>

        <div className="overflow-x-auto">
          <div className="min-w-max border rounded-lg overflow-hidden">
            <div
              className="grid text-center text-sm"
              style={{
                gridTemplateColumns: "160px repeat(10, 110px)",
              }}
            >
              <div className="bg-[#2F2C6A] text-white p-3 font-semibold">
                Size
              </div>

              {[
                "50 x 50 x 6",
                "65 x 65 x 6",
                "65 x 65 x 8",
                "75 x 75 x 6",
                "75 x 75 x 8",
                "75 x 75 x 10",
                "90 x 90 x 6",
                "90 x 90 x 8",
                "100 x 100 x 8",
                "100 x 100 x 10",
              ].map((item, i) => (
                <div key={i} className="bg-[#2F2C6A] text-white p-3 border-l">
                  {item}
                </div>
              ))}

              <div className="bg-[#3C3A80] text-white p-3 font-semibold">
                Sectional Weight (Kg/m)
              </div>

              {[
                "4.5",
                "5.8",
                "7.7",
                "6.8",
                "8.9",
                "11",
                "8.2",
                "10.8",
                "12.1",
                "14.9",
              ].map((item, i) => (
                <div key={i} className="bg-[#3C3A80] text-white p-3 border-l">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEAMS */}
      <section className="pb-10 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Beams</h3>

        <div className="overflow-x-auto">
          <div className="min-w-max border rounded-lg overflow-hidden">
            <div
              className="grid text-center text-sm"
              style={{
                gridTemplateColumns: "160px repeat(5, 140px)",
              }}
            >
              <div className="bg-[#2F2C6A] text-white p-3 font-semibold">
                Size
              </div>

              {[
                "150 x 75",
                "200 x 100",
                "250 x 125",
                "300 x 140",
                "350 x 140",
              ].map((item, i) => (
                <div key={i} className="bg-[#2F2C6A] text-white p-3 border-l">
                  {item}
                </div>
              ))}

              <div className="bg-[#3C3A80] text-white p-3 font-semibold">
                Sectional Weight (Kg/m)
              </div>

              {["15", "25", "37", "45.1", "52.9"].map((item, i) => (
                <div key={i} className="bg-[#3C3A80] text-white p-3 border-l">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NPB */}
      <section className="pb-10 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Narrow Parallel Flanged Beam (NPB)</h3>

        <div className="overflow-x-auto">
          <div className="min-w-max border rounded-lg overflow-hidden">
            <div
              className="grid text-center text-sm"
              style={{
                gridTemplateColumns: "160px repeat(7, 140px)",
              }}
            >
              <div className="bg-[#2F2C6A] text-white p-3 font-semibold">
                Size
              </div>

              {[
                "200 x 100",
                "300 x 150",
                "400 x 180",
                "450 x 190",
                "250 x 125",
                "500 x 200",
                "600 x 220",
              ].map((item, i) => (
                <div key={i} className="bg-[#2F2C6A] text-white p-3 border-l">
                  {item}
                </div>
              ))}

              <div className="bg-[#3C3A80] text-white p-3 font-semibold">
                Sectional Weight (Kg/m)
              </div>

              {["25", "42.25", "66.30", "77.59", "30", "90.66", "122.45"].map(
                (item, i) => (
                  <div key={i} className="bg-[#3C3A80] text-white p-3 border-l">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Channels</h3>

        <div className="overflow-x-auto">
          <div className="min-w-max border rounded-lg overflow-hidden">
            <div
              className="grid text-center text-sm"
              style={{
                gridTemplateColumns: "160px repeat(8, 140px)",
              }}
            >
              <div className="bg-[#2F2C6A] text-white p-3 font-semibold">
                Size
              </div>

              {[
                "75 x 40",
                "100 x 50",
                "125 x 65",
                "150 x 75",
                "200 x 75",
                "250 x 82",
                "300 x 90",
                "400 x 100",
              ].map((item, i) => (
                <div key={i} className="bg-[#2F2C6A] text-white p-3 border-l">
                  {item}
                </div>
              ))}

              <div className="bg-[#3C3A80] text-white p-3 font-semibold">
                Sectional Weight (Kg/m)
              </div>

              {[
                "6.8",
                "9.2",
                "12.8",
                "16.4",
                "22.2",
                "30.40",
                "35.90",
                "49.5",
              ].map((item, i) => (
                <div key={i} className="bg-[#3C3A80] text-white p-3 border-l">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Structural Steel</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: steel2, title: "Vizag Steel (RINL)" },
            { img: steel1, title: "Sail Structural" },
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
