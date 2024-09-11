import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/image.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Skroll pozitsiyasi uchun holat
  const { t, i18n } = useTranslation();

  // Tilni o'zgartirish funksiyasi
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage); // Saqlash
  };

  // Saqlangan tilni olish
  const language = localStorage.getItem("i18nextLng") || "uz";

  // Menu toggle funksiyasi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll pozitsiyasini kuzatish
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true); // Skroll bo'lganda
      } else {
        setIsScrolled(false); // Skroll yo'q bo'lsa
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-2 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg " : "bg-transparent text-white"
      }`}>
      <div className="flex items-center container mx-auto justify-between font-medium w-full">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="max-w-[150px] rounded-lg" />
          </a>
        </div>

        {/* Katta ekran uchun linklar */}
        <ul className="hidden lg:flex space-x-5">
          <li>
            <a
              href="#about"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              {t("abouts")}
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              {t("portfolio")}
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              {t("service")}
            </a>
          </li>
          <li>
            <a
              href="#client"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              {t("clients")}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-700 hover:font-bold hover:underline">
              {t("contact")}
            </a>
          </li>
        </ul>

        {/* Til tanlash dropdown */}
        <select
          value={language}
          name="Lng"
          id="lng"
          onChange={handleChange}
          className="w-[100px] h-8 rounded-lg font-bold px-2 bg-slate-100 border-none outline-none text-slate-700">
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
        </select>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 lg:hidden space-y-4">
            <li>
              <a
                href="#about"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                {t("abouts")}
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                {t("portfolio")}
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                {t("service")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                {t("clients")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-gray-700"
                onClick={toggleMenu}>
                {t("contact")}
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
