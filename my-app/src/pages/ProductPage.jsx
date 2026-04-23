import { useSearchParams, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
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
import tmt from "../assets/products/tmt.webp";
import wire from "../assets/products/wire.webp";
import angle from "../assets/products/angle.webp";
import round from "../assets/products/round.webp";
import structural_steel from "../assets/products/structural_steel.webp";
import hr_plates from "../assets/products/hr_plates.webp";
import alloy from "../assets/products/alloy.webp";
import HRPlate from "./products/HRPlates";

const BASE = import.meta.env.BASE_URL;

// ─── BRAND CATALOGUE ─────────────────
const catalogue = {
  vizag: {
    name: "VIZAG Steel",
    tagline: "Distributor in Surendranagar",
    description: [
      "VIZAG steel which is also known as Rashtriya Ispat Nigam Ltd (RINL) is a popular steel producer based in Vishakhapatnam. We at  are the Burhani Steel & Hardware dealers and suppliers of Vizag steel products.",

      "The TMT bars by Vizag steel have better bonding with cement and offer higher elongation, ultimate tensile strength, and fatigue strength. We supply VSP steel TMT bars (RINL), which serve as the framework for high-rise buildings.",

      "Our homes become safe and secure due to the high strength and flexibility of these reinforcement steel bars.",

      "We at Burhani Steel & Hardware are authorized dealers and suppliers of Vizag steel products.",
    ],
    products: [
      { title: "TMT Bars", img: tmt, pdf: "https://drive.google.com/file/d/1NGKOj-g-bxG9cNZ0MUfmy7Rcpzzh-kvA/view?usp=sharing" },
      { title: "Wire Rod", img: wire, pdf: "https://drive.google.com/file/d/195Q-65RfVZb1OhU7yVf1EKNlvYYwJsoB/view?usp=sharing" },
      {
        title: "Structural Steel (Angles)",
        img: angle,
        pdf: "https://drive.google.com/file/d/11E9OLIXbsk46Dgki5iWJoBqUqNDLFDrq/view?usp=sharing",
      },
      {
        title: "Steel Round Bars",
        img: round,
        pdf: "https://drive.google.com/file/d/1QALeNvKrn0Gr0oUi5qQsqdN7mBfG8max/view?usp=sharing",
      },
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
      { title: "TMT Bars", img: tmt, pdf: "https://drive.google.com/file/d/1E1C2U-7k-8BDRBhq7E0QYiTmIcuGKXs5/view?usp=sharing" },
      { title: "Wire Rod", img: wire, pdf: "https://drive.google.com/file/d/1GTcLrIJ2Yr8xFYmbez72iHQWvuanSbsK/view?usp=sharing" },
      { title: "Alloy Steel", img: alloy, pdf: "https://drive.google.com/file/d/1E1C2U-7k-8BDRBhq7E0QYiTmIcuGKXs5/view?usp=sharing" },
    ],
  },

  kamdhenu: {
    name: "Kamdhenu Steel",
    tagline: "Distributor in Surendranagar",
    description:
      "Kamdhenu Steel is one of India's leading integrated steel manufacturers with a capacity of 27 MTPA. Kamdhenu products are trusted across residential, commercial and infrastructure segments for their consistent quality, superior strength and modern manufacturing processes.",
    products: [
      { title: "TMT Bars", img: tmt, pdf: "https://drive.google.com/file/d/15y_t_2W6Q5K1YVn3kbx93QDwT8E6I6AX/view?usp=sharing" },
    ],
  },

  key2: {
    name: "Key 2 Steel",
    tagline: "Distributor in Surendranagar",
    description:
      "Key 2 Steel is one of India's leading integrated steel manufacturers with a capacity of 27 MTPA. Key 2 products are trusted across residential, commercial and infrastructure segments for their consistent quality, superior strength and modern manufacturing processes.",
    products: [
      { title: "TMT Bars", img: tmt, pdf: "https://drive.google.com/file/d/1bAomI2507LkjGFPy_0UzrsrVjLFe-oov/view?usp=sharing" },
    ],
  },

  ettmt: {
    name: "ET TMT Steel",
    tagline: "Distributor in Surendranagar",
    description:
      "ET TMT Steel is one of India's leading integrated steel manufacturers with a capacity of 27 MTPA. ET TMT products are trusted across residential, commercial and infrastructure segments for their consistent quality, superior strength and modern manufacturing processes.",
    products: [{ title: "TMT Bars", img: tmt, pdf: "https://drive.google.com/file/d/13wRJRMdpVsIV47GrKRTNjgsyLZt4PBup/view?usp=drive_link" }],
  },
};

// ─── PRODUCT CARD ─────────────────
function ProductCard({ title, img, pdf, index }) {
  return (
    <Animate
      variant="fadeUp"
      delay={`delay-[${index * 80}ms]`}
      duration="duration-600"
    >
      <div className="group flex flex-col w-full max-w-[300px] sm:max-w-full mx-auto rounded-xl overflow-hidden border border-gray-100 hover:border-[#FACC15] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Image — click to preview PDF */}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full"
        >
          <div className="relative overflow-hidden h-40 sm:h-44 h-40 sm:h-44 md:h-48 bg-gray-100">
            <img
              src={img}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0B1F3A]/50 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="text-white text-xs font-semibold tracking-wide">
                View Brochure
              </span>
            </div>
          </div>
        </a>

        {/* Footer */}
        <div className="p-4 bg-white flex items-center justify-between gap-3">
          <h3 className="font-semibold text-[#0B1F3A] text-sm leading-tight">
            {title}
          </h3>
          <a
            href={pdf}
            download
            className="shrink-0 flex items-center gap-1.5 bg-[#FACC15] hover:bg-[#0B1F3A] text-[#0B1F3A] hover:text-white px-3 py-1.5 rounded-lg font-semibold text-[11px] tracking-wide transition-all duration-200"
          >
            Download
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>

        {/* Yellow underline accent */}
        <div className="h-0.5 w-0 group-hover:w-full bg-[#FACC15] transition-all duration-500" />
      </div>
    </Animate>
  );
}

// ─── MAIN PAGE ─────────────────
export default function ProductPage() {
  const { brand } = useParams();
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
    chemicals: ["Chemicals"],
    channelsbeams: ["Channel &", "Beams"],
    // 👉 add your 14 products here once
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

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
