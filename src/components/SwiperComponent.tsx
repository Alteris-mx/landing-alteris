// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import NAVILogo from '../assets/images/NAVI-Logo.svg.png'
import adaptic from '../assets/images/adaptic.png' 


import { type CollectionEntry, getCollection, getEntry } from 'astro:content';
import img from '../assets/images/black.png';


// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

const clientsData: CollectionEntry<'clients'>[] = await getCollection('clients');

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        //  width={900} //todo: remove and fix infinite width problem
        slidesPerView={2}
        spaceBetween={50}
        freeMode={true}
        loop={true}
        width={800}
        autoplay={
          {
            delay: 1000,
            disableOnInteraction: true
          }
        }
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className={`flex justify-center rounded-xl bg-green-50 p-3`}>
            <figure>
              <img className='w-[250px] h-[150px] object-contain' src={adaptic.src} alt="adaptic" />
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={`flex justify-center rounded-xl bg-green-50 p-3`}>
            <figure>
              <img className='w-[150px] h-[150px] object-contain' src={NAVILogo.src} alt="senavisa" />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
