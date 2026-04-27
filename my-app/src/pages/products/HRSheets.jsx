import hr1 from "@/assets/products/sheets2.webp";
import hr2 from "@/assets/products/sheets.webp";

export default function HRSheets() {
  const applications = [
    "Automobile applications",
    "Manufacturing of Hollow sections",
    "Direct industrial and manufacturing applications",
    "Boilers and tanks",
    "Ships",
    "Defence equipment",
    "Railway wagons",
    "Construction industry",
  ];

  return (
    <section className="bg-[#eeeeee] py-12">
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify text-[15px] sm:text-base md:text-lg">
          <span className="font-bold text-black">
            HR Sheets or Hot Rolled Sheets
          </span>{" "}
          are steel sheets that are soft enough to bend flat on itself without
          cracking. They are ductile enough for shallow drawing used in a
          variety of industries in the domestic market.{" "}
          <span className="font-bold text-black">
            HR Sheets Suppliers
          </span>{" "}
          – the sheets supplied by us give total peace of mind in purchase and
          consumption with assured availability, consistent quality, and proper
          service. We supply packet material as well as coil cut to fulfil
          customized size requirements. Available in many thickness with
          different widths and lengths.
        </p>
      </section>

      {/* APPLICATIONS */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-6 text-[#2F2C6A] border-b pb-2">
          Applications
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {applications.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {/* ICON DOT */}
              <span className="w-3 h-3 border-2 border-[#2F2C6A] rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#2F2C6A] rounded-full"></span>
              </span>

              {/* TEXT */}
              <p className="text-gray-700 text-[15px] sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* IMAGES */}
            <section className="pb-12 max-w-6xl mx-auto px-4">
              <h3 className="font-bold mb-6">HR Plates</h3>
      
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { img: hr1, title: "JSW Steel Ltd." },
                  { img: hr2, title: "Tata Steel" },
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