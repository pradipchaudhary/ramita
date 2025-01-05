import Image from "next/image";
import React from "react";

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        image: string;
        link: string;
    };
}
const ServiceItem = ({ service }: ServiceCardProps) => {
    return (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl  rounded-lg hover:shadow-black/30">
            <div className="h-96 w-72">
                <Image
                    className="h-full w-full scale-200 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={service.image}
                    alt=""
                    width={500}
                    height={500}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                    {service.title}
                </h1>
                <p className="mb-3 mt-4 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {service.description}
                </p>
                <button className="inline-block text-white bg-pink-500 py-2 px-6 rounded-full mt-4 transition duration-200 hover:bg-pink-600">
                    See More
                </button>
            </div>
        </div>
    );
};

export default ServiceItem;
