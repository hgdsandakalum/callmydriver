import React from "react";
import { Menu } from "@/components/molecules/menu";
import { scrollToHash } from "@/utils/scroll.utills";

export interface MenuItem {
  href: string;
  label: string;
  key: string;
}

interface NavigationMenuProps {
  menuItems: MenuItem[];
  selectedKey: string | null;
  onMenuClick: (key: string) => void;
  onMobileMenuClose: () => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  menuItems,
  selectedKey,
  onMenuClick,
  onMobileMenuClose,
}) => {
  const menuItemsConfig = menuItems.map((item) => ({
    key: item.key,
    label: item.label,
    onClick: () => {
      onMenuClick(item.key);
      if (item.href.startsWith("#")) {
        scrollToHash(item.href);
      }
      onMobileMenuClose();
    },
  }));

  return (
    <div className="hidden lg:flex items-center flex-1 justify-center">
      <Menu
        mode="horizontal"
        selectedKeys={selectedKey ? [selectedKey] : []}
        items={menuItemsConfig}
        expandIcon={false}
        inlineCollapsed={false}
        width={"100%"}
        className="border-none !bg-transparent min-w-0 flex-1 justify-center !text-[15px]"
      />
    </div>
  );
};
