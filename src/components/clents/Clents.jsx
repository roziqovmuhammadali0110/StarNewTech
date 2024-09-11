import { useTranslation } from "react-i18next";

const client = [
  {
    id: 1,
    name: "UzSAMA",
    logo: "https://progress-solution.uz/storage/clients/1717959237davaktiv_logo293.svg"
  },
  {
    id: 2,
    name: "Xalq Banki",
    logo: "https://progress-solution.uz/storage/clients/1722926384Xalq_banki265.jpeg"
  },
  {
    id: 3,
    name: "Client 3",
    logo: "https://progress-solution.uz/storage/clients/1715145755logo588.svg"
  },
  {
    id: 4,
    name: "Client 4",
    logo: "https://progress-solution.uz/storage/clients/1703582689smrm_logotipi942.jpg"
  },
  {
    id: 5,
    name: "Profi University",
    logo: "https://progress-solution.uz/storage/clients/1699336573profi-logo_(2)72.svg"
  },
  {
    id: 6,
    name: "Xalq Ta'lim",
    logo: "https://progress-solution.uz/storage/clients/1703582711oq__fon_uchun597.png"
  },
  {
    id: 7,
    name: "IT Park",
    logo: "https://progress-solution.uz/storage/clients/1722939323seysmologiya123.png"
  },
  {
    id: 8,
    name: "IT Park",
    logo: "https://progress-solution.uz/storage/clients/1704270879Logo_IT_Park_Uzbekis322.png"
  }
];

const ClientsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-100" id="clients">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl xs:text-[20px] md:text-[30px] xl:text-[40px] font-bold mb-8">
          {t("client.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {client.map((clients) => (
            <div
              key={clients.id}
              className="flex justify-center items-center p-4 shadow-md bg-white rounded-lg hover:shadow-xl">
              <img src={clients.logo} alt={clients.name} className="max-h-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
