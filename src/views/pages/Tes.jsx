// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Tes() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{padding: "40px"}}
    >
      {[1, 2, 3].map((value, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[500px] flex justify-center items-center bg-slate-600">
            <p className="text-2xl text-white font-semibold">Slide{value}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
