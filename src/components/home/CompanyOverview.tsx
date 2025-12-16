"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import EarthScene from "./EarthScene";

export function CompanyOverview() {
    return (
        <section className="relative w-full py-24 px-6 overflow-hidden bg-[#0A2540]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
  <div className="relative h-[600px] w-full flex items-center justify-center -mr-0 md:-mr-20 lg:-mr-32 order-1 lg:order-1">
                    <EarthScene />
                </div>


                {/* Right Content */}
                <div className="flex flex-col gap-8 order-2 lg:order-2">
                    <FadeIn direction="right">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[#0FA57D] uppercase">
                            Our Company
                        </h2>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Biotech solutions powered by <br />
                            <span className="text-[#0FA57D] italic">nature&apos;s intelligence.</span>
                        </h3>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Aroora Biotech Pvt. Ltd. is a science-driven biotechnology company specializing in biotransformation technologies for animal nutrition, aquaculture, and environmental applications. We harness the power of algae and microbiome engineering to create sustainable solutions that restore balance to our planet's ecosystems.
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.6}>
                        <div className="flex gap-4">
                            {/* Stats or Icons could go here */}
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-3xl font-bold text-[#0FA57D]">100%</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Sustainable</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-3xl font-bold text-[#0AB3A3]">0%</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Toxic Effects</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
             


            </div>
        </section>
    );
}
