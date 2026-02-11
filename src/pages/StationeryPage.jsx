import { useState } from "react";
import { letterheads } from "../data/stationeryData";
import ProductCard from "../components/ProductCard.jsx";

function StationeryPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    // ADD TO CART (dummy – Shopify later)
    const handleAddToCart = (product, variant) => {
        // MOQ validation
        if (variant.minQuantity > 1) {
            // abhi quantity selector nahi hai, isliye allow
        }

        setCart(prev => [
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
        <>
            {/* ================= FULL WIDTH BANNER ================= */}
            <section className="w-full px-4 sm:px-6 lg:px-8 mt-5 mb-5">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl">
                    <img
                        src="/images/letterhead/letter-head.png"
                        alt="Stationery Banner"
                        className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[520px] object-cover"
                    />
                </div>
            </section>

            {/* ================= PAGE CONTENT ================= */}
            <section className="mx-auto max-w-7xl px-4 py-10">

                {/* LETTERHEADS */}
                <section id="letterheads" className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Best Sellers
                    </h2>

                    <p className="mt-2 max-w-2xl text-gray-600">
                        Our most popular and trusted printing products, loved by businesses for
                        their premium quality and professional finish.
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                        {letterheads.map((item) => (
                            <ProductCard
                                key={item.id}
                                item={item}
                                onClick={() => setSelectedProduct(item)}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </section>

            </section>
        </>
    );
}

export default StationeryPage;
