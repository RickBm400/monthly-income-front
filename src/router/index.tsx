import { createBrowserRouter, Navigate } from "react-router";
import pathAndComponent from "./utils";
import Sidebar from "../layouts/sidebar.layout";
import * as routes from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Sidebar />,
    children: [
      pathAndComponent(routes.dashboard, true),
      pathAndComponent(routes.historic),
    ],
  },
  {
    path: "*",
    Component: () => <Navigate to="/dashboard" />,
  },
]);

export default router;
