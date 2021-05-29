import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./bundles";

import HomePageLoading from "@pages/home/Loading";

import LoginPage from "@pages/login";

const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/">
          <Suspense fallback={<HomePageLoading />}>
            <HomePage />
          </Suspense>
        </Route>
      </Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
    </React.Fragment>
  );
};

export default Routes;
