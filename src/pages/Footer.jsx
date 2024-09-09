import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white pb-8 px-4">
      {/* Logo va matn */}
      <div className="flex flex-wrap items-center lg:flex-row lg:items-start md:justify-around xl:justify-between space-y-6 lg:space-y-0 xs:space-x-4 lg:space-x-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left pb-4">
          <a href="#">
            <img
              src="https://progress-solution.uz/storage/platforms/1700150090logo_(2)484.png"
              alt="Logo"
              className="h-16 w-auto mb-4"
            />
          </a>
        </div>

        {/* Menyu bo'limi */}
        <ul className="flex flex-col space-y-2 text-gray-700 lg:space-y-4">
          <li className="font-bold text-black">
            <a href="#">{t("footer.menu")}</a>
          </li>
          <li>
            <a href="#">{t("footer.home")}</a>
          </li>
          <li>
            <a href="#">{t("footer.aboutUs")}</a>
          </li>

          <li>
            <a href="#">{t("footer.contacts")}</a>
          </li>
        </ul>

        {/* Kontaktlar bo'limi */}
        <div className="flex gap-20 xs:gap-3 md:gap-20 xs:space-x-0 md:space-x-4 justify-between xs:flex-col md:flex-row">
          <ul className="flex flex-col space-y-2 text-gray-700 lg:space-y-4">
            <li className="font-bold text-black">
              <a href="#">{t("footer.contacts")}</a>
            </li>
            <li>
              <a href="#">{t("footer.contactAddress")}</a>
            </li>
            <li>
              <a href="#">{t("footer.email")}</a>
            </li>
            <li>
              <a href="#">{t("footer.phone1")}</a>
            </li>
            <li>
              <a href="#">{t("footer.phone2")}</a>
            </li>
          </ul>

          {/* Obuna bo'limi */}
          <div className="w-full lg:w-auto">
            <ul className="mb-4">
              <li className="font-bold text-black lg:text-left">
                {t("footer.subscribeTitle")}
              </li>
            </ul>
            <div className="flex items-center space-x-4 xs:space-x-0 md:space-x-4 gap-2 bg-[#F2F2F2] border-2 p-3 rounded-[45px]">
              <input
                type="text"
                placeholder={t("footer.subscribePlaceholder")}
                className="w-full lg:w-auto px-4 py-2 bg-none rounded-xl focus:outline-none bg-[#F2F2F2]"
              />
              <button className="bg-[#F42C37] text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition duration-300 w-[200px] lg:w-auto">
                {t("footer.subscribeButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
