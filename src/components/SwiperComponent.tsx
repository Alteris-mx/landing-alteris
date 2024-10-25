// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-cards';

import '../assets/styles/main.css'


import NAVILogo from '../assets/images/navi_logo.png'
import adaptic from '../assets/images/adaptic.png'

// import required modules
import {Autoplay, EffectCards } from 'swiper/modules';


//import { type CollectionEntry, getCollection } from 'astro:content';
//const clientsData: CollectionEntry<'clients'>[] = await getCollection('clients');


export default function SwiperComponent() {

  return (
    <>
      <Swiper
        effect={'cards'}
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
