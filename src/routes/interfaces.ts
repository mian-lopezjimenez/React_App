import { FC } from "react";

export interface Link {
  isActive: boolean;
  isPending: boolean;
}

export interface Route {
  to: string;
  path: string;
  Component: FC;
  name: string;
  subRoutes?: Route[];
}
