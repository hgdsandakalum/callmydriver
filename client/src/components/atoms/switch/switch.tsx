import React from "react";
import AntSwitch from "antd/es/switch";
import { ConfigProvider } from "antd";

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "default";
  loading?: boolean;
  className?: string;
  label?: React.ReactNode;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = "default",
  loading = false,
  className = "",
  label,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--foreground)",
          borderRadius: 16,
        },
        components: {
          Switch: {
            colorPrimary: "var(--color-blue-dark)",
            colorPrimaryHover: "var(--color-blue-dark)",
            handleSize: size === "small" ? 16 : 22,
            trackHeight: size === "small" ? 20 : 28,
          },
        },
      }}
    >
      <label className={`inline-flex items-center gap-2 ${className}`}>
        <AntSwitch
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          size={size}
          loading={loading}
        />
        {label && <span>{label}</span>}
      </label>
    </ConfigProvider>
  );
};

Switch.displayName = "Switch";
