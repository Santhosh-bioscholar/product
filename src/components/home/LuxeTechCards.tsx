'use client';

import React from 'react';

export function LuxeTechCards() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f6f8] dark:bg-[#101622]">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                    <div className="size-8 text-[#135bec]">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">LuxeTech</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-center gap-8">
                    <a className="text-slate-600 dark:text-slate-300 hover:text-[#135bec] dark:hover:text-[#135bec] text-sm font-medium leading-normal transition-colors" href="#">Home</a>
                    <a className="text-slate-900 dark:text-white text-sm font-medium leading-normal font-bold" href="#">Products</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-[#135bec] dark:hover:text-[#135bec] text-sm font-medium leading-normal transition-colors" href="#">About</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors relative">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <span className="absolute top-1 right-1 size-2 bg-[#135bec] rounded-full"></span>
                    </button>
                    <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-[#135bec] hover:bg-blue-700 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-blue-500/20">
                        <span className="truncate">Sign In</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 md:px-10 lg:px-20 relative overflow-hidden">
                {/* Abstract Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#135bec]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-16 items-center lg:items-start pt-10">
                    {/* Left Column: Title & Context */}
                    <div className="flex-1 flex flex-col gap-6 max-w-lg z-10 lg:sticky lg:top-32">
                        <div className="flex flex-col gap-2">
                            <span className="text-[#135bec] font-bold text-sm tracking-widest uppercase">New Arrivals</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                                Discover Future <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-purple-600">Tech Today</span>
                            </h1>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                            Experience the pinnacle of innovation with our latest collection of premium gadgets. Designed for performance, built for style.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <button className="flex items-center justify-center rounded-full size-12 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button className="flex items-center justify-center rounded-full size-12 bg-[#135bec] text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2 mt-8">
                            <div className="h-1.5 w-8 rounded-full bg-[#135bec]"></div>
                            <div className="h-1.5 w-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                            <div className="h-1.5 w-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                            <span className="ml-2 text-xs font-medium text-slate-400">01 / 03</span>
                        </div>
                    </div>

                    {/* Right Column: Stacked Cards */}
                    <div className="flex-1 w-full max-w-[500px] flex items-center justify-center relative">
                        {/* Stack Container */}
                        <div className="relative w-full h-[500px] [perspective:1000px] group">
                            {/* Card 3 (Bottom/Back) */}
                            <div className="absolute w-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] z-10 top-0 left-1/2 -translate-x-[44%] translate-y-[80px] scale-90 opacity-70 [filter:brightness(0.9)] group-hover:-translate-x-[20%] group-hover:translate-y-[80px] group-hover:rotate-6 group-hover:scale-90 group-hover:opacity-100 group-hover:[filter:brightness(1)]">
                                <div className="relative h-48 bg-slate-100 dark:bg-slate-900 group/card overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover/card:scale-105"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLP7r4_zjl15c85AADW0nG6cg84Dci5-B1YgxI3QHgp-BcPbHo2vZDbM3IpJoO764Il4h2TO2QVPoN6RV_XwdGhL97eKTRhV82zPIg3woMzsVoK05gHwmo4qQd5cKTPQf6NqIo49LbdqvCemIuhI8b2P13HwHDQY2W-BKEdGcvqLeVv1jOw8_zUn_SjvzU_p-DLlogxJ-1ci51QvzFCt2ttGsiUO4MccSQ7-phLF2Lc_KeXzgcgtHMa5Sf1WRAtU-0AS6FAzJEl0A")' }}
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 dark:text-white shadow-sm">
                                        New
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mechanical Keyboard</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Tactile typing experience for professionals.</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$149.00</span>
                                        <button className="flex items-center gap-2 text-sm font-medium text-[#135bec] hover:text-blue-700">
                                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 (Middle) */}
                            <div className="absolute w-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] z-20 top-0 left-1/2 -translate-x-[47%] translate-y-[40px] scale-95 opacity-85 [filter:brightness(0.95)] group-hover:-translate-x-[35%] group-hover:translate-y-[40px] group-hover:rotate-[3deg] group-hover:scale-95 group-hover:opacity-100 group-hover:[filter:brightness(1)]">
                                <div className="relative h-48 bg-slate-100 dark:bg-slate-900 group/card overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover/card:scale-105"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCl9B5PmiIHpngKK9U1cDKs_S3AcYbN7efFsMejx0Quwcsu7k8vajRljxgVhL29HyoN-TThJhfO5KFdQsitbnUIdUBD7WiNAEuPMRFttPdyfbukkYGqRQPK9x8WmwlEBNVbAVTNsOobyDuJb0nIVruou6sEMKsz8m0FKvS7mCFoYu42mdPFKYKCmr1C65mKaYqxMxBoz_CUDrnZo18VCOh3qcC4lXHNMCVs9B0EsKXQYXekpQyW1ew2gYd5WCbr36MKX2nwNW4CiVg")' }}
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 dark:text-white shadow-sm">
                                        Best Seller
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Smart Watch Series 5</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Track your fitness and stay connected.</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-slate-100 dark:border-slate-700">
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">$399.00</span>
                                        <button className="flex items-center gap-2 text-sm font-medium text-[#135bec] hover:text-blue-700">
                                            View Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card 1 (Top/Front) */}
                            <div className="absolute w-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100 dark:border-slate-700 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] z-30 top-0 left-1/2 -translate-x-1/2 translate-y-0 scale-100 opacity-100">
                                <div className="relative h-64 bg-slate-100 dark:bg-slate-900 group/card overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover/card:scale-105"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuHDZQ0KgMUn6ynLghJ0x6tcj8hBpvvm4LWSxAkQf8e0wnGfeq3eQMyYQVx5UYlGU8P7lDydgSVhvafYUR05G9TxgaCcZoYVVp_lJYO9unD3W7LGqt-k0mlgy6Mvwm9wGyPJP2VH4Y4ZqtBjePgLORnQVN2dYsxiDqsmrxErwuyWk0THi6zi75pFyYUswZxEINkA_FU6A1CKKD5zodjWS2jH1MDDADonNNkcCtqv-_sOTeXaKchCak4gTLOmEQIAapHNvmp7ANpM8")' }}
                                    />
                                    <div className="absolute top-4 left-4 bg-[#135bec] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-blue-500/30">
                                        Featured
                                    </div>
                                    <button className="absolute bottom-4 right-4 size-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur hover:bg-white dark:hover:bg-slate-800 rounded-full flex items-center justify-center text-slate-900 dark:text-white shadow-lg transition-all hover:scale-110">
                                        <span className="material-symbols-outlined">favorite</span>
                                    </button>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex text-yellow-400 text-xs">
                                                <span className="material-symbols-outlined text-[16px]">star</span>
                                                <span className="material-symbols-outlined text-[16px]">star</span>
                                                <span className="material-symbols-outlined text-[16px]">star</span>
                                                <span className="material-symbols-outlined text-[16px]">star</span>
                                                <span className="material-symbols-outlined text-[16px]">star_half</span>
                                            </div>
                                            <span className="text-xs text-slate-400 font-medium">(1.2k Reviews)</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Premium Wireless Headphones</h3>
                                        <p className="text-base text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">Immersive sound with active noise cancellation and 30-hour battery life.</p>
                                    </div>
                                    <div className="flex items-end justify-between mt-2 pt-6 border-t border-slate-100 dark:border-slate-700">
                                        <div className="flex flex-col">
                                            <span className="text-sm text-slate-400 font-medium line-through">$349.00</span>
                                            <span className="text-3xl font-bold text-slate-900 dark:text-white">$299.00</span>
                                        </div>
                                        <button className="flex h-12 px-6 cursor-pointer items-center justify-center rounded-lg bg-[#135bec] hover:bg-blue-700 text-white text-sm font-bold leading-normal shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background blur for the stack */}
                            <div className="absolute top-[20%] left-[20%] right-[20%] bottom-0 bg-[#135bec]/20 blur-[60px] -z-10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10">
                <div className="container mx-auto px-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                            <div className="size-6 text-[#135bec]">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold">LuxeTech</span>
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm">
                            © 2023 LuxeTech Inc. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            <a className="text-slate-400 hover:text-[#135bec] transition-colors" href="#">
                                <span className="sr-only">Twitter</span>
                                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>
                            <a className="text-slate-400 hover:text-[#135bec] transition-colors" href="#">
                                <span className="sr-only">Instagram</span>
                                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-3.196 8.42a3.196 3.196 0 116.392 0 3.196 3.196 0 01-6.392 0zm6.593-3.413a1.083 1.083 0 10-2.166 0 1.083 1.083 0 002.166 0z" fillRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
