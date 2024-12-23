// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { type CollectionEntry, getCollection } from 'astro:content';


// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

const projectsData: CollectionEntry<"projects">[] = await getCollection("projects");


export default function Projects() {

    return (
        <>
            <Swiper
            
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                spaceBetween={50}
                freeMode={true}
                loop={true}
                autoplay={
                    {
                        delay: 4000,
                        disableOnInteraction: true
                    }
                }
                modules={[FreeMode, Autoplay]}
                className=""
            >
                {projectsData.map((project, index) => (
                    <SwiperSlide className='swipper-projects' key={index}>
                        <div className="relative mx-auto mt-11 mb-11 w-full bg-white transform overflow-hidden rounded-lg shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                            <figure>
                            <img className="absolute top-0 left-0 h-52 w-full object-fill object-center blur-lg z-0" src={project.data.image} alt={project.data.img_alt} />
                            </figure>
                            <img className="relative h-48 w-full object-contain rounded-md object-center z-10" src={project.data.image} alt={project.data.img_alt} />
                            <div className="relative p-4 max-w-[400px] z-20">
                                <h2 className="mb-2 text-lg font-medium text-gray-900">{project.data.title}</h2>
                                <p className="mb-2 text-base text-gray-700">{project.data.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

