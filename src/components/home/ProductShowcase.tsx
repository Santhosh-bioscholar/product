'use client';

import React from 'react';
import { productsRaw } from '@/data/products';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ProductShowcase() {
    return (
        <div className="relative bg-[#131313] py-20">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={{
                    releaseOnEdges: true,
                    forceToAxis: true,
                }}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper w-full h-full"
            >
                {productsRaw.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="w-full h-full flex items-center justify-center px-8 md:px-32 py-10">
                            <div className="container mx-auto max-w-7xl">
                                {/* Layout Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
                                    {/* Text Content */}
                                    <div className="flex flex-col text-left space-y-3">
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
                                    </div>

                                    {/* Visual Side (Image) */}
                                    <div className="hidden lg:flex items-center justify-center relative h-full">
                                        <div className="relative z-10 w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-500">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 mix-blend-overlay`} />
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br ${product.gradient} rounded-full blur-[100px] opacity-20`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
