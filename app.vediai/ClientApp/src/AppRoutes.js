import React from "react";
import { Signin } from "./components/Signin";
import { Dashboard } from "./components/Dashboard/Dashboard";

const AppRoutes = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    index: false,
    element: <Signin />,
  },
];

export default AppRoutes;
