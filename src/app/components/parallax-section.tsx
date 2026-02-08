import React, { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  speed?: number;
}

export const ParallaxSection = ({
  children,
  className = "",
  id,
  speed = 0.5,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div ref={ref} id={id} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
};

interface ScrollGlowProps {
  className?: string;
  color?: string;
}

export const ScrollGlow = ({ className = "", color = "rgba(100, 100, 255, 0.15)" }: ScrollGlowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      style={{
        opacity,
        scale,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(80px)",
      }}
    />
  );
};
