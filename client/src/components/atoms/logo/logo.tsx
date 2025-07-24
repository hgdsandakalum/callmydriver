"use client";
import React from "react";
import Link from "next/link";
import { InsertChartIcon } from "../../../../public/icons/icons";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  iconSize = 48,
  textClassName = "text-[40px]",
}) => {
  const pathname = usePathname();
  const isAdminPath = pathname?.includes("admin");

  return (
    <Link href={ROUTES.TOP} className={`flex items-center ${className}`}>
      <InsertChartIcon size={iconSize} />
      <span className={`${textClassName} font-semibold`}>Gaku-AI</span>
      {isAdminPath && (
        <span className="text-xs text-base-70 ml-2">[ADMIN]</span>
      )}
    </Link>
  );
};
