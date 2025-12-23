"use client";

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Fallback procedural texture if image fails
const createDetailedEarthTexture = () => {
    const size = 2048;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size / 2;
    const ctx = canvas.getContext('2d')!;

    // Deep ocean base
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, size / 2);
    oceanGradient.addColorStop(0, '#0a2d52');
    oceanGradient.addColorStop(0.5, '#1e5a8a');
    oceanGradient.addColorStop(1, '#0a2d52');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, size, size / 2);

    // Ocean currents
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * size;
        const y = Math.random() * (size / 2);
        ctx.strokeStyle = `rgba(30, 100, 160, ${0.1 + Math.random() * 0.15})`;
        ctx.lineWidth = 1 + Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, 20 + Math.random() * 60, 0, Math.PI * (1 + Math.random()));
        ctx.stroke();
    }

    // Continents
    const continents = [
        { points: [[510, 140], [560, 150], [575, 240], [515, 340], [480, 260], [490, 150]], color: '#c4a55a', isDesert: true },
        { points: [[480, 80], [590, 100], [540, 115], [470, 100]], color: '#5a8a4a', isDesert: false },
        { points: [[590, 60], [950, 100], [950, 200], [620, 160]], color: '#6a9a5a', isDesert: false },
        { points: [[720, 180], [770, 200], [740, 280], [710, 240]], color: '#8ab06a', isDesert: false },
        { points: [[820, 200], [920, 250], [830, 270]], color: '#4a9a3a', isDesert: false },
        { points: [[880, 320], [1020, 350], [900, 400]], color: '#c49a4a', isDesert: true },
        { points: [[100, 60], [300, 120], [140, 190]], color: '#5a8a4a', isDesert: false },
        { points: [[240, 240], [320, 320], [230, 420]], color: '#3a9a2a', isDesert: false },
        { points: [[560, 150], [640, 190], [580, 200]], color: '#d4b06a', isDesert: true },
    ];

    continents.forEach(cont => {
        ctx.fillStyle = cont.color;
        ctx.beginPath();
        cont.points.forEach((p, i) => i === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]));
        ctx.closePath();
        ctx.fill();
    });

    // Vegetation clusters
    const vegZones = [
        { cx: 260, cy: 280, spread: 80, density: 60 },
        { cx: 520, cy: 260, spread: 60, density: 50 },
        { cx: 740, cy: 220, spread: 50, density: 45 },
        { cx: 860, cy: 240, spread: 70, density: 55 },
        { cx: 180, cy: 100, spread: 80, density: 45 },
    ];

    vegZones.forEach(zone => {
        for (let i = 0; i < zone.density; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * zone.spread;
            const x = zone.cx + Math.cos(angle) * dist;
            const y = zone.cy + Math.sin(angle) * dist;
            const s = 4 + Math.random() * 12;

            const gradient = ctx.createRadialGradient(x, y, 0, x, y, s);
            gradient.addColorStop(0, 'rgba(80, 220, 80, 0.9)');
            gradient.addColorStop(1, 'rgba(40, 140, 40, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, s, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    return new THREE.CanvasTexture(canvas);
};

const createCloudTexture = () => {
    const size = 2048;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size / 2;
    const ctx = canvas.getContext('2d')!;

    for (let i = 0; i < 80; i++) {
        const x = Math.random() * size;
        const y = Math.random() * (size / 2);
        const r = 30 + Math.random() * 80;

        for (let j = 0; j < 5; j++) {
            const cx = x + (Math.random() - 0.5) * r;
            const cy = y + (Math.random() - 0.5) * r * 0.5;
            const cr = r * (0.3 + Math.random() * 0.7);

            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${0.4 + Math.random() * 0.4})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    return new THREE.CanvasTexture(canvas);
};

export const Earth = () => {
    const earthRef = useRef<THREE.Mesh>(null);
    const cloudsRef = useRef<THREE.Mesh>(null);

    // Load the uploaded Earth texture
    const texture = useLoader(THREE.TextureLoader, '/earth-texture.png.png');
    const cloudTexture = useMemo(() => createCloudTexture(), []);
    const fallbackTexture = useMemo(() => createDetailedEarthTexture(), []);

    // Configure texture for sphere mapping
    useMemo(() => {
        if (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
        }
    }, [texture]);

    useFrame((_, delta) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += delta * 0.05;
        }
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y += delta * 0.055;
        }
    });

    return (
        <group>
            {/* Earth sphere with uploaded texture */}
            <mesh ref={earthRef}>
                <sphereGeometry args={[2, 128, 128]} />
                <meshStandardMaterial
                    map={texture || fallbackTexture}
                    roughness={0.6}
                    metalness={0.15}
                />
            </mesh>

            {/* Cloud layer */}
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[2.03, 64, 64]} />
                <meshStandardMaterial
                    map={cloudTexture}
                    transparent
                    opacity={0.35}
                    depthWrite={false}
                />
            </mesh>

            {/* Inner atmosphere glow */}
            <mesh>
                <sphereGeometry args={[2.08, 64, 64]} />
                <meshBasicMaterial
                    color="#4a9ad4"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Outer atmosphere rim */}
            <mesh>
                <sphereGeometry args={[2.2, 64, 64]} />
                <meshBasicMaterial
                    color="#7ac4f0"
                    transparent
                    opacity={0.05}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
};

export const Overlay = () => {
    return (
        <div className="">
            {/* Title */}
          
        </div>
    );
};

interface ParticleBandProps {
    radius: number;
    tilt: number;
    particleCount: number;
    rotationSpeed: number;
    yOffset: number;
    bandWidth: number;
    colorPalette?: THREE.Color[];
    useArrows?: boolean;
}

const ParticleBand = ({
    radius,
    tilt,
    particleCount,
    rotationSpeed,
    yOffset,
    bandWidth,
    colorPalette,
    useArrows = true
}: ParticleBandProps) => {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const rotationRef = useRef(0);

    // Arrow geometry
    const arrowGeometry = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0.05);
        shape.lineTo(-0.15, 0.08);
        shape.lineTo(-0.15, 0.03);
        shape.lineTo(-0.3, 0.03);
        shape.lineTo(-0.3, -0.03);
        shape.lineTo(-0.15, -0.03);
        shape.lineTo(-0.15, -0.08);
        shape.lineTo(0, -0.05);
        shape.closePath();

        return new THREE.ExtrudeGeometry(shape, { depth: 0.02, bevelEnabled: false });
    }, []);

    // Dot geometry (very small sphere)
    const dotGeometry = useMemo(() => {
        return new THREE.SphereGeometry(0.015, 6, 6);
    }, []);

    const geometry = useArrows ? arrowGeometry : dotGeometry;

    // Default color palette
    const defaultColorPalette = useMemo(() => [
        new THREE.Color('#dc3545'),
        new THREE.Color('#e85d04'),
        new THREE.Color('#f48c06'),
        new THREE.Color('#ffba08'),
        new THREE.Color('#ffd60a'),
        new THREE.Color('#ffba08'),
        new THREE.Color('#f48c06'),
        new THREE.Color('#e85d04'),
    ], []);

    const colors_palette = colorPalette || defaultColorPalette;

    // Generate particle positions and colors
    const { matrices, colors } = useMemo(() => {
        const matrices: THREE.Matrix4[] = [];
        const colors: THREE.Color[] = [];

        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 2;
            const yVariation = (Math.random() - 0.5) * bandWidth;

            const x = Math.cos(angle) * radius;
            const y = yOffset + yVariation;
            const z = Math.sin(angle) * radius;

            const matrix = new THREE.Matrix4();
            matrix.setPosition(x, y, z);

            if (useArrows) {
                const tangentAngle = angle + Math.PI / 2;
                const rotationMatrix = new THREE.Matrix4().makeRotationY(tangentAngle);
                const tiltMatrix = new THREE.Matrix4().makeRotationZ(tilt);
                matrix.multiply(rotationMatrix);
                matrix.multiply(tiltMatrix);
            }

            const scale = 0.8 + Math.random() * 0.4;
            const scaleMatrix = new THREE.Matrix4().makeScale(scale, scale, scale);
            matrix.multiply(scaleMatrix);

            matrices.push(matrix);

            const colorIndex = Math.floor((angle / (Math.PI * 2)) * colors_palette.length);
            const nextColorIndex = (colorIndex + 1) % colors_palette.length;
            const t = (angle / (Math.PI * 2)) * colors_palette.length - colorIndex;

            const color = colors_palette[colorIndex].clone().lerp(colors_palette[nextColorIndex], t);
            colors.push(color);
        }

        return { matrices, colors };
    }, [particleCount, radius, yOffset, bandWidth, tilt, colors_palette, useArrows]);

    useMemo(() => {
        if (meshRef.current) {
            matrices.forEach((matrix, i) => {
                meshRef.current!.setMatrixAt(i, matrix);
                meshRef.current!.setColorAt(i, colors[i]);
            });
            meshRef.current.instanceMatrix.needsUpdate = true;
            if (meshRef.current.instanceColor) {
                meshRef.current.instanceColor.needsUpdate = true;
            }
        }
    }, [matrices, colors]);

    useFrame((_, delta) => {
        if (meshRef.current) {
            rotationRef.current += delta * rotationSpeed;

            const rotationMatrix = new THREE.Matrix4().makeRotationY(rotationRef.current);

            matrices.forEach((baseMatrix, i) => {
                const newMatrix = baseMatrix.clone();
                newMatrix.premultiply(rotationMatrix);
                meshRef.current!.setMatrixAt(i, newMatrix);
            });

            meshRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    // return (
    //     <instancedMesh
    //         ref={meshRef}
    //         args={[geometry, undefined, particleCount]}
    //         frustumCulled={false}
    //     >
    //         <meshStandardMaterial
    //             emissive={useArrows ? "#ff8c42" : "#cc3333"}
    //             emissiveIntensity={useArrows ? 0.8 : 1.2}
    //             roughness={0.2}
    //             metalness={0.7}
    //             vertexColors
    //         />
    //     </instancedMesh>
    // );
};

export const ParticleBands = () => {
    // Red/orange palette for outer dots
    const redOrangePalette = useMemo(() => [
        new THREE.Color('#8b0000'), // Dark red
        new THREE.Color('#cc0000'), // Red
        new THREE.Color('#e62020'), // Bright red
        new THREE.Color('#ff4500'), // Orange red
        new THREE.Color('#ff6600'), // Deep orange
        new THREE.Color('#ff4500'),
        new THREE.Color('#e62020'),
        new THREE.Color('#cc0000'),
    ], []);

    // Yellow/orange palette for inner arrows
    const yellowOrangePalette = useMemo(() => [
        new THREE.Color('#e85d04'),
        new THREE.Color('#f48c06'),
        new THREE.Color('#ffba08'),
        new THREE.Color('#ffd60a'),
        new THREE.Color('#ffea00'),
        new THREE.Color('#ffd60a'),
        new THREE.Color('#ffba08'),
        new THREE.Color('#f48c06'),
    ], []);

    return (
        <group>
            {/* Outer upper band - red/orange dots (top only) */}
            <ParticleBand
                radius={3.5}
                tilt={0.2}
                particleCount={1000}
                rotationSpeed={0.08}
                yOffset={2.2}
                bandWidth={0.5}
                colorPalette={redOrangePalette}
                useArrows={false}
            />

            {/* Second upper band */}
            <ParticleBand
                radius={3.8}
                tilt={0.15}
                particleCount={800}
                rotationSpeed={0.06}
                yOffset={2.6}
                bandWidth={0.4}
                colorPalette={redOrangePalette}
                useArrows={false}
            />

            {/* Outer lower band - red/orange dots (bottom only) */}
            <ParticleBand
                radius={3.5}
                tilt={-0.2}
                particleCount={1000}
                rotationSpeed={-0.07}
                yOffset={-2.2}
                bandWidth={0.5}
                colorPalette={redOrangePalette}
                useArrows={false}
            />

            {/* Second lower band */}
            <ParticleBand
                radius={3.8}
                tilt={-0.15}
                particleCount={800}
                rotationSpeed={-0.05}
                yOffset={-2.6}
                bandWidth={0.4}
                colorPalette={redOrangePalette}
                useArrows={false}
            />

            {/* Inner upper band - yellow/orange arrows */}
            <ParticleBand
                radius={3.0}
                tilt={0.05}
                particleCount={400}
                rotationSpeed={0.15}
                yOffset={0.9}
                bandWidth={0.5}
                colorPalette={yellowOrangePalette}
                useArrows={true}
            />

            {/* Inner lower band - yellow/orange arrows */}
            <ParticleBand
                radius={3.1}
                tilt={-0.05}
                particleCount={400}
                rotationSpeed={-0.12}
                yOffset={-0.9}
                bandWidth={0.5}
                colorPalette={yellowOrangePalette}
                useArrows={true}
            />

            {/* Middle accent band - mixed */}
            <ParticleBand
                radius={2.8}
                tilt={0}
                particleCount={200}
                rotationSpeed={0.1}
                yOffset={0}
                bandWidth={0.3}
                colorPalette={yellowOrangePalette}
                useArrows={true}
            />
        </group>
    );
};

// Tree positions on vegetation areas (spherical coordinates: theta, phi)
const vegetationPositions = [
    // Amazon rainforest
    ...Array.from({ length: 25 }, () => ({ theta: Math.random() * 0.4 + 4.5, phi: Math.random() * 0.5 + 1.2 })),
    // Central Africa
    ...Array.from({ length: 20 }, () => ({ theta: Math.random() * 0.4 + 0.3, phi: Math.random() * 0.4 + 1.4 })),
    // East Africa
    ...Array.from({ length: 15 }, () => ({ theta: Math.random() * 0.3 + 0.6, phi: Math.random() * 0.3 + 1.3 })),
    // India
    ...Array.from({ length: 18 }, () => ({ theta: Math.random() * 0.4 + 1.2, phi: Math.random() * 0.4 + 1.2 })),
    // Southeast Asia
    ...Array.from({ length: 22 }, () => ({ theta: Math.random() * 0.5 + 1.8, phi: Math.random() * 0.4 + 1.3 })),
    // Indonesia
    ...Array.from({ length: 15 }, () => ({ theta: Math.random() * 0.4 + 2.0, phi: Math.random() * 0.3 + 1.5 })),
    // Southern China
    ...Array.from({ length: 15 }, () => ({ theta: Math.random() * 0.4 + 1.9, phi: Math.random() * 0.3 + 1.0 })),
    // Japan/Korea
    ...Array.from({ length: 10 }, () => ({ theta: Math.random() * 0.3 + 2.3, phi: Math.random() * 0.3 + 0.9 })),
    // Northern Europe
    ...Array.from({ length: 12 }, () => ({ theta: Math.random() * 0.5 + 0.2, phi: Math.random() * 0.3 + 0.8 })),
    // Siberia
    ...Array.from({ length: 20 }, () => ({ theta: Math.random() * 1.0 + 1.5, phi: Math.random() * 0.3 + 0.6 })),
    // North America (East coast forests)
    ...Array.from({ length: 18 }, () => ({ theta: Math.random() * 0.5 + 4.8, phi: Math.random() * 0.4 + 0.9 })),
    // Pacific Northwest
    ...Array.from({ length: 12 }, () => ({ theta: Math.random() * 0.3 + 4.2, phi: Math.random() * 0.3 + 0.8 })),
    // Central America
    ...Array.from({ length: 10 }, () => ({ theta: Math.random() * 0.3 + 4.6, phi: Math.random() * 0.2 + 1.3 })),
];

const Tree = ({ position, scale, color }: { position: THREE.Vector3; scale: number; color: THREE.Color }) => {
    const groupRef = useRef<THREE.Group>(null);

    // Calculate rotation to point outward from Earth center
    const rotation = useMemo(() => {
        const up = position.clone().normalize();
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), up);
        const euler = new THREE.Euler().setFromQuaternion(quaternion);
        return euler;
    }, [position]);

    return (
        <group ref={groupRef} position={position} rotation={rotation}>
            {/* Tree trunk */}
            <mesh position={[0, scale * 2, 0]}>
                <cylinderGeometry args={[scale * 0.3, scale * 0.4, scale * 4, 6]} />
                <meshStandardMaterial color="#4a3728" roughness={0.9} />
            </mesh>

            {/* Tree foliage - bottom layer */}
            <mesh position={[0, scale * 5, 0]}>
                <coneGeometry args={[scale * 2.5, scale * 4, 8]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.8}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Tree foliage - middle layer */}
            <mesh position={[0, scale * 7.5, 0]}>
                <coneGeometry args={[scale * 2, scale * 3.5, 8]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.8}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Tree foliage - top layer */}
            <mesh position={[0, scale * 9.5, 0]}>
                <coneGeometry args={[scale * 1.5, scale * 3, 8]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.8}
                    emissive={color}
                    emissiveIntensity={0.3}
                />
            </mesh>
        </group>
    );
};

export const Trees = () => {
    const treesRef = useRef<THREE.Group>(null);

    // Generate tree instances
    const treeData = useMemo(() => {
        return vegetationPositions.map((pos) => {
            const radius = 2.01; // Slightly above Earth surface

            // Convert spherical to cartesian
            const x = radius * Math.sin(pos.phi) * Math.cos(pos.theta);
            const y = radius * Math.cos(pos.phi);
            const z = radius * Math.sin(pos.phi) * Math.sin(pos.theta);

            const scale = 0.015 + Math.random() * 0.02;

            return {
                position: new THREE.Vector3(x, y, z),
                scale,
                color: new THREE.Color().setHSL(0.3 + Math.random() * 0.1, 0.8, 0.35 + Math.random() * 0.15),
            };
        });
    }, []);

    useFrame((_, delta) => {
        if (treesRef.current) {
            treesRef.current.rotation.y += delta * 0.05; // Match Earth rotation
        }
    });

    // return (
    //     <group ref={treesRef}>
    //         {treeData.map((tree, i) => (
    //             <Tree
    //                 key={i}
    //                 position={tree.position}
    //                 scale={tree.scale}
    //                 color={tree.color}
    //             />
    //         ))}
    //     </group>
    // );
};

const SceneContent = () => {
    return (
        <>
            {/* Ambient light for base illumination */}
            <ambientLight intensity={0.2} />

            {/* Main directional light (sun-like) */}
            <directionalLight
                position={[10, 5, 5]}
                intensity={1.5}
                color="#fff5e6"
            />

            {/* Rim light for atmosphere effect */}
            <directionalLight
                position={[-10, 0, -5]}
                intensity={0.3}
                color="#6ab4e8"
            />

            {/* Fill light */}
            <pointLight
                position={[-5, 5, -5]}
                intensity={0.2}
                color="#ffaa66"
            />

            <Earth />
            <Trees />
            <ParticleBands />

            {/* Minimal orbit controls - disabled by default for cinematic feel */}
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                minDistance={5}
                maxDistance={15}
                autoRotate={false}
                rotateSpeed={0.3}
                zoomSpeed={0.5}
            />
        </>
    );
};

export const Scene = () => {
    return (
        <div className="relative w-full h-full bg-background">
            <Canvas
                camera={{ position: [0, 2, 8], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: 'high-performance'
                }}
                dpr={[1, 2]}
            >
                <color attach="background" args={['#050810']} />
                <fog attach="fog" args={['#050810', 15, 30]} />

                <Suspense fallback={null}>
                    <SceneContent />
                </Suspense>
            </Canvas>
            <Overlay />
        </div>
    );
};

// Main export - default export for compatibility
export default function EarthAnimation() {
    return <Scene />;
}
