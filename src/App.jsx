import { useTranslation } from "react-i18next";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/homes/Home";
import Footer from "./pages/Footer";

export default function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Navbar changeLanguage={changeLanguage} />
      <Home />
      <Footer />
    </div>
  );
}
