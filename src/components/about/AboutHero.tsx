"use client";

import { FadeIn } from "../animations/FadeIn";
import { HeroParticles } from "../home/HeroParticles";

export function AboutHero() {
    return (
        <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#0A2540]">
            <HeroParticles />
            <div className="absolute inset-0 bg-black/40 z-10" />

            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                <FadeIn direction="up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Pioneering <span className="text-[#0FA57D]">Green</span> <br />
                        Biotechnology
                    </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Harnessing the ancient power of algae to engineer a sustainable future for our planet.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
