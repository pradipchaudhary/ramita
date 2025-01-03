// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <header className="fixed left-0 right-0 z-50 bg-black bg-opacity-50 py-4">
            {/* Container for centering content */}
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image
                        src="/white-logo.png" // Your logo image in the public folder
                        alt="Ramita Beautypalor"
                        width={200}
                        height={70}
                    />
                </div>

                {/* Menu */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" passHref>
                                <span className="hover:text-gray-300 cursor-pointer">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                <span className="hover:text-gray-300 cursor-pointer">
                                    Services
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref>
                                <span className="hover:text-gray-300 cursor-pointer">
                                    About
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref>
                                <span className="hover:text-gray-300 cursor-pointer">
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
