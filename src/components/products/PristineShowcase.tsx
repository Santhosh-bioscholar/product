"use client";

import React from "react";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { ProductData } from "@/types/product";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});
interface HowItWorksSectionProps {
  product: ProductData;
}
export const PristineShowcase = ({ product }: HowItWorksSectionProps) => {
  return (
    <div className={`${playfair.variable} ${jakarta.variable} font-sans relative w-full overflow-hidden md:pb-20 md:pt-20`}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <style jsx global>{`
        .parallax-container {
            perspective: 1200px;
            transform-style: preserve-3d;
        }
        .floating-card {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(197, 160, 89, 0.2);
            padding: 1rem;
            border-radius: 0.75rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            transition: all 0.7s ease-out;
            transform-style: preserve-3d;
        }
        .floating-card:hover {
            border-color: rgba(197, 160, 89, 0.5);
            background-color: rgba(0, 0, 0, 0.6);
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(197, 160, 89, 0.2);
        }
        .depth-near { transform: translateZ(80px); }
        .depth-mid { transform: translateZ(40px); }
        .depth-far { transform: translateZ(-30px); }
        .glowing-dot {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 9999px;
            background-color: #C5A059;
            box-shadow: 0 0 10px #C5A059;
        }
        .text-primary-gold {
            color: #C5A059;
        }
        .border-primary-gold {
            border-color: #C5A059;
        }
        .bg-primary-gold {
            background-color: #C5A059;
        }
        .hover-bg-primary-gold:hover {
            background-color: #C5A059;
        }
        .font-display {
            font-family: var(--font-playfair), serif;
        }
        .font-sans-jakarta {
            font-family: var(--font-jakarta), sans-serif;
        }
      `}</style>

      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden parallax-container bg-[#060606] text-gray-100 antialiased">

        {/* Header Overlay */}


        {/* Content */}
        <div className="absolute inset-0 z-0">
          {/* Using img tag to avoid next/image domain config issues for this specific snippet */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`${product.name} background`}
            className="w-full h-full object-cover opacity-60 scale-110"
            src={product.pristineShowcase?.backgroundImage || "/unnamed.png"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313] via-transparent to-[#131313]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/80 via-transparent to-[#131313]/80"></div>
        </div>

        <div className="relative z-20 text-center max-w-4xl px-6 pointer-events-none">
          {/* <span className="text-primary-gold uppercase tracking-[0.8em] text-[10px] font-bold block mb-6 font-sans-jakarta">Marine Mastery</span> */}
          <h1 className="font-display text-6xl md:text-6xl lg:text-6xl text-white leading-none mb-8">
            <span className="italic font-light">{product.name} Benefits</span>
          </h1>
        </div>

        {/* Far Depth Cards (Indices 0, 1) */}
        {product.pristineShowcase?.cards[0] && (
          <div className="floating-card depth-far top-[15%] left-[5%] md:left-[10%] w-48 md:w-56 hidden md:block">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-gold/60 text-lg">{product.pristineShowcase.cards[0].icon}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold font-sans-jakarta text-white">
                {product.pristineShowcase.cards[0].title}
              </span>
            </div>
            <p className="text-[9px] text-gray-500 mt-2 leading-relaxed font-sans-jakarta">
              {product.pristineShowcase.cards[0].description}
            </p>
          </div>
        )}

        {product.pristineShowcase?.cards[1] && (
          <div className="floating-card depth-far bottom-[20%] right-[5%] md:right-[15%] w-44 md:w-52 hidden md:block">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-gold/60 text-lg">{product.pristineShowcase.cards[1].icon}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold font-sans-jakarta text-white">
                {product.pristineShowcase.cards[1].title}
              </span>
            </div>
            <p className="text-[9px] text-gray-500 mt-2 leading-relaxed font-sans-jakarta">
              {product.pristineShowcase.cards[1].description}
            </p>
          </div>
        )}

        {/* Mid Depth Cards (Indices 2, 3, 4) */}
        {product.pristineShowcase?.cards[2] && (
          <div className="floating-card depth-mid top-[25%] right-[5%] md:right-[20%] w-52 md:w-60 hidden sm:block">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-gold text-xl">{product.pristineShowcase.cards[2].icon}</span>
              <span className="text-[11px] uppercase tracking-widest font-bold font-sans-jakarta text-white">
                {product.pristineShowcase.cards[2].title}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-sans-jakarta">
              {product.pristineShowcase.cards[2].description}
            </p>
          </div>
        )}

        {product.pristineShowcase?.cards[3] && (
          <div className="floating-card depth-mid bottom-[10%] left-[5%] md:left-[20%] w-56 md:w-64 hidden sm:block">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-gold text-xl">{product.pristineShowcase.cards[3].icon}</span>
              <span className="text-[11px] uppercase tracking-widest font-bold font-sans-jakarta text-white">
                {product.pristineShowcase.cards[3].title}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-sans-jakarta">
              {product.pristineShowcase.cards[3].description}
            </p>
          </div>
        )}

        {product.pristineShowcase?.cards[4] && (
          <div className="floating-card depth-mid top-[45%] left-[2%] md:left-[5%] w-48 md:w-56 hidden md:block">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-gold text-xl">{product.pristineShowcase.cards[4].icon}</span>
              <span className="text-[11px] uppercase tracking-widest font-bold font-sans-jakarta text-white">
                {product.pristineShowcase.cards[4].title}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-sans-jakarta">
              {product.pristineShowcase.cards[4].description}
            </p>
          </div>
        )}

        {/* Near Depth Cards (Indices 5, 6, 7, 8) */}
        {product.pristineShowcase?.cards[5] && (
          <div className="floating-card depth-near top-[12%] right-[10%] md:right-[40%] w-56 md:w-64">
            <div className="flex items-center gap-4">
              <div className="glowing-dot"></div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white font-sans-jakarta">
                {product.pristineShowcase.cards[5].title}
              </span>
            </div>
            <p className="text-[11px] text-gray-300 mt-3 leading-relaxed font-sans-jakarta">
              {product.pristineShowcase.cards[5].description}
            </p>
          </div>
        )}

        {product.pristineShowcase?.cards[6] && (
          <div className="floating-card depth-near bottom-[35%] right-[5%] md:right-[8%] w-56 md:w-64">
            <div className="flex items-center gap-4">
              <div className="glowing-dot"></div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white font-sans-jakarta">
                {product.pristineShowcase.cards[6].title}
              </span>
            </div>
            <p className="text-[11px] text-gray-300 mt-3 leading-relaxed font-sans-jakarta">
              {product.pristineShowcase.cards[6].description}
            </p>
          </div>
        )}

        {product.pristineShowcase?.cards[7] && (
          <div className="floating-card depth-near bottom-[15%] right-[20%] md:right-[35%] w-52 md:w-60 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="glowing-dot"></div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white font-sans-jakarta">
                {product.pristineShowcase.cards[7].title}
              </span>
            </div>
            <p className="text-[11px] text-gray-300 mt-3 leading-relaxed font-sans-jakarta">
              {product.pristineShowcase.cards[7].description}
            </p>
          </div>
        )}

        {product.pristineShowcase?.cards[8] && (
          <div className="floating-card depth-near top-[60%] left-[8%] md:left-[12%] w-56 md:w-64">
            <div className="flex items-center gap-4">
              <div className="glowing-dot"></div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white font-sans-jakarta">
                {product.pristineShowcase.cards[8].title}
              </span>
            </div>
            <p className="text-[11px] text-gray-300 mt-3 leading-relaxed font-sans-jakarta">
              {product.pristineShowcase.cards[8].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
