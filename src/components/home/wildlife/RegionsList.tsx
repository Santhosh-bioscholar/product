"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Region {
    number: string;
    name: string;
    description: string;
    year: string;
}

const regions: Region[] = [
    {
        number: "02",
        name: "UK",
        description: "Maecenas porttitor congue massa, cras posuere, magna sed pulvinar ultricies, purus.",
        year: "1998",
    },
    {
        number: "06",
        name: "ASIA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        year: "1998",
    },
    {
        number: "04",
        name: "RUSSIA",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        year: "1998",
    },
    {
        number: "06",
        name: "USA",
        description: "Phasellus magna. Phasellus lacus. Mauris at orci. Nam non enim. Etiam orci pede.",
        year: "1938",
    },
];

const RegionsList = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-80 hidden lg:block z-20"
        >
            <div className="relative">
                {/* Yellow vertical line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                    className="absolute right-0 top-0 w-0.5 h-full bg-yellow-500 origin-top"
                />

                <div className="space-y-6 pr-6">
                    {regions.map((region, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 + index * 0.15, duration: 0.5 }}
                            className="group cursor-pointer text-right"
                        >
                            <div className="flex items-center justify-end mb-2 gap-3">
                                <div className="flex items-center gap-2 text-xs text-white/40">
                                    <span>{region.year}</span>
                                    <Play size={10} className="text-yellow-500" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-sans font-medium tracking-wider text-white group-hover:text-yellow-500 transition-colors duration-300">
                                        {region.name}
                                    </span>
                                    <span className="text-xs font-sans text-white/30">|</span>
                                    <span className="text-xs font-sans text-white/40">{region.number}</span>
                                </div>
                            </div>
                            <p className="text-xs font-sans text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                {region.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default RegionsList;
