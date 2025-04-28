import React from "react";
import { RouterProvider } from "react-router-dom";
import { userRoutes } from "./Routes";

export default function RouterView() {
  return <RouterProvider router={userRoutes} />;
}