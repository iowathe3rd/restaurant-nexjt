import React from 'react';
import { Heading, Blockquote, Button } from "@radix-ui/themes";
import {singleProduct} from "@/data";

const ProductInformation = ({ title, price }: {title: string, price: number}) => {
    return (
        <div>
            <Heading size={'9'}>
                {title}
            </Heading>
            <p className="mt-4 text-3xl font-bold text-emerald-900">
                {price} $
            </p>

            {/* Reviews */}
            <div className="mt-4">
                <div className="flex items-center gap-4">
                    <div className="flex">
                        {Array.from([0,0,0,0,0]).map((value, index) => {
                            return (
                                <svg
                                    key={index}
                                    className="h-5 w-5 text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    ></path>
                                </svg>
                            )
                        })}
                        {/* Остальные звезды */}
                    </div>
                </div>
                <div className="mt-6">
                    <Blockquote>
                        {singleProduct.desc}
                    </Blockquote>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;
