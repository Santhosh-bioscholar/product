"use client";

import React from "react";

export const ScalingNatureWisdom = () => {
    return (
        <>
            <style jsx>{`
        .glass-card {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .text-glow {
          text-shadow: 0 0 30px rgba(20, 184, 166, 0.5);
        }
        .algae-overlay {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(20, 184, 166, 0.08) 0%,
            transparent 70%
          );
        }
        .stat-divider {
          width: 1px;
          height: 3rem;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
        }
        .immersive-bg {
          background-image: linear-gradient(
              to bottom,
              rgba(2, 4, 8, 0.7),
              rgba(2, 4, 8, 0.8)
            ),
            url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhnaUx4IOM_x3oVfwGxUqPZuR3llFkW0Fnnit3iY4eZmHsd0r-7n4YBBL_MIpj9ai_EzBetALhhSLHF1IChZZZQ0l3JFVjkGYVSmw2Zk_SlOruGLoTSjT_i4SuDBOueqp_R2JeGT0-Kcpj-rWaH_8UtB597IahjraCezouYuICw3v6zgEfJzG1K8hlB0vWfAtPd6xbjZhuGSsM1Z7xu7OBA_n5aM4Y8NTUAtGfyFYm7KHB4H_PSsH1xf0Itchf-NyV0sfcoO8m6vL1");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
            <section className="relative min-h-screen flex items-center justify-center p-6 ">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px]  "></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] blur-[120px] pointer-events-none"></div>
                <div className="container max-w-5xl mx-auto relative z-10">
                    <div className=" overflow-hidden p-8 md:p-16   relative">
                        <div className="absolute inset-0 algae-overlay pointer-events-none"></div>
                        <div className="relative z-10 text-center space-y-12">
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                                    <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                                        Our Core Purpose
                                    </span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-extrabold font-display leading-tight tracking-tight text-white">
                                    Scaling Nature's <br />
                                    <span className="text-primary text-glow italic font-extrabold">
                                        Wisdom
                                    </span>
                                </h1>
                                <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                                    At Aroora Biotech, we're decoding the blueprint of Earth's
                                    most ancient carbon transformers to create high-impact,
                                    sustainable solutions for a planet in transition.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-500">
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">
                                            psychology
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        Natural Intelligence
                                    </h3>
                                    <p className="text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Bio-inspired engineering from microscopic algorithms.
                                    </p>
                                </div>
                                <div className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-500">
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">
                                            auto_fix_high
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        Transformation
                                    </h3>
                                    <p className="text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Turning carbon liabilities into regenerative assets.
                                    </p>
                                </div>
                                <div className="group p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-500">
                                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">
                                            hub
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        Ethical Scaling
                                    </h3>
                                    <p className="text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Expanding capacity without compromising ecosystems.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
