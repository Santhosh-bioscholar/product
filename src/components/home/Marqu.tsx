"use client";
import { motion } from "framer-motion";



export function Marqu() {
  const images = ["b1.png", "b2.png", "b3.png", "b4.png", "b5.png"];

  return (
    <section className=" relative container mx-auto w-full overflow-hidden bg-background py-10">
      
       <div className="absolute inset-y-0 left-0 w-25 bg-gradient-to-r from-[#131313] via-[#131313] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#131313] via-[#131313] to-transparent z-10"></div>

<div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0 "
        >
          {images.map((img, index) => (
            <div key={index} className="flex border  rounded-xl flex-col items-center justify-center mx-8 w-[200px]">
              <img src={img} alt={`brand-${index}`} className="max-w-full h-auto object-contain" />
            </div>
          ))}
        </motion.div>
{/* border-[#6AEBD6]  */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0"
        >
          {images.map((img, index) => (
            <div key={`dup-${index}`} className="flex border   rounded-xl flex-col items-center justify-center mx-8 w-[200px]">
              <img src={img} alt={`brand-dup-${index}`} className="max-w-full h-auto object-contain" />
            <p></p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

