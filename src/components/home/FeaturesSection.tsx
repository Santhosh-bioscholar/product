"use client";


import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Leaf, ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRef } from "react";


// import qualikem from "@/assets/qualikem-logo.png";
type IconMotionKey = "leaf" | "clipboard" | "shield";

const iconMotionVariants: Record<IconMotionKey, any> = {
  leaf: {
    initial: { rotate: 0, y: 0 },
    animate: {
      rotate: [0, 5, -5, 0],
      y: [0, -4, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
    hover: { rotate: 15, scale: 1.15 },
  },

  clipboard: {
    initial: { y: 0 },
    animate: {
      y: [0, -6, 0],
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
    hover: { scale: 1.15 },
  },

  shield: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.08, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
    hover: { scale: 1.2, rotate: -5 },
  },
};


const features: {
  icon: any;
  motionKey: IconMotionKey;
  title: string;
  description: string;
  colorKey: "green" | "orange" | "magenta";
  delay: number;
}[] = [
  {
    icon: Leaf,
    motionKey: "leaf",
    title: "Green & White Technology",
    description:
      "Sustainable, eco-friendly innovations ensuring safety, purity, and environmental responsibility.",
    colorKey: "green",
    delay: 0.2,
  },
  {
    icon: ClipboardCheck,
    motionKey: "clipboard",
    title: "Best Regulatory Practices",
    description:
      "Strict adherence to global regulatory standards, compliance frameworks, and quality systems.",
    colorKey: "orange",
    delay: 0.4,
  },
  {
    icon: ShieldCheck,
    motionKey: "shield",
    title: "Clinically Evaluated Solutions",
    description:
      "Scientifically validated and clinically assessed products to ensure safety, efficacy, and reliability.",
    colorKey: "magenta",
    delay: 0.6,
  },
];

const colorClasses = {
  green: {
    bg: "bg-feature-green",
    bgLight: "bg-feature-green-light",
    cardBg: "from-emerald-50 via-teal-50 to-green-100",
    cardBgHover: "from-emerald-100 via-teal-100 to-green-200",
    text: "text-feature-green",
    glow: "glow-green",
    shadow: "shadow-feature-green",
    gradient: "from-feature-green to-feature-green-glow",
    iconBg: "from-emerald-400 to-teal-500",
  },
  orange: {
    bg: "bg-feature-orange",
    bgLight: "bg-feature-orange-light",
    cardBg: "from-amber-50 via-orange-50 to-yellow-100",
    cardBgHover: "from-amber-100 via-orange-100 to-yellow-200",
    text: "text-feature-orange",
    glow: "glow-orange",
    shadow: "shadow-feature-orange",
    gradient: "from-feature-orange to-feature-orange-glow",
    iconBg: "from-orange-400 to-amber-500",
  },
  magenta: {
    bg: "bg-feature-magenta",
    bgLight: "bg-feature-magenta-light",
    cardBg: "from-pink-50 via-fuchsia-50 to-rose-100",
    cardBgHover: "from-pink-100 via-fuchsia-100 to-rose-200",
    text: "text-feature-magenta",
    glow: "glow-magenta",
    shadow: "shadow-feature-magenta",
    gradient: "from-feature-magenta to-feature-magenta-glow",
    iconBg: "from-pink-400 to-fuchsia-500",
  },
};

// Floating particles component
const FloatingParticle = ({ 
  color, 
  size, 
  delay, 
  duration,
  x,
  y 
}: { 
  color: string; 
  size: number; 
  delay: number; 
  duration: number;
  x: string;
  y: string;
}) => (
  <motion.div
    className={cn("absolute rounded-full opacity-40", color)}
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);
const cardAnimations = {
  0: {
    initial: { opacity: 0, x: 100, rotateY: 45, scale: 0.8 },
    animate: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
    transition: { duration: 1, ease: "easeOut" as const },
  },
  1: {
    initial: { opacity: 0, y: 80, rotateX: -30, scale: 0.85 },
    animate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
    transition: { duration: 1.1, ease: "easeOut" as const },
  },
  2: {
    initial: { opacity: 0, x: 100, y: 50, rotate: 10, scale: 0.75 },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

// 3D Tilt Card Component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


export const FeaturesSection = () => {
    
    return (
        <section className="relative min-h-screen w-full bg-features-bg py-20 px-6 overflow-hidden flex items-center">
            <div className="max-w-6xl mx-auto w-full relative">
                <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-0">
                    {/* Left side - Logo in white card */}
                    <div className="flex-shrink-0 flex items-center justify-center relative z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-white rounded-xl p-6 shadow-2xl w-64 h-48 flex items-center justify-center relative"
                        >
                            {/* Logo Placeholder / Image */}
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src="./logo.png"
                                    alt="Logo"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        // Fallback if image fails
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                        e.currentTarget.nextElementSibling!.classList.add('flex');
                                    }}
                                />
                                <div className="hidden flex-col items-center">
                                    <span className="text-3xl font-bold text-black tracking-tighter">LOGO</span>
                                </div>
                            </div>

                            {/* ISO Certification Badge */}
                           
                        </motion.div>
                    </div>

                    {/* Middle - SVG Connecting Lines */}
                    {/* Absolute positioned SVG that spans the gap between logo and cards */}
                    <div className="hidden lg:block absolute z-[100] left-[250px] top-0 bottom-0 w-[200px] pointer-events-none">
                        <svg
                            className="w-full h-full overflow-visible"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                                    <path d="M 0 0 L 10 5 L 0 10 Z" fill="hsl(var(--feature-green))" />
                                </marker>
                                <marker id="arrow-orange" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                                    <path d="M 0 0 L 10 5 L 0 10 Z" fill="hsl(var(--feature-orange))" />
                                </marker>
                                <marker id="arrow-magenta" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                                    <path d="M 0 0 L 10 5 L 0 10 Z" fill="hsl(var(--feature-magenta))" />
                                </marker>
                            </defs>

                            {/* Green Line (Top) */}
                            <motion.path
                            className="z-[1000] absolute"
                                d="M -10 111 L -116 160 L 80 70 L 200 70 "
                                fill="none"
                                stroke="hsl(var(--feature-green))"
                                strokeWidth="3"
                                markerEnd="url(#arrow-green)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            />

                            {/* Orange Line (Center) */}
                            <motion.path
                                d="M -70 250 L 200 250"
                                fill="none"
                                stroke="hsl(var(--feature-orange))"
                                strokeWidth="3"
                                markerEnd="url(#arrow-orange)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
                            />

                            {/* Magenta Line (Bottom) */}
                            <motion.path
                                d="M -160 270 L -161 267 L 80 370 L 200 370"
                                fill="none"
                                stroke="hsl(var(--feature-magenta))"
                                strokeWidth="3"
                                markerEnd="url(#arrow-magenta)"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {/* Right side - Feature Cards */}
                    <div className="flex flex-col gap-8 flex-1 lg:pl-[200px]">
                        {features.map((feature, index) => {
              const colors = colorClasses[feature.colorKey];
              const cardAnim = cardAnimations[index as keyof typeof cardAnimations];

              return (
                <TiltCard key={feature.title}>
                  <motion.div
                    initial={cardAnim.initial}
                    whileInView={cardAnim.animate}
                    viewport={{ once: true }}
                    transition={{
                      ...cardAnim.transition,
                      delay: feature.delay + 0.3,
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card
                      className={cn(
                        "group relative overflow-hidden border-2 transition-all duration-500",
                        "bg-gradient-to-br",
                        colors.cardBg,
                        "hover:shadow-2xl",
                        colors.shadow,
                        colors.text.replace("text-", "border-") + "/30",
                        "hover:" + colors.text.replace("text-", "border-") + "/60"
                      )}
                    >
                      {/* Animated mesh gradient background */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at 20% 80%, hsl(var(--${feature.colorKey === 'green' ? 'feature-green' : feature.colorKey === 'orange' ? 'feature-orange' : 'feature-magenta'}) / 0.15) 0%, transparent 50%),
                                      radial-gradient(circle at 80% 20%, hsl(var(--${feature.colorKey === 'green' ? 'feature-green' : feature.colorKey === 'orange' ? 'feature-orange' : 'feature-magenta'}) / 0.1) 0%, transparent 50%)`,
                        }}
                      />

                      {/* Moving shine effect */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{ x: "100%", opacity: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        }}
                      />

                      {/* Left accent bar with pulse animation */}
                      <motion.div
                        className={cn(
                          "absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500",
                          "group-hover:w-2",
                          colors.bg
                        )}
                        animate={{
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Floating orb animation on hover */}
                      <motion.div
                        className={cn(
                          "absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700",
                          colors.bg
                        )}
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <CardContent className="relative p-6 flex items-start gap-5">
                        {/* Icon with gradient background */}
                        <motion.div
                          initial="initial"
                          animate="animate"
                          whileHover="hover"
                          variants={iconMotionVariants[feature.motionKey]}
                          transition={iconMotionVariants[feature.motionKey].transition}
                          className={cn(
                            "flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center relative",
                            "transition-all duration-300 group-hover:scale-110",
                            "bg-gradient-to-br shadow-lg",
                            colors.iconBg,
                            "text-white"
                          )}
                          style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
                        >
                          {/* Icon inner glow */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-white/20"
                            animate={{
                              opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                          <feature.icon className="w-8 h-8 relative z-10 drop-shadow-md" strokeWidth={1.8} />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1" style={{ transform: "translateZ(20px)" }}>
                          <motion.h3
                            className={cn(
                              "text-xl font-display font-bold mb-2 tracking-tight",
                              colors.text
                            )}
                          >
                            {feature.title}
                          </motion.h3>
                          <p className="text-foreground/70 font-medium leading-relaxed text-sm">
                            {feature.description}
                          </p>
                        </div>

                        {/* Animated corner decoration */}
                        <motion.div
                          className={cn(
                            "absolute right-3 top-3 w-8 h-8 rounded-full flex items-center justify-center",
                            colors.bgLight
                          )}
                          animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                          }}
                        >
                          <div className={cn("w-2 h-2 rounded-full", colors.bg)} />
                        </motion.div>
                      </CardContent>

                      {/* Bottom gradient border on hover */}
                      <motion.div
                        className={cn(
                          "absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500",
                          "bg-gradient-to-r",
                          colors.gradient
                        )}
                      />
                    </Card>
                  </motion.div>
                </TiltCard>
              );
            })}
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-feature-green/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-feature-magenta/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
};
