"use client";

import React from "react";

export const GutHealthBanner = () => {
    return (
        <section className="bg-background-light dark:bg-background-dark font-display text-white transition-colors duration-300 w-full">
            {/* Main Layout Container */}
            <div className="relative flex w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    {/* Top Navigation Bar - Note: Usually this is shared in layout, but keeping it if user specifically wants it as part of this component structure or replacing it with site's header */}
                    {/* However, since the user asked to "add this" in about page finally, I will include the sections from the HTML minus the redundancy if they already exist in the page. */}
                    {/* Looking at the HTML, it starts with a Header. The about page already has a header. I will skip the duplicate header and start from Hero Section. */}

                    {/* Hero Section / Headline */}
                    <div className="px-4 md:px-20 lg:px-40 flex justify-center">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                            <div className="pt-12 pb-6 text-center">
                                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-gut-primary)]/10 border border-[var(--color-gut-primary)]/20 text-[var(--color-gut-primary)] text-xs font-semibold mb-4 tracking-widest uppercase">
                                    Gut Health Series
                                </span>
                                <h1 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight px-4 font-lexend">
                                    The Science of a <span className="text-[var(--color-gut-primary)]">Resilient Gut</span>
                                </h1>
                                <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
                                    Understanding our proprietary three-stage process for bio-available gut restoration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Timeline / Infographic */}
                    <div className="px-4 md:px-20 lg:px-40 flex justify-center py-10">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 bg-white/5 border border-white/10 rounded-2xl p-8 bio-gradient-gut relative overflow-hidden">
                            {/* Subtle Background Pattern */}
                            <div
                                className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(#0df20d 1px, transparent 1px)",
                                    backgroundSize: "40px 40px",
                                }}
                            ></div>
                            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 py-10">
                                {/* Connecting Line (Desktop Only) */}
                                <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] timeline-line-gut opacity-30"></div>

                                {/* Step 1: Algal Protein */}
                                <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group">
                                    <div className="size-16 rounded-2xl bg-[var(--color-gut-bg-dark)] border-2 border-[var(--color-gut-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-gut-primary">
                                        <span className="material-symbols-outlined text-[var(--color-gut-primary)] text-3xl">eco</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Algal Protein</h3>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                                        High-quality, sustainable protein source for cellular repair.
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <span className="px-2 py-0.5 bg-[var(--color-gut-primary)]/10 text-[var(--color-gut-primary)] text-[10px] rounded uppercase font-bold tracking-tighter">
                                            Phase 1: Input
                                        </span>
                                    </div>
                                </div>

                                {/* Step 2: Fermentation */}
                                <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group">
                                    <div className="size-20 rounded-full bg-[var(--color-gut-bg-dark)] border-2 border-[var(--color-gut-accent-blue)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(26,115,232,0.3)]">
                                        <span className="material-symbols-outlined text-[var(--color-gut-accent-blue)] text-4xl">ev_station</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Fermentation</h3>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                                        Active conversion process activating EPS protection mechanisms.
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <span className="px-2 py-0.5 bg-[var(--color-gut-accent-blue)]/10 text-[var(--color-gut-accent-blue)] text-[10px] rounded uppercase font-bold tracking-tighter">
                                            Phase 2: Bio-Activation
                                        </span>
                                    </div>
                                </div>

                                {/* Step 3: Protected Gut Lining */}
                                <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3 group">
                                    <div className="size-16 rounded-2xl bg-[var(--color-gut-bg-dark)] border-2 border-[var(--color-gut-primary)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-gut-primary">
                                        <span className="material-symbols-outlined text-[var(--color-gut-primary)] text-3xl">shield_with_heart</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Protected Lining</h3>
                                    <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                                        Strengthened biological barrier against inflammatory triggers.
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <span className="px-2 py-0.5 bg-[var(--color-gut-primary)]/10 text-[var(--color-gut-primary)] text-[10px] rounded uppercase font-bold tracking-tighter">
                                            Phase 3: Result
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid (Detailed Icons) */}
                    <div className="px-4 md:px-20 lg:px-40 flex justify-center py-10">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                                {/* EPS Protection Card */}
                                <div className="flex flex-row gap-6 rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all group">
                                    <div className="flex-shrink-0 size-14 rounded-lg bg-[var(--color-gut-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-gut-primary)]/20 transition-colors">
                                        <span className="material-symbols-outlined text-[var(--color-gut-primary)] text-3xl">security</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-white text-lg font-bold leading-tight">EPS Protection Shield</h2>
                                        <p className="text-white/50 text-sm leading-normal">
                                            Exopolysaccharides create a physical and chemical shield, preventing harmful pathogens from colonizing the microbiome.
                                        </p>
                                    </div>
                                </div>
                                {/* Toxin Removal Card */}
                                <div className="flex flex-row gap-6 rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all group">
                                    <div className="flex-shrink-0 size-14 rounded-lg bg-[var(--color-gut-accent-blue)]/10 flex items-center justify-center group-hover:bg-[var(--color-gut-accent-blue)]/20 transition-colors">
                                        <span className="material-symbols-outlined text-[var(--color-gut-accent-blue)] text-3xl">cleaning_services</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-white text-lg font-bold leading-tight">Molecular Toxin Removal</h2>
                                        <p className="text-white/50 text-sm leading-normal">
                                            High-precision binding agents identify and eliminate metabolic waste products at the cellular level before they enter the bloodstream.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="px-4 md:px-20 lg:px-40 flex justify-center py-12">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                            <div className="flex flex-col items-center px-4 py-8 bg-[var(--color-gut-primary)]/5 rounded-2xl border border-[var(--color-gut-primary)]/10">
                                <h4 className="text-xl font-medium mb-6">Ready to optimize your digestive system?</h4>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-[var(--color-gut-primary)] text-[var(--color-gut-bg-dark)] text-base font-bold transition-all hover:scale-105 glow-gut-primary">
                                        Learn More About Our Process
                                    </button>
                                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-transparent border border-white/20 text-white text-base font-bold hover:bg-white/5 transition-all">
                                        View Clinical Studies
                                    </button>
                                </div>
                                <p className="mt-6 text-white/40 text-xs text-center">Used by over 50,000+ health enthusiasts worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
