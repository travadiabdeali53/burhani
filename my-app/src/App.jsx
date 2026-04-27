import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";

// ── Scroll to top on every route change ──────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Stop browser from restoring old scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Instantly jump to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// ── Layout ───────────────────────────────────────────────────────────────────
// Navbar is rendered ONCE here for ALL pages.
// On homepage it starts transparent and becomes solid on scroll (handled inside Navbar).
// On all other pages it is always solid.
// We always add pt-[64px] so content never hides under the fixed bar.
function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-[60px] sm:pt-[68px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:brand" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter basename="/burhani/">
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
