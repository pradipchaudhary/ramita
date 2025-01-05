"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
                scrolled
                    ? "bg-black/60 shadow-lg backdrop-blur-sm"
                    : "bg-transparent"
            }`}
        >
            {/* Container for centering content */}
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Logo />
                </div>
                {/* Mobile Menu */}
                <div className="mobile-menu md:hidden">
                    <button
                        className="text-gray-200 hover:text-gray-300 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {/* Desktop Menu */}
                <nav className="hidden md:block">
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
                {/* Mobile Menu */}

                {isOpen && (
                    <nav className="md:hidden absolute top-[96px] right-0 w-full bg-black/90 text-white p-4">
                        <ul className="flex justify-center items-center flex-col space-y-10 py-10">
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
                )}
            </div>
        </header>
    );
};

export default Header;
