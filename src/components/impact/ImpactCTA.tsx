"use client";

import { FadeIn } from "../animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ImpactCTA() {
    return (
        <section className="py-24 px-6 bg-[#131313] text-center">
            <FadeIn direction="up">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Join the <span className="text-green-400">Biological Revolution</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Discover how our products can transform your business and contribute to a healthier planet.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/products" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(74,222,128,0.4)] flex items-center justify-center gap-2">
                        Explore Products <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/contact" className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium tracking-wide transition-all flex items-center justify-center">
                        Contact Us
                    </Link>
                </div>
            </FadeIn>
        </section>
    );
}

