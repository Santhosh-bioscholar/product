
import { LeftMetrics, RightMetrics } from "@/types/product";
import { useState, useEffect } from "react";

interface Metric {
    name: string;
    value: number;
    suffix: string;
    color: string;
}


interface LeftandRightProps {
    
     leftMetrics :LeftMetrics[];
    rightMetrics :RightMetrics[];
}

const leftMetrics: Metric[] = [
    { name: "Protein", value: 92, suffix: "%", color: "primary" },
    { name: "Moisture", value: 88, suffix: "%", color: "accent" },
    { name: "Energy", value: 75, suffix: "%", color: "secondary" },
    { name: "Total dietary fibre", value: 82, suffix: "%", color: "primary" },
    { name: "Beta-carotene", value: 68, suffix: "%", color: "accent" },
    { name: "Phycocyanin", value: 71, suffix: "%", color: "secondary" },
    { name: "Total xanthophyll", value: 65, suffix: "%", color: "primary" },
    { name: "Phosphorus", value: 78, suffix: "%", color: "accent" },
    { name: "Potassium:", value: 45, suffix: "%", color: "secondary" },
    { name: "Calcium", value: 52, suffix: "%", color: "primary" },
    { name: "Sodium", value: 63, suffix: "%", color: "accent" },
    { name: "Magnesium", value: 70, suffix: "%", color: "secondary" },
];

const rightMetrics: Metric[] = [
    { name: "Iron", value: 2847, suffix: "", color: "primary" },
    { name: "Zinc", value: 312, suffix: "", color: "accent" },
    { name: "Tryptophan:", value: 489, suffix: "", color: "secondary" },
    { name: "Threonine:", value: 156, suffix: "K", color: "primary" },
    { name: "Tyrosine", value: 98, suffix: "%", color: "accent" },
    { name: "Valine", value: 234, suffix: "", color: "secondary" },
    { name: "Methionine", value: 89, suffix: "", color: "primary" },
    { name: "Lysine", value: 156, suffix: "", color: "accent" },
    { name: "Isoleucine", value: 99.9, suffix: "%", color: "secondary" },
    { name: "Leucine", value: 42, suffix: "ms", color: "primary" },
    { name: "Phenylalanine", value: 50, suffix: "K", color: "accent" },
    { name: "Total Amino Acids", value: 428, suffix: "", color: "secondary" },
];

const getColorClasses = (color: string) => {
    switch (color) {
        case "primary":
            return {
                bar: "bg-primary",
                text: "text-primary",
                glow: "shadow-[0_0_10px_hsl(var(--primary)/0.5)]",
            };
        case "accent":
            return {
                bar: "bg-accent",
                text: "text-accent",
                glow: "shadow-[0_0_10px_hsl(var(--accent)/0.5)]",
            };
        case "secondary":
            return {
                bar: "bg-secondary",
                text: "text-secondary",
                glow: "shadow-[0_0_10px_hsl(var(--secondary)/0.5)]",
            };
        default:
            return {
                bar: "bg-primary",
                text: "text-primary",
                glow: "shadow-[0_0_10px_hsl(var(--primary)/0.5)]",
            };
    }
};

interface AnimatedValueProps {
    value: number;
    suffix: string;
    delay: number;
}

const AnimatedValue = ({ value, suffix, delay }: AnimatedValueProps) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const duration = 1500;
            const steps = 60;
            const stepValue = value / steps;
            let current = 0;

            const interval = setInterval(() => {
                current += stepValue;
                if (current >= value) {
                    setDisplayValue(value);
                    clearInterval(interval);
                } else {
                    setDisplayValue(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return (
        <span className="font-mono font-bold">
            {typeof value === "number" && value % 1 !== 0
                ? displayValue.toFixed(1)
                : displayValue}
            {suffix}
        </span>
    );
};

interface MetricRowProps {
    metric: Metric;
    index: number;
    showProgress?: boolean;
}

const MetricRow = ({ metric, index, showProgress = false }: MetricRowProps) => {
    const colors = getColorClasses(metric.color);
    const delay = index * 100;

    return (
        <tr
            className="group border-b border-border/30 transition-all duration-300 hover:bg-muted/30 opacity-0 animate-slide-in-left"
            style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
        >
            <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${colors.bar} ${colors.glow} animate-pulse-glow`} />
                    <span className="font-mono text-foreground/90 group-hover:text-foreground transition-colors">
                        {metric.name}
                    </span>
                </div>
            </td>
            <td className="py-4 px-4">
                <div className="">
                    {/* {showProgress && (
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                className={`h-full ${colors.bar} rounded-full animate-progress-fill ${colors.glow}`}
                                style={{
                                    width: `${metric.value}%`,
                                    animationDelay: `${delay + 300}ms`,
                                }}
                            />
                        </div>
                    )} */}
                    <span className={`${colors.text} min-w-[60px] text-right`}>
                        <AnimatedValue value={metric.value} suffix={metric.suffix} delay={delay + 300} />
                    </span>
                </div>
            </td>
        </tr>
    );
};

const CodeMetricsTable: React.FC<LeftandRightProps> = ({  leftMetrics , rightMetrics  }) =>  {
    return (
        <div className="w-full max-w-6xl mx-auto p-">
            {/* Terminal Header */}
            {/* <div className="terminal-bg rounded-t-lg border border-border/50 p-4 flex items-center gap-3">
                <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-destructive" />
                    <span className="w-3 h-3 rounded-full bg-[hsl(45,100%,50%)]" />
                    <span className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <div className="flex-1 text-center">
                    <span className="font-mono text-muted-foreground text-sm">
                        developer@metrics:~$ <span className="text-primary">cat</span> skills.json
                    </span>
                    <span className="animate-blink text-primary">▌</span>
                </div>
            </div> */}

            {/* Main Content */}
            <div className="terminal-bg rounded-b-lg border border-t-0 border-border/50 neon-glow overflow-hidden">
                {/* Title */}
                {/* <div className="p-6 border-b border-border/30">
                    <h1 className="text-3xl font-bold font-mono neon-text text-primary animate-fade-in-up">
                        {"<"}<span className="text-secondary">Code</span>Metrics {"/>"}
                    </h1>
                    <p className="text-white mt-2 font-mono text-sm opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
            // Real-time developer statistics and proficiency levels
                    </p>
                </div> */}

                {/* Tables Grid */}
                <div className="grid md:grid-cols-2 gap-0 md:gap-px ">
                    {/* Left Table - Skills */}
                    <div className="p-0">
                       
                        <table className="w-full">
                            <thead>
                                <tr className="border border-border/50">
                                    <th className="text-left py-3 px-4 font-mono text-muted-foreground text-sm">
                                       Nutrients
                                    </th>
                                    <th className="text-right py-3 px-4 font-mono text-muted-foreground text-sm">
                                        Value/100g
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {leftMetrics.map((metric, index) => (
                                    <MetricRow key={metric.name} metric={metric} index={index} showProgress />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Right Table - Stats */}
                    <div className="p-0 border-t md:border-t-0 md:border-l border-border/30">
                        
                        <table className="w-full">
                            <thead>
                                <tr className="border border-border/50">
                                    <th className="text-left py-3 px-4 font-mono text-muted-foreground text-sm">
                                        Nutrients
                                    </th>
                                    <th className="text-right py-3 px-4 font-mono text-muted-foreground text-sm">
                                        Value/100g
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rightMetrics.map((metric, index) => (
                                    <MetricRow key={metric.name} metric={metric} index={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
{/* 
                {/* Footer 
                <div className="p-4 border-t border-border/30 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                        <span className="text-accent">export default</span> CodeMetrics;
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-muted-foreground font-mono">Live</span>
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                            Last updated: <span className="text-primary">just now</span>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CodeMetricsTable;
