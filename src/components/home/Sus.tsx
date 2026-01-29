'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle, Leaf, FileCheck, Award } from "lucide-react";
import { Marqu } from "./Marqu";

const Sus = () => {
      const controls = useAnimation();
      const [showText, setShowText] = useState(false);
    
      const ref = useRef(null);
      const inView = useInView(ref, { once: true, amount: 0.4 });
    
      useEffect(() => {
        if (inView) {
          controls.start("animate");
        }
      }, [inView, controls]);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className="relative ">
            {/* Font imports are handled in layout.tsx */}
            <section className="font-['Plus_Jakarta_Sans']   text-slate-900 dark:text-slate-100 antialiased py-16 px-25"> {/* Added py-16 to replace min-h-screen centering for integration */}
                <div className="container max-w-8xl w-full mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                          
                            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                                  
                               <div className="relative w-[500px] h-[500px]">
  {/* SVG Background */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40"
    viewBox="0 0 400 400"
  >
    <circle
      className="text-[#2DD4BF]"
      cx="200"
      cy="200"
      r="140"
      fill="none"
      stroke="currentColor"
      strokeDasharray="8 8"
      strokeWidth="2"
    />
    <circle
      cx="200"
      cy="200"
      r="100"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="1"
      opacity="0.3"
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2DD4BF" />
        <stop offset="100%" stopColor="#D946EF" />
      </linearGradient>
    </defs>
  </svg>

  {/* Glow */}
  <motion.div
    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D44861]/20 via-[#B24D78]/20 to-[#8DC330]/20 blur-[60px]"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={controls}
    variants={{
      animate: { opacity: 1, scale: 1.2 },
    }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  />

  {/* Logo */}
  <motion.img
    src="/gradiend-color-logo.svg"
    alt="Logo"
    className="absolute inset-0 m-auto h-79 bottom-9"
    style={{ originX: 0.5, originY: 0.5 }}
    initial={{ scale: 0.6, rotate: 0 }}
    animate={controls}
    variants={{
      animate: { scale: 1, rotate: 360 },
    }}
    transition={{
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    }}
    onAnimationComplete={() => setShowText(true)}
  />
</div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flow-node flex-row gap-11 absolute -top-[-30px] left-[260px]  -translate-x-1/2 flex flex-col items-center group">
                                        <div className="w-16 h-16 rounded-full bg-[#DB5550] flex items-center justify-center shadow-lg glow-magenta z-10 transition-transform">
                                            <span className="material-icons-round text-white text-3xl">verified_user</span>
                                        </div>
                                       
                                    </div>
                                    <div className="flow-node absolute bottom-30 left-20 flex flex-col items-center group">
                                        <div className="w-16 h-16 rounded-full bg-[#97A343] flex items-center justify-center shadow-lg glow-teal z-10">
                                            <span className="material-icons-round text-white text-3xl">science</span>
                                        </div>
                                       
                                    </div>
                                    <div className="flow-node absolute bottom-30 right-0 flex flex-col items-center group">
                                        <div className="w-16 h-16 rounded-full bg-[#AF5672] flex items-center justify-center shadow-lg glow-teal z-10">
                                            <span className="material-icons-round text-white text-3xl">eco</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full ">
                            {/* <div className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/5">
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
                            </div> */}
                             <div className="lg:col-span-4  space-y-8 ">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/5">
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase text-teal-400">Future-Ready Pillars</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight">
                        Sustainable <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-sky-500 to-fuchsia-500">Lifecycle</span>
                    </h1>
                    <p className="text-lg text-slate-400  leading-relaxed">
                         We are committed to producing and marketing safe, high-quality products, with truthful, transparent, and non-misleading labeling and advertising.
                                </p>
                    <div className="pt-4 flex flex-col space-y-4 border-l border-slate-800 pl-6">
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <span className="text-sky-500 material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">verified</span>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Tested Raw Meterials</span>
                        </div>
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <span className="text-fuchsia-500 material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">eco</span>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Pure Natural Products</span>
                        </div>
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <span className="text-teal-400 material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">auto_awesome</span>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">Certificated Production</span>
                        </div>
                    </div>
                    
                </div>
                        </div>
                    </div>
                </div>

              
            </section>
        </div>
    );
};

export default Sus;
