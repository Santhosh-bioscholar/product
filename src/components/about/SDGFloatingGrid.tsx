"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./SDGFloatingGrid.module.css";
// Removed local import keeping it clean


interface SDG {
    id: number;
    name: string;
    color: string;
    icon: string;
}

const sdgs: SDG[] = [
    { id: 1, name: "No Poverty", color: "#E5243B", icon: "group" },
    { id: 2, name: "Zero Hunger", color: "#DDA63A", icon: "restaurant" },
    { id: 3, name: "Good Health & Well-being", color: "#4C9F38", icon: "favorite" },
    { id: 4, name: "Quality Education", color: "#C5192D", icon: "menu_book" },
    { id: 5, name: "Gender Equality", color: "#FF3A21", icon: "wc" },
    { id: 6, name: "Clean Water & Sanitation", color: "#26BDE2", icon: "water_drop" },
    { id: 7, name: "Affordable & Clean Energy", color: "#FCC30B", icon: "bolt" },
    { id: 8, name: "Decent Work & Economic Growth", color: "#A21942", icon: "trending_up" },
    { id: 9, name: "Industry, Innovation & Infrastructure", color: "#FD6925", icon: "precision_manufacturing" },
    { id: 10, name: "Reduced Inequalities", color: "#DD1367", icon: "unfold_more" },
    { id: 11, name: "Sustainable Cities & Communities", color: "#FD9D24", icon: "location_city" },
    { id: 12, name: "Responsible Consumption & Production", color: "#BF8B2E", icon: "loop" },
    { id: 13, name: "Climate Action", color: "#3F7E44", icon: "public" },
    { id: 14, name: "Life Below Water", color: "#0A97D9", icon: "waves" },
    { id: 15, name: "Life on Land", color: "#56C02B", icon: "park" },
    { id: 16, name: "Peace, Justice & Strong Institutions", color: "#00689D", icon: "gavel" },
    { id: 17, name: "Partnerships for the Goals", color: "#19486A", icon: "handshake" }
];

export function SDGFloatingGrid() {
    const gridRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [stars, setStars] = useState<{ style: React.CSSProperties }[]>([]);

    useEffect(() => {
        // Generate stars
        const starCount = 150;
        const newStars = [];
        for (let i = 0; i < starCount; i++) {
            const size = Math.random() * 3 + 'px';
            const style: React.CSSProperties & { '--duration'?: string } = {
                width: size,
                height: size,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                '--duration': (Math.random() * 3 + 2) + 's'
            };
            newStars.push({ style });
        }
        setStars(newStars);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!gridRef.current) return;

            const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

            gridRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden bg-[#131313] text-white">
            {/* Background Stars */}
            <div className={styles.stars}>
                {stars.map((star, i) => (
                    <div key={i} className={styles.star} style={star.style} />
                ))}
            </div>

            <header className="relative z-10 text-center mb-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    SUSTAINABLE DEVELOPMENT
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-300 tracking-widest uppercase">
                    17 Goals to Transform Our World
                </p>
            </header>

            <div className={`w-full max-w-7xl px-4 ${styles.spaceContainer}`} ref={containerRef}>
                <div className={styles.floatingGrid} ref={gridRef} id="grid">
                    {sdgs.map((sdg) => (
                        <div
                            key={sdg.id}
                            className={styles.sdgTile}
                            style={{ backgroundColor: sdg.color }}
                        >
                            <span className={styles.number}>{sdg.id}</span>
                            <i className={`material-icons ${styles.icon}`}>{sdg.icon}</i>
                            <p className={styles.title}>{sdg.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
