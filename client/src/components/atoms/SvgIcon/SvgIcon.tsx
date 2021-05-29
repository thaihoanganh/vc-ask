import React from "react";
import classnames from "classnames";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  size?: "small" | "medium" | "large";
}

export const SvgIcon: React.FC<SvgIconProps> = ({ className, size = "medium", ...otherProps }) => {
  return (
    <svg
      className={classnames(
        "fill-current",
        "text-gray-900 dark:text-gray-100",
        size === "small" && "w-6 h-6",
        size === "medium" && "w-8 h-8",
        size === "large" && "w-10 h-10",
        className
      )}
      viewBox="0 0 24 24"
      {...otherProps}
    ></svg>
  );
};

export default SvgIcon;
