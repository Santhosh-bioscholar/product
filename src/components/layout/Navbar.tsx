"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaChevronRight } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";




const navItems = [
  { title: "HOME", href: "/" },
  {
    title: "PRODUCT",
    href: "",
    megaMenu: {
      categories: [
        {
          title: "Animal Feed",
          icon: <FaPaw />,
          solutions: [
            { title: "ALGABIOTIC", href: "/products/algabiotic" },
            { title: "GLOWBIOTIC", href: "/products/glowbiotic" },
          ],
        },
        {
          title: "Food Supplements",
          icon: <MdFoodBank />,
          solutions: [
            { title: "FERMBIOTIC", href: "/products/fermbiotic" },
            { title: "BLEUBIOTIC", href: "/products/bleubiotic" },
            { title: "SPIROTIC", href: "/products/spirotic" },
          ],
        },
      ],
    },
  },
  { title: "INNOVATION", href: "/innovation" },
  { title: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        scrolled ? "bg-[hsl(150_50%_4%)]" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold tracking-widest">
          <img src="/images (3).png" className="w-[80px]" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative h-16 flex items-center"
              onMouseEnter={() => {
                setHoveredIndex(index);
                setActiveCategory(0);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-medium tracking-wider flex items-center gap-1 text-white/80 hover:text-white"
              >
                {item.title}
              
                {item.megaMenu && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Link>

              {/* Mega Menu */}
              <AnimatePresence>
                {hoveredIndex === index && item.megaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] pt-6"
                  >
                    <div className="rounded-3xl bg-[#0b1f16]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-6">
                    <div className="grid grid-cols-3 gap-[259px]">
  {/* LEFT – Categories */}
  <div className="space-y-2">
    <p className="text-xs text-white/50 uppercase mb-3">
      Categories
    </p>

    {item.megaMenu.categories.map((cat, i) => (
      <div
        key={i}
        onMouseEnter={() => setActiveCategory(i)}
        className={cn(
          "group flex items-center gap-3 w-56 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300",
          activeCategory === i
            ? "bg-[#163a28]"
            : "bg-[#11291d] hover:bg-[#163a28]"
        )}
      >
        <span>{cat.icon}</span>

        <span className="flex items-center justify-between text-white font-medium w-full">
          {cat.title}
          <FaChevronRight className="text-green-400 text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    ))}
  </div>

  {/* RIGHT – Solutions (ANIMATED) */}
  <div className="col-span-2">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-4xl w-50 h-44 bg-[#102c1f] p-5"
      >
        <p className="text-sm text-green-400 mb-2 font-semibold">
          FEED SOLUTIONS
        </p>

        <div className="bg-green-500 w-20 h-[1px] mb-3" />

        <ul className="space-y-3">
          {item.megaMenu.categories[
            activeCategory
          ].solutions.map((solution, i) => (
            <motion.li
              key={solution.title}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={solution.href}
                className="block text-white/80 hover:text-white transition"
              >
                {solution.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  </div>
</div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
