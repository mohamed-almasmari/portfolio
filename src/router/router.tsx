import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects/:projectID",
        Component: ProjectDetails,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);