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

    return (
        <header className="w-full border-b bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">
            {/* Top Bar */}
            <div className="mx-auto flex max-w-7xl items-center px-4 py-3">

                {/* Logo - LEFT */}
                {/* Logo + Brand Name */}
                <div className="flex items-center gap-2">
                    <img
                        src="/images/BM-PRINTS-LOGO.png"
                        alt="Logo"
                        className="h-13 w-auto"
                    />
                    <span className="mt-2 text-2xl font-bold text-white tracking-wide font-ubuntu">

                    </span>






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
                    <FaRegCircleQuestion />
                    <FaRegUser />
                    <FaShoppingBag />
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
                    <div className="border-t bg-white px-4 py-4 md:hidden">
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <FaRegUser /> My Account
                            </li>
                            <li className="flex items-center gap-3">
                                <FaShoppingBag /> My Cart
                            </li>
                            <li className="flex items-center gap-3">
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
