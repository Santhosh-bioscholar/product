import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AncientEarthIcon } from "./AncientEarthIcon";
import { OxygenRiseIcon } from "./OxygenRiseIcon";
import { ModernLifeIcon } from "./ModernLifeIcon";
import { TimelineConnector } from "./TimelineConnector";

export const TimelineAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });
    const [activeStage, setActiveStage] = useState(0);

    useEffect(() => {
        if (!isInView) {
            setActiveStage(0);
            return;
        }

        // Animate through stages when in view
        const timers = [
            setTimeout(() => setActiveStage(1), 500),
            setTimeout(() => setActiveStage(2), 2000),
            setTimeout(() => setActiveStage(3), 3500),
        ];

        return () => timers.forEach(clearTimeout);
    }, [isInView]);

    const getStageProgress = (stage: number) => {
        if (activeStage >= stage) return 1;
        if (activeStage === stage - 1) return 0.5;
        return 0;
    };

    return (
        <div ref={containerRef} className="relative inline-flex flex-col items-center py-20 mx-auto">
            {/* Stage indicators */}
          

            {/* Timeline */}
            <motion.div
                className="flex flex-row items-center gap-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                {/* Stage 1: Ancient Earth */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <AncientEarthIcon isActive={activeStage >= 1} />
                </motion.div>

                {/* Connector 1 */}
                <TimelineConnector
                    progress={getStageProgress(2)}
                    fromColor="ancient"
                    toColor="oxygen"
                />

                {/* Stage 2: Oxygen Rise */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <OxygenRiseIcon isActive={activeStage >= 2} />
                </motion.div>

                {/* Connector 2 */}
                <TimelineConnector
                    progress={getStageProgress(3)}
                    fromColor="oxygen"
                    toColor="life"
                />

                {/* Stage 3: Modern Life */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <ModernLifeIcon isActive={activeStage >= 3} />
                </motion.div>
            </motion.div>

            {/* Era labels */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 flex flex-row justify-between pb-8 text-xs px-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
            >
                <span className="text-[10px] text-gray-500 text-left w-20">~4.5 BYA</span>
                <span className="text-[10px] text-gray-500 text-center w-20">~2.4 BYA</span>
                <span className="text-[10px] text-gray-500 text-right w-20">Present Day</span>
            </motion.div>
        </div>
    );
};

