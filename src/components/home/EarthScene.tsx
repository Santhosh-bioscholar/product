"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';

// Helper to create heart texture
// Helper to create heart texture
const createHeartTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // Draw heart - refined shape (Upright: Tip Down)
    ctx.fillStyle = '#00ff00';
    ctx.beginPath();
    ctx.moveTo(32, 54);
    ctx.bezierCurveTo(32, 48, 8, 34, 8, 20);
    ctx.bezierCurveTo(8, 8, 22, 8, 32, 18);
    ctx.bezierCurveTo(42, 8, 56, 8, 56, 20);
    ctx.bezierCurveTo(56, 34, 32, 48, 32, 54);
    ctx.fill();

    // Draw Text
    ctx.fillStyle = '#130101ff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('O₂', 32, 30); // Centered slightly higher for heart shape

    const texture = new THREE.CanvasTexture(canvas);
    texture.premultiplyAlpha = true;
    return texture;
};

// Helper to create CO2 bubble texture
const createCO2BubbleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // Draw bubble with gradient
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, '#ff0000');
    gradient.addColorStop(0.5, '#ff0000');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    // Shine highlight
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(20, 20, 6, 0, Math.PI * 2);
    ctx.fill();

    // Draw Text
    ctx.fillStyle = '#130101ff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('CO₂', 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.premultiplyAlpha = true;
    return texture;
};

// Helper to create O2 bubble texture
const createO2BubbleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;

    // Draw bubble with gradient
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, '#00ff00');
    gradient.addColorStop(0.5, '#00ff00');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    // Shine highlight
    ctx.fillStyle = '#00ff00';
    ctx.beginPath();
    ctx.arc(20, 20, 6, 0, Math.PI * 2);
    ctx.fill();

    // Draw Text
    ctx.fillStyle = '#130101ff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('O₂', 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.premultiplyAlpha = true;
    return texture;
};

// Helper to create bubble texture
const createBubbleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;

    // Draw bubble with gradient
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, '#ff0000');
    gradient.addColorStop(0.5, '#ff0000');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();

    // Shine highlight
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(10, 10, 3, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.premultiplyAlpha = true;
    return texture;
};

// CO2 Particles flowing toward Earth
function CO2Particles() {
    const particlesRef = useRef<THREE.Points>(null);
    const count = 200;
    const bubbleTexture = useMemo(() => createCO2BubbleTexture(), []);


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
                size={0.08}
                color="#ff0000"   // bubble blue
                transparent
                opacity={0.6}
                map={bubbleTexture}
                alphaTest={0.01}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );

}

// O2 Particles flowing outward from Earth
function O2Particles() {
    // ... (Setup code same as before until fragmentShader)
    const particlesRef = useRef<THREE.Points>(null);
    const count = 150;

    const heartTexture = useMemo(() => createHeartTexture(), []);
    const bubbleTexture = useMemo(() => createO2BubbleTexture(), []);

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
            const speed = 0.006 + Math.random() * 0.002;
            vel[i * 3] = pos[i * 3] * speed;
            vel[i * 3 + 1] = pos[i * 3 + 1] * speed;
            vel[i * 3 + 2] = pos[i * 3 + 2] * speed;

            ops[i] = Math.random();
        }

        return [pos, vel, ops];
    }, []);

    const uniforms = useMemo(() => ({
        uBubbleTex: { value: bubbleTexture },
        uHeartTex: { value: heartTexture },
        uSize: { value: 5.0 }, // Adjusted size for shader
        uTime: { value: 0 }
    }), [bubbleTexture, heartTexture]);

    useFrame((state) => {
        if (!particlesRef.current) return;
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        uniforms.uTime.value = state.clock.elapsedTime;

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
                const radius = 1.6 + Math.random() * 0.2; // Start slightly above surface

                positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i * 3 + 2] = radius * Math.cos(phi);

                // Recalculate velocity based on new position
                const speed = 0.006 + Math.random() * 0.002;
                velocities[i * 3] = positions[i * 3] * speed;
                velocities[i * 3 + 1] = positions[i * 3 + 1] * speed;
                velocities[i * 3 + 2] = positions[i * 3 + 2] * speed;
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
    });

    const vertexShader = `
        uniform float uSize;
        varying float vDistance;
        varying float vAlpha;
        
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vDistance = length(position);
            
            // Fade out as they get very far
            vAlpha = 1.0 - smoothstep(4.0, 5.0, vDistance);
            
            gl_PointSize = uSize * (20.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `;

    const fragmentShader = `
        uniform sampler2D uBubbleTex;
        uniform sampler2D uHeartTex;
        varying float vDistance;
        varying float vAlpha;

        void main() {
            // Transition from bubble to heart
            // Bubble at surface (1.6) -> start mixing at 2.2 -> full heart at 3.0
            float t = smoothstep(2.0, 3.2, vDistance);
            
            vec4 bubbleColor = texture2D(uBubbleTex, gl_PointCoord);
            
            // Flip Y for heart texture to make it upside down
            vec4 heartColor = texture2D(uHeartTex, vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
            
            
            // Colorize heart to green
            vec4 greenHeart = heartColor;
            
            vec4 finalColor = mix(bubbleColor, greenHeart, t);
            finalColor.a *= vAlpha;

            if (finalColor.a < 0.01) discard;
            
            gl_FragColor = finalColor;
        }
    `;

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

            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
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
                <sphereGeometry args={[1.2, 64, 64]} />
                <meshPhongMaterial map={earthTexture} />
            </mesh>

            {/* Atmosphere */}
            <mesh ref={atmosphereRef} scale={1.05}>
                <sphereGeometry args={[1.0, 64, 64]} />
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
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff0000" />

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

