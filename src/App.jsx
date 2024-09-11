import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homes/Home";
import Footer from "./pages/Footer";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Clents from "./pages/clents/Clents";
import Contact from "./pages/contact/Contact";
import Service from "./pages/sercive/Service";
import Partfolio from "./pages/partfolio/Partfolio";
import About from "./pages/about/About";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      easing: "ease-in-out" // animatsiya uchun qadoqlash funksiyasi
    });
  }, []);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Navbar changeLanguage={changeLanguage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client" element={<Clents />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Partfolio />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </>
  );
}
