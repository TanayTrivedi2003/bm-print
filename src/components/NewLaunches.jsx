function NewLaunches() {
    const items = [
        {
            title: "Signature Popcorn Knit Polo",
            bg: "bg-yellow-200",
            image: "/images/launch/tshirt.png",
        },
        {
            title: "Acrylic Photo Cut Outs",
            bg: "bg-orange-200",
            image: "/images/launch/acrylic.png",
        },
        {
            title: "Premium Photo Frames",
            bg: "bg-cyan-200",
            image: "/images/launch/photoframe.jpg",
        },
        {
            title: "Buisness Cards",
            bg: "bg-pink-200",
            image: "/images/launch/Businesscards.png",
        },
        {
            title: "Custom Backpacks",
            bg: "bg-rose-200",
            image: "/images/launch/bag.png",
        },
        {
            title: "Find What’s New for Your Brand!",
            bg: "bg-indigo-200",
            cta: true,
        },
    ];

    return (
        <section className="w-full bg-white py-12">
            <div className="mx-auto max-w-7xl px-4">

                {/* Heading */}
                <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">
                    New Launches
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex h-[180px] items-center justify-between rounded-xl p-6 ${item.bg}`}
                        >
                            {/* Text */}
                            <h3 className="max-w-[60%] text-xl font-semibold text-gray-800">
                                {item.title}
                            </h3>

                            {/* Image */}
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full max-h-[140px] object-contain"
                                />
                            )}

                            {/* CTA */}
                            {item.cta && (
                                <button className="absolute bottom-6 left-6 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600">
                                    Explore Now
                                </button>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default NewLaunches;
