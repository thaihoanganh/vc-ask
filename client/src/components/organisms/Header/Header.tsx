import React from "react";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div className="flex justify-between lg:w-960 h-full mx-auto px-2">{children}</div>;
};

export default Header;
