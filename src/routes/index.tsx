import Home from "../pages/home";
import LatestNews from "../pages/latest -news";
import Layout from "../layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "latest-news",
        element: <LatestNews />,
      },
    ],
  },
]);
