"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { ReactNode } from "react";

interface SliderControlProps {
  icon?: ReactNode;
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  unit?: string;
}

export function SliderControl({
  icon,
  label,
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
    <div className="option-button px-8 py-6 flex items-center gap-6 min-w-[450px]">
      {icon && (
        <div className="w-8 h-8 text-foreground/70 flex-shrink-0">
          {icon}
        </div>
      )}
      {label && (
        <span className="text-lg text-foreground/80 tracking-wide min-w-[120px] font-medium">
          {label}
        </span>
      )}
      
      <div className="flex items-center gap-5 flex-1">
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            decrease();
          }}
          className="option-button w-16 h-16 flex items-center justify-center"
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          style={{ pointerEvents: "auto" }}
        >
          <Minus className="w-6 h-6 text-foreground/70" />
        </motion.button>
        
        <div className="flex-1 relative">
          <div className="h-2 bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-white/90"
              style={{ width: `${((value - min) / (max - min)) * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <div className="text-center mt-3 text-lg text-foreground/90 font-medium">
            {value}{unit}
          </div>
        </div>
        
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            increase();
          }}
          className="option-button w-16 h-16 flex items-center justify-center"
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          style={{ pointerEvents: "auto" }}
        >
          <Plus className="w-6 h-6 text-foreground/70" />
        </motion.button>
      </div>
    </div>
  );
}
