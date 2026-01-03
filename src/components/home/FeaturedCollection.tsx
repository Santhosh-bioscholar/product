"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tag?: string;
    discount?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Velocity Runner",
        description: "Professional grade cushioning",
        price: 120,
        image: "https://placehold.co/400x300/white/black?text=Velocity+Runner",
        tag: "New",
    },
    {
        id: 2,
        name: "Series 7 Watch",
        description: "Health & fitness tracking",
        price: 250,
        image: "https://placehold.co/400x300/black/white?text=Series+7+Watch",
    },
    {
        id: 3,
        name: "Sonic Buds Pro",
        description: "Active noise cancellation",
        price: 99,
        image: "https://placehold.co/400x300/1a472a/white?text=Sonic+Buds+Pro",
        discount: "-20%",
    },
    {
        id: 4,
        name: "Urban Backpack",
        description: "Waterproof 20L storage",
        price: 65,
        image: "https://placehold.co/400x300/e5e5e5/black?text=Urban+Backpack",
    },
];

export const FeaturedCollection = () => {
    return (
        <section className=" py-20 px-6 lg:px-12 flex justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Hero Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-[600px] rounded-3xl overflow-hidden group"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="https://placehold.co/600x800/1a1a1a/white?text=Summer+Essentials+Model"
                            alt="Summer Collection"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-12 left-8 md:left-12 max-w-md z-10 text-white">
                        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wider uppercase border border-white/10">
                            Featured Collection
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Summer <br /> Essentials
                        </h2>
                        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                            Discover the latest trends for the season. Breathable fabrics and
                            bold styles tailored for you.
                        </p>
                        <button className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors group/btn">
                            Explore Collection
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </motion.div>

                {/* Right Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"
                        >
                            <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Badges */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2">
                                    {product.tag && (
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold rounded-full shadow-sm">
                                            {product.tag}
                                        </span>
                                    )}
                                    {product.discount && (
                                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-sm">
                                            {product.discount}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                        {product.name}
                                    </h3>
                                    <span className="text-blue-600 font-bold text-lg">
                                        ${product.price}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <button className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
                                        Details
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
