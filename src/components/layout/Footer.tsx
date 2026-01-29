"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-[#131313] text-white pt-20 pb-10 overflow-hidden">
            {/* Algae Wave Animation Background */}
            <div className="absolute bottom-0 left-0 w-full h-48 opacity-10 pointer-events-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                        fill="#0FA57D"
                        fillOpacity="1"
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
                {/* Brand Column */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="text-2xl px-[60px] font-bold tracking-widest flex items-center ">
                        {/* <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0FA57D] to-[#0AB3A3]" /> */}
                <img src='../images (3).png' className="w-[80px] " />
                        
                    </Link>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Pioneering sustainable biotech solutions for a cleaner, healthier future.
                        Harnessing the power of algae and nature's intelligence.
                    </p>
                    
                      
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#0FA57D]">Quick Links</h3>
                    <nav className="flex flex-col gap-2">
                        {["Products", "Innovation", "Company", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                   <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#0FA57D]">Support</h3>
                    <nav className="flex flex-col gap-2">
                        {["Documentation", "Help center", "privacy", "terms"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
                 <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#0FA57D]">Our Products</h3>
                    <nav className="flex flex-col gap-2">
                        {["Fermbiotic", "bleubiotic", "spirotic", "algabiotic","glowbiotic"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
                 <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#0FA57D]">Our Products</h3>
                    <nav className="flex flex-col gap-2">
                        {["Fermbiotic", "bleubiotic", "spirotic", "algabiotic","glowbiotic"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
                {/* Contact Info */}
                {/* <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#0FA57D]">Contact Us</h3>
                    <div className="flex flex-col gap-3 text-sm text-gray-300">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#0FA57D] shrink-0" />
                            <span>123 Biotech Park, Innovation Drive,<br />Science City, 560001</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[#0FA57D] shrink-0" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#0FA57D] shrink-0" />
                            <span>info@aroorabiotech.com</span>
                        </div>
                    </div>
                </div> */}

                {/* Newsletter / Social */}
                 {/* <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#0FA57D]">Stay Updated</h3>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0FA57D] transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0FA57D] transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0FA57D] transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#0FA57D] transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div> */}
            </div> 

            <div className="relative max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Aroora Biotech Pvt. Ltd. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}

