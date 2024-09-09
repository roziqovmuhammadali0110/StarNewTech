import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section data-aos="fade-up-right" className="bg-gray-50 py-16" id="about">
      <h2 className="text-center xs:text-[24px] md:text-[33px] lg:text-[40px] text-[40px] font-bold mb-8">
        {t("about.title")}
      </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="https://progress-solution.uz/storage/about_us/17077285521697115425asasa727934.jpg"
            alt="IT Innovatsiyasi"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-16">
          <span className="text-blue-500 bg-blue-100 rounded-full px-4 py-1 inline-block mb-4">
            {t("about.experience")}
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t("about.description1")}
          </h2>
          <p className="text-gray-600 mb-4">{t("about.description2")}</p>
          <p className="text-gray-600">{t("about.description3")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
