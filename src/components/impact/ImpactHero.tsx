"use client";

import { FadeIn } from "../animations/FadeIn";

export function ImpactHero() {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center bg-[#0A2540] overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#3b82f6_0%,_transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,_#22c55e_0%,_transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <FadeIn direction="up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Global <span className="text-blue-400">Impact</span>
                    </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Transforming industries and ecosystems through the power of biotechnology.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
