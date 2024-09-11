import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover">
        <source
          src="//progress-solution.uz/storage/platforms/17132630231702716935video188410.mp4"
          type="video/mp4"
        />
        Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
      </video>
      <div className="relative z-10 text-white flex items-center justify-center h-full">
        <div
          data-aos="zoom-in"
          className=" w-full px-3 flex flex-col items-start justify-center">
          <div className="font-bold xs:space-y-6 md:space-y-3 lg:space-y-0 container mx-auto text-white text-[6px] xs:text-[18px] md:text-[30px] lg:text-[45px] xl:text-[55px]">
            <h1>{t("header.openForYou")}</h1>
            <h1>
              <span className="text-[#fdfcfc]">
                {t("header.newInTheWorld")}
              </span>
            </h1>
            <h1>
              <span className="text-[#fffefe]">{t("header.itWithUs")}</span>
            </h1>
            <a href="#about">
              <button className="w-[162px] h-[60px] font-bold text-[18px] rounded-md bg-[#05319F] text-white hover:bg-[#D33F3F] focus:outline-none">
                {t("header.moreDetails")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
