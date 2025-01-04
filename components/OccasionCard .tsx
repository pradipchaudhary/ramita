import React from "react";
import Image from "next/image";
import Link from "next/link";

const OccasionCard = ({ service }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <Image
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
                width={500}
                height={500}
            /> */}
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                </p>
                <Link
                    href={service.link}
                    className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default OccasionCard;
