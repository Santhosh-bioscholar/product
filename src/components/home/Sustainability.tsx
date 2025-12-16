"use client";

import { motion } from "framer-motion";
import { CloudFog, Zap, Heart, Leaf } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";

const steps = [
    {
        icon: CloudFog,
        title: "Pollution Reduction",
        desc: "Capturing CO₂ emissions effectively",
        color: "text-gray-400",
        bg: "bg-gray-800",
    },
    {
        icon: Leaf,
        title: "Algae Cultivation",
        desc: "Converting carbon into biomass",
        color: "text-green-400",
        bg: "bg-green-900/30",
    },
    {
        icon: Zap,
        title: "Clean Energy",
        desc: "Generating renewable biofuels",
        color: "text-yellow-400",
        bg: "bg-yellow-900/30",
    },
    {
        icon: Heart,
        title: "Better Health",
        desc: "Creating sustainable nutrition",
        color: "text-red-400",
        bg: "bg-red-900/30",
    },
];

export function Sustainability() {
    return (
        <section className="py-24 px-6 bg-[#0A2540] relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#0FA57D]" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <FadeIn direction="up">
                        <h2 className="text-[#0FA57D] font-bold tracking-widest uppercase mb-4">Our Impact</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Sustainability For This Generation</h3>
                    </FadeIn>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-gray-700 via-[#0FA57D] to-blue-500 opacity-30" />

                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={index * 0.2} className="relative z-10 flex flex-col items-center text-center gap-6">
                            <div className={`w-24 h-24 rounded-full ${step.bg} border border-white/10 flex items-center justify-center relative group transition-all hover:scale-110`}>
                                <step.icon className={`w-10 h-10 ${step.color}`} />
                                <div className={`absolute inset-0 rounded-full border border-current opacity-20 animate-ping ${step.color}`} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-400">{step.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
