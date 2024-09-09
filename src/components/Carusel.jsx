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

  return (
    <div className="container mx-auto" id="portfolio">
      <div className="w-full flex items-center justify-center text-[40px] pt-10 font-medium">
        <h1>{t("carusel.title")}</h1>
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
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132696302145_75.png"
            alt={t("projects.bisyor")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">{t("projects.bisyor")}</h1>
            <p className="text-[12px] font-medium">{t("projects.bisyor")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132696453354_75.png"
            alt={t("projects.agrobuy")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">{t("projects.agrobuy")}</h1>
            <p className="text-[12px] font-medium">{t("projects.agrobuy")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132696624512_75.png"
            alt={t("projects.xalq_talim")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">
              {t("projects.xalq_talim")}
            </h1>
            <p className="text-[12px] font-medium">
              {t("projects.xalq_talim")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132696805116_75.png"
            alt={t("projects.dana")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">{t("projects.dana")}</h1>
            <p className="text-[12px] font-medium">{t("projects.dana")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132697076925_75.png"
            alt={t("projects.karyera_xizmati")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">
              {t("projects.karyera_xizmati")}
            </h1>
            <p className="text-[12px] font-medium">
              {t("projects.karyera_xizmati")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132697237531_75.png"
            alt={t("projects.profi_university")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">
              {t("projects.profi_university")}
            </h1>
            <p className="text-[12px] font-medium">
              {t("projects.profi_university")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/1713269751821_75.png"
            alt={t("projects.ichki_hujjat")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">
              {t("projects.ichki_hujjat")}
            </h1>
            <p className="text-[12px] font-medium">
              {t("projects.ichki_hujjat")}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/1713269765955_75.png"
            alt={t("projects.ijod_uz")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">{t("projects.ijod_uz")}</h1>
            <p className="text-[12px] font-medium">{t("projects.ijod_uz")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132697791096_75.png"
            alt={t("projects.kzo_fvv")}
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">{t("projects.kzo_fvv")}</h1>
            <p className="text-[12px] font-medium">{t("projects.kzo_fvv")}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carusel;
