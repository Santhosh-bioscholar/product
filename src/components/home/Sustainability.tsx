"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle, Leaf, FileCheck, Award } from "lucide-react";

export function Sustainability() {
  const controls = useAnimation();
  const [showText, setShowText] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [inView, controls]);


    return (
      <div>
        <section className="relative w-full py-1 px-1 bg-[#131313] overflow-hidden min-h-[600px] flex items-center justify-center">

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-2 max-w-3xl mx-auto space-y-4">
                   
                    {/* <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
                    >
                  We are committed to producing and marketing safe, high-quality products, with truthful, transparent, and non-misleading labeling and advertising. 
                   </motion.p> */}
        
                </div>
                 <section className="relative pb-1 mt-1 min-h-[80vh] w-full overflow-hidden bg-[#131313]">
                
                            {/* Content container */}
                            <div className="relative z-10 container mx-auto  py-16 md:py-1">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-1 items-center min-h-[80vh]">
                                    {/* Left: Timeline Animation */}
                  <motion.div
      ref={ref}
      className="order-2 md:pl-19 lg:order-1 flex justify-center " 
      initial={{ opacity: 0, x: -30 }}
      animate={controls}
      variants={{
        animate: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative "  >

        {/* SVG ZOOM-IN + ROTATE (ON VIEW) */}
        <motion.img
          src="/gradiend-color-logo.svg"
          className="h-60 pt-6 "
          alt="Logo"
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
         <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#D44861]/20 via-[#B24D78]/20 to-[#8DC330]/20 rounded-full blur-[60px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    variants={{
                      animate: { opacity: 1, scale: 1.2 },
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
          {showText && (
                    <motion.div
                      className="absolute inset-[-20px] border border-[#B24D78]/30 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0.8, 1.5, 1.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}
        {/* Text animation AFTER rotation */}
        {showText && (
          <>
            <motion.p
              className="absolute left-[160px] w-64 bottom-50  text-lg text-[#D44861]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Best Regulatory Practices
            </motion.p>

            <motion.p
              className="absolute left-[-240px]  w-64 bottom-[27px] text-[#96A741] text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Clinically EvaluatedSolutions
            </motion.p>

            <motion.p
              className="absolute left-[210px]  w-64 bottom-[-14px] text-[#B24D78] text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Green & White Technology
            </motion.p>
          </>
        )}
      </div>
    </motion.div>
                                    {/* Right: Content Block */}
                                    <motion.div         
                                        className="order-1 lg:order-2"
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                       <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl text-center md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400tracking-tight pb-12 "
                    >
                        Sustainable Lifecycle
                    </motion.h2>
                                       <div className="flex text-center flex-col gap-8 order-2 ">
<p>We are committed to producing and marketing safe, high-quality products, with truthful, transparent, and non-misleading labeling and advertising.</p>
  <div className="grid grid-cols-2">
  <div className="flex flex-col pb-7  items-center justify-center">
  <img src="./roundcircle.png" className="w-40" />
    <p className="pl-4">Tested Raw MEterials</p>
  </div>
 <div className="flex flex-col pb-7 items-center justify-center">
   <img src="./leaf.png" className="w-40" />

    <p  className="pl-4">Pure Natural Products</p>
  </div>
   <div className="flex  flex-col items-center justify-center">
    <img src="./checklist.png" className="w-40" />
    <p  className="pl-4">Certificated Production</p>
  </div>
   <div className="flex pb-7 flex-col items-center justify-center">
   <img src="./cer.png" className="w-40" />
    <p  className="pl-4">A 35 Years Tradition</p>
  </div>

</div>
  
  </div>
                                    </motion.div>
                                </div>
                            </div>
                
                            {/* Bottom decorative line */}
                            {/* <motion.div
                                className="absolute bottom-0 left-0 right-0 h-px"
                                style={{
                                    background: "linear-gradient(90deg, transparent 0%, hsl(175 70% 50% / 0.3) 50%, transparent 100%)",
                                }}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            /> */}
                        </section>
                <div className="flex order-1 gap-12 ">
<div >
    
</div>
 
                </div>
                {/* Main Steps Row */}
               {/* <img src="./1.jpeg" /> */}
                {/* <FeaturesSection /> */}
            </div>
            
            
         
       
    
        </section>
        
        </div>
    );
}
