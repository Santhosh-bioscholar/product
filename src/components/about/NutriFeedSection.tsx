"use client";

import React from "react";
import { motion } from "framer-motion";

export const NutriFeedSection: React.FC = () => {
    return (
        <section className="bg-background-light dark:bg-background-dark font-display flex flex-col overflow-x-hidden">
            {/* Hero Content Placeholder */}
            <main className="flex-grow pt-20">
                <div className="relative w-full h-[600px] flex items-center justify-center bg-background-dark overflow-hidden">
                    {/* Abstract Background Pattern */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: "radial-gradient(#2e4328 1px, transparent 1px)",
                            backgroundSize: "32px 32px"
                        }}
                    >
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark"></div>
                    <div className="relative z-10 max-w-[800px] mx-auto text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6"
                        >
                            <span className="material-symbols-outlined !text-sm">leaf_spark</span>
                            Sustainable Nutrition for a Better Future
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
                        >
                            Nourishing <span className="text-primary">Life</span> <br />
                            <span className="text-white/50">Through Science</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-[#a2c398] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
                        >
                            Leading the way in advanced animal nutrition and premium human supplements.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <button className="h-12 px-8 rounded-full bg-primary text-background-dark font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(83,210,45,0.2)] w-full sm:w-auto">
                                Explore Products
                            </button>
                            <button className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
                                Our Research
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Featured Section to add context */}
                <section className="py-20 px-6 max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Animal Feed Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <img
                                alt="Cattle grazing in a misty green field at sunrise"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFDF9CUuKRvbgZBNMxiB1ms_WmEKdH1ltdk6G9MRkgGJeKt8yLslwnGvJdHTYkV3CFRE_tp1YL3NZK_vjWjKGYDJN0PV0MHgS7PejdvHqzMOWOnw0MoIZNZ8bYbeGonGsPf4HqhdqcXrAerl7ccGezY45zJrlJKHMHJEBxwM0B1NugvJMrJacwSt3v1Z9fJcAbYgFOE8z-eI3Zc5HHMmoPywEBJw_mLpG8g5XpaiZLSGSvAqA3CXKwBkZmj2b73sKcMfDzDsDl73Q"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Animal Feed</p>
                                <h3 className="text-3xl font-bold text-white mb-2">Livestock Solutions</h3>
                                <p className="text-white/70 mb-4 line-clamp-2">Optimized nutrition plans for ruminants and poultry to ensure healthy growth.</p>
                                <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    Learn more <span className="material-symbols-outlined">arrow_forward</span>
                                </span>
                            </div>
                        </motion.div>

                        {/* Supplements Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
                        >
                            <img
                                alt="Scientific glassware with green liquid and leaf on lab table"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm3OkulxtN9gK0gWZGxIsFHaS297TzbCVNsiXi2-GAMnK2yWolu1eYdutj2z_kHpMBseKM7F51hrpwuSTOzZS0K6j4BUYyeZXp1hp6hoOVU6sMBsezk4TjaK0jxsx2WcAAYccuT9ynv-COi0j0AMRh0ooKNkq-KfD2o9MKPQxXzLl1IVb4g5CBJ94vqqT1uvTNAhfXVB9t3j_QjawP-KtDrZye8X_Gr5wjrpPPuLQWRSiqiPz5cRbl2vfpPxo27DLTfDbAEv6Ml3I"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Supplements</p>
                                <h3 className="text-3xl font-bold text-white mb-2">Human Health</h3>
                                <p className="text-white/70 mb-4 line-clamp-2">Premium vitamins, minerals, and extracts designed for optimal human performance.</p>
                                <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    Learn more <span className="material-symbols-outlined">arrow_forward</span>
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </section>
    );
};
