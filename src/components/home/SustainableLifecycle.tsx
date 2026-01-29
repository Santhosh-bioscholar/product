'use client';

import React from 'react';

const SustainableLifecycle = () => {
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="relative">
            {/* Font imports are handled in layout.tsx */}
            <section className="font-['Plus_Jakarta_Sans']   text-slate-900 dark:text-slate-100 antialiased py-16 px-6"> {/* Added py-16 to replace min-h-screen centering for integration */}
                <div className="max-w-7xl w-full mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-['Outfit'] font-bold bg-gradient-to-r from-[#2DD4BF] to-[#0EA5E9] bg-clip-text text-transparent">
                                    Sustainable Lifecycle
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                                    We are committed to producing and marketing safe, high-quality products, with truthful, transparent, and non-misleading labeling and advertising.
                                </p>
                            </div>
                            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40" viewBox="0 0 400 400">
                                    <circle className="text-[#2DD4BF]" cx="200" cy="200" fill="none" r="140" stroke="currentColor" strokeDasharray="8 8" strokeWidth="2"></circle>
                                    <circle className="opacity-30" cx="200" cy="200" fill="none" r="100" stroke="url(#gradient)" strokeWidth="1"></circle>
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }}></stop>
                                            <stop offset="100%" style={{ stopColor: '#D946EF', stopOpacity: 1 }}></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flow-node absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center group">
                                        <div className="w-16 h-16 rounded-full bg-[#D946EF] flex items-center justify-center shadow-lg glow-magenta z-10 transition-transform">
                                            <span className="material-icons-round text-white text-3xl">verified_user</span>
                                        </div>
                                        <div className="mt-4 p-4  rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 text-center w-48 transition-all group-hover:border-[#D946EF]">
                                            <span className="text-sm font-semibold text-[#D946EF] uppercase tracking-wider block mb-1">Standard</span>
                                            <h3 className="font-['Outfit'] font-bold text-slate-800 dark:text-white leading-tight">Best Regulatory Practices</h3>
                                        </div>
                                    </div>
                                    <div className="flow-node absolute bottom-0 left-0 flex flex-col items-center group">
                                        <div className="w-16 h-16 rounded-full bg-[#2DD4BF] flex items-center justify-center shadow-lg glow-teal z-10">
                                            <span className="material-icons-round text-white text-3xl">science</span>
                                        </div>
                                        <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 text-center w-48 transition-all group-hover:border-[#2DD4BF]">
                                            <span className="text-sm font-semibold text-teal-500 uppercase tracking-wider block mb-1">Testing</span>
                                            <h3 className="font-['Outfit'] font-bold text-slate-800 dark:text-white leading-tight">Clinically Evaluated Solutions</h3>
                                        </div>
                                    </div>
                                    <div className="flow-node absolute bottom-0 right-0 flex flex-col items-center group">
                                        <div className="w-16 h-16 rounded-full bg-[#0EA5E9] flex items-center justify-center shadow-lg glow-teal z-10">
                                            <span className="material-icons-round text-white text-3xl">eco</span>
                                        </div>
                                        <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 text-center w-48 transition-all group-hover:border-[#0EA5E9]">
                                            <span className="text-sm font-semibold text-[#0EA5E9] uppercase tracking-wider block mb-1">Innovation</span>
                                            <h3 className="font-['Outfit'] font-bold text-slate-800 dark:text-white leading-tight">Green & White Technology</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 lg:gap-8">
                            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/5">
                                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#2DD4BF]">
                                    <span className="material-icons-round text-teal-500 group-hover:text-white transition-colors text-3xl">biotech</span>
                                </div>
                                <h4 className="text-lg font-bold font-['Outfit'] text-slate-800 dark:text-slate-100 leading-tight">
                                    Tested Raw Materials
                                </h4>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Ensuring the highest purity from the start of our process.</p>
                            </div>
                            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/5">
                                <div className="w-14 h-14 rounded-2xl bg-magenta-50 dark:bg-[#D946EF]/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#D946EF]">
                                    <span className="material-icons-round text-[#D946EF] group-hover:text-white transition-colors text-3xl">nature_people</span>
                                </div>
                                <h4 className="text-lg font-bold font-['Outfit'] text-slate-800 dark:text-slate-100 leading-tight">
                                    Pure Natural Products
                                </h4>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Derived directly from nature with minimal processing.</p>
                            </div>
                            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
                                <div className="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-[#0EA5E9]/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0EA5E9]">
                                    <span className="material-icons-round text-[#0EA5E9] group-hover:text-white transition-colors text-3xl">workspace_premium</span>
                                </div>
                                <h4 className="text-lg font-bold font-['Outfit'] text-slate-800 dark:text-slate-100 leading-tight">
                                    Certificated Production
                                </h4>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Global standards met across every manufacturing stage.</p>
                            </div>
                            <div className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-amber-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/5">
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mb-6 transition-colors group-hover:bg-amber-400">
                                    <span className="material-icons-round text-amber-500 group-hover:text-white transition-colors text-3xl">history_edu</span>
                                </div>
                                <h4 className="text-lg font-bold font-['Outfit'] text-slate-800 dark:text-slate-100 leading-tight">
                                    A 35 Years Tradition
                                </h4>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Decades of expertise woven into every single product.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform z-50"
                    onClick={toggleDarkMode}
                >
                    <span className="material-icons-round text-slate-800 dark:text-white">dark_mode</span>
                </button>
            </section>
        </div>
    );
};

export default SustainableLifecycle;
