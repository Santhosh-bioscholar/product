"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const Japanese = () => {
    const sectionRef = useRef<HTMLElement>(null);
      const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
      const prefersReducedMotion = useReducedMotion();
      const reducedMotion = prefersReducedMotion ?? false;
  return (
    <section className="w-full max-w-fu px-6   mx-auto container ">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
              <div className="relative aspect-[7/5] rounded-2xl overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10" />
      
                <div
                  className="w-full h-full bg-center bg-cover"
                  aria-label="Traditional Japanese fermentation pottery in a dark cellar"
                 style={{
          backgroundImage: "url('/jap.png')",
        }}
      />
               
      <div className="absolute bottom-8 left-8 z-20 bg-black/40 backdrop-blur-md px-4 py-3 rounded-lg">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-1">
          Heritage Phase
        </p>
        <h3 className="text-2xl font-bold">Traditional Roots</h3>
      </div>
      
              </div>
              {/* Right image */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase">
            <span className="w-10 h-[1px] bg-primary" />
            Evolution in every cell
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight ext-transparent bg-clip-text bg-gradient-to-r from-[#0FA57D] to-[#0AB3A3]">
            The 1000-Year <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0FA57D] to-[#0AB3A3]">Evolution</span>
          </h1>
       

          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Bridging the gap between ancient Japanese fermentation mastery and
            the frontier of modern algal biotechnology. A century of wisdom,
            condensed into a single molecule.
          </p>

          <div className="flex items-center gap-6 pt-4">
            {/* <button className="bg-primary text-black px-8 py-4 rounded-lg font-bold flex items-center gap-2 group transition-all">
              Explore the Narrative
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
              </span>
              </button> */}
          </div>
        </div>

      </div>
      <div>
{/* <div className="py-26 text-center">
  
          <h2 className="text-2xl lg:text-4xl font-semibold text-foreground mb-4">
            Fermbiôtic{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Returns
            </span>
          </h2>
</div>     */}
 <div className="relative">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-transparent to-[#131313]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/10 via-transparent to-[#131313]/80"></div>  */}
              {/* <img src="/Desktop - 49 (2).png" alt="" className="w-full h-full" /> */}
           

</div>
      </div>
    </section>
  );
};

export default Japanese;
