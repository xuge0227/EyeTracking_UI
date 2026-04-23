"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface SliderControlProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  unit?: string;
}

export function SliderControl({
  value,
  min = 0,
  max = 100,
  step = 10,
  onChange,
  unit = "%",
}: SliderControlProps) {
  const decrease = () => {
    const newValue = Math.max(min, value - step);
    onChange(newValue);
  };

  const increase = () => {
    const newValue = Math.min(max, value + step);
    onChange(newValue);
  };

  return (
    <div className="flex items-center gap-12">
      {/* Minus button - maximum size */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          decrease();
        }}
        className="slider-button w-36 h-36 flex items-center justify-center"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255, 255, 255, 0.15)" }}
        whileTap={{ scale: 0.95 }}
        style={{ pointerEvents: "auto" }}
      >
        <Minus className="w-20 h-20 text-foreground/80" strokeWidth={2.5} />
      </motion.button>
      
      {/* Progress bar with value display */}
      <div className="flex-1 relative min-w-[300px]">
        <div className="h-3 bg-white/10 overflow-hidden rounded-sm">
          <motion.div
            className="h-full bg-white/90"
            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        <div className="text-center mt-4 text-2xl text-foreground/90 font-medium tracking-wide">
          {value}{unit}
        </div>
      </div>
      
      {/* Plus button - maximum size */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          increase();
        }}
        className="slider-button w-36 h-36 flex items-center justify-center"
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255, 255, 255, 0.15)" }}
        whileTap={{ scale: 0.95 }}
        style={{ pointerEvents: "auto" }}
      >
        <Plus className="w-20 h-20 text-foreground/80" strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}
