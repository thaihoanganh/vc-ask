import React, { createElement } from "react";
import classnames from "classnames";

export interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  color?: "primary" | "secondary" | "hint" | "error";
  size?: "small" | "medium" | "large";
}

export const Text: React.FC<TextProps> = ({
  as = "span",
  className,
  children,
  color = "primary",
  size = "medium",
  ...otherProps
}) => {
  return createElement(
    as,
    {
      className: classnames(
        color === "primary" && "text-gray-900 dark:text-gray-100",
        color === "secondary" && "text-gray-600 dark:text-gray-300",
        color === "hint" && "text-green-600 dark:text-green-300",
        color === "error" && "text-red-600 dark:text-red-300",
        size === "small" && "text-xs",
        size === "medium" && "text-sm",
        size === "large" && "text-lg",
        className
      ),
      ...otherProps,
    },
    children
  );
};

export default Text;
