"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';

// CO2 Particles flowing toward Earth
function CO2Particles() {
    const particlesRef = useRef<THREE.Points>(null);
    const count = 200;

    const [positions, velocities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Start from outer sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 4 + Math.random() * 3;

            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);

            // Velocity toward center
            vel[i * 3] = -pos[i * 3] * 0.008;
            vel[i * 3 + 1] = -pos[i * 3 + 1] * 0.008;
            vel[i * 3 + 2] = -pos[i * 3 + 2] * 0.008;
        }

        return [pos, vel];
    }, []);

    useFrame(() => {
        if (!particlesRef.current) return;
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            positions[i * 3] += velocities[i * 3];
            positions[i * 3 + 1] += velocities[i * 3 + 1];
            positions[i * 3 + 2] += velocities[i * 3 + 2];

            // Reset if too close to center
            const dist = Math.sqrt(
                positions[i * 3] ** 2 +
                positions[i * 3 + 1] ** 2 +
                positions[i * 3 + 2] ** 2
            );

            if (dist < 1.6) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const radius = 4 + Math.random() * 3;

                positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i * 3 + 2] = radius * Math.cos(phi);

                velocities[i * 3] = -positions[i * 3] * 0.008;
                velocities[i * 3 + 1] = -positions[i * 3 + 1] * 0.008;
                velocities[i * 3 + 2] = -positions[i * 3 + 2] * 0.008;
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#4a5568"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

// O2 Particles flowing outward from Earth
function O2Particles() {
    const particlesRef = useRef<THREE.Points>(null);
    const count = 150;

    const [positions, velocities, opacities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);
        const ops = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Start near Earth surface
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 1.5 + Math.random() * 0.3;

            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);

            // Velocity outward
            vel[i * 3] = pos[i * 3] * 0.006;
            vel[i * 3 + 1] = pos[i * 3 + 1] * 0.006;
            vel[i * 3 + 2] = pos[i * 3 + 2] * 0.006;

            ops[i] = Math.random();
        }

        return [pos, vel, ops];
    }, []);

    useFrame(() => {
        if (!particlesRef.current) return;
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < count; i++) {
            positions[i * 3] += velocities[i * 3];
            positions[i * 3 + 1] += velocities[i * 3 + 1];
            positions[i * 3 + 2] += velocities[i * 3 + 2];

            // Reset if too far
            const dist = Math.sqrt(
                positions[i * 3] ** 2 +
                positions[i * 3 + 1] ** 2 +
                positions[i * 3 + 2] ** 2
            );

            if (dist > 5) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const radius = 1.5 + Math.random() * 0.3;

                positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i * 3 + 2] = radius * Math.cos(phi);

                velocities[i * 3] = positions[i * 3] * 0.006;
                velocities[i * 3 + 1] = positions[i * 3 + 1] * 0.006;
                velocities[i * 3 + 2] = positions[i * 3 + 2] * 0.006;
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#22d3ee"
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

// Earth with real texture
function Earth() {
    const earthRef = useRef<THREE.Mesh>(null);
    const atmosphereRef = useRef<THREE.Mesh>(null);

    const earthTexture = useLoader(
        TextureLoader,
        'https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/earthmap1k.jpg'
    );

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += 0.001;
        }
        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.y += 0.0008;
        }
    });

    return (
        <group>
            {/* Earth */}
            <mesh ref={earthRef}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshPhongMaterial map={earthTexture} />
            </mesh>

            {/* Atmosphere */}
            <mesh ref={atmosphereRef} scale={1.05}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshPhongMaterial
                    color="#00aaff"
                    transparent
                    opacity={0.2}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 3, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#60a5fa" />

            <Stars
                radius={100}
                depth={50}
                count={3000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />

            <Earth />
            <CO2Particles />
            <O2Particles />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.3}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
            />
        </>
    );
}

export default function EarthScene() {
    return (
        <div className="w-full h-screen bg-background">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
