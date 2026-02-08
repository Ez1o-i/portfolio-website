import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  spotlight?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false, spotlight = true, ...props }: GlassCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative border border-white/10 bg-zinc-900/20 backdrop-blur-xl rounded-2xl overflow-hidden",
        hoverEffect && "hover:border-white/20 transition-colors duration-500",
        className
      )}
      {...props}
    >
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};
