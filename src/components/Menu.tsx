"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {AnimatePresence} from "framer-motion";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import {Box, Button} from "@radix-ui/themes";

const links = [
    {id: 1, title: "Homepage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/"},
    {id: 4, title: "Contact", url: "/"},
];

const Menu = () => {
    const [open, setOpen] = useState(false);
    const user = true;
    return (
        <div>
            <Bars3Icon className={'h-8'} onClick={()=>setOpen(true)}/>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white absolute left-0 top-0 w-full h-[100vh] flex flex-col gap-8 items-center justify-center text-3xl z-10"
                    >
                        <Box className={'flex justify-end items-end w-full p-4'}>
                            <Button variant={'ghost'} size={'3'}>
                                <XMarkIcon className={'h-8'} onClick={()=>setOpen(false)}/>
                            </Button>
                        </Box>
                        {links.map((item) => (
                            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                                {item.title}
                            </Link>
                        ))}
                        <Link href={user ? '/orders' : 'login'} onClick={() => setOpen(false)}>
                            {user ? 'Orders' : 'Login'}
                        </Link>
                        <Link href="/cart" onClick={() => setOpen(false)}>
                            Cart
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Menu;
