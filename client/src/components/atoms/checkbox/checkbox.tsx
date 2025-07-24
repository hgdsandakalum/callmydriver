import React from "react";
import AntCheckbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { ConfigProvider } from "antd";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
  label?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  indeterminate = false,
  className = "",
  label,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--foreground)",
          borderRadius: 4,
        },
        components: {
          Checkbox: {
            colorPrimary: "var(--color-blue-dark)",
            colorPrimaryHover: "var(--color-blue-dark)",
            borderRadiusSM: 4,
          },
        },
      }}
    >
      <label className={`inline-flex items-center gap-2 ${className}`}>
        <AntCheckbox
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          indeterminate={indeterminate}
        />
        {label && <span>{label}</span>}
      </label>
    </ConfigProvider>
  );
};

Checkbox.displayName = "Checkbox";
