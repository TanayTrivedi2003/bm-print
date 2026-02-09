import { useState } from "react";

function BusinessCards() {
    const [selectedCard, setSelectedCard] = useState(null);


    const shapeCards = [
        {
            title: "Standard",
            description: "Clean & professional cards for everyday business use",
            oldPrice: 299,
            newPrice: 199,
            image: "/images/cards/shape-1.png",
        },
        {
            title: "Classic",
            description: "Timeless design with premium paper quality",
            oldPrice: 330,
            newPrice: 230,
            image: "/images/cards/shape-2.png",
        },
        {
            title: "Rounded Corner",
            description: "Smooth edges for a modern premium look",
            oldPrice: 350,
            newPrice: 250,
            image: "/images/cards/shape-4.png",
        },
        {
            title: "Square",
            description: "Bold square shape to stand out instantly",
            oldPrice: 350,
            newPrice: 250,
            image: "/images/cards/shape-3.png",
        },
        {
            title: "Leaf",
            description: "Creative leaf shape for unique branding",
            oldPrice: 350,
            newPrice: 250,
            image: "/images/cards/shape-5.png",
        },
        {
            title: "Oval",
            description: "Elegant oval cards for premium brands",
            oldPrice: 350,
            newPrice: 250,
            image: "/images/cards/shape-6.png",
        },
        {
            title: "Circle",
            description: "Elegant oval cards for premium brands",
            oldPrice: 350,
            newPrice: 250,
            image: "/images/cards/shape-7.png",
        },
    ];

    const paperTextures = [
        {
            title: "Glossy",
            description: "High-shine finish for vibrant colors and sharp text",
            oldPrice: 300,
            newPrice: 200,
            image: "/images/cards/paper1.webp",
        },
        {
            title: "Matte",
            description: "Smooth, glare-free finish for a premium feel",
            oldPrice: 300,
            newPrice: 200,
            image: "/images/cards/paper2.webp",
        },
        {
            title: "Non-Tearable",
            description: "Durable, waterproof cards that last longer",
            oldPrice: 470,
            newPrice: 370,
            image: "/images/cards/paper3.png",
        },
        {
            title: "Spot UV",
            description: "Gloss highlights on selected areas for luxury look",
            oldPrice: 690,
            newPrice: 590,
            image: "/images/cards/paper4.webp",
        },
        {
            title: "Raised Foil",
            description: "Metallic raised foil for elegant branding",
            oldPrice: 1100,
            newPrice: 900,
            image: "/images/cards/paper5.webp",
        },
        {
            title: "Premium Plus Glossy",
            description: "Extra thick premium glossy paper",
            oldPrice: 450,
            newPrice: 290,
            image: "/images/cards/paper6.webp",
        },
        {
            title: "Magnetic Visiting Cards",
            description: "Strong magnetic cards perfect for refrigerators and metal surfaces",
            oldPrice: 450,
            newPrice: 340,
            image: "/images/cards/paper7.webp",
        },
        {
            title: "Transparent Visiting Cards",
            description: "Modern transparent cards with a sleek, glass-like finish",
            oldPrice: 1200,
            newPrice: 1000,
            image: "/images/cards/paper8.webp",
        },
        {
            title: "Bulk Visiting Cards",
            description: "Cost-effective bulk printing for large teams and promotions",
            oldPrice: 1650,
            newPrice: 1500,
            image: "/images/cards/paper9.webp",
        },
        {
            title: "Velvet Touch Visiting Cards",
            description: "Soft-touch matte finish with a luxurious, velvety feel",
            oldPrice: 400,
            newPrice: 300,
            image: "/images/cards/paper10.webp",
        },
        {
            title: "Pearl Visiting Cards",
            description: "Shimmering pearl finish for an elegant and premium look",
            oldPrice: 750,
            newPrice: 530,
            image: "/images/cards/paper11.webp",
        },
        {
            title: "Kraft Visiting Cards",
            description: "Eco-friendly kraft paper cards with a natural, rustic style",
            oldPrice: 650,
            newPrice: 530,
            image: "/images/cards/paper12.webp",

        },
        {
            title: "Diamond Visiting Cards",
            description: "High-end textured cards designed to make a bold impression",
            oldPrice: 650,
            newPrice: 530,
            image: "/images/cards/paper13.webp",
        },
        {
            title: "Social Media Cards",
            description: "Eye-catching cards with social media handles and QR codes to grow your online presence",
            oldPrice: 650,
            newPrice: 550,
            image: "/images/cards/paper14.jpg",
        },


    ];

    const creativeUseCases = [
        {
            name: "Beauty & Spa",
            image: "/images/cards/paper16.jpg",
        },
        {
            name: "Clothing Store",
            image: "/images/cards/paper17.jpg",
        },
        {
            name: "Travel Agency",
            image: "/images/cards/paper18.jpg",
        },
        {
            name: "Food & Restaurant",
            image: "/images/cards/paper19.jpg",
        },

    ];




    return (
        <div className="w-full bg-white">

            {/* ================= HERO / BANNER IMAGE ONLY ================= */}
            <section className="w-full bg-white">
                <div className="mx-auto max-w-7xl px-4 py-8">
                    <img
                        src="/images/cards/CardBanner.jpeg"
                        alt="BM Print Business Cards"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </section>


            {/* ================= SHOP BY SHAPES ================= */}
            <section className="mx-auto max-w-7xl px-4 py-12">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Shop by shapes
                </h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                    {shapeCards.map((card, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedCard(card)}
                            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >


                            {/* IMAGE (FULL WIDTH) */}
                            <div className="h-44 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {card.title}
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                    {card.description}
                                </p>

                                {/* PRICE */}
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-xs text-gray-400 line-through">
                                        ₹{card.oldPrice}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-900">
                                        ₹{card.newPrice}
                                    </span>
                                </div>
                                <a
                                    href={`https://wa.me/918081186611?text=
Hi%20BM%20Print%0A
I%20am%20interested%20in%20${card.title}%0A
Price:%20₹${card.newPrice}%0A
Image:%20https://bmprint.in${card.image}
`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-500 py-2 text-xs font-semibold text-white hover:bg-green-600"
                                >
                                    WhatsApp Enquiry
                                </a>


                            </div>
                        </div>

                    ))}

                </div>
            </section>

            {/* ================= SHOP BY PAPERS & TEXTURES ================= */}
            <section className="mx-auto max-w-7xl px-4 py-12 border-t">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Shop by papers & textures
                </h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                    {paperTextures.map((card, i) => (
                        <div
                            key={i}
                            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* IMAGE (FULL WIDTH) */}
                            <div className="h-44 w-full overflow-hidden bg-gray-100">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-900">
                                    {card.title}
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                    {card.description}
                                </p>

                                {/* PRICE */}
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-xs text-gray-400 line-through">
                                        ₹{card.oldPrice}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-900">
                                        ₹{card.newPrice}
                                    </span>
                                </div>
                                <a
                                    href={`https://wa.me/918081186611?text=
Hi%20BM%20Print%0A
I%20am%20interested%20in%20${card.title}%0A
Price:%20₹${card.newPrice}%0A
Image:%20https://bmprint.in${card.image}
`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-500 py-2 text-xs font-semibold text-white hover:bg-green-600"
                                >
                                    WhatsApp Enquiry
                                </a>


                            </div>
                        </div>

                    ))}
                </div>
            </section>


            {/* ================= SPECIALTY BUSINESS CARDS ================= */}
            <section className="mx-auto max-w-7xl px-4 py-12 border-t">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Specialty business cards
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* QR Code Cards */}
                    <div className="flex items-center gap-6 rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md">
                        <img
                            src="/images/cards/paper15.webp"
                            alt="QR Business Cards"
                            className="h-28 w-28 object-cover rounded-lg"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                QR Code Business Cards
                            </h3>

                            <p className="mt-1 text-sm text-gray-600">
                                Instantly connect customers to your website, contact details, or social profiles
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-xs text-gray-400 line-through">
                                    ₹250
                                </span>
                                <span className="text-sm font-semibold text-gray-900">
                                    ₹200
                                </span>
                            </div>
                            <a
                                href="https://wa.me/918081186611?text=Hi%20BM%20Print,%20I%20am%20interested%20in%20QR%20Code%20Business%20Cards"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-500 py-2 text-xs font-semibold text-white hover:bg-green-600"
                            >
                                WhatsApp Enquiry
                            </a>



                        </div>
                    </div>

                    {/* NFC Cards */}
                    <div className="flex items-center gap-6 rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md">
                        <img
                            src="/images/cards/paper14.webp"
                            alt="NFC Business Cards"
                            className="h-28 w-28 object-cover rounded-lg"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                NFC Business Cards
                            </h3>

                            <p className="mt-1 text-sm text-gray-600">
                                Smart tap-to-share cards for modern networking and digital profiles
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <span className="text-xs text-gray-400 line-through">
                                    ₹870
                                </span>
                                <span className="text-sm font-semibold text-gray-900">
                                    ₹750

                                </span>
                                <span className="text-xs text-gray-400 ">
                                    1 unit
                                </span>
                            </div>

                            <a
                                href="https://wa.me/918081186611?text=Hi%20BM%20Print,%20I%20am%20interested%20in%20NFC%20Business%20Cards"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-500 py-2 text-xs font-semibold text-white hover:bg-green-600"
                            >
                                WhatsApp Enquiry
                            </a>


                        </div>
                    </div>

                </div>
            </section>


            {/* ================= CREATIVE USE CASES ================= */}
            <section className="mx-auto max-w-7xl px-4 py-12 border-t">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Creative ways to use your cards
                    </h2>
                    <span className="cursor-pointer text-sm font-semibold text-blue-600">
                        See more →
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {creativeUseCases.map((item, i) => (
                        <div
                            key={i}
                            className="group cursor-pointer rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="overflow-hidden rounded-xl bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <p className="mt-3 text-center text-sm font-semibold text-gray-900">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {selectedCard && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
                    onClick={() => setSelectedCard(null)}
                >
                    <div
                        className="relative max-w-lg w-full rounded-2xl bg-white p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedCard(null)}
                            className="absolute right-3 top-3 text-xl font-bold text-gray-600 hover:text-black"
                        >
                            ×
                        </button>

                        <img
                            src={selectedCard.image}
                            alt={selectedCard.title}
                            className="w-full rounded-xl object-cover"
                        />

                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            {selectedCard.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-600">
                            {selectedCard.description}
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                            <span className="text-sm text-gray-400 line-through">
                                ₹{selectedCard.oldPrice}
                            </span>
                            <span className="text-lg font-bold text-gray-900">
                                ₹{selectedCard.newPrice}
                            </span>
                        </div>

                        <a
                            href={`https://wa.me/91XXXXXXXXXX?text=Hi%20BM%20Print,%20I%20want%20to%20order%20${selectedCard.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 block rounded-full bg-green-500 py-3 text-center text-sm font-semibold text-white hover:bg-green-600"
                        >
                            Order on WhatsApp
                        </a>
                    </div>
                </div>
            )}

        </div>
    );
}

export default BusinessCards;
