import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <img
                            src="/images/BM-PRINTS-LOGO.png"
                            alt="BM Print Logo"
                            className="h-15 w-auto"
                        />

                        <p className="mt-4 text-sm leading-relaxed">
                            Premium printing solutions for businesses and individuals.
                            From visiting cards to custom packaging — we print your brand
                            with perfection.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-4 flex gap-3">
                            <a className="footer-icon"><FaFacebookF /></a>
                            <a className="footer-icon"><FaInstagram /></a>
                            <a className="footer-icon"><FaLinkedinIn /></a>
                            <a className="footer-icon"><FaTwitter /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-list">
                            <li>Home</li>
                            <li>Products</li>
                            <li>Packaging</li>
                            <li>Bulk Orders</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="footer-title">Popular Products</h4>
                        <ul className="footer-list">
                            <li>Visiting Cards</li>
                            <li>Custom T-Shirts</li>
                            <li>Letterheads</li>
                            <li>Packaging Boxes</li>
                            <li>Stamps & Ink</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-blue-500" />
                                +91 8081186611
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                www.bmprints.com
                            </li>
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                                Kanpur, Uttar Pradesh, India
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-700"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                    <p>
                        © {new Date().getFullYear()} <span className="text-white">BM Print</span>. All rights reserved.
                    </p>
                    {/* <p className="text-gray-400 text-sm">
                        Designed by{" "}
                        <a
                            href="https://brandmatedigital.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition"
                        >
                            Brandmate Digital
                        </a>{" "}
                        & Developed by{" "}
                        <a
                            href="https://www.verelios.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition"
                        >
                            Verelios Labs
                        </a>
                    </p> */}

                </div>
            </div>
        </footer>
    );
}

export default Footer;
