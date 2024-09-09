import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      data-aos="zoom-in"
      className="image h-screen w-full px-3 flex flex-col items-start justify-center">
      <div className="font-bold xs:space-y-6 md:space-y-3 lg:space-y-0 container mx-auto text-white text-[6px] xs:text-[18px] md:text-[30px] lg:text-[45px] xl:text-[55px]">
        <h1>{t("header.openForYou")}</h1>
        <h1>
          {t("header.newInTheWorld")}{" "}
          <span className="text-[#F24C1A]">{t("header.newInTheWorld")}</span>
        </h1>
        <h1>
          <span className="text-[#F24C1A]">{t("header.itWithUs")}</span>
        </h1>
        <a href="#about">
          <button className="w-[162px] h-[60px] font-bold text-[18px] rounded-md bg-[#05319F] text-white hover:bg-[#D33F3F] focus:outline-none">
            {t("header.moreDetails")}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
