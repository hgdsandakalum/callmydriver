import React from "react";
import { Drawer } from "@/components/atoms/drawer";
import { Menu } from "@/components/molecules/menu";
import { scrollToHash } from "@/utils/scroll.utills";
import { NAVIGATION_CONSTANTS } from "@/constants";
import { MenuItem } from "./NavigationMenu";

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  selectedKey: string | null;
  onMenuClick: (key: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  open,
  onClose,
  menuItems,
  selectedKey,
  onMenuClick,
}) => {
  const menuItemsConfig = menuItems.map((item) => ({
    key: item.key,
    label: item.label,
    onClick: () => {
      onMenuClick(item.key);
      if (item.href.startsWith("#")) {
        scrollToHash(item.href);
      }
      onClose();
    },
  }));

  return (
    <Drawer
      title={false}
      placement="top"
      onClose={onClose}
      footer={false}
      open={open}
      className="lg:hidden"
      rootClassName="navigation-drawer"
      closeIcon={false}
      height={NAVIGATION_CONSTANTS.HEADER.MOBILE_HEIGHT}
    >
      <div className="flex flex-col h-[calc(100%-64px)] justify-between">
        <Menu
          mode="vertical"
          selectedKeys={selectedKey ? [selectedKey] : []}
          items={menuItemsConfig}
          className="border-none !bg-transparent"
          style={{ background: "transparent" }}
        />
        <div className="flex justify-between items-center color-light-gray">
          © 2024 Call-My-Ride. All rights reserved. | Privacy Policy | Terms of
          Service
        </div>
      </div>
    </Drawer>
  );
};
