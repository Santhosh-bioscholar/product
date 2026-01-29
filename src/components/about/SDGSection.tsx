"use client";

import React from "react";


export function SDGSection() {
    const sdgs = [
        { id: 1, title: "No Poverty", desc: "End poverty in all its forms everywhere by 2030.", icon: "family_restroom", color: "#EB1C2C" },
        { id: 2, title: "Zero Hunger", desc: "End hunger, achieve food security and nutrition.", icon: "restaurant", color: "#D2A02A" },
        { id: 3, title: "Good Health", desc: "Ensure healthy lives and promote well-being for all.", icon: "favorite", color: "#2C9B48" },
        { id: 4, title: "Quality Education", desc: "Ensure inclusive and equitable quality education.", icon: "menu_book", color: "#C21F33" },
        { id: 5, title: "Gender Equality", desc: "Achieve gender equality and empower women and girls.", icon: "wc", color: "#EF402A" },
        { id: 6, title: "Clean Water", desc: "Ensure sustainable management of water for all.", icon: "water_drop", color: "#00ADD8" },
        { id: 7, title: "Clean Energy", desc: "Ensure access to affordable, reliable energy.", icon: "bolt", color: "#FDB713" },
        { id: 8, title: "Decent Work", desc: "Promote sustained, inclusive economic growth.", icon: "trending_up", color: "#8F1737" },
        { id: 9, title: "Industry", desc: "Build resilient infrastructure and foster innovation.", icon: "precision_manufacturing", color: "#F36D24" },
        { id: 10, title: "Inequality", desc: "Reduce inequality within and among countries.", icon: "equalizer", color: "#E01583" },
        { id: 11, title: "Cities", desc: "Make cities inclusive, safe, and sustainable.", icon: "location_city", color: "#F99D25" },
        { id: 12, title: "Consumption", desc: "Ensure sustainable consumption and production.", icon: "loop", color: "#CF8D2A" },
        { id: 13, title: "Climate Action", desc: "Take urgent action to combat climate change.", icon: "park", color: "#48773D" },
        { id: 14, title: "Life Below Water", desc: "Conserve the oceans, seas and marine resources.", icon: "tsunami", color: "#007DBB" },
        { id: 15, title: "Life on Land", desc: "Protect, restore and promote terrestrial ecosystems.", icon: "nature", color: "#3FAF49" },
        { id: 16, title: "Peace & Justice", desc: "Promote peaceful and inclusive societies.", icon: "gavel", color: "#01558A" },
        { id: 17, title: "Partnerships", desc: "Strengthen the means of implementation for the goal.", icon: "handshake", color: "#193667" },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#131313]">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        Sustainable <span className="text-primary">Development</span> Goals
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States, provides a shared blueprint for peace and prosperity.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    
                    {/* Logo Card */}
                    <div className="p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group bg-white/3 backdrop-blur-md min-h-[280px]">
                        <div className="relative w-24 h-24">
                            <svg
                                className="w-full h-full transform group-hover:rotate-180 transition-transform duration-1000"
                                viewBox="0 0 100 100"
                            >
                                <circle className="text-slate-200/20" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="16 1" strokeWidth="8"></circle>
                                <path d="M50 5A45 45 0 0 1 95 50" fill="none" stroke="#E5243B" strokeWidth="8"></path>
                                <path d="M95 50A45 45 0 0 1 50 95" fill="none" stroke="#4C9F38" strokeWidth="8"></path>
                                <path d="M50 95A45 45 0 0 1 5 50" fill="none" stroke="#26BDE2" strokeWidth="8"></path>
                                <path d="M5 50A45 45 0 0 1 50 5" fill="none" stroke="#FCC30B" strokeWidth="8"></path>
                            </svg>
                        </div>
                        <span className="text-[10px] mt-4 font-bold tracking-[0.2em] opacity-50 uppercase text-white">Global Blueprint</span>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { count: "193", label: "Member States" },
                        { count: "169", label: "Targets Defined" },
                        { count: "2030", label: "Target Deadline" }
                    ].map((stat, i) => (
                        <div key={i} className="p-8 rounded-3xl border border-white/5 text-center bg-white/3 backdrop-blur-md">
                            <div className="text-4xl font-bold mb-2 text-white">{stat.count}</div>
                            <div className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
