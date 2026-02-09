import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

function BusinessCardsExplore() {
    const navigate = useNavigate();

    const items = [
        { title: "Classic Business Cards", image: "/images/cards/shape-1.png" },
        { title: "Premium Business Cards", image: "/images/cards/shape-2.png" },
        { title: "Matte Finish Cards", image: "/images/cards/shape-3.png" },
        { title: "Glossy Business Cards", image: "/images/cards/shape-4.png" },
        { title: "Rounded Corner Cards", image: "/images/cards/shape-5.png" },
    ];

    return (
        <section className="w-full bg-white py-12">
            <div className="mx-auto max-w-7xl px-4">

                <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                    Explore Business Cards
                </h2>

                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={24}
                    slidesPerView={2}
                    className="relative z-10"
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >

                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center text-center cursor-pointer">
                                <div className="mb-4 flex h-44 w-44 items-center justify-center rounded-full bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-32 object-contain"
                                    />
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    {item.title}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Button always visible */}
                <div className="relative z-20 mt-8 text-center">
                    <button
                        onClick={() => navigate("/business-cards")}
                        className="rounded-full border border-gray-900 px-8 py-2 text-sm font-semibold text-gray-900 transition 
               hover:bg-gray-900 hover:text-white 
               focus:outline-none focus:ring-0"
                    >
                        View More Business Cards →
                    </button>

                </div>


            </div>
        </section>
    );
}

export default BusinessCardsExplore;
