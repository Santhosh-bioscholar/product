'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        name: 'Sonic Pro',
        label: 'Main View',
        category: 'Headphones',
        price: 299,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyrG5UziZBkUk68JGA2RJdmDV5kbcrmTVHGoQY3EoWDDcc3YxS7DiErhkuaLFhUfrng7sOkgPFhNya6Qk0VLypUbWAdNWHiMADbABMjVz4KMSm762W1VzaxWQO-P1_C0d9DiqBqjRX4JTvSbqIrQi_uGqR8VnT-_La-l0W8pixSIq13WLtP72ix3fwjyh-sRCF_W8Y6UCdG1j7cY21tCfDRGlSJif95IuIFDRoEnjS6UEnj-7DEexJTXnqXLzbG2VaLuIcO-7KDEVb',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA82aDMc5ozeD_GyFx6b-NQNHjJLkaqk7pp0KrXmM4eXG9Yo_8fBzp_WdNNax0xAsnuW0zIdHwoUVuM2LShaHyAMIT9PbrQzU-jM5QaGw2EHz1D7VYFpvUKfZW-p96IRnZCb5Tmjw_ur2qB8d3-gky3efBiyucfW6uVNMhvY3eOUREpHSLPzr_kqQwdKVeK7vIpfcDdP-OL4R2bDjxM7xs0mUunlgVCrIDicRIwChI0_WCSY86Fv9ypLL2teHN-z-_c8MdhPZe9tB8',
        description: 'Experience sound like never before with active noise cancellation and 40-hour battery life. Immerse yourself .',
        rating: 4.5,
        badge: 'New Arrival',
        advantages: [
            'Active Noise Cancellation',
            '40-Hour Battery Life',
            'Premium Sound Quality',
            'Wireless Fast Charging'
        ]
    },
    {
        id: 'side',
        name: 'Series 5',
        category: 'Smart Watch',
        label: 'Side View',
        price: 399,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQTb6PHph297KnEwiMk8Mt3-feRvNoJ1wFFHiR_kSpcPrd6WWF_dWaLjKuCs31p0e7hkPIgEmvitjrKO3BDQUw-XjOxsiYaxGfA7EM_CWEY0kBTg9y4rndD6dlXGJHDWCAJ_HGbjS5brBaBADrzGm6rprWZKns1BjaY8EmbQ8BwgICd0nvwf9ObZCFLFXrE5U3U42p0667fVjFTu8UHdoSuqqg81ilyi4ebWurXrs_6P4Bx3Vl_EFSw8wgTkpOkQF2dq5WCLvEAtYE',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI12CStzq6Ut_oGyPV3cd8V6I3of06djR21kJ46xb0kcLhrwIGHKQQBfX-Alt0poTq2heQlFVn2RfPG1ApMxmLWJ0YKhneH844POFbGCNT40SZXJ4-ZkmiOs6kr0nbi_jL1JO3clgoFHC8BrZ3_Q5T_2dmGozDY7_W9RQj14RDq5ZAw3FOy9byVa50LS-VKMPUfhwuPaSnZGc1XzvkN6-rvp5mlUucQewr1Bo1y4lyqC4IC_3cgJ27w6u_pyseO_7XCz7RT-XCKVs',
        description: 'Track your fitness, monitor your health, and stay connected with the most advanced smartwatch technology.',
        rating: 5,
        badge: 'New Arrival',
        advantages: [
            'Advanced Health Monitoring',
            'Water Resistant 50M',
            'Built-in GPS Tracking',
            '7-Day Battery Life'
        ]
    },
    {
        id: 'sole',
        name: 'Pro X',
        category: 'Camera',
        label: 'Sole View',
        price: 1299,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr56EaUW6L7tsyjlj8pCqV3sGc7eY9rhKDrWYLqug0eiLcCtj7LDrCnw5vXcGmMjcFN8Ln1zeCa_x6rLigJc9GrfARLLbHWTddeZhl86uiPW_oUbF5yMVxqUk89yUU8P8PIBvYR8Ab6djhf6NmfYmP0mZkWnHsRaO2VyTpyE6J_7jOR5e-KBHpMM-9BFpqYqapOdpkow2MZ4YKtbdG6oAWJNYCX3K3-R8yXK0DC5TeKcEO-3afoPnmWP5YzB1rDRzEIA9z3Q-yLrE6',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBX7kLvudUL0XpQ-VkBUqNkuh3pmTvpwSJWJTvHDq770Bqy67khiaglnMOlyMaqZtEP5LvNPWuti5QX5Zh87IIHyr0-AQbxSbb1MJLyQlEyh0M_pYDESFVZHoZtqY0rfE9bONYuOUzbtUmiNoUbO4DaitRwexDius4l8dbEGhkU6VP88uktXzXxK5H5HoRi01Xa38Mv41LLH4YBQGzPPE1i8FmhIw1hSKN010Sq9h-',
        description: 'Capture professional-grade photos and videos with cutting-edge sensor technology and premium optics.',
        rating: 4.5,
        badge: 'New Arrival',
        advantages: [
            '50MP Full-Frame Sensor',
            '8K Video Recording',
            'Dual Image Stabilization',
            'Professional Lens Mount'
        ]
    }
];

const productViews: ProductView[] = [
    {
        id: 'main',
        label: 'Main View',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyrG5UziZBkUk68JGA2RJdmDV5kbcrmTVHGoQY3EoWDDcc3YxS7DiErhkuaLFhUfrng7sOkgPFhNya6Qk0VLypUbWAdNWHiMADbABMjVz4KMSm762W1VzaxWQO-P1_C0d9DiqBqjRX4JTvSbqIrQi_uGqR8VnT-_La-l0W8pixSIq13WLtP72ix3fwjyh-sRCF_W8Y6UCdG1j7cY21tCfDRGlSJif95IuIFDRoEnjS6UEnj-7DEexJTXnqXLzbG2VaLuIcO-7KDEVb'
    },
    {
        id: 'side',
        label: 'Side View',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQTb6PHph297KnEwiMk8Mt3-feRvNoJ1wFFHiR_kSpcPrd6WWF_dWaLjKuCs31p0e7hkPIgEmvitjrKO3BDQUw-XjOxsiYaxGfA7EM_CWEY0kBTg9y4rndD6dlXGJHDWCAJ_HGbjS5brBaBADrzGm6rprWZKns1BjaY8EmbQ8BwgICd0nvwf9ObZCFLFXrE5U3U42p0667fVjFTu8UHdoSuqqg81ilyi4ebWurXrs_6P4Bx3Vl_EFSw8wgTkpOkQF2dq5WCLvEAtYE'
    },
    {
        id: 'sole',
        label: 'Sole View',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr56EaUW6L7tsyjlj8pCqV3sGc7eY9rhKDrWYLqug0eiLcCtj7LDrCnw5vXcGmMjcFN8Ln1zeCa_x6rLigJc9GrfARLLbHWTddeZhl86uiPW_oUbF5yMVxqUk89yUU8P8PIBvYR8Ab6djhf6NmfYmP0mZkWnHsRaO2VyTpyE6J_7jOR5e-KBHpMM-9BFpqYqapOdpkow2MZ4YKtbdG6oAWJNYCX3K3-R8yXK0DC5TeKcEO-3afoPnmWP5YzB1rDRzEIA9z3Q-yLrE6'
    }
];

export function NeonStoreBanner() {
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

    const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];
    const currentIndex = products.findIndex(p => p.id === selectedProductId);

    // Auto-rotate products every 3 seconds


    return (
        <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="./bleubiotic.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#101c22]/80 via-[#101c22]/60 to-[#101c22] mix-blend-multiply"></div>
            </div>

            {/* Header */}


            {/* Hero Section */}
            <main className="flex-grow flex items-center justify-center py-12 lg:py-20 relative">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#13ec6d]/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-[1280px] w-full px-6 lg:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left: Product Details */}
                        <motion.div
                            className="lg:col-span-4 flex flex-col gap-8 w-[400px] text-center lg:text-left order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex flex-col  gap-2">
                                <span className="text-[#13ec6d] font-bold tracking-widest text-xs uppercase">New Arrival</span>
                                <h1 className="text-4xl lg:text-6xl mb-[375px] font-black leading-tight tracking-tight">
                                    {selectedProduct.name} <br />
                                    {selectedProduct.category}{' '}

                                </h1>
                                <div className="absolute bottom-21 left-1 lg:left-1 z-20 hidden lg:block">
                                    <div className="border border-white/70 bg-white/10  backdrop-blur-2xl w-[600px] flex">
                                        {/* Left Column */}
                                        <div className="flex-1 flex flex-col border-r border-white/30">
                                            {/* Top Row */}
                                            <div className="flex p-6 border-b border-white/30 gap-8">
                                                <h3 className="text-white font-bold tracking-widest text-sm leading-relaxed whitespace-nowrap">
                                                    EXPLORED<br />
                                                    AND<br />
                                                    DISCOVERED
                                                </h3>
                                                <p className="text-white/60 text-[10px] leading-relaxed">
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wis
                                                </p>
                                            </div>
                                            {/* Bottom Row */}
                                            <div className="flex items-center justify-between p-4 px-6">
                                                <div className="flex gap-4">
                                                    {[80, 50, 70].map((val, i) => (
                                                        <div key={i} className="relative size-12 flex items-center justify-center">
                                                            <svg className="size-full -rotate-90">
                                                                <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                                                                <circle
                                                                    cx="24" cy="24" r="20"
                                                                    fill="none"
                                                                    stroke="white"
                                                                    strokeWidth="3"
                                                                    strokeDasharray={`${val * 1.25} 125`}
                                                                    strokeLinecap="round"
                                                                />
                                                            </svg>
                                                            <span className="absolute text-[10px] font-bold">{val}%</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <span className="text-3xl font-bold tracking-widest text-white">2020</span>
                                            </div>
                                        </div>

                                        {/* Right Column (Chart) */}
                                        <div className="w-[200px] relative p-4 flex items-end">
                                            {/* Pins */}
                                            <div className="absolute top-10 left-10 flex flex-col items-center z-10">
                                                <div className="size-5 bg-white rounded-full rounded-br-none -rotate-45 flex items-center justify-center shadow-lg transform -translate-y-1">
                                                    <span className="rotate-45 text-black font-bold text-[8px]">01</span>
                                                </div>
                                            </div>
                                            <div className="absolute top-16 left-20 flex flex-col items-center z-10">
                                                <div className="size-5 bg-white rounded-full rounded-br-none -rotate-45 flex items-center justify-center shadow-lg transform -translate-y-1">
                                                    <span className="rotate-45 text-black font-bold text-[8px]">02</span>
                                                </div>
                                            </div>
                                            <div className="absolute top-6 left-28 flex flex-col items-center z-10">
                                                <div className="size-5 bg-white rounded-full rounded-br-none -rotate-45 flex items-center justify-center shadow-lg transform -translate-y-1">
                                                    <span className="rotate-45 text-black font-bold text-[8px]">03</span>
                                                </div>
                                            </div>
                                            <div className="absolute top-12 left-36 flex flex-col items-center z-10">
                                                <div className="size-5 bg-white rounded-full rounded-br-none -rotate-45 flex items-center justify-center shadow-lg transform -translate-y-1">
                                                    <span className="rotate-45 text-black font-bold text-[8px]">04</span>
                                                </div>
                                            </div>

                                            {/* Mountain Chart */}
                                            <svg viewBox="0 0 200 80" className="w-full h-20">
                                                <path
                                                    d="M0,80 L30,40 L60,60 L90,10 L120,50 L150,30 L200,80 Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            {/* Months */}
                                            <div className="absolute bottom-1 left-0 right-0 flex justify-between px-2 text-[8px] tracking-widest text-white/60 font-medium">
                                                <span>FEB</span>
                                                <span>MAR</span>
                                                <span>APR</span>
                                                <span>MAY</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            {/* <motion.div
                                                        className="flex mt-[25px] flex-col sm:flex-row gap-3 bg-[#1c2630]/60 backdrop-blur-md p-2 rounded-2xl border border-white/10 w-full sm:w-auto lg:w-[480px]"
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.6, duration: 0.7 }}
                                                    >
                                                        {products.map((product, index) => (
                                                            <motion.label
                                                                key={product.id}
                                                                className={`cursor-pointer group flex items-center gap-3 p-2 pr-4 rounded-xl transition-all w-full sm:w-auto relative overflow-hidden ${selectedProductId === product.id
                                                                    ? 'bg-[#233648] border border-[#2b8cee]/50'
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
                                                                <div className="size-12 rounded-[12px] bg-black/40 overflow-hidden flex items-center justify-center border border-white/5">
                                                                    <img
                                                                        src={product.thumbnail}
                                                                        alt={product.name}
                                                                        className={`w-full h-full object-cover transition-opacity ${selectedProductId === product.id ? 'opacity-80' : 'opacity-60 group-hover:opacity-100'
                                                                            }`}
                                                                    />
                                                                </div>
                                                                <div className={`flex flex-col transition-opacity ${selectedProductId === product.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                                                                    }`}>
                                                                    <span className="text-xs font-bold uppercase tracking-wide">{product.name}</span>
                                                                    <span className={`text-[10px] font-medium ${selectedProductId === product.id ? 'text-[#2b8cee]' : 'text-gray-400'
                                                                        }`}>
                                                                        {product.category}
                                                                    </span>
                                                                </div>
                                                                {selectedProductId === product.id && (
                                                                    <motion.div
                                                                        className="absolute inset-0 border-2 border-[#2b8cee] rounded-xl pointer-events-none"
                                                                        layoutId="activeProductBorder"
                                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                                    />
                                                                )}
                                                            </motion.label>
                                                        ))}
                                                    </motion.div> */}
                        </motion.div>

                        {/* Right: Interactive Display */}
                        <div className="lg:col-span-8 left-[120px] relative flex flex-col items-center justify-center order-1 lg:order-2 h-[500px] lg:h-full gap-32">
                            <div className="relative z-10 w-full h-full  flex items-center justify-center transform hover:scale-105 transition-transform duration-700 ease-out cursor-pointer group">
                               
                               <div className='border p-5  pb-0'> <div
                                    className="w-[80%] md:w-[600px]   pt-0 aspect-square bg-contain bg-center bg-no-repeat drop-shadow-2xl"
                                    style={{ backgroundImage: "url(./bleubiotic.png)" }}
                                />
                                </div>

                                {/* Interactive Hotspot */}
                                <div className="absolute top-1/3 right-1/4 size-4 bg-[#25aff4] rounded-full animate-ping opacity-75 hidden group-hover:block"></div>
                                <div className="absolute top-1/3 right-1/4 size-3 bg-white rounded-full shadow-[0_0_10px_rgba(37,175,244,0.8)] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs whitespace-nowrap border border-white/10">
                                        Memory Foam Cups
                                    </div>
                                </div>
                            </div>
                            {/* Left Thumbnail */}


                            {/* Main Circular Display */}





                        </div>
                    </div>

                    {/* Mobile Thumbnails */}
                    <div className="flex sm:hidden justify-center gap-4 mt-8">
                        {productViews.map((view) => (
                            <button
                                key={view.id}
                                onClick={() => setSelectedView(view.id)}
                                className={`size-16 rounded-full border-2 ${selectedView === view.id ? 'border-[#13ec6d]' : 'border-[#234833] opacity-70'} bg-[#1c3326] overflow-hidden p-1`}
                            >
                                <img
                                    src={view.image}
                                    alt={view.label}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </main>
            <div className='ml-35 pb-3'>
                    <motion.div
                                                                        className="flex  flex-col sm:flex-row gap-3 bg-[#1c2630]/60 backdrop-blur-md p-2 rounded-2xl border border-white/10 w-full sm:w-auto lg:w-[480px]  "
                                                                        initial={{ opacity: 0, y: 50 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: 0.6, duration: 0.7 }}
                                                                    >
                                                                        {products.map((product, index) => (
                                                                            <motion.label
                                                                                key={product.id}
                                                                                className={`cursor-pointer group flex items-center gap-3 p-2 pr-4 rounded-xl transition-all w-full sm:w-auto relative overflow-hidden ${selectedProductId === product.id
                                                                                    ? 'bg-[#233648] border border-[#2b8cee]/50'
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
                                                                                <div className="size-12 rounded-[12px] bg-black/40 overflow-hidden flex items-center justify-center border border-white/5">
                                                                                    <img
                                                                                        src={product.thumbnail}
                                                                                        alt={product.name}
                                                                                        className={`w-full h-full object-cover transition-opacity ${selectedProductId === product.id ? 'opacity-80' : 'opacity-60 group-hover:opacity-100'
                                                                                            }`}
                                                                                    />
                                                                                </div>
                                                                                <div className={`flex flex-col transition-opacity ${selectedProductId === product.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                                                                                    }`}>
                                                                                    <span className="text-xs font-bold uppercase tracking-wide">{product.name}</span>
                                                                                    <span className={`text-[10px] font-medium ${selectedProductId === product.id ? 'text-[#2b8cee]' : 'text-gray-400'
                                                                                        }`}>
                                                                                        {product.category}
                                                                                    </span>
                                                                                </div>
                                                                                {selectedProductId === product.id && (
                                                                                    <motion.div
                                                                                        className="absolute inset-0 border-2 border-[#2b8cee] rounded-xl pointer-events-none"
                                                                                        layoutId="activeProductBorder"
                                                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                                                    />
                                                                                )}
                                                                            </motion.label>
                                                                        ))}
                                                                    </motion.div></div>
        </div>
    );
}
