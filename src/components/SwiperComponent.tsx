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
import { useEffect, useState } from 'react';

const clientsData: CollectionEntry<'clients'>[] = await getCollection('clients');


export default function SwiperComponent() {
  
  useEffect(() => {
    const handleResize = () => {
        const screenWidth = window.innerWidth;

       setDynamicWidth(screenWidth * 0.8)
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    // Initial adjustment

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

const [dynamicWidth, setDynamicWidth] = useState<number>(0);



  return (
    <>
      <Swiper
        //  width={900} //todo: remove and fix infinite width problem
        slidesPerView={Math.ceil(dynamicWidth/250)}
        spaceBetween={50}
        freeMode={true}
        loop={true}
        width={dynamicWidth}
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
