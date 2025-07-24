"use client";
import React from "react";
import { ConfigProvider } from "antd";
import AntTable from "antd/es/table";
import type { ColumnsType, TableProps } from "antd/es/table";
import type {
  SortOrder,
  SorterResult,
  TableRowSelection,
} from "antd/es/table/interface";
import { Loader } from "@/components/atoms/loader";
type Prop<T extends object> = {
  columns: ColumnsType<T>;
  dataSource: T[];
  pagination?: false | TableProps["pagination"];
  rowKey: string | ((record: T) => string);
  rowSelectionType?: "checkbox" | "radio";
  onRowSelect?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  size?: "small" | "middle" | "large";
  bordered?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  loading?: boolean;
  rowHoverable?: boolean;
  showHeader?: boolean;
  className?: string;
  rowClassName?: string | ((record: T, index: number) => string);
  scroll?: {
    scrollToFirstRowOnChange?: boolean;
    x?: true | number | string;
    y?: number | string;
  };
  nullText?: string;
  onRow?: any;
  onChange?: (pagination: any, filters: any, sorter: any) => void;
  emptyText?: string;
  highlightLastRow?: boolean;
  rowSelection?: TableRowSelection;
  showSorterTooltip?: boolean;
  expandable?: TableProps<T>["expandable"];
};

export const Table = <T extends object>(props: Prop<T>) => {
  const {
    scroll = { x: "max-content" },
    nullText = " - ",
    highlightLastRow,
    ...otherProps
  } = props;

  const enhancedColumns = otherProps.columns.map((col) => {
    const baseColumn = {
      ...col,
      width: col.width,
      fixed: col.fixed,
      ellipsis: true,
      align: col.align || "left",
      sortDirections: ["ascend", "descend"] as SortOrder[],
      defaultSortOrder: col.defaultSortOrder,
    };

    if (!col.render) {
      return {
        ...baseColumn,
        render: (text: any) =>
          text === null || text === undefined || text === "" ? (
            <span className="text-gray-400">{nullText}</span>
          ) : (
            text
          ),
      };
    }

    return baseColumn;
  });

  const loadingConfig = props.loading
    ? {
        indicator: <Loader size="large" />,
        spinning: true,
      }
    : false;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "var(--color-foreground)",
          fontSize: 14,
          borderRadius: 6,
        },
        components: {
          Table: {
            headerBg: "var(--color-foreground)",
            headerColor: "#fff",
            fontWeightStrong: 400,
            fontSize: 12,
            rowHoverBg: "var(--color-base-30)",
            borderColor: "#ebd8d8",
            rowSelectedBg: "var(--color-primary-10)",
            rowSelectedHoverBg: "var(--color-base-70)",
            cellPaddingInline: 20,
            cellPaddingBlock: 12,
            cellPaddingInlineMD: 20,
            cellPaddingBlockMD: 12,
            cellFontSize: 13,
            cellFontSizeMD: 13,
            cellFontSizeSM: 13,
            colorText: "var(--color-base-dark)",
            headerBorderRadius: 0,
            colorIcon: "#fff",
            paddingContentVerticalLG: 16,
            bodySortBg: "undefined",
            headerSortActiveBg: "var(--color-base-70)",
            headerSortHoverBg: "var(--color-base-70)",
          },
        },
      }}
    >
      <AntTable<T>
        columns={enhancedColumns}
        className={otherProps.className}
        dataSource={otherProps.dataSource}
        scroll={scroll}
        rowKey={otherProps.rowKey}
        size={otherProps.size || "middle"}
        pagination={
          otherProps.pagination && {
            position: ["bottomRight"],
            showPrevNextJumpers: false,
            ...otherProps.pagination,
          }
        }
        bordered={otherProps.bordered}
        loading={loadingConfig}
        rowHoverable={otherProps.rowHoverable}
        onRow={props.onRow}
        showHeader={otherProps.showHeader}
        showSorterTooltip={props.showSorterTooltip}
        onChange={otherProps.onChange}
        rowSelection={props.rowSelection}
        expandable={props.expandable}
        sticky
        locale={{
          emptyText: props.emptyText ?? "",
          triggerAsc: "",
          triggerDesc: "",
          cancelSort: "",
        }}
        rowClassName={(record, index) => {
          const baseClass = "hover:bg-gray-50";
          const lastRowClass =
            highlightLastRow && index === otherProps.dataSource.length - 1
              ? "highlight-row"
              : "";
          return `${baseClass} ${lastRowClass} ${
            typeof otherProps.rowClassName === "function"
              ? otherProps.rowClassName(record, index)
              : otherProps.rowClassName || ""
          }`;
        }}
        {...(otherProps.rowSelectionType && {
          rowSelection: {
            type: otherProps.rowSelectionType,
            onChange: otherProps.onRowSelect,
            fixed: true,
          },
        })}
        {...(otherProps.footer && {
          footer: () => otherProps.footer,
        })}
        {...(otherProps.header && {
          title: () => otherProps.header,
        })}
      />
    </ConfigProvider>
  );
};

export { ColumnsType, SorterResult, TableRowSelection, TableProps };
