import { useState } from "react";
import {
    shapeCards,
    paperTextures,
    creativeUseCases,
} from "../data/businessCardsData";
import ProductCard from "../components/ProductCard";

function BusinessCards() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product, variant) => {
        setCart((prev) => [
            ...prev,
            {
                productId: product.id,
                variantId: variant.id,
                quantity: variant.minQuantity || 1,
            },
        ]);

        console.log("Cart:", cart);
    };

    return (
        <div className="w-full bg-white">

            {/* ================= HERO / BANNER ================= */}
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

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {shapeCards.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            onAddToCart={handleAddToCart}
                            onClick={() => { }} // later → product detail page
                        />
                    ))}
                </div>
            </section>

            {/* ================= SHOP BY PAPERS & TEXTURES ================= */}
            <section className="mx-auto max-w-7xl px-4 py-12 border-t">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Shop by papers & textures
                </h2>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {paperTextures.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            onAddToCart={handleAddToCart}
                            onClick={() => { }}
                        />
                    ))}
                </div>
            </section>




            {/* ================= CREATIVE USE CASES ================= */}
            <section className="mx-auto max-w-7xl px-4 py-12 border-t">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Creative ways to use your cards
                </h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {creativeUseCases.map((item, i) => (
                        <div
                            key={i}
                            className="group cursor-pointer rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="overflow-hidden rounded-xl bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-40 w-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-3 text-center text-sm font-semibold text-gray-900">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </div >
    );
}

export default BusinessCards;
