"use client"

import React from 'react';
import Link from "next/link";
import {Menu} from "@/data";
import {Blockquote, Heading} from "@radix-ui/themes";
import {motion} from "framer-motion";

const MenuCard: React.FC<{
    category: {
        id: number;
        slug: string;
        title: string;
        desc?: string;
        img?: string;
        color: string;
    }, area: string
}> = ({category, area}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-full h-full min-h-40 min-w-md rounded-2xl overflow-hidden text-white"
            style={{
                gridArea: area,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                backgroundPosition: 'bottom right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Link href={`/menu/${category.slug}`} className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                    <Heading as="h1">{category.title}</Heading>
                    <Blockquote>{category.desc}</Blockquote>
                </div>
            </Link>
        </motion.div>
    );
};

export default MenuCard;
