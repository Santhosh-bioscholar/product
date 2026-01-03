'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Search, RotateCcw, ZoomIn, ZoomOut, Star, Check } from 'lucide-react';

interface Product {
    id: string;
    name: string;
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
        id: 'sonic-pro',
        name: 'Sonic Pro',
        category: 'Headphones',
        price: 299,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnEoJ9kL_q9gvjuhhasw5lvhE3hdfwbi_Ef7Ptj-TgQJZOEvFruAY1_QM9AVRVc-FqvXaNIAEuZGFT4vXAxRXWP5MKtC-UyCm7yrnifCGSTtslpiwjSBwemg86hO9_Zk7koJjCJtnrWmhtY9uQu53cseWehleMmf8aTQeTbSOBw8abXOJbzCd247QYviHR4W5vKYzv0SKmqfEGgarfKuaDOfSLdPGAoMWL-BAm_on65mTR3ytG0WfGtaIDJmilU4dnZJ2exRNHF2Q',
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
        id: 'series-5',
        name: 'Series 5',
        category: 'Smart Watch',
        price: 399,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI12CStzq6Ut_oGyPV3cd8V6I3of06djR21kJ46xb0kcLhrwIGHKQQBfX-Alt0poTq2heQlFVn2RfPG1ApMxmLWJ0YKhneH844POFbGCNT40SZXJ4-ZkmiOs6kr0nbi_jL1JO3clgoFHC8BrZ3_Q5T_2dmGozDY7_W9RQj14RDq5ZAw3FOy9byVa50LS-VKMPUfhwuPaSnZGc1XzvkN6-rvp5mlUucQewr1Bo1y4lyqC4IC_3cgJ27w6u_pyseO_7XCz7RT-XCKVs',
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
        id: 'pro-x',
        name: 'Pro X',
        category: 'Camera',
        price: 1299,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBX7kLvudUL0XpQ-VkBUqNkuh3pmTvpwSJWJTvHDq770Bqy67khiaglnMOlyMaqZtEP5LvNPWuti5QX5Zh87IIHyr0-AQbxSbb1MJLyQlEyh0M_pYDESFVZHoZtqY0rfE9bONYuOUzbtUmiNoUbO4DaitRwexDius4l8dbEGhkU6VP88uktXzXxK5H5HoRi01Xa38Mv41LLH4YBQGzPPE1i8FmhIw1hSKN010Sq9h-XhPl9aN6GVBbN2hmCdlWNlL0Pigj0Lcy2hg',
        thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBX7kLvudUL0XpQ-VkBUqNkuh3pmTvpwSJWJTvHDq770Bqy67khiaglnMOlyMaqZtEP5LvNPWuti5QX5Zh87IIHyr0-AQbxSbb1MJLyQlEyh0M_pYDESFVZHoZtqY0rfE9bONYuOUzbtUmiNoUbO4DaitRwexDius4l8dbEGhkU6VP88uktXzXxK5H5HoRi01Xa38Mv41LLH4YBQGzPPE1i8FmhIw1hSKN010Sq9h-XhPl9aN6GVBbN2hmCdlWNlL0Pigj0Lcy2hg',
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

export function Product3DBanner() {
    const [selectedProductId, setSelectedProductId] = useState<string>('sonic-pro');
    const [searchQuery, setSearchQuery] = useState('');

    const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];
    const currentIndex = products.findIndex(p => p.id === selectedProductId);

    // Auto-rotate products every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setSelectedProductId(prevId => {
                const currentIdx = products.findIndex(p => p.id === prevId);
                const nextIdx = (currentIdx + 1) % products.length;
                return products[nextIdx].id;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[#101922] text-white flex flex-col">
            {/* Top Navigation */}


            {/* 3D Hero Section */}
            <main className="flex-1 relative w-full flex flex-col lg:flex-row overflow-hidden bg-[#101922] group/scene">
                {/* Background Scene */}
              

                {/* Interactive 3D Product Image */}
                <div className="absolute rounded-[16px] inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={selectedProduct.id}
                            src={selectedProduct.image}
                            alt={`${selectedProduct.name} ${selectedProduct.category}`}
                            className="w-[60%] rounded-[26px] max-w-[500px] object-contain drop-shadow-[0_20px_50px_rgba(43,140,238,0.3)] pointer-events-auto cursor-grab active:cursor-grabbing"
                    
                        />
                    </AnimatePresence>
                </div>

                {/* Interaction Hint */}


                {/* Content Overlay */}
                <div className="relative z-10 w-full max-w-[1600px] mx-auto p-6 lg:p-10 flex flex-col justify-between h-full min-h-[600px] pointer-events-none">
                    {/* Top Row: Variant Info */}
                    <div className="flex justify-end w-full pointer-events-auto">
                        <motion.div
                            className="px-3 py-1 rounded-full bg-[#1c2630]/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Variant {currentIndex + 1}/{products.length}
                        </motion.div>
                    </div>

                    {/* Middle Row: Product Details Card */}
                    <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-10 flex-1">
                        {/* Info Panel (Glassmorphism) */}
                        <motion.div
                            className="w-full max-w-md pointer-events-auto"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="bg-[#1c2630]/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden group/card">
                                {/* Decorative glow */}
                                <div className="absolute -top-10 -right-10 size-32 bg-[#2b8cee]/20 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative flex flex-col gap-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <AnimatePresence mode="wait">
                                            {selectedProduct.badge && (
                                                <motion.span
                                                    key={selectedProduct.id + '-badge'}
                                                    className="bg-[#2b8cee]/20 text-[#2b8cee] text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {selectedProduct.badge}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                        {/* <div className="flex gap-0.5 text-yellow-500 text-xs">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3.5 h-3.5 ${i < Math.floor(selectedProduct.rating)
                                                            ? 'fill-current'
                                                            : i < selectedProduct.rating
                                                                ? 'fill-current opacity-50'
                                                                : 'fill-none'
                                                        }`}
                                                />
                                            ))}
                                        </div> */}
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={selectedProduct.id + '-info'}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h1 className="text-4xl sm:text-5xl font-black leading-[0.9] tracking-tighter mb-2">
                                                {selectedProduct.name} <br />
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b8cee] to-blue-400">
                                                    {selectedProduct.category}
                                                </span>
                                            </h1>
                                            <p className="text-gray-400 text-sm leading-relaxed mt-4 border-l-2 border-[#2b8cee]/50 pl-3">
                                                {selectedProduct.description}
                                            </p>

                                            {/* Animated Advantages Checklist */}
                                            <div className="mt-6 space-y-2">
                                                {selectedProduct.advantages.map((advantage, index) => (
                                                    <motion.div
                                                        key={`${selectedProduct.id}-advantage-${index}`}
                                                        className="flex items-center gap-3"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                                                    >
                                                        <motion.div
                                                            className="flex-shrink-0 w-5 h-5 rounded-full bg-[#2b8cee]/20 flex items-center justify-center"
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{
                                                                delay: 0.5 + (index * 0.1) + 0.2,
                                                                type: "spring",
                                                                stiffness: 500,
                                                                damping: 15
                                                            }}
                                                        >
                                                            <Check className="w-3 h-3 text-[#2b8cee]" strokeWidth={3} />
                                                        </motion.div>
                                                        <span className="text-sm text-gray-300 font-medium">
                                                            {advantage}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Price</p>
                                            <p className="text-2xl font-bold">${selectedProduct.price}.00</p>
                                        </div>
                                        </div> */}
                                    <motion.button
                                        className="flex w-[150px] items-center gap-2 bg-[#2b8cee] text-white px-6 py-3 rounded-xl font-bold text-sm"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: '#1e7acc',
                                            boxShadow: '0 0 20px rgba(43,140,238,0.4)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    >
                                        <span>Add to Cart</span>
                                        <span>→</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Row: Controls & Selector */}
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-6 pt-10 pointer-events-auto">
                        {/* View Controls */}

                        <div></div>
                        {/* Product Selector */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 bg-[#1c2630]/60 backdrop-blur-md p-2 rounded-2xl border border-white/10 w-full sm:w-auto"
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
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}
