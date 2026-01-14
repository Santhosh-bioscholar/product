import React from 'react';

const NeonBounceBanner = () => {
    return (
        <section className="relative w-full overflow-hidden  font-display text-[#111518] dark:text-white transition-colors duration-300">
            {/* Animated Water Ripple Backdrop */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute border-2 border-[#1392ec]/20 rounded-full animate-ripple w-[400px] h-[400px] top-[10%] left-[20%]"></div>
                <div className="absolute border-2 border-[#1392ec]/20 rounded-full animate-ripple w-[600px] h-[600px] top-[40%] right-[10%] [animation-delay:1s]"></div>
                <div className="absolute border-2 border-[#1392ec]/20 rounded-full animate-ripple w-[300px] h-[300px] bottom-[10%] left-[50%] [animation-delay:2s]"></div>
            </div>

            <div className="layout-content-container flex flex-col max-w-[1200px] w-full z-10 mx-auto">
                <div className="@container">
                    <div className="flex flex-col gap-12 px-4 py-16 lg:flex-row lg:items-center">
                        {/* Product Visual Stage (Left) */}
                        <div className="relative w-full lg:w-1/2 flex justify-center">
                            {/* Background Glow */}
                            <div className="absolute w-64 h-64 bg-[#1392ec]/20 rounded-full blur-3xl animate-pulse"></div>
                            {/* Supplement Bag Image */}
                            <div
                                className="relative z-10 w-full max-w-[420px] aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl transform transition-transform duration-700 hover:rotate-2 group"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6G-5b5nA4syJCPPyL8IbFw1dGr7W9RUD6valk5kVsHqRAHg7w_cByDms1ZpwspRrrRbeNKPkNcyaA3DIMIIqHXvq4yyFiVxASuJPumm5zO3wPVyXKaU_QG62A87jfp56ZC5aUxQiYlxLBGYTRfCzy1pB09LJTJfa4z3AKjG6A36WU0w8g3al2R6yZ3KRSCw4hX7dZ6r06bQxKSu_stFQxwu3Qt25SnSN68VIyKgKhyDgvSR8CGGzuitO5gNMPNq4knBuHRO62c_O6")' }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                            </div>
                        </div>

                        {/* Content & Nutrient Rings (Right) */}
                        <div className="flex flex-col gap-10 lg:w-1/2">
                            <div className="flex flex-col gap-4">
                                <span className="text-[#1392ec] font-bold tracking-[0.2em] text-xs uppercase">Aquatic Performance Tier</span>
                                <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight dark:text-white text-[#111518]">
                                    Leap into <span className="text-[#1392ec]">Superior</span> Nutrition
                                </h1>
                                <p className="text-base sm:text-lg text-[#617989] dark:text-gray-400 max-w-lg">
                                    High-energy shrimp supplement formulated for maximum growth and shell strength.
                                    Experience the neon bounce in every batch.
                                </p>
                            </div>

                            {/* Nutrient Rings Matrix */}
                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                                {/* Ring 1 */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-20 h-20 rounded-full border-4 border-[#1392ec] shadow-[0_0_15px_rgba(19,146,236,0.4),inset_0_0_10px_rgba(19,146,236,0.2)] flex items-center justify-center bg-white dark:bg-[#101a22] transform transition-all hover:scale-110">
                                        <span className="text-[#1392ec] font-bold text-sm">45%</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#111518] dark:text-white">Protein</p>
                                        <p className="text-[10px] text-gray-500">Growth</p>
                                    </div>
                                </div>
                                {/* Ring 2 */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-20 h-20 rounded-full border-4 border-[#1392ec]/60 shadow-[0_0_15px_rgba(19,146,236,0.4),inset_0_0_10px_rgba(19,146,236,0.2)] flex items-center justify-center bg-white dark:bg-[#101a22] transform transition-all hover:scale-110">
                                        <span className="material-symbols-outlined text-[#1392ec] text-2xl">shield</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#111518] dark:text-white">Immunity</p>
                                        <p className="text-[10px] text-gray-500">Shield</p>
                                    </div>
                                </div>
                                {/* Ring 3 */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-20 h-20 rounded-full border-4 border-[#1392ec]/40 shadow-[0_0_15px_rgba(19,146,236,0.4),inset_0_0_10px_rgba(19,146,236,0.2)] flex items-center justify-center bg-white dark:bg-[#101a22] transform transition-all hover:scale-110">
                                        <span className="material-symbols-outlined text-[#1392ec] text-2xl">diamond</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#111518] dark:text-white">Minerals</p>
                                        <p className="text-[10px] text-gray-500">Shell</p>
                                    </div>
                                </div>
                                {/* Ring 4 */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-20 h-20 rounded-full border-4 border-[#1392ec]/20 shadow-[0_0_15px_rgba(19,146,236,0.4),inset_0_0_10px_rgba(19,146,236,0.2)] flex items-center justify-center bg-white dark:bg-[#101a22] transform transition-all hover:scale-110">
                                        <span className="material-symbols-outlined text-[#1392ec] text-2xl">eco</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-wider text-[#111518] dark:text-white">Bio-Score</p>
                                        <p className="text-[10px] text-gray-500">Digestible</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default NeonBounceBanner;
