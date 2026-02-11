// import { useNavigate, useLocation } from "react-router-dom";

// function CategoryBar() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const categories = [
//         // { label: "View All", path: "/products" },
//         { label: "Visiting Cards", path: "/business-cards" },

//         { label: "Stationery, Letterheads & Notebooks", path: "/stationery" },
//         // { label: "Stamps and Ink", path: "/category/stamps" },
//         // { label: "Signs, Posters & Marketing Materials", path: "/category/signs-posters" },
//         { label: "Labels, Stickers & Packaging", path: "/category/labels-packaging" },
//         { label: "Clothing, Caps & Bags", path: "/category/clothing" },
//         { label: "Mugs, Albums & Gifts", path: "/category/gifts" },
//         // { label: "Bulk Orders", path: "/bulk-orders" },
//         // { label: "Drinkware", path: "/category/drinkware" },
//         // { label: "Custom Polo T-shirts", path: "/category/polo-tshirts" },
//         // { label: "Custom T-Shirts", path: "/category/tshirts" },
//     ];


//     return (
//         <section className="w-full border-b bg-white">
//             <div className="mx-auto max-w-7xl px-4">
//                 <div className="flex flex-wrap gap-x-4 gap-y-2 py-3 text-xs sm:text-sm">

//                     {categories.map((item, index) => (
//                         <button
//                             key={index}
//                             onClick={() => navigate(item.path)}
//                             className={`relative font-medium transition
//                             ${location.pathname === item.path
//                                     ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black"
//                                     : "text-gray-700 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
//                                 }`}

//                         >
//                             {item.label}
//                         </button>


//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CategoryBar;




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
