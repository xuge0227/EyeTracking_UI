"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface OptionButtonProps {
  icon?: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function OptionButton({
  icon,
  label,
  isActive = false,
  onClick,
  disabled = false,
}: OptionButtonProps) {
  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      disabled={disabled}
      className={`
        option-button px-12 py-8 flex items-center gap-6 min-w-[220px]
        ${isActive ? "selected" : ""}
        ${disabled ? "opacity-40 cursor-not-allowed" : ""}
      `}
      whileHover={!disabled && !isActive ? {
        scale: 1.04,
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        pointerEvents: "auto",
        position: "relative",
        zIndex: 50,
      }}
    >
      {icon && (
        <div className={`option-icon w-10 h-10 flex-shrink-0 ${isActive ? "text-background" : "text-foreground/70"}`}>
          {icon}
        </div>
      )}
      <span className={`option-label text-xl tracking-wide font-medium ${isActive ? "text-background" : "text-foreground/80"}`}>
        {label}
      </span>
    </motion.button>
  );
}
