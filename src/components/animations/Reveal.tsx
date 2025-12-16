"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
    return (
        <span className={cn("inline-block overflow-hidden", className)}>
            <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    );
}
