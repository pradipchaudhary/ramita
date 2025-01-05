import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            aria-label="About Ramita Beauty Parlor"
            className="bg-white py-16 md:py-20"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Image on the left */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image
                        src="/about.jpg" // Replace with your image URL
                        alt="Ramita Beauty Parlor"
                        className="w-full h-auto object-cover rounded-lg px-4"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Content on the right */}
                <div className="w-full md:w-1/2 md:pl-8 px-2">
                    <p className="text-lg md:text-xl text-pink-500 mb-4">
                        Welcome to
                    </p>
                    <h2 className="text-3xl text-gray-800 md:text-4xl font-semibold mb-6">
                        Ramita Beauty Parlor
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 pr-3">
                        Ramita Beauty Parlor is a premier beauty salon dedicated
                        to providing exceptional beauty services to our clients.
                        With a team of skilled professionals, we offer a wide
                        range of beauty treatments and products to enhance your
                        natural beauty.
                    </p>

                    <div className="mt-10">
                        <a
                            href="#contact"
                            className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 "
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
