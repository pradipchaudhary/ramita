import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";

const Footer = () => {
    const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/",
            icon: "/facebook.svg",
        },
        {
            name: "Tiktok",
            url: "https://www.tiktok.com/",
            icon: "/tiktok.svg",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/",
            icon: "/instagram.svg",
        },
    ];
    return (
        <footer
            id="colophon"
            className="site-footer bg-[#1a1a1a] text-gray-100 "
            itemType="https://schema.org/WPFooter"
            itemScope
        >
            <div className="container mx-auto px-4 py-[95px]">
                <div className="flex flex-wrap gap-8">
                    {/* Section 1: Logo */}
                    <div className="site-footer-primary-section-1 flex-1">
                        <div className="mb-4">
                            <Logo />
                        </div>

                        <p className="mt-2 pr-8 w-[86%]">
                            Ramita Beauty Parlor is known for expert beauty
                            services and personalized makeovers. Trusted for
                            enhancing natural beauty and creating unforgettable
                            experiences!
                        </p>
                        <div className="mt-10 ">
                            <h2 className="text-[30px]">
                                Subscribe For Offers
                            </h2>
                            <div className="flex w-full mt-10 pr-28">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 text-gray-600 py-3 px-4 rounded-md rounded-r-none focus:outline-none "
                                />
                                <button className="bg-pink-500 hover:bg-pink-600 text-white text-lg uppercase py-3 px-6 rounded-lg rounded-l-none shadow-lg transition duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-wrap gap-8 justify-between">
                        {/* Section 2: Quick Links */}
                        <div className="">
                            <div className=" mb-[28px]">
                                <h2 className="text-[30px] mb-[28px]">
                                    Quick Links
                                </h2>
                                <ul className="space-y-2 pl-2">
                                    <li>
                                        <a
                                            href="#services"
                                            className="hover:text-pink-500"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#portfolio"
                                            className="hover:text-pink-500"
                                        >
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            className="hover:text-pink-500"
                                        >
                                            About Me
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            className="hover:text-pink-500"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-[30px] mb-[28px]">
                                    Follow me{" "}
                                </h2>
                                <ul className="flex gap-4">
                                    {socialLinks.map((link, index) => (
                                        <li
                                            key={index}
                                            className="bg-pink-400 h-30 w-30 p-2 rounded-sm cursor-pointer hover:bg-pink-500"
                                        >
                                            <Link href={link.url}>
                                                <Image
                                                    src={link.icon}
                                                    alt={link.name}
                                                    width={20}
                                                    height={20}
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Section 3: Contact Info */}
                        <div className="">
                            <div className="email mb-[47px]">
                                <h2 className="text-[30px] mb-[28px]">
                                    Say Hi!
                                </h2>
                                <p className="">ramita@gmail.com</p>
                                <p>info@ramitabeauty.com</p>
                            </div>
                            <div className="call mb-[47px]">
                                <h2 className="text-[30px] mb-[28px]">
                                    Call Us
                                </h2>
                                <p className="">
                                    <span>Phone: </span>(+977) 9824 367 788
                                </p>
                            </div>

                            <div className="call mb-[47px]">
                                <h2 className="text-[30px] mb-[28px]">
                                    Find Us
                                </h2>
                                <p className="">
                                    Gaighat, Motigada-3, Udayapur, Nepal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1a1a1a] py-[95px] border border-t border-[#ffffff14]">
                <div className="container mx-auto md:flex md:items-center md:justify-between">
                    <p className="">
                        © 2025 Ramita Beauty Parlor. All rights reserved.
                    </p>
                    <p className="">
                        Developed by{" "}
                        <a
                            href="https://pradipchaudhary.com.np/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 font-semibold underline"
                        >
                            Pradip Chaudhary
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
