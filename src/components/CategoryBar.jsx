



import { useNavigate, useLocation } from "react-router-dom";

function CategoryBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const categories = [
        { label: "Home", path: "/" },
        { label: "Visiting Cards", path: "/business-cards" },
        { label: "Stationery & Letterheads", path: "/stationery" },
        { label: "Packaging & Labels", path: "/packaging" },
        { label: "Clothing & Apparel", path: "/dress" },
        { label: "Gifts & Merchandise", path: "/gifts" },
    ];



    return (
        <section className=" top-16 z-40 w-full border-b bg-white">
            <div className="mx-auto max-w-7xl px-4">

                {/* Mobile: horizontal scroll | Desktop: inline */}
                <div className="flex gap-6 overflow-x-auto py-3 text-sm scrollbar-hide">

                    {categories.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className={`relative whitespace-nowrap font-medium transition-colors duration-300
                ${isActive ? "text-black" : "text-gray-600 hover:text-black"}`}
                            >
                                {item.label}

                                {/* underline */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                                />
                            </button>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}

export default CategoryBar;
