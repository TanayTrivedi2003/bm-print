import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ item, onClick }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const variant = item.variants?.[0];

    const packSize = variant?.minQuantity || 100;

    return (
        <div className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition">
            {/* IMAGE */}
            <div
                onClick={onClick}
                className="h-44 w-full bg-gray-100 cursor-pointer overflow-hidden"
            >
                <img
                    src={item.images?.[0]?.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                />
            </div>

            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                    {item.title} (Pack of {packSize})
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                    Pack Size: {packSize} Cards
                </p>

                <div className="mt-2 flex items-center gap-2">
                    {variant?.compareAtPrice && (
                        <span className="text-xs line-through text-gray-400">
                            ₹{variant.compareAtPrice}
                        </span>
                    )}
                    <span className="text-sm font-semibold">
                        ₹{variant?.price}{" "}
                        <span className="text-xs text-gray-500">
                            (per pack)
                        </span>
                    </span>
                </div>

                <div className="mt-4 flex gap-2">
                    <button
                        disabled={!variant}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (!variant) return;
                            addToCart(item, variant);
                        }}
                        className={`flex-1 rounded-full py-2 text-xs font-semibold text-white
                        ${variant
                                ? "bg-gray-900 hover:bg-black"
                                : "bg-gray-300 cursor-not-allowed"
                            }`}
                    >
                        Add to Cart
                    </button>

                    <button
                        disabled={!variant}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (!variant) return;
                            addToCart(item, variant);
                            navigate("/cart");
                        }}
                        className="flex-1 rounded-full border py-2 text-xs font-semibold hover:bg-gray-100"
                    >
                        Buy Now
                    </button>
                </div>

                <p className="mt-2 text-[11px] text-gray-400">
                    Price shown is for {packSize} visiting cards
                </p>
            </div>
        </div>
    );
}

export default ProductCard;