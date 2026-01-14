"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductData } from "@/types/product";

interface HowItWorksSectionProps {
    product: ProductData;
}

export const UsageSection = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const x = (clientX - innerWidth / 2) / innerWidth;
            const y = (clientY - innerHeight / 2) / innerHeight;

            container.style.setProperty("--mouse-x", x.toString());
            container.style.setProperty("--mouse-y", y.toString());

            const cards = container.querySelectorAll(".floating-card");
            cards.forEach((card) => {
                const depthClass = Array.from(card.classList).find((cls) =>
                    cls.startsWith("depth-")
                );
                let depth = 20; // default
                if (depthClass === "depth-near") depth = 80;
                if (depthClass === "depth-mid") depth = 40;
                if (depthClass === "depth-far") depth = -30;

                const moveX = x * depth;
                const moveY = y * depth;

                (card as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="bg-background-dark font-jakarta text-gray-100 antialiased overflow-x-hidden min-h-screen">
            <header className="absolute top-0 w-full z-50 px-12 py-8 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-luxury-gold text-4xl">
                        scuba_diving
                    </span>
                    <span className="font-display text-2xl tracking-[0.3em] text-white uppercase font-bold">
                        Aquaria
                    </span>
                </div>
                <nav className="hidden lg:flex space-x-12 items-center">
                    <Link
                        href="#"
                        className="text-xs tracking-[0.2em] text-white/70 hover:text-luxury-gold transition-colors uppercase font-medium"
                    >
                        The Origin
                    </Link>
                    <Link
                        href="#"
                        className="text-xs tracking-[0.2em] text-white/70 hover:text-luxury-gold transition-colors uppercase font-medium"
                    >
                        Science
                    </Link>
                    <Link
                        href="#"
                        className="text-xs tracking-[0.2em] text-white/70 hover:text-luxury-gold transition-colors uppercase font-medium"
                    >
                        Sustainability
                    </Link>
                    <button className="px-8 py-3 bg-white/5 border border-luxury-gold/30 text-luxury-gold text-[10px] tracking-[0.3em] uppercase hover:bg-luxury-gold hover:text-black transition-all duration-500 cursor-pointer">
                        Inquiry
                    </button>
                </nav>
            </header>

            <main
                ref={containerRef}
                className="relative min-h-screen w-full flex items-center justify-center overflow-hidden parallax-container"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Macro photography of premium shrimp"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGGPYnJwPGxZfARJW09_HoI8qhn0t9yl3_gx3QDCpamL_2pEmwDUIUg64v2wV8RnpIht0IMpSWU0rv2ljJ0-Y6bFA6dbPft3EoWPtUDmKOKAcUbZ-npraHT6iAA33shfeTGq_JVsTb-BGXN-5qrnWKIfw6sUabHDLc9tssAInTkhSoS120dPa1GjtG1-bl_WiQgNjhP6YYeR8Pp2GWWUJWDpFoleY0nvQ49jrYr4oJ2BTfg9Wzqd_9DP23PUASVA2fzjFusDIfwvcg"
                        className="opacity-60 scale-110 !w-full !h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
                </div>

                <div className="relative z-20 text-center max-w-4xl px-6 pointer-events-none">
                    <span className="text-luxury-gold uppercase tracking-[0.8em] text-[10px] font-bold block mb-6">
                        Marine Mastery
                    </span>
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-8">
                        Pristine <br /> <span className="italic font-light">Elegance</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-light tracking-wide uppercase">
                        A three-dimensional exploration of superior aquaculture.
                    </p>
                </div>

                <div className="floating-card depth-far top-[15%] left-[10%] w-56">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-luxury-gold/60 text-lg">
                            science
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-200">
                            Bio-Floc Tech
                        </span>
                    </div>
                    <p className="text-[9px] text-gray-500 mt-2 leading-relaxed">
                        Advanced microbial balance for natural immunity.
                    </p>
                </div>

                <div className="floating-card depth-far bottom-[20%] right-[15%] w-52">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-luxury-gold/60 text-lg">
                            public
                        </span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-200">
                            Net-Zero
                        </span>
                    </div>
                    <p className="text-[9px] text-gray-500 mt-2 leading-relaxed">
                        Completely circular ecosystem management.
                    </p>
                </div>

                <div className="floating-card depth-mid top-[25%] right-[20%] w-60">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-luxury-gold text-xl">
                            water_drop
                        </span>
                        <span className="text-[11px] uppercase tracking-widest font-bold text-gray-200">
                            Deep Sea Purity
                        </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">
                        Triple-filtered ocean currents mimic wild habitats.
                    </p>
                </div>

                <div className="floating-card depth-mid bottom-[10%] left-[20%] w-64">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-luxury-gold text-xl">
                            restaurant
                        </span>
                        <span className="text-[11px] uppercase tracking-widest font-bold text-gray-200">
                            Chef Selection
                        </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">
                        Hand-picked for visual symmetry and peak size.
                    </p>
                </div>

                <div className="floating-card depth-mid top-[45%] left-[5%] w-56">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-luxury-gold text-xl">
                            token
                        </span>
                        <span className="text-[11px] uppercase tracking-widest font-bold text-gray-200">
                            Traceable
                        </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">
                        Blockchain identity for every individual harvest.
                    </p>
                </div>

                <div className="floating-card depth-near top-[12%] right-[40%] w-64">
                    <div className="flex items-center gap-4">
                        <div className="glowing-dot"></div>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                            Mineral Diet
                        </span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-3 leading-relaxed">
                        Organic micro-algae nutrition for deep natural pigment.
                    </p>
                </div>

                <div className="floating-card depth-near bottom-[35%] right-[8%] w-64">
                    <div className="flex items-center gap-4">
                        <div className="glowing-dot"></div>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                            Snap Texture
                        </span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-3 leading-relaxed">
                        Cold-water growth cycles ensure a firm, luxury bite.
                    </p>
                </div>

                <div className="floating-card depth-near bottom-[15%] right-[35%] w-60">
                    <div className="flex items-center gap-4">
                        <div className="glowing-dot"></div>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                            Flash Harvest
                        </span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-3 leading-relaxed">
                        Instant cooling at peak freshness levels.
                    </p>
                </div>

                <div className="floating-card depth-near top-[60%] left-[12%] w-64">
                    <div className="flex items-center gap-4">
                        <div className="glowing-dot"></div>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                            Umami Rich
                        </span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-3 leading-relaxed">
                        Natural amino acid elevation for savory finish.
                    </p>
                </div>

                <div className="floating-card depth-near top-[30%] left-[30%] w-52">
                    <div className="flex items-center gap-4">
                        <div className="glowing-dot"></div>
                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                            Zero Meds
                        </span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-3 leading-relaxed">
                        Pure biology. No antibiotics, ever.
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                    <div className="w-px h-24 bg-gradient-to-b from-luxury-gold via-luxury-gold/30 to-transparent"></div>
                    <span className="text-[9px] tracking-[0.5em] text-white/40 uppercase mt-4">
                        Begin Journey
                    </span>
                </div>
            </main>

            <footer className="bg-background-dark border-t border-white/5 py-16 px-12 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-white/40 text-[10px] uppercase tracking-[0.3em]">
                    <div className="flex items-center space-x-2">
                        <span className="text-luxury-gold font-bold">AQUARIA</span>
                        <span>© 2024 Signature Series</span>
                    </div>
                    <div className="flex space-x-12">
                        <Link
                            href="#"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            Ethics
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            Logistics
                        </Link>
                        <Link
                            href="#"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            Press
                        </Link>
                    </div>
                    <div className="flex space-x-6 text-luxury-gold">
                        <span className="material-symbols-outlined text-base cursor-pointer hover:scale-110 transition-transform">
                            share
                        </span>
                        <span className="material-symbols-outlined text-base cursor-pointer hover:scale-110 transition-transform">
                            language
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
