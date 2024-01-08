import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageAuth from "./components/Layouts/PageAuth";

const router = createBrowserRouter([
  {
    path: "/al-quran/",
    element: <PageAuth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
