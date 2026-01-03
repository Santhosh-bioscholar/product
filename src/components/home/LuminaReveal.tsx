'use client';




import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "material-symbols";

import { User, ShoppingBag, Search, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductView {
    id: string;
    label: string;
    image: string;
}
interface Product {
    id: string;

    name: string;
    label: string;
    category: string;
    price: number;
    image: string;
    thumbnail: string;
    description: string;
    rating: number;
    badge?: string;
    advantages: string[];
}

const products: Product[] = [
    {
        id: 'main',
        name: 'Algabiotic (For Shrimp)',
        label: 'Main View',
        category: 'Algabiotic (For Shrimp)',
        price: 299,
        image: '',
        thumbnail: '',
        description: 'Algae-based food additive that improves aquatic animal health and reduces reliance on antibiotics.',
        rating: 4.5,
        badge: 'New Arrival',
        advantages: [
            'Accelerated Growth',
            'Disease Resistance',
            'Water Quality',
            'Sustainable Yield'
        ]
    },
    {
        id: 'side',
        name: 'Glowbiotic — Ornamental Fish/Shrimps',
        category: 'Glowbiotic — Ornamental Fish/Shrimps',
        label: 'Side View',
        price: 399,
        image: './a.png',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI12CStzq6Ut_oGyPV3cd8V6I3of06djR21kJ46xb0kcLhrwIGHKQQBfX-Alt0poTq2heQlFVn2RfPG1ApMxmLWJ0YKhneH844POFbGCNT40SZXJ4-ZkmiOs6kr0nbi_jL1JO3clgoFHC8BrZ3_Q5T_2dmGozDY7_W9RQj14RDq5ZAw3FOy9byVa50LS-VKMPUfhwuPaSnZGc1XzvkN6-rvp5mlUucQewr1Bo1y4lyqC4IC_3cgJ27w6u_pyseO_7XCz7RT-XCKVs',
        description: 'Enhances natural coloration and vitality in aquaculture species through specialized pigments.',
        rating: 5,
        badge: 'New Arrival',
        advantages: [
            'Skin Luminosity',
            'Color Vitality',
            'Collagen Support',
            'Deep Hydration'
        ]
    },
    // {
    //     id: 'sole',
    //     name: 'Pro X',
    //     category: 'Camera',
    //     label: 'Sole View',
    //     price: 1299,
    //     image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr56EaUW6L7tsyjlj8pCqV3sGc7eY9rhKDrWYLqug0eiLcCtj7LDrCnw5vXcGmMjcFN8Ln1zeCa_x6rLigJc9GrfARLLbHWTddeZhl86uiPW_oUbF5yMVxqUk89yUU8P8PIBvYR8Ab6djhf6NmfYmP0mZkWnHsRaO2VyTpyE6J_7jOR5e-KBHpMM-9BFpqYqapOdpkow2MZ4YKtbdG6oAWJNYCX3K3-R8yXK0DC5TeKcEO-3afoPnmWP5YzB1rDRzEIA9z3Q-yLrE6',
    //     thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBX7kLvudUL0XpQ-VkBUqNkuh3pmTvpwSJWJTvHDq770Bqy67khiaglnMOlyMaqZtEP5LvNPWuti5QX5Zh87IIHyr0-AQbxSbb1MJLyQlEyh0M_pYDESFVZHoZtqY0rfE9bONYuOUzbtUmiNoUbO4DaitRwexDius4l8dbEGhkU6VP88uktXzXxK5H5HoRi01Xa38Mv41LLH4YBQGzPPE1i8FmhIw1hSKN010Sq9h-',
    //     description: 'Capture professional-grade photos and videos with cutting-edge sensor technology and premium optics.',
    //     rating: 4.5,
    //     badge: 'New Arrival',
    //     advantages: [
    //         '50MP Full-Frame Sensor',
    //         '8K Video Recording',
    //         'Dual Image Stabilization',
    //         'Professional Lens Mount'
    //     ]
    // }
];

const productViews: ProductView[] = [
    {
        id: 'main',
        label: 'Main View',
        image: './a.png'
    },
    {
        id: 'side',
        label: 'Side View',
        image: './a.png'
    },
 
];

interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    text: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Alex M.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The sound clarity on the Sonic Pro is unmatched. I can hear details in my favorite tracks I never noticed before!"
    },
    {
        id: 2,
        name: "Sarah J.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "My Series 5 watch has transformed my fitness routine. The health tracking is incredibly accurate and motivating."
    },
    {
        id: 3,
        name: "David K.",
        avatar: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 4.5,
        text: "Pro X camera takes stunning low-light photos. It's surprisingly lightweight for such a powerful piece of gear."
    },
    {
        id: 4,
        name: "Emily R.",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        text: "Battery life on the headphones is a game changer. I went a whole week without charging them!"
    },
    {
        id: 5,
        name: "Michael B.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        text: "The build quality of these products is premium. You can feel the durability and attention to detail."
    }
];

export function LuminaReveal() {
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
    const [selectedView, setSelectedView] = useState<string>('main');
    const currentView = productViews.find(v => v.id === selectedView) || productViews[0];
    const [selectedProductId, setSelectedProductId] = useState<string>('sonic-pro');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    // Rotate reviews every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];
    const currentIndex = products.findIndex(p => p.id === selectedProductId);

    // Auto-rotate products every 3 seconds
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setSelectedProductId(prevId => {
                const currentIdx = products.findIndex(p => p.id === prevId);
                const nextIdx = (currentIdx + 1) % products.length;
                return products[nextIdx].id;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [isPaused]);
    return (
        <div className="relative right-[70px] flex h-screen w-full flex-col overflow-hidden ">
            {/* Top Navigation (Absolute Overlay) */}

            <div className="hidden md:flex absolute left-[200px] top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-20">
                <div className="flex flex-col gap-4 items-center">
                    {products.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => setSelectedProductId(product.id)}
                            className={`w-1 rounded-full transition-all duration-300 ${selectedProductId === product.id
                                ? 'h-12 bg-[#25aff4] shadow-[0_0_10px_rgba(37,175,244,0.8)]'
                                : 'h-3 bg-white/20 hover:bg-white/50 hover:h-6'
                                }`}
                        />
                    ))}
                </div>

            </div>
            {/* Cinematic Product Stage */}
            <main className="flex-grow flex flex-col relative items-center justify-center w-full h-full ">
                {/* Atmospheric Background Glow */}
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,175,244,0.15)_0%,rgba(16,28,34,0)_70%)] pointer-events-none z-0"></div> */}

                {/* Main Product Display */}
                <div className="relative z-10 w-full max-w-[1400px] h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 pt-20 pb-28 md:pb-20">
                    {/* Floating Info Panel (Left) */}


                    {/* Product Hero Image (Right/Center) */}
                    <div className="order-1 md:order-2 flex-1 relative flex  flex-col  justify-center h-[50vh] md:h-auto w-full">
                        {/* Circular Spotlight Graphic */}
                        <div className=' flex items-center justify-center '>
                            <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center animate-pulse">
                                <div className="w-[70%] h-[70%] rounded-full border border-white/5 bg-white/[0.02]"></div>
                            </div>

                            {/* Product Image */}
                            <motion.div
                                className="relative z-10 w-full h-full flex items-center justify-center transform hover:scale-105 transition-transform duration-700 ease-out cursor-pointer group"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                                key={selectedProduct.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div
                                    className="w-[80%] md:w-[500px] aspect-square bg-contain bg-center bg-no-repeat drop-shadow-2xl scale-x-[-1]"
                                    style={{ backgroundImage: `url(${selectedProduct.image})` }}
                                />

                                {/* Interactive Hotspot */}
                                <div className="absolute top-1/3 right-1/4 size-4 bg-[#25aff4] rounded-full animate-ping opacity-75 hidden group-hover:block"></div>
                                <div className="absolute top-1/3 right-1/4 size-3 bg-white rounded-full shadow-[0_0_10px_rgba(37,175,244,0.8)] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs whitespace-nowrap border border-white/10">
                                        {selectedProduct.advantages[0]}
                                    </div>
                                </div>
                            </motion.div>
                            {/* -------------------- */}
                        </div>
                        <div className="mt-4 p-4 ml-[140px] rounded-xl bg-[#192233]/50 border border-gray-200 dark:border-[#232f48] w-[510px] h-[120px] relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={reviews[currentReviewIndex].id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-start gap-3 absolute inset-4"
                                >
                                    <div className="size-8 rounded-full overflow-hidden bg-gray-600 shrink-0">
                                        <img alt={reviews[currentReviewIndex].name} className="w-full h-full object-cover" src={reviews[currentReviewIndex].avatar} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{reviews[currentReviewIndex].name}</span>
                                            <div className="flex text-amber-400">
                                                {[...Array(Math.floor(reviews[currentReviewIndex].rating))].map((_, i) => (
                                                    <span key={i} className="material-symbols-outlined text-[14px]">star</span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-600 dark:text-[#92a4c9] leading-normal">"{reviews[currentReviewIndex].text}"</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>


                    {/* Right Side Controls (Pagination / Sound) */}

                    <div className="order-2 md:order-2 flex flex-col gap-6 md:gap-8 max-w-md animate-fade-in-up z-20">
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#25aff4]/10 text-[#25aff4] text-xs font-bold tracking-widest uppercase border border-[#25aff4]/20">
                                {selectedProduct.badge || 'New Release'}
                            </span>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={selectedProduct.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-tight uppercase mb-4"
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                    >
                                        {/* {selectedProduct.name} <br /> */}
                                        <span className="premium-text-gradient">
                                            {selectedProduct.category}
                                        </span>
                                    </h1>
                                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-sm">
                                        {selectedProduct.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="flex items-center gap-6">
                            {/* <span className="text-2xl font-bold text-white">${selectedProduct.price}</span> */}
                            <button className="flex items-center gap-2 bg-[#25aff4] hover:bg-blue-500 text-[#101c22] font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,175,244,0.3)]">
                                <span>request a quote</span>
                                <ShoppingBag size={18} />
                            </button>
                        </div>
                        {/* Tech Specs Row */}
                        <div className="flex gap-4 mt-4 pt-6 border-t border-white/10 overflow-x-auto">
                            {selectedProduct.advantages.slice(0, 3).map((advantage, i) => (
                                <div key={i} className="flex flex-col min-w-[80px]">
                                    <span className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Feature {i + 1}</span>
                                    <span className="text-white text-xs font-medium leading-tight">{advantage}</span>
                                </div>
                            ))}
                        </div>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 bg-[#0f1720]/80 backdrop-blur-2xl p-3 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full sm:w-auto lg:w-[520px] relative z-20 overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0, translateY: [0, -5, 0] }}
                            transition={{
                                opacity: { delay: 0.6, duration: 0.7 },
                                y: { delay: 0.6, duration: 0.7 },
                                translateY: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                            }}
                        >
                            {/* Holographic Scanner Beam */}
                            <motion.div
                                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#25aff4]/10 to-transparent pointer-events-none z-0"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            />

                            {products.map((product, index) => (
                                <motion.label
                                    key={product.id}
                                    className={`cursor-pointer group flex items-center gap-3 p-2 pr-4 rounded-xl transition-all w-full sm:w-auto relative overflow-hidden z-10 ${selectedProductId === product.id
                                        ? 'bg-[#25aff4]/10 border border-[#25aff4]/50 shadow-[0_0_15px_rgba(37,175,244,0.15)]'
                                        : 'hover:bg-white/5 border border-transparent hover:border-white/10'
                                        }`}
                                    onClick={() => setSelectedProductId(product.id)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <input
                                        type="radio"
                                        name="product_select"
                                        className="hidden"
                                        checked={selectedProductId === product.id}
                                        onChange={() => setSelectedProductId(product.id)}
                                    />
                                    <div className={`size-12 rounded-[10px] overflow-hidden flex items-center justify-center border transition-all duration-300 ${selectedProductId === product.id ? 'border-[#25aff4] shadow-[0_0_10px_rgba(37,175,244,0.4)]' : 'border-white/5 bg-black/40'}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={`w-full h-full object-cover transition-opacity duration-300 ${selectedProductId === product.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'
                                                }`}
                                        />
                                    </div>
                                    <div className={`flex flex-col transition-opacity duration-300 ${selectedProductId === product.id ? 'opacity-100' : 'opacity-50 group-hover:opacity-90'
                                        }`}>
                                        <span className="text-xs font-bold uppercase tracking-wide text-white">{product.name}</span>
                                        <span className={`text-[10px] font-medium ${selectedProductId === product.id ? 'text-[#25aff4]' : 'text-gray-500'
                                            }`}>
                                            {product.category}
                                        </span>
                                    </div>
                                    {selectedProductId === product.id && (
                                        <motion.div
                                            className="absolute inset-0 border border-[#25aff4]/50 rounded-xl pointer-events-none"
                                            layoutId="activeProductBorder"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </motion.label>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Floating Dock */}


                {/* FAB for mobile (Quick Action) */}
                <div className="md:hidden absolute bottom-24 right-6 z-40">
                    <button className="flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#25aff4] text-[#101c22] shadow-lg shadow-[#25aff4]/30">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
