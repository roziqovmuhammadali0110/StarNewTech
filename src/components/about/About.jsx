const About = () => {
  return (
    <section className="bg-gray-50 py-16 " id="about">
      <h2 className="text-center text-[40px] font-bold mb-8">Biz Xaqimizda</h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="https://progress-solution.uz/storage/about_us/17077285521697115425asasa727934.jpg" // O'zingiz yuklagan rasm manzilini o'rnating
            alt="IT Innovatsiyasi"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pl-16">
          <span className="text-blue-500 bg-blue-100 rounded-full px-4 py-1 inline-block mb-4">
            4+ YILLIK TAJRIBA
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Dasturiy ta’minot innovatsiyasi bo’yicha to’g’ri yechim
          </h2>
          <p className="text-gray-600 mb-4">
            OOO «Progress Solution Technologies» 2019 yilda yosh mutaxassislar
            tomonidan tashkil etilgan bo‘lib, ularning IKT sohasidagi murakkab
            loyihalarni amalga oshirishda boy amaliy tajribaga ega.
          </p>
          <p className="text-gray-600 mb-4">
            Kompaniya murakkab dasturiy ta’minot ishlab chiqish va texnologik
            xizmatlar ko‘rsatishda jiddiy va asosiy tajribani qo‘lga kiritdi.
            OOO «Progress Solution Technologies» yuqori texnologiyalar bozorida
            muvaffaqiyatli rivojlanmoqda.
          </p>
          <p className="text-gray-600">
            Bizning bozorimizda to‘rt yildan ortiq faoliyat yuritamiz va yuqori
            texnologik IT-sohada keng ko‘lamli loyihalarni amalga oshirish
            bo‘yicha tajribaga ega.
          </p>
          <p className="text-gray-600 mb-4">
            Kompaniya murakkab dasturiy ta’minot ishlab chiqish va texnologik
            xizmatlar ko‘rsatishda jiddiy va asosiy tajribani qo‘lga kiritdi.
            OOO «Progress Solution Technologies» yuqori texnologiyalar bozorida
            muvaffaqiyatli rivojlanmoqda.
          </p>
          <p className="text-gray-600">
            Bizning bozorimizda to‘rt yildan ortiq faoliyat yuritamiz va yuqori
            texnologik IT-sohada keng ko‘lamli loyihalarni amalga oshirish
            bo‘yicha tajribaga ega.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
