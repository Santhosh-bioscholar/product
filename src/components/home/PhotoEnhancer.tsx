'use client';

import "material-symbols";

import React from 'react';

export function PhotoEnhancer() {
    return (
        <div className="bg-[#f6f6f8] dark:bg-[#101622] min-h-screen flex flex-col overflow-x-hidden text-gray-900 dark:text-white">
            {/* Navbar */}
          

            <main className="flex-grow flex justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Info */}
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
                        {/* Breadcrumbs */}
                        <nav className="flex flex-wrap gap-2 text-sm">
                            <a className="text-gray-500 dark:text-[#92a4c9] hover:text-[#135bec] transition-colors" href="#">Home</a>
                            <span className="text-gray-500 dark:text-[#92a4c9] select-none">/</span>
                            <a className="text-gray-500 dark:text-[#92a4c9] hover:text-[#135bec] transition-colors" href="#">Products</a>
                            <span className="text-gray-500 dark:text-[#92a4c9] select-none">/</span>
                            <span className="text-gray-900 dark:text-white font-medium">Retouch Tool</span>
                        </nav>

                        {/* Header */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#135bec]/10 border border-[#135bec]/20 text-[#135bec] text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="material-symbols-outlined text-[16px]">new_releases</span>
                                v3.0 Released
                            </div>
                            <h1 className="text-gray-900 dark:text-white text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight mb-4">
                                Restore old photos in seconds with AI
                            </h1>
                            <p className="text-gray-600 dark:text-[#92a4c9] text-base sm:text-lg leading-relaxed">
                                Remove grain, sharpen details, and upscale resolution automatically. Our new AI engine processes images 2x faster without losing quality.
                            </p>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                            {[
                                { icon: 'speed', title: '2x Faster', desc: 'Real-time rendering' },
                                { icon: 'auto_awesome', title: 'AI Powered', desc: 'Neural engine core' },
                                { icon: 'hdr_strong', title: 'HDR Fix', desc: 'Color correction' },
                                { icon: 'cloud_upload', title: 'Cloud Sync', desc: 'Auto backup' }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] shadow-sm">
                                    <div className="size-10 rounded-full bg-[#135bec]/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-[#135bec] text-2xl">{feature.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-bold text-sm">{feature.title}</h3>
                                        <p className="text-gray-500 dark:text-[#92a4c9] text-xs mt-1">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pricing & CTA */}
                        <div className="flex flex-col gap-4 mt-2 pt-6 border-t border-gray-200 dark:border-[#232f48]">
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">$29.99</span>
                                <span className="text-gray-500 dark:text-[#92a4c9] text-sm mb-1.5">/ one-time purchase</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex-1 h-12 bg-[#135bec] hover:bg-[#135bec]/90 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#135bec]/20">
                                    <span className="material-symbols-outlined">shopping_cart</span>
                                    Buy License
                                </button>
                                <button className="h-12 px-6 border border-gray-300 dark:border-[#324467] hover:bg-gray-100 dark:hover:bg-[#232f48] text-gray-900 dark:text-white font-medium rounded-lg transition-colors">
                                    Try Demo
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 text-center sm:text-left">30-day money-back guarantee • No credit card required for trial</p>
                        </div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="lg:col-span-7 flex flex-col gap-6 w-full">
                        {/* Comparison Slider */}
                        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 select-none group border border-gray-800">
                            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 shadow-lg pointer-events-none">
                                Original
                            </div>
                            <div className="absolute top-4 right-4 z-20 bg-[#135bec]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 shadow-lg pointer-events-none">
                                Enhanced
                            </div>

                            <img
                                alt="Enhanced high definition portrait"
                                className="absolute inset-0 w-full h-full object-cover select-none"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS_SbKxdzhhkBtvluJB5B7P__0KWmF-g2LfVS-1NWm5Bdbxi9Czv1eh7gMPTU3DesoOYSoX_dAYf02U3s-hZqCB4BY6EKD9Wqk7CQuvETGCabOEYgjObqY5OuIYThghvA_XFp0J6re7tDHVfjtD4WxAJxBpL0GfhpS1mwX98zh6-bvjBxCd8ewMw8UeiCc-nbEMlHYw5nWsfWXApTZRZNMRq_MCgCKqmNNHsbT926FbtGZ9Gnv3miFZGaNLYbz3BWZdW7KNYF2TVw"
                            />

                            <div className="absolute top-0 left-0 bottom-0 w-1/2 overflow-hidden border-r-2 border-[#135bec] z-10">
                                <div className="relative w-[200%] h-full">
                                    <img
                                        alt="Original grainy portrait"
                                        className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-75 sepia-[.2] select-none"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuyLKXLD1zUO5ifyNTdqkbtYD3tPqP0TPXUimxR3iejZxI6xYSixSPPBudPVGMMq0JVwduo1cX2CSKDYI4VIDNJz0r_bD7k4XxqG43Dl5Trf1ZaJcDaftkAUU8x3ax4n1e7xHMYbh9ZXHcaUHBfIXC9xvgPnzEnb3vFrdfVs0_B9Qx26Bhz8Yg_BwQ4MGod5_4d5vRT3iP49a3mbiEBajA7pRPW-2EUAO6t7r643Aq5WUqKbB6rQYXyIGRzw-VQlD6-Tsiab_lyPQ"
                                    />
                                </div>
                                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-10 bg-[#135bec] rounded-full flex items-center justify-center shadow-xl cursor-ew-resize hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-white text-xl rotate-90">unfold_more</span>
                                </div>
                            </div>

                            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Examples</h3>
                                <button className="text-[#135bec] text-xs font-medium hover:underline">View Gallery</button>
                            </div>
                            <div className="grid grid-cols-4 gap-3 sm:gap-4">
                                <button className="group relative aspect-square rounded-lg overflow-hidden ring-2 ring-[#135bec] ring-offset-2 ring-offset-[#f6f6f8] dark:ring-offset-[#101622]">
                                    <img alt="Woman portrait" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1fA1nAtOxvGEpW1flCPhdK2O2u8qALtbbCsklUvpKN0EqXcNuOpgfSdVWrk84RqVzkH_kLu1Iu_IVBIj39D-L87fH6rJPSXP8ujd5UukrY353_j6LxaffvEZ4xr9mmqbKZiW_uMGv8c1-K8autva7cY_j67zV99BiyzF1UiSdzHmlJZ5-59Wq8AUJwt_exsb5xSxLxBbn4doDJMnLnL7dezNqZOQV3njf11rId2MR2IvCpBhmI8dx5hQj3JlzHTk1552kF-gyGiA" />
                                </button>
                                <button className="group relative aspect-square rounded-lg overflow-hidden border border-transparent hover:border-[#135bec]/50 transition-all opacity-70 hover:opacity-100">
                                    <img alt="Vintage car" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjvPMAyJcTZFVyQc2T7tMp3cMts9O3lCuMs2_kCU8k60xpsuMwQoIC6x87pssPdUgKskOmBRGNmYF4hikw9Dl4npJnSBxzF-fxYbbP0Ew-zeCAOZ-lWOcMo394eQrnWN5PczQiqUrzRPVuhaRg96eP9aae_T5XSxdkMoXrdH_xUiS-Uf6gpmMHUfOvgaw6HKjaXahekZQ9_rULcYZSFaKvZbIvevREgllMyEm6kgQV7OkgpqIyQc80sKn2xRC7h6fXXI3K-Pui3iA" />
                                </button>
                                <button className="group relative aspect-square rounded-lg overflow-hidden border border-transparent hover:border-[#135bec]/50 transition-all opacity-70 hover:opacity-100">
                                    <img alt="Mountain landscape" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKL-QiqVfTFp46Pfd8pfrEvr1eElUTcwsAp6R3YfvRCf9FUZg1rE9iYt-aKcWihP1SUiBbKH_MRRmDHI7v1WD6R3wVaJCTe-dYfdtLeFCeFK7UFK8N24l40W84CZqrkppwru3CIK-BbKRRMR9Dhp6qCp4G-Gej0sy5mZ6YeJ97h-AZz71In3hneR8PMj4iveyG58sEtSitokeB9sTgtOsvaqQKTEQ5FPTDOkKaNusHwoFXTOdL0EaDNtj__22XYTZSPI2tU7GFhlA" />
                                </button>
                                <button className="group relative aspect-square rounded-lg overflow-hidden border border-transparent hover:border-[#135bec]/50 transition-all opacity-70 hover:opacity-100">
                                    <div className="w-full h-full bg-[#192233] flex items-center justify-center">
                                        <span className="material-symbols-outlined text-gray-500">add_photo_alternate</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="mt-4 p-4 rounded-xl bg-[#192233]/50 border border-gray-200 dark:border-[#232f48] flex items-start gap-3">
                            <div className="size-8 rounded-full overflow-hidden bg-gray-600 shrink-0">
                                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxFQf3mshaFLZttcWT_AR8d7Yh3L7saIOcXLUhs_3aUfNHJVPdSGlog9tPC-y7BdBE4LcwRXgbwvj6KyjB_g6TFzyuAFPKNCiBCsHGSEUxZx0d-jLkxfH_J9VzwAk7PlcnRP_757CzF4nAptALhSgxGegjU03e-JtXuPDnVLz0uv5_84-Hr_mPdWAiX6duTMhfy8FSOqe_FYE0LG3jbPeiSvjpHF5o1nC1HNgfl8cKS2ZINco0KkcuTTaxgwjLNdMTXRLlfLWAfu0" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Alex M.</span>
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="material-symbols-outlined text-[14px]">star</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600 dark:text-[#92a4c9] leading-normal">"I restored my grandmother's wedding photos from 1950. The detail recovery on the lace dress was incredible. Highly recommended!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
