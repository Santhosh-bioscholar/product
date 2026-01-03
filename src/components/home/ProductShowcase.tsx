'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { CosmicHorizon } from './CosmicHorizon';
import { CosmicHorizonn } from './CosmicHorizonn';

export function ProductShowcase() {
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!swiperRef.current) return;

        if (entry.isIntersecting && !isHovered.current) {
          swiperRef.current.autoplay.start(); // ▶️ visible
        } else {
          swiperRef.current.autoplay.stop(); // ⏸️ hidden
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
    swiperRef.current?.autoplay.stop();
  };

  const handleMouseLeave = () => {
    isHovered.current = false;

    // resume only if slider is visible
    const rect = containerRef.current?.getBoundingClientRect();
    const isVisible =
      rect && rect.top < window.innerHeight * 0.6 && rect.bottom > 0;

    if (isVisible) {
      swiperRef.current?.autoplay.start();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-[#131313] py-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop(); // ⛔ stop on load
        }}
        effect="fade"
        navigation
        pagination
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
        }}
        keyboard
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          EffectFade,
          Autoplay,
        ]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="bg-[#131313]">
          <div className="w-full h-full flex items-center justify-center px-8 md:px-32 py-3">
            <div className="container mx-auto max-w-7xl">
              <CosmicHorizon />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#131313]">
          <div className="w-full h-full flex items-center justify-center px-8 md:px-32 py-3">
            <div className="container mx-auto max-w-7xl">
              <CosmicHorizonn />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
