import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { AppLayout } from "@/layouts";
import { MainPage } from "@/pages/main-page";
import { SignInPage } from "@/pages/sign-in-page";
import { SignUpPage } from "@/pages/sign-up-page";
import { useMeQuery } from "@/services/auth/auth.api";

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: "/sign-in",
  },
  {
    element: <SignUpPage />,
    path: "/sign-up",
  },
];

const privateRoutes: RouteObject[] = [
  {
    element: <MainPage />,
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
    element: <AppLayout />,
    errorElement: <div>Oooops Error</div>,
    path: "/",
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery();

  if (isLoading) {
    return <span>loading</span>;
  }

  const isAuthenticated = !isError;

  return isAuthenticated ? <Outlet /> : <Navigate replace to={"/sign-in"} />;
}
