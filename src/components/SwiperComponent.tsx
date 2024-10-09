// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-cards';

import '../assets/styles/main.css'


import NAVILogo from '../assets/images/NAVI-Logo.svg.png'
import adaptic from '../assets/images/adaptic.png'


import { type CollectionEntry, getCollection, getEntry } from 'astro:content';


// import required modules
import {Autoplay, EffectCards } from 'swiper/modules';
import { useEffect, useState } from 'react';

const clientsData: CollectionEntry<'clients'>[] = await getCollection('clients');


export default function SwiperComponent() {

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setDynamicWidth(screenWidth * 0.5)
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
        effect={'cards'}
        width={320}
        height={240}
        loop={true}
        autoplay={true}
        modules={[EffectCards,Autoplay]}
        className="swiper-kek"
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
