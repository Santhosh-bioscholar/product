'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@mui/material/Button'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import { BubblesContainer } from './Bubble';
// import BubblesContainer from "./Bubble";


export default function HomeSwiper() {
    return (
        <div className="w-full h-[750px] py-10 "> {/* Container with height */}
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper w-full h-full container " // Added w-full h-full
            >
                <SwiperSlide className="bg-center bg-cover pl-20 bg-[#131313]">

                    <div className='grid grid-cols-2 '>
                        <div className=''>
                            <div className='relative'>
                                <img src='ani-line-1.png' alt='' className='h-[680px] ' />
                                <img src='./home-fish.png' className=' w-[750px] absolute top-[350px] left-[380px]  rotate-[-18deg] scale-x-[-1] -translate-x-1/2 -translate-y-1/2' alt='' />
                                <div className='absolute top-[490px] left-[320px] -translate-x-1/2  -translate-y-1/2'>
                                    <p className='text-6xl font-arsenal font-bold uppercase '>GlowBiôtic</p>
                                    <div className='border-2 w-[150px] mt-3 mb-4 bg-yellow-400/80'></div>
                                    <p className='w-[360px] text-xl '>
                                        Algae-based food additive that improves aquatic animal health and reduces reliance on antibiotics.</p>
                                </div>
                            </div>
                            <div className=''>
                            </div>
                        </div>
                        <div className='pt-20'>

                            <div className='grid grid-cols-3 gap-0 w-[70%] h-[50%] '>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src='aroora-pharmaceutical.webp' alt='' className=' w-27 ' />
                                    <h1>Pharmaceutical</h1>
                                </div>
                                <div className='flex flex-col justify-center items-center'>

                                    <img src='aroora-biotechnology.webp' alt='' className='  w-27' />
                                    <h1>Biotechnology </h1>
                                </div>
                                <div className='flex flex-col justify-center items-center'>

                                    <img src='aroora-medical-device.webp' alt='' className=' w-27' />
                                    <h1>Medical Device </h1>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src='aroora-nano-technology.webp' alt='' className=' w-27 ' />

                                    <h1>Nanomaterials</h1>
                                </div>
                                <div className='flex flex-col justify-center items-center'>

                                    <img src='aroora-food-nutrition.webp' alt='' className='  w-27' />
                                    <h1>Food and Nutraceutical </h1>
                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <img src='aroora-nano-technology.webp' alt='' className=' w-27 ' />

                                    <h1>Chemical</h1>
                                </div>

                            </div>
                            <div className='flex gap-4 pl-9 pt-18'>

                                {/* <button className='border-2  border-white bg-blue-400 text-black pt-3 pb-3 pl-3 pr-3  rounded-[10px] '>Learn More</button> */}
                             <Button variant="contained">Learn More</Button>
                             <Button variant="contained">Request</Button>
                                {/* <button className='border-2  border-white bg-blue-400 text-black pt-3 pb-3 pl-3 pr-3  rounded-[10px] '>Request</button> */}
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>



                    {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" className="block w-full h-full object-cover" /> */}
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover pl-20 bg-[#131313] relative ">
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        {/* <BubblesContainer /> */}
                    </div>

                    <div className='flex relative z-10'>
                        <div className=''>
                            <div className='relative'>
                                <img src='ani-line-1.png' alt='' className='h-[680px] ' />
                                <img src='./home-shrimp.png' className=' w-[790px] absolute top-[320px] left-[380px]  rotate-[-25deg] scale-x-[-1] -translate-x-1/2 -translate-y-1/2' alt='' />
                                <div className='absolute top-[490px] left-[320px] -translate-x-1/2  -translate-y-1/2'>
                                    <p className='text-6xl font-arsenal font-bold uppercase '>Algabiôtic</p>
                                    <div className='border-2 w-[150px] mt-3 mb-4 bg-yellow-400/80'></div>
                                    <p className='w-[360px] text-xl '>
                                        Algae-based food additive that improves aquatic animal health and reduces reliance on antibiotics.</p>
                                </div>
                            </div>
                            <div className=''>
                            </div>
                        </div>
                        <div>
                            <h1></h1>
                        </div>
                        <div>
                        </div>
                    </div>
                    {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" className="block w-full h-full object-cover" /> */}
                </SwiperSlide>

                {/* <SwiperSlide className="bg-center bg-cover">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" className="block w-full h-full object-cover" />
                </SwiperSlide> */}
                {/* <SwiperSlide className="bg-center bg-cover">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" className="block w-full h-full object-cover" />
                </SwiperSlide> */}
                {/* <SwiperSlide className="bg-center bg-cover">
                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" className="block w-full h-full object-cover" /> 
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
}
