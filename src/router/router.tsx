import { createBrowserRouter } from "react-router";

import Home from "../pages/Home.tsx"
import ProjectDetails from "../pages/ProjectDetails.tsx";
import NotFound from "../pages/NotFound.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects/:projectID",
    Component: ProjectDetails,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);