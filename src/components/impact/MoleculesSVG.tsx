import { motion } from "framer-motion";

interface MoleculeProps {
  className?: string;
}

export const CO2Molecule = ({ className }: MoleculeProps) => (
  <svg viewBox="0 0 80 40" className={className}>
    <motion.g
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Carbon atom */}
      <circle cx="40" cy="20" r="10" fill="hsl(var(--carbon))" />
      <text x="40" y="24" textAnchor="middle" fontSize="8" fill="hsl(var(--foreground))" fontWeight="600">C</text>
      
      {/* Oxygen atoms */}
      <circle cx="18" cy="20" r="8" fill="hsl(var(--oxygen))" />
      <text x="18" y="23" textAnchor="middle" fontSize="7" fill="hsl(var(--background))" fontWeight="600">O</text>
      
      <circle cx="62" cy="20" r="8" fill="hsl(var(--oxygen))" />
      <text x="62" y="23" textAnchor="middle" fontSize="7" fill="hsl(var(--background))" fontWeight="600">O</text>
      
      {/* Bonds */}
      <line x1="26" y1="18" x2="30" y2="18" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
      <line x1="26" y1="22" x2="30" y2="22" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
      <line x1="50" y1="18" x2="54" y2="18" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
      <line x1="50" y1="22" x2="54" y2="22" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
    </motion.g>
  </svg>
);

export const O2Molecule = ({ className }: MoleculeProps) => (
  <svg viewBox="0 0 60 40" className={className}>
    <motion.g
      initial={{ opacity: 0.7 }}
      animate={{ opacity: [0.7, 1, 0.7], y: [0, -3, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Oxygen atoms */}
      <circle cx="20" cy="20" r="10" fill="hsl(var(--oxygen))" />
      <text x="20" y="24" textAnchor="middle" fontSize="8" fill="hsl(var(--background))" fontWeight="600">O</text>
      
      <circle cx="40" cy="20" r="10" fill="hsl(var(--oxygen))" />
      <text x="40" y="24" textAnchor="middle" fontSize="8" fill="hsl(var(--background))" fontWeight="600">O</text>
      
      {/* Bond */}
      <line x1="30" y1="18" x2="30" y2="18" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
      <line x1="30" y1="22" x2="30" y2="22" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
    </motion.g>
  </svg>
);

export const NutrientParticle = ({ className }: MoleculeProps) => (
  <svg viewBox="0 0 30 30" className={className}>
    <motion.g
      animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="15" cy="15" r="8" fill="hsl(var(--nutrient))" opacity="0.8" />
      <circle cx="15" cy="15" r="4" fill="hsl(var(--nutrient))" />
    </motion.g>
  </svg>
);

export const AlgaeCell = ({ className }: MoleculeProps) => (
  <svg viewBox="0 0 60 60" className={className}>
    <defs>
      <radialGradient id="algaeGradient" cx="30%" cy="30%">
        <stop offset="0%" stopColor="hsl(var(--algae-light))" />
        <stop offset="100%" stopColor="hsl(var(--algae))" />
      </radialGradient>
      <filter id="algaeGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <motion.g
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      filter="url(#algaeGlow)"
    >
      {/* Cell membrane */}
      <ellipse cx="30" cy="30" rx="25" ry="22" fill="url(#algaeGradient)" opacity="0.9" />
      {/* Chloroplasts */}
      <ellipse cx="22" cy="25" rx="6" ry="4" fill="hsl(var(--algae))" opacity="0.7" transform="rotate(-20 22 25)" />
      <ellipse cx="38" cy="28" rx="5" ry="3" fill="hsl(var(--algae))" opacity="0.7" transform="rotate(15 38 28)" />
      <ellipse cx="28" cy="38" rx="6" ry="3" fill="hsl(var(--algae))" opacity="0.7" transform="rotate(-10 28 38)" />
      {/* Nucleus */}
      <circle cx="30" cy="30" r="6" fill="hsl(var(--algae-light))" opacity="0.5" />
    </motion.g>
  </svg>
);

export const ProteinStructure = ({ className }: MoleculeProps) => (
  <svg viewBox="0 0 80 60" className={className}>
    <motion.g
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Helix structure */}
      <path
        d="M10 30 Q20 10, 30 30 T50 30 T70 30"
        fill="none"
        stroke="hsl(var(--cyan))"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M10 35 Q20 55, 30 35 T50 35 T70 35"
        fill="none"
        stroke="hsl(var(--cyan-light))"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Binding sites */}
      <circle cx="20" cy="30" r="4" fill="hsl(var(--algae))" />
      <circle cx="40" cy="30" r="4" fill="hsl(var(--algae))" />
      <circle cx="60" cy="30" r="4" fill="hsl(var(--algae))" />
    </motion.g>
  </svg>
);

export const WaterDrop = ({ className }: MoleculeProps) => (
  <svg viewBox="0 0 30 40" className={className}>
    <motion.g
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--cyan-light))" />
          <stop offset="100%" stopColor="hsl(var(--cyan))" />
        </linearGradient>
      </defs>
      <path
        d="M15 5 Q25 20 25 28 A10 10 0 1 1 5 28 Q5 20 15 5"
        fill="url(#waterGradient)"
        opacity="0.8"
      />
    </motion.g>
  </svg>
);

export const FlowingParticles = ({ className }: MoleculeProps) => (
  <svg viewBox="0 0 200 40" className={className}>
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.circle
        key={i}
        r="3"
        fill="hsl(var(--algae))"
        opacity="0.6"
        initial={{ cx: -10, cy: 20 + (i % 3) * 5 - 5 }}
        animate={{ cx: 210 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "linear",
        }}
      />
    ))}
  </svg>
);
