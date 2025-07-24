"use client";
import React, { useState } from "react";
import AntInput from "antd/es/input";
import ConfigProvider from "antd/es/config-provider";
import { SearchIcon } from "../../../../public/icons/icons";

const { TextArea } = AntInput;

type ModeTypes =
  | "search"
  | "text"
  | "none"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal";

export interface InputProps {
  id?: string;
  defaultValue?: string;
  size?: "xs" | "small" | "middle" | "large";
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  suffixLabel?: string;
  allowClear?: boolean;
  maxLength?: number;
  showCount?: boolean;
  value?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  descriptiveLabel?: string;
  className?: string;
  type?: string;
  errorMessage?: string;
  theme?: {
    token?: {
      [key: string]: string | number;
    };
  };
  inputMode?: ModeTypes;
  required?: boolean;
  autoSize?: boolean;
  variant?: "outlined" | "borderless" | "filled" | "underlined";
  rows?: number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPressEnter?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  autoComplete?: string;
  min?: number;
  max?: number;
}

const getInputClassName = (className?: string, size?: string): string => {
  const baseClasses = className || "";
  const sizeClasses =
    size === "small"
      ? "!h-[50px]"
      : size === "xs"
      ? "!h-[38px] !text-[13px]"
      : "";

  return `${baseClasses} ${sizeClasses}`.trim();
};

export const Input: React.FC<InputProps> = (props) => {
  const { size = "small" } = props;

  const renderInput = () => {
    const computedClassName = getInputClassName(props.className, size);

    if (props.type === "textarea") {
      return (
        <TextArea
          className={computedClassName}
          size={size as "small" | "middle" | "large"}
          defaultValue={props.defaultValue}
          disabled={props.disabled}
          allowClear={props.allowClear}
          id={props.id}
          maxLength={props.maxLength}
          showCount={props.showCount}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onPressEnter={props.onPressEnter}
          name={props.name}
          inputMode={props.inputMode}
          autoComplete="off"
          rows={props.rows}
          autoSize={props.autoSize}
          variant={props.variant}
        />
      );
    }

    const Component = props.type === "password" ? AntInput.Password : AntInput;
    return (
      <Component
        className={computedClassName}
        size={size as "small" | "middle" | "large"}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        allowClear={props.allowClear}
        id={props.id}
        maxLength={props.maxLength}
        prefix={props.prefix}
        suffix={props.suffix}
        showCount={props.showCount}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onPressEnter={props.onPressEnter}
        name={props.name}
        type={props.type}
        inputMode={props.inputMode}
        autoComplete="off"
      />
    );
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--foreground)",
          lineType: "solid",
          controlOutlineWidth: 1,
          borderRadius: 4,
          colorBorder: "var(--background)",
          padding: 16,
          controlHeight: 42,
          ...props.theme?.token,
        },
        components: {
          Input: {
            paddingInline: 16,
            paddingInlineSM: 16,
            borderRadius: 4,
            borderRadiusSM: 4,
            colorBgContainer: "var(--color-base-10)",
            activeBg: "var(--color-base-10)",
            colorText: "var(--color-base-dark)",
            colorTextPlaceholder: "var(--color-base-70)",
            activeBorderColor: "var(--color-base-dark)",
            hoverBg: "var(--color-base-10)",
            colorIcon: "var(--color-base-dark)",
            hoverBorderColor: "var(--color-base-dark)",
            colorBgContainerDisabled: "var(--color-base-30)",
            colorTextDisabled: "var(--color-base-70)",
            colorErrorBg: "var(--color-warning-default)",
            colorErrorOutline: "var(--color-warning-default)",
            controlOutline: "var(--color-base-30)",
            fontSize: 16,
            colorTextLabel: "var(--color-base)",
            controlHeightSM: 42,
          },
        },
      }}
    >
      {props.label && (
        <label
          htmlFor={props.id}
          className="block w-full text-left !text-base !font-bold font-sans"
        >
          {props.label}
          {props.required && <span className="text-warning ml-1">*</span>}
        </label>
      )}

      {props.descriptiveLabel && (
        <h6 className="pb-1 text-xs font-normal md:pb-3">
          {props.descriptiveLabel}
        </h6>
      )}

      {renderInput()}

      {props.suffixLabel && (
        <span className="input-suffix" style={{ marginLeft: "8px" }}>
          {props.suffixLabel}
        </span>
      )}

      {props.errorMessage && (
        <div className="py-2 text-xs font-medium text-secondary">
          {props.errorMessage}
        </div>
      )}
    </ConfigProvider>
  );
};

export interface SearchInputProps extends InputProps {
  enterButton?: false | React.ReactNode;
  loading?: boolean;
  onSearch?: (value: string) => void;
}

const { Search } = AntInput;

export const SearchInput: React.FC<SearchInputProps> = ({
  size = "middle",
  className,
  onChange,
  value,
  enterButton = false,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--foreground)",
          lineType: "solid",
          colorBgContainer: "var(--color-base-10)",
          controlOutlineWidth: 1,
          borderRadius: 4,
          colorBorder: "var(--background)",
          ...props.theme?.token,
        },
        components: {
          Input: {
            paddingInline: 16,
            paddingInlineSM: 16,
            borderRadius: 4,
            borderRadiusSM: 4,
            colorBgContainer: "var(--color-base-10)",
            activeBg: "var(--color-base-10)",
            colorText: "var(--color-base-dark)",
            colorTextPlaceholder: "var(--color-base-70)",
            activeBorderColor: "var(--color-base-dark)",
            hoverBg: "var(--color-base-10)",
            colorIcon: "var(--color-base-dark)",
            hoverBorderColor: "var(--color-base-dark)",
            colorBgContainerDisabled: "var(--color-base-30)",
            colorTextDisabled: "var(--color-base-70)",
            colorErrorBg: "var(--color-warning-default)",
            colorErrorOutline: "var(--color-warning-default)",
            controlOutline: "var(--color-base-30)",
            fontSize: 16,
            colorTextLabel: "var(--color-base)",
            controlHeight: 50,
          },
        },
      }}
    >
      <Search
        className={`${className}`}
        size={size as "small" | "middle" | "large"}
        value={inputValue}
        onChange={handleInputChange}
        prefix={<SearchIcon />}
        enterButton={
          <button className="bg-background text-foreground px-6 py-2 rounded font-bold flex items-center gap-2 h-[50px]">
            検索
          </button>
        }
        {...props}
      />
    </ConfigProvider>
  );
};
