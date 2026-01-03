"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { FadeIn } from "../animations/FadeIn";
import { Activity, ShieldCheck, HeartPulse } from "lucide-react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tag: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "product-1",
        description: "High-fidelity void isolation",
        price: 299,
        tag: "#AUDIO_TECH",
        image: "https://placehold.co/400x300/111827/white?text=Nebula+X-1",
    },
    {
        id: 2,
        name: "product-2",
        description: "Time dilation tracking",
        price: 199,
        tag: "#CHRONO",
        image: "https://placehold.co/400x300/111827/white?text=Gravity+Watch",
    },
    {
        id: 3,
        name: "product-3",
        description: "Zero-gravity propulsion",
        price: 149,
        tag: "#ZERO_G",
        image: "https://placehold.co/400x300/111827/white?text=Void+Runner",
    },
    {
        id: 4,
        name: "product-4",
        description: "Deep space simulation",
        price: 499,
        tag: "#VISION",
        image: "https://placehold.co/400x300/111827/white?text=Stellar+VR",
    },
];

export const CosmicHorizon = () => {
    return (
        <section className=" py-24 px-6 lg:px-12 relative overflow-hidden min-h-screen">
            {/* Grid Background Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(#2a3447 1px, transparent 1px), linear-gradient(90deg, #2a3447 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

                {/* Left Content */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold tracking-wider mb-6 border border-blue-500/20">
                            ● Food
                        </span>

                        <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
                            Food <br /> Products
                        </h2>

                        <p className="text-gray-400 text-lg mb-1 leading-relaxed">
                            Experience the future of interstellar technology. Gear designed for the void, engineered for earth.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            {/* <button className="flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-colors">
                                Watch Video
                                <Play className="w-4 h-4 fill-current" />
                                </button> */}
                        </div>
  <div className="flex flex-col gap-4">
                        {[
                            { icon: Activity, text: "Enhanced Bioavailability" },
                            { icon: ShieldCheck, text: "Immune System Support" },
                            { icon: HeartPulse, text: "Gut Microbiome Balance" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                <item.icon className="w-6 h-6 text-blue-400" />
                                <span className="text-white font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                        {/* Social Proof */}
                        {/* <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0F19] bg-gray-700 overflow-hidden">
                                <img src={`https://placehold.co/40x40/333/ccc?text=U${i}`} alt="User" />
                                </div>
                                ))}
                                </div>
                                <span className="text-sm text-gray-400 font-medium">
                                <span className="text-white font-bold">+2k</span> Explorers trust our gear
                                </span>
                                </div> */}
                                <button className="bg-blue-600 mt-6 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                    Explore All
                                </button>
                    </motion.div>
                </div>

                {/* Right Product Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#111827] rounded-3xl p-4 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="relative aspect-[4/2] rounded-2xl overflow-hidden mb-1 bg-[#0d121f]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="px-2 py-1 bg-black/40 backdrop-blur text-[10px] font-bold text-blue-400 rounded border border-blue-500/20">
                                        {product.tag}
                                    </span>
                                </div>
                            </div>

                            <div className="px-2 pb-2">
                                <div className="flex justify-between items-end mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {product.name}
                                    </h3>
                                    
                                </div>

                                <p className="text-sm text-gray-500 mb-6">
                                    {product.description}
                                </p>

                                <button className="w-full py-3 rounded-xl bg-[#1F2937] text-white font-semibold text-sm hover:bg-blue-600 transition-colors group-hover:shadow-lg">
                                    Explore
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
