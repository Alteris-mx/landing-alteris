// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img from '../assets/images/black.png';


// import required modules
import { FreeMode, Pagination, Autoplay, EffectCoverflow, EffectCards} from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <>
      <Swiper effect={'coverflow'}
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
        loop={true}
        autoplay={
            {
                delay: 1000,
                disableOnInteraction: false
            }
        }
        modules={[FreeMode, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        {/*<SwiperSlide>*/}
        {/*  <img src={img.src} alt="black" />*/}
        {/*</SwiperSlide>*/}
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
