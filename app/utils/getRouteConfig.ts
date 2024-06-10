// app/utils/getRouteConfig.ts
import { routesConfig, RouteConfig } from "../config/routesConfig";

export const getRouteConfig = (pathname: string): RouteConfig => {
  return routesConfig[pathname] || routesConfig["/"];
};
