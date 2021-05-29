import React, { isValidElement, cloneElement } from "react";
import classnames from "classnames";

import Text from "@components/atoms/Text";

export interface FormControlProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string;
  errorMessage?: string;
}

export const FormControl: React.FC<FormControlProps> = ({
  className,
  children,
  label,
  errorMessage,
  ...otherProps
}) => {
  return (
    <div className={classnames("m-2", className)} {...otherProps}>
      <Text className="h-6" as="div" color={errorMessage ? "error" : "primary"}>
        {label}
      </Text>
      {isValidElement(children) && cloneElement(children, { isError: Boolean(errorMessage) })}
      <Text className="h-4 text-xs" as="div" color={errorMessage ? "error" : "primary"}>
        {errorMessage}
      </Text>
    </div>
  );
};

export default FormControl;
