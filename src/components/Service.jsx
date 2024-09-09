import { useTranslation } from "react-i18next";

const services = [
  {
    key: "smm",
    icon: "https://progress-solution.uz/storage/services/1702638443smm223.svg"
  },
  {
    key: "technical_task",
    icon: "https://progress-solution.uz/storage/services/1702638550interface-control-sv263.svg"
  },
  {
    key: "telegram_bot",
    icon: "https://progress-solution.uz/storage/services/1699451253Bot667.svg"
  },
  {
    key: "seo",
    icon: "https://progress-solution.uz/storage/services/1699451061Search-Engine-Optimi20.svg"
  },
  {
    key: "mobile_app",
    icon: "https://progress-solution.uz/storage/services/1699450855icons8-mobile-app-65463.png"
  },
  {
    key: "ai",
    icon: "https://progress-solution.uz/storage/services/16994504083838.png"
  }
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 bg-gray-100" id="service">
      <h2 className="text-center text-3xl font-bold mb-8">
        {t("services.header")}
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center text-6xl mb-4">
              <img
                src={service.icon}
                alt={t(`services.${service.key}.title`)}
                className="w-[150px]"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t(`services.${service.key}.title`)}
            </h3>
            <p className="text-gray-600">
              {t(`services.${service.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
