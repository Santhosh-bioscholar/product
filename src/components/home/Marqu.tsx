"use client";
import { motion } from "framer-motion";

export function Marqu() {
  const images = [
    "s1.png","s2.png","s3.png","s4.png","s5.png",
    "s6.png","s7.png","s8.png","s9.png","s10.png",
    "s11.png","s12.png","s13.png","s14.png","s15.png",
    "s16.png","s17.png"
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
