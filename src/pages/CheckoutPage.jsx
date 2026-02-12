import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    // ✅ Total = price per pack × number of packs
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const placeOrder = () => {
        if (
            !form.name ||
            !form.phone ||
            !form.address ||
            !form.city ||
            !form.state ||
            !form.pincode
        ) {
            alert("Please fill all required fields");
            return;
        }

        // 🔹 Final order object (for API / backend)
        const orderData = {
            customer: form,
            items: cart,
            total,
        };

        console.log("FINAL ORDER:", orderData);

        clearCart();
        alert("Order placed successfully 🎉");
        navigate("/");
    };

    // 🔴 Safety: cart empty
    if (cart.length === 0) {
        navigate("/");
        return null;
    }

    return (
        <div className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-8 text-3xl font-semibold">Checkout</h1>

            <div className="grid gap-8 md:grid-cols-3">
                {/* ================= FORM ================= */}
                <div className="md:col-span-2 space-y-6">
                    {/* CUSTOMER DETAILS */}
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-semibold">
                            Customer Details
                        </h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            <input
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                                className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                            />

                            <input
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                            />

                            <input
                                name="email"
                                placeholder="Email (optional)"
                                value={form.email}
                                onChange={handleChange}
                                className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900 md:col-span-2"
                            />
                        </div>
                    </div>

                    {/* DELIVERY ADDRESS */}
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-semibold">
                            Delivery Address
                        </h2>

                        <div className="space-y-4">
                            <textarea
                                name="address"
                                placeholder="Full Address"
                                value={form.address}
                                onChange={handleChange}
                                className="h-24 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                            />

                            <div className="grid gap-4 md:grid-cols-3">
                                <input
                                    name="city"
                                    placeholder="City"
                                    value={form.city}
                                    onChange={handleChange}
                                    className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                                />

                                <input
                                    name="state"
                                    placeholder="State"
                                    value={form.state}
                                    onChange={handleChange}
                                    className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                                />

                                <input
                                    name="pincode"
                                    placeholder="Pincode"
                                    value={form.pincode}
                                    onChange={handleChange}
                                    className="rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>
                        </div>
                    </div>
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
                        onClick={placeOrder}
                        className="mt-6 w-full rounded-full bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-black"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
