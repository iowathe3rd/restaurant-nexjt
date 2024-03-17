import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="h-12 md:h-24 px-2 container-m flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">MASSIMO</Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    );
};

export default Footer;
