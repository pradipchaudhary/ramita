import React from "react";
import ServiceItem from "./ServiceItem";

const services = [
    {
        title: "Wedding Services",
        description:
            "Full-service planning, catering, photography, makeup, and more!",
        image: "/wedding-image.jpeg",
        link: "/wedding-services",
    },
    {
        title: "Anniversary & Romantic Occasions",
        description:
            "Special gifts, private dinners, romantic getaways, and more.",
        image: "/anniversary-image.webp",
        link: "/anniversary-services",
    },
    {
        title: "Birthday Parties",
        description:
            "Theme parties, kids’ parties, custom cakes, and entertainment.",
        image: "/birthday-image.webp",
        link: "/birthday-services",
    },
    {
        title: "Corporate Events & Conferences",
        description:
            "Event management, team-building activities, speakers, and catering.",
        image: "/corporate-image.jpg",
        link: "/corporate-services",
    },
    {
        title: "Holidays & Seasonal Events",
        description:
            "Holiday parties, themed events, and special gift services.",
        image: "/holiday-image.jpg",
        link: "/holiday-services",
    },
    {
        title: "Graduations & Milestone Events",
        description:
            "Graduation parties, milestone celebrations, and custom memorabilia.",
        image: "/graduation-image.jpg",
        link: "/graduation-services",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            aria-label="Services offered by Ramita Beauty Parlor"
            className="bg-[#fafafa] py-16 md:py-20"
        >
            <div className="max-w-screen-xl mx-auto p-8">
                <div className="text-center mb-20">
                    <h1 className="text-4xl text-pink-500 mb-4 font-semibold">
                        Special Services For Every Occasion
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover our wide range of services designed to make
                        your special occasions truly memorable.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {services.map((service, index) => (
                        <ServiceItem key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
