// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import NAVILogo from '../assets/images/NAVI-Logo.svg.png'


import { type CollectionEntry, getCollection, getEntry } from 'astro:content';


// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

const projectsData: CollectionEntry<"projects">[] = await getCollection("projects");


export default function Projects() {

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
                slidesPerView={Math.floor(dynamicWidth / 250)}
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
                            <img className="absolute top-0 left-0 h-52 w-full object-fill object-center blur-lg z-0" src={project.data.image} alt={project.data.title} />
                            <img className="relative h-48 w-full object-contain rounded-md object-center z-10" src={project.data.image} alt={project.data.title} />
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

