import { Link } from "react-router-dom";

import tmt2 from "../../assets/products/tmt2.webp";
import fencing from "../../assets/products/fencing.webp";
import chemicals from "../../assets/products/chemicals.webp";
import wire from "../../assets/products/wire.webp";
import structural_steel2 from "../../assets/products/structural_steel2.webp";
import round from "../../assets/products/round.webp";
import alloy from "../../assets/products/alloy.webp";
import angle from "../../assets/products/angle.webp";
import pipes from "../../assets/products/pipes.webp";
import hr_plates from "../../assets/products/hr_plates.webp";
import sheets from "../../assets/products/sheets.webp";
import beams from "../../assets/products/beams.webp";
import chequered from "../../assets/products/chequered.webp";

export default function MainProducts() {
  const mainProducts = [
    { title: "TMT Bars", img: tmt2, slug: "tmtbars" },
    { title: "Fencing Materials", img: fencing, slug: "fencing" },
    { title: "Chemicals", img: chemicals, slug: "chemicals" },
    { title: "Wire Rods", img: wire, slug: "wirerods" },
    {
      title: "Structural Steel",
      img: structural_steel2,
      slug: "structuralsteel",
    },
    { title: "Round Bars", img: round, slug: "roundbars" },
    { title: "Alloy Steel", img: alloy, slug: "alloysteel" },
    { title: "Steel Angles", img: angle, slug: "steelangles" },
    { title: "MS Pipes & Tubes", img: pipes, slug: "mspipes" },
    { title: "H. R. Plates", img: hr_plates, slug: "hrplates" },
    { title: "H. R. Sheets", img: sheets, slug: "hrsheets" },
    { title: "Channel & Beams", img: beams, slug: "channelsbeams" },
    { title: "Chequered Plates", img: chequered, slug: "chequeredplates" },
  ];

  return (
  <section className="py-14 px-4 md:px-6 bg-[#eeeeee]">
    <div className="max-w-7xl mx-auto">
      {/* Mobile = 1 product per row */}
      {/* Tablet = 2 */}
      {/* Desktop = 3 */}
      {/* Large Desktop = 4 */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mainProducts.map((p, i) => (
          <Link
            key={i}
            to={`/products/${p.slug}`}
            className="group"
            onClick={() => {
              sessionStorage.setItem(
                "productsScrollPosition",
                window.scrollY
              );
            }}
          >
            <div className="bg-white border border-transparent hover:border-[#FACC15] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">

              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B1F3A]/45 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm tracking-wide">
                    View Products →
                  </span>
                </div>
              </div>

              {/* Title Section */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg text-[#0B1F3A] group-hover:text-[#FACC15] transition duration-300">
                  {p.title}
                </h3>

                {/* Yellow thin underline on hover */}
                <div className="mt-3 h-[2px] w-0 group-hover:w-full bg-[#FACC15] mx-auto transition-all duration-500"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="mt-14 text-center">
        <div className="w-14 h-[2px] bg-[#FACC15] mx-auto mb-4"></div>

        <p className="text-[#0B1F3A] text-lg sm:text-xl font-semibold">
          Steel Suppliers at{" "}
          <span className="text-[#FACC15]">
            Best Price
          </span>
        </p>
      </div>
    </div>
  </section>
);
}