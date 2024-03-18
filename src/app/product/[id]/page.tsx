import React from 'react';
import ProductImageGallery from "@/components/ProductImageGallery";
import {singleProduct} from "@/data";
import Image from "next/image";
import ProductInformation from "@/components/ProductInformation";
import {Button} from "@radix-ui/themes";
const SingleProductPage = () => {
    return (
        <section className="container-m grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={'w-full'}>
                <Image src={singleProduct.img} alt={singleProduct.title} height={`700`} width={`700`}/>
            </div>
            <div className={'flex flex-col gap-4'}>
                <ProductInformation title={singleProduct.title} price={singleProduct.price}/>
                <Button size={"4"}>Add to basket</Button>
            </div>
        </section>
    );
};

export default SingleProductPage;
