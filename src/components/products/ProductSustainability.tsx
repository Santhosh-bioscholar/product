"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { Recycle, Sprout } from "lucide-react";
import ProcessFlowSection from "./ProcessFlowSection";

export function ProductSustainability() {
    return (
        <section className=" px-6 bg-[#131313] overflow-hidden">
           
             <ProcessFlowSection />
        </section>
    );
}

