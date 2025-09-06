import React from "react";
import { SteeringWheel, Menu as MenuIcon, X } from "../../../../public/icons";
import { NAVIGATION_CONSTANTS } from "@/constants";
import Image from "next/image";
interface NavigationHeaderProps {
  onLogoClick: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  onLogoClick,
  isMobile,
  mobileMenuOpen,
  onMobileMenuToggle,
}) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <div className="lg:hidden cursor-pointer hover:bg-primary-dark/10 transition-all duration-300 rounded-full p-2">
          <div className="relative w-6 h-6">
            <MenuIcon
              onClick={onMobileMenuToggle}
              className={`!text-2xl text-white absolute inset-0 transition-all duration-${
                NAVIGATION_CONSTANTS.ANIMATION.DURATION
              } ${
                mobileMenuOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              onClick={onMobileMenuToggle}
              className={`!text-2xl text-white absolute inset-0 transition-all duration-${
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
        <Image
          src="/images/call-my-driver-logo-white.png"
          alt="Logo"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};
