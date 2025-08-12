import React from "react";
import AntTooltip from "antd/es/tooltip";
import { ConfigProvider } from "antd";

type TooltipStyles = Partial<
  Record<"root" | "arrow" | "content" | "popup" | "title", React.CSSProperties>
>;

interface TooltipProps {
  title: string;
  color?: string;
  arrow?: boolean;
  defaultOpen?: boolean;
  fresh?: boolean;
  className?: string;
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  trigger?: "hover" | "click";
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  styles?: TooltipStyles;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  trigger = "hover",
  placement = "bottom",
  arrow = true,
  styles,
  ...props
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgSpotlight: "var(--foreground)",
          colorText: "var(--background)",
          borderRadius: 2,
        },
      }}
    >
      <AntTooltip
        title={title}
        trigger={trigger}
        placement={placement}
        arrow={arrow}
        classNames={{ root: "custom-tooltip" }}
        className={`${props.className}`}
        styles={styles}
        {...props}
      >
        {props.children}
      </AntTooltip>
    </ConfigProvider>
  );
};
