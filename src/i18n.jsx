import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzTranslate from "../public/locales/uz.json";
import enTranslate from "../public/locales/en.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend) // Bu backend'ni ishlatishni anglatadi, agar siz o'z fayllaringizni to'g'ridan-to'g'ri import qilsangiz, bu qatorni o'chiring.
  .use(LanguageDetector) // Tilni aniqlash uchun
  .use(initReactI18next) // React bilan i18next'ni bog'lash
  .init({
    fallbackLng: "uz", // Agar foydalanuvchi tanlangan til mavjud bo'lmasa, "uz" tilini ishlatadi.
    lng: language,
    debug: process.env.NODE_ENV === "development", // Debug faqat ishlab chiqish muhitida ishlaydi
    resources: {
      uz: { translation: uzTranslate },
      en: { translation: enTranslate }
    }
  });

export default i18n;
