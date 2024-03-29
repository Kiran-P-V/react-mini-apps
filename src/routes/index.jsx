import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard";
import TodoList from "../view/todoList";
import Calculator from "../view/calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // loader: rootLoader,
    children: [
      {
        path: "to-do-list",
        element: <TodoList />,
        // loader: teamLoader,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
    ],
  },
]);

export default router;