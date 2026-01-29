'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const AboutSwiper = () => {
    const [direction, setDirection] = useState<'horizontal' | 'vertical'>('horizontal');

    useEffect(() => {
        const getDirection = () => {
            return window.innerWidth <= 760 ? 'vertical' : 'horizontal';
        };

        const handleResize = () => {
            setDirection(getDirection());
        };

        // Set initial direction
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative w-full h-[550px] py-10 container mx-auto">
            <style jsx global>{`
                .about-swiper .swiper {
                    width: 100%;
                    height: 100%;
                }
/* Pagination container */
.about-swiper .swiper-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

/* Default dots */
.about-swiper .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: #e5e7eb; /* light gray */
  opacity: 1;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

/* Active pill */
.about-swiper .swiper-pagination-bullet-active {
  width: 36px;
  height: 8px;
  background-color: #22c55e; /* green */
  border-radius: 9999px;
}

                .about-swiper .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                  
                    display: flex;
                  
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                }

                @media (max-width: 760px) {
                    .about-swiper .swiper-button-next {
                        right: 20px;
                        transform: rotate(90deg);
                    }

                    .about-swiper .swiper-button-prev {
                        left: 20px;
                        transform: rotate(90deg);
                    }
                }
            `}</style>
            <div className="about-swiper w-full h-full">
               <Swiper
  direction={direction}
  loop={true}
  autoplay={{
    delay: 3000, 
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
  onResize={(swiper) => {
    const newDirection = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    if (swiper.params.direction !== newDirection) {
      swiper.changeDirection(newDirection);
    }
  }}
>

                    <SwiperSlide ><div className="group/card relative bg-white dark:bg-white/5 dark:backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 transition-transform duration-500 hover:-translate-y-2 h-[400px]">
<div className="absolute -top-6 left-8 w-12 h-12 bg-primary flex items-center justify-center rounded-full shadow-lg">
<span className="material-symbols-rounded text-white">format_quote</span>
</div>
<div className="mt-4 flex gap-1 text-amber-400">
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
</div>
<p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                 Fermbiotic™ is recognized for its enhanced protein bioavailability and improved digestibility achieved through advanced probiotic fermentation. It represents a next-generation sustainable protein source for optimized human nutrition.      </p>
<div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 flex items-center gap-4">
<img alt="Brooklyn Simmons portrait" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" src=""/>
<div>
<h4 className="font-bold text-gray-900 dark:text-white">Brooklyn Simmons</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Nutrition scientists</p>
</div>

</div>
</div></SwiperSlide>
  <SwiperSlide ><div className=" h-[400px] group/card relative bg-white dark:bg-white/5 dark:backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 transition-transform duration-500 hover:-translate-y-2">
<div className="absolute -top-6 left-8 w-12 h-12 bg-primary flex items-center justify-center rounded-full shadow-lg">
<span className="material-symbols-rounded text-white">format_quote</span>
</div>
<div className="mt-4 flex gap-1 text-amber-400">
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
</div>
<p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                      Fermbiotic™ supports gut microbiome balance by delivering fermented algal protein enriched with beneficial metabolites and EPS. Its formulation aligns with modern microbiome-focused nutritional science.  </p>
<div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 flex items-center gap-4">
<img alt="Brooklyn Simmons portrait" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" src=""/>
<div>
<h4 className="font-bold text-gray-900 dark:text-white">Brooklyn Simmons</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Microbiome researchers</p>
</div>
</div>
</div></SwiperSlide>
  <SwiperSlide ><div className="h-[400px] group/card relative bg-white dark:bg-white/5 dark:backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 transition-transform duration-500 hover:-translate-y-2">
<div className="absolute -top-6 left-8 w-12 h-12 bg-primary flex items-center justify-center rounded-full shadow-lg">
<span className="material-symbols-rounded text-white">format_quote</span>
</div>
<div className="mt-4 flex gap-1 text-amber-400">
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
</div>
<p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                     Fermbiotic™ offers superior functionality, clean-label compatibility, and improved absorption for advanced food and nutraceutical applications. Its fermented profile enables premium, gut-friendly product innovation.   </p>
<div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 flex items-center gap-4">
<img alt="Brooklyn Simmons portrait" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" src=""/>
<div>
<h4 className="font-bold text-gray-900 dark:text-white">Brooklyn Simmons</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Functional food formulators</p>
</div>
</div>
</div></SwiperSlide>
  <SwiperSlide ><div className=" h-[400px] group/card relative bg-white dark:bg-white/5 dark:backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 transition-transform duration-500 hover:-translate-y-2">
<div className="absolute -top-6 left-8 w-12 h-12 bg-primary flex items-center justify-center rounded-full shadow-lg">
<span className="material-symbols-rounded text-white">format_quote</span>
</div>
<div className="mt-4 flex gap-1 text-amber-400">
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
<span className="material-symbols-rounded text-sm">star</span>
</div>
<p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                            "I've been using their cold-pressed oils and organic lentils for months now, and I can honestly say the quality is unmatched. It feels good to finally find a brand I can trust for my family's health."
                        </p>
<div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 flex items-center gap-4">
<img alt="Brooklyn Simmons portrait" className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20" src=""/>
<div>
<h4 className="font-bold text-gray-900 dark:text-white">Brooklyn Simmons</h4>
<p className="text-sm text-gray-500 dark:text-gray-400">Clinical nutrition experts</p>
</div>
</div>
</div></SwiperSlide>
 
                    {/* <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide>
                    <SwiperSlide>Resize me!</SwiperSlide> */}
                </Swiper>
            </div>
        </section>
    );
};
