import Logo from "./Logo";

const Footer = () => {
    return (
        <footer
            id="colophon"
            className="site-footer bg-[#1a1a1a] text-gray-100 "
            itemType="https://schema.org/WPFooter"
            itemScope
        >
            <div className="container mx-auto px-4 py-[95px]">
                <div className="flex gap-8">
                    {/* Section 1: Logo */}
                    <div className="site-footer-primary-section-1 flex-1">
                        <div className="mb-4">
                            <Logo />
                        </div>

                        <p className="mt-2 pr-8 w-[86%]">
                            You can also list down your achievements or some
                            well-known clients you’ve worked for. Such details
                            often attract customers and encourage them to give
                            you a try.
                        </p>
                        <div className="mt-10 ">
                            <h2 className="text-[30px]">
                                Subscribe For Offers
                            </h2>
                            <div className="flex w-full mt-10 pr-28">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 py-3 px-4 rounded-md"
                                />
                                <button className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex gap-8">
                        {/* Section 2: Quick Links */}
                        <div className="flex-1">
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
                            </div>
                        </div>

                        {/* Section 3: Contact Info */}
                        <div className="flex-1">
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
                                    Gaighat, Motigdachok-3, <br />
                                    Udayapur, Nepal .
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
