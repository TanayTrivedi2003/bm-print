import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function ExploreCategories() {
    const categories = [
        { title: "Visiting Cards", image: "/images/visiting-card.png" },
        { title: "Calendars, Notebooks and Diaries", image: "/images/notebook.png" },
        { title: "Custom Polo T-shirts", image: "/images/polo.png" },
        { title: "Custom Dress Shirts", image: "/images/shirt.png" },
        { title: "Custom T-shirts", image: "/images/shopping.png" },
        { title: "Labesl, sticker for Packaging", image: "/images/sticker.png" },
        { title: "Custom avatar", image: "/images/avatar.png" },
        { title: "Gifts Items", image: "/images/gifts.png" },
        { title: "High-Quality Custom Packaging Solutions", image: "/images/box.png" },
        { title: "Professional Identity Starts With a Letterhead", image: "/images/letter-head.jpg" },
    ];

    return (
        <>
            <section className="relative z-20 w-full bg-white py-10 border-2">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-6 text-2xl font-semibold">
                        Explore all categories
                    </h2>

                    {/* 👇 pointer-events control */}
                    <div className="relative bm-swiper-wrapper">
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            spaceBetween={24}
                            slidesPerView={2}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                            className="bm-swiper"
                        >
                            {categories.map((item, index) => (
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
                    </div>
                </div>
            </section>


            {/* GAP so arrows never overlap next section */}
            <div className="mt-5"></div>
        </>
    );
}

export default ExploreCategories;
