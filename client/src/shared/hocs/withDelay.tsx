import React, { lazy } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withDelay = (Component: React.ReactNode, delay = 1000) => {
  return lazy(() => {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve(Component), delay);
    });
  });
};

export default withDelay;
