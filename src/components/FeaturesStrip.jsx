import {
    FaWallet,
    FaShippingFast,
    FaHeadset,
    FaTag,
} from "react-icons/fa";

function FeaturesStrip() {
    return (
        <>
            {/* ===== FEATURES STRIP ===== */}
            <section className="w-full bg-white border-t border-gray-200 select-none">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 divide-y md:grid-cols-4 md:divide-y-0 md:divide-x">

                        <div className="group flex items-center gap-4 px-6 py-6 hover:bg-gray-50">
                            <FaWallet className="text-4xl text-indigo-600 group-hover:scale-105 transition" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Secure Payment</h4>
                                <p className="text-sm text-gray-500">All Cards Accepted</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 px-6 py-6 hover:bg-gray-50">
                            <FaShippingFast className="text-4xl text-orange-500 group-hover:scale-105 transition" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                                <p className="text-sm text-gray-500">On All Orders</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 px-6 py-6 hover:bg-gray-50">
                            <FaHeadset className="text-4xl text-indigo-600 group-hover:scale-105 transition" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Online Support</h4>
                                <p className="text-sm text-gray-500">Technical 24/7</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 px-6 py-6 hover:bg-gray-50">
                            <FaTag className="text-4xl text-indigo-600 group-hover:scale-105 transition" />
                            <div>
                                <h4 className="font-semibold text-gray-900">Big Saving</h4>
                                <p className="text-sm text-gray-500">Weekend Sales</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== IMAGE SECTION (ISKE NICHE) ===== */}
            <section className="w-full bg-white py-5">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                        {/* Image 1 */}
                        <div className="overflow-hidden rounded-2xl ">
                            <img
                                src="/images/banner1.png"
                                alt="BM Print Calendar"
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="overflow-hidden rounded-2xl ">
                            <img
                                src="/images/banner2.png"
                                alt="BM Print Calendar Design"
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default FeaturesStrip;
