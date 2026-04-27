import billet from "@/assets/products/billet.webp";

export default function Billet() {
  const applications = ["Rerolling", "Forging"];

  return (
    <>
      {/* ================= TABLE 1 ================= */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border text-sm text-center">
            <thead className="bg-[#2F2C6A] text-white">
              <tr>
                <th className="p-3 border">Section</th>
                <th className="p-3 border">Dimension (mm)</th>
                <th className="p-3 border">Source</th>
                <th className="p-3 border">Length (m)</th>
                <th className="p-3 border">Bundle Weight (t)</th>
                <th className="p-3 border">Available Grades</th>
              </tr>
            </thead>

            <tbody className="bg-[#2F2C6A] text-white">
              <tr>
                <td className="p-3 border">Billets</td>
                <td className="p-3 border">125×125</td>
                <td className="p-3 border">LMMM</td>
                <td className="p-3 border">9.8–12.4</td>
                <td className="p-3 border"></td>
                <td className="p-3 border" rowSpan="5">
                  IS 2830, IS2830Cu, IS2831, SAE1008, SAE1010, SAE1015, SAE1016,
                  SAE1018, SAE1018AL, SAE1023S, A105, SAE1029S, SAE1030, 27C15,
                  37C15, 35C8, EN15B, 1541, EN8, EN8D, EN8DCR, EN9, CK45,
                  CK45Cr, SAE1049, IS1875-CLASS IV...
                </td>
              </tr>

              <tr>
                <td className="p-3 border"></td>
                <td className="p-3 border">55×55</td>
                <td className="p-3 border">MMSM</td>
                <td className="p-3 border">12</td>
                <td className="p-3 border">9.0–9.5</td>
              </tr>

              <tr>
                <td className="p-3 border">Round Cornered</td>
                <td className="p-3 border">65×65</td>
                <td className="p-3 border">MMSM</td>
                <td className="p-3 border">12</td>
                <td className="p-3 border">9.0–9.5</td>
              </tr>

              <tr>
                <td className="p-3 border">Squares Billets</td>
                <td className="p-3 border">75×75</td>
                <td className="p-3 border">MMSM</td>
                <td className="p-3 border">12</td>
                <td className="p-3 border">9.0–9.5</td>
              </tr>

              <tr>
                <td className="p-3 border"></td>
                <td className="p-3 border">90×90</td>
                <td className="p-3 border">MMSM</td>
                <td className="p-3 border">12</td>
                <td className="p-3 border">9.0–9.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= APPLICATION ================= */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-6 text-[#2F2C6A] border-b pb-2">
          Applications
        </h3>

        <div className="space-y-3">
          {applications.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-3 h-3 border-2 border-[#2F2C6A] rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-[#2F2C6A] rounded-full"></span>
              </span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CHEMICAL COMPOSITION ================= */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-6 text-[#2F2C6A] border-b pb-2">
          Chemical Composition of Grades
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full text-sm text-center border">
            <thead className="bg-[#2F2C6A] text-white">
              <tr>
                <th className="p-3 border">Grade</th>
                <th className="p-3 border">C</th>
                <th className="p-3 border">Mn</th>
                <th className="p-3 border">P(max)</th>
                <th className="p-3 border">S(max)</th>
                <th className="p-3 border">Si</th>
                <th className="p-3 border">Cr</th>
                <th className="p-3 border">Others</th>
              </tr>
            </thead>

            <tbody className="bg-[#2F2C6A] text-white">
              {/* SAMPLE ROWS (you can continue same pattern) */}
              <tr>
                <td className="p-3 border">IS2879</td>
                <td className="p-3 border">0.08 max</td>
                <td className="p-3 border">0.40–0.60</td>
                <td className="p-3 border">0.025</td>
                <td className="p-3 border">0.025</td>
                <td className="p-3 border">0.03 max</td>
                <td className="p-3 border">0.05 max</td>
                <td className="p-3 border">Al 0.012 max</td>
              </tr>

              <tr>
                <td className="p-3 border">SAE1008</td>
                <td className="p-3 border">0.08 max</td>
                <td className="p-3 border">0.30–0.45</td>
                <td className="p-3 border">0.040</td>
                <td className="p-3 border">0.040</td>
                <td className="p-3 border">0.20 max</td>
                <td className="p-3 border">0.05 max</td>
                <td className="p-3 border">Al 0.020 min</td>
              </tr>

              <tr>
                <td className="p-3 border">EN8</td>
                <td className="p-3 border">0.40–0.45</td>
                <td className="p-3 border">0.60–1.00</td>
                <td className="p-3 border">0.040</td>
                <td className="p-3 border">0.040</td>
                <td className="p-3 border">0.05–0.35</td>
                <td className="p-3 border">0.05 max</td>
                <td className="p-3 border">—</td>
              </tr>

              {/* 👉 continue remaining rows same pattern */}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= SECOND CHEMICAL TABLE ================= */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full text-sm text-center border">
            <thead className="bg-[#2F2C6A] text-white">
              <tr>
                <th className="p-3 border">Grade</th>
                <th className="p-3 border">C</th>
                <th className="p-3 border">Mn</th>
                <th className="p-3 border">P</th>
                <th className="p-3 border">S</th>
                <th className="p-3 border">Si</th>
                <th className="p-3 border">Cr</th>
                <th className="p-3 border">Others</th>
              </tr>
            </thead>

            <tbody className="bg-[#2F2C6A] text-white">
              <tr>
                <td className="p-3 border">CK45</td>
                <td className="p-3 border">0.43–0.48</td>
                <td className="p-3 border">0.60–0.80</td>
                <td className="p-3 border">0.035</td>
                <td className="p-3 border">0.035</td>
                <td className="p-3 border">0.15–0.35</td>
                <td className="p-3 border">0.05 max</td>
                <td className="p-3 border">—</td>
              </tr>

              <tr>
                <td className="p-3 border">EN9</td>
                <td className="p-3 border">0.50–0.60</td>
                <td className="p-3 border">0.60–0.80</td>
                <td className="p-3 border">0.040</td>
                <td className="p-3 border">0.040</td>
                <td className="p-3 border">0.05–0.35</td>
                <td className="p-3 border">0.05 max</td>
                <td className="p-3 border">—</td>
              </tr>

              {/* 👉 continue remaining rows */}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="pb-12 max-w-6xl mx-auto px-4">
        <h3 className="font-bold mb-6">Billet</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="group rounded-xl overflow-hidden border border-transparent hover:border-[#FACC15] shadow-md hover:shadow-xl transition duration-300">
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={billet}
                alt="AM/NS Plates"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <p className="p-3 font-semibold text-center text-gray-800 group-hover:text-[#FACC15] transition">
              Jindal Steel Ltd.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
