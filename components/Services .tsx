import React from "react";
import OccasionCard from "./OccasionCard ";
import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Wedding Services",
        description:
            "Full-service planning, catering, photography, makeup, and more!",
        image: "wedding-image.jpg",
        link: "/wedding-services",
    },
    {
        title: "Anniversary & Romantic Occasions",
        description:
            "Special gifts, private dinners, romantic getaways, and more.",
        image: "anniversary-image.jpg",
        link: "/anniversary-services",
    },
    {
        title: "Birthday Parties",
        description:
            "Theme parties, kids’ parties, custom cakes, and entertainment.",
        image: "birthday-image.jpg",
        link: "/birthday-services",
    },
    {
        title: "Corporate Events & Conferences",
        description:
            "Event management, team-building activities, speakers, and catering.",
        image: "corporate-image.jpg",
        link: "/corporate-services",
    },
    {
        title: "Holidays & Seasonal Events",
        description:
            "Holiday parties, themed events, and special gift services.",
        image: "holiday-image.jpg",
        link: "/holiday-services",
    },
    {
        title: "Graduations & Milestone Events",
        description:
            "Graduation parties, milestone celebrations, and custom memorabilia.",
        image: "graduation-image.jpg",
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
                    <h1 className="text-4xl text-pink-500 mb-1">
                        Special Services For Every Occasion
                    </h1>
                    <p className="text-md">
                        List down special services you offer on occasions like
                        weddings, etc.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
