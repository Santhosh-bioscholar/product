import { AboutHero } from "@/components/about/AboutHero";
import { OurPurpose } from "@/components/about/OurPurpose";
import { SustainabilityValues } from "@/components/about/SustainabilityValues";
import { GlobalPresence } from "@/components/about/GlobalPresence";
import { EvolutionHealthyFuture } from "@/components/about/EvolutionHealthyFuture";
import { QuoteSection } from "@/components/about/QuoteSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Aroora Biotech",
    description: "Learn about Aroora Biotech's mission to pioneer green biotechnology and restore balance to our planet's ecosystems using algae.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#131313]">
            <AboutHero />
            <OurPurpose />
            <SustainabilityValues />
            {/* <EvolutionHealthyFuture /> */}
            {/* <GlobalPresence /> */}
            <QuoteSection />
        </div>
    );
}
