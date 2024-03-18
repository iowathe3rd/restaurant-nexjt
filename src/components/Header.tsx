"use client"
import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import {Box} from "@radix-ui/themes";
import {Bars3Icon} from "@heroicons/react/24/solid";
const Header = () => {
    const user = true;
    return (
        <Box className="h-12 flex px-2 items-center justify-between uppercase md:h-24 container-m">
            {/* LEFT LINKS */}
            <Box className="hidden md:flex gap-4 flex-1">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
            </Box>
            {/* LOGO */}
            <Box className="text-xl font-bold flex-1 md:text-center">
                <Link href="/">Massimo</Link>
            </Box>
            {/* MOBILE MENU */}
            <Box className="md:hidden">
                <Menu/>
            </Box>
            {/* RIGHT LINKS */}
            <Box className="hidden md:flex gap-4 items-center justify-end flex-1">
                <Box className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-zinc-300 px-1 rounded-md">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>123 456 78</span>
                </Box>
                {!user ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <Link href="/orders">Orders</Link>
                )}
            </Box>
        </Box>
    )
};

export default Header;
