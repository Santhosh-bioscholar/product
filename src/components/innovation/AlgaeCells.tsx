"use client";

import { useEffect, useState } from 'react';

interface Cell {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
}

interface AlgaeCellsProps {
    count?: number;
    className?: string;
}

const AlgaeCells = ({ count = 8, className = '' }: AlgaeCellsProps) => {
    const [cells, setCells] = useState<Cell[]>([]);

    useEffect(() => {
        const newCells = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10,
            size: Math.random() * 120 + 60,
            delay: Math.random() * 4,
        }));
        setCells(newCells);
    }, [count]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {cells.map((cell) => (
                <div
                    key={cell.id}
                    className="algae-cell"
                    style={{
                        left: `${cell.x}%`,
                        top: `${cell.y}%`,
                        width: `${cell.size}px`,
                        height: `${cell.size}px`,
                        animationDelay: `${cell.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default AlgaeCells;
