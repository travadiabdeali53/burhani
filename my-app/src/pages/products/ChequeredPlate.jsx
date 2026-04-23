export default function ChequeredPlate() {
  const applications = [
    "Surfacing applications.",
    "General engineering applications.",
    "Automobile applications.",
    "Plants and machineries.",
  ];

  return (
    <>
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          Chequered plates are lightweight metal plates with good anti slipping
          and decorative feature. One side of a{" "}
          <strong>Chequered Plate</strong> is raised regular diamonds or lines
          and the other side is plane. The features of corrosion resistance,
          weather resistance and beautiful surface treatment make it also
          suitable for architectural outdoor uses. Steel House is best quality{" "}
          <strong>Mild Steel Chequered Plate Suppliers in Gujarat.</strong> The
          specification for <strong>Steel Chequered Plates</strong> shall conform
          to <strong>IS 3502: 2009.</strong>
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

              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM TITLE */}
      <section className="pb-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2F2C6A]">
          Mild Steel Chequered Plate Suppliers
        </h2>
      </section>
    </>
  );
}