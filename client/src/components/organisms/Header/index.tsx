"use client";

import React from "react";
import { HeroSection } from "../HeroSection";
import type { SlideContent } from "../HeroSection";
import { cn } from "@/utils";

interface HeaderProps {
  heroProps?: {
    slides?: SlideContent[];
    backgroundImage?: string;
    showCards?: boolean;
    onSlideChange?: (currentSlide: number) => void;
  };
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ heroProps, className }) => {
  return (
    <div className={cn("bg-fixed relative", className)}>
      <HeroSection {...heroProps} />
    </div>
  );
};

export { Header };
export type { HeaderProps };
