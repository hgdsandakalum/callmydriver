"use client";
import React from "react";
import { Layout, ConfigProvider } from "antd";
import { THEME_CONFIG, NAVIGATION_CONSTANTS } from "@/constants";
import { useNavigation, useIsMobileDevice } from "@/hooks";
import { NavigationHeader } from "./NavigationHeader";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationActions } from "./NavigationActions";
import { NavigationDrawer } from "./NavigationDrawer";

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
  isUserLoggedIn = true,
}) => {
  const isMobile = useIsMobileDevice(NAVIGATION_CONSTANTS.BREAKPOINTS.MOBILE);
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
  } = useNavigation();

  const headerBackground = `rgba(239, 131, 84, ${
    isMobile
      ? "1"
      : scrollY > NAVIGATION_CONSTANTS.SCROLL_THRESHOLDS.HEADER_OPACITY
      ? "0.9"
      : "1"
  })`;

  return (
    <ConfigProvider theme={THEME_CONFIG}>
      <div className="fixed top-0 lg:top-[10px] left-0 right-0 z-50 flex justify-center">
        <Header
          className={`w-full lg:w-[75%] !px-0 ${className}`}
          style={{
            background: headerBackground,
            borderBottom: "none",
            borderRadius: isMobile ? "0px" : "8px",
            transition: "background-color 0.3s ease",
          }}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 h-full flex items-center justify-between">
            {/* Header Section */}
            <NavigationHeader
              logoIcon={logoIcon}
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
              showThemeToggle={showThemeToggle}
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
