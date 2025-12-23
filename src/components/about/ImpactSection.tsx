import { motion } from 'framer-motion';

import ImpactCard, {
  MolecularFlowAnimation,
  WaterRippleAnimation,
  CO2TransformAnimation,
  WorldRingsAnimation,
} from './ImpactCard';
import { ProcessCards } from './ProcessCards';

const impactData = [
  {
    icon: '🌱',
    title: 'Human Health',
    description: 'Clinically evaluated algal proteins and nutraceuticals enhance nutrition, immunity, detoxification, and long-term wellness.',
    animation: <MolecularFlowAnimation />,
  },
  {
    icon: '🐄',
    title: 'Animal & Aquaculture Health',
    description: 'Sustainable feed solutions improve growth, immunity, and bio-economic value while reducing environmental stress.',
    animation: <WaterRippleAnimation />,
  },
  {
    icon: '🌊',
    title: 'Environmental Sustainability',
    description: 'Carbon-negative bioprocesses that consume CO₂ and release oxygen, restoring balance to fragile ecosystems.',
    animation: <CO2TransformAnimation />,
  },
  {
    icon: '🌎',
    title: 'Global Responsibility',
    description: 'From local ecosystems to global food systems, Aroora Biotech delivers science-driven sustainability without borders.',
    animation: <WorldRingsAnimation />,
  },
];

const ImpactSection = () => {
  return (
    <section 
      className="relative  w-full overflow-hidden "
    >
      {/* Particles background */}

      {/* Content container */}
     <ProcessCards/>
    </section>
  );
};

export default ImpactSection;
