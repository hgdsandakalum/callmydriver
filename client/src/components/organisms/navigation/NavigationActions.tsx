import React from "react";
import { Button } from "@/components/atoms/button";
import { BellOutline, SteeringWheel } from "../../../../public/icons";
import { ThemeToggle } from "./ThemeToggle";
import { UserMenu } from "./UserMenu";

interface NavigationActionsProps {
  showThemeToggle: boolean;
  showNotifications: boolean;
  showUser: boolean;
  isUserLoggedIn: boolean;
  isMobile: boolean;
  isDarkMode: boolean;
  onThemeToggle: () => void;
  onNotificationClick: () => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  onNeedDriverClick: () => void;
}

export const NavigationActions: React.FC<NavigationActionsProps> = ({
  showThemeToggle,
  showNotifications,
  showUser,
  isUserLoggedIn,
  isMobile,
  isDarkMode,
  onThemeToggle,
  onNotificationClick,
  onLoginClick,
  onLogoutClick,
  onNeedDriverClick,
}) => {
  return (
    <div className="flex items-center gap-1 lg:gap-4">
      {/* Theme Toggle */}
      {showThemeToggle && (
        <ThemeToggle
          isDarkMode={isDarkMode}
          onToggle={onThemeToggle}
          isMobile={isMobile}
        />
      )}

      {/* Notifications */}
      {showNotifications && (
        <Button
          variant="white"
          type="text"
          shape="circle"
          onClick={onNotificationClick}
          icon={<BellOutline className="text-lg" />}
        />
      )}

      {/* User Menu */}
      {showUser && (
        <UserMenu
          isUserLoggedIn={isUserLoggedIn}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
        />
      )}

      {/* Need a Driver Button */}
      <Button
        variant="white"
        label="Need a Driver?"
        icon={<SteeringWheel className="text-lg" />}
        onClick={onNeedDriverClick}
        className="!font-semibold"
      />
    </div>
  );
};
