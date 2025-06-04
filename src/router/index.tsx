import { createBrowserRouter, Navigate } from "react-router";
import PathAndComponent from "./utils";
import Sidebar from "../layouts/sidebar.layout";
import * as routes from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Sidebar />,
    children: [
      PathAndComponent.create(routes.dashboard).isIndex(),
      PathAndComponent.create(routes.historic),
    ],
  },
  {
    path: "*",
    Component: () => <Navigate to="/dashboard" />,
  },
]);

export default router;
