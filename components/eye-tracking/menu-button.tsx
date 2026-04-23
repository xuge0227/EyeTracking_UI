"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useRef } from "react";

interface MenuButtonProps {
  icon: ReactNode;
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  showLabel?: boolean;
  variant?: "nav" | "nav-sub" | "action";
}

export function MenuButton({
  icon,
  label,
  isActive = false,
  onClick,
  size = "lg",
  showLabel = false,
  variant = "nav",
}: MenuButtonProps) {
  const [showFeedback, setShowFeedback] = useState(false);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
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
  // Larger sizes for eye tracking
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };

  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-18 h-18",
  };

  const labelSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const buttonClassMap = {
    nav: "nav-menu-button",
    "nav-sub": "nav-submenu-button",
    action: "menu-action-button",
  };

  const buttonClass = buttonClassMap[variant];

  return (
    <motion.button
      onClick={handleClick}
      className={`
        ${buttonClass} flex flex-col items-center justify-center gap-2
        ${sizeClasses[size]}
        ${isActive ? "active" : ""}
        ${showFeedback ? "button-feedback" : ""}
      `}
      whileHover={!isActive ? {
        scale: 1.08,
      } : {}}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        pointerEvents: "auto",
        position: "relative",
        zIndex: 100,
      }}
    >
      <div className={`${iconSizes[size]} ${isActive ? "text-background" : "text-foreground/90"}`}>
        {icon}
      </div>
      {showLabel && label && (
        <span className={`${labelSizes[size]} ${isActive ? "text-background" : "text-foreground/70"} tracking-wider`}>
          {label}
        </span>
      )}
    </motion.button>
  );
}
