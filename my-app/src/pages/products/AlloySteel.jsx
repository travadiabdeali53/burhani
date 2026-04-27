import alloy1 from "@/assets/products/alloy.webp";
import alloy2 from "@/assets/products/pipes2.webp";

export default function AlloySteel() {
  return (
    <section className="bg-[#fafafa] py-12">
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify text-[15px] sm:text-base md:text-lg">
          We supply <span className="font-bold text-black">Alloy Steel</span> in
          the form of <span className="font-bold text-black">round bar</span>{" "}
          and
          <span className="font-bold text-black"> wire rods coils</span>.
          Property determines the quality of the product. We provide
          <span className="font-bold text-black">
            {" "}
            UT (Ultrasonically Tested)
          </span>{" "}
          OK material and
          <span className="font-bold text-black">
            {" "}
            VD (Vacuum-Degassing)
          </span>{" "}
          route material of various renowned brands. The quality assurance
          system of brands we supply are equipped with modern equipment. Highly
          skilled workforce constantly strives to get the best of products by
          controlling the entire process at every vital point.
        </p>
      </section>

      {/* TABLE SECTION */}
      <section className="pb-12 max-w-6xl mx-auto px-4 space-y-6">
        {/* CARBON (ALLOY) STEEL */}
        <div className="overflow-x-auto">
          <div className="min-w-[500px] border rounded-md overflow-hidden">
            <div className="bg-gray-800 text-white px-3 py-2 font-semibold text-sm">
              Carbon (Alloy) Steel
            </div>

            <div className="grid grid-cols-2 text-sm">
              <div className="p-3 border whitespace-nowrap">
                Carbon Manganese Steel :
              </div>
              <div className="p-3 border whitespace-nowrap">SAE1541</div>
            </div>
          </div>
        </div>

        {/* CASE HARDENING */}
        <div className="overflow-x-auto">
          <div className="min-w-[500px] border rounded-md overflow-hidden">
            <div className="bg-gray-800 text-white px-3 py-2 font-semibold text-sm">
              Case Hardening (Alloy) Steel
            </div>

            <div className="grid grid-cols-2 text-sm">
              <div className="p-3 border whitespace-nowrap">
                Chrome Manganese Steel :
              </div>
              <div className="p-3 border whitespace-nowrap">
                16MnCr5, 20MnCr5
              </div>

              <div className="p-3 border whitespace-nowrap">
                Nickel Chrome Moly Steel :
              </div>
              <div className="p-3 border whitespace-nowrap">
                SAE8620, AISI 1141
              </div>
            </div>
          </div>
        </div>

        {/* THROUGH HARDENING */}
        <div className="overflow-x-auto">
          <div className="min-w-[500px] border rounded-md overflow-hidden">
            <div className="bg-gray-800 text-white px-3 py-2 font-semibold text-sm">
              Through Hardening (Alloy) Steel
            </div>

            <div className="grid grid-cols-2 text-sm">
              <div className="p-3 border whitespace-nowrap">
                Chrome Moly Steel :
              </div>
              <div className="p-3 border whitespace-nowrap">SAE4140</div>

              <div className="p-3 border whitespace-nowrap">
                Ball Bearing Steel :
              </div>
              <div className="p-3 border whitespace-nowrap">En31, SAE52100</div>

              <div className="p-3 border whitespace-nowrap">
                Free / Semi Free Cutting Steel :
              </div>
              <div className="p-3 border whitespace-nowrap">
                En1A (PB), En8DM, En8M
              </div>
            </div>
          </div>
        </div>

        {/* BORON STEEL */}
        <div className="overflow-x-auto">
          <div className="min-w-[500px] border rounded-md overflow-hidden">
            <div className="bg-gray-800 text-white px-3 py-2 font-semibold text-sm">
              BORON STEEL
            </div>

            <div className="grid text-sm">
              <div className="p-3 border whitespace-nowrap">10B21</div>
              <div className="p-3 border whitespace-nowrap">15B25</div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Alloy Steel</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: alloy1, title: "JSW Steel Ltd." },
            { img: alloy2, title: "SLR Metalinks" },
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
    </section>
  );
}
