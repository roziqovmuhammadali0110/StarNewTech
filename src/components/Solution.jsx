import { t } from "i18next";

const Solution = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="container mx-auto">
      <div className="w-full pl-4 flex items-center justify-center xs:text-[18px] md:text-[30px] lg:text-[40px] pb-5 pt-10 font-medium">
        <h1>{t("solution_title")}</h1>
      </div>
      <div className="grid grid-cols-2 gap-7 xs:grid-cols-1 lg:grid-cols-2 xs:gap-2 lg:gap-7 font-medium items-center justify-between pl-8 xs:pl-2 sm:pl-3 md:pl-5 lg:pl-7 xl:pl-8">
        {[
          {
            imgSrc:
              "https://progress-solution.uz/storage/categories/170263808627.png",
            title: t("risk_management_title"),
            description: t("risk_management_description")
          },
          {
            imgSrc:
              "https://progress-solution.uz/storage/categories/17026381186772.png",
            title: t("analytic_solution_title"),
            description: t("analytic_solution_description")
          },
          {
            imgSrc:
              "https://progress-solution.uz/storage/categories/17026381714994.png",
            title: t("business_security_title"),
            description: t("business_security_description")
          },
          {
            imgSrc:
              "https://progress-solution.uz/storage/categories/17026381423686.png",
            title: t("product_analysis_title"),
            description: t("product_analysis_description")
          },
          {
            imgSrc:
              "https://progress-solution.uz/storage/categories/17026381311915.png",
            title: t("best_quality_title"),
            description: t("best_quality_description")
          },
          {
            imgSrc:
              "https://progress-solution.uz/storage/categories/17026381525296.png",
            title: t("it_management_title"),
            description: t("it_management_description")
          }
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center max-w-[600px] rounded-xl gap-2 p-2 border h-[150px] hover:shadow-xl shadow-md bg-white">
            <div className="w-[20%] flex items-center justify-center">
              <img src={item.imgSrc} alt={item.title} className="w-[102px]" />
            </div>
            <div>
              <h1 className="text-[20px]">{item.title}</h1>
              <p className="text-[14px] font-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
