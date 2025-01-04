"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo2 } from "./Logo";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-black shadow-lg" : "bg-transparent"
            }`}
        >
            {/* Container for centering content */}
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Logo2 />
                </div>

                {/* Menu */}
                <nav>
                    <ul className="flex space-x-8 text-white text-lg">
                        <li>
                            <Link href="/" passHref>
                                <span className="hover:text-pink-500 cursor-pointer transition-colors">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                <span className="hover:text-pink-500 cursor-pointer transition-colors">
                                    Services
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref>
                                <span className="hover:text-pink-500 cursor-pointer transition-colors">
                                    About
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref>
                                <span className="hover:text-pink-500 cursor-pointer transition-colors">
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
