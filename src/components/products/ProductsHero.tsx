"use client";

import { FadeIn } from "../animations/FadeIn";

export function ProductsHero() {
    return (
        <section className="relative h-[50vh] w-full flex items-center justify-center bg-[#0A2540] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540] to-[#0A2540]" />

            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <FadeIn direction="up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Our <span className="text-green-400">Innovations</span>
                    </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Scientific breakthroughs translated into sustainable solutions for human and animal health.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
