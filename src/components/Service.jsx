const services = [
  {
    title: "SMM xizmati",
    description:
      "Ijtimoiy tarmoqlarni targ'ib qilish va targ'ib qilish uchun onlayn xizmat. Ijtimoiy tarmoqlarda obunachilar, ko'rishlar, sharhlar",
    icon: "https://progress-solution.uz/storage/services/1702638443smm223.svg" // Buning o'rniga siz SVG yoki rasmni ishlatishingiz mumkin
  },
  {
    title: "Написание Технического Задания",
    description: "Написание Технического Задания (ТЗ)",
    icon: "https://progress-solution.uz/storage/services/1702638550interface-control-sv263.svg"
  },
  {
    title: "Telegram bot",
    description: "Telegram bot - Bu avtomatlashtirilgan Telegram xizmati",
    icon: "https://progress-solution.uz/storage/services/1699451253Bot667.svg"
  },
  {
    title: "SEO xizmati",
    description:
      "SEO optimallashtish – bu raqobatchilardan saytingiz yuqorida bo’lishi",
    icon: "https://progress-solution.uz/storage/services/1699451061Search-Engine-Optimi20.svg" // Buning o'rniga siz SVG yoki rasmni ishlatishingiz mumkin
  },
  {
    title: "Mobil Ilova",
    description:
      "Mobil ilova – bu maʼlum bir platforma uchun ishlab chiqilgan mobil dastur",
    icon: "https://progress-solution.uz/storage/services/1699450855icons8-mobile-app-65463.png"
  },
  {
    title: "AI xizmati",
    description:
      "AI - bu sun'iy ong orqali ma'lumotlarni avtomatik tarzda qabul qilish va uzatish",
    icon: "https://progress-solution.uz/storage/services/16994504083838.png"
  }
];

const Services = () => {
  return (
    <div className="py-10 bg-gray-100" id="service">
      <h2 className="text-center text-3xl font-bold mb-8">
        Biz IT xizmatlarini barcha turlarini taqdim etamiz
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="flex justify-center items-center text-6xl mb-4">
              <img src={service.icon} alt="" className="w-[150px]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
