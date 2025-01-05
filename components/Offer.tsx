import Image from "next/image";
import React from "react";

const Offer = () => {
    return (
        <section className="bg-pink-500 w-full">
            <div className=" py-10 ">
                <div className="container mx-auto flex gap-10 items-center justify-center">
                    <Image
                        src="/sale-badge.png"
                        alt="offer"
                        width={106}
                        height={106}
                    />
                    <div>
                        <h1 className="text-3xl text-black font-bold mb-1">
                            Book Your Appointment Now And Get 25% Off
                        </h1>
                        <p>
                            Awesome Monsoon Sale - 25% OFF On All Professional
                            Make Up From Only $59
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
