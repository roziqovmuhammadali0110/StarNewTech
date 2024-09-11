import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div
      id="faq"
      className="border-t-2 xs:px-4 md:px-0 flex flex-col md:flex-row container mx-auto py-7 justify-between gap-4 md:gap-8"
      data-aos="fade-up" // Animatsiya qo‘shish
    >
      {/* <div className="w-full md:w-[15%] flex justify-center md:justify-start">
        <h1 className="xs:text-[24px] text-[32px] md:text-[40px] leading-[40px] md:leading-14 text-[#020C31] font-bold px-6">
          {t("ФАҚ")}
        </h1>
      </div> */}

      <div className="w-full flex flex-col ">
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
