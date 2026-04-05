import { createBrowserRouter, Navigate } from "react-router";
import PathAndComponent from "./utils";
import Sidebar from "../layouts/sidebar.layout";
import * as rt from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Navigate to="dashboard" />,
  },
  {
    path: "",
    Component: () => <Sidebar />,
    children: [
      PathAndComponent.create(rt.dashboard).isIndex(),
      PathAndComponent.create(rt.historic),
    ],
  },
]);

export default router;
