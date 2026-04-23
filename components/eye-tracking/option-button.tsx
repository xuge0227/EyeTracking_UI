"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useRef } from "react";

interface OptionButtonProps {
  icon?: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  compact?: boolean;
}

export function OptionButton({
  icon,
  label,
  isActive = false,
  onClick,
  disabled = false,
  compact = false,
}: OptionButtonProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    
    // Clear any existing timeout
    if (feedbackTimeoutRef.current) {
      clearTimeout(feedbackTimeoutRef.current);
    }
    
    // Trigger feedback animation
    setShowFeedback(true);
    feedbackTimeoutRef.current = setTimeout(() => {
      setShowFeedback(false);
    }, 400);
    
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      className={`
        option-button flex items-center justify-center gap-6 min-w-[240px]
        ${compact ? "px-14 py-6" : "px-14 py-10"}
        ${isActive ? "selected" : ""}
        ${disabled ? "disabled" : ""}
        ${showFeedback ? "button-feedback" : ""}
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
        <div className={`option-icon w-12 h-12 flex-shrink-0 ${isActive ? "text-background" : disabled ? "text-foreground/30" : "text-foreground/70"}`}>
          {icon}
        </div>
      )}
      <span className={`option-label text-2xl tracking-wide font-medium ${isActive ? "text-background" : disabled ? "text-foreground/30" : "text-foreground/80"}`}>
        {label}
      </span>
    </motion.button>
  );
}
