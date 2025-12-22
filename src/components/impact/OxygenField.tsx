import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  baseSize: number;
  speed: number;
  angle: number;
  drift: number;
  phase: number;
  type: 'oxygen' | 'algae';
  spawnDelay: number;
}

interface Wave {
  phase: number;
  amplitude: number;
  frequency: number;
  speed: number;
  y: number;
  baseY: number;
}

// Phase cycle duration (~18 seconds for full improvement cycle)
const CYCLE_DURATION = 18000;

const OxygenField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const wavesRef = useRef<Wave[]>([]);
  const timeRef = useRef(0);
  const reducedMotionRef = useRef(false);

  // Get current phase and intensity for the improvement cycle
  const getPhaseState = useCallback((time: number) => {
    const cycleTime = time % CYCLE_DURATION;
    const progress = cycleTime / CYCLE_DURATION;
    
    // Phase breakdown:
    // 0.00 - 0.20: Phase 1 (Baseline) - sparse, muted, low activity
    // 0.20 - 0.50: Phase 2 (Activation) - building up, algae activating
    // 0.50 - 0.80: Phase 3 (Optimized) - peak performance, rich field
    // 0.80 - 1.00: Gentle transition back to baseline
    
    let phase: number;
    let intensity: number;
    let activationStrength: number;
    
    if (progress < 0.20) {
      phase = 1;
      intensity = 0.25 + (progress / 0.20) * 0.15;
      activationStrength = 0;
    } else if (progress < 0.50) {
      phase = 2;
      const p = (progress - 0.20) / 0.30;
      intensity = 0.40 + p * 0.45;
      activationStrength = p;
    } else if (progress < 0.80) {
      phase = 3;
      const p = (progress - 0.50) / 0.30;
      intensity = 0.85 + Math.sin(p * Math.PI) * 0.15;
      activationStrength = 1 - p * 0.3;
    } else {
      phase = 1;
      const p = (progress - 0.80) / 0.20;
      intensity = 0.85 - p * 0.60;
      activationStrength = 0;
    }
    
    return { phase, intensity, activationStrength, progress };
  }, []);

  // Smooth easing for transitions
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Initialize particles with staggered spawn delays
  const createParticles = useCallback((width: number, height: number): Particle[] => {
    const particles: Particle[] = [];
    const baseCount = Math.floor((width * height) / 10000);
    const count = Math.min(baseCount, 100);

    for (let i = 0; i < count; i++) {
      const isAlgae = i < count * 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: isAlgae ? Math.random() * 5 + 3 : Math.random() * 2.5 + 0.8,
        baseSize: isAlgae ? Math.random() * 5 + 3 : Math.random() * 2.5 + 0.8,
        speed: Math.random() * 0.25 + 0.08,
        angle: Math.random() * Math.PI * 2,
        drift: Math.random() * 0.6 + 0.2,
        phase: Math.random() * Math.PI * 2,
        type: isAlgae ? 'algae' : 'oxygen',
        spawnDelay: Math.random(), // 0-1, determines when particle becomes visible
      });
    }
    return particles;
  }, []);

  // Initialize energy field waves
  const createWaves = useCallback((height: number): Wave[] => {
    const waves: Wave[] = [];
    for (let i = 0; i < 5; i++) {
      const baseY = height * (0.25 + i * 0.15);
      waves.push({
        phase: Math.random() * Math.PI * 2,
        amplitude: 25 + Math.random() * 35,
        frequency: 0.0018 + Math.random() * 0.001,
        speed: 0.00025 + Math.random() * 0.00015,
        y: baseY,
        baseY,
      });
    }
    return waves;
  }, []);

  // Draw background gradient that evolves with phase
  const drawBackground = useCallback((
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    intensity: number
  ) => {
    const smoothIntensity = easeInOutCubic(intensity);
    const gradient = ctx.createLinearGradient(0, 0, width * 0.3, height);
    
    // Colors evolve from muted to richer
    const sat1 = 15 + smoothIntensity * 20;
    const light1 = 9 + smoothIntensity * 3;
    const sat2 = 18 + smoothIntensity * 18;
    const light2 = 11 + smoothIntensity * 4;
    const sat3 = 25 + smoothIntensity * 20;
    const light3 = 14 + smoothIntensity * 6;
    
    gradient.addColorStop(0, `hsl(162, ${sat1}%, ${light1}%)`);
    gradient.addColorStop(0.5, `hsl(165, ${sat2}%, ${light2}%)`);
    gradient.addColorStop(1, `hsl(248, ${sat3}%, ${light3}%)`);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }, [easeInOutCubic]);

  // Draw energy field waves - become smoother and more coherent at higher intensity
  const drawEnergyField = useCallback((
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number,
    waves: Wave[],
    intensity: number
  ) => {
    const smoothIntensity = easeInOutCubic(intensity);
    
    waves.forEach((wave, index) => {
      // Waves become more organized (less noise) at higher intensity
      const coherence = smoothIntensity;
      const waveStrength = 0.4 + smoothIntensity * 0.6;
      
      const gradient = ctx.createLinearGradient(
        0, wave.baseY - wave.amplitude * 2,
        0, wave.baseY + wave.amplitude * 2
      );
      
      // Color shifts from muted to vibrant
      const hue = 155 + smoothIntensity * 12;
      const sat = 35 + smoothIntensity * 25;
      const light = 20 + smoothIntensity * 8;
      const baseOpacity = (0.04 + smoothIntensity * 0.06) - index * 0.01;
      
      gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${light}%, 0)`);
      gradient.addColorStop(0.5, `hsla(${hue}, ${sat}%, ${light}%, ${baseOpacity})`);
      gradient.addColorStop(1, `hsla(${hue}, ${sat}%, ${light}%, 0)`);

      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 4) {
        // Noise decreases as system becomes more organized
        const noise = (1 - coherence * 0.8) * Math.sin(x * 0.03 + time * 0.0008) * 15;
        
        const primaryWave = Math.sin(x * wave.frequency + time * wave.speed + wave.phase);
        const secondaryWave = Math.sin(x * wave.frequency * 0.6 + time * wave.speed * 0.8) * 0.3;
        
        const y = wave.baseY + 
          (primaryWave + secondaryWave) * wave.amplitude * waveStrength + 
          noise;
        
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    });
  }, [easeInOutCubic]);

  // Draw central algae intelligence glow
  const drawAlgaeGlow = useCallback((
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number,
    intensity: number,
    activationStrength: number
  ) => {
    const smoothIntensity = easeInOutCubic(intensity);
    
    // Main algae glow - stronger during activation phase
    const glowBoost = 1 + activationStrength * 0.4;
    const glowX = width * 0.5 + Math.sin(time * 0.00015) * 40;
    const glowY = height * 0.45 + Math.cos(time * 0.00012) * 25;
    const glowRadius = Math.min(width, height) * (0.4 + smoothIntensity * 0.15);
    
    const gradient = ctx.createRadialGradient(
      glowX, glowY, 0,
      glowX, glowY, glowRadius
    );
    
    const hue = 148 + smoothIntensity * 12;
    const baseOpacity = (0.08 + smoothIntensity * 0.08) * glowBoost;
    const pulseOpacity = baseOpacity + Math.sin(time * 0.0002) * 0.02;
    
    gradient.addColorStop(0, `hsla(${hue}, 55%, 28%, ${pulseOpacity})`);
    gradient.addColorStop(0.4, `hsla(${hue}, 45%, 22%, ${pulseOpacity * 0.45})`);
    gradient.addColorStop(1, `hsla(${hue}, 40%, 18%, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Secondary oxygen glow - becomes brighter at peak
    const glow2X = width * 0.68 + Math.cos(time * 0.00014) * 35;
    const glow2Y = height * 0.58 + Math.sin(time * 0.00018) * 20;
    const glow2Radius = Math.min(width, height) * (0.25 + smoothIntensity * 0.1);
    
    const gradient2 = ctx.createRadialGradient(
      glow2X, glow2Y, 0,
      glow2X, glow2Y, glow2Radius
    );
    
    const hue2 = 182 + smoothIntensity * 10;
    const opacity2 = (0.04 + smoothIntensity * 0.06) + Math.sin(time * 0.00022) * 0.015;
    
    gradient2.addColorStop(0, `hsla(${hue2}, 50%, 42%, ${opacity2})`);
    gradient2.addColorStop(0.5, `hsla(${hue2}, 45%, 35%, ${opacity2 * 0.35})`);
    gradient2.addColorStop(1, `hsla(${hue2}, 40%, 30%, 0)`);
    
    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, width, height);
  }, [easeInOutCubic]);

  // Draw particles with phase-based behavior
  const drawParticles = useCallback((
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number,
    particles: Particle[],
    intensity: number,
    activationStrength: number
  ) => {
    const smoothIntensity = easeInOutCubic(intensity);
    
    // Organization increases with intensity (particles flow more directionally)
    const organization = smoothIntensity * 0.75;
    const targetAngle = -Math.PI * 0.35; // Upward-right flow
    
    particles.forEach((particle) => {
      // Particle visibility based on intensity - sparse at low, abundant at high
      const visibilityThreshold = 1 - smoothIntensity;
      if (particle.spawnDelay > smoothIntensity && particle.type === 'oxygen') {
        return; // Skip this particle at low intensity
      }

      // Movement: chaotic at low intensity, organized at high intensity
      const chaoticAngle = particle.angle + Math.sin(time * 0.0003 + particle.phase) * 0.5;
      const moveAngle = chaoticAngle * (1 - organization) + targetAngle * organization;
      
      // Speed increases with intensity
      const speedMult = 0.4 + smoothIntensity * 0.8;
      
      particle.x += Math.cos(moveAngle) * particle.speed * speedMult;
      particle.y += Math.sin(moveAngle) * particle.speed * speedMult - particle.drift * smoothIntensity * 0.5;
      
      // Gentle oscillation
      particle.x += Math.sin(time * 0.0004 + particle.phase) * 0.25;
      particle.y += Math.cos(time * 0.0003 + particle.phase) * 0.15;

      // Wrap around
      if (particle.x < -30) particle.x = width + 30;
      if (particle.x > width + 30) particle.x = -30;
      if (particle.y < -30) particle.y = height + 30;
      if (particle.y > height + 30) particle.y = -30;

      // Size increases with intensity
      const dynamicSize = particle.baseSize * (0.5 + smoothIntensity * 0.7);
      
      // Opacity increases with intensity
      const dynamicOpacity = (0.2 + smoothIntensity * 0.5) * 0.7;

      if (particle.type === 'algae') {
        // Algae structures - more prominent during activation
        const algaeBoost = 1 + activationStrength * 0.5;
        const hue = 145 + Math.sin(time * 0.0002 + particle.phase) * 8;
        const sat = 50 + smoothIntensity * 15;
        const light = 28 + smoothIntensity * 8;
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, dynamicSize * 3.5
        );
        
        gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${light}%, ${dynamicOpacity * algaeBoost})`);
        gradient.addColorStop(0.4, `hsla(${hue}, ${sat - 10}%, ${light - 5}%, ${dynamicOpacity * 0.4 * algaeBoost})`);
        gradient.addColorStop(1, `hsla(${hue}, ${sat - 15}%, ${light - 8}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dynamicSize * 3.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Oxygen particles - color shifts from dull to fresh cyan
        const hue = 180 + smoothIntensity * 12;
        const sat = 35 + smoothIntensity * 30;
        const light = 45 + smoothIntensity * 15;
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, dynamicSize * 3
        );
        
        gradient.addColorStop(0, `hsla(${hue}, ${sat}%, ${light}%, ${dynamicOpacity})`);
        gradient.addColorStop(0.5, `hsla(${hue}, ${sat - 8}%, ${light - 8}%, ${dynamicOpacity * 0.35})`);
        gradient.addColorStop(1, `hsla(${hue}, ${sat - 15}%, ${light - 15}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dynamicSize * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }, [easeInOutCubic]);

  // Draw peak optimization glow overlay
  const drawPeakGlow = useCallback((
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    intensity: number,
    phase: number
  ) => {
    if (phase !== 3) return;
    
    const smoothIntensity = easeInOutCubic(intensity);
    const peakBonus = (smoothIntensity - 0.8) * 5; // Only visible at high intensity
    
    if (peakBonus <= 0) return;
    
    const gradient = ctx.createRadialGradient(
      width * 0.5, height * 0.35, 0,
      width * 0.5, height * 0.35, width * 0.6
    );
    
    gradient.addColorStop(0, `hsla(172, 45%, 32%, ${0.04 * peakBonus})`);
    gradient.addColorStop(0.5, `hsla(168, 40%, 26%, ${0.02 * peakBonus})`);
    gradient.addColorStop(1, 'hsla(165, 35%, 22%, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }, [easeInOutCubic]);

  // Main animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    timeRef.current += 16;

    // Get current phase state
    const { phase, intensity, activationStrength } = getPhaseState(timeRef.current);

    // Static fallback for reduced motion - show optimized state
    if (reducedMotionRef.current) {
      drawBackground(ctx, width, height, 0.85);
      drawEnergyField(ctx, width, height, 0, wavesRef.current, 0.85);
      drawAlgaeGlow(ctx, width, height, 0, 0.85, 0);
      drawParticles(ctx, width, height, 0, particlesRef.current, 0.85, 0);
      return;
    }

    // Draw layers
    drawBackground(ctx, width, height, intensity);
    drawEnergyField(ctx, width, height, timeRef.current, wavesRef.current, intensity);
    drawAlgaeGlow(ctx, width, height, timeRef.current, intensity, activationStrength);
    drawParticles(ctx, width, height, timeRef.current, particlesRef.current, intensity, activationStrength);
    drawPeakGlow(ctx, width, height, intensity, phase);

    animationRef.current = requestAnimationFrame(animate);
  }, [getPhaseState, drawBackground, drawEnergyField, drawAlgaeGlow, drawParticles, drawPeakGlow]);

  // Setup canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      particlesRef.current = createParticles(rect.width, rect.height);
      wavesRef.current = createWaves(rect.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, createParticles, createWaves]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        mixBlendMode: 'screen',
        opacity: 0.95,
      }}
      aria-hidden="true"
    />
  );
};

export default OxygenField;
