"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "HOME", href: "/" },
  {
    title: "PRODUCT",
    href: "/products",
    dropdown: [
      // { title: "ALL PRODUCTS", href: "/products" },
      { title: "FERMBIOTIC", href: "/products/fermbiotic" },
      { title: "BLEUBIOTIC", href: "/products/bleubiotic" },
      { title: "SPIROTIC", href: "/products/spirotic" },
      { title: "ALGABIOTIC", href: "/products/algabiotic" },
      { title: "GLOWBIOTIC", href: "/products/glowbiotic" },
    ],
  },
  { title: "ABOUT US", href: "/about" },
  { title: "INNOVATION", href: "/innovation" },
  { title: "CONTACT", href: "/contact" },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out",
        scrolled ? "bg-[#131313]" : "bg-transparent"
      )}
    >
        
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold tracking-widest transition-colors duration-500",
            scrolled ? "text-white" : "text-white"
          )}
        >
          <img src="../images (3).png" className="w-[80px]" alt="Logo" />
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
  className={cn(
    "text-sm font-medium tracking-wider flex items-center gap-1 transition-all duration-300",
    scrolled
      ? "text-white/80 hover:text-white"
      : "text-white/80 bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-green-400"
  )}
>
                {item.title}
                {item.dropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {hoveredIndex === index && item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4"
                  >
                    <div
                      className={cn(
                        "rounded-xl shadow-xl p-4 border backdrop-blur-md",
                        scrolled
                          ? "bg-[#0A2540]/90 border-white/10"
                          : "bg-[#0A2540]/90 border-white/10"
                      )}
                    >
                      <div className="flex flex-col gap-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className={cn(
                              "px-3 py-2 rounded-lg text-sm transition-colors",
                              scrolled
                                ? "text-white/70 hover:text-white hover:bg-white/10"
                                : "text-white/70 hover:text-black hover:bg-black/5"
                            )}
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

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden transition-colors",
            scrolled ? "text-white" : "text-black"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black text-white overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-bold"
                  >
                    {item.title}
                  </Link>

                  {item.dropdown && (
                    <div className="mt-3 ml-4 flex flex-col gap-2 border-l border-white/20 pl-4">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-white/70 hover:text-white"
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
