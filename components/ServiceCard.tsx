import React from "react";

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
    };
}
const ServiceCard = ({ service }: ServiceCardProps) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-pink-200 cursor-pointer transition duration-300">
            <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
