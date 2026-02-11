import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import HeroBanner from "./HeroBanner";
import { homeCategories } from "../data/homeData.js";

function ExploreCategories() {
    return (
        <>
            <HeroBanner />

            <section className="relative z-20 w-full bg-white py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-6 text-2xl font-semibold">
                        Explore all categories
                    </h2>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={24}
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="bm-swiper cursor-grab active:cursor-grabbing"
                    >
                        {homeCategories.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link
                                    to={item.path}
                                    className="group flex flex-col items-center text-center"
                                >
                                    <div className="mb-4 flex h-44 w-44 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-32 object-contain pointer-events-none select-none"
                                            draggable="false"
                                        />
                                    </div>

                                    <p className="text-sm font-medium text-gray-900 group-hover:text-black">
                                        {item.title}
                                    </p>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default ExploreCategories;
