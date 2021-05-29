import { withDelay } from "@shared/hocs/withDelay";

export const LoginPage = withDelay(import(/* webpackChunkName: "Home" */ "@pages/login"));
export const HomePage = withDelay(import(/* webpackChunkName: "Home" */ "@pages/home"));
