"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Button} from "@radix-ui/themes";

const data = [
    {
        id: 1,
        title: 'always fresh & always crispy & always hot',
        image: '/slide1.png',
    },
    {
        id: 2,
        title: 'we deliver your order wherever you are in NY',
        image: '/slide2.png',
    },
    {
        id: 3,
        title: 'the best pizza to share with your family',
        image: '/slide3.jpg',
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-[80vh] lg:flex-row">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex items-center justify-center flex-col gap-8 font-bold"
            >
                <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                    {data[currentSlide].title}
                </h1>
                <Button size={{xs: '3', md: '4'}}>Order now!</Button>
            </motion.div>
            <motion.div
                key={data[currentSlide].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex-1 relative"
            >
                <Image src={data[currentSlide].image} alt="" fill className="object-cover" />
            </motion.div>
        </div>
    );
};

export default Slider;
