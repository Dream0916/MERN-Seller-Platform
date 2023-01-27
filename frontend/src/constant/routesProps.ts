import React from "react";

type ROUTES = {
  name: string;
  path: string;
  component: React.FC;
  exact?: boolean;
  role?: string;
  auth?: boolean;
};

const routesProps: ROUTES[] = [
  {
    name: "login",
    path: "/",
    component: React.lazy(() => import("pages/auth/Login")),
    exact: true,
    role: "guest",
    auth: false,
  },
  {
    name: "login",
    path: "/login",
    component: React.lazy(() => import("pages/auth/Login")),
    exact: true,
    role: "guest",
    auth: false,
  },
  {
    name: "register",
    path: "/register",
    component: React.lazy(() => import("pages/auth/Register")),
    exact: true,
    role: "guest",
    auth: false,
  },
  {
    name: "Seller",
    path: "/seller",
    component: React.lazy(() => import("pages/seller/Seller")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "403",
    path: "/403",
    component: React.lazy(() => import("pages/403/403")),
    exact: true,
    role: "user",
    auth: true,
  },
  {
    name: "users",
    path: "/users",
    component: React.lazy(() => import("pages/admin/Users")),
    exact: true,
    role: "admin",
    auth: true,
  },
  {
    name: "reseller",
    path: "/reseller",
    component: React.lazy(() => import("pages/admin/Reseller")),
    exact: true,
    role: "admin",
    auth: true,
  },
  {
    name: "credits",
    path: "/credits",
    component: React.lazy(() => import("pages/credits/Credits")),
    exact: true,
    role: "admin",
    auth: true,
  },
  {
    name: "notfound",
    path: "*",
    component: React.lazy(() => import("pages/not-found/NotFound")),
  },
];

export default routesProps;
