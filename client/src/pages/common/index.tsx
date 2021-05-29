import React from "react";

import Layout, { LayoutHeader } from "@components/templates/Layout";
import Header, { HeaderLogo, HeaderNav } from "@components/organisms/Header";

import { useRedirect, useTheme } from "@modules/app/hooks";

const PageCommon: React.FC = ({ children }) => {
  const { themeMode, onToggleTheme } = useTheme();
  const { onRedirectHome, onRedirectProfile } = useRedirect();

  return (
    <div>
      <Layout>
        <LayoutHeader>
          <Header>
            <HeaderLogo />
            <HeaderNav
              themeMode={themeMode}
              onToggleTheme={onToggleTheme}
              onRedirectHome={onRedirectHome}
              onRedirectProfile={onRedirectProfile}
            />
          </Header>
        </LayoutHeader>
        {children}
      </Layout>
    </div>
  );
};

export default PageCommon;
