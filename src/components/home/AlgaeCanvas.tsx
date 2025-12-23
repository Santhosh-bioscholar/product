"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points, PointMaterial } from "@react-three/drei";

function AlgaeParticles({ count = 200 }) { // Reduced count for performance initially, scalable
    const points = useRef<THREE.Points>(null!);

    // Generate particles with specific attributes
    const [positions, colors, sizes] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const color1 = new THREE.Color("#32FA96"); // Bio Green
        const color2 = new THREE.Color("#2F8F9C"); // Teal
        const color3 = new THREE.Color("#FFFFFF"); // Oxygen Bubble White

        for (let i = 0; i < count; i++) {
            // Random spread
            positions[i * 3] = (Math.random() - 0.5) * 15; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

            // Organic Colors
            const rand = Math.random();
            let c = color1;
            if (rand > 0.8) c = color3; // Occasional Oxygen bubble
            else if (rand > 0.5) c = color2;

            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;

            // Varied Sizes
            sizes[i] = Math.random() * 0.15 + 0.05;
        }
        return [positions, colors, sizes];
    }, [count]);

    useFrame((state) => {
        if (!points.current) return;

        // Gentle floating motion
        const time = state.clock.getElapsedTime();

        // Access position attribute to animate individual particles slightly if needed
        // For performance, we rotate the whole group or use a vertex shader. 
        // Here we do a simple gentle rotation and wave Y motion for the group

        points.current.rotation.y = Math.sin(time / 10) * 0.1;
        points.current.rotation.x = Math.sin(time / 15) * 0.05;
        points.current.position.y = Math.sin(time / 5) * 0.2;
    });

    return (
        <Points ref={points} positions={positions} colors={colors} sizes={sizes}>
            <PointMaterial
                transparent
                vertexColors
                size={0.15}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.8}
                map={null} // Could add a texture here for soft glow
            />
        </Points>
    );
}

export function AlgaeCanvas() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]} // Handle high DPI screens
            >
                <ambientLight intensity={0.5} />
                <AlgaeParticles count={300} />
            </Canvas>
        </div>
    );
}

