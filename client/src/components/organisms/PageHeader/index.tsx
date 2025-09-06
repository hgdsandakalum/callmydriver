"use client";

import React from "react";
import { HeroSection } from "../HeroSection";
import { NavigationItem } from "../HeroSection/_components/Navigation";
import type { SlideContent } from "../HeroSection";
import { cn } from "@/utils";

interface PageHeaderProps {
  navigationItems: NavigationItem[];
  heroProps?: {
    slides?: SlideContent[];
    backgroundImage?: string;
    title?: string;
    description?: string;
    showCards?: boolean;
    onSlideChange?: (currentSlide: number) => void;
  };
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  navigationItems,
  heroProps,
  className,
}) => {
  return (
    <div className={cn(`bg-fixed relative`, className)}>
      <HeroSection {...heroProps} showCards={false} />
    </div>
  );
};

export { PageHeader };
export type { PageHeaderProps };
