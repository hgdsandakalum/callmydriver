import React from "react";
import { Form, Button, Space } from "antd";
import type {
  Rule as AntdRule,
  FormListFieldData,
  FormListOperation,
} from "antd/es/form";
// import { PlusIcon, MinusIcon } from "../../../../public/icons/icons";

const { List } = Form;

interface FormListProps {
  name: string;
  rules?: AntdRule[];
  children: (
    fields: FormListFieldData[],
    operation: FormListOperation,
    meta: {
      errors: React.ReactNode[];
      warnings: React.ReactNode[];
    }
  ) => React.ReactNode;
  addButtonText?: string;
  removeButtonText?: string;
  showAddButton?: boolean;
  showRemoveButton?: boolean;
  minItems?: number;
  maxItems?: number;
  className?: string;
  addButtonProps?: React.ComponentProps<typeof Button>;
  removeButtonProps?: React.ComponentProps<typeof Button>;
}

export const FormList: React.FC<FormListProps> = ({
  name,
  rules = [],
  children,
  addButtonText = "追加",
  removeButtonText = "削除",
  showAddButton = true,
  showRemoveButton = true,
  minItems = 0,
  maxItems,
  className,
  addButtonProps,
  removeButtonProps,
}) => {
  return (
    <List name={name}>
      {(fields, operation, meta) => (
        <div className="flex flex-col gap-4">
          {children(fields, operation, meta)}

          {showAddButton && (!maxItems || fields?.length < maxItems) && (
            <Button
              type="dashed"
              onClick={() => operation.add()}
              // icon={<PlusIcon />}
              className="w-full"
              {...addButtonProps}
            >
              {addButtonText}
            </Button>
          )}

          {showRemoveButton && fields?.length > minItems && (
            <Space className="w-full justify-end">
              {fields?.map((field) => (
                <Button
                  key={field.key}
                  type="text"
                  danger
                  // icon={<MinusIcon />}
                  onClick={() => operation?.remove(field?.name)}
                  {...removeButtonProps}
                >
                  {removeButtonText}
                </Button>
              ))}
            </Space>
          )}

          {meta?.errors?.length > 0 && (
            <div className="text-error text-sm">
              {meta?.errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}

          {meta?.warnings?.length > 0 && (
            <div className="text-warning text-sm">
              {meta?.warnings?.map((warning, index) => (
                <div key={index}>{warning}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </List>
  );
};
