import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export const LangueSwiper = () => {
  return (
      <Swiper
        effect='fade'
        className='swiper-container w-full'
        modules={[ Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // Ajout de la durée de transition automatique (5 secondes)
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="slide py-6">
            <div className='slide-content py-6 flex justify-center'>
            <img src="assets/fr3.png" alt="programmation" width={64} height={64} className="cursor-grab" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
            <div className='slide-content py-6 flex justify-center'>
            <img src="assets/sen.png" alt="programmation" width={64} height={64} className="cursor-grab" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
            <div className='slide-content py-6 flex justify-center'>
            <img src="assets/en3.png" alt="programmation" width={64} height={64} className="cursor-grab" />
            </div>
        </SwiperSlide>
      </Swiper>
  );
};
