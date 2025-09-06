import React from "react";
import { Drawer } from "@/components/atoms/drawer";
import { Menu } from "@/components/molecules/menu";
import { scrollToHash } from "@/utils/scroll.utills";
import { NAVIGATION_CONSTANTS } from "@/constants";
import { MenuItem } from "./NavigationMenu";
import Link from "next/link";

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
      onClose={onClose}
      footer={false}
      open={open}
      placement="left"
      className="lg:hidden"
      rootClassName="navigation-drawer"
      closeIcon={false}
      height={NAVIGATION_CONSTANTS.HEADER.MOBILE_HEIGHT}
    >
      <div className="flex flex-col justify-between bg-transparent">
        <Menu
          mode="vertical"
          selectedKeys={selectedKey ? [selectedKey] : []}
          items={menuItemsConfig}
          className="border-none !bg-transparent"
          style={{ background: "transparent" }}
        />
        <div className="flex flex-col justify-between gap-2 color-white mt-6">
          <span className="text-sm">
            © 2025 CallMyDriver. All rights reserved.
          </span>
          <span className="text-sm flex gap-2">
            <Link href="/privacy-policy" className="!text-white">
              Privacy Policy
            </Link>
            <span className="text-sm">|</span>
            <Link href="/terms-of-service" className="!text-white">
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </Drawer>
  );
};
