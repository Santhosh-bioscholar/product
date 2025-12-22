"use client";

import { useEffect, useRef, useCallback } from 'react';

interface AminoAcid {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    vx: number;
    vy: number;
    radius: number;
    hue: number;
    connected: boolean;
    chainIndex: number;
    nodeIndex: number;
    foldProgress: number;
}

interface Bond {
    from: number;
    to: number;
    strength: number;
    glowIntensity: number;
    formed: boolean;
}

export function ProteinFoldingAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, active: false });
    const aminoAcidsRef = useRef<AminoAcid[]>([]);
    const bondsRef = useRef<Bond[]>([]);
    const animationRef = useRef<number>(0);
    const timeRef = useRef(0);
    const foldingProgressRef = useRef(0);

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

    const createProteinStructure = useCallback((canvas: HTMLCanvasElement) => {
        const centerX = canvas.width * 0.65;
        const centerY = canvas.height * 0.5;
        const acids: AminoAcid[] = [];
        const bonds: Bond[] = [];

        // Create multiple chains that will fold into a protein
        const chainCount = 4;
        const nodesPerChain = 12;

        for (let chain = 0; chain < chainCount; chain++) {
            const chainAngle = (chain / chainCount) * Math.PI * 2;
            const chainRadius = 180 + chain * 40;

            for (let node = 0; node < nodesPerChain; node++) {
                const progress = node / nodesPerChain;
                const spiralAngle = chainAngle + progress * Math.PI * 1.5;

                // Starting position (spread out)
                const startX = centerX + Math.cos(spiralAngle) * (chainRadius + 150 + Math.random() * 100);
                const startY = centerY + Math.sin(spiralAngle) * (chainRadius + 150 + Math.random() * 100);

                // Target position (folded protein structure - alpha helix inspired)
                const helixAngle = progress * Math.PI * 4 + chainAngle;
                const helixRadius = 60 + chain * 25;
                const verticalOffset = (progress - 0.5) * 120;
                const targetX = centerX + Math.cos(helixAngle) * helixRadius;
                const targetY = centerY + Math.sin(helixAngle) * helixRadius * 0.6 + verticalOffset;

                acids.push({
                    x: startX,
                    y: startY,
                    targetX,
                    targetY,
                    vx: 0,
                    vy: 0,
                    radius: 4 + Math.random() * 2,
                    hue: 155 + Math.random() * 25, // algae green range
                    connected: false,
                    chainIndex: chain,
                    nodeIndex: node,
                    foldProgress: 0,
                });

                // Create backbone bonds within chain
                if (node > 0) {
                    bonds.push({
                        from: acids.length - 2,
                        to: acids.length - 1,
                        strength: 1,
                        glowIntensity: 0,
                        formed: false,
                    });
                }
            }
        }

        // Create cross-chain bonds (hydrogen bonds in protein folding)
        for (let i = 0; i < acids.length; i++) {
            for (let j = i + 1; j < acids.length; j++) {
                if (acids[i].chainIndex !== acids[j].chainIndex) {
                    const dx = acids[i].targetX - acids[j].targetX;
                    const dy = acids[i].targetY - acids[j].targetY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 50 && Math.random() > 0.6) {
                        bonds.push({
                            from: i,
                            to: j,
                            strength: 0.5,
                            glowIntensity: 0,
                            formed: false,
                        });
                    }
                }
            }
        }

        aminoAcidsRef.current = acids;
        bondsRef.current = bonds;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createProteinStructure(canvas);
            foldingProgressRef.current = 0;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        const handleScroll = () => {
            const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            foldingProgressRef.current = Math.min(1, foldingProgressRef.current + scrollProgress * 0.01);
        };

        const drawAminoAcid = (acid: AminoAcid, ctx: CanvasRenderingContext2D) => {
            const glowRadius = acid.radius * 3;
            // Outer glow
            const gradient = ctx.createRadialGradient(
                acid.x, acid.y, 0,
                acid.x, acid.y, glowRadius
            );
            const intensity = 0.3 + acid.foldProgress * 0.4;
            gradient.addColorStop(0, `hsla(${acid.hue}, 100%, 55%, ${intensity})`);
            gradient.addColorStop(0.4, `hsla(${acid.hue}, 100%, 45%, ${intensity * 0.5})`);
            gradient.addColorStop(1, `hsla(${acid.hue}, 100%, 35%, 0)`);

            ctx.beginPath();
            ctx.arc(acid.x, acid.y, glowRadius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(acid.x, acid.y, acid.radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${acid.hue}, 100%, 65%, ${0.7 + acid.foldProgress * 0.3})`;
            ctx.fill();
        };

        const drawBond = (bond: Bond, acids: AminoAcid[], ctx: CanvasRenderingContext2D) => {
            const from = acids[bond.from];
            const to = acids[bond.to];
            if (!from || !to) return;

            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Only draw if close enough
            const maxDist = bond.strength === 1 ? 100 : 60;
            if (dist > maxDist) return;

            const progress = Math.min(1, (maxDist - dist) / maxDist);
            const avgHue = (from.hue + to.hue) / 2;

            // Check if bond should form
            if (progress > 0.7 && !bond.formed) {
                bond.formed = true;
                bond.glowIntensity = 1;
            }

            // Fade glow
            if (bond.glowIntensity > 0) {
                bond.glowIntensity *= 0.98;
            }

            // Draw bond line
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            const baseOpacity = bond.strength === 1 ? 0.6 : 0.3;
            const opacity = baseOpacity * progress + bond.glowIntensity * 0.4;
            ctx.strokeStyle = `hsla(${avgHue + 15}, 100%, 55%, ${opacity})`;
            ctx.lineWidth = bond.strength === 1 ? 2 : 1;
            ctx.stroke();

            // Glow effect on newly formed bonds
            if (bond.glowIntensity > 0.1) {
                ctx.shadowColor = `hsla(${avgHue + 20}, 100%, 60%, ${bond.glowIntensity})`;
                ctx.shadowBlur = 15;
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
        };



        const drawHelixGuide = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, progress: number) => {
            if (progress < 0.3) return;
            const centerX = canvas.width * 0.65;
            const centerY = canvas.height * 0.5;
            const opacity = (progress - 0.3) * 0.15;

            // Draw faint helix backbone guide
            ctx.beginPath();
            for (let t = 0; t <= 1; t += 0.02) {
                const angle = t * Math.PI * 4;
                const radius = 80;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius * 0.6 + (t - 0.5) * 120;
                if (t === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.strokeStyle = `hsla(160, 80%, 50%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 10]);
            ctx.stroke();
            ctx.setLineDash([]);
        };

        const animate = () => {
            timeRef.current += 1;
            // Natural folding progress
            foldingProgressRef.current = Math.min(1, foldingProgressRef.current + 0.0008);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // drawBackground(ctx, canvas);
            drawHelixGuide(ctx, canvas, foldingProgressRef.current);

            const acids = aminoAcidsRef.current;
            const bonds = bondsRef.current;

            // Update amino acids
            acids.forEach((acid, index) => {
                // Staggered folding based on chain and node position
                const staggerDelay = (acid.chainIndex * 0.15 + acid.nodeIndex * 0.02);
                const localProgress = Math.max(0, Math.min(1, (foldingProgressRef.current - staggerDelay) * 2));
                acid.foldProgress = localProgress;

                // Smooth interpolation to target
                const easeProgress = 1 - Math.pow(1 - localProgress, 3); // ease-out cubic
                const targetX = lerp(acid.x, acid.targetX, easeProgress * 0.03);
                const targetY = lerp(acid.y, acid.targetY, easeProgress * 0.03);

                // Mouse influence
                if (mouseRef.current.active) {
                    const dx = mouseRef.current.x - acid.x;
                    const dy = mouseRef.current.y - acid.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 200 && dist > 0) {
                        const influence = (200 - dist) / 200 * 0.3 * (1 - localProgress);
                        acid.vx += (dx / dist) * influence;
                        acid.vy += (dy / dist) * influence;
                    }
                }

                // Apply subtle attraction to nearby acids
                acids.forEach((other, otherIndex) => {
                    if (index === otherIndex) return;
                    const dx = other.x - acid.x;
                    const dy = other.y - acid.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 80 && dist > 10) {
                        const attraction = (80 - dist) / 80 * 0.01 * localProgress;
                        acid.vx += (dx / dist) * attraction;
                        acid.vy += (dy / dist) * attraction;
                    }
                });

                // Update velocity and position
                acid.vx += (targetX - acid.x) * 0.02;
                acid.vy += (targetY - acid.y) * 0.02;

                // Damping
                acid.vx *= 0.95;
                acid.vy *= 0.95;
                acid.x += acid.vx;
                acid.y += acid.vy;

                // Subtle floating motion
                const floatOffset = Math.sin(timeRef.current * 0.01 + index * 0.5) * (1 - localProgress) * 2;
                acid.y += floatOffset * 0.1;
            });

            // Draw bonds first (behind acids)
            bonds.forEach(bond => drawBond(bond, acids, ctx));

            // Draw amino acids
            acids.forEach(acid => drawAminoAcid(acid, ctx));

            // Draw "data streams" flowing into the structure
            const streamCount = 6;
            for (let i = 0; i < streamCount; i++) {
                const progress = ((timeRef.current * 0.002 + i / streamCount) % 1);
                const startX = canvas.width + 50;
                const startY = canvas.height * (0.2 + (i / streamCount) * 0.6);
                const endX = canvas.width * 0.65;
                const endY = canvas.height * 0.5;
                const currentX = lerp(startX, endX, progress);
                const currentY = lerp(startY, endY, progress);
                const opacity = Math.sin(progress * Math.PI) * 0.3;

                ctx.beginPath();
                ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(160, 100%, 60%, ${opacity})`;
                ctx.fill();

                // Trail
                for (let t = 0; t < 5; t++) {
                    const trailProgress = Math.max(0, progress - t * 0.02);
                    const trailX = lerp(startX, endX, trailProgress);
                    const trailY = lerp(startY, endY, trailProgress);
                    const trailOpacity = opacity * (1 - t / 5) * 0.5;
                    ctx.beginPath();
                    ctx.arc(trailX, trailY, 1, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(165, 100%, 55%, ${trailOpacity})`;
                    ctx.fill();
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            animate();
        } else {
            // Show static folded protein
            foldingProgressRef.current = 1;
            aminoAcidsRef.current.forEach(acid => {
                acid.x = acid.targetX;
                acid.y = acid.targetY;
                acid.foldProgress = 1;
            });
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // drawBackground(ctx, canvas);
            bondsRef.current.forEach(bond => drawBond(bond, aminoAcidsRef.current, ctx));
            aminoAcidsRef.current.forEach(acid => drawAminoAcid(acid, ctx));
        }

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationRef.current);
        };
    }, [createProteinStructure]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
        />
    );
}