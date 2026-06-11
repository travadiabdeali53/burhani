import chequered from "@/assets/products/chequered.webp";
import chequered2 from "@/assets/products/chequered2.webp";

export default function ChequeredPlate() {
  const applications = [
    "Surfacing applications.",
    "General engineering applications.",
    "Automobile applications.",
    "Plants and machineries.",
  ];

  return (
    <section className="bg-[#eeeeee] py-12">
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify text-[15px] sm:text-base md:text-lg">
          Chequered plates are lightweight metal plates with good anti slipping
          and decorative feature. One side of a{" "}
          <span className="font-bold text-black">Chequered Plate</span> is
          raised regular diamonds or lines and the other side is plane. The
          features of corrosion resistance, weather resistance and beautiful
          surface treatment make it also suitable for architectural outdoor
          uses. Steel House is best quality{" "}
          <span className="font-bold text-black">
            Mild Steel Chequered Plate Suppliers in Gujarat
          </span>.
          The specification for{" "}
          <span className="font-bold text-black">
            Steel Chequered Plates
          </span>{" "}
          shall conform to{" "}
          <span className="font-bold text-black">IS 3502: 2009</span>.
        </p>
      </section>

      {/* TABLE */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto">
          <div className="min-w-[400px] border rounded-md overflow-hidden">
            <div className="grid grid-cols-2 text-center text-sm">
              <div className="bg-[#2F2C6A] text-white p-4 font-semibold border">
                Thickness Range
              </div>
              <div className="bg-[#2F2C6A] text-white p-4 font-semibold border">
                2.5–10 mm
              </div>

              <div className="bg-[#2F2C6A] text-white p-4 font-semibold border">
                Width Range
              </div>
              <div className="bg-[#2F2C6A] text-white p-4 font-semibold border">
                900–2000 mm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
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

              <p className="text-gray-700 text-[15px] sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* IMAGES */}
            <section className="pb-12 max-w-6xl mx-auto px-4">
              <h3 className="font-bold mb-6">Alloy Steel</h3>
      
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { img: chequered, title: "Jindal Steel" },
                  { img: chequered2, title: "Sail Steel Ltd." },
                ].map((p, i) => (
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

      {/* BOTTOM TITLE */}
      <section className="pb-12 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2F2C6A]">
          <span className="font-bold text-black">
            Mild Steel Chequered Plate Suppliers
          </span>
        </h2>
      </section>
      
    </section>
  );
}