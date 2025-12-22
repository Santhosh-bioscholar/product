import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface ImpactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  animation: ReactNode;
  delay?: number;
}

const ImpactCard = ({ icon, title, description, animation, delay = 0 }: ImpactCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="card-glow rounded-2xl p-6 h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-glow">
        {/* Animation container */}
        <div className="relative h-24 mb-4 overflow-hidden rounded-xl bg-secondary/30">
          {animation}
        </div>

        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/20"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl">{icon}</span>
        </motion.div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at center, hsl(150 70% 45% / 0.1) 0%, transparent 70%)',
          }}
        />
      </div>
    </motion.div>
  );
};

// Individual card animations
export const MolecularFlowAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Molecular structure */}
    <svg viewBox="0 0 100 60" className="w-full h-full">
      {/* Flowing molecules */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g key={i}>
          <motion.circle
            cx={10 + i * 20}
            cy={30}
            r={4}
            fill="hsl(150 70% 50%)"
            animate={{
              cx: [10 + i * 20, 90],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx={10 + i * 20}
            cy={30}
            r={8}
            fill="none"
            stroke="hsl(150 70% 50% / 0.3)"
            strokeWidth={1}
            animate={{
              cx: [10 + i * 20, 90],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>
      ))}
      
      {/* Gut microbiome glow */}
      <motion.ellipse
        cx={75}
        cy={30}
        rx={15}
        ry={20}
        fill="hsl(150 60% 40% / 0.3)"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </div>
);

export const WaterRippleAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    {/* Ripples */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-16 h-16 rounded-full border-2 border-oxygen-cyan/30"
        animate={{
          scale: [0.5, 2],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2,
          delay: i * 0.6,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    ))}
    
    {/* Algae nutrients */}
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={`nutrient-${i}`}
        className="absolute w-2 h-2 rounded-full bg-primary"
        style={{
          left: `${20 + i * 20}%`,
          top: '50%',
        }}
        animate={{
          y: [-20, 20, -20],
          x: [0, 10, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2.5,
          delay: i * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export const CO2TransformAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg viewBox="0 0 120 60" className="w-full h-full">
      {/* CO2 molecules moving in */}
      <motion.g
        animate={{ x: [0, 40] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <text x={10} y={35} fill="hsl(0 60% 60%)" fontSize={8} fontWeight="bold">
          CO₂
        </text>
      </motion.g>
      
      {/* Algae transformation center */}
      <motion.circle
        cx={60}
        cy={30}
        r={12}
        fill="hsl(150 70% 45%)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.circle
        cx={60}
        cy={30}
        r={18}
        fill="none"
        stroke="hsl(150 70% 45% / 0.4)"
        strokeWidth={2}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      />
      
      {/* O2 molecules moving out */}
      <motion.g
        animate={{ x: [0, 30], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
      >
        <text x={75} y={35} fill="hsl(185 80% 70%)" fontSize={8} fontWeight="bold">
          O₂
        </text>
      </motion.g>
    </svg>
  </div>
);

export const WorldRingsAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    {/* Expanding rings */}
    {[0, 1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-primary/30"
        style={{
          width: 30 + i * 15,
          height: 30 + i * 15,
        }}
        animate={{
          scale: [0.8, 1.5],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: 2.5,
          delay: i * 0.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    ))}
    
    {/* Central globe icon */}
    <motion.div
      className="relative w-8 h-8 rounded-full bg-primary/30"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="absolute inset-1 rounded-full bg-primary/50" />
    </motion.div>
  </div>
);

export default ImpactCard;