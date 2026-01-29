"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Footer } from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function MountainScroll() {
  const contentRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* =========================================================================
       HELPER: CUSTOM SMOOTH SCROLL
       This logic handles the fixed viewport / translating content setup.
       ========================================================================= */
    function smoothScroll(content: HTMLElement, viewport: HTMLElement, smoothness: number) {
      gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
      gsap.set(content, { overflow: "visible", width: "100%" });

      let getProp = gsap.getProperty(content),
        setProp = gsap.quickSetter(content, "y", "px"),
        removeScroll = () => { content.style.overflow = "visible"; },
        height: number;

      function onResize() {
        height = content.clientHeight;
        content.style.overflow = "visible";
        document.body.style.height = height + "px";
      }
      onResize();
      ScrollTrigger.addEventListener("refreshInit", onResize);
      ScrollTrigger.addEventListener("refresh", () => {
        removeScroll();
        requestAnimationFrame(removeScroll);
      });

      ScrollTrigger.defaults({ scroller: content });

      ScrollTrigger.scrollerProxy(content, {
        scrollTop(value) {
          if (arguments.length) {
            return setProp(-value);
          }
          return -getProp("y") as number;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        }
      });

      gsap.fromTo(content, { y: 0 }, {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update,
        scrollTrigger: {
          scroller: window,
          invalidateOnRefresh: true,
          start: 0,
          end: () => height - document.documentElement.clientHeight,
          scrub: smoothness || 3,
          onRefresh: (self) => {
            gsap.killTweensOf(self.animation);
            self.animation!.progress(self.progress);
          }
        }
      });
    }

    if (contentRef.current && viewportRef.current) {
      smoothScroll(contentRef.current, viewportRef.current, 1);
    }

    /* =========================================================================
       ANIMATIONS
       ========================================================================= */

    // 1. Bubbles - Float Up continuously
    gsap.utils.toArray<SVGCircleElement>(".bubble").forEach((bubble) => {
      const duration = gsap.utils.random(3, 8);
      const delay = gsap.utils.random(0, 5);
      gsap.to(bubble, {
        y: -1000,
        scale: 1.5,
        opacity: 0,
        duration: duration,
        delay: delay,
        repeat: -1,
        ease: "power1.in"
      });
      gsap.to(bubble, {
        x: "+=20",
        duration: gsap.utils.random(1, 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // 2. Background Fish - Swim Across
    gsap.utils.toArray<SVGElement>(".fish").forEach((fish, i) => {
      const duration = gsap.utils.random(10, 20);
      const dir = i % 2 === 0 ? 1 : -1;
      const startX = dir === 1 ? -200 : 1200;
      const endX = dir === 1 ? 1200 : -200;

      gsap.fromTo(fish,
        { x: startX, scaleX: dir * 0.5, scaleY: 0.5 },
        { x: endX, duration: duration, repeat: -1, ease: "none", delay: i * 2 }
      );

      gsap.to(fish, {
        y: "+=30",
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // 3. Fog Layer Animation
    gsap.to(".fog-layer", {
      x: "+=100",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 4. HERO FISH Animation (Follow Path)
    // We target the group #hero-fish

    // Initial State: We want the fish to start relatively large and aligned
    gsap.set("#hero-fish", {
      transformOrigin: "50% 50%",
      scale: 1.5, // Start large like in the banner
      autoAlpha: 1
    });

    /* 
       The Fish needs to maintain its orientation (autoRotate) but we might want to flip it if the path goes left.
       For a natural "swim", autoRotate: true is good, but faces 'right' by default. 
       If our image faces left, we might need an offset.
       Assuming image faces RIGHT.
    */

    const fishTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#Underwater-Scene",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Adds a bit of delay/smoothness to the scrub
        scroller: contentRef.current,
        invalidateOnRefresh: true,
      }
    });

    fishTimeline.to("#hero-fish", {
      motionPath: {
        path: "#divePath",
        align: "#divePath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5], // Center on path
        start: 0, // 0 = start of path
        end: 1,   // 1 = end of path
      },
      scale: 0.4, // Shrink as it goes "deeper" or further away
      ease: "power1.inOut"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.globalTimeline.clear();
      document.body.style.height = '';
    }

  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#000e1a] z-50 relative font-sans" ref={viewportRef}>
      <div id="content" ref={contentRef} className="w-full relative">

        {/* ================= HERO BANNER OVERLAY ================= */}
        {/* Placed absolutely on top of the first section of the SVG */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-10 pointer-events-none flex items-center">

          {/* Left Content */}
          <div className="pl-12 md:pl-24 w-full md:w-1/2 text-white pointer-events-auto">
            {/* Blue Box Border with Text */}
            <div className="border-[3px] border-[#2b8ebd] p-8 md:p-12 max-w-xl relative bg-[#000e1a]/40 backdrop-blur-sm">
              <div className="text-[#2b8ebd] text-sm font-semibold tracking-widest mb-4">
                01. ICHTHYOLOGY
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Aquarium <br /> Maintenance
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                It has long been clear that when assessing design and composition, readable text interferes with concentration. Lorem Ipsum is used because...
              </p>

              <button className="border border-white/20 text-white px-8 py-3 text-xs tracking-widest hover:bg-[#2b8ebd] hover:border-[#2b8ebd] transition-colors uppercase flex items-center gap-2">
                Learn More <span>&rarr;</span>
              </button>
            </div>

            {/* Vertical Deco Text */}
            <div className="absolute left-6 md:left-12 bottom-[-20%] md:bottom-[-40%] flex gap-8 text-[10px] text-gray-500 tracking-widest transform -rotate-90 origin-top-left">
              <span className="text-[#2b8ebd] font-bold">01. ICHTHYOLOGY</span>
              <span>02. ADVANTAGES</span>
              <span>03. SERVICES</span>
            </div>
          </div>
        </div>

        {/* ================= UNDERWATER SCENE SVG ================= */}
        <svg
          id="Underwater-Scene"
          viewBox="0 0 1000 3000"
          className="w-full block"
          preserveAspectRatio="xMidYMin slice"
        >
          <defs>
            <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#020e1a" /> {/* Dark Hero Top */}
              <stop offset="10%" stopColor="#001e36" />
              <stop offset="40%" stopColor="#003b66" />
              <stop offset="80%" stopColor="#2b8ebd" />
              <stop offset="100%" stopColor="#84d0f0" /> {/* Brighter bottom? or flip */}
            </linearGradient>
            <filter id="fogFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* Background */}
          <rect width="1000" height="3000" fill="url(#waterGrad)" />

          {/* Fog / Light Rays */}
          <g className="fog-layer" opacity="0.3">
            <path d="M0,0 L1000,0 L800,800 L200,800 Z" fill="#fff" filter="url(#fogFilter)" />
            <path d="M-200,500 Q500,800 1200,500 V3000 H-200 Z" fill="#002a4d" />
          </g>

          {/* Bubbles */}
          <g id="Bubbles" fill="#ffffff" opacity="0.4">
            {[...Array(25)].map((_, i) => (
              <circle
                key={i}
                className="bubble"
                cx={Math.random() * 1000}
                cy={Math.random() * 3000}
                r={Math.random() * 6 + 1}
              />
            ))}
          </g>

          {/* Small Background Fish */}
          <g id="FishGroup" opacity="0.6">
            <path className="fish" fill="#54a0ff" d="M0,0 Q20,-10 40,0 L35,10 L50,15 L35,20 L40,30 Q20,40 0,30 Q10,15 0,0 Z" transform="translate(100, 1200)" />
            <path className="fish" fill="#81ecec" d="M0,0 Q30,-15 60,0 L50,15 L70,25 L50,35 L60,50 Q30,65 0,50 Q15,25 0,0 Z" transform="translate(800, 1800) scale(0.8)" />
          </g>

          {/* 
                THE MOTION PATH 
                Start coordinate aligns with the "Hero" section Right side.
                Screen width 1000 units. Hero text is on left (approx 0-500).
                Fish should start around x=700, y=300 (visually correct for banner).
            */}
          <path
            id="divePath"
            d="M700,250 
                   C600,600 200,900 300,1200 
                   S800,1600 600,2000 
                   S200,2500 500,2800"
            fill="none"
            stroke="none"
          />

          {/* HERO FISH - Replaces Diver */}
          <g id="hero-fish">
            {/* 
                    Using a high quality Betta fish placeholder. 
                    image href can be local or remote. Using a reliable Unsplash ID for a blue fish.
                    Dimensions centered: x=-100 to +100 to make it approx 200px wide
                */}
            <image
              href="./fish1.sv"
              x="-150"
              y="-100"
              width="300"
              height="200"
              preserveAspectRatio="contain"
            // Clip path could be added if image has background, but let's assume transparent or blend mode.
            // For now, using a blend mode or masking if needed, but standard image is requested.
            // Since Unsplash usually has backgrounds, I will try to use a PNG if possible or mask it.
            // Actually, let's use a clipPath circle for a cleaner look if it's rectangular, 
            // OR better: use a mock 'Betta' shape path filled with the image!
            />

            {/* 
                   Fallback/Alternative: 
                   If the user wants a transparent fish, I'll draw a detailed SVG shape instead of a boxy image. 
                   But the request said "in this fish", implying the reference image.
                   I will create a complex path that LOOKS like a Betta tail and body, filling it with a gradient.
                   This is safer than an image with a black background.
                */}
            <g className="betta-shape">
              {/* Tail */}
              <path d="M-40,0 Q-100,-80 -60,-120 Q0,-80 20,-40" fill="none" stroke="#2b8ebd" strokeWidth="2" />
              <path d="M-40,10 Q-120,60 -80,110 Q-10,80 10,30" fill="none" stroke="#2b8ebd" strokeWidth="2" />

              {/* Fancy Fin Flow (Betta) */}
              <path d="M0,0 Q-80,-100 20,-140 Q80,-60 60,-10" fill="url(#finGrad1)" opacity="0.8" />
              <path d="M0,10 Q-90,120 10,150 Q90,80 60,20" fill="url(#finGrad2)" opacity="0.8" />

              {/* Body */}
              <path d="M0,-15 Q60,-20 100,0 Q60,20 0,15 Q-20,0 0,-15 Z" fill="#0c2461" />
              <ellipse cx="80" cy="0" rx="10" ry="10" fill="#333" /> {/* Eye area */}
              <circle cx="82" cy="-2" r="3" fill="#fff" /> {/* Eye glint */}
            </g>

            <defs>
              <linearGradient id="finGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3c6382" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0a3d62" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="finGrad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3c6382" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#60a3bc" stopOpacity="0" />
              </linearGradient>
            </defs>
          </g>

        </svg>

        <Footer />
      </div>
    </div>
  );
}
