import { motion } from "framer-motion";

interface HalfCircleIndicatorProps {
  onClick: () => void;
  isVisible: boolean;
  nextSlideColor: string;
}

const HalfCircleIndicator = ({ onClick, isVisible, nextSlideColor }: HalfCircleIndicatorProps) => {
  if (!isVisible) return null;

  return (
    <motion.button
      onClick={onClick}
      className="absolute top-0 right-0 z-30 w-32 h-32 md:w-40 md:h-40 overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Half circle */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full">
        <motion.div
          className="w-full h-full rounded-full shadow-2xl"
          style={{ backgroundColor: nextSlideColor }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Arrow indicator */}
      <div className="absolute top-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.button>
  );
};

export default HalfCircleIndicator;
