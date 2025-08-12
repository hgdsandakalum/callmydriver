import React from "react";
import { Button } from "@/components/atoms/button";
import { Switch } from "@/components/atoms/switch";
import { Moon, Sun } from "../../../../public/icons";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
  isMobile: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDarkMode,
  onToggle,
  isMobile,
}) => {
  if (!isMobile) {
    return (
      <Switch
        checked={isDarkMode}
        onChange={onToggle}
        checkedChildren={<Moon className="text-base" />}
        unCheckedChildren={<Sun className="text-base" />}
      />
    );
  }

  return (
    <Button
      variant="custom"
      size="middle"
      shape="circle"
      type={isDarkMode ? "block" : "outlined"}
      icon={
        isDarkMode ? <Moon className="text-lg" /> : <Sun className="text-lg" />
      }
      onClick={onToggle}
      className={`!p-0 !min-w-[30px] ${
        isDarkMode
          ? "!bg-primary-dark color-white"
          : "!bg-primary color-white !border-white active:!border-white active:!text-white"
      }`}
      customHeight={30}
    />
  );
};
