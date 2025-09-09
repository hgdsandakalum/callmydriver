"use client";
import React, { useEffect, useState } from "react";
import { Layout, ConfigProvider } from "antd";
import { THEME_CONFIG, NAVIGATION_CONSTANTS } from "@/constants";
import { useNavigation, useIsMobileDevice } from "@/hooks";
import { NavigationHeader } from "./NavigationHeader";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationActions } from "./NavigationActions";
import { NavigationDrawer } from "./NavigationDrawer";
import { cn } from "@/utils";
import { motion } from "framer-motion";

const { Header } = Layout;

interface NavigationProps {
  className?: string;
  logoIcon?: React.ReactNode;
  showThemeToggle?: boolean;
  showNotifications?: boolean;
  showUser?: boolean;
  isUserLoggedIn?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  className = "",
  logoIcon,
  showThemeToggle = true,
  showNotifications = false,
  showUser = true,
  isUserLoggedIn = false,
}) => {
  const isMobile = useIsMobileDevice(NAVIGATION_CONSTANTS.BREAKPOINTS.MOBILE);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isAddressBarVisible, setIsAddressBarVisible] = useState(false);

  const {
    scrollY,
    mobileMenuOpen,
    menuItems,
    isDarkMode,
    selectedKey,
    handleLogoClick,
    handleMobileMenuToggle,
    handleMobileMenuClose,
    handleThemeToggle,
    handleLoginNavigation,
    handleNotificationClick,
    handleLogout,
    handleNeedDriverClick,
    handleMenuClick,
    isOnNeedDriverButtonVisible,
  } = useNavigation();

  useEffect(() => {
    // Function to handle viewport height changes
    const updateViewportHeight = () => {
      const vh = window.innerHeight;
      setViewportHeight(vh);

      // Detect if address bar is showing (viewport got smaller)
      // You can adjust this threshold based on your needs
      const threshold = 100;
      if (window.visualViewport) {
        const diff = window.screen.height - window.visualViewport.height;
        setIsAddressBarVisible(diff > threshold);
      }
    };

    // Initial set
    updateViewportHeight();

    // Listen to viewport changes
    window.addEventListener("resize", updateViewportHeight);
    window.addEventListener("scroll", updateViewportHeight);

    // Visual Viewport API for better mobile support
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateViewportHeight);
      window.visualViewport.addEventListener("scroll", updateViewportHeight);
    }

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
      window.removeEventListener("scroll", updateViewportHeight);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          "resize",
          updateViewportHeight
        );
        window.visualViewport.removeEventListener(
          "scroll",
          updateViewportHeight
        );
      }
    };
  }, []);

  // Calculate dynamic top position for mobile
  const getTopPosition = () => {
    if (!isMobile) return "0";

    // When address bar is visible, compensate with safe area
    if (isAddressBarVisible && window.visualViewport) {
      const offset = window.visualViewport.offsetTop || 0;
      return `${Math.max(0, offset)}px`;
    }

    return "0";
  };

  // Use CSS environment variables for safe areas
  const safeAreaStyles = isMobile
    ? {
        top: getTopPosition(),
        paddingTop: "env(safe-area-inset-top, 0)",
      }
    : {};

  return (
    <ConfigProvider theme={THEME_CONFIG}>
      <div
        className={cn(
          "fixed z-50 w-full px-2 sm:px-3 md:px-4 mx-auto transition-[top] duration-400 ease-in-out",
          scrollY > NAVIGATION_CONSTANTS.SCROLL_THRESHOLDS.HEADER_OPACITY
            ? "top-[10px]"
            : "top-[16px] md:top-[20px] lg:top-[24px]",
          className
        )}
      >
        <Header
          className={cn(
            `w-full max-w-screen-xl mx-auto !px-0 relative overflow-hidden backdrop-blur-md border border-primary border-b-0 rounded-full transition-[background-color] duration-400 ease-in-out`,
            className,
            scrollY > NAVIGATION_CONSTANTS.SCROLL_THRESHOLDS.HEADER_OPACITY
              ? "!bg-primary"
              : `!bg-transparent`
          )}
        >
          <div className="relative z-10 px-1 sm:px-3 lg:px-8 h-full flex items-center justify-between">
            {/* Header Section */}
            <NavigationHeader
              isScrolled={
                scrollY > NAVIGATION_CONSTANTS.SCROLL_THRESHOLDS.HEADER_OPACITY
              }
              onLogoClick={handleLogoClick}
              isMobile={isMobile}
              mobileMenuOpen={mobileMenuOpen}
              onMobileMenuToggle={handleMobileMenuToggle}
            />
            {/* Navigation Menu */}
            <NavigationMenu
              menuItems={menuItems}
              selectedKey={selectedKey}
              onMenuClick={handleMenuClick}
              onMobileMenuClose={handleMobileMenuClose}
            />
            {/* Actions Section */}
            <NavigationActions
              showThemeToggle={false}
              showNotifications={showNotifications}
              showUser={showUser}
              isUserLoggedIn={isUserLoggedIn}
              isMobile={isMobile}
              isDarkMode={isDarkMode}
              onThemeToggle={handleThemeToggle}
              onNotificationClick={handleNotificationClick}
              onLoginClick={handleLoginNavigation}
              onLogoutClick={handleLogout}
              onNeedDriverClick={handleNeedDriverClick}
              onNeedDriverButtonVisible={false}
            />
          </div>
        </Header>
      </div>
      {/* Mobile Navigation Drawer */}
      <NavigationDrawer
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        menuItems={menuItems}
        selectedKey={selectedKey}
        onMenuClick={handleMenuClick}
      />
    </ConfigProvider>
  );
};
