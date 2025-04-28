import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../aboutus";
import Layout from "../layout";
import Homepage from "../homepage/HomePage";

export const userRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);