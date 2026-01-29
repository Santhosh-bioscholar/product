"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

import HeroTitle from "../about/HeroTitle";
import QuoteCard from "../about/QuoteCard";
import SocialSidebar from "../about/SocialSidebar";
import BottomControls from "../about/BottomControls";
import HalfCircleIndicator from "../about/HalfCircleIndicator";
import CircleTransition from "../about/CircleTransition";

interface Slide {
  id: number;
  number: string;
  title: string;
  description: string;
  backgroundColor: string;
  backgroundClass?: string;
  backgroundImage?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    number: "01",
    title: "Fermbiôtic",
    description: "Advanced fermentation technology ensuring maximum nutrient absorption and gut health support.",
    backgroundColor: "#356f1aff",
     backgroundImage:"./p.png",
  },
  {
    id: 2,
    number: "02",
    title: "Bleubiôtic",
    description:
      "Revolutionary detoxification complex harnessing blue-spectrum antioxidants. Neutralize free radicals and illuminate your cellular health.",
    backgroundColor: "#16517eff",
     backgroundImage:"./p.png",

  },
  {
    id: 3,
    number: "03",
    title: "GlowBiôtic",
    description:
      "Ancient superfood reimagined with modern bioavailability. Spirulina's spiral structure delivers complete nutrition in its most absorbable form.",
    backgroundColor: "#8a491aff",
     backgroundImage:"./p.png",

  },


];

const AUTOPLAY_INTERVAL = 7000;

export default function ProductShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideIndex, setNextSlideIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // -------------------------
  // Slide navigation
  // -------------------------
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSlide) return;
      if (index < 0 || index >= slides.length) return;

      setIsAnimating(true);
      setNextSlideIndex(index);
    },
    [currentSlide, isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  }, [currentSlide, goToSlide]);

  // -------------------------
  // Autoplay
  // -------------------------
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (!isAnimating) nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [nextSlide, isAnimating]);

  // -------------------------
  // Drag
  // -------------------------
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (info.offset.x < -threshold) nextSlide();
    if (info.offset.x > threshold) prevSlide();
  };

  // -------------------------
  // Keyboard
  // -------------------------
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === " ") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  // -------------------------
  // Circle animation finished
  // -------------------------
  const handleCircleExpandComplete = () => {
    if (nextSlideIndex !== null) {
      setCurrentSlide(nextSlideIndex);
      setNextSlideIndex(null);
      setIsAnimating(false);
    }
  };

  return (
    <div
      className="relative w-[1528px] h-[760px] overflow-hidden rounded-2xl focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Background */}
     {/* Background */}
{/* Background */}
{/* Background */}
<div
  className="absolute inset-0 transition-all duration-700"
  style={{
    backgroundColor: slides[currentSlide].backgroundColor,
    backgroundImage: slides[currentSlide].backgroundImage
      ? `url(${slides[currentSlide].backgroundImage})`
      : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>




      {/* Hero */}
      {/* Hero (STATIC – does NOT animate) */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <HeroTitle
          title="humann"
          subtitle="supplements"
          tagline="Pioneering Green Biotechnology"
        />
        {/* <SocialSidebar /> */}
        <BottomControls
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onSlideChange={goToSlide}
        />
      </div>


      {/* Current Slide */}
      <AnimatePresence mode="wait">
        {!isAnimating && (
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-20"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
           
          >
            {/* If class based background, we need a div for it because style prop overwrites */}
            {slides[currentSlide].backgroundClass && (
              <div className={`absolute inset-0 ${slides[currentSlide].backgroundClass} -z-10`} />
            )}
            <QuoteCard
              number={slides[currentSlide].number}
              title={slides[currentSlide].title}
              description={slides[currentSlide].description}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circle Transition */}
      {/* Circle Transition (BELOW hero) */}
      <div className="absolute inset-0 z-30">
        <CircleTransition
          isAnimating={isAnimating}
          nextSlideColor={
            nextSlideIndex !== null
              ? slides[nextSlideIndex].backgroundColor
              : slides[currentSlide].backgroundColor
          }
          onExpandComplete={handleCircleExpandComplete}
        />
      </div>


      {/* UI */}


      <HalfCircleIndicator
        onClick={nextSlide}
        isVisible={!isAnimating}
        nextSlideColor={
          slides[(currentSlide + 1) % slides.length].backgroundColor
        }
      />



      {/* Depth overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-black/20 z-40" />
    </div>
  );
}


// "use client";


// import { useState, useCallback, useRef, useEffect } from "react";
// import { motion, AnimatePresence, PanInfo } from "framer-motion";

// import HeroTitle from "../about/HeroTitle";
// import QuoteCard from "../about/QuoteCard";
// import SocialSidebar from "../about/SocialSidebar";
// import BottomControls from "../about/BottomControls";
// import SlideContent from "../about/SlideContent";
// import CircleTransition from "../about/CircleTransition";
// import HalfCircleIndicator from "../about/HalfCircleIndicator";

// // const SLIDES = [
// //   {
// //     number: "01",
// //     title: "Vision",
// //     description: "Restoring planetary balance through algae-based innovation.",
// //     background: {
// //       type: "image",
// //       value: "/bac1.webp",
// //     },
// //   },
// //   {
// //     number: "02",
// //     title: "Science",
// //     description: "Advanced bio-engineering for sustainable nutrition solutions.",
// //     background: {
// //       type: "image",
// //       value: "/bac2.png",
// //     },
// //   },
// //   {
// //     number: "03",
// //     title: "Future",
// //     description: "Pioneering the next generation of eco-friendly supplements.",
// //     background: {
// //       type: "image",
// //       value: "/bac3.png",
// //     },
// //   },
// // ];


// // const ProductShow = () => {
// //     const [activeIndex, setActiveIndex] = useState(0);
// //     const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

// //     const handleSlideChange = (index: number) => {
// //         if (swiperInstance) {
// //             swiperInstance.slideTo(index);
// //         }
// //     };

// //     return (
// //         <section className="relative h-screen w-full overflow-hidden bg-black">
// //             {/* Background */}
// //             <div className="absolute inset-0 pointer-events-none">
// //                 <div className="absolute inset-0 bg-black/20 z-10" />
// //                 {/* <img
// //                     src="/about31.png"
// //                     alt="Background"
// //                     className="w-full h-full object-cover opacity-80"
// //                 /> */}
// //              {/* Dynamic Background */}
// // <div className="absolute inset-0 transition-all duration-1000">
// //   {SLIDES[activeIndex].background.type === "image" ? (
// //     <div
// //       className="absolute inset-0 bg-cover bg-center"
// //       style={{
// //         backgroundImage: `url(${SLIDES[activeIndex].background.value})`,
// //       }}
// //     />
// //   ) : (
// //     <div
// //       className="absolute inset-0"
// //       style={{
// //         backgroundColor: SLIDES[activeIndex].background.value,
// //       }}
// //     />
// //   )}

// //   {/* Optional overlay */}
// //   <div className="absolute inset-0 bg-black/30" />
// // </div>


// //             </div>

// //             <HeroTitle
// //                 title="humann "
// //                 subtitle="supplements"
// //                 tagline="Pioneering Green Biotechnology"
// //             />

// //             <div className="absolute inset-0 z-0">
// //                 <Swiper
// //                     modules={[EffectFade, Autoplay]}
// //                     effect="fade"
// //                     speed={1000}
// //                     slidesPerView={1}
// //                     loop={false}
// //                     onSwiper={setSwiperInstance}
// //                     onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
// //                     className="h-full w-full"
// //                 >
// //                     {SLIDES.map((slide, index) => (
// //                         <SwiperSlide key={index} className="relative h-full w-full ">
// //                         <div className="absolute inset-0 transition-all duration-1000">
// //   {SLIDES[activeIndex].background.type === "image" ? (
// //     <div
// //       className="absolute inset-0 bg-cover bg-center"
// //       style={{
// //         backgroundImage: `url(${SLIDES[activeIndex].background.value})`,
// //       }}
// //     />
// //   ) : (
// //     <div
// //       className="absolute inset-0"
// //       style={{
// //         backgroundColor: SLIDES[activeIndex].background.value,
// //       }}
// //     />
// //   )}

// //   {/* Optional overlay */}
// //   <div className="absolute inset-0 bg-black/30" />
// // </div>
// //                             <QuoteCard
// //                                 number={slide.number}
// //                                 title={slide.title}
// //                                 description={slide.description}
// //                             />
// //                         </SwiperSlide>
// //                     ))}
// //                 </Swiper>
// //             </div>

// //             <SocialSidebar />

// //             <BottomControls
// //                 currentSlide={activeIndex}
// //                 totalSlides={SLIDES.length}
// //                 onSlideChange={handleSlideChange}
// //             />
// //         </section>
// //     );
// // }

// interface Slide {
//   id: number;
//   number: string;
//   title: string;
//   description: string;
//   backgroundColor: string;
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//      number: "01",
//     title: "Vision",
//     description: "Restoring planetary balance through algae-based innovation.",
//     backgroundColor: "hsl(0, 0%, 8%)",
//   },
//   {
//     id: 2,
//      number: "02",
//     title: "Design",
//     description: "Every pixel tells a story. We shape visual narratives that resonate deeply.",
//     backgroundColor: "hsl(220, 25%, 12%)",
//   },
//   {
//     id: 3,
//      number: "03",

//     title: "Motion",
//     description: "Bringing ideas to life through fluid, purposeful animation and interaction.",
//     backgroundColor: "hsl(180, 15%, 10%)",
//   },
//   {
//     id: 4,
//      number: "04",

//     title: "Future",
//     description: "Building tomorrow's experiences today. Pushing boundaries, defining new standards.",
//     backgroundColor: "hsl(280, 20%, 12%)",
//   },
// ];

// const AUTOPLAY_INTERVAL = 7000;

// const ProductShow = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [nextSlideIndex, setNextSlideIndex] = useState<number | null>(null);
//   const [isForward, setIsForward] = useState(true);
//   const [animationPhase, setAnimationPhase] = useState<"expanding" | "revealing" | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const autoplayRef = useRef<NodeJS.Timeout | null>(null);

//   const goToSlide = useCallback((index: number, forward: boolean = true) => {
//     if (isAnimating || index === currentSlide) return;
//     if (index < 0 || index >= slides.length) return;

//     setIsAnimating(true);
//     setNextSlideIndex(index);
//     setIsForward(forward);
//     setAnimationPhase("expanding");

//     // After white circle covers screen, change slide and start reveal
//     setTimeout(() => {
//       setCurrentSlide(index);
//       setAnimationPhase("revealing");
//     }, 500);

//     // After reveal animation completes, reset
//     setTimeout(() => {
//       setIsAnimating(false);
//       setNextSlideIndex(null);
//       setAnimationPhase(null);
//     }, 1000);
//   }, [currentSlide, isAnimating]);

//   const nextSlide = useCallback(() => {
//     const next = (currentSlide + 1) % slides.length;
//     goToSlide(next, true);
//   }, [currentSlide, goToSlide]);

//   const prevSlide = useCallback(() => {
//     const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
//     goToSlide(prev, false);
//   }, [currentSlide, goToSlide]);

//   // Auto-play every 3 seconds
//   useEffect(() => {
//     autoplayRef.current = setInterval(() => {
//       if (!isAnimating) {
//         nextSlide();
//       }
//     }, AUTOPLAY_INTERVAL);

//     return () => {
//       if (autoplayRef.current) {
//         clearInterval(autoplayRef.current);
//       }
//     };
//   }, [nextSlide, isAnimating]);

//   const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
//     const threshold = 50;
//     if (info.offset.x < -threshold) {
//       nextSlide();
//     } else if (info.offset.x > threshold) {
//       prevSlide();
//     }
//   };

//   const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
//     if (e.key === "ArrowRight" || e.key === " ") {
//       nextSlide();
//     } else if (e.key === "ArrowLeft") {
//       prevSlide();
//     }
//   }, [nextSlide, prevSlide]);

//   const handleSlideChange = useCallback((index: number) => {
//     const forward = index > currentSlide;
//     goToSlide(index, forward);
//   }, [currentSlide, goToSlide]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-[500px] md:h-[600px] overflow-hidden focus:outline-none rounded-2xl"
//       tabIndex={0}
//       onKeyDown={handleKeyDown}
//     >
//       {/* Next slide preview layer (underneath) */}
//       {nextSlideIndex !== null && (
//         <div
//           className="absolute inset-0 z-10"
//           style={{ backgroundColor: slides[nextSlideIndex].backgroundColor }}
//         >
//              <QuoteCard
//                                 number={slides[currentSlide].number}
//                                 title={slides[currentSlide].title}
//                                 description={slides[currentSlide].description}
//                             />
//         </div>
//       )}
//  <HeroTitle
//                 title="humann "
//                 subtitle="supplements"
//                 tagline="Pioneering Green Biotechnology"
//             />
//       {/* Circle Transition Overlay */}
//       <CircleTransition
//         isAnimating={isAnimating}
//         nextSlideColor={nextSlideIndex !== null ? slides[nextSlideIndex].backgroundColor : slides[currentSlide].backgroundColor}
//         isForward={isForward}
//         phase={animationPhase}
//       />

//       {/* Current Slides */}
//       <AnimatePresence mode="wait">
//         {!isAnimating && (
//           <motion.div
//             key={currentSlide}
//             className="absolute inset-0 z-20"
//             style={{ backgroundColor: slides[currentSlide].backgroundColor }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.1}
//             onDragEnd={handleDragEnd}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           ><HeroTitle
//                 title="humann "
//                 subtitle="supplements"
//                 tagline="Pioneering Green Biotechnology"
//             />
//             <QuoteCard
//                                 number={slides[currentSlide].number}
//                                 title={slides[currentSlide].title}
//                                 description={slides[currentSlide].description}
//                             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Half Circle Indicator (next slide trigger) */}
//       <HalfCircleIndicator
//         onClick={nextSlide}
//         isVisible={!isAnimating}
//         nextSlideColor={slides[(currentSlide + 1) % slides.length].backgroundColor}
//       />

//       {/* Bottom Controls */}
//       <BottomControls
//         currentSlide={currentSlide}
//         totalSlides={slides.length}
//         onSlideChange={handleSlideChange}
//       />

//       {/* Gradient overlay for depth */}
//       <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-black/20 z-30" />
//     </div>
//   );
// };


// export default ProductShow;