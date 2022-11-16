import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

// 一级路由
const Layout = lazy(() => import("../pages/Layout"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/Login"));

// 二级路由
const Home = lazy(() => import("../pages/Home"));
const List = lazy(() => import("../pages/List"));

const routes: RouteObject[] = [
  {
    path: "/user",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "list",
        element: <List />,
      },
    ],
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/user/home" />,
  },
  {
    path: "/*",
    element: <Navigate to="/404" />,
  },
];

export default routes;
