import Image from "next/image";
import React from "react";

const HeroRight = () => {
    return (
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
    );
};

export default HeroRight;
