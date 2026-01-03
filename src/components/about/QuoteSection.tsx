"use client";

import { motion } from "framer-motion";

const QuoteIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9 14.8954 9.89543 14 11 14C11.5523 14 12 13.5523 12 13V11C12 10.4477 11.5523 10 11 10C9.67392 10 8.40215 10.5268 7.46447 11.4645C6.52678 12.4021 6 13.6739 6 15V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19C19 14.8954 19.8954 14 21 14C21.5523 14 22 13.5523 22 13V11C22 10.4477 21.5523 10 21 10C19.6739 10 18.4022 10.5268 17.4645 11.4645C16.5268 12.4021 16 13.6739 16 15V21H24.017Z" />
    </svg>
);

const BlockQuoteIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M30 60 H10 V40 Q10 10 40 10 V30 Q25 30 30 40 V60 Z M80 60 H60 V40 Q60 10 90 10 V30 Q75 30 80 40 V60 Z" />
    </svg>
);


// Using a simpler, heavier path for the visual match
const HeavyQuote = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className}>
        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
    </svg>
);

export function QuoteSection() {
    return (
        <div className="relative w-full py-32  px-6 md:px-20 container">
            <h2 className="text-2xl lg:text-4xl font-semibold text-foreground mb-1 text-center">
             CEO{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
             Story
            </span>
          </h2>
        <section className="relative w-full py-32  px-6 md:px-20  overflow-hidden flex justify-center items-center">
            <div className="max-w-4xl mx-auto relative w-full">
                {/* Opening Quote Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute -top-16 left-0"
                >
                    <HeavyQuote className="w-24 h-24 md:w-30 md:h-30 text-white rotate-180" />
                </motion.div>

                {/* Quote Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative z-10 px-8 py-24"
                >
                    <p className="text-xl md:text-2xl lg:text-xl font-bold italic leading-relaxed text-gray-200 text-center tracking-wide">
                        "With my professional experience trying to full fill the world’s needs with our Reverse Engineered
the planets earliest protein source. Which supports our The elements of life five forms of as we
know Panchamahabhutas, Water, Land, Air, Space, and Fire To sustain with its innate habitability"
                    </p>
                </motion.div>

                {/* Closing Quote Icon */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-7 right-0"
                >
                    <HeavyQuote className="w-20 h-20 md:w-24 md:h-20 text-[#ff7e21]" />
                </motion.div>
            </div>
        </section>
        </div>
    );
}
