import React from "react";
import { ConfigProvider, Form, Tooltip } from "antd";
import { Rule } from "antd/es/form";
import dayjs from "dayjs";
// import { InfoCircleIcon } from "../../../../public/icons/icons";

const { Item } = Form;

interface FormItemProps {
  label?: string | React.ReactNode;
  name?: string | number;
  colon?: boolean;
  rules?: Rule[];
  dependencies?: string[];
  extra?: React.ReactNode;
  hidden?: boolean;
  initialValue?: string | string[] | boolean | dayjs.Dayjs | number;
  preserve?: boolean;
  required?: boolean;
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
  layout?: "horizontal" | "vertical";
  valuePropName?: string;
  children: React.ReactNode;
  validateFirst?: boolean | "parallel";
  validateTrigger?: string | string[];
  validateDebounce?: number;
  fullWidth?: boolean;
  className?: string;
  getValueFromEvent?: (e: unknown) => unknown;
  normalize?: (value: unknown) => string;
  tooltip?: string;
  help?: string;
  validateStatus?: "success" | "warning" | "error" | "validating";
  hasFeedback?: boolean;
  noStyle?: boolean;
}

export const FormItem: React.FC<FormItemProps> = ({
  colon = false,
  fullWidth = false,
  className,
  getValueFromEvent,
  tooltip,
  help,
  validateStatus,
  hasFeedback = false,
  noStyle = false,
  ...props
}) => {
  const renderLabel = () => {
    if (!props.label) return null;

    return (
      <div className="flex items-center gap-2">
        {props.label}
        {tooltip && (
          <Tooltip title={tooltip}>
            {/* <InfoCircleIcon className="text-gray-400 cursor-help" /> */}
            <span>test</span>
          </Tooltip>
        )}
      </div>
    );
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "var(--color-base-dark)",
            labelFontSize: 14,
            fontWeightStrong: 500,
            labelRequiredMarkColor: "var(--color-warning-default)",
            itemMarginBottom: 16,
          },
        },
      }}
    >
      <Item
        getValueFromEvent={getValueFromEvent}
        className={`${fullWidth ? " flex-1" : ""} ${className || ""}`}
        colon={colon}
        label={renderLabel()}
        help={help}
        validateStatus={validateStatus}
        hasFeedback={hasFeedback}
        noStyle={noStyle}
        {...props}
      >
        {props.children}
      </Item>
    </ConfigProvider>
  );
};
