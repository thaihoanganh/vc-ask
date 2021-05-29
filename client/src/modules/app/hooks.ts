import { readLocalStorage, writeLocalStorage } from "@shared/helpers/localStorage";
import { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router";

import { useAuth } from "@modules/auth/hooks";

export const useTheme = (): {
  themeMode: "light" | "dark";
  onToggleTheme: () => void;
} => {
  const [state, setState] = useState<{
    themeMode: "light" | "dark";
  }>({
    themeMode: "light",
  });

  useLayoutEffect(() => {
    const themeMode = readLocalStorage("themeMode");

    if (themeMode !== "light" && themeMode !== "dark") {
      return setState((prevState) => ({ ...prevState, themeMode: "light" }));
    }

    setState((prevState) => ({ ...prevState, themeMode: themeMode }));
  }, []);

  useLayoutEffect(() => {
    document.body.className = state.themeMode;
  }, [state.themeMode]);

  const onToggleTheme = (): void => {
    const setThemeMode = state.themeMode === "light" ? "dark" : "light";
    setState((prevState) => ({ ...prevState, themeMode: setThemeMode }));
    writeLocalStorage("themeMode", setThemeMode);
  };

  return {
    themeMode: state.themeMode,
    onToggleTheme,
  };
};

export const useRedirect = (): {
  onRedirectHome: () => void;
  onRedirectProfile: () => void;
} => {
  const history = useHistory();
  const { user } = useAuth();

  const onRedirectHome = (): void => {
    history.push("/");
  };
  const onRedirectProfile = (): void => {
    history.push(user.username ? "/profile" : "/login");
  };

  return { onRedirectHome, onRedirectProfile };
};
