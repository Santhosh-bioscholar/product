import { motion } from "framer-motion";

interface BottomControlsProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange?: (index: number) => void;
}

const BottomControls = ({ currentSlide, totalSlides, onSlideChange = () => {} }: BottomControlsProps) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 z-20 px-8">
      <div className="flex items-center justify-between">
        {/* Swipe hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-muted-foreground text-sm font-light tracking-wide"
        >
         
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex items-center gap-3"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                index === currentSlide
                  ? "bg-primary border-primary scale-125"
                  : "bg-transparent border-muted-foreground/50 hover:border-primary hover:scale-110"
              }`}
            />
          ))}
        </motion.div>

        {/* Current / Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-muted-foreground text-sm font-light tracking-widest"
        >
          {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </motion.div>
      </div>
    </div>
  );
};

export default BottomControls;
