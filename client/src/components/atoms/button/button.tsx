import React, { useMemo } from "react";
import AntButton from "antd/es/button";
import ConfigProvider from "antd/es/config-provider";
import classNames from "classnames";

export type ButtonType = "block" | "dashed" | "link" | "text" | "outlined";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryAccent"
  | "danger";
export type ButtonSize = "small" | "middle" | "large";
export type ButtonShape = "default" | "circle" | "round";

export interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  className?: string;
  customClass?: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  href?: string;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  customHeight?: string | number;
}

const getFontSize = (size: ButtonSize): string => {
  const sizes: Record<ButtonSize, string> = {
    small: "!text-[12px]",
    middle: "!text-[14px]",
    large: "!text-[18px]",
  };
  return sizes[size];
};

const getButtonClasses = (
  type: ButtonType,
  variant: ButtonVariant,
  size: ButtonSize,
  disabled?: boolean,
  customHeight?: string | number
): string => {
  const fontSize = getFontSize(size);

  const heightClasses = {
    small: "!h-[30px]",
    middle: "!h-[40px]",
    large: "!h-[50px]",
  };

  const paddingClasses = {
    small: "!py-[8px] !px-[5px]",
    middle: "!py-[11px] !px-[10px]",
    large: "!py-[15px] !px-[15px]",
  };

  // Disabled styles override all
  if (disabled) {
    return `!bg-base-30 !text-base-70 !border-base-30 !cursor-not-allowed ${
      customHeight ? "" : heightClasses[size]
    } ${paddingClasses[size]} ${fontSize}`;
  }

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `!bg-foreground !text-background hover:!opacity-90 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    secondary: `!bg-base-10 !text-foreground hover:!opacity-70 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    secondaryAccent: `!bg-background !text-foreground hover:!opacity-70${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    danger: `!bg-red-700 !text-white hover:!bg-red-600 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
  };

  const typeClasses: Record<ButtonType, string> = {
    block: variantClasses[variant],
    dashed: `theme-border--${variant} theme-border-hover--${variant} theme-text--${variant} theme-text-hover--${variant} ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    outlined: `theme-border--${variant} theme-border-hover--${variant} theme-text--${variant} theme-text-hover--${variant} ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    link: `theme-text--${variant} theme-text-hover--${variant} ${fontSize}`,
    text: `theme-text--${variant} theme-text-hover--${variant} hover:!bg-transparent ${fontSize}`,
  };

  return `${typeClasses[type]} ${paddingClasses[size]}`;
};

export const Button = React.memo(
  ({
    type = "block",
    size = "middle",
    fullWidth = false,
    disabled = false,
    variant = "primary",
    htmlType = "button",
    customClass = "",
    ...props
  }: ButtonProps) => {
    const buttonClasses = useMemo(
      () =>
        classNames(
          getButtonClasses(type, variant, size, disabled, props.customHeight),
          "!font-sans relative",
          customClass,
          props.className
        ),
      [
        type,
        variant,
        size,
        customClass,
        props.className,
        disabled,
        props.customHeight,
      ]
    );

    const configTheme = useMemo(
      () => ({
        token: {
          fontWeightStrong: 700,
          borderRadius: 4,
          borderRadiusSM: 4,
          controlHeight: 40,
        },
        components: {
          Button: {
            contentFontSize: 14,
            contentFontSizeLG: 15,
            fontWeight: 700,
            contentFontSizeSM: 13,
            primaryShadow: "none",
            paddingInline: 8,
            paddingBlockSM: 10,
            paddingBlock: 11,
            paddingBlockLG: 13,
          },
        },
      }),
      []
    );

    const buttonType = useMemo(() => {
      const types: Record<
        ButtonType,
        "primary" | "dashed" | "link" | "text" | "default"
      > = {
        block: "primary",
        dashed: "dashed",
        link: "link",
        text: "text",
        outlined: "default",
      };
      return types[type];
    }, [type]);

    return (
      <ConfigProvider theme={configTheme}>
        <AntButton
          className={buttonClasses}
          type={buttonType}
          block={fullWidth}
          shape={props.shape}
          size={size}
          disabled={disabled}
          ghost={disabled}
          href={props.href}
          loading={props.loading}
          icon={props.icon}
          onClick={props.onClick}
          htmlType={htmlType}
          onKeyDown={props.onKeyPress}
          iconPosition={props.iconPosition}
          style={{
            height: props.customHeight,
            ...((props as any).style || {}),
          }}
        >
          {props.children || (
            <h3 className={!props.label ? "hidden" : ""}>{props.label}</h3>
          )}
        </AntButton>
      </ConfigProvider>
    );
  }
);

Button.displayName = "Button";
