import React, { createElement } from "react";
import classnames from "classnames";

export interface ViewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  bordered?: boolean;
  color?: "primary" | "secondary" | "hint" | "overlay";
}

export const View: React.FC<ViewProps> = ({ as = "div", bordered, className, children, color, ...otherProps }) => {
  return createElement(
    as,
    {
      className: classnames(
        color === "primary" && "bg-gray-50 dark:bg-gray-900",
        color === "secondary" && "bg-gray-200 dark:bg-gray-800",
        color === "hint" && "bg-green-300 dark:bg-green-600",
        color === "overlay" && "bg-overlay-dark dark:bg-overlay-light",
        bordered && "border border-gray-300 dark:border-gray-700",
        className
      ),
      ...otherProps,
    },
    children
  );
};

export default View;
