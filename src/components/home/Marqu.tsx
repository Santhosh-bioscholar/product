"use client";
import { motion } from "framer-motion";

export function Marqu() {
  const images = [
    "s1-Picsart-AiImageEnhancer.png","s2-Picsart-AiImageEnhancer.png","s3-Picsart-AiImageEnhancer.png","s4-Picsart-AiImageEnhancer.png","s5-Picsart-AiImageEnhancer.png",
    "s6-Picsart-AiImageEnhancer.png","s7-Picsart-AiImageEnhancer.png","s8-Picsart-AiImageEnhancer.png","s9-Picsart-AiImageEnhancer.png","s10-Picsart-AiImageEnhancer.png",
    "s11-Picsart-AiImageEnhancer.png","s12-Picsart-AiImageEnhancer.png","s13-Picsart-AiImageEnhancer.png","s14-Picsart-AiImageEnhancer.png","s15-Picsart-AiImageEnhancer.png",
    "s16-Picsart-AiImageEnhancer.png","s17-Picsart-AiImageEnhancer.png"
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-10">
      
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#131313] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#131313] to-transparent z-10" />

      <motion.div
        className="flex min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="mx-8 w-[170px] flex items-center justify-center rounded-xl border"
          >
            <img
              src={img}
              alt={`brand-${index}`}
              className="max-w-full h-auto object-contain rounded-xl"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}