"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function GazeCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTimeRef.current;
      
      if (dt > 0) {
        const dx = e.clientX - lastPositionRef.current.x;
        const dy = e.clientY - lastPositionRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = distance / dt;
        
        setVelocity(prev => prev * 0.7 + speed * 0.3);
      }
      
      lastPositionRef.current = { x: e.clientX, y: e.clientY };
      lastTimeRef.current = now;
      
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Size based on velocity (30% variation)
  const baseSize = 80;
  const minScale = 0.7;
  const maxVelocity = 2;
  const normalizedVelocity = Math.min(velocity / maxVelocity, 1);
  const scale = 1 - normalizedVelocity * (1 - minScale);
  const currentSize = baseSize * scale;
  const offset = currentSize / 2;

  return (
    <motion.div
      className="pointer-events-none fixed z-50"
      animate={{
        x: position.x - offset,
        y: position.y - offset,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      {/* Outer glow only - minimal */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: currentSize,
          height: currentSize,
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main ring - glassmorphism, no inner glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: currentSize,
          height: currentSize,
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid rgba(255, 255, 255, 0.3)",
        }}
      />
    </motion.div>
  );
}
