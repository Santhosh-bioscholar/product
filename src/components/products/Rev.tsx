"use client";
import React, { useEffect, useState } from "react";

const Rev = () => {
  const [index, setIndex] = useState(0);

  const TOTAL_CARDS = 6;   // total cards you have
  const VISIBLE = 3;       // cards visible at once

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + 1 > TOTAL_CARDS - VISIBLE ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300">
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w- mx-auto">

        {/* HEADER — unchanged */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8DBE6D]/10 text-[#2D5A43] border border-[#8DBE6D]/20 mb-6">
            <span className="material-symbols-rounded text-sm">auto_awesome</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Our Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D5A43] leading-[1.1] max-w-4xl mx-auto">
            Trusted by families, loved for flavor, remembered for quality
          </h2>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / VISIBLE)}%)`,
            }}
          >
            {/* CARD 1 */}
            <div className="w-full lg:w-1/3  px-4 shrink-0">
              {/* card 1 UI — unchanged */}
                <div className="relative pt-8">
            <div className="absolute -top-4 left-8 z-10 w-16 h-16 bg-[#8DBE6D] dark:bg-[#2D5A43] rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-rounded text-4xl">format_quote</span>
            </div>
            <div className="bg-[#F2F7F2] dark:bg-[#1A2E24] p-8 rounded-3xl h-full flex flex-col justify-between border border-transparent hover:border-[#8DBE6D]/30 transition-all duration-300 group scale-105 shadow-xl shadow-[#8DBE6D]/5">
              <div>
                <div className="flex gap-1 mb-6 mt-4">
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                </div>
                <p className="text-[#2D5A43]/80 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "The flavor of these organic pulses is exceptional. As a shopkeeper, I only stock products that my customers would love, and this brand is always flying off the shelves."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-[#2D5A43]/10 dark:border-white/10">
                <img alt="Esther Howard avatar" className="w-14 h-14 rounded-full object-cover border-2 border-[#8DBE6D]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHep7OkZrMcq0WzRSf5xG_g8Wa8bpbM5TiWYPaRRwyAgwyC9Vl4ZbuvDCjl3PVMt641Xenty306fX5Y9FdIdnLiMu4EMdpPkwfCwdPm5M-winVZ1WGGu0hugfTr5cORq4E1FR-RVhmLD5avya1n2cILrtKxOtLNn-np6vnTuSLl092f5QcULZEMZew0IDTjVBT689whIibuU1lhHSthGjKocXkjuM96zNVJbxKTocDkcSP1ScJN6ZWRfnD_EAoY3upEIpGL6o9gc" />
                <div>
                  <h4 className="font-bold text-[#2D5A43] dark:text-white text-lg">Esther Howard</h4>
                  <p className="text-[#2D5A43]/60 dark:text-gray-400 text-sm">Shopkeeper</p>
                </div>
              </div>
            </div>
          </div>
            </div>

            {/* CARD 2 */}
            <div className="w-full lg:w-1/3 px-4 shrink-0">
              {/* card 2 UI */}
                <div className="relative pt-8">
            <div className="absolute -top-4 left-8 z-10 w-16 h-16 bg-[#8DBE6D] dark:bg-[#2D5A43] rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-rounded text-4xl">format_quote</span>
            </div>
            <div className="bg-[#F2F7F2] dark:bg-[#1A2E24] p-8 rounded-3xl h-full flex flex-col justify-between border border-transparent hover:border-[#8DBE6D]/30 transition-all duration-300 group scale-105 shadow-xl shadow-[#8DBE6D]/5">
              <div>
                <div className="flex gap-1 mb-6 mt-4">
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                </div>
                <p className="text-[#2D5A43]/80 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "The flavor of these organic pulses is exceptional. As a shopkeeper, I only stock products that my customers would love, and this brand is always flying off the shelves."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-[#2D5A43]/10 dark:border-white/10">
                <img alt="Esther Howard avatar" className="w-14 h-14 rounded-full object-cover border-2 border-[#8DBE6D]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHep7OkZrMcq0WzRSf5xG_g8Wa8bpbM5TiWYPaRRwyAgwyC9Vl4ZbuvDCjl3PVMt641Xenty306fX5Y9FdIdnLiMu4EMdpPkwfCwdPm5M-winVZ1WGGu0hugfTr5cORq4E1FR-RVhmLD5avya1n2cILrtKxOtLNn-np6vnTuSLl092f5QcULZEMZew0IDTjVBT689whIibuU1lhHSthGjKocXkjuM96zNVJbxKTocDkcSP1ScJN6ZWRfnD_EAoY3upEIpGL6o9gc" />
                <div>
                  <h4 className="font-bold text-[#2D5A43] dark:text-white text-lg">Esther Howard</h4>
                  <p className="text-[#2D5A43]/60 dark:text-gray-400 text-sm">Shopkeeper</p>
                </div>
              </div>
            </div>
          </div>
            </div>

            {/* CARD 3 */}
            <div className="w-full lg:w-1/3 px-4 shrink-0">
              {/* card 3 UI */}
                <div className="relative pt-8">
            <div className="absolute -top-4 left-8 z-10 w-16 h-16 bg-[#8DBE6D] dark:bg-[#2D5A43] rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-rounded text-4xl">format_quote</span>
            </div>
            <div className="bg-[#F2F7F2] dark:bg-[#1A2E24] p-8 rounded-3xl h-full flex flex-col justify-between border border-transparent hover:border-[#8DBE6D]/30 transition-all duration-300 group scale-105 shadow-xl shadow-[#8DBE6D]/5">
              <div>
                <div className="flex gap-1 mb-6 mt-4">
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                </div>
                <p className="text-[#2D5A43]/80 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "The flavor of these organic pulses is exceptional. As a shopkeeper, I only stock products that my customers would love, and this brand is always flying off the shelves."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-[#2D5A43]/10 dark:border-white/10">
                <img alt="Esther Howard avatar" className="w-14 h-14 rounded-full object-cover border-2 border-[#8DBE6D]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHep7OkZrMcq0WzRSf5xG_g8Wa8bpbM5TiWYPaRRwyAgwyC9Vl4ZbuvDCjl3PVMt641Xenty306fX5Y9FdIdnLiMu4EMdpPkwfCwdPm5M-winVZ1WGGu0hugfTr5cORq4E1FR-RVhmLD5avya1n2cILrtKxOtLNn-np6vnTuSLl092f5QcULZEMZew0IDTjVBT689whIibuU1lhHSthGjKocXkjuM96zNVJbxKTocDkcSP1ScJN6ZWRfnD_EAoY3upEIpGL6o9gc" />
                <div>
                  <h4 className="font-bold text-[#2D5A43] dark:text-white text-lg">Esther Howard</h4>
                  <p className="text-[#2D5A43]/60 dark:text-gray-400 text-sm">Shopkeeper</p>
                </div>
              </div>
            </div>
          </div>
            </div>

            {/* CARD 4 */}
            <div className="w-full lg:w-1/3 px-4 shrink-0">
              {/* card 4 UI */}
                <div className="relative pt-8">
            <div className="absolute -top-4 left-8 z-10 w-16 h-16 bg-[#8DBE6D] dark:bg-[#2D5A43] rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-rounded text-4xl">format_quote</span>
            </div>
            <div className="bg-[#F2F7F2] dark:bg-[#1A2E24] p-8 rounded-3xl h-full flex flex-col justify-between border border-transparent hover:border-[#8DBE6D]/30 transition-all duration-300 group scale-105 shadow-xl shadow-[#8DBE6D]/5">
              <div>
                <div className="flex gap-1 mb-6 mt-4">
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                  <span className="material-symbols-rounded text-[#2D5A43] dark:text-[#8DBE6D]">star</span>
                </div>
                <p className="text-[#2D5A43]/80 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                  "The flavor of these organic pulses is exceptional. As a shopkeeper, I only stock products that my customers would love, and this brand is always flying off the shelves."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-[#2D5A43]/10 dark:border-white/10">
                <img alt="Esther Howard avatar" className="w-14 h-14 rounded-full object-cover border-2 border-[#8DBE6D]/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALHep7OkZrMcq0WzRSf5xG_g8Wa8bpbM5TiWYPaRRwyAgwyC9Vl4ZbuvDCjl3PVMt641Xenty306fX5Y9FdIdnLiMu4EMdpPkwfCwdPm5M-winVZ1WGGu0hugfTr5cORq4E1FR-RVhmLD5avya1n2cILrtKxOtLNn-np6vnTuSLl092f5QcULZEMZew0IDTjVBT689whIibuU1lhHSthGjKocXkjuM96zNVJbxKTocDkcSP1ScJN6ZWRfnD_EAoY3upEIpGL6o9gc" />
                <div>
                  <h4 className="font-bold text-[#2D5A43] dark:text-white text-lg">Esther Howard</h4>
                  <p className="text-[#2D5A43]/60 dark:text-gray-400 text-sm">Shopkeeper</p>
                </div>
              </div>
            </div>
          </div>
            </div>

            {/* CARD 5 */}
            <div className="w-full lg:w-1/3 px-4 shrink-0">
              {/* card 5 UI */}
            </div>

            {/* CARD 6 */}
            <div className="w-full lg:w-1/3 px-4 shrink-0">
              {/* card 6 UI */}
            </div>
          </div>
        </div>

      </section>
    </section>
  );
};

export default Rev;

      
