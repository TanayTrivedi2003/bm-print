import {
    FaWallet,
    FaShippingFast,
    FaHeadset,
    FaTag,
} from "react-icons/fa";

function FeaturesStrip() {
    return (
        <section className="w-full bg-white py-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 divide-y md:grid-cols-4 md:divide-y-0 md:divide-x">

                    {/* Secure Payment */}
                    <div className="group flex items-center gap-4 px-6 py-6 transition-all hover:bg-gray-50">
                        <FaWallet className="text-4xl text-indigo-600 transition-transform group-hover:scale-105" />
                        <div>
                            <h4 className="text-base font-semibold text-gray-900">
                                Secure Payment
                            </h4>
                            <p className="text-sm text-gray-500">
                                All Cards Accepted
                            </p>
                        </div>
                    </div>

                    {/* Free Shipping */}
                    <div className="group flex items-center gap-4 px-6 py-6 transition-all hover:bg-gray-50">
                        <FaShippingFast className="text-4xl text-orange-500 transition-transform group-hover:scale-105" />
                        <div>
                            <h4 className="text-base font-semibold text-gray-900">
                                Free Shipping
                            </h4>
                            <p className="text-sm text-gray-500">
                                On All Order
                            </p>
                        </div>
                    </div>

                    {/* Online Support */}
                    <div className="group flex items-center gap-4 px-6 py-6 transition-all hover:bg-gray-50">
                        <FaHeadset className="text-4xl text-indigo-600 transition-transform group-hover:scale-105" />
                        <div>
                            <h4 className="text-base font-semibold text-gray-900">
                                Online Support
                            </h4>
                            <p className="text-sm text-gray-500">
                                Technical 24/7
                            </p>
                        </div>
                    </div>

                    {/* Big Saving */}
                    <div className="group flex items-center gap-4 px-6 py-6 transition-all hover:bg-gray-50">
                        <FaTag className="text-4xl text-indigo-600 transition-transform group-hover:scale-105" />
                        <div>
                            <h4 className="text-base font-semibold text-gray-900">
                                Big Saving
                            </h4>
                            <p className="text-sm text-gray-500">
                                Weekend Sales
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeaturesStrip;
