
import { type CollectionEntry, getCollection, getEntry } from "astro:content";
import { useEffect, useState} from "react";
import { FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const projectsData: CollectionEntry<"projects">[] =
    await getCollection("projects");

    

    

export default function Projects() {

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1200) {
                setDynamicWidth(900);
            } else if (screenWidth >= 992) {
                setDynamicWidth(700);
            } else if (screenWidth >= 640) {
                setDynamicWidth(700);
            } else if (screenWidth <= 640) {
                setDynamicWidth(300);
            }
             else {
                setDynamicWidth(300);
            }
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
                        width={600}
                        spaceBetween={50}
                        slidesPerView={3}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 7500,
                            disableOnInteraction: true,
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="mySwiper"
                    >
                        {projectsData.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className={`flex flex-col justify-center rounded-xl bg-green-50 min-h-[410px]`}>
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

