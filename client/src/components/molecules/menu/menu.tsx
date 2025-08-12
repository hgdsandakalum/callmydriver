"use client";
import React, { CSSProperties, useState } from "react";
import AntMenu from "antd/es/menu";
import ConfigProvider from "antd/es/config-provider";
import type { MenuProps as AntMenuProps, SubMenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

type MenuItem = Required<AntMenuProps>["items"][number];

export interface MenuProps {
  items: MenuItem[];
  defaultSelectedKeys?: string[];
  selectedKeys?: string[];
  defaultOpenKeys?: string[];
  mode?: "vertical" | "horizontal" | "inline";
  width?: number | string;
  collapsed?: boolean;
  collapsedWidth?: number;
  openCurrentSubmenuOnly?: boolean;
  triggerSubMenuAction?: "click" | "hover";
  theme?: "light" | "dark";
  className?: string;
  expandIcon?:
    | React.ReactNode
    | ((props: SubMenuProps & { isOpen: boolean }) => React.ReactNode);
  onClick?: AntMenuProps["onClick"];
  style?: CSSProperties;
  inlineCollapsed?: boolean;
  openKeys?: string[];
  onOpenChange?: AntMenuProps["onOpenChange"];
}

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}
const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2?.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

export const Menu: React.FC<MenuProps> = ({
  items,
  mode = "inline",
  expandIcon,
  ...props
}) => {
  const levelKeys = getLevelKeys(items as LevelKeysProps[]);
  const [collapsed] = useState(props.collapsed || false);
  const [stateOpenKeys, setStateOpenKeys] = useState([] as string[]);
  let currentOpenKey: string | undefined = "";

  const onOpenChange: AntMenuProps["onOpenChange"] = (openKeys) => {
    if (!props.openCurrentSubmenuOnly) {
      setStateOpenKeys(openKeys);
      return;
    }
    currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey ?? ""]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey ?? ""])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const expandIconDown = (
    props: SubMenuProps & { eventKey?: React.Key; isOpen?: boolean }
  ) => {
    const isOpen =
      props.isOpen ?? stateOpenKeys?.includes((props.eventKey as string) || "");
    return (
      <DownOutlined style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }} />
    );
  };

  return (
    <div
      style={{
        width: props.width,
      }}
      className=""
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "var(--color-primary)",
            colorBgContainer: "var(--color-primary)",
            colorText: "white",
            colorBgTextHover: "rgba(255, 255, 255, 0.8)",
            borderRadius: 0,
          },
          components: {
            Menu: {
              itemHeight: 64,
              itemPaddingInline: 16,
              itemMarginInline: 0,
              itemSelectedBg: "transparent",
              itemHoverBg: "rgba(255, 255, 255, 0.1)",
              itemActiveBg: "transparent",
              horizontalItemSelectedBg: "transparent",
              horizontalItemSelectedColor: "white",
              horizontalItemHoverBg: "rgba(255, 255, 255, 0.1)",
              horizontalItemHoverColor: "white",
              itemBorderRadius: 0,
              itemSelectedColor: "white",
              itemColor: "white",
              itemHoverColor: "white",
              activeBarBorderWidth: 0,
              activeBarWidth: 0,
              activeBarHeight: 0,
            },
          },
        }}
      >
        <AntMenu
          mode={mode}
          inlineCollapsed={collapsed}
          items={items}
          selectedKeys={props.selectedKeys}
          onOpenChange={onOpenChange}
          expandIcon={(subMenuProps) => {
            const isOpen = stateOpenKeys.includes(currentOpenKey ?? "");
            return expandIcon
              ? typeof expandIcon === "function"
                ? expandIcon({ ...subMenuProps, isOpen })
                : expandIcon
              : expandIconDown({ ...subMenuProps, isOpen });
          }}
          {...props}
        />
      </ConfigProvider>
    </div>
  );
};
