"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { FadeIn } from "../animations/FadeIn";
import * as THREE from "three";

function AnimatedGlobe(props: any) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
            meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5} {...props}>
            <MeshDistortMaterial
                color="#0AB3A3"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.4}
                metalness={0.8}
                wireframe={true}
            />
        </Sphere>
    );
}

export function GlobalPresence() {
    return (
        <section className="py-24 px-6 bg-[#0A2540] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 h-[400px] w-full relative">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={2} />
                        <pointLight position={[10, 10, 10]} />
                        <AnimatedGlobe />
                    </Canvas>
                </div>

                <div className="order-1 lg:order-2">
                    <FadeIn direction="left">
                        <h2 className="text-green-400 font-bold tracking-widest uppercase mb-4">Global Reach</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Impact Without <br /> Borders
                        </h3>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            From our headquarters in Aroora, we are expanding our footprint across continents. Our biotechnology solutions are designed to be universally adaptable, helping diverse ecosystems thrive from the tropics to the poles.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">15+</h4>
                                <p className="text-sm text-gray-400">Countries Served</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">3</h4>
                                <p className="text-sm text-gray-400">R&D Centers</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
