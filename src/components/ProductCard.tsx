import React from 'react';
import { Heading, Blockquote, Button } from "@radix-ui/themes";
import Image from "next/image";
import {Product} from "@/data";

const ProductCard: React.FC<{product: Product}> = ({product}) => {
    return (
        <div className={"h-[650px] flex flex-col gap-4 justify-between"}>
            <div className={"flex-grow"}>
                <div className="w-full h-full flex items-center justify-center">
                    <Image alt={product.title} src={product.img} width={400} height={400} />
                </div>
            </div>
            <div className={'flex-none flex-grow-0'}>
                <Heading size="7">{product.title}</Heading>
                <Blockquote>
                    {product.desc}
                </Blockquote>
                <div className="flex items-center justify-between">
                    <Heading size="8">{product.price}$</Heading>
                    <Button size={"4"} color={"amber"}>Order</Button></div>
            </div>
        </div>
    );
};

export default ProductCard;
