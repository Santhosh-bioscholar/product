import { motion, AnimatePresence } from "framer-motion";

interface CircleTransitionProps {
  isAnimating: boolean;
  nextSlideColor: string;
  onExpandComplete: () => void;
}

const CircleTransition = ({
  isAnimating,
  nextSlideColor,
  onExpandComplete,
}: CircleTransitionProps) => {
  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key="circle"
          className="absolute inset-0 z-50"
          style={{ backgroundColor: nextSlideColor }}
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(140% at 100% 0%)" }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          onAnimationComplete={onExpandComplete}
        />
      )}
    </AnimatePresence>
  );
};

export default CircleTransition;
