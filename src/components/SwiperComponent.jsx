// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img from '../assets/images/black.png';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img.src} alt="black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.src} alt="black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.src} alt="black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.src} alt="black" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img.src} alt="black" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
