import React from "react";
import AntDropdown from "antd/es/dropdown";
import { ConfigProvider } from "antd";
import type { MenuProps } from "antd";

export interface DropdownProps {
  children: React.ReactNode;
  menu: MenuProps;
  trigger?: ("click" | "hover" | "contextMenu")[];
  placement?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight"
    | "top"
    | "bottom";
  disabled?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  overlayClassName?: string;
  overlayStyle?: React.CSSProperties;
  arrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  destroyPopupOnHide?: boolean;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  autoAdjustOverflow?: boolean;
  autoFocus?: boolean;
  onMenuClick?: (info: {
    key: string;
    keyPath: string[];
    item: any;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
  }) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  menu,
  trigger = ["hover"],
  placement = "bottomLeft",
  disabled = false,
  open,
  onOpenChange,
  overlayClassName = "",
  overlayStyle,
  arrow = false,
  className = "",
  style,
  destroyPopupOnHide = false,
  getPopupContainer,
  autoAdjustOverflow = true,
  autoFocus = false,
  onMenuClick,
}) => {
  const enhancedMenu: MenuProps = {
    ...menu,
    onClick: onMenuClick || menu.onClick,
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--primary)",
          borderRadius: 4,
        },
        components: {
          Dropdown: {
            borderRadiusLG: 4,
            controlItemBgHover: "var(--color-primary)",
            controlItemBgActive: "var(--color-primary-dark)",
            colorBgElevated: "var(--color-white)",
            colorText: "var(--color-dark-blue)",
            colorTextSecondary: "var(--color-dark-blue)",
            colorSplit: "var(--color-dark-blue)",
            boxShadowSecondary:
              "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
          },
        },
      }}
    >
      <AntDropdown
        menu={enhancedMenu}
        trigger={trigger}
        placement={placement}
        disabled={disabled}
        open={open}
        onOpenChange={onOpenChange}
        overlayClassName={`custom-dropdown ${overlayClassName}`}
        overlayStyle={overlayStyle}
        arrow={arrow}
        className={className}
        destroyPopupOnHide={destroyPopupOnHide}
        getPopupContainer={getPopupContainer}
        autoAdjustOverflow={autoAdjustOverflow}
        autoFocus={autoFocus}
      >
        <div style={style}>{children}</div>
      </AntDropdown>
    </ConfigProvider>
  );
};

Dropdown.displayName = "Dropdown";
