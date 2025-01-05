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
                        <h2 className="text-[34px] mb-[1rem]">
                            Christina Koller
                        </h2>
                        <p className="mt-2 ">
                            You can also list down your achievements or some
                            well-known clients you’ve worked for. Such details
                            often attract customers and encourage them to give
                            you a try.
                        </p>
                    </div>

                    <div className="flex-1 flex gap-8">
                        {/* Section 2: Quick Links */}
                        <div className="flex-1">
                            <div className=" mb-[28px]">
                                <h2 className="text-[34px] mb-[28px]">
                                    Quick Links
                                </h2>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#services"
                                            className="hover:text-blue-500"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#portfolio"
                                            className="hover:text-blue-500"
                                        >
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            className="hover:text-blue-500"
                                        >
                                            About Me
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            className="hover:text-blue-500"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-[34px] mb-[28px]">
                                    Follow me{" "}
                                </h2>
                            </div>
                        </div>

                        {/* Section 3: Contact Info */}
                        <div className="flex-1">
                            <div className="email mb-[47px]">
                                <h2 className="text-[34px] mb-[28px]">
                                    Say Hi!
                                </h2>
                                <p className="">ramita@gmail.com</p>
                                <p>info@ramitabeauty.com</p>
                            </div>
                            <div className="call mb-[47px]">
                                <h2 className="text-[34px] mb-[28px]">
                                    Say Hi!
                                </h2>
                                <p className="">
                                    <span>Phone: </span>(+977) 9824 367 788
                                </p>
                            </div>

                            <div className="call mb-[47px]">
                                <h2 className="text-[34px] mb-[28px]">
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
                        © 2025 Christina Koller. All rights reserved.
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
