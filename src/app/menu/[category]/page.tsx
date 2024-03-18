"use client"

import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "@/components/ProductCard";
import { Heading } from "@radix-ui/themes";
import {Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit} from "@radix-ui/react-form";

const CategoryPage = () => {
    return (
        <div className="flex container-m gap-6">
            <div className={"flex flex-col gap-2 min-w-72"}>
                <Heading>Filters</Heading>
                <Form>
                    <FormField className="FormField" name="email">
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <FormLabel className="FormLabel">Price from:</FormLabel>
                            <FormMessage className="FormMessage text-sm text-red-500" match="valueMissing">
                                Please enter a number
                            </FormMessage>
                            <FormMessage className="FormMessage text-sm text-red-500" match="typeMismatch">
                                Please enter a number
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <input className="Input bg-gray-50 text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" required />
                        </FormControl>
                    </FormField>
                    <FormField className="FormField" name="email">
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <FormLabel className="FormLabel">Price to:</FormLabel>
                            <FormMessage className="FormMessage text-sm text-red-500" match="valueMissing">
                                Please enter a number
                            </FormMessage>
                            <FormMessage className="FormMessage text-sm text-red-500" match="typeMismatch">
                                Please enter a number
                            </FormMessage>
                        </div>
                        <FormControl asChild>
                            <input className="Input bg-gray-50 text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" required />
                        </FormControl>
                    </FormField>
                </Form>
            </div>
            <div className={'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
                {pizzas.map((item) => (
                    <Link className="" href={`/product/${item.id}`} key={item.id}>
                        <ProductCard product={item}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
