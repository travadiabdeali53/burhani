import { useSearchParams, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import Animate from "../components/Animate";
import Footer from "../components/Footer";

// ✅ IMPORT PRODUCT PAGES
import MainProducts from "./products/MainProducts";
import TMTBars from "./products/TMTBars";
import Fencing from "./products/Fencing";
import Chemicals from "./products/Chemicals";
import WireRods from "./products/WireRods";
import StructuralSteel from "./products/StructuralSteel";
import SteelAngles from "./products/SteelAngles";
import RoundBars from "./products/RoundBars";
import MSPipes from "./products/MSPipes";
import AlloySteel from "./products/AlloySteel";
import HRPlates from "./products/HRPlates";
import HRSheets from "./products/HRSheets";
import ChequeredPlate from "./products/ChequeredPlate";
import Billet from "./products/Billet";
import Channel from "./products/Channel";

// ✅ IMPORT IMAGES (IMPORTANT)
import tmt from "../assets/products/tmt4.webp";
import wire from "../assets/products/wire.webp";
import round2 from "../assets/products/round2.webp";
import angle from "../assets/products/angle.webp";
import structural_steel from "../assets/products/structural_steel.webp";
import hr_plates from "../assets/products/hr_plates.webp";
import alloy from "../assets/products/alloy.webp";
import HRPlate from "./products/HRPlates";

const BASE = import.meta.env.BASE_URL;

// ─── BRAND CATALOGUE ─────────────────
const catalogue = {
  tata: {
    name: "TATA Steel",
    tagline: "Distributor in Surendranagar",
    description: [
      "TATA Steel is one of India's most trusted and leading steel manufacturers, known for its high-quality and innovative steel products. We at Burhani Steel & Hardware are dealers and suppliers of Tata Steel products.",

      "The TMT bars by TATA Steel provide excellent bonding with cement and offer superior elongation, high tensile strength, and durability. We supply Tata TMT bars, which are ideal for use in high-rise buildings and modern construction.",

      "Our structures become safe and long-lasting due to the strength, flexibility, and reliability of these reinforcement steel bars.",

      "We at Burhani Steel & Hardware are trusted dealers and suppliers of Tata Steel products.",
    ],
    products: [
      {
      title: "TMT Bars",
      img: tmt,
    },
    {
      title: "Steel Rod",
      img: wire,
    },

    ],
  },
  electrosteel: {
    name: "Electro Steel",
    tagline: "Distributor in Surendranagar",
    description: [
      "Electro Steel is a reputed name in the Indian steel industry, known for delivering consistent quality and advanced manufacturing standards. At Burhani Steel & Hardware, we proudly supply Electro Steel products that meet modern construction needs.",

      "Electro Steel TMT bars are manufactured using advanced thermo-mechanical treatment, ensuring superior strength, ductility, and corrosion resistance. These bars provide excellent bonding with cement, making them ideal for RCC structures and long-lasting construction.",

      "Designed for safety and performance, Electro Steel TMT bars offer high tensile strength, better elongation, and earthquake-resistant properties—making them a reliable choice for residential, commercial, and infrastructure projects.",

      "At Burhani Steel & Hardware, we ensure timely supply, genuine products, and competitive pricing, making us a trusted partner for builders, contractors, and engineers choosing Electro Steel.",
    ],
    products: [
      {
      title: "Steel Rod",
      img: wire,
    }
    ],
  },
  jindal: {
    name: "Jindal Steel",
    tagline: "Distributor in Surendranagar",
    description: [
      "Jindal Steel is a leading force in the Indian steel industry, known for its innovation, quality, and strong manufacturing capabilities. At Burhani Steel & Hardware, we supply genuine Jindal Steel products trusted by engineers and builders across projects.",

      "Jindal TMT bars are produced using advanced technology, ensuring high strength, excellent ductility, and superior bonding with cement. These bars are designed to perform exceptionally well in RCC structures and demanding construction environments.",

      "With features like high tensile strength, better elongation, and earthquake-resistant properties, Jindal TMT bars provide enhanced safety and durability for residential, commercial, and infrastructure developments.",

      "At Burhani Steel & Hardware, we are committed to delivering authentic Jindal Steel products with reliable service, competitive pricing, and timely availability for all your construction needs.",
    ],
    products: [
      {
      title: "TMT Bars",
      img: tmt,
    },
      {
      title: "Round Bars",
      img: round2,
    }
    ],
  },

  sail: {
    name: "SAIL Steel",
    tagline: "Distributor in Surendranagar",
    description:
      "Steel Authority of India Ltd. (SAIL) is one of the largest steel-making companies in India and a Maharatna PSU. SAIL produces a broad range of steel including hot and cold rolled coils and sheets, galvanised sheets, electrical sheets, structurals, railway products, plates, bars and rods, stainless steel and other alloy steels.",
    products: [
      {
        title: "Structural Steel (Angles)",
        img: structural_steel,
        pdf: "https://drive.google.com/file/d/1jxZJ0O-mS_75uQtE4HCmYK-Om5q8DPnD/view?usp=sharing",
      },
      {
        title: "HR Plates",
        img: hr_plates,
        pdf: "https://drive.google.com/file/d/1b4RUg5dY3e6L1ydfVjXfRzZXrE5LkKq3/view?usp=sharing",
      },
    ],
  },

  jsw: {
    name: "JSW Steel",
    tagline: "Distributor in Surendranagar",
    description:
      "JSW Steel is one of India's leading integrated steel manufacturers with a capacity of 27 MTPA. JSW products are trusted across residential, commercial and infrastructure segments for their consistent quality, superior strength and modern manufacturing processes.",
    products: [
      {
        title: "TMT Bars",
        img: tmt,
        pdf: "https://drive.google.com/file/d/1E1C2U-7k-8BDRBhq7E0QYiTmIcuGKXs5/view?usp=sharing",
      },
      {
        title: "Wire Rod",
        img: wire,
        pdf: "https://drive.google.com/file/d/1GTcLrIJ2Yr8xFYmbez72iHQWvuanSbsK/view?usp=sharing",
      },
      {
        title: "Alloy Steel",
        img: alloy,
        pdf: "https://drive.google.com/file/d/1E1C2U-7k-8BDRBhq7E0QYiTmIcuGKXs5/view?usp=sharing",
      },
    ],
  },

  kamdhenu: {
    name: "Kamdhenu Steel",
    tagline: "Distributor in Surendranagar",
    description:
      "Kamdhenu Steel is one of India's leading integrated steel manufacturers with a capacity of 27 MTPA. Kamdhenu products are trusted across residential, commercial and infrastructure segments for their consistent quality, superior strength and modern manufacturing processes.",
    products: [
      {
        title: "TMT Bars",
        img: tmt,
        pdf: "https://drive.google.com/file/d/15y_t_2W6Q5K1YVn3kbx93QDwT8E6I6AX/view?usp=sharing",
      },
    ],
  },

  ettmt: {
    name: "ET TMT Steel",
    tagline: "Distributor in Surendranagar",
    description:
      "ET TMT Steel is one of India's leading integrated steel manufacturers with a capacity of 27 MTPA. ET TMT products are trusted across residential, commercial and infrastructure segments for their consistent quality, superior strength and modern manufacturing processes.",
    products: [
      {
        title: "TMT Bars",
        img: tmt,
        pdf: "https://drive.google.com/file/d/13wRJRMdpVsIV47GrKRTNjgsyLZt4PBup/view?usp=drive_link",
      },
    ],
  },
};

// ─── PRODUCT CARD ─────────────────
function ProductCard({ title, img, pdf, index }) {
  const hasPdf = !!pdf;

  return (
    <Animate
      variant="fadeUp"
      delay={`delay-[${index * 80}ms]`}
      duration="duration-600"
    >
      <div className="group flex flex-col w-full max-w-[300px] sm:max-w-full mx-auto rounded-xl overflow-hidden border border-gray-100 hover:border-[#FACC15] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        
        {/* Image */}
        {hasPdf ? (
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <CardImage img={img} title={title} showOverlay />
          </a>
        ) : (
          <div>
            <CardImage img={img} title={title} />
          </div>
        )}

        {/* Footer */}
        <div className="p-4 bg-white flex items-center justify-between gap-3">
          <h3 className="font-semibold text-[#0B1F3A] text-sm leading-tight">
            {title}
          </h3>

          {hasPdf && (
            <a
              href={pdf}
              download
              className="shrink-0 flex items-center gap-1.5 bg-[#FACC15] hover:bg-[#0B1F3A] text-[#0B1F3A] hover:text-white px-3 py-1.5 rounded-lg font-semibold text-[11px] tracking-wide transition-all duration-200"
            >
              Download
            </a>
          )}
        </div>

        <div className="h-0.5 w-0 group-hover:w-full bg-[#FACC15] transition-all duration-500" />
      </div>
    </Animate>
  );
}

function CardImage({ img, title, showOverlay = false }) {
  return (
    <div className="relative overflow-hidden h-40 sm:h-44 md:h-48 bg-gray-100">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {showOverlay && (
        <div className="absolute inset-0 bg-[#0B1F3A]/50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xs font-semibold tracking-wide">
            View Brochure
          </span>
        </div>
      )}
    </div>
  );
}

// ─── MAIN PAGE ─────────────────
export default function ProductPage() {
  const { brand } = useParams();

  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const mainProductsScroll = sessionStorage.getItem("productsScrollPosition");

    const homeScroll = sessionStorage.getItem("homeScrollPosition");

    const savedPosition = mainProductsScroll || homeScroll;

    // Restore ONLY when browser back/forward is used
    if (
      navigationType === "POP" &&
      location.pathname === "/products" &&
      savedPosition
    ) {
      window.scrollTo({
        top: Number(savedPosition),
        behavior: "auto",
      });

      sessionStorage.removeItem("productsScrollPosition");
      sessionStorage.removeItem("homeScrollPosition");
      return;
    }

    // Normal page open → always start from top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname, navigationType]);
  const [searchParams] = useSearchParams();

  const queryBrand = searchParams.get("brand");
  const current = brand || queryBrand || null;

  const brandData = current ? catalogue[current] : null;

  const formatTitle = (slug) => {
    if (!slug) return "";

    return slug
      .replace(/-/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const productTitles = {
    tmtbars: ["TMT", "Bars"],
    wirerods: ["Wire", "Rods"],
    structuralsteel: ["Structural", "Steel"],
    steelangles: ["Steel", "Angles"],
    roundbars: ["Round", "Bars"],
    mspipes: ["MS", "Pipes"],
    alloysteel: ["Alloy", "Steel"],
    hrplates: ["HR", "Plates"],
    hrsheets: ["HR", "Sheets"],
    chequeredplates: ["Chequered", "Plates"],
    billet: ["Billet"],
    fencing: ["Fencing", "Materials"],
    chemicals: ["Chemicals &", "Solutions"],
    channelsbeams: ["Channel &", "Beams"],
    // 👉 add your 14 products here once
  };

  return (
    <div className="bg-white font-['Poppins']">
      <section className="relative bg-[#0B1F3A] text-white py-16 overflow-hidden">
        {/* DOT PATTERN */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="dots"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#FACC15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* BIG FADED TEXT */}
        <h1 className="absolute right-10 top-10 text-[120px] font-extrabold text-white/5 hidden md:block">
          BSH
        </h1>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* SMALL TITLE */}
          <Animate variant="fadeDown" duration="duration-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#FACC15]" />
              <span className="text-[#FACC15] text-sm font-bold tracking-widest uppercase">
                OUR PRODUCTS
              </span>
              <div className="w-8 h-[2px] bg-[#FACC15]" />
            </div>
          </Animate>

          {/* MAIN TITLE */}
          <Animate variant="fadeUp" delay="delay-100" duration="duration-700">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {!current ? (
                <>
                  OUR <span className="text-[#FACC15]">PRODUCTS</span>
                </>
              ) : brandData ? (
                <>
                  {brandData.name.split(" ")[0]}{" "}
                  <span className="text-[#FACC15]">
                    {brandData.name.split(" ")[1]}
                  </span>
                </>
              ) : productTitles[current] ? (
                <>
                  {productTitles[current][0]}{" "}
                  {productTitles[current][1] && (
                    <span className="text-[#FACC15]">
                      {productTitles[current][1]}
                    </span>
                  )}
                </>
              ) : (
                formatTitle(current)
              )}
            </h1>
          </Animate>

          {/* SUBTITLE (BRAND ONLY) */}
          {brandData && (
            <Animate variant="fadeUp" delay="delay-200">
              <p className="mt-3 text-lg md:text-2xl text-white/80">
                {brandData.tagline.replace(brandData.name, "").trim()}
              </p>
            </Animate>
          )}

          {/* BREADCRUMB */}
          <Animate variant="fadeUp" delay="delay-300">
            <div className="mt-4 text-sm text-white/60">
              <Link to="/">Home</Link> / <Link to="/products">Products</Link>
              {current && (
                <>
                  {" "}
                  /{" "}
                  <span className="text-[#FACC15]">
                    {brandData?.name ||
                      (productTitles[current]
                        ? productTitles[current].join(" ")
                        : formatTitle(current))}
                  </span>
                </>
              )}
            </div>
          </Animate>
        </div>
      </section>
      {/* ROUTING */}
      {!current ? (
        <MainProducts />
      ) : current === "tmtbars" ? (
        <TMTBars />
      ) : current === "wirerods" ? (
        <WireRods />
      ) : current === "structuralsteel" ? (
        <StructuralSteel />
      ) : current === "roundbars" ? (
        <RoundBars />
      ) : current === "alloysteel" ? (
        <AlloySteel />
      ) : current === "hrplates" ? (
        <HRPlates />
      ) : current === "hrsheets" ? (
        <HRSheets />
      ) : current === "chequeredplates" ? (
        <ChequeredPlate />
      ) : current === "billet" ? (
        <Billet />
      ) : current === "fencing" ? (
        <Fencing />
      ) : current === "chemicals" ? (
        <Chemicals />
      ) : current === "steelangles" ? (
        <SteelAngles />
      ) : current === "mspipes" ? (
        <MSPipes />
      ) : current === "channelsbeams" ? (
        <Channel />
      ) : brandData ? (
        <>
          {/* BRAND DESCRIPTION */}
          <section className="py-16 max-w-6xl mx-auto px-4">
            <p className="text-[#FACC15] font-semibold tracking-widest text-sm mb-2">
              ABOUT {brandData.name.toUpperCase()}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0B1F3A]">
              {brandData.name} Steel Products
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              {Array.isArray(brandData.description) ? (
                brandData.description.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>{brandData.description}</p>
              )}
            </div>
          </section>
          {/* PRODUCT GRID */}
          <section className="pb-16 max-w-6xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brandData.products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </section>
        </>
      ) : (
        <div className="p-10 text-center">Not Found</div>
      )}

      <Footer />
    </div>
  );
}
