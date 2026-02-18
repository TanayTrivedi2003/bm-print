import ProductCard from "../components/ProductCard";
import {
    shapeCards,
    paperTextures,
    creativeUseCases
} from "../data/businessCardsData";

function BusinessCards() {

    const handleAddToCart = (product) => {
        console.log("Added to cart:", product);
    };

    return (
        <div className="w-full bg-white">

            {/* HERO */}
            <section className="w-full bg-white">
                <div className="mx-auto max-w-7xl px-4 py-8">
                    <img
                        src="/images/cards/CardBanner.jpeg"
                        alt="BM Print Business Cards"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </section>

            {/* SHAPE CARDS */}
            <section className="mx-auto max-w-7xl px-4 py-12">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Shop by shapes
                </h2>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {shapeCards.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            onAddToCart={() => handleAddToCart(item)}
                        />
                    ))}
                </div>
            </section>

            {/* PAPER TEXTURES */}
            <section className="mx-auto max-w-7xl px-4 py-12 border-t">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Shop by papers & textures
                </h2>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {paperTextures.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            onAddToCart={() => handleAddToCart(item)}
                        />
                    ))}
                </div>
            </section>

            {/* CREATIVE USE CASES */}
            <section className="mx-auto max-w-7xl px-4 py-12 border-t">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">
                    Creative ways to use your cards
                </h2>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {creativeUseCases.map((item, i) => (
                        <div
                            key={i}
                            className="rounded-2xl bg-white p-3 shadow-sm"
                        >
                            <img src={item.image} alt={item.name} />
                            <p className="mt-3 text-center text-sm font-semibold">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default BusinessCards;
