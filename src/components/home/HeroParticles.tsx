"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles(props: any) {
    const ref = useRef<THREE.Points>(null!);

    // Generate random particles
    const [positions, colors] = useMemo(() => {
        const count = 2000; // Number of particles
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            // Random position in a sphere
            const r = 20 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta); // x
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
            positions[i * 3 + 2] = r * Math.cos(phi); // z

            // Color variation (green/blue/teal for algae/oxygen)
            // Mix of #32FA96 (Green) and #2F2F7C (Blue) and #FFFFFF (Oxygen)
            if (Math.random() > 0.8) {
                color.set("#ffffff"); // Oxygen
            } else if (Math.random() > 0.5) {
                color.set("#32FA96"); // Algae Green
            } else {
                color.set("#2F8F9C"); // Teal/Blue
            }

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return [positions, colors];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export function HeroParticles() {
    return (
        <div className="absolute inset-0 w-full h-full z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
                <Particles />
            </Canvas>
        </div>
    );
}
