"use client";

import React from "react";
import { Layout, ConfigProvider, ThemeConfig } from "antd";
import { Menu, MenuProps } from "@/components/molecules/menu";
import { MenuSkeleton } from "@/components/atoms/skeleton";

interface BaseSiderProps {
  width?: number | string;
  className?: string;
  theme?: "light" | "dark";
  header?: React.ReactNode;
  footer?: React.ReactNode;
  paddingTop?: boolean;
  style?: React.CSSProperties;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  isLoading?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

interface MenuSiderProps extends BaseSiderProps {
  menuProps: MenuProps & { items: NonNullable<MenuProps["items"]> };
  body?: never;
}

interface BodySiderProps extends BaseSiderProps {
  body: React.ReactNode;
  menuProps?: never;
}

type SiderProps = MenuSiderProps | BodySiderProps;

const { Sider: AntSider } = Layout;

const siderTheme: ThemeConfig = {
  token: {
    colorPrimary: "var(--color-foreground)",
    colorBgContainer: "var(--color-background)",
  },
  components: {
    Menu: {
      itemColor: "var(--color-foreground)",
      itemSelectedColor: "var(--color-background)",
      fontSize: 14,
      fontWeightStrong: 700,
      itemHeight: 40,
      padding: 16,
      paddingContentVertical: 40,
      itemMarginInline: 0,
      itemMarginBlock: 2,
      iconMarginInlineEnd: 9,
      activeBarBorderWidth: 0,
    },
  },
};

const baseSiderStyles: React.CSSProperties = {
  height: "100vh",
};

export const Sider: React.FC<SiderProps> = ({
  width = 375,
  theme = "light",
  menuProps,
  collapsible = false,
  defaultCollapsed = false,
  onCollapse,
  isLoading,
  ...props
}) => {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  const handleCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
    onCollapse?.(collapsed);
  };

  const siderStyle = {
    ...baseSiderStyles,
    ...props.style,
  };

  return (
    <ConfigProvider theme={siderTheme}>
      <Layout>
        <AntSider
          width={width}
          theme={theme}
          style={siderStyle}
          collapsible={collapsible}
          collapsed={collapsed}
          onCollapse={handleCollapse}
          className={props.className}
          {...props}
        >
          <div className="flex flex-col h-full px-5">
            {props.header && (
              <div className="flex-shrink-0">{props.header}</div>
            )}
            <div className="flex-grow overflow-y-auto">
              {isLoading ? (
                <MenuSkeleton />
              ) : menuProps?.items ? (
                <Menu className="h-full" theme={theme} {...menuProps} />
              ) : props.body ? (
                props.body
              ) : null}
            </div>
            {props.footer && (
              <div className="flex-shrink-0 pb-5 w-full flex items-center justify-center">
                {props.footer}
              </div>
            )}
          </div>
        </AntSider>
      </Layout>
    </ConfigProvider>
  );
};
