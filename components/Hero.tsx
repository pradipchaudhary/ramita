export default function Hero() {
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
            </div>
        </section>
    );
}
