import { createBrowserRouter } from "react-router";

import Layout from "../Layout/layout";
import Home from "../Pages/Home";
import Tasks from "@/Pages/Tasks";
import CompletedTasks from "@/Pages/CompletedTasks";

import AddUser from "@/modules/Users/AddUser";

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
        path: "user",
        Component: AddUser,
      },
    ],
  },
]);

export default router;
