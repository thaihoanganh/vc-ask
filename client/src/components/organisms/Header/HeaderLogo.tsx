import React from "react";

import Text from "@components/atoms/Text";

export interface HeaderLogoProps {}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ children }) => {
  return (
    <div className="flex items-center h-full">
      <Text className="text-2xl font-semibold" as="h1">
        {children || "VC-ASK"}
      </Text>
    </div>
  );
};

export default HeaderLogo;
