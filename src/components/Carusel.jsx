import { useTranslation } from "react-i18next";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carusel = () => {
  const { t } = useTranslation();

  const projects = t("carousel.projects", { returnObjects: true });

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container mx-auto"
      id="portfolio">
      <div className="w-full flex items-center font-bold justify-center text-[40px] xs:text-[23px] md:text-[28px] lg:text-[35px] xl:text-[40px] pt-10 ">
        <h1>{t("carousel.title")}</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={2}
        slidesPerView={2}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        speed={5000}
        loop={true}
        pagination={{ clickable: true }}
        slideNextClass="true"
        className="xs:h-[200px] md:h-[300px] lg:h-[500px] flex items-center justify-center"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center">
            <img
              src={`https://progress-solution.uz/storage/projects/${project.image}`}
              alt={project.name}
            />
            <div className="flex items-end gap-2">
              <h1 className="text-[18px] xs:text-[8px] md:text-[14px] lg:text-[18px] font-medium">
                {project.name}
              </h1>
              <p className="text-[12px] xs:text-[8px] md:text-[10px] lg:text-[12px] font-medium">
                {project.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carusel;
