import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Button from "@/components/button/button";
import Layout from "@/components/layout/layout";

const publicRoutes: RouteObject[] = [
  {
    element: <Button />,
    path: "/sign-in",
  },
  // {
  //   element: <SignUp />,
  //   path: "/sign-up",
  // },
];

const privateRoutes: RouteObject[] = [
  {
    element: <Button />,
    path: "/",
  },
];

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
      {
        element: <h1>Not Found</h1>,
        path: "*",
      },
    ],
    element: <Layout />,
    path: "/",
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

function PrivateRoutes() {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
