'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, EffectFade } from 'swiper/modules';
import { productsRaw } from '@/data/products';
import { ArrowRight, Zap, Info, ShieldCheck } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function ProductShowcase() {
    return (
        <section className="h-screen w-full  relative overflow-hidden bg-[#0A2540]">
            <Swiper
                key={'product-showcase-swiper'}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
                effect={'fade'}
                speed={700}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                observer={true}
                observeParents={true}
                mousewheel={{
                    releaseOnEdges: true,
                    forceToAxis: true,
                    sensitivity: 0.5,
                    thresholdDelta: 10,
                    thresholdTime: 500
                }}
                keyboard={true}
                className="h-full w-full product-swiper-fullscreen "
            >
                {productsRaw.map((product, idx) => (
                    <SwiperSlide key={product.id} className="h-full w-full relative bg-[#0A2540]">
                        {/* Dynamic Background Gradient */}
                        <div className={`absolute  `} />
                        <div className="absolute  " />

                        <div className="container mx-auto px-34 h-full flex flex-col items-center justify-center relative z-10">

                            {/* Layout Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full max-w-7xl">

                                {/* Text Content */}
                                <div className="flex flex-col text-left space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent border border-white/10 bg-white/5`}>
                                                {product.category}
                                            </span>
                                        </div>
                                        <h2 className="text-5xl md:text-xl font-bold text-white tracking-tight leading-tight">
                                            {product.name}
                                        </h2>
                                        <p className="text-xl md:text-lg text-gray-300 font-light leading-relaxed max-w-xl">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Key Benefits</h4>
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
                                        <button className={`px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r ${product.gradient} shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-105 transition-all flex items-center gap-2`}>
                                            Explore {product.name} <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Visual Side (Image) */}
                                <div className="hidden lg:flex items-center justify-center relative h-full">
                                    <div className="relative z-10 w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
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
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                  color: white;
                  width: 64px;
                  height: 34px;
                  border-radius: 50%;
                //   background: rgba(255, 255, 255, 0.05);
                  backdrop-filter: blur(10px);
                //   border: 1px solid rgba(255, 255, 255, 0.1);
                  transition: all 0.3s ease;
                }
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    // background: rgba(255, 255, 255, 0.1);
                    // border-color: rgba(255,255,255,0.4);
                }
                 .swiper-button-next:after,
                 .swiper-button-prev:after {
                    font-size: 24px;
                 }
                 .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: white;
                    opacity: 0.3;
                    margin: 0 8px !important;
                 }
                 .swiper-pagination-bullet-active {
                    opacity: 1;
                    transform: scale(1.2);
                 }
            `}</style>
        </section>
    );
}

