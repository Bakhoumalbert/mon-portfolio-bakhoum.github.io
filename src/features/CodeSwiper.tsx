import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Disponibilite } from "../components/presentation/codes/Disponibilite";
import { Type_poste } from "../components/presentation/codes/Type_poste";
import { GrPrevious, GrNext } from "react-icons/gr";
export const CodeSwiper = () => {
  return (
    <div className="w-auto">
      <Swiper
        // effect='fade'
        className="flex justify-center items-center"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={450}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }} // Ajout de la durée de transition automatique (5 secondes)
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="slide">
          <div className="slide-content w-full h-full">
            <Disponibilite />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide flex justify-end items-center">
          <div className="slide-content w-full h-full">
            <Type_poste />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-content w-full h-full">
            <Disponibilite />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-content w-full h-full">
            <Disponibilite />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-content w-full h-full">
            <Disponibilite />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-between md:px-36 pt-2">
        <button className="custom-prev-button bg-gray-200 rounded-full p-2 items-center">
            <GrPrevious size={30} className="text-white" />
        </button>
        <button className="custom-next-button bg-gray-200 rounded-full p-2 items-center">
            <GrNext size={30} />
        </button>
      </div>
    </div>
  );
};
