import React, { forwardRef } from "react";
import classnames from "classnames";

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isError?: boolean;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, isError, fullWidth, ...otherProps }, ref) => {
    return (
      <input
        className={classnames(
          "px-4 py-2",
          "border border-gray-300 dark:border-gray-600",
          "ring-gray-100 dark:ring-gray-800",
          "bg-gray-50 dark:bg-gray-900",
          "text-gray-900 dark:text-gray-100",
          "focus:ring-1 focus:outline-none",
          disabled && "bg-gray-100 dark:bg-gray-800",
          !disabled && isError && "border-red-600 dark:border-red-300 ring-red-200 dark:ring-red-700",
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

Input.displayName = "Input";

export default Input;
