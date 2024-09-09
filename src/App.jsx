import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homes/Home";
import Footer from "./pages/Footer";
import { useEffect } from "react";

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
      <Home />
      <Footer />
    </>
  );
}
