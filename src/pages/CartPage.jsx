import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
    const {
        cart,
        removeFromCart,
        clearCart,
        updatePackQuantity,
    } = useCart();

    const navigate = useNavigate();

    // ✅ TOTAL = price of 1 pack × number of packs
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // 🟡 EMPTY CART
    if (cart.length === 0) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-24 text-center">
                <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
                <p className="mt-2 text-gray-500">
                    Add products to see them here
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white hover:bg-black"
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-8 text-3xl font-semibold">Shopping Cart</h1>

            <div className="grid gap-8 md:grid-cols-3">
                {/* ================= CART ITEMS ================= */}
                <div className="space-y-4 md:col-span-2">
                    {cart.map((item) => (
                        <div
                            key={item.variantId}
                            className="flex gap-4 rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
                        >
                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-24 w-24 rounded-xl object-cover"
                            />

                            {/* INFO */}
                            <div className="flex flex-1 flex-col justify-center">
                                <h3 className="font-semibold text-gray-900">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {item.variantTitle}
                                </p>

                                {/* PACK INFO */}
                                <p className="mt-1 text-xs text-gray-500">
                                    Pack size: {item.packSize} cards
                                </p>

                                {/* PACK CONTROLS (ONLY PLACE TO CHANGE PACKS) */}
                                <div className="mt-3 flex items-center gap-3">
                                    <span className="text-xs text-gray-500">
                                        Packs
                                    </span>

                                    <div className="flex items-center rounded-full border">
                                        <button
                                            onClick={() =>
                                                updatePackQuantity(
                                                    item.variantId,
                                                    item.quantity - 1
                                                )
                                            }
                                            disabled={item.quantity <= 1}
                                            className="px-3 py-1 text-sm font-semibold disabled:opacity-40"
                                        >
                                            −
                                        </button>

                                        <span className="min-w-[28px] text-center text-sm font-medium">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                updatePackQuantity(
                                                    item.variantId,
                                                    item.quantity + 1
                                                )
                                            }
                                            className="px-3 py-1 text-sm font-semibold"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* PRICE */}
                            <div className="flex flex-col items-end justify-between">
                                <p className="text-lg font-semibold">
                                    ₹{item.price * item.quantity}
                                </p>

                                <button
                                    onClick={() =>
                                        removeFromCart(item.variantId)
                                    }
                                    className="text-xs text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= SUMMARY ================= */}
                <div className="h-fit rounded-2xl border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold">
                        Order Summary
                    </h2>

                    <div className="space-y-3 text-sm text-gray-600">
                        {cart.map((item) => (
                            <div
                                key={item.variantId}
                                className="flex justify-between"
                            >
                                <span>
                                    {item.title}
                                    <br />
                                    <span className="text-xs text-gray-400">
                                        {item.quantity} pack × {item.packSize} cards
                                    </span>
                                </span>
                                <span>
                                    ₹{item.price * item.quantity}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="my-4 h-px bg-gray-200" />

                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                    <p className="mt-1 text-xs text-gray-400">
                        Price shown is per pack
                    </p>

                    <button
                        onClick={() => navigate("/checkout")}
                        className="mt-6 w-full rounded-full bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-black"
                    >
                        Proceed to Checkout
                    </button>

                    <button
                        onClick={clearCart}
                        className="mt-3 w-full rounded-full border py-3 text-sm hover:bg-gray-100"
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
