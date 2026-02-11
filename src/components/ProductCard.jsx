function ProductCard({ item, onAddToCart, onClick }) {
    const variant = item.variants?.[0];

    return (
        <div
            onClick={onClick}
            className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* IMAGE */}
            <div className="h-44 w-full overflow-hidden bg-gray-100">
                <img
                    src={item.images?.[0]?.src}
                    alt={item.images?.[0]?.alt || item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="p-4">
                <p className="mt-1 text-xs text-gray-500">
                    {item.description}
                </p>

                {variant?.title && (
                    <p className="text-xs font-medium text-gray-700">
                        {variant.title}
                    </p>
                )}

                {variant?.minQuantity && (
                    <p className="text-xs text-gray-500">
                        Minimum order: {variant.minQuantity}
                    </p>
                )}


                {/* PRICE */}
                <div className="mt-2 flex items-center gap-2">
                    {variant?.compareAtPrice && (
                        <span className="text-xs text-gray-400 line-through">
                            ₹{variant.compareAtPrice}
                        </span>
                    )}
                    <span className="text-sm font-semibold text-gray-900">
                        ₹{variant?.price}
                    </span>
                </div>

                {/* ACTIONS */}
                <div className="mt-4 flex gap-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(item, variant);
                        }}
                        className="flex-1 rounded-full bg-gray-900 py-2 text-xs font-semibold text-white hover:bg-black"
                    >
                        Add to Cart
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(item, variant, { buyNow: true });
                        }}
                        className="flex-1 rounded-full border border-gray-300 py-2 text-xs font-semibold text-gray-900 hover:bg-gray-100"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
