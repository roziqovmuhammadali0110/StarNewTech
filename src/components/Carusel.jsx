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
    <div className="container mx-auto" id="portfolio">
      <div className="w-full flex items-center justify-center text-[40px] pt-10 font-medium">
        <h1>{t("carousel.title")}</h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={3}
        slidesPerView={3}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true
        }}
        speed={5000}
        loop={true}
        pagination={{ clickable: true }}
        slideNextClass="true"
        className="min-h-[500px] flex items-center justify-center"
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
              <h1 className="text-[18px] font-medium">{project.name}</h1>
              <p className="text-[12px] font-medium">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carusel;
