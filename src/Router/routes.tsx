import { createBrowserRouter } from "react-router";

import Layout from "../Layout/layout";
import Home from "../Pages/Home";
import Tasks from "@/Pages/Tasks";
import CompletedTasks from "@/Pages/CompletedTasks";
import About from "@/Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
      {
        path: "completed-task",
        Component: CompletedTasks,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);

export default router;
