import React from "react";

import View, { ViewProps } from "@components/atoms/View";

export interface LayoutHeaderProps extends ViewProps {}

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({ children, ...otherProps }) => {
  return (
    <View className="sticky top-0 z-10 h-14 border-t-0 border-r-0 border-l-0" color="primary" bordered {...otherProps}>
      {children}
    </View>
  );
};

export default LayoutHeader;
