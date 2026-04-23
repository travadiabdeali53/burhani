import { Link } from "react-router-dom";
import tmt from "../assets/tmt.webp";
import angles from "../assets/angles.webp";
import pipes from "../assets/pipes.webp";
import sheets from "../assets/sheets.webp";
import beams from "../assets/beams.webp";
import hardware from "../assets/hardware.webp";
const products = [
  {
    title: "TMT Bars",
    slug: "tmtbars",
    desc: "High tensile strength bars ideal for RCC structures, bridges, and high-rise buildings. Available in all standard grades.",
    tag: "Most Popular",
    color: "#FACC15",
    img: tmt,
  },
  {
    title: "Steel Angles",
    slug: "steelangles",
    desc: "Equal and unequal angles used in construction of towers, trusses and industrial frameworks with superior load-bearing.",
    tag: "Structural",
    color: "#0B1F3A",
    img: angles,
  },
  {
    title: "MS Pipes & Tubes",
    slug: "mspipes",
    desc: "Mild steel pipes for water pipelines, structural purposes and scaffolding. Available in ERW and seamless variants.",
    tag: "Industrial",
    color: "#FACC15",
    img: pipes,
  },
  {
    title: "Steel Sheets",
    slug: "hrsheets",
    desc: "HR, CR, and GP sheets for roofing, fabrication and automotive use. Available in varying thickness and widths.",
    tag: "Fabrication",
    color: "#0B1F3A",
    img: sheets,
  },
  {
    title: "Channels & Beams",
    slug: "channelsbeams",
    desc: "I-beams, H-beams and C-channels for heavy structural applications, mezzanines and portal frames.",
    tag: "Heavy Duty",
    color: "#FACC15",
    img: beams,
  },
  {
    title: "Sika Chemicals",
    slug: "chemicals",
    desc: "Complete range of construction chemicals, waterproofing solutions, adhesives, sealants, and structural products for all your project needs.",
    tag: "Chemicals",
    color: "#0B1F3A",
    img: hardware,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-[#FACC15] font-bold tracking-widest text-xs uppercase mb-2">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1F3A] leading-tight">
              Our Products
            </h2>
          </div>
          <p className="text-[#0B1F3A]/50 max-w-sm text-sm font-medium leading-relaxed">
            Premium quality steel products sourced directly from top
            manufacturers. All products are ISI certified and quality tested.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            return (
              <Link
                to={`/products/${product.slug}`}
                state={{ category: product.title }}
                key={i}
              >
                <div className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-[#0B1F3A]/20 group-hover:bg-[#0B1F3A]/40 transition duration-300"></div>

                    <span
                      className="absolute top-3 left-3 text-[10px] font-black tracking-widest px-2.5 py-1 rounded z-10"
                      style={{
                        backgroundColor: product.color,
                        color:
                          product.color === "#FACC15" ? "#0B1F3A" : "#FACC15",
                      }}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-black text-[#0B1F3A] text-lg">
                        {product.title}
                      </h3>
                      <span className="w-7 h-7 rounded-full border-2 border-gray-100 group-hover:border-[#FACC15] group-hover:bg-[#FACC15] transition-all duration-300 flex items-center justify-center text-[#0B1F3A] font-bold text-sm">
                        →
                      </span>
                    </div>

                    <p className="text-[#0B1F3A]/50 text-sm leading-relaxed">
                      {product.desc}
                    </p>
                  </div>

                  <div className="h-0.5 w-0 group-hover:w-full bg-[#FACC15] transition-all duration-500" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-[#0B1F3A] text-white px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#FACC15] hover:text-[#0B1F3A] transition-all duration-300 rounded"
          >
            Enquire About Products
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
