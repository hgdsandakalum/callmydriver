import React from "react";
import { SteeringWheel, Menu as MenuIcon, X } from "../../../../public/icons";
import { NAVIGATION_CONSTANTS } from "@/constants";

interface NavigationHeaderProps {
  logoIcon?: React.ReactNode;
  onLogoClick: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  logoIcon,
  onLogoClick,
  isMobile,
  mobileMenuOpen,
  onMobileMenuToggle,
}) => {
  const defaultLogoIcon = <SteeringWheel className="h-8 w-8 text-white" />;

  return (
    <div className="flex items-center space-x-2">
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <div className="lg:hidden cursor-pointer hover:bg-primary-dark/10 transition-all duration-300 rounded-full p-2">
          <div className="relative w-6 h-6">
            <MenuIcon
              onClick={onMobileMenuToggle}
              className={`!text-2xl absolute inset-0 transition-all duration-${
                NAVIGATION_CONSTANTS.ANIMATION.DURATION
              } ${
                mobileMenuOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              onClick={onMobileMenuToggle}
              className={`!text-2xl absolute inset-0 transition-all duration-${
                NAVIGATION_CONSTANTS.ANIMATION.DURATION
              } ${
                mobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }`}
            />
          </div>
        </div>
      )}

      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={onLogoClick}
      >
        {logoIcon || defaultLogoIcon}
      </div>
    </div>
  );
};
