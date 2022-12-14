import React from "react";
import { Signin } from "./components/Signin";
import { Dashboard } from "./components/Dashboard/Dashboard";

const AppRoutes = [
  {
    index: false,
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    index: true,
    element: <Signin />,
  },
];

export default AppRoutes;
