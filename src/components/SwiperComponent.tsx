// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import {type CollectionEntry, getCollection, getEntry} from 'astro:content';
import img from '../assets/images/black.png';


// import required modules
import { FreeMode, Pagination, Autoplay, EffectCoverflow, EffectCards} from 'swiper/modules';

const clientsData:CollectionEntry<'clients'>[] = await getCollection('clients');

export default function SwiperComponent() {
  return (
    <>
      <Swiper
          width={900} //todo: remove and fix infinite width problem
        slidesPerView={clientsData.length > 4 ? 4 : clientsData.length}
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
        loop={clientsData.length > 3}
        autoplay={
            {
                delay: 1000,
                disableOnInteraction: false
            }
        }
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
      >
          {
              clientsData.map((item, index) => (
                  <SwiperSlide key={`${index}`}>
                      <div className={`rounded-xl bg-green-50 shadow-lg p-3`}>
                          <figure>
                              <img src={`/public/${item.data.image}`} width={150} height={150} alt={item.id}/>
                          </figure>
                      </div>
                  </SwiperSlide>
              ))
          }
      </Swiper>
    </>
  );
}
