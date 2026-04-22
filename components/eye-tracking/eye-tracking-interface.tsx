"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GazeCursor } from "./gaze-cursor";
import { MenuButton } from "./menu-button";
import { OptionButton } from "./option-button";
import { SliderControl } from "./slider-control";
import {
  SettingsIcon,
  QuickSettingsIcon,
  MultiViewIcon,
  ControllerIcon,
  EyeIcon,
  MenuIcon,
  CloseIcon,
  ZoomIcon,
  FingerIcon,
  ModeIcon,
  BrightnessIcon,
  LightModeIcon,
  FluorescentIcon,
  ToggleOnIcon,
  ColorModeIcon,
  AnnotationIcon,
  ScreenshotIcon,
  RecordIcon,
  AIIcon,
  LayoutTileIcon,
  LayoutStackIcon,
  View2DIcon,
  View3DIcon,
  ClickIcon,
} from "./menu-icons";

type MainMenu = "settings" | "quick" | "multiview" | null;
type SettingsSubmenu = "controller" | "visual" | null;

interface Settings {
  zoomRatio: "1.5:1" | "2:1" | "3:1";
  fingerClutch: boolean;
  controlMode: "light" | "standard" | "smooth";
  brightness: number;
  lightMode: "white" | "fluorescent";
  fluorescentFinger: boolean;
  fluorescentMode: "bw" | "color" | "mono";
  annotation: boolean;
  aiAssistant: boolean;
  quickClick: boolean;
  layoutMode: "tile" | "stack";
  viewMode: "2d" | "3d";
}

export function EyeTrackingInterface() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mainMenu, setMainMenu] = useState<MainMenu>(null);
  const [settingsSubmenu, setSettingsSubmenu] = useState<SettingsSubmenu>(null);
  
  const [settings, setSettings] = useState<Settings>({
    zoomRatio: "2:1",
    fingerClutch: false,
    controlMode: "standard",
    brightness: 70,
    lightMode: "white",
    fluorescentFinger: false,
    fluorescentMode: "bw",
    annotation: false,
    aiAssistant: false,
    quickClick: false,
    layoutMode: "tile",
    viewMode: "2d",
  });

  const openMenu = () => {
    setIsMenuOpen(true);
    setMainMenu("settings");
    setSettingsSubmenu("controller");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMainMenu(null);
    setSettingsSubmenu(null);
  };

  const selectMainMenu = (menu: MainMenu) => {
    setMainMenu(menu);
    if (menu === "settings") {
      setSettingsSubmenu("controller");
    } else {
      setSettingsSubmenu(null);
    }
  };

  const getCurrentPath = () => {
    if (!mainMenu) return "";
    const menuNames = {
      settings: "设置",
      quick: "常用设置",
      multiview: "多画面",
    };
    if (mainMenu === "settings" && settingsSubmenu) {
      const submenuNames = {
        controller: "手动控制器",
        visual: "视觉",
      };
      return `${menuNames[mainMenu]} / ${submenuNames[settingsSubmenu]}`;
    }
    return menuNames[mainMenu];
  };

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background cursor-none">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Custom gaze cursor */}
      <GazeCursor />

      {/* Main page - Empty with menu button */}
      <AnimatePresence>
        {!isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-12 right-12"
            style={{ zIndex: 200 }}
          >
            <MenuButton
              icon={<MenuIcon className="w-full h-full" />}
              onClick={openMenu}
              size="lg"
              variant="action"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu interface */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{ zIndex: 100 }}
          >
            {/* Right sidebar with navigation and close button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="sidebar-panel absolute right-0 top-0 bottom-0 w-56 flex flex-col items-center py-12"
              style={{ zIndex: 250 }}
            >
              {/* Close button at top */}
              <MenuButton
                icon={<CloseIcon className="w-full h-full stroke-[3]" />}
                onClick={closeMenu}
                size="lg"
                variant="action"
              />

              {/* Spacer */}
              <div className="flex-1" />

              {/* Navigation menu in center */}
              <div className="flex flex-col items-center gap-6">
                {/* Settings button */}
                <MenuButton
                  icon={<SettingsIcon className="w-full h-full" />}
                  isActive={mainMenu === "settings"}
                  onClick={() => selectMainMenu("settings")}
                  size="lg"
                  variant="nav"
                />
                
                {/* Settings submenu - appears below settings when selected */}
                <AnimatePresence>
                  {mainMenu === "settings" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <MenuButton
                        icon={<ControllerIcon className="w-full h-full" />}
                        isActive={settingsSubmenu === "controller"}
                        onClick={() => setSettingsSubmenu("controller")}
                        size="md"
                        variant="nav-sub"
                      />
                      <MenuButton
                        icon={<EyeIcon className="w-full h-full" />}
                        isActive={settingsSubmenu === "visual"}
                        onClick={() => setSettingsSubmenu("visual")}
                        size="md"
                        variant="nav-sub"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Quick settings button */}
                <MenuButton
                  icon={<QuickSettingsIcon className="w-full h-full" />}
                  isActive={mainMenu === "quick"}
                  onClick={() => selectMainMenu("quick")}
                  size="lg"
                  variant="nav"
                />
                
                {/* Multiview button */}
                <MenuButton
                  icon={<MultiViewIcon className="w-full h-full" />}
                  isActive={mainMenu === "multiview"}
                  onClick={() => selectMainMenu("multiview")}
                  size="lg"
                  variant="nav"
                />
              </div>

              {/* Spacer */}
              <div className="flex-1" />
            </motion.div>

            {/* Current path indicator - bottom left with vertical line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-12 left-12 path-indicator"
              style={{ zIndex: 50 }}
            >
              <span className="text-foreground/80 text-3xl font-bold tracking-wider">
                {getCurrentPath()}
              </span>
            </motion.div>

            {/* Center content area */}
            <div className="absolute inset-0 pr-56 flex items-center justify-center" style={{ zIndex: 150 }}>
              <AnimatePresence mode="wait">
                {/* Settings - Controller submenu */}
                {mainMenu === "settings" && settingsSubmenu === "controller" && (
                  <motion.div
                    key="controller"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-12"
                  >
                    {/* Zoom ratio */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <ZoomIcon className="w-8 h-8" />
                        <span>缩放比例</span>
                      </div>
                      <div className="flex gap-6">
                        {(["1.5:1", "2:1", "3:1"] as const).map((ratio) => (
                          <OptionButton
                            key={ratio}
                            label={ratio === "1.5:1" ? "快速 1.5:1" : ratio === "2:1" ? "正常 2:1" : "精细 3:1"}
                            isActive={settings.zoomRatio === ratio}
                            onClick={() => updateSetting("zoomRatio", ratio)}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Finger clutch */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <FingerIcon className="w-8 h-8" />
                        <span>指尖离合</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          label="开启"
                          isActive={settings.fingerClutch}
                          onClick={() => updateSetting("fingerClutch", true)}
                        />
                        <OptionButton
                          label="关闭"
                          isActive={!settings.fingerClutch}
                          onClick={() => updateSetting("fingerClutch", false)}
                        />
                      </div>
                    </div>

                    {/* Control mode */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <ModeIcon className="w-8 h-8" />
                        <span>操控模式</span>
                      </div>
                      <div className="flex gap-6">
                        {(["light", "standard", "smooth"] as const).map((mode) => (
                          <OptionButton
                            key={mode}
                            label={mode === "light" ? "轻盈" : mode === "standard" ? "标准" : "平稳"}
                            isActive={settings.controlMode === mode}
                            onClick={() => updateSetting("controlMode", mode)}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Settings - Visual submenu */}
                {mainMenu === "settings" && settingsSubmenu === "visual" && (
                  <motion.div
                    key="visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-12"
                  >
                    {/* Brightness slider */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <BrightnessIcon className="w-8 h-8" />
                        <span>立体显示器亮度</span>
                      </div>
                      <SliderControl
                        icon={<BrightnessIcon className="w-full h-full" />}
                        label=""
                        value={settings.brightness}
                        onChange={(v) => updateSetting("brightness", v)}
                      />
                    </div>

                    {/* Light mode */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <LightModeIcon className="w-8 h-8" />
                        <span>模式</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          icon={<LightModeIcon className="w-full h-full" />}
                          label="白光"
                          isActive={settings.lightMode === "white"}
                          onClick={() => updateSetting("lightMode", "white")}
                        />
                        <OptionButton
                          icon={<FluorescentIcon className="w-full h-full" />}
                          label="荧光"
                          isActive={settings.lightMode === "fluorescent"}
                          onClick={() => updateSetting("lightMode", "fluorescent")}
                        />
                      </div>
                    </div>

                    {/* Fluorescent finger switch */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <ToggleOnIcon className="w-8 h-8" />
                        <span>荧光指尖开关</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          label="开"
                          isActive={settings.fluorescentFinger}
                          onClick={() => updateSetting("fluorescentFinger", true)}
                        />
                        <OptionButton
                          label="关"
                          isActive={!settings.fluorescentFinger}
                          onClick={() => updateSetting("fluorescentFinger", false)}
                        />
                      </div>
                    </div>

                    {/* Fluorescent mode */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <ColorModeIcon className="w-8 h-8" />
                        <span>荧光模式</span>
                      </div>
                      <div className="flex gap-6">
                        {(["bw", "color", "mono"] as const).map((mode) => (
                          <OptionButton
                            key={mode}
                            label={mode === "bw" ? "黑白" : mode === "color" ? "彩色" : "单色"}
                            isActive={settings.fluorescentMode === mode}
                            onClick={() => updateSetting("fluorescentMode", mode)}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Quick settings menu */}
                {mainMenu === "quick" && (
                  <motion.div
                    key="quick"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-12"
                  >
                    {/* Annotation */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <AnnotationIcon className="w-8 h-8" />
                        <span>互动批注：右眼</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          icon={<AnnotationIcon className="w-full h-full" />}
                          label="开"
                          isActive={settings.annotation}
                          onClick={() => updateSetting("annotation", true)}
                        />
                        <OptionButton
                          label="关"
                          isActive={!settings.annotation}
                          onClick={() => updateSetting("annotation", false)}
                        />
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="flex gap-6">
                      <OptionButton
                        icon={<ScreenshotIcon className="w-full h-full" />}
                        label="截屏"
                        onClick={() => console.log("Screenshot")}
                      />
                    </div>

                    {/* Record */}
                    <div className="flex gap-6">
                      <OptionButton
                        icon={<RecordIcon className="w-full h-full" />}
                        label="录像"
                        onClick={() => console.log("Record")}
                      />
                    </div>

                    {/* AI assistant */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <AIIcon className="w-8 h-8" />
                        <span>AI语音助手</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          icon={<AIIcon className="w-full h-full" />}
                          label="开"
                          isActive={settings.aiAssistant}
                          onClick={() => updateSetting("aiAssistant", true)}
                        />
                        <OptionButton
                          label="关"
                          isActive={!settings.aiAssistant}
                          onClick={() => updateSetting("aiAssistant", false)}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Multiview menu */}
                {mainMenu === "multiview" && (
                  <motion.div
                    key="multiview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-12"
                  >
                    {/* Quick click */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <ClickIcon className="w-8 h-8" />
                        <span>多画面快速点击</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          icon={<ClickIcon className="w-full h-full" />}
                          label="开"
                          isActive={settings.quickClick}
                          onClick={() => updateSetting("quickClick", true)}
                        />
                        <OptionButton
                          label="关"
                          isActive={!settings.quickClick}
                          onClick={() => updateSetting("quickClick", false)}
                        />
                      </div>
                    </div>

                    {/* Layout mode */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <LayoutTileIcon className="w-8 h-8" />
                        <span>布局模式</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          icon={<LayoutTileIcon className="w-full h-full" />}
                          label="平铺"
                          isActive={settings.layoutMode === "tile"}
                          onClick={() => updateSetting("layoutMode", "tile")}
                        />
                        <OptionButton
                          icon={<LayoutStackIcon className="w-full h-full" />}
                          label="叠加"
                          isActive={settings.layoutMode === "stack"}
                          onClick={() => updateSetting("layoutMode", "stack")}
                        />
                      </div>
                    </div>

                    {/* View mode */}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-4 text-foreground/60 text-xl tracking-wider mb-2">
                        <View3DIcon className="w-8 h-8" />
                        <span>视图模式</span>
                      </div>
                      <div className="flex gap-6">
                        <OptionButton
                          icon={<View2DIcon className="w-full h-full" />}
                          label="2D"
                          isActive={settings.viewMode === "2d"}
                          onClick={() => updateSetting("viewMode", "2d")}
                        />
                        <OptionButton
                          icon={<View3DIcon className="w-full h-full" />}
                          label="3D"
                          isActive={settings.viewMode === "3d"}
                          onClick={() => updateSetting("viewMode", "3d")}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative corner elements */}
      <div className="absolute top-6 left-6 w-20 h-20 border-l border-t border-white/10" />
      <div className="absolute top-6 right-6 w-20 h-20 border-r border-t border-white/10" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-l border-b border-white/10" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-r border-b border-white/10" />
    </div>
  );
}
