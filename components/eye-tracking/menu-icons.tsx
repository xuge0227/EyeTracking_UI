"use client";

// 极简风格的自定义图标

export function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function QuickSettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function MultiViewIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Main screen */}
      <rect x="2" y="3" width="12" height="9" rx="1" />
      <line x1="8" y1="12" x2="8" y2="14" />
      <line x1="5" y1="14" x2="11" y2="14" />
      {/* Connected screen */}
      <rect x="14" y="6" width="8" height="6" rx="1" />
      <line x1="18" y1="12" x2="18" y2="13.5" />
      <line x1="16" y1="13.5" x2="20" y2="13.5" />
      {/* Connection line */}
      <path d="M12 7h2" strokeDasharray="2 1" />
      {/* Plus indicator */}
      <circle cx="18" cy="18" r="4" />
      <line x1="18" y1="16" x2="18" y2="20" />
      <line x1="16" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function ControllerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 11h4M8 9v4" />
      <circle cx="17" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
      <rect x="2" y="6" width="20" height="12" rx="3" />
    </svg>
  );
}

export function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="4" y1="16" x2="20" y2="16" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ZoomIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

export function FingerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1v12M12 1c-1.5 0-3 1.5-3 3v6c0 1.5.5 3 3 3s3-1.5 3-3V4c0-1.5-1.5-3-3-3z" />
      <path d="M8 14c-2 0-4 2-4 4v2a4 4 0 004 4h8a4 4 0 004-4v-2c0-2-2-4-4-4" />
    </svg>
  );
}

export function ModeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Joystick base */}
      <ellipse cx="12" cy="20" rx="7" ry="2" />
      {/* Joystick stick */}
      <path d="M12 20V10" />
      {/* Joystick ball/handle */}
      <circle cx="12" cy="8" r="4" />
      {/* Direction indicators */}
      <path d="M6 8h2M16 8h2M12 2v2" />
    </svg>
  );
}

export function BrightnessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function LightModeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Toggle switch icon for mode selection */}
      <rect x="2" y="8" width="20" height="8" rx="4" />
      <circle cx="8" cy="12" r="2.5" />
      <circle cx="16" cy="12" r="2.5" />
      <path d="M8 12h8" strokeOpacity="0.3" />
    </svg>
  );
}

export function WhiteLightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Light bulb shape */}
      <path d="M9 21h6M12 3a6 6 0 016 6c0 2.22-1.21 4.16-3 5.19V17a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.81C7.21 13.16 6 11.22 6 9a6 6 0 016-6z" />
      <path d="M9 17h6" />
    </svg>
  );
}

export function FluorescentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18h6M10 22h4M12 2v1M4.22 4.22l.71.71M1 12h1M4.22 19.78l.71-.71M12 17a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
  );
}

export function ToggleOnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="7" width="22" height="10" rx="5" />
      <circle cx="17" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

export function ToggleOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="7" width="22" height="10" rx="5" />
      <circle cx="7" cy="12" r="3" />
    </svg>
  );
}

export function ColorModeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function AnnotationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

export function ScreenshotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

export function RecordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

export function AIIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a3 3 0 00-3 3v1H6a3 3 0 00-3 3v6a3 3 0 003 3h1v1a3 3 0 003 3h4a3 3 0 003-3v-1h1a3 3 0 003-3V9a3 3 0 00-3-3h-3V5a3 3 0 00-3-3z" />
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="11" r="1" fill="currentColor" />
      <path d="M9 15h6" />
    </svg>
  );
}

export function LayoutTileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Grid layout icon */}
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function TileViewIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Side by side windows */}
      <rect x="2" y="4" width="9" height="16" rx="1" />
      <rect x="13" y="4" width="9" height="16" rx="1" />
      {/* Window title bars */}
      <line x1="2" y1="7" x2="11" y2="7" />
      <line x1="13" y1="7" x2="22" y2="7" />
    </svg>
  );
}

export function LayoutStackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="6" y="2" width="12" height="12" rx="2" />
      <rect x="8" y="0" width="8" height="8" rx="2" />
    </svg>
  );
}

export function View2DIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Simple flat rectangle representing 2D plane */}
      <rect x="3" y="6" width="18" height="12" rx="1" />
      {/* Horizontal lines to indicate flat surface */}
      <line x1="6" y1="10" x2="18" y2="10" strokeOpacity="0.5" />
      <line x1="6" y1="14" x2="18" y2="14" strokeOpacity="0.5" />
    </svg>
  );
}

export function View3DIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* 3D cube - isometric style */}
      <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" />
      <path d="M12 10v8" />
      <path d="M4 6l8 4 8-4" />
    </svg>
  );
}

export function ViewModeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Eye with depth indicator */}
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
      {/* Depth lines */}
      <path d="M12 5v-3M12 22v-3" strokeDasharray="2 2" />
    </svg>
  );
}

export function ClickIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 3v12l4-4 2.5 6.5L15 16l-2.5-6.5H18L6 3z" />
    </svg>
  );
}

export function ExitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}
