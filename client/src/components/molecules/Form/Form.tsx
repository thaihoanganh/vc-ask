import React from "react";

export interface FormProps
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ ...otherProps }) => {
  return <form {...otherProps} />;
};

export default Form;
