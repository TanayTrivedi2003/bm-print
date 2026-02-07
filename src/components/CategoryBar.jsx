function CategoryBar() {
    const categories = [
        "View All",
        "Visiting Cards",
        "Stationery, Letterheads & Notebooks",
        "Stamps and Ink",
        "Signs, Posters & Marketing Materials",
        "Labels, Stickers & Packaging",
        "Clothing, Caps & Bags",
        "Mugs, Albums & Gifts",
        "Bulk Orders",
        "Drinkware",
        "Custom Polo T-shirts",
        "Custom T-Shirts",
    ];

    return (
        <section className="w-full border-b bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex gap-6 overflow-x-auto whitespace-nowrap py-3 text-sm scrollbar-hide">
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            className="relative font-medium text-gray-800 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryBar;
