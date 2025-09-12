import React, { useMemo } from "react";
import AntButton from "antd/es/button";
import ConfigProvider from "antd/es/config-provider";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import classNames from "classnames";

export type ButtonType = "block" | "dashed" | "link" | "text" | "outlined";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryAccent"
  | "white"
  | "danger"
  | "custom";
export type ButtonSize = "small" | "middle" | "large" | "custom";
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
  style?: React.CSSProperties;
}

const getFontSize = (size: ButtonSize): string => {
  const sizes: Record<ButtonSize, string> = {
    small: "!text-[12px]",
    middle: "!text-[14px]",
    large: "!text-[18px]",
    custom: "text-[14px]",
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
    custom: "",
    small: "!h-[24px] md:!h-[30px] !font-semibold",
    middle: "!h-[32px] md:!h-[40px] !font-semibold",
    large: "!h-[40px] md:!h-[50px] !font-semibold",
  };

  const paddingClasses = {
    small: "!py-[6px] !px-[4px] md:!py-[8px] md:!px-[5px]",
    middle: "!py-[8px] !px-[8px] md:!py-[11px] md:!px-[10px]",
    large: "!py-[10px] !px-[10px] md:!py-[15px] md:!px-[15px]",
    custom: "",
  };

  // Disabled styles override all
  if (disabled) {
    return `!bg-base-30 !text-base-70 !border-base-30 !cursor-not-allowed ${
      customHeight ? "" : heightClasses[size]
    } ${paddingClasses[size]} ${fontSize}`;
  }

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `!bg-primary !text-foreground hover:!opacity-90 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    secondary: `!bg-secondary !text-foreground hover:!opacity-70 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    secondaryAccent: `!bg-foreground !text-secondary hover:!opacity-70 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    white: `!bg-foreground !text-primary hover:!bg-foreground/90 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    danger: `!bg-red-700 !text-foreground hover:!bg-red-600 ${
      customHeight ? "" : heightClasses[size]
    } ${fontSize}`,
    custom: `${customHeight ? "" : heightClasses[size]} ${fontSize}`,
  };

  const typeClasses: Record<ButtonType, string> = {
    block: variantClasses[variant],
    dashed: `!border-2 !border-dashed ${
      variant === "primary"
        ? "!border-primary !text-primary hover:!border-primary hover:!text-primary"
        : variant === "secondary"
        ? "!border-secondary !text-secondary hover:!border-secondary hover:!text-secondary"
        : variant === "white"
        ? "!border-foreground !text-foreground hover:!border-foreground hover:!text-foreground"
        : variant === "custom"
        ? ""
        : "!border-foreground !text-foreground hover:!border-foreground hover:!text-foreground"
    } ${customHeight ? "" : heightClasses[size]} ${fontSize}`,
    outlined: `!border-2 ${
      variant === "primary"
        ? "!border-primary !text-primary hover:!border-primary hover:!text-primary"
        : variant === "secondary"
        ? "!border-secondary !text-secondary hover:!border-secondary hover:!text-secondary"
        : variant === "white"
        ? "!border-foreground !text-foreground hover:!border-foreground hover:!text-foreground"
        : variant === "custom"
        ? ""
        : "!border-foreground !text-foreground hover:!border-foreground hover:!text-foreground"
    } ${customHeight ? "" : heightClasses[size]} ${fontSize}`,
    link: `${
      variant === "custom"
        ? ""
        : `!text-${
            variant === "primary"
              ? "primary"
              : variant === "secondary"
              ? "secondary"
              : variant === "white"
              ? "foreground"
              : "background"
          } hover:!text-${
            variant === "primary"
              ? "primary"
              : variant === "secondary"
              ? "secondary"
              : variant === "white"
              ? "foreground"
              : "background"
          }`
    } ${fontSize}`,
    text: `${
      variant === "custom"
        ? ""
        : `!text-${
            variant === "primary"
              ? "primary"
              : variant === "secondary"
              ? "secondary"
              : variant === "white"
              ? "foreground"
              : "background"
          } hover:!text-${
            variant === "primary"
              ? "primary"
              : variant === "secondary"
              ? "secondary"
              : variant === "white"
              ? "foreground"
              : "background"
          } hover:!bg-${
            variant === "primary"
              ? "primary"
              : variant === "secondary"
              ? "secondary"
              : variant === "white"
              ? "primary-dark"
              : "background"
          } hover:!bg-opacity-10`
    } ${fontSize}`,
  };

  return `${typeClasses[type]} ${
    variant === "custom" ? "" : paddingClasses[size]
  }`;
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
          "!font-roboto relative transition-all duration-300",
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
          size={size as SizeType}
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
            ...(props.style as React.CSSProperties | undefined),
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
