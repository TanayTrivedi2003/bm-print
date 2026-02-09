import { useNavigate, useLocation } from "react-router-dom";

function CategoryBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const categories = [
        // { label: "View All", path: "/products" },
        { label: "Visiting Cards", path: "/pages/visiting-cards" },
        { label: "Stationery, Letterheads & Notebooks", path: "/category/stationery" },
        { label: "Stamps and Ink", path: "/category/stamps" },
        { label: "Signs, Posters & Marketing Materials", path: "/category/signs-posters" },
        { label: "Labels, Stickers & Packaging", path: "/category/labels-packaging" },
        { label: "Clothing, Caps & Bags", path: "/category/clothing" },
        { label: "Mugs, Albums & Gifts", path: "/category/gifts" },
        { label: "Bulk Orders", path: "/bulk-orders" },
        { label: "Drinkware", path: "/category/drinkware" },
        { label: "Custom Polo T-shirts", path: "/category/polo-tshirts" },
        { label: "Custom T-Shirts", path: "/category/tshirts" },
    ];


    return (
        <section className="w-full border-b bg-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex gap-6 overflow-x-auto whitespace-nowrap py-3 text-sm scrollbar-hide">
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`relative font-medium transition
        ${location.pathname === item.path
                                    ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black"
                                    : "text-gray-800 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                                }`}
                        >
                            {item.label}
                        </button>

                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryBar;
