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
    <>
      {/* DESCRIPTION */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <p className="text-gray-700 leading-relaxed text-justify">
          <strong>HR Sheets or Hot Rolled Sheets</strong> are steel sheets that
          are soft enough to bend flat on itself without cracking. They are
          ductile enough for shallow drawing used in a variety of industries in
          the domestic market. <strong>HR Sheets Suppliers</strong> – the sheets
          supplied by us give total peace of mind in purchase and consumption
          with assured availability, consistent quality, and proper service. We
          supply packet material as well as coil cut to fulfil customized size
          requirements. Available in many thickness with different widths and
          lengths.
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
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}