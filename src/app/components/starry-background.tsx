import React, { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useSpring } from "motion/react";

interface Star {
  x: number;
  y: number;
  originalY: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  parallaxSpeed: number;
}

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const scrollYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  const initStars = useCallback(() => {
    const stars: Star[] = [];

    // Far stars
    for (let i = 0; i < 80; i++) {
      const y = Math.random();
      stars.push({
        x: Math.random(),
        y,
        originalY: y,
        size: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        parallaxSpeed: 0.02,
      });
    }

    // Mid stars
    for (let i = 0; i < 50; i++) {
      const y = Math.random();
      stars.push({
        x: Math.random(),
        y,
        originalY: y,
        size: Math.random() * 1.5 + 1,
        opacity: Math.random() * 0.6 + 0.4,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        parallaxSpeed: 0.05,
      });
    }

    // Near stars
    for (let i = 0; i < 25; i++) {
      const y = Math.random();
      stars.push({
        x: Math.random(),
        y,
        originalY: y,
        size: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.7 + 0.5,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        parallaxSpeed: 0.1,
      });
    }

    starsRef.current = stars;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    const gradient = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, canvas.width
    );
    gradient.addColorStop(0, "#0a0a0f");
    gradient.addColorStop(0.5, "#050508");
    gradient.addColorStop(1, "#020203");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const time = Date.now() * 0.001;

    starsRef.current.forEach((star) => {
      const parallaxOffset = (scrollYRef.current * star.parallaxSpeed) / canvas.height;
      let starY = (star.originalY - parallaxOffset) % 1;
      if (starY < 0) starY += 1;
      star.y = starY;

      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
      const opacity = star.opacity * (0.7 + twinkle * 0.3);
      const x = star.x * canvas.width;
      const y = star.y * canvas.height;

      ctx.beginPath();
      ctx.arc(x, y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();

      if (star.size > 1.2) {
        ctx.beginPath();
        ctx.arc(x, y, star.size * 2.5, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(x, y, 0, x, y, star.size * 2.5);
        glow.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.4})`);
        glow.addColorStop(0.5, `rgba(200, 220, 255, ${opacity * 0.2})`);
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glow;
        ctx.fill();
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    const unsubscribe = smoothScrollY.on("change", (latest) => {
      scrollYRef.current = latest;
    });
    return () => unsubscribe();
  }, [smoothScrollY]);

  useEffect(() => {
    handleResize();
    initStars();
    window.addEventListener("resize", handleResize);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleResize, initStars, animate]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#020203]" />
      <canvas ref={canvasRef} className="absolute inset-0" style={{ mixBlendMode: "screen" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(100,100,255,0.3) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(150,100,200,0.3) 0%, transparent 70%)", filter: "blur(50px)" }}
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(100,200,255,0.3) 0%, transparent 70%)", filter: "blur(40px)" }}
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
