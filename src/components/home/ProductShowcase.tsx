'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { productsRaw } from '@/data/products';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export function ProductShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStage, setActiveStage] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Calculate horizontal scroll based on number of products
    const totalProducts = productsRaw.length;

    // Create discrete scroll steps - snap to each product
    const scrollSteps = Array.from({ length: totalProducts }, (_, i) => i / (totalProducts - 1));
    const positionSteps = Array.from({ length: totalProducts }, (_, i) => `${-i * 100}%`);

    const pipelineX = useTransform(
        scrollYProgress,
        scrollSteps,
        positionSteps
    );

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            const stageIndex = Math.min(Math.floor(value * totalProducts), totalProducts - 1);
            setActiveStage(stageIndex);
        });
        return () => unsubscribe();
    }, [scrollYProgress, totalProducts]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-[#131313]">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                {/* Progress indicator */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-2">
                        {productsRaw.map((_, index) => (
                            <motion.div
                                key={index}
                                className="w-2 h-2 rounded-full"
                                animate={{
                                    backgroundColor: index <= activeStage ? "hsl(152 55% 42%)" : "hsl(0 0% 40%)",
                                    scale: index === activeStage ? 1.3 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                </div>

                {/* Horizontal scrolling products */}
                <motion.div
                    className="flex items-center h-full"
                    style={{ x: pipelineX }}
                >
                    {productsRaw.map((product, idx) => (
                        <div
                            key={product.id}
                            className="flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-32"
                        >
                            <div className="container mx-auto max-w-7xl">
                                {/* Layout Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full ">
                                    {/* Text Content */}
                                    <motion.div
                                        className="flex flex-col text-left space-y-3"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{
                                            opacity: activeStage === idx ? 1 : 0.3,
                                            x: activeStage === idx ? 0 : -50
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <span className={`px-6 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent border border-white/10 bg-white/5`}>
                                                    {product.category}
                                                </span>
                                            </div>
                                            <h2 className="text-5xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                                {product.name}
                                            </h2>
                                            <p className="text-xl md:text-[15px] text-gray-300 font-light leading-relaxed max-w-xl">
                                                {product.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-xs font-semibold text-gray-100 uppercase tracking-widest ">Key Benefits</h4>
                                            <ul className="grid grid-cols-1 gap-3">
                                                {product.benefits.slice(0, 3).map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                                        <div className={`mt-1 p-1.5 rounded-full bg-gradient-to-br ${product.gradient} shadow-lg shrink-0`}>
                                                            <Zap className="w-3 h-3 text-white" />
                                                        </div>
                                                        <span className="text-gray-200 text-sm">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-0">
                                            <Link href={`/products/${product.id}`} className="inline-block">
                                                <button className={`px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r ${product.gradient} shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-all flex items-center gap-2`}>
                                                    Explore {product.name} <ArrowRight className="w-5 h-5" />
                                                </button>
                                            </Link>
                                        </div>
                                    </motion.div>

                                    {/* Visual Side (Image) */}
                                    <motion.div
                                        className="hidden lg:flex items-center justify-center relative h-full"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{
                                            opacity: activeStage === idx ? 1 : 0.3,
                                            scale: activeStage === idx ? 1 : 0.9
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="relative z-10 w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 mix-blend-overlay`} />
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br ${product.gradient} rounded-full blur-[100px] opacity-20`} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Stage label at bottom */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
                    key={activeStage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-xs uppercase tracking-widest text-algae">
                        Product {activeStage + 1} of {totalProducts}
                    </span>
                </motion.div>
            </div>
        </div>
    );
}
