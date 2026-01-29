// import { AboutHero } from "@/components/about/AboutHero";
import Header from "@/components/about/Header";
import HeroTitle from "@/components/about/HeroTitle";
import QuoteCard from "@/components/about/QuoteCard";
import BottomControls from "@/components/about/BottomControls";
import SocialSidebar from "@/components/about/SocialSidebar";

import { OurPurpose } from "@/components/about/OurPurpose";
import { SustainabilityValues } from "@/components/about/SustainabilityValues";
import { GlobalPresence } from "@/components/about/GlobalPresence";
import { EvolutionHealthyFuture } from "@/components/about/EvolutionHealthyFuture";
import { QuoteSection } from "@/components/about/QuoteSection";
import { SDGFloatingGrid } from "@/components/about/SDGFloatingGrid";
import { ScalingNatureWisdom } from "@/components/about/ScalingNatureWisdom";
import CellularHealth from "@/components/products/CellularHealth";
import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { GutHealthBanner } from "@/components/products/GutHealthBanner";
import { AboutSwiper } from "@/components/products/AboutSwiper";

export const metadata: Metadata = {
    title: "About Us | Aroora Biotech",
    description: "Learn about Aroora Biotech's mission to pioneer green biotechnology and restore balance to our planet's ecosystems using algae.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <AboutHero /> */}
            <AboutHero />


            <ScalingNatureWisdom />
            {/* <OurPurpose /> */}
            <SustainabilityValues />
            {/* <SDGFloatingGrid /> */}

            {/* <EvolutionHealthyFuture /> */}
            {/* <GlobalPresence /> */}

            <QuoteSection />
            {/* <CellularHealth /> */}
            {/* <AboutSwiper /> */}
        </div>
    );
}
