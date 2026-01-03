"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    {
      title:"HOME",
      href:"/"
    },
    {
        title: "PRODUCT",
        href: "/products",
        dropdown: [
            { title: "ALL PRODUCTS", href: "/products" },
            { title: "FERMBIOTIC", href: "/products/fermbiotic" },
            { title: "BLEUBIOTIC", href: "/products/bleubiotic" },
            { title: "SPIROTIC", href: "/products/spirotic" },
            { title: "ALGABIOTIC", href: "/products/algabiotic" },
            { title: "GLOWBIOTIC", href: "/products/glowbiotic" },
        ],
    },
    {
        title: "COMPANY",
        href: "/about",
        dropdown: [
            { title: "ABOUT US", href: "/about" },
            { title: "GLOBAL IMPACT", href: "/global-impact" },
        ],
    },
     {
        title: "INNOVATION",
        href: "/innovation",
        
    },
    {
        title: "CONTACT",
        href: "/contact",
        dropdown: null,
    },
];

export function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-[#131313]/20 backdrop-blur-md py-1 bg-[#131313]" : "bg-transparent py-1 bg-[#131313]"
            )}
        >
            <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-widest text-white flex items-center gap-2">
                    {/* <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 animate-pulse" />
                    AROORA */}
                    <img src='../images (3).png' className="w-[80px]" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group h-16 flex items-center"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Link
                                href={item.href}
                                className="text-sm font-medium tracking-wider text-white/80 hover:text-white transition-colors flex items-center gap-1 group-hover:text-green-400"
                            >
                                {item.title}
                                {item.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                            </Link>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {hoveredIndex === index && item.dropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4"
                                    >
                                        <div className="bg-[#0A2540]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl p-4 relative">
                                            {/* Algae Particle Placeholder Effect */}
                                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(15,165,125,0.2),_transparent_70%)] animate-pulse" />
                                            </div>

                                            <div className="flex flex-col gap-2 relative z-10">
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="text-white/70 hover:text-[#0FA57D] hover:bg-white/5 px-3 py-2 rounded-lg transition-all text-sm tracking-wide"
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed top-20 left-0 w-full bg-[#0A2540] z-40 overflow-y-auto"
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {navItems.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-xl font-bold text-white"
                                    >
                                        {item.title}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subItem.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="text-white/60 hover:text-green-400"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

