import React from "react";
import AntModal from "antd/es/modal";
import { ConfigProvider } from "antd";

interface ModalProps {
  open?: boolean;
  closeIcon?: React.ReactNode;
  title?: React.ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  footer?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  confirmLoading?: boolean;
  closable?: boolean;
  centered?: boolean;
  loading?: boolean;
  style?: React.CSSProperties;
  width?: number;
  afterClose?: () => void;
  wrapClassName?: string;
  destroyOnClose?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> & {
  info: typeof AntModal.info;
  success: typeof AntModal.success;
  error: typeof AntModal.error;
  warning: typeof AntModal.warning;
  confirm: typeof AntModal.confirm;
} = ({ open, title, onCancel, onOk, centered = true, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            paddingContentHorizontal: 0,
            paddingContentVertical: 0,
          },
        },
      }}
    >
      <AntModal
        open={open}
        title={title}
        onCancel={onCancel}
        onOk={onOk}
        centered={centered}
        width={600}
        style={{ padding: 0, ...props.style }}
        {...props}
      >
        {props.children}
      </AntModal>
    </ConfigProvider>
  );
};

Modal.info = AntModal.info;
Modal.success = AntModal.success;
Modal.error = AntModal.error;
Modal.warning = AntModal.warning;
Modal.confirm = AntModal.confirm;
