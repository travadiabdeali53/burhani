import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-['Poppins',sans-serif]">
      <Hero />
      <Slider />
      <Products />
      <Stats />
      <Footer />
    </div>
  );
}