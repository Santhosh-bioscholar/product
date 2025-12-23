import { motion } from "framer-motion";

interface IconProps {
    isActive: boolean;
    delay?: number;
}

// 1. Algae Source - Abstract cellular/algae icon
export const AlgaeSourceIcon = ({ isActive, delay = 0 }: IconProps) => (
    <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="glow-soft"
    >
        <defs>
            <radialGradient id="algaeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--glow-primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
            </radialGradient>
        </defs>

        {/* Soft glow background */}
        <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="url(#algaeGlow)"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Central cell */}
        <motion.ellipse
            cx="32"
            cy="32"
            rx="12"
            ry="16"
            stroke="hsl(var(--icon-neutral))"
            strokeWidth="1.5"
            fill="none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
        />

        {/* Chloroplasts */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
            <motion.circle
                key={i}
                cx={32 + Math.cos((angle * Math.PI) / 180) * 8}
                cy={32 + Math.sin((angle * Math.PI) / 180) * 10}
                r="3"
                fill="hsl(var(--primary))"
                fillOpacity="0.6"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        ))}

        {/* Outer membrane */}
        <motion.circle
            cx="32"
            cy="32"
            r="22"
            stroke="hsl(var(--icon-neutral))"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
        />
    </motion.svg>
);

// 2. Green Bioprocess - Cellular morph/enzyme icon
export const BioprocessIcon = ({ isActive, delay = 0 }: IconProps) => (
    <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="glow-soft"
    >
        {/* Morphing shape */}
        <motion.path
            d="M32 8 C48 8 56 20 56 32 C56 44 48 56 32 56 C16 56 8 44 8 32 C8 20 16 8 32 8"
            stroke="hsl(var(--icon-neutral))"
            strokeWidth="1.5"
            fill="none"
            animate={{
                d: [
                    "M32 8 C48 8 56 20 56 32 C56 44 48 56 32 56 C16 56 8 44 8 32 C8 20 16 8 32 8",
                    "M32 10 C44 6 58 22 54 34 C50 46 44 58 30 54 C16 50 6 42 10 30 C14 18 20 14 32 10",
                    "M32 8 C48 8 56 20 56 32 C56 44 48 56 32 56 C16 56 8 44 8 32 C8 20 16 8 32 8",
                ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner enzyme loop */}
        <motion.ellipse
            cx="32"
            cy="32"
            rx="14"
            ry="10"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
        />

        {/* Processing nodes */}
        {[0, 120, 240].map((angle, i) => (
            <motion.rect
                key={i}
                x={29 + Math.cos((angle * Math.PI) / 180) * 10}
                y={29 + Math.sin((angle * Math.PI) / 180) * 8}
                width="6"
                height="6"
                rx="1"
                fill="hsl(var(--primary))"
                fillOpacity="0.5"
                animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ transformOrigin: "center" }}
            />
        ))}
    </motion.svg>
);

// 3. Safe Nutrition - Shield with verified cell
export const SafeNutritionIcon = ({ isActive, delay = 0 }: IconProps) => (
    <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="glow-soft"
    >
        {/* Shield outline */}
        <motion.path
            d="M32 6 L54 16 L54 32 C54 46 44 56 32 60 C20 56 10 46 10 32 L10 16 L32 6Z"
            stroke="hsl(var(--icon-neutral))"
            strokeWidth="1.5"
            fill="none"
            animate={{ strokeOpacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner glow */}
        <motion.path
            d="M32 12 L48 20 L48 32 C48 42 40 50 32 54 C24 50 16 42 16 32 L16 20 L32 12Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            animate={{ fillOpacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Verified checkmark */}
        <motion.path
            d="M24 32 L30 38 L42 26"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, delay: delay + 0.3, ease: "easeOut" }}
        />

        {/* Subtle pulse ring */}
        <motion.circle
            cx="32"
            cy="33"
            r="18"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            fill="none"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "center" }}
        />
    </motion.svg>
);

// 4. Ecosystem Balance - Interconnected nodes
export const EcosystemIcon = ({ isActive, delay = 0 }: IconProps) => (
    <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="glow-soft"
    >
        {/* Connection lines */}
        {[[32, 16, 18, 40], [32, 16, 46, 40], [18, 40, 46, 40], [18, 40, 32, 52], [46, 40, 32, 52]].map(
            ([x1, y1, x2, y2], i) => (
                <motion.line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="hsl(var(--flow-line))"
                    strokeWidth="1"
                    animate={{ strokeOpacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
            )
        )}

        {/* Central hub */}
        <motion.circle
            cx="32"
            cy="32"
            r="6"
            fill="hsl(var(--primary))"
            fillOpacity="0.3"
            stroke="hsl(var(--icon-neutral))"
            strokeWidth="1"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Outer nodes */}
        {[
            { cx: 32, cy: 16 },
            { cx: 18, cy: 40 },
            { cx: 46, cy: 40 },
            { cx: 32, cy: 52 },
        ].map((pos, i) => (
            <motion.circle
                key={i}
                cx={pos.cx}
                cy={pos.cy}
                r="5"
                fill="hsl(var(--secondary))"
                stroke="hsl(var(--icon-neutral))"
                strokeWidth="1"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
        ))}

        {/* Expanding ring */}
        <motion.circle
            cx="32"
            cy="32"
            r="24"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="2 4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
        />
    </motion.svg>
);

// 5. Generational Continuity - Expanding loop/ripple
export const ContinuityIcon = ({ isActive, delay = 0 }: IconProps) => (
    <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="glow-soft"
    >
        {/* Ripple rings */}
        {[12, 18, 24].map((r, i) => (
            <motion.circle
                key={i}
                cx="32"
                cy="32"
                r={r}
                stroke="hsl(var(--icon-neutral))"
                strokeWidth="1"
                fill="none"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
                style={{ transformOrigin: "center" }}
            />
        ))}

        {/* Infinity/loop symbol */}
        <motion.path
            d="M22 32 C22 26 28 26 32 32 C36 38 42 38 42 32 C42 26 36 26 32 32 C28 38 22 38 22 32"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Central seed */}
        <motion.circle
            cx="32"
            cy="32"
            r="4"
            fill="hsl(var(--primary))"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Outer boundary */}
        <motion.circle
            cx="32"
            cy="32"
            r="28"
            stroke="hsl(var(--flow-line))"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="8 4"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
        />
    </motion.svg>
);
