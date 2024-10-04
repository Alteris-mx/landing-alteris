
import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import { useEffect, useState} from "react";
import { FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const projectsData: CollectionEntry<"projects">[] =
    await getCollection("projects");

    
const minCardW = 410;
    

export default function Projects() {

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            /*if (screenWidth >= 1280) { //xl
                setDynamicWidth(1100);
            } else if (screenWidth >= 1024) { //lg
                setDynamicWidth(950);
            } else if (screenWidth >= 768) { //md
                setDynamicWidth(700);
            } else if (screenWidth >= 640) { //sm
                setDynamicWidth(300);
            }
             else {
                setDynamicWidth(300);
            }*/
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
        <section className="">
            {
                (
                    <Swiper
                        width={100}
                        spaceBetween={30}
                        slidesPerView={Math.floor(dynamicWidth/minCardW)}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 300,
                            disableOnInteraction: true,
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="mySwiper"
                    >
                        {projectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col justify-center rounded-xl bg-green-50 min-h-[${minCardW}px]`}>
                                    <figure>
                                        <img className='w-full h-full rounded-md pb-2' src={project.data.image} alt={project.data.title} />
                                    </figure>
                                    <div className="p-3">
                                        <h1 className="font-bold text-lg pb-2 min-h-[65px]">{project.data.title}</h1>
                                        <p className="text-gray-500 px-0.5">{project.data.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )
            }
        </section>
    )
}

