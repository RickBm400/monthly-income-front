import { createBrowserRouter } from "react-router";
import * as routes from "../pages";
import pathAndComponent from "./router.utils";

const router = createBrowserRouter([pathAndComponent(routes.dashboard)]);

export default router;
