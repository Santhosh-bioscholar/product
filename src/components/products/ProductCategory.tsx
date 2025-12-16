"use client";

import { FadeIn } from "../animations/FadeIn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Product {
    id: string;
    name: string;
    desc: string;
    gradient: string;
}

interface ProductCategoryProps {
    title: string;
    description: string;
    products: Product[];
    align?: "left" | "right";
}

export function ProductCategory({ title, description, products, align = "left" }: ProductCategoryProps) {
    return (
        <section className="py-24 px-6 bg-[#0A2540] border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className={`flex flex-col gap-6 mb-16 ${align === "right" ? "md:text-right md:items-end" : "md:text-left md:items-start"}`}>
                    <FadeIn direction="up">
                        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
                        <p className="text-gray-400 max-w-2xl text-lg">{description}</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <FadeIn key={product.id} delay={i * 0.1} className="group relative block h-[400px]">
                            <Link href={`/products/${product.id}`} className="block h-full w-full">
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-colors" />

                                <div className="relative h-full p-8 flex flex-col justify-end">
                                    <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0 text-white flex justify-end">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-sm text-gray-300 line-clamp-3 group-hover:text-white transition-colors">
                                        {product.desc}
                                    </p>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
