// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carusel = () => {
  return (
    <div className="container mx-auto" id="portfolio">
      <div className="w-full flex items-center justify-center text-[40px] pt-10 font-medium">
        <h1>Loyihalarimiz bilan tanishing</h1>
      </div>
      <Swiper
        // install Swiper modules
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
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">Bisyor</h1>
            <p className="text-[12px] font-medium">internet do'koni</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132696453354_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">Agrobuy</h1>
            <p className="text-[12px] font-medium">internet do'koni</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132696624512_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">Xalq Ta'limi Info</h1>
            <p className="text-[12px] font-medium">Veb-sayt</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132696805116_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">Dana</h1>
            <p className="text-[12px] font-medium">Internet do'koni</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132697076925_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">Karyera Xizmati</h1>
            <p className="text-[12px] font-medium">Veb tizim</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132697237531_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">Profi University</h1>
            <p className="text-[12px] font-medium">Veb-sayt</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/1713269751821_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">
              Ichki hujjat almashinuvi
            </h1>
            <p className="text-[12px] font-medium">Veb tizim</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/1713269765955_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">Ijod.uz</h1>
            <p className="text-[12px] font-medium">Veb-sayt</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center justify-center">
          <img
            src="https://progress-solution.uz/storage/projects/17132697791096_75.png"
            alt=""
          />
          <div className="flex items-end gap-2">
            <h1 className="text-[18px] font-medium">KZO FVV</h1>
            <p className="text-[12px] font-medium">MOBIL ILOVA</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carusel;
