
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

const ProductPageParticles = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const colors = [
            "hsl(var(--primary))",
            "hsl(var(--secondary))",
            "hsl(var(--accent))",
        ];

        const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));

        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full opacity-20 animate-float"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: particle.color,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                    }}
                />
            ))}
        </div>
    );
};

export default ProductPageParticles;
