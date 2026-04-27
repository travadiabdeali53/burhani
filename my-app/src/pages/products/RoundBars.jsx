import round1 from "@/assets/products/round.webp";
import round2 from "@/assets/products/round2.webp";

export default function RoundBars() {
  const data = {
    description:
      "With many applications, Round Bars are the most running industrial product. Available in more than 25 diameters starting from 20 mm to 90mm. We supply steel of high quality and precisely dimensional.",

    applications: [
      "Automobile Components",
      "Bearings",
      "Forging",
      "Textile industry",
      "Bright bar",
      "Machining",
      "General Engineering",
    ],
  };

  return (
    <section className="bg-[#f4f4f4] py-12">
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify text-[15px] sm:text-base md:text-lg">
          With many applications,{" "}
          <span className="font-bold text-black">Round Bars</span> are the most
          running industrial product. Available in more than 25 diameters
          starting from 20 mm to 90mm. We supply{" "}
          <span className="font-bold text-black">steel of high quality</span>
          {" "}and precisely dimensional.
        </p>
      </section>

      {/* GRADES - CARBON STEEL */}
      <section className="pb-10 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Grades</h3>

        <div className="border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-800 text-white p-3 font-semibold">
            Carbon Steel
          </div>

          {/* MOBILE VIEW */}
          <div className="block md:hidden divide-y">
            <div className="p-3">
              <p className="font-semibold text-gray-800 mb-1">
                Plain Carbon Steel
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                IS 2062 E250A, SAE 1010, SAE 1018, CK45, C45, 35C8, En8, EN8D,
                EN8D (UT), EN8Ds, En8DCR, En9
              </p>
            </div>

            <div className="p-3">
              <p className="font-semibold text-gray-800 mb-1">Heavy Rounds</p>
              <p className="text-gray-600 text-sm">C45, M.S., EN19</p>
            </div>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden md:grid grid-cols-2 text-sm">
            <div className="p-3 border">Plain Carbon Steel</div>
            <div className="p-3 border">
              IS 2062 E250A, SAE 1010, SAE 1018, CK45, C45, 35C8, En8, EN8D,
              EN8D (UT), EN8Ds, En8DCR, En9
            </div>

            <div className="p-3 border">Heavy Rounds</div>
            <div className="p-3 border">C45, M.S., EN19</div>
          </div>
        </div>
      </section>

      {/* VSP TABLE */}
      <section className="pb-10 max-w-6xl mx-auto px-4">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white p-3 font-semibold">
            RASHTRIYA ISPAT NIGAM LTD. - (VSP) ROUND BARS SIZES
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="p-2 border">DIA</th>
                  <th className="p-2 border">KG/M</th>
                  <th className="p-2 border">DIA</th>
                  <th className="p-2 border">KG/M</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20", "2.5", "50", "15.4"],
                  ["22", "3.0", "53", "17.3"],
                  ["25", "3.9", "56", "19.4"],
                  ["28", "4.8", "58", "20.8"],
                  ["30", "5.6", "60", "22.2"],
                  ["32", "6.3", "63", "24.5"],
                  ["33.5", "6.9", "66", "26.9"],
                  ["36", "8.0", "71", "31.1"],
                  ["40", "9.9", "72", "32.0"],
                  ["42", "10.9", "75", "34.7"],
                  ["45", "12.5", "80", "39.5"],
                  ["46.5", "13.3", "85", "44.6"],
                  ["48", "14.2", "90", "50.5"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-2 border">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SAIL TABLE */}
      <section className="pb-10 max-w-6xl mx-auto px-4">
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white p-3 font-semibold">
            STEEL AUTHORITY OF INDIA - (SAIL) ROUND BARS SIZES
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center">
              <thead className="bg-gray-100 font-semibold">
                <tr>
                  <th className="p-2 border">DIA</th>
                  <th className="p-2 border">KG/M</th>
                  <th className="p-2 border">DIA</th>
                  <th className="p-2 border">KG/M</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["95", "55.7", "140", "121.0"],
                  ["100", "61.7", "150", "138.9"],
                  ["105", "81", "160", "158.0"],
                  ["110", "74.7", "170", "178.4"],
                  ["115", "81.6", "180", "200.0"],
                  ["120", "88.9", "190", "222.8"],
                  ["125", "96.5", "200", "246.9"],
                  ["130", "104.3", "210", "272.2"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-2 border">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GRADES - ALLOY */}
      <section className="pb-10 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Grades</h3>

        <div className="border rounded-md overflow-hidden">
          {/* HEADER */}
          <div className="bg-gray-800 text-white px-3 py-2 font-semibold text-sm">
            Alloy Steel
          </div>

          {/* TABLE */}
          <div className="text-sm">
            <div className="grid grid-cols-2 border-t">
              <div className="p-2 border-r font-medium text-gray-700">
                Grades :
              </div>
              <div className="p-2 text-gray-600 break-words">
                20MNCR5, 42CRMO4, EN1A-PB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-4">Applications</h3>

        <div className="grid md:grid-cols-2 gap-4">
          {data.applications.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2F2C6A] rounded-full"></span>
              <p className="text-[15px] sm:text-base text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGES */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Round Bars</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: round1, title: "Sail Steel Ltd." },
            { img: round2, title: "JSW SALEM" },
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
















      