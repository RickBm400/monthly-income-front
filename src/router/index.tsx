import { createBrowserRouter, Navigate } from "react-router";
import pathAndComponent from "./router.utils";
import * as routes from "../pages";

const router = createBrowserRouter([
  pathAndComponent(routes.dashboard),
  pathAndComponent(routes.historic),
  {
    path: "*",
    Component: () => <Navigate to="/dashboard" />,
  },
]);

export default router;
