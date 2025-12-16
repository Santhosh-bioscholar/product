"use client";

import { FadeIn } from "../animations/FadeIn";

export function OurPurpose() {
    return (
        <section className="py-24 px-6 bg-[#0A2540]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <FadeIn direction="right">
                        <h2 className="text-green-400 font-bold tracking-widest uppercase mb-4">Our Purpose</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            To Restore Balance <br /> Through Innovation
                        </h3>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2} className="flex flex-col gap-6 text-gray-300 leading-relaxed text-lg">
                        <p>
                            At Aroora Biotech, we believe that nature holds the answers to our most pressing challenges. Our mission is to decode the biological intelligence of algae &mdash; nature&apos;s original terraformers &mdash; to create solutions that heal rather than harm.
                        </p>
                        <p>
                            We are committed to a future where industrial progress and environmental health go hand in hand. Every product we research, develop, and deploy is a step towards a circular bio-economy.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn direction="left" delay={0.4}>
                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm p-8 flex items-center justify-center">
                        {/* Abstract Mission Visualization */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(74,222,128,0.1),_transparent_70%)] animate-pulse" />
                        <div className="grid grid-cols-2 gap-4 w-full h-full max-w-sm">
                            <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10">
                                <span className="text-4xl font-bold text-green-400 mb-2">10+</span>
                                <span className="text-xs uppercase text-gray-400 tracking-wider">Years Research</span>
                            </div>
                            <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10 mt-8">
                                <span className="text-4xl font-bold text-blue-400 mb-2">50+</span>
                                <span className="text-xs uppercase text-gray-400 tracking-wider">Patents</span>
                            </div>
                            <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10 -mt-8">
                                <span className="text-4xl font-bold text-teal-400 mb-2">100%</span>
                                <span className="text-xs uppercase text-gray-400 tracking-wider">Eco-Friendly</span>
                            </div>
                            <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10">
                                <span className="text-4xl font-bold text-white mb-2">Global</span>
                                <span className="text-xs uppercase text-gray-400 tracking-wider">Impact</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
