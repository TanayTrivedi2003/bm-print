import { useNavigate } from "react-router-dom";

import { useState } from "react";
import {
    FaBars,
    FaSearch,
    FaRegUser,
    FaShoppingBag,
} from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="w-full border-b bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">
            {/* Top Bar */}
            <div className="mx-auto flex max-w-7xl items-center px-4 py-3">

                {/* Logo - LEFT */}
                {/* Logo + Brand Name */}
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <img
                        src="/images/BM-PRINTS-LOGO.png"
                        alt="Logo"
                        className="h-13 w-auto"
                    />

                </div>



                {/* Desktop Search */}
                <div className="ml-auto hidden md:block relative w-[420px]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full rounded-full border px-4 py-2 pr-10 text-sm focus:outline-none"
                    />
                    <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                {/* Desktop Icons */}
                <div className="ml-6 hidden md:flex items-center gap-4 text-xl">
                    <FaRegCircleQuestion
                        className="cursor-pointer hover:text-gray-300"
                        onClick={() => navigate("/help")}
                    />
                    <FaRegUser
                        className="cursor-pointer hover:text-gray-300"
                        onClick={() => navigate("/login")}
                    />
                    <FaShoppingBag
                        className="cursor-pointer hover:text-gray-300"
                        onClick={() => navigate("/cart")}
                    />
                </div>


                {/* Hamburger - RIGHT (Mobile only) */}
                <button
                    className="ml-auto text-2xl md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Search */}
            <div className="px-4 pb-3 md:hidden">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full rounded-full border px-4 py-2 pr-10 text-sm focus:outline-none"
                    />
                    <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            {/* Mobile Drawer */}
            {
                open && (
                    <div className="border-t px-4 py-4 md:hidden">
                        <ul className="space-y-4 text-sm">
                            <li
                                onClick={() => navigate("/login")}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <FaRegUser /> My Account
                            </li>
                            <li
                                onClick={() => navigate("/cart")}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <FaShoppingBag /> My Cart
                            </li>
                            <li
                                onClick={() => navigate("/help")}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <FaRegCircleQuestion /> Help
                            </li>
                        </ul>

                    </div>
                )
            }
        </header >
    );
}

export default Navbar;
