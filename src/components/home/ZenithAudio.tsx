'use client';

import React, { useState, useEffect  } from 'react';
// import React, { useState, } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Star, ChevronLeft, ChevronRight, ShoppingBag, Heart, Battery, Waves, Bluetooth } from 'lucide-react';


interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviews: string;
    image: string;
    description: string;
    specs: {
        battery: string;
        anc: string;
        bluetooth: string;
    };
}

const products: Product[] = [
    {
        id: 'earbuds',
        name: 'Zenith Earbuds Pro',
        category: 'Audio Essentials',
        price: 149,
        rating: 4.8,
        reviews: '1.5k+',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsGGFnPwX0OvFN35nsYtaFYCLQXbLc0G6b3WfGdDCN64CPjhnoSZwxSRycJ4ADEDyFRIfjUxs00Df2TTpStvj-2m1xuaYw7lwTiZzXAyrQmYIdhewRKfTq9fyMv783SAbthi6bm8xOnC0KQxomtm87NvL-WfKlIFru7XTIgIzIej_vYAE_82rKvYGNIYuEIDqSihzHd0dcJa04LTIS5sIQaGlEo4hbANyhEe7s8nld-EVUzmcpwbjgbwNsOq6nzvsMQ51ragA4FP-6',
        description: 'Compact design with premium sound quality and extended battery life for all-day listening.',
        specs: {
            battery: '24 Hrs',
            anc: 'Hybrid',
            bluetooth: 'v5.2'
        }
    },
    {
        id: 'headphones',
        name: 'Zenith X1',
        category: 'Audio Fidelity Series',
        price: 299,
        rating: 4.9,
        reviews: '2k+',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAioPdoKdFNqEvdebHQPDhw8fb4T9gYp8BBUTga_SZnwch-xhwwH1FS3-dmKZ2a0rJuNR8JPT9CH-NSWbwEhKb-fuVpf7D-AFvN6ruhOFKXD_JhlVV6bQEsejMmFH-Ldw2kDCK8zUkJsy7GK1oHV4W3lgFvVY737WsFZlhk8hNNYZlF5FNAoWapGRyMja0QYNWhtOMnhp6Pz2sIhxSfxWx6hWtl4FFxbU_XJBPJdMHNpyCxjmj7Kpy7bjtjkXw3tF8ynfzXBWMFBNjq',
        description: 'Immersive soundscapes with 40-hour battery life. Active noise cancellation designed for the modern audiophile.',
        specs: {
            battery: '40 Hrs',
            anc: 'Active',
            bluetooth: 'v5.2'
        }
    },
    {
        id: 'speaker',
        name: 'Zenith Speaker Core',
        category: 'Smart Audio',
        price: 199,
        rating: 4.7,
        reviews: '800+',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB14hN66oJiAdz4YmqwsEJfOfbQMCctRIXII9WS5UdgK5OwQOmjOLYkTw605CQeSmGUcSUKsrQEzhhcUU2HNB6b-BsG6X5-oh8T7si1_dHFOiwEKDaAXLA7ID0PhPTHH27wzpk9hBYA2eRej5gSrtvpvoZf2QymEkNcE09XgKiFf6E8jFiumOEQF16PjO-LnfsyeHsqTRlBSOwCCZNuHouOPJYRpE9xYfyjsrNx_c9geDnxKTynOhbIMWF-bY01Zi9LYIJdHLzmcc7Z',
        description: '360° sound projection with voice assistant integration and multi-room connectivity.',
        specs: {
            battery: '12 Hrs',
            anc: 'N/A',
            bluetooth: 'v5.0'
        }
    }
];

export function ZenithAudio() {
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [isPaused, setIsPaused] = useState(false);


    const handlePrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const activeProduct = products[activeIndex];
    const leftProduct = products[activeIndex === 0 ? products.length - 1 : activeIndex - 1];
    const rightProduct = products[activeIndex === products.length - 1 ? 0 : activeIndex + 1];

useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
        setActiveIndex((prev) =>
            prev === products.length - 1 ? 0 : prev + 1
        );
    }, 3000);

    return () => clearInterval(interval);
}, [isPaused]);

    return (
        <div className="min-h-screen   text-white flex flex-row justify-center">
            <div className='flex flex-col pl-32'>
                <motion.div
                            className=" cursor-pointer"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 0.4, x: 0, scale: 0.75 }}
                            whileHover={{ opacity: 1, y: -16 }}
                            transition={{ duration: 0.5 }}
                            onClick={handlePrevious}
                        >
                            <div className="w-[280px] aspect-[4/5] rounded-[2rem] bg-[#15281f] shadow-2xl flex flex-col items-center border border-white/5 overflow-hidden">
                                <div className="h-[60%] w-full flex items-center justify-center p-6 bg-gradient-to-b from-white/5 to-transparent">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat opacity-80"
                                        style={{ backgroundImage: `url('${leftProduct.image}')`, mixBlendMode: 'screen' }}>
                                    </div>
                                </div>
                                <div className="p-6 text-center w-full mt-auto bg-[#112218]">
                                    <h3 className="text-lg font-bold mb-1">{leftProduct.name}</h3>
                                    {/* <p className="text-[#13ec6d] text-sm font-medium">${leftProduct.price}.00</p> */}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Product */}
                       
 <motion.div
                            className="z-10 cursor-pointer"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 0.4, x: 0, scale: 0.75 }}
                            whileHover={{ opacity: 1, y: -16 }}
                            transition={{ duration: 0.5 }}
                            onClick={handleNext}
                        >
                            <div className="w-[280px] aspect-[4/5] rounded-[2rem] bg-[#15281f] shadow-2xl flex flex-col items-center border border-white/5 overflow-hidden">
                                <div className="h-[60%] w-full flex items-center justify-center p-6 bg-gradient-to-b from-white/5 to-transparent">
                                    <div className="w-full h-full bg-contain bg-center bg-no-repeat opacity-80"
                                        style={{ backgroundImage: `url('${rightProduct.image}')`, mixBlendMode: 'lighten' }}>
                                    </div>
                                </div>
                                <div className="p-6 text-center w-full mt-auto bg-[#112218]">
                                    <h3 className="text-lg font-bold mb-1">{rightProduct.name}</h3>
                                    {/* <p className="text-[#13ec6d] text-sm font-medium">${rightProduct.price}.00</p> */}
                                </div>
                            </div>
                        </motion.div>
            </div>
            {/* Navbar */}
            {/* Main Content */}
            <main className="flex-grow relative flex flex-col pt-1 pb-1 w-full overflow-hidden">
                {/* Ambient Background Effects */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(19,236,109,0.1)_0%,_rgba(16,34,24,0)_70%)] z-0"></div>
                <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-[#13ec6d]/5 rounded-full blur-[100px] z-0"></div>
                <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-[#13ec6d]/10 rounded-full blur-[120px] z-0"></div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col items-center gap-8 h-full">
                    {/* Hero Header */}
                  

                    {/* 3D Carousel Stage */}
                 <div
  className="relative w-full h-[650px] md:h-[600px] flex items-center justify-center mt-4"
  style={{ perspective: '1000px' }}
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
      {/* Left Product */}
                        
                        {/* Center Active Product */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                className="relative z-30 w-full max-w-[850px] mx-4 md:mx-0"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-[#13ec6d]/20 blur-xl rounded-[3rem] opacity-40"></div>

                                {/* Main Card */}
                                <div className="relative bg-[#193324] rounded-[2.5rem] border border-[#234833] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row h-auto md:h-[480px]">
                                    {/* Left: Product Visual */}
                                    <div className="w-full md:w-[45%] relative bg-gradient-to-br from-[#234833] via-[#1a3829] to-[#112218] p-8 flex items-center justify-center overflow-hidden group">
                                        {/* Spinning rings */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rborder border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                        <div className="absd
                                        olute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                                        <motion.div
                                            className="relative w-full  rounded-[29px] h-full min-h-[250px] bg-contain bg-center bg-no-repeat drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10"
                                            style={{ backgroundImage: `url('${activeProduct.image}')` }}
                                            whileHover={{ scale: 1.05, rotate: -2 }}
                                            transition={{ duration: 0.7 }}
                                        />

                                        <div className="absolute top-4 left-4 md:hidden">
                                            <span className="px-2 py-1 bg-[#13ec6d] text-[#112218] text-xs font-bold rounded">HOT</span>
                                        </div>
                                    </div>

                                    {/* Right: Details Panel */}
                                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative bg-[#193324]">
                                        {/* Nav buttons */}
                                        <div className="absolute top-8 right-8 flex gap-2">
                                            <button onClick={handlePrevious} className="size-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors">
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                            <button onClick={handleNext} className="size-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors">
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="mb-1">
                                            <h4 className="text-[#13ec6d] font-bold tracking-wider text-sm mb-2 uppercase">{activeProduct.category}</h4>
                                            <h2 className="text-4xl font-bold mb-2 tracking-tight">{activeProduct.name}</h2>
                                            
                                        </div>

                                        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-sm">
                                            {activeProduct.description}
                                        </p>

                                        {/* Tech Specs */}
                                        <div className="grid grid-cols-3 gap-3 mb-8 max-w-sm">
                                            <div className="bg-[#112218] rounded-xl p-3 border border-white/5 text-center hover:border-[#13ec6d]/30 transition-colors">
                                                <Battery className="w-5 h-5 text-[#13ec6d] mx-auto mb-1" />
                                                <div className="text-white text-xs font-bold">{activeProduct.specs.battery}</div>
                                                <div className="text-white/40 text-[10px]">Playtime</div>
                                            </div>
                                            <div className="bg-[#112218] rounded-xl p-3 border border-white/5 text-center hover:border-[#13ec6d]/30 transition-colors">
                                                <Waves className="w-5 h-5 text-[#13ec6d] mx-auto mb-1" />
                                                <div className="text-white text-xs font-bold">{activeProduct.specs.anc}</div>
                                                <div className="text-white/40 text-[10px]">ANC</div>
                                            </div>
                                            <div className="bg-[#112218] rounded-xl p-3 border border-white/5 text-center hover:border-[#13ec6d]/30 transition-colors">
                                                <Bluetooth className="w-5 h-5 text-[#13ec6d] mx-auto mb-1" />
                                                <div className="text-white text-xs font-bold">{activeProduct.specs.bluetooth}</div>
                                                <div className="text-white/40 text-[10px]">Wireless</div>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div className="flex flex-wrap gap-4">
                                            <motion.button
                                                className="flex-1 max-w-[200px] h-12 bg-[#13ec6d] text-[#112218] text-sm font-bold rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(19,236,109,0.2)]"
                                                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(19,236,109,0.4)' }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                explore 
                                                <ShoppingBag className="w-4 h-4" />
                                            </motion.button>
                                            <button className="h-12 w-12 rounded-full border border-white/20 hover:border-white flex items-center justify-center transition-colors">
                                                <Heart className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Controls */}
                    <div className="flex flex-col items-center gap-4 z-20 w-full max-w-2xl px-8 mt-8 md:mt-0">
                        {/* Progress indicator */}
                        <div className="w-full flex items-center gap-4">
                            <span className="text-xs font-bold text-white/40">01</span>
                            <div className="flex-1 h-1 bg-white/10 rounded-full relative overflow-hidden">
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 bg-[#13ec6d] rounded-full"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${((activeIndex + 1) / products.length) * 100}%` }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <span className="text-xs font-bold text-white/40">0{products.length}</span>
                        </div>

                        <div className="flex gap-6 items-center">
                            <motion.button
                                onClick={handlePrevious}
                                className="w-12 h-12 rounded-full bg-[#193324] border border-[#234833] text-white flex items-center justify-center"
                                whileHover={{ backgroundColor: '#13ec6d', color: '#112218', borderColor: '#13ec6d' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </motion.button>
                            <span className="text-sm font-medium text-white/60 uppercase tracking-widest">Rotate</span>
                            <motion.button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full bg-[#193324] border border-[#234833] text-white flex items-center justify-center"
                                whileHover={{ backgroundColor: '#13ec6d', color: '#112218', borderColor: '#13ec6d' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Feature Strip */}
           
        </div>
    );
}
