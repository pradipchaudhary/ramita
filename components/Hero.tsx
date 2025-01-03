import Image from "next/image";

export default function Hero() {
    const images = [
        { src: "/image1.jpg", alt: "Hair Styling" },
        { src: "/image2.jpg", alt: "Makeup" },
        { src: "/image3.jpg", alt: "Skincare" },
    ];
    return (
        <section
            id="hero"
            aria-label="Welcome to Ramita Beauty Parlor"
            className="bg-bannerImg bg-cover bg-center w-full h-screen flex items-center relative"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between px-4">
                {/* Left Side Content */}
                <div className="text-white md:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Ramita Beauty Parlor
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                        Discover your beauty with our premium services. Book
                        your appointment today!
                    </p>
                    <div className="mt-10">
                        <a
                            href="#services"
                            className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                        >
                            Explore Services
                        </a>
                        <a
                            href="#contact"
                            className="ml-4 inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Right Side Images - Swapped UI with Improved Layout */}
                <div className="md:w-1/2 flex items-center justify-center space-y-6 mt-8 md:mt-0">
                    <div className="relative w-full ">
                        {/* Slider Wrapper */}
                        <div className="flex space-x-2 items-center justify-center transform transition-transform duration-700 ease-in-out">
                            {/* 3D Slider Item 1 */}
                            <div
                                className={`flex-shrink-0 w-[100px] h-[160px] relative  rotate-[-10deg] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-pink-500 cursor-pointer`}
                            >
                                <Image
                                    className="w-full h-full object-cover "
                                    src="/image1.jpg"
                                    alt="Image 1"
                                    width={100}
                                    height={160}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">
                                        Hair Styling
                                    </p>
                                </div>
                            </div>

                            {/* 3D Slider Item 2 */}
                            <div
                                className={`flex-shrink-0 w-[100px] h-[160px] relative  rotate-[-10deg] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-pink-500 cursor-pointer`}
                            >
                                <Image
                                    className="w-full h-full object-cover "
                                    src="/image2.jpg"
                                    alt="Image 2"
                                    width={100}
                                    height={160}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">
                                        Makeup
                                    </p>
                                </div>
                            </div>

                            {/* 3D Slider Item 3 */}
                            <div
                                className={`flex-shrink-0 w-[100px] h-[160px] relative  rotate-[-10deg] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-pink-500 cursor-pointer`}
                            >
                                <Image
                                    className="w-full h-full object-cover  "
                                    src="/image3.jpg"
                                    alt="Image 3"
                                    width={100}
                                    height={160}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">
                                        Skincare
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
