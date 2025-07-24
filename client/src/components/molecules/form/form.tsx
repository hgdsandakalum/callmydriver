"use client";
import React, { useEffect } from "react";
import AntForm from "antd/es/form";
import { useForm } from "antd/es/form/Form";
import { ConfigProvider } from "antd";
import type { FormInstance } from "antd/es/form";
import { useMessage } from "@/components/atoms/message";

type FormLayout = "horizontal" | "vertical" | "inline";
type FormVariant = "outlined" | "filled" | "borderless";
type FormSize = "small" | "middle" | "large";

interface FormProps {
  disabled?: boolean;
  initialValues?: Record<string, any>;
  labelWrap?: boolean;
  labelCol?: { span?: number; offset?: number; flex?: string | number };
  wrapperCol?: { span?: number; offset?: number; flex?: string | number };
  layout?: FormLayout;
  name?: string;
  labelAlign?: "left" | "right";
  preserve?: boolean;
  scrollToFirstError?: boolean;
  size?: FormSize;
  variant?: FormVariant;
  onFieldsChange?: (changedFields: any[], allFields: any[]) => void;
  onFinish?: (values: any) => void;
  onFinishFailed?: (errorInfo: any) => void;
  onValuesChange?: (changedValues?: any, allValues?: any) => void;
  clearOnDestroy?: boolean;
  validateMessages?: any;
  form?: FormInstance;
  children: React.ReactNode;
  requiredMark?: boolean;
  validateTrigger?: string | string[];
  className?: string;
  onKeyPress?: (e?: any) => void;
  showSuccessMessage?: boolean;
  successMessage?: string;
  showErrorMessage?: boolean;
  errorMessage?: string;
  autoComplete?: "on" | "off";
}

export const Form: React.FC<FormProps> = ({
  variant = "outlined",
  layout = "vertical",
  showSuccessMessage = true,
  successMessage = "フォームが正常に送信されました",
  showErrorMessage = true,
  errorMessage = "フォームの送信に失敗しました",
  ...props
}) => {
  const [myform] = useForm();
  const message = useMessage();

  useEffect(() => {
    if (props.initialValues) {
      myform.setFieldsValue(props.initialValues);
    }
  }, [props.initialValues, myform]);

  const handleFinish = async (values: any) => {
    try {
      await props.onFinish?.(values);
      if (showSuccessMessage) {
        message.success(successMessage);
      }
    } catch (error) {
      if (showErrorMessage) {
        message.error(errorMessage);
      }
      console.error("Form submission error:", error);
    }
  };

  const handleFinishFailed = (errorInfo: any) => {
    props.onFinishFailed?.(errorInfo);
    if (showErrorMessage) {
      message.error("入力内容を確認してください");
    }
  };

  const Label: React.FC<{
    label: React.ReactNode;
    required?: boolean;
    layout?: FormLayout;
  }> = React.memo(({ label, required, layout }) => (
    <div className="flex items-center gap-x-2">
      <div
        className={`text-[15px] font-noto-sans-jp font-bold leading-[1.4] text-left no-underline decoration-skip-ink`}
      >
        {label}
      </div>
      {required && <span className="text-warning ml-0.5">*</span>}
    </div>
  ));

  Label.displayName = "FormLabel";

  const requiredMarkRender = (
    label: React.ReactNode,
    { required }: { required?: boolean }
  ) => <Label label={label} required={required} layout={layout} />;

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "var(--color-base-dark)",
            labelFontSize: 14,
            fontWeightStrong: 500,
          },
        },
      }}
    >
      <AntForm
        form={props.form ? props.form : myform}
        initialValues={props.initialValues}
        className={
          props.className ? props.className : "w-full flex flex-col gap-2"
        }
        layout={layout}
        variant={variant}
        scrollToFirstError
        requiredMark={requiredMarkRender}
        onKeyDown={props.onKeyPress}
        onChange={props.onValuesChange}
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        autoComplete="off"
        disabled={props.disabled}
      >
        {props.children}
      </AntForm>
    </ConfigProvider>
  );
};

export { useForm };
