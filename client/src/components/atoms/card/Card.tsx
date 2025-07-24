import { Card as AntCard } from "antd";
import { CardProps } from "antd/lib/card";
import { ReactNode } from "react";

interface CustomCardProps extends CardProps {
  children: ReactNode;
}

export const Card = ({ children, className = "", ...props }: CustomCardProps) => {
  return (
    <AntCard
      className={`relative overflow-hidden h-full transition-all duration-300 hover:shadow-xl ${className}`}
      style={{
        background: "var(--color-base-10)",
        borderColor: "var(--color-base-30)",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </AntCard>
  );
}; 