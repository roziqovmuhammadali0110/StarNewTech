import { useState, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import logo from "../assets/image.png";
const Footer = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const [error, setError] = useState("");
  const nameRef = useRef(null);
  const callRef = useRef(null);

  const SendMessage = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const call = callRef.current.value;

    // Validate form inputs
    if (!name || !call) {
      setError(t("footer.newsletter.error.required"));
      setTimeout(() => setError(""), 3000);
      return;
    }

    const phonePattern = /^\+998\d{9}$/;
    if (!phonePattern.test(call)) {
      setError(t("footer.newsletter.error.phone"));
      setTimeout(() => setError(""), 3000);
      return;
    }

    setLoading(true);
    const token = "7344232747:AAEjaU6XXZ9YPTfze-rKtNg2X1oBCD2JdQ0";
    const chat_id = 7015507246;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContext = `Ismi: ${name}\nTelefon raqami: ${call}`;

    try {
      await axios.post(url, {
        chat_id: chat_id,
        text: messageContext
      });
      setNotification(t("footer.newsletter.notification.success"));
      nameRef.current.value = "";
      callRef.current.value = "";
    } catch (error) {
      console.error(error);
      setNotification(t("footer.newsletter.notification.failure"));
    } finally {
      setLoading(false);
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#fbfcfd] to-[#f9fafd] py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Social Media Links */}
        <div>
          <img
            src={logo}
            alt="Progress Solution Technologies"
            className="h-12 mb-4"
          />
          <p className="text-gray-600">{t("footer.openForYou")}</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com"
              className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://t.me"
              className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.services.smm")}
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>{t("footer.services.smm")}</li>
            <li>{t("footer.services.technicalAssignment")}</li>
            <li>{t("footer.services.telegramBot")}</li>
            <li>{t("footer.services.seo")}</li>
            <li>{t("footer.services.mobileApp")}</li>
            <li>{t("footer.services.aiService")}</li>
          </ul>
        </div>

        {/* Latest Blogs Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.latestBlogs.title")}
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                {t("footer.latestBlogs.webSite")}
              </a>
              <span className="text-xs text-gray-500 block">
                Noyabr 15, 2023
              </span>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                {t("footer.latestBlogs.seo")}
              </a>
              <span className="text-xs text-gray-500 block">
                Noyabr 15, 2023
              </span>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                {t("footer.latestBlogs.businessStrategy")}
              </a>
              <span className="text-xs text-gray-500 block">
                Noyabr 15, 2023
              </span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription and Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.newsletter.title")}
          </h3>
          <p className="text-gray-600 mb-4">
            {t("footer.newsletter.description")}
          </p>
          <div className="relative mb-6">
            <form onSubmit={SendMessage} className="flex flex-col space-y-4">
              <input
                type="text"
                ref={nameRef}
                placeholder={t("footer.newsletter.namePlaceholder")}
                className="p-3 border border-gray-300 rounded-xl"
              />
              <input
                type="tel"
                ref={callRef}
                pattern="\+998\d{9}"
                placeholder={t("footer.newsletter.phonePlaceholder")}
                className="p-3 border border-gray-300 rounded-xl"
                onInvalid={(e) =>
                  e.target.setCustomValidity(t("footer.newsletter.error.phone"))
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-red-800 text-white font-medium p-3 rounded-2xl">
                {loading
                  ? t("footer.newsletter.loading")
                  : t("footer.newsletter.submit")}
              </button>
              {notification && <p>{notification}</p>}
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
