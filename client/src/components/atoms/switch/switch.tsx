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
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
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
  checkedChildren,
  unCheckedChildren,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--primary)",
          borderRadius: 16,
        },
        components: {
          Switch: {
            colorPrimary: "var(--primary-dark)",
            colorPrimaryHover: "var(--primary-dark)",
            handleSize: size === "small" ? 16 : 18,
            trackHeight: size === "small" ? 20 : 22,
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
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
        />
        {label && <span>{label}</span>}
      </label>
    </ConfigProvider>
  );
};

Switch.displayName = "Switch";
