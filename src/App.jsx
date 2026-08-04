import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import OrganizationSchema from "./components/OrganizationSchema";
import useScrollReveal from "./lib/useScrollReveal";
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import Services from "./pages/Services";
import About from "./pages/About";
import Insurance from "./pages/Insurance";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const { pathname } = useLocation();
  useScrollReveal();

  return (
    <div id="root-app">
      <OrganizationSchema />
      <ScrollToTop />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="page-transition" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
