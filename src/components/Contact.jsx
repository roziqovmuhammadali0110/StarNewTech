import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex justify-center items-center flex-col container mx-auto py-10 bg-gray-100"
      id="contact">
      <div className="w-full items-center justify-start text-[40px] xs:text-[20px] md:text-[30px] xl:text-[40px] font-bold pb-5">
        <h1>Contact</h1>
      </div>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-6 md:flex">
        {/* Chap qism */}
        <div className="bg-blue-600 text-white p-6 rounded-xl ">
          <h2 className="text-2xl font-bold xs:text-[20px] md:text-[30px] xl:text-[40px] mb-6">
            {t("contactUs")}
          </h2>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <i className="fas fa-home mr-2"></i>
              <span>{t("email")}:</span>
            </div>
            <p>mroziqov494@gmail.com</p>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <i className="fas fa-phone-alt mr-2"></i>
              <span>{t("phone")}:</span>
            </div>
            <p>+998880391211</p>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>{t("address")}:</span>
            </div>
            <p>Чиланзарская улица 1, г. Ташкент, Узбекистан</p>
          </div>
        </div>

        {/* O'ng qism - Kontakt formasi */}
        <div className="p-6 md:w-2/3">
          <h2 className="text-2xl xs:text-[20px] md:text-[30px] xl:text-[40px] font-bold mb-6">
            {t("sendMessage")}
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder={t("name")}
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder={t("phoneOrEmail")}
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder={t("yourMessage")}
                className="p-3 border border-gray-300 rounded-lg w-full h-32"></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-6 rounded-3xl">
              {t("sendButton")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
