import React from 'react';
import {featuredProducts} from "@/data";
import Image from "next/image";
import {Button} from "@radix-ui/themes";

const FeaturedItems = () => {
    return (
        <div className="w-screen overflow-x-scroll">
            {/* WRAPPER */}
            <div className="w-max flex">
                {/* SINGLE ITEM */}
                {featuredProducts.map((item) => (
                    <div
                        key={item.id}
                        className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[20vw] xl:h-[70vh]"
                    >
                        {/* IMAGE CONTAINER */}
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                <Image src={item.img} alt="" fill className="object-contain" />
                            </div>
                        )}
                        {/* TEXT CONTAINER */}
                        <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                            <p className="p-4 2xl:p-8">{item.desc}</p>
                            <span className="text-xl font-bold">${item.price}</span>
                            <Button size={{xs: '2', md: '3', lg: '4'}}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedItems;
