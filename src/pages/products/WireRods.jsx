import wire from "@/assets/products/wire.webp";
import wire2 from "@/assets/products/wire2.webp";

export default function WireRods() {
  const data = {
    description:
      "We are the leading Wire Rod Supplier of Gujarat. Industries have much special application which requires the precise chemical composition of the raw material. So, supplying wire-rods as leading primary producers. These ensure the quality of the product. The Wire Rod is used for the manufacturing of many products.",

    sizes: [
      "5.5MM",
      "6 MM",
      "6.5MM",
      "7 MM",
      "8 MM",
      "10 MM",
      "12 MM",
      "14 MM",
      "16 MM",
      "18 MM",
      "20 MM",
      "22 MM",
      "25 MM",
      "28 MM",
    ],

    weights: [],

    grades: [
      "Mild Steel Grades",
      "Medium Carbon Grades",
      "High Carbon Grades",
    ],

    primary: [
      { title: "JSW Steel Ltd.", img: wire },
      { title: "Tata Bansal Wires", img: wire2 },
    ],

    secondary: [],
  };

  return (
    <section className="bg-[#eeeeee] py-12">
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify text-[15px] sm:text-base md:text-lg">
          We are the leading{" "}
          <span className="font-bold text-black">Wire Rod Supplier</span> of
          Gujarat. Industries have much special application which requires the
          precise chemical composition of the raw material. So, supplying{" "}
          <span className="font-bold text-black">wire-rods</span> as leading
          primary producers. These ensure the quality of the product. The{" "}
          <span className="font-bold text-black">Wire Rod</span> is used for
          the manufacturing of many products.
        </p>
      </section>

      {/* SIZE TABLE */}
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
                <div
                  key={i}
                  className="bg-[#2F2C6A] text-white p-3 border-l"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRADES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Grades</h3>

        <ul className="space-y-2 text-[15px] sm:text-base text-gray-700">
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
              className="group bg-white rounded-xl overflow-hidden border border-transparent hover:border-[#FACC15] shadow-md hover:shadow-xl transition duration-300"
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
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <p className="p-3 font-semibold text-center">{p.title}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}