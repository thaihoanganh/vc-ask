import React from "react";

import View, { ViewProps } from "@components/atoms/View";

export interface LayoutProps extends ViewProps {}

export const Layout: React.FC<LayoutProps> = ({ children, ...otherProps }) => {
  return (
    <View className="relative min-h-screen" color="secondary" {...otherProps}>
      {children}
    </View>
  );
};

export default Layout;
