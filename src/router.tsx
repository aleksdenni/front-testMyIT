import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Button from "@/components/button/button";
import Layout from "@/components/layout/layout";
import { SignInPage } from "@/pages/sign-in-page";
import { useMeQuery } from "@/services/auth/auth.api";

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: "/sign-in",
  },
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
  const { data, isLoading } = useMeQuery();

  if (isLoading) {
    return <span>loading</span>;
  }

  const isAuthenticated = !!data;

  return isAuthenticated ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
