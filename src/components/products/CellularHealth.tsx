"use client";

import React from 'react';
import { Flame, ShieldCheck, Zap } from "lucide-react";
import { Leaf, FlaskConical} from "lucide-react";
import { BadgeCheck } from "lucide-react";



const CellularHealth = () => {
    return (
        <div className=" text-slate-900 dark:text-white overflow-x-hidden">
            <main>
                {/* Hero Section */}
                <section className="relative  flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-16">
                        <div className="flex flex-col gap-8 z-10">
                            {/* Trust Indicator */}
                           <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-full">
  <BadgeCheck className="w-4 h-4 text-[#53d22d]" />
  <span className="text-xs font-bold uppercase tracking-widest text-[#53d22d]/90">
    Scientifically Proven Formula
  </span>
</div>

                            <div className="flex flex-col gap-6">
                                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                                    Revitalize Your Body at the <span className="text-[#53d22d]">Cellular Level</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                                    Advanced detoxification supplements formulated to cleanse, protect, and energize your system from the inside out. Bio-available science for peak performance.
                                </p>
                            </div>
                            {/* Chips Container */}
                           <div className="flex flex-wrap gap-3">
  
  {/* Non-GMO */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Leaf className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Non-GMO</span>
  </div>

  {/* Clinical Strength */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <FlaskConical className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Clinical Strength</span>
  </div>

  {/* Bio-Available */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Zap className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Bio-Available</span>
  </div>

</div>

                             
                        </div>
                        {/* Abstract Visual */}
                      <div className="relative hidden lg:block w-[500px] ">
                            <div className="absolute inset-0  rounded-full"></div>
                           <div
  className="relative z-10 w-full aspect-square  overflow-hidden bg-center bg-cover group scale-x-[-]"
  style={{ backgroundImage: 'url("/dna.png")' }}
>
<div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
<div className="absolute inset-y-0 left-0 w-[40px] bg-gradient-to-r from-[#131313] to-transparent" />
<div className="absolute inset-y-0 right-0 w-[60px] bg-gradient-to-l from-[#131313] to-transparent" /> 
<div className="absolute inset-x-0 top-0 h-[30px] bg-gradient-to-b from-[#131313] to-transparent" />
           

</div>

                        </div>
                    </div>
                </section>

                {/* Feature Section */}
               <section className="py-24 px-6 ">
  <div className="max-w-7xl mx-auto">
    
    <div className="flex flex-col gap-4 mb-16">
      <h2 className="text-3xl md:text-5xl font-black">
        Premium Detoxification
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl">
        Scientifically formulated for maximum efficacy and cellular protection using nature-inspired molecular science.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      
      {/* Card 1 */}
      <div className="group p-8 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-[#53d22d]/50 transition-all duration-300">
        <div className="size-14 rounded-full bg-[#53d22d]/10 flex items-center justify-center mb-6 group-hover:bg-[#53d22d] transition-colors">
          <Flame className="w-7 h-7 text-[#53d22d] group-hover:text-[#0a0a0a]" />
        </div>
        <h3 className="text-xl font-bold mb-3">Intracellular Cleanse</h3>
        <p className="text-slate-400 leading-relaxed">
          Deep cleansing at the molecular level to remove toxins and metabolic waste from within the cells.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group p-8 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-[#53d22d]/50 transition-all duration-300">
        <div className="size-14 rounded-full bg-[#53d22d]/10 flex items-center justify-center mb-6 group-hover:bg-[#53d22d] transition-colors">
          <ShieldCheck className="w-7 h-7 text-[#53d22d] group-hover:text-[#0a0a0a]" />
        </div>
        <h3 className="text-xl font-bold mb-3">DNA Protection</h3>
        <p className="text-slate-400 leading-relaxed">
          Strengthens cellular walls and protects genetic integrity against daily oxidative stress and free radicals.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group p-8 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-[#53d22d]/50 transition-all duration-300">
        <div className="size-14 rounded-full bg-[#53d22d]/10 flex items-center justify-center mb-6 group-hover:bg-[#53d22d] transition-colors">
          <Zap className="w-7 h-7 text-[#53d22d] group-hover:text-[#0a0a0a]" />
        </div>
        <h3 className="text-xl font-bold mb-3">Natural Energy Boost</h3>
        <p className="text-slate-400 leading-relaxed">
          Unlock sustainable vitality by optimizing mitochondrial function without the crash of artificial stimulants.
        </p>
      </div>

    </div>
  </div>
</section>
 <section className="relative flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-1">
                        {/* Abstract Visual */}
                        <div className="relative hidden lg:block w-[550px] ">
                            <div className="absolute inset-0  rounded-full"></div>
                           <div
  className="relative z-10 w-full aspect-square  overflow-hidden bg-center bg-cover group scale-x-[-]"
  style={{ backgroundImage: 'url("/mu.png")' }}
>
 <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
<div className="absolute inset-y-0 left-0 w-[70px] bg-gradient-to-r from-[#131313] to-transparent" />
<div className="absolute inset-y-0 right-0 w-[70px] bg-gradient-to-l from-[#131313] to-transparent" /> 
<div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-[#131313] to-transparent" />
           

</div>

                        </div>
                        <div className="flex flex-col gap-8 z-10">
                            {/* Trust Indicator */}
                           <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-full">
  <BadgeCheck className="w-4 h-4 text-[#53d22d]" />
  <span className="text-xs font-bold uppercase tracking-widest text-[#53d22d]/90">
  Science-Backed Recovery
  </span>
</div>

                            <div className="flex flex-col gap-6">
                                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                                    Faster <span className="text-[#53d22d]">Muscle </span> Recovery
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                              Optimize your protein utilization with advanced nutrient-delivery technology designed for elite performance. Fuel the grind. </p>
                            </div>
                            {/* Chips Container */}
                           <div className="flex flex-wrap gap-3">
  
  {/* Non-GMO */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Leaf className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Rapid Absorption</span>
  </div>

  {/* Clinical Strength */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <FlaskConical className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Micronized Delivery</span>
  </div>

  {/* Bio-Available */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Zap className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">High Performance</span>
  </div>

</div>

                             
                        </div>
                    </div>
                </section>


 <section className="relative flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-1">
                        {/* Abstract Visual */}
                       
                        <div className="flex flex-col gap-8 z-10">
                            {/* Trust Indicator */}
                           <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-full">
  <BadgeCheck className="w-4 h-4 text-[#53d22d]" />
  <span className="text-xs font-bold uppercase tracking-widest text-[#53d22d]/90">
 Clinically Formulated
  </span>
</div>

                            <div className="flex flex-col gap-6">
                                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                                    The Future of <span className="text-[#53d22d]">Digestive </span> Wellness
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">  Experience the clinical advantage of our targeted microbiome support, engineered for maximum nutrient absorption. </p>
                            </div>
                            {/* Chips Container */}
                           <div className="flex flex-wrap gap-3">
  
  {/* Non-GMO */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Leaf className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Bloat Reduction</span>
  </div>

  {/* Clinical Strength */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <FlaskConical className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Immune Response</span>
  </div>

  {/* Bio-Available */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Zap className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Natural Energy</span>
  </div>

</div>

                             
                        </div>
                         <div className="relative hidden lg:block w-[550px] ">
                            <div className="absolute inset-0  rounded-full"></div>
                           <div
  className="relative z-10 w-full aspect-square  overflow-hidden bg-center bg-cover group scale-x-[-]"
  style={{ backgroundImage: 'url("/mu.png")' }}
>
 <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
<div className="absolute inset-y-0 left-0 w-[70px] bg-gradient-to-r from-[#131313] to-transparent" />
<div className="absolute inset-y-0 right-0 w-[70px] bg-gradient-to-l from-[#131313] to-transparent" /> 
<div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-[#131313] to-transparent" />
           

</div>

                        </div>
                    </div>
                </section>


<section className="relative flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-1">
                        {/* Abstract Visual */}
                        <div className="relative hidden lg:block w-[550px] ">
                            <div className="absolute inset-0  rounded-full"></div>
                           <div
  className="relative z-10 w-full aspect-square  overflow-hidden bg-center bg-cover group scale-x-[-]"
  style={{ backgroundImage: 'url("/mu.png")' }}
>
 <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
<div className="absolute inset-y-0 left-0 w-[70px] bg-gradient-to-r from-[#131313] to-transparent" />
<div className="absolute inset-y-0 right-0 w-[70px] bg-gradient-to-l from-[#131313] to-transparent" /> 
<div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-[#131313] to-transparent" />
           

</div>

                        </div>
                        <div className="flex flex-col gap-8 z-10">
                            {/* Trust Indicator */}
                           <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-4 py-1.5 rounded-full">
  <BadgeCheck className="w-4 h-4 text-[#53d22d]" />
  <span className="text-xs font-bold uppercase tracking-widest text-[#53d22d]/90">
 Premium Bio-Hacking
  </span>
</div>

                            <div className="flex flex-col gap-6">
                                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
                                   Peak Performance, <span className="text-[#53d22d]">Naturally</span> 
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                           Sustained cellular energy that keeps you focused and resilient throughout the day. Designed for the modern professional who demands consistent performance.
                            </p>
                            </div>
                            {/* Chips Container */}
                           <div className="flex flex-wrap gap-3">
  
  {/* Non-GMO */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Leaf className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Rapid Absorption</span>
  </div>

  {/* Clinical Strength */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <FlaskConical className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Micronized Delivery</span>
  </div>

  {/* Bio-Available */}
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Zap className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">High Performance</span>
  </div>

</div>

                             
                        </div>
                    </div>
                </section>
                {/* Social Proof Section */}
           

                {/* Final CTA */}
             
            </main>
        </div>
    );
};

export default CellularHealth;
