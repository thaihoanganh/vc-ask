import React, { forwardRef } from "react";
import classnames from "classnames";

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, isLoading, fullWidth, ...otherProps }, ref) => {
    return (
      <button
        className={classnames(
          "px-4 py-2",
          "ring-gray-100 dark:ring-gray-800",
          "bg-gray-300 dark:bg-gray-600",
          "font-semibold text-black dark:text-white",
          "focus:outline-none focus:ring-2",
          "text-gray-900 dark:text-gray-100",
          "active:opacity-90",
          isLoading && "pointer-events-none",
          fullWidth && "w-full",
          className
        )}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
