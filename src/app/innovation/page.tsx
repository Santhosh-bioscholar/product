import HeroBanner from '@/components/innovation/HeroBanner';
import InnovationAreasSection from '@/components/innovation/InnovationAreasSection';
import PhilosophySection from '@/components/innovation/PhilosophySection';
import PipelineSection from '@/components/innovation/PipelineSection';
import WhyItMattersSection from '@/components/innovation/WhyItMattersSection';

export const metadata = {
    title: 'Innovation | Aroora Biotech',
    description: 'Powered by nature. Perfected by science. Discover our breakthrough algae-based innovations.',
};

export default function InnovationPage() {
    return (
        <main className="min-h-screen">
            <HeroBanner />
            <InnovationAreasSection />
            <PhilosophySection />
            <PipelineSection />
            <WhyItMattersSection />
        </main>
    );
}
