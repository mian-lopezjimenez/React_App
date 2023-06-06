import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import { Route } from "./interfaces";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "Lazy Layout - Dash",
    subRoutes: [
      {
        to: "/lazyload/page1",
        path: "page1",
        Component: LazyPage1,
        name: "Lazy Page 1",
      },
      {
        to: "/lazyload/page2",
        path: "page2",
        Component: LazyPage2,
        name: "Lazy Page 2",
      },
      {
        to: "/lazyload/page3",
        path: "page3",
        Component: LazyPage3,
        name: "Lazy Page 3",
      },
    ],
  },
  {
    to: "/nolazy",
    path: "nolazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
