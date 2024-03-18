"use client"
import React from 'react';
import {menu} from "@/data";
import MenuCard from "@/components/MenuCard";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const MenuGrid = () => {
    const isMdScreen = useMediaQuery('md'); // Проверяем, соответствует ли текущая ширина экрана медиа-запросу 'md'

    return (
        <div className={`container-m ${isMdScreen ? 'menu-grid' : 'flex flex-col gap-4'}`}>
            {
                menu.map((value, index) => {
                    return (
                        <MenuCard key={index} category={value} area={`item-${index + 1}`} />
                    )
                })
            }
        </div>
    );
};

export default MenuGrid;
