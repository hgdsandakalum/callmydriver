import React from "react";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { className = "", ...rest } = props;
  return <div className={`px-6 pt-6 pb-2 ${className}`} {...rest} />;
};

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props
) => {
  const { className = "", ...rest } = props;
  return <h3 className={`text-lg font-semibold mb-2 ${className}`} {...rest} />;
};

export const CardDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = (props) => {
  const { className = "", ...rest } = props;
  return <p className={`text-gray-600 text-sm ${className}`} {...rest} />;
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { className = "", ...rest } = props;
  return <div className={`px-6 pb-6 ${className}`} {...rest} />;
};

export { Card } from "./Card";
