function GiftsPage() {
    return (
        <section className="bg-white">
            {/* HERO / HEADER */}
            <div className="mx-auto max-w-7xl px-4 py-12 text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    Custom Gift Items
                </h1>

                <p className="mt-3 mx-auto max-w-2xl text-gray-600">
                    Thoughtfully designed custom gift items perfect for corporate gifting,
                    promotions, events, and special occasions.
                </p>
            </div>

            {/* GIFT CATEGORIES */}
            <div className="mx-auto max-w-7xl px-4 pb-20">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

                    {/* CORPORATE GIFTS */}
                    <div className="rounded-2xl border bg-gray-50 p-6 text-center">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
                            🎁
                        </div>
                        <h3 className="font-semibold text-gray-900">
                            Corporate Gifts
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Premium gifts for clients, partners, and employees.
                        </p>
                    </div>

                    {/* PROMOTIONAL ITEMS */}
                    <div className="rounded-2xl border bg-gray-50 p-6 text-center">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
                            🏷️
                        </div>
                        <h3 className="font-semibold text-gray-900">
                            Promotional Items
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Custom-branded items to boost your marketing reach.
                        </p>
                    </div>

                    {/* FESTIVE GIFTS */}
                    <div className="rounded-2xl border bg-gray-50 p-6 text-center">
                        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">
                            🎉
                        </div>
                        <h3 className="font-semibold text-gray-900">
                            Festive & Event Gifts
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Special gifting solutions for festivals and celebrations.
                        </p>
                    </div>
                </div>

                {/* COMING SOON */}
                <div className="mt-16 text-center">
                    <span className="inline-block rounded-full bg-gray-900 px-6 py-2 text-sm font-semibold text-white">
                        🚀 Coming Soon
                    </span>

                    <p className="mt-4 text-sm text-gray-500">
                        We’re curating a range of high-quality custom gift products with
                        branding and bulk order options.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default GiftsPage;
