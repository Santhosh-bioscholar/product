'use client';

import React from 'react';

export const LifecycleGlassOrbs = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center p-6 overflow-hidden  text-slate-100 font-sans">
            {/* Background Gradients */}
            {/* <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]"></div> */}
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-8 items-center h-full">
                <div className="lg:col-span-4 space-y-8">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/5">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Future-Ready Pillars</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                        Sustainable <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-sky-500 to-fuchsia-500">Lifecycle</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                        Experience a new dimension of clinical purity. Our 3D ecosystem balances cutting-edge technology with nature's wisdom.
                    </p>
                    <div className="pt-4 flex flex-col space-y-4 border-l border-slate-800 pl-6">
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <span className="text-teal-400 material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">auto_awesome</span>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Clinically Evaluated</span>
                        </div>
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <span className="text-sky-500 material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">verified</span>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Regulatory Compliance</span>
                        </div>
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <span className="text-fuchsia-500 material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">eco</span>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Green Technology</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 relative h-full flex items-center justify-center scene-3d min-h-[600px]">
                    <div className="relative w-full aspect-square max-w-[700px] perspective-container">
                        {/* Orb 1: Testing */}
                        <div
                            className="absolute left-1/4 top-1/4 w-56 h-56 glass-orb rounded-full flex flex-col items-center justify-center text-center p-6 border-teal-500/20 group hover:border-teal-400 transition-all duration-700"
                            style={{ '--orb-color-rgb': '45, 212, 191', transform: 'translateZ(40px)' } as React.CSSProperties}
                        >
                            <div className="absolute inset-0 orb-glow bg-teal-500 rounded-full"></div>
                            <span className="material-symbols-outlined text-teal-400 text-5xl mb-3 relative">science</span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-teal-500/80 relative">Testing</span>
                            <h3 className="text-lg font-display font-bold text-white leading-tight relative mt-1">Clinically Evaluated Solutions</h3>
                        </div>

                        {/* Orb 2: Standard */}
                        <div
                            className="absolute right-1/4 top-1/3 w-64 h-64 glass-orb rounded-full flex flex-col items-center justify-center text-center p-8 border-fuchsia-500/20 group hover:border-fuchsia-500 transition-all duration-700"
                            style={{ '--orb-color-rgb': '217, 70, 239', transform: 'translateZ(100px)' } as React.CSSProperties}
                        >
                            <div className="absolute inset-0 orb-glow bg-fuchsia-500 rounded-full"></div>
                            <span className="material-symbols-outlined text-fuchsia-500 text-6xl mb-4 relative">workspace_premium</span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-fuchsia-500/80 relative">Standard</span>
                            <h3 className="text-xl font-display font-bold text-white leading-tight relative mt-1">Best Regulatory Practices</h3>
                        </div>

                        {/* Orb 3: Innovation */}
                        <div
                            className="absolute left-1/3 bottom-1/4 w-48 h-48 glass-orb rounded-full flex flex-col items-center justify-center text-center p-5 border-sky-500/20 group hover:border-sky-500 transition-all duration-700"
                            style={{ '--orb-color-rgb': '14, 165, 233', transform: 'translateZ(-20px)' } as React.CSSProperties}
                        >
                            <div className="absolute inset-0 orb-glow bg-sky-500 rounded-full"></div>
                            <span className="material-symbols-outlined text-sky-500 text-4xl mb-2 relative">biotech</span>
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-sky-500/80 relative">Innovation</span>
                            <h3 className="text-base font-display font-bold text-white leading-tight relative mt-1">Green &amp; White Technology</h3>
                        </div>

                        {/* Floating Tile 1 */}
                        <div className="absolute right-[5%] bottom-[15%] w-52 floating-tile p-5 rounded-2xl z-20 hover:scale-105 transition-transform" style={{ transform: 'translateZ(150px)' }}>
                            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-teal-400 text-2xl">grid_view</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Tested Raw Materials</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Quality Guaranteed</p>
                        </div>

                        {/* Floating Tile 2 */}
                        <div className="absolute left-[5%] top-[10%] w-48 floating-tile p-5 rounded-2xl dof-blur" style={{ transform: 'translateZ(-100px)' }}>
                            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-fuchsia-500 text-2xl">spa</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Pure Natural Products</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Derived from Earth</p>
                        </div>

                        {/* Floating Tile 3 */}
                        <div className="absolute right-[10%] top-[5%] w-48 floating-tile p-5 rounded-2xl" style={{ transform: 'translateZ(60px)' }}>
                            <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-sky-500 text-2xl">precision_manufacturing</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Certified Production</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">ISO Compliant</p>
                        </div>

                        {/* Floating Tile 4 */}
                        <div className="absolute left-[15%] bottom-[5%] w-52 floating-tile p-5 rounded-2xl dof-blur opacity-40 scale-90" style={{ transform: 'translateZ(-250px)' }}>
                            <div className="w-10 h-10 rounded-xl bg-slate-500/10 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-slate-400 text-2xl">history_edu</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">35 Years Tradition</h4>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Decades of Expertise</p>
                        </div>


                        {/* SVG Background Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                            <line stroke="white" strokeDasharray="1,1" strokeWidth="0.1" x1="25%" x2="75%" y1="25%" y2="35%"></line>
                            <line stroke="white" strokeDasharray="1,1" strokeWidth="0.1" x1="75%" x2="33%" y1="35%" y2="75%"></line>
                            <line stroke="white" strokeDasharray="1,1" strokeWidth="0.1" x1="33%" x2="25%" y1="75%" y2="25%"></line>
                        </svg>
                    </div>
                </div>
            </div>

          
        </section>
    );
};
