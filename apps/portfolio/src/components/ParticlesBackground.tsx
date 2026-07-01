import { useEffect, useRef } from "react";
import "./particles.css";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  twinkle: number;
  phase: number;
  vx: number;
  vy: number;
  color: string;
}

const rand = (a: number, b: number) => a + Math.random() * (b - a);

/**
 * Campo de partículas (starfield) em Canvas 2D — leve, sem dependências.
 * Pequenos "pixels" que brilham (twinkle) e derivam devagar pela tela.
 */
export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Céu estrelado: densidade bem alta (com teto para manter performance).
      const count = Math.min(1800, Math.round((w * h) / 1400));
      particles = [];
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: roll < 0.8 ? 1 : roll < 0.97 ? 2 : 3,
          alpha: rand(0.12, 0.75),
          twinkle: rand(0.4, 1.6),
          phase: rand(0, Math.PI * 2),
          vx: rand(-0.03, 0.03),
          vy: rand(-0.02, 0.02),
          color: Math.random() < 0.5 ? "255, 255, 255" : "200, 170, 255",
        });
      }
    };
    build();

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const start = performance.now();
    let raf = 0;

    const draw = (now: number) => {
      const time = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x += w;
          else if (p.x > w) p.x -= w;
          if (p.y < 0) p.y += h;
          else if (p.y > h) p.y -= h;
        }
        const a = reduce
          ? p.alpha
          : p.alpha * (0.55 + 0.45 * Math.sin(time * p.twinkle + p.phase));
        ctx.fillStyle = `rgba(${p.color}, ${a.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    if (reduce) draw(performance.now());
    else raf = requestAnimationFrame(draw);

    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      build();
      if (reduce) draw(performance.now());
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
