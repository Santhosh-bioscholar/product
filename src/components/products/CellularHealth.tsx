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
                {/* <section className="relative  flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-16">
                        <div className="flex flex-col gap-8 z-10">
                       
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
                            
                           <div className="flex flex-wrap gap-3">
  
 
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Leaf className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Non-GMO</span>
  </div>

  
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <FlaskConical className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Clinical Strength</span>
  </div>

 
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Zap className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Bio-Available</span>
  </div>

</div>

                             
                        </div>
                     
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
                </section> */}

                {/* Feature Section */}
               <section className=" py-36 px-6 ">
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
 {/* <section className="relative flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-1">
                       
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
                          
                           <div className="flex flex-wrap gap-3">
  
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Leaf className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Rapid Absorption</span>
  </div>

 
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <FlaskConical className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Micronized Delivery</span>
  </div>


  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Zap className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">High Performance</span>
  </div>

</div>

                             
                        </div>
                    </div>
                </section> */}


 {/* <section className="relative flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-1">
                      
                       
                        <div className="flex flex-col gap-8 z-10">
                           
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
                           
                           <div className="flex flex-wrap gap-3">
  
  
  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <Leaf className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Bloat Reduction</span>
  </div>


  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2">
    <FlaskConical className="w-4 h-4 text-[#53d22d]" />
    <span className="text-sm font-medium">Immune Response</span>
  </div>

  
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
                </section> */}

{/* ------------------------------------------------------------------------------------------------------------------------------- */}


<section className="relative  mx-auto flex max-w-[1440px] flex-col items-center px-4 ">
<div className="mirror-gradient absolute inset-0 -z-10"></div>
{/* <!-- Axis Layout Container --> */}
<div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-0">
{/* <!-- Left Column: Heart Health --> */}
<div className="flex flex-col gap-8 text-right lg:pr-16 order-2 lg:order-1">
<div className="flex flex-col gap-3">
 
<h2 className="text-3xl font-black tracking-tight @[480px]:text-4xl glow-text"> The Future of <span className="text-[#53d22d]">Digestive </span> Wellness</h2>
<p className="text-slate-400 text-lg leading-relaxed">Experience the clinical advantage of our targeted microbiome support, engineered for maximum nutrient absorption.</p>
</div>
<div className="space-y-6">
<div className="rounded-xl border border-white/5  p-6 hover:border-primary/50 transition-colors">
<h3 className="text-white font-bold mb-2">Arterial Integrity</h3>
{/* <p className="text-sm text-slate-400">Maintains structural elasticity of the vascular system for peak flow dynamics.</p> */}
</div>
<div className="rounded-xl border border-white/5  p-6 hover:border-primary/50 transition-colors">
<h3 className="text-white font-bold mb-2">ATP Production</h3>
{/* <p className="text-sm text-slate-400">Fuels cellular energy at the mitochondrial level for sustained cardiac endurance.</p> */}
</div>
</div>

</div>
{/* <!-- Center Axis: The Product --> */}
<div className="relative flex flex-col items-center justify-center order-1 lg:order-2">
<div className="absolute -inset-10  blur-[80px] rounded-full"></div>
<div className="relative z-10 flex flex-col items-center">
{/* <!-- Product Placeholder --> */}
<div className="relative h-[400px] w-[240px] lg:h-[500px] lg:w-[300px] transition-transform duration-700 hover:scale-105">
<img className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(37,106,244,0.4)]"
 data-alt="A sleek futuristic supplement bottle with neon blue accents" 
 src="/c0503734-5a22-4a73-8efb-11327f6d4f9e_removalai_preview.png"/>
</div>

</div>
</div>
{/* <!-- Right Column: Gut-Liver Health --> */}
<div className="flex flex-col gap-8 text-left lg:pl-16 order-3">
<div className="flex flex-col gap-3">

<h2 className="text-3xl font-black tracking-tight @[480px]:text-4xl glow-text">  Faster <span className="text-[#53d22d]">Muscle </span> Recovery</h2>
<p className="text-slate-400 text-lg leading-relaxed"> Optimize your protein utilization with advanced nutrient-delivery technology designed for elite performance. Fuel the grind.</p>
</div>
<div className="space-y-6">
<div className="rounded-xl  border border-white/5 bg-white/5 p-6 hover:border-primary/50 transition-colors">
<h3 className="text-white font-bold mb-2">Rapid Absorption</h3>
{/* <p className="text-sm text-slate-400">Optimizes nutrient absorption by stabilizing the internal bacterial ecosystem.</p> */}
</div>

<div className="rounded-xl border border-white/5 bg-white/5 p-6 hover:border-primary/50 transition-colors">
<h3 className="text-white font-bold mb-2">Micronized Delivery</h3>
{/* <p className="text-sm text-slate-400">Targets liver enzyme pathways for efficient systemic waste processing.</p> */}
</div>
</div>
{/* <button className="mr-auto ml-0 flex items-center justify-center gap-2 rounded-lg border border-primary/50 bg-primary/10 px-8 py-3 text-sm font-bold tracking-widest hover:bg-primary/20 transition-all uppercase">
                            Explore Gut-Liver
                        </button> */}
</div>
</div>
</section>

{/* ------------------------------------------------------------------------------------------------------------------------------- */}


<section className="relative min-h-screen flex items-center px-6 overflow-hidden ">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-1">
                        {/* Abstract Visual */}
                        <div className="relative hidden lg:block w-[550px] ">
                            <div className="absolute inset-0  rounded-full"></div>
                           <div
  className="relative z-10 w-full aspect-square  overflow-hidden bg-center bg-cover group scale-x-[-]"
  style={{ backgroundImage: 'url("/63022a0b-e1ed-4e1e-a9fa-9e9ff1cfa10a-Picsart-AiImageEnhancer.png")' }}
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
