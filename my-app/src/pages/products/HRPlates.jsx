import hr1 from "@/assets/products/hr_plates.webp";
import hr2 from "@/assets/products/sheets.webp";
import hr3 from "@/assets/products/round.webp";

export default function HRPlate() {
  const sizes = [
    "1250 x 5000",
    "1500 x 6300",
    "2000 x 12000",
    "2500 x 12500",
  ];

  const applications = [
    "General engineering and structural fabrication",
    "Railway wagons",
    "Pressure vessels and boilers",
    "Oil and gas pipelines",
    "Bridges and flyovers",
    "Shipbuilding",
    "Earthmoving equipment",
    "Wind mills",
    "Defence equipment",
  ];

  return (
    <>
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          The <strong>Plates and Coils</strong> are of premium quality in terms
          of dimensional adherence and internal soundness owing to its clean raw
          material, sound steel refining facilities and an efficient rolling mill.
          We are <strong>Suppliers & Distributors of Hot Rolled (HR) Plates in Ahmedabad, Gujarat.</strong>
          These comply to IS 2062 specifications up to E350 grades besides a wide
          range of international standards and steel grades. Sizes of the{" "}
          <strong>HR Plates</strong> start from 5mm to 150mm thickness.
        </p>
      </section>

      {/* AVAILABLE SIZES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold text-lg mb-6">
          Some of the standard lengths and width available are:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sizes.map((s, i) => (
            <div
              key={i}
              className="bg-[#2F2C6A] text-white text-center py-4 font-semibold rounded-md shadow"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SPECIFICATION */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold text-lg mb-6">Technical Specification</h3>

        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full text-sm border">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-3 border text-left">Specification</th>
                <th className="p-3 border text-left">Application</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border">
                  IS 2062:E250, E275 Grades A, BR BO&C<br />
                  ASTM A36, 283<br />
                  EN 10025-2:S235, 275 Grades JR, J0, J2<br />
                  JIS G 3101
                </td>
                <td className="p-3 border">General Structurals</td>
              </tr>

              <tr>
                <td className="p-3 border">
                  IS 2062 E 300, 350, 410 Grades A, BR, BO, C<br />
                  IS 2062 E 450, 550, 600 Grades A, BR<br />
                  IS 5986 Gr 325, 355, 420, 490<br />
                  ASTM A 572 Gr 42, 50, 55<br />
                  JIS G 3106
                </td>
                <td className="p-3 border">High Tensile</td>
              </tr>

              <tr>
                <td className="p-3 border">
                  Chequered Plate conforming to IS 3502
                </td>
                <td className="p-3 border">Industrial flooring</td>
              </tr>

              <tr>
                <td className="p-3 border">
                  IS2002, IS2041<br />
                  ASTM / ASME : 204, 285, 299, 387, 515, 516, 537<br />
                  EN 10028-2 & 3<br />
                  DIN 17155 HI
                </td>
                <td className="p-3 border">
                  Boiler and Pressure vessels
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold text-lg mb-6">Applications</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {applications.map((app, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2F2C6A] rounded-full"></span>
              <p className="text-gray-700">{app}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
              <h3 className="font-bold mb-6">HR Plates</h3>
      
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[ 
                  { img: hr1, title: "AM/NS Plates" },
                  { img: hr2, title: "NMDC Plates" },
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