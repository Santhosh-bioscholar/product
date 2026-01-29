import { motion } from "framer-motion";

interface SlideContentProps {
  slideNumber: number;
  title: string;
  subtitle: string;
  isActive: boolean;
}

const SlideContent = ({ slideNumber, title, subtitle, isActive }: SlideContentProps) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
      {/* Black accent bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isActive ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-black origin-top"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="slide-number mb-6"
      >
        {String(slideNumber).padStart(2, '0')}
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="slide-title mb-6 text-foreground"
      >
        {title}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="slide-subtitle max-w-xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SlideContent;
