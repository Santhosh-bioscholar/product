"use client";

import { FadeIn } from "../animations/FadeIn";

export function OurPurpose() {
  return (
    <section className="py-24 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-xl space-y-8">
            <div className="inline-block px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-sm text-teal-400 font-medium">
              Our Purpose
            </div>

            <h1 className="text-4xl lg:text-2xl xl:text-3xl font-bold leading-tight">
              Scaling Nature's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Wisdom
              </span>
            </h1>

            <p className="text-lg lg:text-[16px] text-slate-300 leading-relaxed">
              For billions of years, algae have been Earth's most efficient carbon transformers.
              At Aroora Biotech, we're learning from nature's blueprint to create sustainable
              solutions for tomorrow's challenges.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-400 mb-1">Natural Intelligence</h3>
                  <p className="text-slate-400">Ancient organisms teaching modern science</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧬</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-1">Purposeful Transformation</h3>
                  <p className="text-slate-400">Converting challenges into life-supporting systems</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">♻️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-1">Responsible Scaling</h3>
                  <p className="text-slate-400">Growing with nature, not against it</p>
                </div>
              </div>
            </div>

            {/* <div className="pt-6">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/25">
                Learn Our Story
              </button>
            </div> */}
          </div>
        </div>

        <FadeIn direction="left" delay={0.4}>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm p-8 flex items-center justify-center">
            {/* Abstract Mission Visualization */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(74,222,128,0.1),_transparent_70%)] animate-pulse" />
            <div className="grid grid-cols-2 gap-4 w-full h-full max-w-sm">
              <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10">
                <span className="text-4xl font-bold text-green-400 mb-2">10+</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider">Years Research</span>
              </div>
              <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10 mt-8">
                <span className="text-4xl font-bold text-blue-400 mb-2">50+</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider">Patents</span>
              </div>
              <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10 -mt-8">
                <span className="text-4xl font-bold text-teal-400 mb-2">100%</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider">Eco-Friendly</span>
              </div>
              <div className="bg-white/5 rounded-xl backdrop-blur-md p-6 flex flex-col justify-center items-center border border-white/10">
                <span className="text-4xl font-bold text-white mb-2">Global</span>
                <span className="text-xs uppercase text-gray-400 tracking-wider">Impact</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

